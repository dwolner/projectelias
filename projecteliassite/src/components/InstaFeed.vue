<template>
    <div id="instafeed" style="width: 100%;position: relative;">
        <div style="position: absolute; right: 0; z-index: 999; height: 100%;">
            <q-btn @click="scrollFeed()" style="padding: .5rem 0; background: rgba(0, 0, 0, .5); height: 100%;">
                <q-icon :name="`fas fa-chevron-right`" color="white" />
            </q-btn>
        </div>
        <div id="scroller" style="width: 100%; overflow-x: auto; position: relative;">
            <div style="width: max-content;">
                <div
                    class="cursor-pointer relative-position"
                    :style="`height: ${$q.screen.width > 1024 ? '300' : '150'}px; width: ${$q.screen.width > 1024 ? '300' : '150'}px; float: left; overflow: hidden;`"
                >
                    <div class="centerHeader" align="center" :style="`width: 100%; padding: ${$q.screen.width > 1024 ? '1rem 2.5rem' : '.6rem'};`" @click="selectItem()">
                        <q-icon class="text-grey q-mb-lg" name="fab fa-instagram" size="lg" />
                        <p align="center" class="text-grey" :style="`font-size: ${$q.screen.width > 1024 ? '1' : '.9'}rem; margin: 0;`">
                            Follow Us on Instagram
                        </p>
                    </div>
                </div>
                <div
                    v-for="(item, index) in feed"
                    class="cursor-pointer"
                    :style="`height: ${$q.screen.width > 1024 ? '300' : '150'}px; width: ${$q.screen.width > 1024 ? '300' : '150'}px; float: left; overflow: hidden;`"
                    @mouseover="hoverVideoInsta(item)"
                    @mouseleave="leaveVideoInsta(item)"
                >
                    <div class="relative-position" style="height: 100%;">
                        <video v-if="item.media_type === 'VIDEO'" :id="`instaVideo_${item.id}`" :src="`${item.media_url}`" preload="metadata" loop="loop" muted playsinline style="height: 100%;" />

                        <img v-else :src="`${item.media_url}`" style="width: 100%;" />

                        <div class="absolute" style="bottom: 0; right: 0; z-index: 999;">
                            <q-btn style="padding: .5rem 0; background: rgba(0, 0, 0, .25);" @click="selectItem(item)">
                                <q-icon :name="`fas ${item.media_type === 'VIDEO' ? 'fa-play' : 'fa-image'}`" color="white" />
                            </q-btn>
                        </div>

                        <div class="centerHeaderHold" :style="`padding: ${$q.screen.width > 1024 ? '1.5rem' : '.3rem'};`">
                            <div :style="`border: solid ${$q.screen.width > 1024 ? '2' : '1'}px white; height: 100%;`">
                                <div class="centerHeader" :style="`padding: ${$q.screen.width > 1024 ? '1rem 2.5rem' : '.6rem'};`">
                                    <p align="center" class="text-white" :style="`font-size: ${$q.screen.width > 1024 ? '1' : '.6'}rem; margin: 0;`">{{ item.caption.substring(0, 200) }}...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
    name: 'InstaFeed',

    data() {
        return {
            feed: [],
            accessToken: 'IGQVJWY19NTFZAqcDQ4M2hyZAEtUdTA0dVJvQmprRGJFbXVmTi1DRjNURlFkSWRuQ0VGMUtyTldEQ1pUOHNsdExMUFFBaU8zTjRsMEZAFOTRiWm5FUVJjMEJGSWVNMmdJTkg2b1N6WGVsRklDZAnY3NXJIek1BcGZAtNGF1bnow',
        }
    },

    methods: {
        getInstaFeed(cb) {
            this.api.get(`https://graph.instagram.com/me/media?fields=id,caption&access_token=${this.accessToken}`, res => {
                console.log('getInstaFeed: ', res)
                cb(res)
            })
        },

        getMediaForInstaID(id, cb) {
            this.api.get(`https://graph.instagram.com/${id}?fields=id,media_type,media_url,username,timestamp&access_token=${this.accessToken}`, res => {
                console.log('getMediaForInstaID: ', res)
                cb(res)
            })
        },

        hoverVideoInsta(item) {
            console.log('hoverVideoInsta: ', item)
            if (item.media_type === 'VIDEO') document.getElementById(`instaVideo_${item.id}`).play()
        },

        leaveVideoInsta(item) {
            console.log('leaveVideoInsta: ', item)
            if (item.media_type === 'VIDEO') document.getElementById(`instaVideo_${item.id}`).pause()
        },

        selectItem(item) {
            window.open(`https://www.instagram.com/richardeliasteam/`, '_blank')
            // window.open(`https://www.instagram.com/p/${ item.id }/`, '_blank')
        },

        scrollFeed(id, extraOffset) {
            var elmnt = document.getElementById('scroller')
            elmnt.scroll({
                top: 0,
                left: (elmnt.scrollLeft += 300),
                behavior: 'smooth',
            })
        },
    },

    watch: {
        feed() {
            console.log('FEED: ', this.feed)
        },
    },

    created() {
        // this.getInstaFeed((res) => {
        //     res.data.forEach(item => {
        //         this.getMediaForInstaID(item.id, (res) => {
        //             console.log(res)
        //             item = { ...item, ...res }
        //             this.feed.push(item)
        //         })
        //     })
        // })

        this.feed = dummyData.sort((a, b) => {
            return dayjs(b.timestamp).valueOf() - dayjs(a.timestamp).valueOf()
        })
    },
}

