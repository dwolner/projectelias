const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const Parser = require('rss-parser');
const cron = require('node-cron');

const app = express()

let instaFeed = null

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    next()
})

app.get('/', (req, res) => {
    res.send("api online!")
})

app.get('/listings', (req, res) => {
    axios.post('https://www.compass.com/api/v3/listings/search/list/relations', {
            searchQuery: {
                start: 0,
                num: 24,
                sortOrder: 90,
                listingTypes: [2],
                agentSearch: true,
                saleStatuses: [9, 12],
                geography: 'san_diego',
                listingDetailsAllowPartialMatch: {
                    'Agent Name': {
                        listValues: ['richard elias']
                    }
                },
            },
            relationTypes: [0]
        })
        .then(response => {
            res.send({ success: true, body: response.data })
        })
        .catch(error => {
            console.log(error)
            res.send({
                success: false,
                body: error
            })
        })
})

app.get('/newsFeed', (req, res) => {
    let rssURL = 'https://www.simplifyingthemarket.com/en/feed/?a=35238-70afc3829d7f0cdac24400a255ace4ba'
    console.log(rssURL)

    let parser = new Parser();

    parser.parseURL(rssURL, (err, feed) => {
        console.log('NEWS FEED: ')
        console.log(feed.title)

        if (err) {
            res.send({
                success: false,
                body: err
            })
        } else {
            res.send({
                success: true,
                body: feed
            })
        }
    })
})

app.get('/instaFeed', (req, res) => {
    console.log('instaFeed: ' + instaFeed)

    res.send({
        success: instaFeed ? true : false,
        body: instaFeed
    })
})

app.post('/contact', (req, expressRes) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail', //smtp.gmail.com  //in place of service use host...
        secure: false, //true
        port: 25, //465
        auth: {
            user: 'richardeliasbot01@gmail.com',
            pass: 'richardbot1'
        }, 
        tls: {
            rejectUnauthorized: false
        }
    })

    const mailOptions = {
        to: ['richard@richardelias.com', 'xxatticus@gmail.com'],
        from: `${ req.body.email }`,
        subject: `A new lead from RichardElias.com! ${ req.body.name }`,
        text: `A new lead from RichardElias.com! This is a reminder to email ${ req.body.name } (${ req.body.email }) ${ req.body.zip } about their inquiry. Courtesy of your friendly RichardElias.com email bot!`,
        html: `
            <h2>A new lead from RichardElias.com!</h2>
            <p>This is a reminder to email <strong>${ req.body.name }</strong> about their inquiry.</p>

            <p>Name: <strong>${ req.body.name }</strong></p> 
            <p>Email: <strong>${ req.body.email }</strong></p> 
            <p>#: <strong>${ req.body.phone }</strong></p> 
            <p>Zip: <strong>${ req.body.zip }</strong></p> 
            <p>Type: <strong>${ req.body.type }</strong></p> 
            <br /><br />
            <p>Courtesy of your friendly RichardElias.com email bot!</p>
        `,
        replyTo: `${ req.body.email }`
    }

    transporter.sendMail(mailOptions, (err, res) => {
        if (err) {
            console.error('there was an error: ', err)
            expressRes.send({
                success: false,
                message: 'there was an error sending the email'
            })
        } else {
            console.log('here is the res: ', res)
            expressRes.send({
                success: true,
                message: 'sent email!',
                body: res
            })
        }
    })
})

const PORT = 3001
app.listen(PORT, () => console.log(`listening on ${PORT}`))

cron.schedule(' 30 7 * * * ', () => {
    console.log('Running Insta Feed Refresh: ' + instaToken)

    axios.get(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,timestamp&access_token=${ instaToken }`)
        .then(response => {
            if (response.data) {
                instaFeed = response.data.data
            }
        })
        .catch(error => {
            console.log('Running Insta Feed ERROR: ' + error)
        })
})

let instaToken = 'IGQVJXMHE5ZAC00RDhCQzU0bUVmeXk2NDdsTVlPRVdsTF9qeUQzM3VmYXl4cWRhOGlDbG9MQ2dueU5yREpEcEVkdVJuZAHNCNW9Gd0VVc252aVpNNWJpNDI5MGpJcG9rOUFoQ3NDbjl3'
cron.schedule(' * * 15 * * ', () => {
    console.log('Running Insta Token Refresh: ' + instaToken)

    axios.get(`https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${ instaToken }`)
    .then(response => {
        // {
        //     "access_token": "{long-lived-user-access-token}",
        //     "token_type": "bearer",
        //     "expires_in": 5183944 // Number of seconds until token expires
        // }
        
        if (response.data) instaToken = response.data.access_token
    })
    .catch(error => {
        console.log('Running Insta Token ERROR: ' + error)
    })
})