let dummyData = [
    {
        id: '17856407920781501',
        caption:
            "🗣️ Exceptional opportunity to live in the highly coveted neighborhood of Point Loma in La Playa Cove complex! Imagine the early morning or evening strolls you could take in this bayfront neighborhood! Mostly residential with two yacht clubs, so not a lot of traffic. A tranquil, corner end unit with spectacular views of downtown and panoramic bay views! ⠀\n⠀\nThis home is a must-see! Move-in ready with 3 beds, 2 baths, and 1,346 SQFT!⠀\n⠀\nWant to see this amazing home in person? 📥 Message us @richardeliasteam now to schedule a private showing. Don't wait, this opportunity will not last! ⠀\n⠀\nRichard Elias⠀\nCompass ⠀\nCA DRE #01104411",
        media_type: 'VIDEO',
        media_url:
            'https://scontent.xx.fbcdn.net/v/t50.31694-16/87564909_641529103317140_6497801181972876089_n.mp4?_nc_cat=103&_nc_sid=8ae9d6&_nc_ohc=eRBP7r6iWmMAX9nr3UP&_nc_ht=scontent.xx&oh=ebb7186d4d95e28b5a22c57fbf4443db&oe=5E829740',
        username: 'richardeliasteam',
        timestamp: '2020-02-25T18:44:47+0000',
    },
    {
        id: '17844624571945302',
        caption:
            "Open House TODAY!⠀\n⠀\n📍 8940 McKinley Ct⠀\n⠀\nCome see this stunning 5 bed 4 bath in the highly desired La Mesa Meadows Community! ⠀\n⠀\nThis light and bright spacious floorplan allows for seamless entertaining and comfort, which you can view today!⠀\n⠀\nOpen House from 12:00-3:00⠀\n⠀\nCome see the gorgeous backyard with the built-in BBQ, firepit and hot tub, an entertainer's paradise. ⠀\n⠀\nMessage us now to learn more @richardeliasteam⠀\n⠀\nChristina Battikha - @cbattikha_realestate⠀\nCompass⠀\nDRE #01983805",
        media_type: 'IMAGE',
        media_url:
            'https://scontent.xx.fbcdn.net/v/t51.2885-15/84272501_124832749054840_3721261327999650580_n.jpg?_nc_cat=100&_nc_sid=8ae9d6&_nc_ohc=yBkxKxLcgAgAX9PPqzX&_nc_ht=scontent.xx&oh=8ff767110edef407e6e12407886a6cd9&oe=5E871473',
        username: 'richardeliasteam',
        timestamp: '2020-02-08T17:27:23+0000',
    },
    {
        id: '17847804514908927',
        caption: 'Surround yourself with a team that is helpful and adorable. 🤩',
        media_type: 'VIDEO',
        media_url:
            'https://scontent.xx.fbcdn.net/v/t50.31694-16/87606620_1398285423673504_6862674067535872225_n.mp4?_nc_cat=108&_nc_sid=8ae9d6&_nc_ohc=EDsto_ew_nQAX9RMByG&_nc_ht=scontent.xx&oh=a801179c4a78f03e64e57a7aa135f6d8&oe=5E83EF0E',
        username: 'richardeliasteam',
        timestamp: '2020-02-28T00:29:08+0000',
    },
    {
        id: '17875116499571098',
        caption:
            "Looking for a 5 bedroom home in a highly desired neighborhood?⠀\n⠀\nDon't miss the chance to see this La Mesa craftsman with:⠀\n✔️ Large Kitchen with walk-in pantry⠀\n✔️ Bonus Loft space with built-ins upstairs⠀\n✔️ Fully owned solar⠀\n✔️ Entertainer's Backyard [Built-in grill, firepit, hot tub & more]⠀\n⠀\nOpen House TOMORROW from 4:00-6:00, can't make it tomorrow? You have another chance to see this La Mesa gem on Saturday from 12:00-2:00⠀\n⠀\nWant to learn or see more? Message us now @richardeliasteam with any questions or comment below. ⠀\n⠀\nChristina Battikha - @cbattikha_realestate⠀⠀\nCompass⠀⠀\nDRE #01983805",
        media_type: 'VIDEO',
        media_url:
            'https://scontent.xx.fbcdn.net/v/t50.31694-16/88129413_513947466169967_7106645753066289486_n.mp4?_nc_cat=104&_nc_sid=8ae9d6&_nc_ohc=MS75rUiKtCYAX9zereC&_nc_ht=scontent.xx&oh=4a915081506a816e5aa126d08411c4bc&oe=5E9800A3',
        username: 'richardeliasteam',
        timestamp: '2020-02-27T19:08:14+0000',
    },
    {
        id: '17849168746812291',
        caption: 'One of the most glorious messes in the world is the mess created in the living room on Christmas Day.⠀\n⠀\nMerry Christmas to all! 🎄',
        media_type: 'VIDEO',
        media_url:
            'https://scontent.xx.fbcdn.net/v/t50.2886-16/81765721_2487661284824539_1134994177916637754_n.mp4?_nc_cat=108&_nc_sid=8ae9d6&_nc_ohc=7nyuPIAtDaEAX_rteUi&_nc_ht=scontent.xx&oh=6114e32d34162c0a8349ec385d4bb668&oe=5E879937',
        username: 'richardeliasteam',
        timestamp: '2019-12-25T15:18:52+0000',
    },
    {
        id: '18080851072181623',
        caption: "We hope you had a fun time with your loved ones yesterday. We've had a great year and are excited to see what 2020 brings! #throwbackthursday",
        media_type: 'IMAGE',
        media_url:
            'https://scontent.xx.fbcdn.net/v/t51.2885-15/72342729_185641929256433_7213451088990224102_n.jpg?_nc_cat=107&_nc_sid=8ae9d6&_nc_ohc=246fTQtxLycAX8LUb0G&_nc_ht=scontent.xx&oh=9b0efb7b872179e1dd738e27be4b2cf5&oe=5E98F4BC',
        username: 'richardeliasteam',
        timestamp: '2019-12-26T17:31:02+0000',
    },
    {
        id: '17862951346686729',
        caption:
            'Spending your Sunday looking for your dream home?\n\nCheck out these amazing homes in various corners of San Diego.\n\nFirst head to Escondido:\n⭐️ 1806 Gamble Lane Open House 1:00-4:00\n4 Bed | 3 Bath\n\nThen venture down to Tierrasanta:\n⭐️ 10625 Montego Drive Open House 1:00-4:00\n6 Bed | 4 Bath\n\nEnd in beautiful La Mesa:\n⭐️ 8940 McKinley Court Open House 1:00-4:00\n5 Bed | 4 Bath\n\nMessage us now with any questions! @richardeliasteam',
        media_type: 'CAROUSEL_ALBUM',
        media_url:
            'https://scontent.xx.fbcdn.net/v/t51.2885-15/87237880_927175707697926_3292372568220140792_n.jpg?_nc_cat=111&_nc_sid=8ae9d6&_nc_ohc=ggj0qzvPPI8AX-c6hFs&_nc_ht=scontent.xx&oh=4af100f6128e9e7efcb7a1c47ceaf451&oe=5E825C61',
        username: 'richardeliasteam',
        timestamp: '2020-02-23T18:51:36+0000',
    },
    {
        id: '17881770676525438',
        caption:
            "Looking for your dream home? We have two stunning listings waiting on their perfect owners. Venture out this beautiful San Diego morning and visit their Open Houses. \nFirst, let's start in La Mesa:\n⭐️ 8940 McKinley Court Open House 12:00-2:00\n5 Bed | 4 Bath\n\nThen journey to Escondido to end the day:\n⭐️ 1806 Gamble Lane Open House 1:00-4:00\n4 Bed | 3 Bath\n\nMessage us now with any questions! @richardeliasteam",
        media_type: 'CAROUSEL_ALBUM',
        media_url:
            'https://scontent.xx.fbcdn.net/v/t51.2885-15/87567829_3358569514170191_8802599554407842652_n.jpg?_nc_cat=111&_nc_sid=8ae9d6&_nc_ohc=t_4ud61bnMQAX8ueVVk&_nc_ht=scontent.xx&oh=137fafbb1df29544526fc1a62413ec3d&oe=5E89C3CF',
        username: 'richardeliasteam',
        timestamp: '2020-02-29T16:55:28+0000',
    },
    {
        id: '18085976776137337',
        caption:
            '🤯🎅🏼 Woah! Just found out @amazon Alexa has an in with @santa \nWe are definitely in the spirit in our household. 🎁❤️ Did you know you could call Santa on your @amazonfiretv ?? What other cool things can we be doing before the big Christmas Day? 🎄',
        media_type: 'VIDEO',
        media_url:
            'https://scontent.xx.fbcdn.net/v/t50.2886-16/81492149_556689441780248_2098296857991139607_n.mp4?_nc_cat=104&_nc_sid=8ae9d6&_nc_ohc=-cqgkwCZKaYAX_xDPOl&_nc_ht=scontent.xx&oh=deb1bed154d147b3b5b09654537fc817&oe=5E841F74',
        username: 'richardeliasteam',
        timestamp: '2019-12-22T23:55:29+0000',
    },
    {
        id: '17871244063546058',
        caption:
            'Why live in La Mesa?⠀\n(Save this post if La Mesa is a neighborhood you\'re interested in)⠀\n⠀\n#LaMesa is Centrally located in the rolling hills of San Diego County, known as the "Jewel of the Hill." 💎  A near-perfect climate, tree-lined streets, walkable neighborhoods, easy access to retail and commercial areas, and a quaint downtown village make La Mesa a highly desirable community in which to live! 🏡 ⠀\n⠀\nFull of history and charm, there is so much to love about La Mesa. It is all about discovering one-of-a-kind places tucked away in tree-lined neighborhoods. It’s about finding the friendly ambiance that hallmarks La Mesa as a small, picturesque city with lots of character. You are invited to experience the wealth of treasures that make up La Mesa with this gorgeous Craftsman home!⠀\n⠀\nA 5 bedroom 4 bathroom home situated in the highly desired La Mesa Meadows Community! Enter through to a light and bright spacious floor plan with a bedroom and full bath on the main floor. The living and family room provide for plenty of entertainment space with surround sound installed in the ceiling. Enter the large kitchen which features warm maple cabinets, granite countertops and backsplash, stainless steel appliances, full island, and walk-in pantry! The backyard is a true entertainer\'s delight featuring an outdoor built-in grill, waterfall, glass fire pit and a 6 person hot tub! 😍 ⠀\n⠀\nWant to learn more about this amazing opportunity? Message us @richardeliasteam or contact @cbattikha_realestate',
        media_type: 'IMAGE',
        media_url:
            'https://scontent.xx.fbcdn.net/v/l/t51.2885-15/79385083_168616464228523_2450867212698857302_n.jpg?_nc_cat=108&_nc_sid=8ae9d6&_nc_ohc=PrCfSZ0zqh0AX_Px991&_nc_ht=scontent.xx&oh=14e2ca5fd7895967e47fcf7821fbff12&oe=5E993D3D',
        username: 'richardeliasteam',
        timestamp: '2020-01-04T21:13:43+0000',
    },
    {
        id: '17849204692866963',
        caption:
            "We want to help you discover the ease of @Compass technology.⠀\n⠀\nWith Compass Collections, we help you keep track of homes you like and save them in one place, invite collaborators and leave comments, and receive automated updates about properties in real-time. ⠀\n⠀\nCollections is real estate's only visual workspace and serves as the central hub for your search. ⠀\n⠀\nWe are always working for you and trying to make the process to buy or sell a home as smooth as possible. 📲 Message us @richardeliasteam today to learn more about all the technology at our fingertips to help you!",
        media_type: 'VIDEO',
        media_url:
            'https://scontent.xx.fbcdn.net/v/t50.31694-16/84270840_800902747052763_5657600229865419903_n.mp4?_nc_cat=110&_nc_sid=8ae9d6&_nc_ohc=04Pjr13JIhUAX92N7x_&_nc_ht=scontent.xx&oh=9ad5971bb5132a353cf6b7d248df7018&oe=5E85E0E9',
        username: 'richardeliasteam',
        timestamp: '2020-01-30T17:31:52+0000',
    },
    {
        id: '17864289961669446',
        caption:
            "Always giving my clients the presidential treatment. 😉\n\nI know I've talked about Compass Concierge before but you have to hear this story. ✍️ My clients and I were out viewing homes and we were discussing their home going on the market soon. They needed some small updates done around the home and I told them about #CompassConcierge and what an amazing resource it is that @compass offers. Then, right in the back of my car, on my iPad, they looked up the service and applied then and there, and got approved! I was blown away! It was so quick and easy and just cemented my love for this incredible company. \nAre you ready to learn more about Compass Concierge and how we can help you get fronted the cost of home improvement services with no interest - EVER!? 📲 Message me today with questions! @richardeliasteam Or call/text 619.672.2020",
        media_type: 'VIDEO',
        media_url:
            'https://scontent.xx.fbcdn.net/v/t50.31694-16/86411924_2843593952350810_2379332409169365983_n.mp4?_nc_cat=105&_nc_sid=8ae9d6&_nc_ohc=nDq6N1V1l8kAX8hbLSQ&_nc_ht=scontent.xx&oh=4a1e9218a3749ec3959381900926d4be&oe=5E86B864',
        username: 'richardeliasteam',
        timestamp: '2020-02-17T01:07:15+0000',
    },
    {
        id: '17857203388678502',
        caption: 'Merry Christmas from the Elias Family and God Bless Everyone.',
        media_type: 'IMAGE',
        media_url:
            'https://scontent.xx.fbcdn.net/v/t51.2885-15/76984641_488180268475077_392810878967294619_n.jpg?_nc_cat=100&_nc_sid=8ae9d6&_nc_ohc=f7lBnvYQsjAAX90yxwZ&_nc_ht=scontent.xx&oh=f200058f3f3772b377f73509f4d097df&oe=5E87D0BA',
        username: 'richardeliasteam',
        timestamp: '2019-12-25T05:47:41+0000',
    },
    {
        id: '18019127533256400',
        caption:
            'Give a little swipe 👉\n\n5 Bed | 4 Bath | La Mesa\n\n8940 McKinley Ct is the place to be on January 11th from 2:00-4:00\n\nWant to know more about this amazing listing? Message us now @richardeliasteam or message the rockstar @cbattikha_realestate',
        media_type: 'CAROUSEL_ALBUM',
        media_url:
            'https://scontent.xx.fbcdn.net/v/t51.2885-15/80049770_2461165830800579_3945059186336127837_n.jpg?_nc_cat=110&_nc_sid=8ae9d6&_nc_ohc=XI6id6I_-loAX9ykJmR&_nc_ht=scontent.xx&oh=3e1b1acf2104829bf0cb7a65d199d042&oe=5E98F905',
        username: 'richardeliasteam',
        timestamp: '2020-01-10T16:59:47+0000',
    },
    {
        id: '17853201520828670',
        caption:
            "Last week you learned about me, now I want to introduce you to the powerhouse that is @cbattikha_realestate⠀⠀\n⠀\nHere are some things about Christina that you need to know!⠀\n1) She has been on the #RichardEliasTeam the longest and knows how to negotiate with her client's best interest in mind at all times. ⠀\n⠀\n2) Born and raised in #SanDiego she not only dominated as a real estate agent but loves watching all things real estate. #HGTV Who doesn't love Chip and Joanna? 😎⠀\n⠀\n3) She just celebrated the most magical birthday and got engaged to the love of her life @cmeno_realestate ♥️⠀\n⠀\nWant to know more about this amazing, driven and caring woman on the team? Follow her on social media @cbattikha_realestate or contact her if you think she is the perfect realtor for you! ⠀\n⠀\nChristina@richardelias.com⠀\n619.504.9236",
        media_type: 'IMAGE',
        media_url:
            'https://scontent.xx.fbcdn.net/v/t51.2885-15/84464376_875395672910492_6148054527058419722_n.jpg?_nc_cat=107&_nc_sid=8ae9d6&_nc_ohc=eEJ8PEve8HoAX-4TFiT&_nc_ht=scontent.xx&oh=43295ebb164663f0c46ecf5a6753400b&oe=5E84EF00',
        username: 'richardeliasteam',
        timestamp: '2020-02-11T02:03:19+0000',
    },
    {
        id: '17853336724775688',
        caption:
            "🗣 Just Listed Santee home ready for its new owners!⠀\nCreate beautiful memories in this inviting and updated 4 bedroom, 2 bath home! ⠀\n⠀\nThis gem is tucked away on a quiet cul de sac, situated on a 1/4 acre lot with room to park an RV and Boat. ⠀\nThe home feels clean and welcoming with newer flooring, recess lighting, and dual-paned windows throughout. The granite countertops in the kitchen will complement your baking experience and the space is perfect for cooking big meals or having the counter space to prep your weeknight dinners.⠀\n⠀\nThe master bedroom is equipped with an IKEA closet system and the master bath has been beautifully remodeled. A comfy retreat after a long day. ⠀\n⠀\nThe backyard is where this home shines 🤩 Your summer BBQs will be much more with this well-manicured yard! Enjoy a dip in the pool or relax in the shade☀️⠀\n⠀\nWant to learn more? Message us today and we will be happy to arrange a private showing! Don't wait on this great neighborhood home. ⠀\n⠀\n📹 @curb360inc",
        media_type: 'VIDEO',
        media_url:
            'https://scontent.xx.fbcdn.net/v/t50.31694-16/83713290_591905191390154_3373842165615250514_n.mp4?_nc_cat=101&_nc_sid=8ae9d6&_nc_ohc=-dUM10EnYYIAX85MV85&_nc_ht=scontent.xx&oh=3966d374bda6c7d2576163b52d4afb04&oe=5E86B94C',
        username: 'richardeliasteam',
        timestamp: '2020-01-18T16:28:46+0000',
    },
    {
        id: '18023168158256689',
        caption:
            "Centrally located in the rolling hills of San Diego County is La Mesa. Near a myriad of shopping, restaurants, parks and so much more. #LaMesa is a great place to live!⁠⠀\n⁠⠀\nCome see this highly desired La Mesa Meadows Community 5 bed, 4 bath home at $875,000 on a 6,684 sqft lot.⁠⠀\n⁠⠀\nA Must-See!! Don't miss the opportunity to see the #OpenHouse this weekend Saturday, February 22nd from 1:00-3:00⁠⠀\n⁠⠀\nWant to know more? Message us now @richardeliasteam⁠ or message @cbattikha_realestate⠀\n⠀\nChristina Battikha⠀\nCompass⠀\nDRE #01983805",
        media_type: 'VIDEO',
        media_url:
            'https://scontent.xx.fbcdn.net/v/t50.31694-16/87798108_490291981640544_6763781175949438445_n.mp4?_nc_cat=107&_nc_sid=8ae9d6&_nc_ohc=K7cTse-AOaMAX8o6DEq&_nc_ht=scontent.xx&oh=8953657c65852095b9906f0ab3058d56&oe=5E81BA88',
        username: 'richardeliasteam',
        timestamp: '2020-02-20T23:01:53+0000',
    },
    {
        id: '17870247223582376',
        caption:
            'If you are looking for a perfect starter or investment home, then boy do we have a home for you! ⠀\n⠀\nFall in love with this super charming starter home in North Park. This neighborhood is crawling with historic gems just asking for fixer-upper owners, and this home has endless possibilities! With some fresh paint and creativity, this home will accommodate your need for your very own tranquil retreat 🌱⠀\n⠀\nDon’t miss out on this exceptional opportunity! Message us today! @richardeliasteam⠀\n⠀\nRichard Elias - 619.672.2020⠀\nCompass ⠀\nCA DRE #01104411',
        media_type: 'IMAGE',
        media_url:
            'https://scontent.xx.fbcdn.net/v/t51.2885-15/82912137_181091379619308_1375016436223872144_n.jpg?_nc_cat=108&_nc_sid=8ae9d6&_nc_ohc=eOvRkaY99MUAX_l3wOV&_nc_ht=scontent.xx&oh=400a8298cb534e199c16b4c317157248&oe=5E82D911',
        username: 'richardeliasteam',
        timestamp: '2020-01-29T15:28:06+0000',
    },
    {
        id: '18129248746026305',
        caption:
            "🗣️ Open Houses this weekend! ⠀\n⠀\n📍 8940 McKinley Ct⠀\n⠀\nCome see this stunning 5 bed 4 bath in the highly desired La Mesa Meadows Community! ⠀\n⠀\nThis light and bright spacious floorplan allows for seamless entertaining and comfort, which you can view this weekend!⠀\n⠀\n🏡 Open House Saturday from 11:00-2:00⠀\n& Sunday from 1:00-4:00⠀\n⠀\nCome see the gorgeous backyard with the built-in BBQ, firepit and hot tub, an entertainer's paradise. ⠀\n⠀\nMessage us now to learn more @richardeliasteam⠀\n⠀\nChristina Battikha - @cbattikha_realestate⠀\nCompass⠀\nDRE #01983805",
        media_type: 'VIDEO',
        media_url:
            'https://scontent.xx.fbcdn.net/v/t50.31694-16/86385055_823350741514099_7591089143359731687_n.mp4?_nc_cat=100&_nc_sid=8ae9d6&_nc_ohc=yzcb-h22zagAX-AwgIu&_nc_ht=scontent.xx&oh=f4f43b507b0fd4b5f2121d7663b33835&oe=5E813B70',
        username: 'richardeliasteam',
        timestamp: '2020-02-14T17:16:23+0000',
    },
    {
        id: '18082654237160017',
        caption:
            "This week's #featuredagent on our team is @sammielolo⠀\n⠀\nSammie is the beacon of fun on the #richardeliasteam and is starting to pave a prosperous path for herself! Let's learn more about Sammie:⠀\n⠀\n1) She has real estate in her blood. Her mother has a brokerage, so Sammie has been immersed in the #realtorlife for a long time.⠀\n⠀\n2) Her heart belongs to Button, her 10-year-old 4.5 lb pup who makes her hold her halfway through their hikes 🤣 ⠀\n⠀\n3) Fun Fact: You want the secret to Sammie's heart? Find Hot Cheetos, give Hot Cheetos to Sammie and don't touch the Hot Cheetos again. 😜 #obsessed⠀\n⠀\nThere is so much we can say about Sammie, but we will leave you with her contact info so you can get ahold of her and ask your questions and get started on your real estate journey!⠀\n⠀\nSammie@richardelias.com⠀\nM: 559.288.9060",
        media_type: 'IMAGE',
        media_url:
            'https://scontent.xx.fbcdn.net/v/t51.2885-15/87225050_2474586856191459_7554297195446782469_n.jpg?_nc_cat=109&_nc_sid=8ae9d6&_nc_ohc=jz5dwHhS34MAX9sWvPx&_nc_ht=scontent.xx&oh=cfe157a3380eb0272fc06d66c39d9c80&oe=5E9814A6',
        username: 'richardeliasteam',
        timestamp: '2020-02-19T16:26:01+0000',
    },
    {
        id: '18078039109170033',
        caption:
            "Ready for this week's #featuredagent on the team? @realtor.mari 💫⠀\n⠀\nMari is living the dream and her goal is making real estate dreams come true! Let's learn more about Mari!⠀\n⠀\n1) As a mother of 3 boys you know she can handle just about anything! Her boys are her life and being a mom is her favorite job, aside from slinging homes 😉⠀\n⠀\n2) Not only does she have her baby boys, but she has her furbabies! Mari is a dog lover and you can follow her @mari.realtor to see pics of your furry family on occasion. ⠀\n⠀\n3 ) Being raised in this gorgeous city of San Diego led to her true passion, helping others live here! Her love of real estate mixed with 20 years of sales experience make her a force to be reckoned with!⠀\n⠀\nWant to learn more about this incredible, indomitable woman? Follow her on social media @mari.realtor or contact her if you think she is the perfect realtor for you!⠀\n⠀\nmari@richardelias.com⠀\n619.344.1619",
        media_type: 'IMAGE',
        media_url:
            'https://scontent.xx.fbcdn.net/v/t51.2885-15/87229237_2843051665751119_7621159157943880954_n.jpg?_nc_cat=104&_nc_sid=8ae9d6&_nc_ohc=PFcMhuFO5fQAX8tXd5x&_nc_ht=scontent.xx&oh=66a389b8157f964cc484cbf92b09d196&oe=5E84E4FF',
        username: 'richardeliasteam',
        timestamp: '2020-02-26T23:16:31+0000',
    },
    {
        id: '18126109669021128',
        caption:
            "To my new friends/followers:⠀\n⠀\nMy name is Richard Elias and I am the leader of this power group #RichardEliasTeam ⠀\n⠀\nHere are three facts about me.⠀\n1) I absolutely LOVE my job! I got my real estate license as soon as I legally could, as a senior in high school! ⠀\n⠀\n2) I am a family man! My wife and kids are the reason I work so hard, and I am so proud to watch my sons grow into little men who will take on the world.⠀\n⠀\n3) COOKING is one of my favorite pastimes. Watch my stories for a look into my favorite recipes or to see me entertaining friends and family with my amazing culinary skills 😜⠀\n⠀\nWant to learn more about me? Message away and I will answer your questions! @richardeliasteam⠀\nThen contact me and let's get started on your real estate journey! ⠀\n⠀\nrichard@richardelias.com⠀\n619.672.2020",
        media_type: 'IMAGE',
        media_url:
            'https://scontent.xx.fbcdn.net/v/t51.2885-15/83135255_179482123268064_5564173508674354372_n.jpg?_nc_cat=104&_nc_sid=8ae9d6&_nc_ohc=Y_MpiWBHihYAX8FOKIw&_nc_ht=scontent.xx&oh=b7d57e6ef11ea9456467a7d25be11421&oe=5E98308E',
        username: 'richardeliasteam',
        timestamp: '2020-02-03T21:29:35+0000',
    },
    {
        id: '18093927223125337',
        caption: '2019 was kick-ass to say the least 🤩\n\nGrowth, Family and Fun!',
        media_type: 'IMAGE',
        media_url:
            'https://scontent.xx.fbcdn.net/v/t51.2885-15/82028623_231327987856780_4453540161743532784_n.jpg?_nc_cat=105&_nc_sid=8ae9d6&_nc_ohc=XQ61QDv8DMIAX_TVSBq&_nc_ht=scontent.xx&oh=1fc9e6fbfeb2c6e41eba030b5db753fb&oe=5E804ABF',
        username: 'richardeliasteam',
        timestamp: '2019-12-31T21:51:19+0000',
    },
    {
        id: '17907229261417279',
        caption:
            'You will know you are home in this one of a kind large family home nestled among the fruit trees in highly coveted neighborhood of Barbados in Tierrasanta.⠀\n⠀\nFrom grapevines to apple, papaya, avocado trees and more, this magical space offers a peaceful refuge for you to call home 🏡⠀\n⠀\n6 beds, 4 baths, 2,474 sqft and a backyard made for gardeners 🌿⠀\n⠀\nThis home is an absolute must-see at $879,900⠀\n⠀\nCome to the Open Houses this weekend!⠀\nSaturday and Sunday (Feb. 22-23) from 1:00-4:00⠀\n⠀\nCome enjoy the fruit trees, enchanted backyard retreat, quiet meditation area, and well-maintained garden beds!⠀\n⠀\nWant to learn more? Comment below or message us now! @richardeliasteam⠀\n⠀\nSAMANTHA LOPEZ - @sammie_sells_sandiego⠀\nCOMPASS⠀\nDRE#: 01990167⠀\n⠀\n📹 @curb360inc',
        media_type: 'VIDEO',
        media_url:
            'https://scontent.xx.fbcdn.net/v/t50.31694-16/87178412_216158489781108_7064202692296676091_n.mp4?_nc_cat=104&_nc_sid=8ae9d6&_nc_ohc=aJlR8IqKlt4AX-9w6xC&_nc_ht=scontent.xx&oh=0ab6cfb4c5c19b1a506120ae14e18034&oe=5E83E257',
        username: 'richardeliasteam',
        timestamp: '2020-02-22T00:44:49+0000',
    },
    {
        id: '18126771007007980',
        caption:
            "Thinking of Selling? 🤔⠀\n⠀\nAsk yourself these four questions before you make a move.⠀\n⠀\n💰 What price is going to drive the most offers on my house?⠀\n⠀\n🏡 What can I do to make my house stand out in today's market?⠀\n⠀\n📈 What's the demand for a house like mine?⠀\n⠀\n⏰ How long does is take to sell a house in my area?⠀\n⠀\nMessage us today ( @richardeliasteam ) to get the answers you need to make the best decision for your family this year!",
        media_type: 'VIDEO',
        media_url:
            'https://scontent.xx.fbcdn.net/v/t50.31694-16/83527961_171738053923778_5773203494570824461_n.mp4?_nc_cat=104&_nc_sid=8ae9d6&_nc_ohc=YfQXb8KnLQwAX9dKZZk&_nc_ht=scontent.xx&oh=39953df552c609cde91f12e2a3c1988e&oe=5E99E23D',
        username: 'richardeliasteam',
        timestamp: '2020-01-25T18:20:29+0000',
    },
]
</script>

<style scoped>
.centerHeaderHold {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    background: rgba(0, 0, 0, 0.5);
    -webkit-transition: background 0.5s, opacity 0.5s;
    transition: background 0.5s, opacity 0.5s;
}

.centerHeader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 100%;
}

.centerHeaderHold:hover {
    opacity: 1;
}

/* Hide scrollbar for Chrome, Safari and Opera */
#scroller::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE and Edge */
#scroller {
    -webkit-overflow-scrolling: touch; /* Lets it scroll lazy */
    -ms-overflow-style: none;
}
</style>
