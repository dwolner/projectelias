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
        "id": "17889520363482863",
        "caption": "SOLD\ud83d\udcab\u2800\n\u2800\n\u2714\ufe0f Gorgeous Escondido home goes on the market.\u2800\n\u2714\ufe0f In Escrow after 4 DAYS!\u2800\n\u2714\ufe0f Closed and SOLD in less than a month!\u2800\n\u2800\nCongratulations to our sellers on this fast and easy process! We are so happy to be able to help you sell your home and move on to the next adventure!\u2800\n\u2800\nIf you are looking to list your home, now is the time! We are ready to find a buyer for you! \ud83d\udce5 Message us now \u0040richardeliasteam\u2800\n\u2800\nRichard Elias\u2800\nCompass \u2800\nCA DRE #01104411",
        "media_type": "IMAGE",
        "media_url": "https://scontent.xx.fbcdn.net/v/t51.2885-15/89099783_632125284187825_4452185439563868289_n.jpg?_nc_cat=100&_nc_sid=8ae9d6&_nc_ohc=UBtEgizRTr0AX-cvBDx&_nc_ht=scontent.xx&oh=7f32244bcda6c6808019ee9d10d94820&oe=5E8D167A",
        "timestamp": "2020-03-10T19:12:06+0000"
    },
    {
        "id": "17888960107482876",
        "caption": "When you choose us we are 100\u0025 focused on what will best serve YOU!\u2800\n\u2800\nOur clients are always our #1 priority and it humbles us to know they see our hard work and want to take time out of their day to thank us and spread the love. \u2800\n\u2800\nAlways a pleasure \ud83d\udcab",
        "media_type": "VIDEO",
        "media_url": "https://video.xx.fbcdn.net/v/t50.2886-16/87246280_220642705800253_853870585917943568_n.mp4?_nc_cat=107&vs=17857964242795765_469458688&_nc_vs=HBksFQAYJEdNaEZNd1U5LUJsaXJNZ0FBQkF2eXgzR2p0a0xia1lMQUFBRhUAABUAGCRHQXp3TWdWSWYwaHlDdGtDQVBfUGZLVXVKWFEzYmtZTEFBQUYVAgAoABgAGwGIB3VzZV9vaWwBMRUAABgAFuqu\u00252B5ip7rg\u00252FFQIoAkMzLBdASIQ5WBBiThgSZGFzaF9iYXNlbGluZV8xX3YxEQB16gcA&_nc_sid=59939d&efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjgyNmZlZWQifQ\u00253D\u00253D&_nc_ohc=ehm391oB2KcAX_I3YSu&_nc_ht=video.xx&oh=7a6d856806b0ef5539384e53318bfc1b&oe=5E95839A&_nc_rid=413b4f645b",
        "timestamp": "2020-03-05T21:20:52+0000"
    },
    {
        "id": "17854108897854745",
        "caption": "It's that time of the week again! Who's our #featuredagent on the team? The one and only Diego Martinez! \u2800\n\u2800\nOur newest addition to the family, Diego is a bilingual badass who is taking the real estate world by storm! \u26a1\ufe0f Let's learn more about Diego:\u2800\n\u2800\n1)  He is a young and driven #SDSU alum who proudly represents his local communities and fellow millennials.\u2800\n\u2800\n2) He's a hustler baby, we just want you to know \ud83d\ude09 It's all about where he's about to go! This man has business in his blood and the energy he exudes to succeed is contagious! Follow him on Instagram \u0040diegothesdrealtor to watch him grow!\u2800\n\u2800\n3) FUN FACT: Make sure there isn\u2019t an extra mic when there\u2019s mariachi around or else you will be serenaded with a show you didn\u2019t want but needed. \ud83c\udf99\u2800\n\u2800\nWe could go on and on about Diego, but we will leave a little mystery in the relationship \ud83d\ude1c Follow him now \u0040diegothesdrealtor and contact him if you think he is the perfect realtor for you!\u2800\n\u2800\nDiego\u0040richardelias.com\u2800\nM: 619.205.9664",
        "media_type": "IMAGE",
        "media_url": "https://scontent.xx.fbcdn.net/v/t51.2885-15/89081109_524220348202996_1521450373571744090_n.jpg?_nc_cat=108&_nc_sid=8ae9d6&_nc_ohc=1YvYM33J7yEAX9eT16c&_nc_ht=scontent.xx&oh=2721a948bd7c254c875f636546b0741b&oe=5EA5F026",
        "timestamp": "2020-03-04T16:50:12+0000"
    },
    {
        "id": "17865386611663913",
        "caption": "Praying for all those who have been affected by the tornadoes that hit Tennessee. Our Nashville Compass is experiencing community devastation and since \u0040compass is a family we want to help. \nPlease join in coming together and supporting those impacted by this tragedy and click the link in our bio \u0040richardeliasteam",
        "media_type": "IMAGE",
        "media_url": "https://scontent.xx.fbcdn.net/v/t51.2885-15/87896817_2477997679116936_3437366956443499059_n.jpg?_nc_cat=105&_nc_sid=8ae9d6&_nc_ohc=mPIBTzpxVs0AX8F8sox&_nc_ht=scontent.xx&oh=55e31a9a941a6047891590091f0b40b6&oe=5EA70EF4",
        "timestamp": "2020-03-03T22:36:31+0000"
    },
    {
        "id": "17869630324624177",
        "caption": "Imagine San Diego summer nights in this gorgeous backyard!\u2800\n\u2800\nThis backyard is a true entertainer's delight featuring an outdoor built-in grill, waterfall, glass fire pit and a 6 person hot tub! \u2800\n\u2800\nWant to see this backyard in person? Come see Wednesday, March 4th from 2:00-4:00\u2800\n\u2800\nStunning craftsman home in an amazing La Mesa neighborhood with 5 beds and 4 baths, you honestly cannot beat the cleanliness, upgrades, spaciousness, and price!! This home has it all and is a must-see! \u2800\n\u2800\nDon't miss the Open House Wednesday 2:00-4:00\u2800\n\u2800\nWant to learn or see more? Message us now \u0040richardeliasteam with any questions or comment below. \u2800\u2800\n\u2800\u2800\nChristina Battikha - \u0040cbattikha_realestate\u2800\u2800\u2800\nCompass\u2800\u2800\u2800\nDRE #01983805",
        "media_type": "IMAGE",
        "media_url": "https://scontent.xx.fbcdn.net/v/t51.2885-15/88259190_190699945584380_2289291909486861551_n.jpg?_nc_cat=105&_nc_sid=8ae9d6&_nc_ohc=blGKsBjt0SAAX_xGpJ9&_nc_ht=scontent.xx&oh=f527ad3da5cca6efa42cdcd8af2cffae&oe=5E8F3B7B",
        "timestamp": "2020-03-02T17:49:50+0000"
    },
    {
        "id": "17881770676525438",
        "caption": "Looking for your dream home? We have two stunning listings waiting on their perfect owners. Venture out this beautiful San Diego morning and visit their Open Houses. \nFirst, let's start in La Mesa:\n\u2b50\ufe0f 8940 McKinley Court Open House 12:00-2:00\n5 Bed | 4 Bath\n\nThen journey to Escondido to end the day:\n\u2b50\ufe0f 1806 Gamble Lane Open House 1:00-4:00\n4 Bed | 3 Bath\n\nMessage us now with any questions! \u0040richardeliasteam",
        "media_type": "CAROUSEL_ALBUM",
        "media_url": "https://scontent.xx.fbcdn.net/v/t51.2885-15/87567829_3358569514170191_8802599554407842652_n.jpg?_nc_cat=111&_nc_sid=8ae9d6&_nc_ohc=qCY0uauqZmcAX-HBR9Q&_nc_ht=scontent.xx&oh=c86ddd317da65d14576ec0dffcbed100&oe=5E96F2CF",
        "timestamp": "2020-02-29T16:55:28+0000"
    },
    {
        "id": "17847804514908927",
        "caption": "Surround yourself with a team that is helpful and adorable. \ud83e\udd29",
        "media_type": "VIDEO",
        "media_url": "https://video.xx.fbcdn.net/v/t50.2886-16/88185014_1072769669763348_2756399141383515864_n.mp4?_nc_cat=106&vs=17856473518804443_1059085975&_nc_vs=HBksFQAYJEdMYVlRUVVVa1JlbnJjOERBTmd1VzBGcXNrQW1ia1lMQUFBRhUAABUAGCRHUFBIT1FVOHFKZXQ5X1lCQVBaR3M3eHliaW9uYmtZTEFBQUYVAgAoABgAGwGIB3VzZV9vaWwBMRUAABgAFrb3\u00252BPy\u00252Fl7g\u00252FFQIoAkMzLBdATVmZmZmZmhgSZGFzaF9iYXNlbGluZV8xX3YxEQB16gcA&_nc_sid=59939d&efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMGZlZWQifQ\u00253D\u00253D&_nc_ohc=aTVd_GkCltIAX9cd920&_nc_ht=video.xx&oh=b2377754b2cd18bedd9585bad2aa8e4c&oe=5E8DC632&_nc_rid=90355966d4",
        "timestamp": "2020-02-28T00:29:08+0000"
    },
    {
        "id": "17875116499571098",
        "caption": "Looking for a 5 bedroom home in a highly desired neighborhood?\u2800\n\u2800\nDon't miss the chance to see this La Mesa craftsman with:\u2800\n\u2714\ufe0f Large Kitchen with walk-in pantry\u2800\n\u2714\ufe0f Bonus Loft space with built-ins upstairs\u2800\n\u2714\ufe0f Fully owned solar\u2800\n\u2714\ufe0f Entertainer's Backyard [Built-in grill, firepit, hot tub & more]\u2800\n\u2800\nOpen House TOMORROW from 4:00-6:00, can't make it tomorrow? You have another chance to see this La Mesa gem on Saturday from 12:00-2:00\u2800\n\u2800\nWant to learn or see more? Message us now \u0040richardeliasteam with any questions or comment below. \u2800\n\u2800\nChristina Battikha - \u0040cbattikha_realestate\u2800\u2800\nCompass\u2800\u2800\nDRE #01983805",
        "media_type": "VIDEO",
        "media_url": "https://video.xx.fbcdn.net/v/t50.2886-16/88012872_117855936466535_2779905112853446777_n.mp4?_nc_cat=100&vs=17842185962032698_3465597464&_nc_vs=HBksFQAYJEdFajRQZ1ZuVGpwNU1Hc0FBSGtBN0xqNE5KUW1ia1lMQUFBRhUAABUAGCRHRmJNUFFWTnVXdHdSRTBDQUFuRkJDVlkxc1I1YmtZTEFBQUYVAgAoABgAGwGIB3VzZV9vaWwBMRUAABgAFvTe9sDz17E\u00252FFQIoAkMzLBdARAAAAAAAABgSZGFzaF9iYXNlbGluZV8xX3YxEQB16gcA&_nc_sid=59939d&efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjY0MGZlZWQifQ\u00253D\u00253D&_nc_ohc=Kx873v_ITkoAX_DzVQQ&_nc_ht=video.xx&oh=1c0f2cd5a813747619ea17b237c3439c&oe=5E9648DF&_nc_rid=e74f6b9c35",
        "timestamp": "2020-02-27T19:08:14+0000"
    },
    {
        "id": "18078039109170033",
        "caption": "Ready for this week's #featuredagent on the team? \u0040realtor.mari \ud83d\udcab\u2800\n\u2800\nMari is living the dream and her goal is making real estate dreams come true! Let's learn more about Mari!\u2800\n\u2800\n1) As a mother of 3 boys you know she can handle just about anything! Her boys are her life and being a mom is her favorite job, aside from slinging homes \ud83d\ude09\u2800\n\u2800\n2) Not only does she have her baby boys, but she has her furbabies! Mari is a dog lover and you can follow her \u0040mari.realtor to see pics of your furry family on occasion. \u2800\n\u2800\n3 ) Being raised in this gorgeous city of San Diego led to her true passion, helping others live here! Her love of real estate mixed with 20 years of sales experience make her a force to be reckoned with!\u2800\n\u2800\nWant to learn more about this incredible, indomitable woman? Follow her on social media \u0040mari.realtor or contact her if you think she is the perfect realtor for you!\u2800\n\u2800\nmari\u0040richardelias.com\u2800\n619.344.1619",
        "media_type": "IMAGE",
        "media_url": "https://scontent.xx.fbcdn.net/v/t51.2885-15/87229237_2843051665751119_7621159157943880954_n.jpg?_nc_cat=104&_nc_sid=8ae9d6&_nc_ohc=DrMB0DCUGusAX-MqdG8&_nc_ht=scontent.xx&oh=46d1ff945c7580fe8be82c9702f63493&oe=5E9213FF",
        "timestamp": "2020-02-26T23:16:31+0000"
    },
    {
        "id": "17856407920781501",
        "caption": "\ud83d\udde3\ufe0f Exceptional opportunity to live in the highly coveted neighborhood of Point Loma in La Playa Cove complex! Imagine the early morning or evening strolls you could take in this bayfront neighborhood! Mostly residential with two yacht clubs, so not a lot of traffic. A tranquil, corner end unit with spectacular views of downtown and panoramic bay views! \u2800\n\u2800\nThis home is a must-see! Move-in ready with 3 beds, 2 baths, and 1,346 SQFT!\u2800\n\u2800\nWant to see this amazing home in person? \ud83d\udce5 Message us \u0040richardeliasteam now to schedule a private showing. Don't wait, this opportunity will not last! \u2800\n\u2800\nRichard Elias\u2800\nCompass \u2800\nCA DRE #01104411",
        "media_type": "VIDEO",
        "media_url": "https://video.xx.fbcdn.net/v/t50.2886-16/87417972_581201512738784_6798339851508273657_n.mp4?_nc_cat=106&vs=17865785728657004_482309446&_nc_vs=HBksFQAYJEdIVGtOUVhncjdXRm1SQUNBUGxSaUdjVGpsaGVia1lMQUFBRhUAABUAGCRHQ0FDTWdXeGM1dXJlSEFKQU91a3RwSlRHVGRzYmtZTEFBQUYVAgAoABgAGwGIB3VzZV9vaWwBMRUAABgAFtjph5LMtbw\u00252FFQIoAkMzLBdAQiZmZmZmZhgSZGFzaF9iYXNlbGluZV8xX3YxEQB16gcA&_nc_sid=59939d&efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjY0MGZlZWQifQ\u00253D\u00253D&_nc_ohc=lNlEagu-JYwAX9hG2sI&_nc_ht=video.xx&oh=2b76f3d531d22111d8af05294980c3c1&oe=5EA69027&_nc_rid=8403542f21",
        "timestamp": "2020-02-25T18:44:47+0000"
    },
    {
        "id": "17862951346686729",
        "caption": "Spending your Sunday looking for your dream home?\n\nCheck out these amazing homes in various corners of San Diego.\n\nFirst head to Escondido:\n\u2b50\ufe0f 1806 Gamble Lane Open House 1:00-4:00\n4 Bed | 3 Bath\n\nThen venture down to Tierrasanta:\n\u2b50\ufe0f 10625 Montego Drive Open House 1:00-4:00\n6 Bed | 4 Bath\n\nEnd in beautiful La Mesa:\n\u2b50\ufe0f 8940 McKinley Court Open House 1:00-4:00\n5 Bed | 4 Bath\n\nMessage us now with any questions! \u0040richardeliasteam",
        "media_type": "CAROUSEL_ALBUM",
        "media_url": "https://scontent.xx.fbcdn.net/v/t51.2885-15/87237880_927175707697926_3292372568220140792_n.jpg?_nc_cat=111&_nc_sid=8ae9d6&_nc_ohc=vLsSJ4jPPekAX_3OwpW&_nc_ht=scontent.xx&oh=32becc01a23e49805388cb3511e7804a&oe=5E8F8B61",
        "timestamp": "2020-02-23T18:51:36+0000"
    },
    {
        "id": "17907229261417279",
        "caption": "You will know you are home in this one of a kind large family home nestled among the fruit trees in highly coveted neighborhood of Barbados in Tierrasanta.\u2800\n\u2800\nFrom grapevines to apple, papaya, avocado trees and more, this magical space offers a peaceful refuge for you to call home \ud83c\udfe1\u2800\n\u2800\n6 beds, 4 baths, 2,474 sqft and a backyard made for gardeners \ud83c\udf3f\u2800\n\u2800\nThis home is an absolute must-see at $879,900\u2800\n\u2800\nCome to the Open Houses this weekend!\u2800\nSaturday and Sunday (Feb. 22-23) from 1:00-4:00\u2800\n\u2800\nCome enjoy the fruit trees, enchanted backyard retreat, quiet meditation area, and well-maintained garden beds!\u2800\n\u2800\nWant to learn more? Comment below or message us now! \u0040richardeliasteam\u2800\n\u2800\nSAMANTHA LOPEZ - \u0040sammie_sells_sandiego\u2800\nCOMPASS\u2800\nDRE#: 01990167\u2800\n\u2800\n\ud83d\udcf9 \u0040curb360inc",
        "media_type": "VIDEO",
        "media_url": "https://video.xx.fbcdn.net/v/t50.2886-16/87201697_123901385716774_1419968339910063330_n.mp4?_nc_cat=106&vs=17847995431935713_262129113&_nc_vs=HBksFQAYJEdLR1hNZ1VtTkJVS3NIQUFBT0wwbzR5dXZiUVRia1lMQUFBRhUAABUAGCRHS09WTWdVRGZTQ0xycFlGQUpPTGgwRmRhcVY2YmtZTEFBQUYVAgAoABgAGwGIB3VzZV9vaWwBMRUAABgAFsLE2P6HqrQ\u00252FFQIoAkMzLBdAQ5mZmZmZmhgSZGFzaF9iYXNlbGluZV8xX3YxEQB16gcA&_nc_sid=59939d&efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjk2MGZlZWQifQ\u00253D\u00253D&_nc_ohc=oEwMZz75um0AX-XBvbz&_nc_ht=video.xx&oh=f1f3a3adcf7ff41a23c46bc3eb7973e1&oe=5E8DB962&_nc_rid=ee9659d620",
        "timestamp": "2020-02-22T00:44:49+0000"
    },
    {
        "id": "18023168158256689",
        "caption": "Centrally located in the rolling hills of San Diego County is La Mesa. Near a myriad of shopping, restaurants, parks and so much more. #LaMesa is a great place to live!\u2060\u2800\n\u2060\u2800\nCome see this highly desired La Mesa Meadows Community 5 bed, 4 bath home at $875,000 on a 6,684 sqft lot.\u2060\u2800\n\u2060\u2800\nA Must-See!! Don't miss the opportunity to see the #OpenHouse this weekend Saturday, February 22nd from 1:00-3:00\u2060\u2800\n\u2060\u2800\nWant to know more? Message us now \u0040richardeliasteam\u2060 or message \u0040cbattikha_realestate\u2800\n\u2800\nChristina Battikha\u2800\nCompass\u2800\nDRE #01983805",
        "media_type": "VIDEO",
        "media_url": "https://video.xx.fbcdn.net/v/t50.2886-16/86755154_2695695780717077_6194080075794407861_n.mp4?_nc_cat=109&vs=17909496094408366_2111715660&_nc_vs=HBksFQAYJEdGTEhLd1VWb202VnVKTUpBTFhoRE9RQ3ktVlZia1lMQUFBRhUAABUAGCRHS0xKTWdWTTlLc2l0QUFEQU16ZDh5Q3FRdkIyYmtZTEFBQUYVAgAoABgAGwGIB3VzZV9vaWwBMRUAABgAFtyoic7vpdA\u00252FFQIoAkMzLBdASIzMzMzMzRgSZGFzaF9iYXNlbGluZV8xX3YxEQB16gcA&_nc_sid=59939d&efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjk2MGZlZWQifQ\u00253D\u00253D&_nc_ohc=JILeFWvcPmAAX9pylN-&_nc_ht=video.xx&oh=8bea7f02fb7519c9d93f1943e7ca4a79&oe=5EA52DEB&_nc_rid=b7c94887f9",
        "timestamp": "2020-02-20T23:01:53+0000"
    },
    {
        "id": "18082654237160017",
        "caption": "This week's #featuredagent on our team is \u0040sammielolo\u2800\n\u2800\nSammie is the beacon of fun on the #richardeliasteam and is starting to pave a prosperous path for herself! Let's learn more about Sammie:\u2800\n\u2800\n1) She has real estate in her blood. Her mother has a brokerage, so Sammie has been immersed in the #realtorlife for a long time.\u2800\n\u2800\n2) Her heart belongs to Button, her 10-year-old 4.5 lb pup who makes her hold her halfway through their hikes \ud83e\udd23 \u2800\n\u2800\n3) Fun Fact: You want the secret to Sammie's heart? Find Hot Cheetos, give Hot Cheetos to Sammie and don't touch the Hot Cheetos again. \ud83d\ude1c #obsessed\u2800\n\u2800\nThere is so much we can say about Sammie, but we will leave you with her contact info so you can get ahold of her and ask your questions and get started on your real estate journey!\u2800\n\u2800\nSammie\u0040richardelias.com\u2800\nM: 559.288.9060",
        "media_type": "IMAGE",
        "media_url": "https://scontent.xx.fbcdn.net/v/t51.2885-15/87225050_2474586856191459_7554297195446782469_n.jpg?_nc_cat=109&_nc_sid=8ae9d6&_nc_ohc=famw42R271sAX_LgmKp&_nc_ht=scontent.xx&oh=903af49c86174a2ee01561a15203c6cf&oe=5EA543A6",
        "timestamp": "2020-02-19T16:26:01+0000"
    },
    {
        "id": "17864289961669446",
        "caption": "Always giving my clients the presidential treatment. \ud83d\ude09\n\nI know I've talked about Compass Concierge before but you have to hear this story. \u270d\ufe0f My clients and I were out viewing homes and we were discussing their home going on the market soon. They needed some small updates done around the home and I told them about #CompassConcierge and what an amazing resource it is that \u0040compass offers. Then, right in the back of my car, on my iPad, they looked up the service and applied then and there, and got approved! I was blown away! It was so quick and easy and just cemented my love for this incredible company. \nAre you ready to learn more about Compass Concierge and how we can help you get fronted the cost of home improvement services with no interest - EVER!? \ud83d\udcf2 Message me today with questions! \u0040richardeliasteam Or call/text 619.672.2020",
        "media_type": "VIDEO",
        "media_url": "https://video.xx.fbcdn.net/v/t50.2886-16/87081712_125123392220928_8119213591494597553_n.mp4?_nc_cat=111&vs=17865789184642100_947329746&_nc_vs=HBksFQAYJEdQRENNQVVBcjFpUHpIRUFBTEViajNpX1BhMXdia1lMQUFBRhUAABUAGCRHR2JzSndYaE94Sno0OThEQU83N0JXS3V3WkZLYmtZTEFBQUYVAgAoABgAGwGIB3VzZV9vaWwBMRUAABgAFuiFxJPltbw\u00252FFQIoAkMzLBdASRmZmZmZmhgSZGFzaF9iYXNlbGluZV8xX3YxEQB16gcA&_nc_sid=59939d&efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMGZlZWQifQ\u00253D\u00253D&_nc_ohc=PmKQQ3PUAsAAX-OsXSH&_nc_ht=video.xx&oh=c9cd8092ea86b6c9fdc3d5ab29d882c5&oe=5E91C62B&_nc_rid=f85157cd49",
        "timestamp": "2020-02-17T01:07:15+0000"
    },
    {
        "id": "18129248746026305",
        "caption": "\ud83d\udde3\ufe0f Open Houses this weekend! \u2800\n\u2800\n\ud83d\udccd 8940 McKinley Ct\u2800\n\u2800\nCome see this stunning 5 bed 4 bath in the highly desired La Mesa Meadows Community! \u2800\n\u2800\nThis light and bright spacious floorplan allows for seamless entertaining and comfort, which you can view this weekend!\u2800\n\u2800\n\ud83c\udfe1 Open House Saturday from 11:00-2:00\u2800\n& Sunday from 1:00-4:00\u2800\n\u2800\nCome see the gorgeous backyard with the built-in BBQ, firepit and hot tub, an entertainer's paradise. \u2800\n\u2800\nMessage us now to learn more \u0040richardeliasteam\u2800\n\u2800\nChristina Battikha - \u0040cbattikha_realestate\u2800\nCompass\u2800\nDRE #01983805",
        "media_type": "VIDEO",
        "media_url": "https://video.xx.fbcdn.net/v/t50.2886-16/84565599_181218633295021_5338613115877053718_n.mp4?_nc_cat=105&vs=18115592677073589_4032988423&_nc_vs=HBksFQAYJEdGOWVDZ1d0cEVOQTBhUUFBQmJWRi0xWGtCWktia1lMQUFBRhUAABUAGCRHQ0M1SmdWeW1FODJ2c29CQUJzSWMyMGRydmRfYmtZTEFBQUYVAgAoABgAGwGIB3VzZV9vaWwBMRUAABgAFuqisYaigq5AFQIoAkMzLBdARAAAAAAAABgSZGFzaF9iYXNlbGluZV8xX3YxEQB16gcA&_nc_sid=59939d&efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjY0MGZlZWQifQ\u00253D\u00253D&_nc_ohc=_7Wji8DXraYAX_i8dKX&_nc_ht=video.xx&oh=2e1a9adcd7537cdc6dbf63f8397ce9fd&oe=5E963B0C&_nc_rid=0ee8abc268",
        "timestamp": "2020-02-14T17:16:23+0000"
    },
    {
        "id": "17853201520828670",
        "caption": "Last week you learned about me, now I want to introduce you to the powerhouse that is \u0040cbattikha_realestate\u2800\u2800\n\u2800\nHere are some things about Christina that you need to know!\u2800\n1) She has been on the #RichardEliasTeam the longest and knows how to negotiate with her client's best interest in mind at all times. \u2800\n\u2800\n2) Born and raised in #SanDiego she not only dominated as a real estate agent but loves watching all things real estate. #HGTV Who doesn't love Chip and Joanna? \ud83d\ude0e\u2800\n\u2800\n3) She just celebrated the most magical birthday and got engaged to the love of her life \u0040cmeno_realestate \u2665\ufe0f\u2800\n\u2800\nWant to know more about this amazing, driven and caring woman on the team? Follow her on social media \u0040cbattikha_realestate or contact her if you think she is the perfect realtor for you! \u2800\n\u2800\nChristina\u0040richardelias.com\u2800\n619.504.9236",
        "media_type": "IMAGE",
        "media_url": "https://scontent.xx.fbcdn.net/v/t51.2885-15/84464376_875395672910492_6148054527058419722_n.jpg?_nc_cat=107&_nc_sid=8ae9d6&_nc_ohc=0wQoz8BTML4AX9AU42b&_nc_ht=scontent.xx&oh=94f2c21b9f838927575a105da2dd450c&oe=5E921E00",
        "timestamp": "2020-02-11T02:03:19+0000"
    },
    {
        "id": "17844624571945302",
        "caption": "Open House TODAY!\u2800\n\u2800\n\ud83d\udccd 8940 McKinley Ct\u2800\n\u2800\nCome see this stunning 5 bed 4 bath in the highly desired La Mesa Meadows Community! \u2800\n\u2800\nThis light and bright spacious floorplan allows for seamless entertaining and comfort, which you can view today!\u2800\n\u2800\nOpen House from 12:00-3:00\u2800\n\u2800\nCome see the gorgeous backyard with the built-in BBQ, firepit and hot tub, an entertainer's paradise. \u2800\n\u2800\nMessage us now to learn more \u0040richardeliasteam\u2800\n\u2800\nChristina Battikha - \u0040cbattikha_realestate\u2800\nCompass\u2800\nDRE #01983805",
        "media_type": "IMAGE",
        "media_url": "https://scontent.xx.fbcdn.net/v/t51.2885-15/84272501_124832749054840_3721261327999650580_n.jpg?_nc_cat=100&_nc_sid=8ae9d6&_nc_ohc=oBeNaX7ZXQgAX-uaeA-&_nc_ht=scontent.xx&oh=3e402762a9098e9a0ea27afc118dda7c&oe=5E944373",
        "timestamp": "2020-02-08T17:27:23+0000"
    },
    {
        "id": "18126109669021128",
        "caption": "To my new friends/followers:\u2800\n\u2800\nMy name is Richard Elias and I am the leader of this power group #RichardEliasTeam \u2800\n\u2800\nHere are three facts about me.\u2800\n1) I absolutely LOVE my job! I got my real estate license as soon as I legally could, as a senior in high school! \u2800\n\u2800\n2) I am a family man! My wife and kids are the reason I work so hard, and I am so proud to watch my sons grow into little men who will take on the world.\u2800\n\u2800\n3) COOKING is one of my favorite pastimes. Watch my stories for a look into my favorite recipes or to see me entertaining friends and family with my amazing culinary skills \ud83d\ude1c\u2800\n\u2800\nWant to learn more about me? Message away and I will answer your questions! \u0040richardeliasteam\u2800\nThen contact me and let's get started on your real estate journey! \u2800\n\u2800\nrichard\u0040richardelias.com\u2800\n619.672.2020",
        "media_type": "IMAGE",
        "media_url": "https://scontent.xx.fbcdn.net/v/t51.2885-15/83135255_179482123268064_5564173508674354372_n.jpg?_nc_cat=104&_nc_sid=8ae9d6&_nc_ohc=DRrAHcD3wm0AX-YhGdF&_nc_ht=scontent.xx&oh=fe85a9ffdbe04c0b68b6a22502ac4c9e&oe=5EA55F8E",
        "timestamp": "2020-02-03T21:29:35+0000"
    },
    {
        "id": "17849204692866963",
        "caption": "We want to help you discover the ease of \u0040Compass technology.\u2800\n\u2800\nWith Compass Collections, we help you keep track of homes you like and save them in one place, invite collaborators and leave comments, and receive automated updates about properties in real-time. \u2800\n\u2800\nCollections is real estate's only visual workspace and serves as the central hub for your search. \u2800\n\u2800\nWe are always working for you and trying to make the process to buy or sell a home as smooth as possible. \ud83d\udcf2 Message us \u0040richardeliasteam today to learn more about all the technology at our fingertips to help you!",
        "media_type": "VIDEO",
        "media_url": "https://video.xx.fbcdn.net/v/t50.2886-16/84189053_177943736891603_3008278262255742997_n.mp4?_nc_cat=110&vs=18074973784195640_2948717144&_nc_vs=HBksFQAYJEdIMmZCQVhUT0RyQjFxRUFBQlZ3U0Jja2piOHBia1lMQUFBRhUAABUAGCRHTnNnQmdWQWl6bFdIUFVLQU55c3RzeDJCNk5lYmtZTEFBQUYVAgAoABgAGwGIB3VzZV9vaWwBMRUAABgAFvDEr9n4xZtAFQIoAkMzLBdAIO6XjU\u00252FfOxgSZGFzaF9iYXNlbGluZV8xX3YxEQB16gcA&_nc_sid=59939d&efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjk2MGZlZWQifQ\u00253D\u00253D&_nc_ohc=BGClUIetl4kAX95Swen&_nc_ht=video.xx&oh=3eb4d739bd718fb41cdcd4bfbd7fa763&oe=5EA7419E&_nc_rid=2ce744e30a",
        "timestamp": "2020-01-30T17:31:52+0000"
    },
    {
        "id": "17870247223582376",
        "caption": "If you are looking for a perfect starter or investment home, then boy do we have a home for you! \u2800\n\u2800\nFall in love with this super charming starter home in North Park. This neighborhood is crawling with historic gems just asking for fixer-upper owners, and this home has endless possibilities! With some fresh paint and creativity, this home will accommodate your need for your very own tranquil retreat \ud83c\udf31\u2800\n\u2800\nDon\u2019t miss out on this exceptional opportunity! Message us today! \u0040richardeliasteam\u2800\n\u2800\nRichard Elias - 619.672.2020\u2800\nCompass \u2800\nCA DRE #01104411",
        "media_type": "IMAGE",
        "media_url": "https://scontent.xx.fbcdn.net/v/t51.2885-15/82912137_181091379619308_1375016436223872144_n.jpg?_nc_cat=108&_nc_sid=8ae9d6&_nc_ohc=PRBuMGEQYuoAX81sbqN&_nc_ht=scontent.xx&oh=435adf40db76f2757dec6edaa887e51e&oe=5E900811",
        "timestamp": "2020-01-29T15:28:06+0000"
    },
    {
        "id": "18126771007007980",
        "caption": "Thinking of Selling? \ud83e\udd14\u2800\n\u2800\nAsk yourself these four questions before you make a move.\u2800\n\u2800\n\ud83d\udcb0 What price is going to drive the most offers on my house?\u2800\n\u2800\n\ud83c\udfe1 What can I do to make my house stand out in today's market?\u2800\n\u2800\n\ud83d\udcc8 What's the demand for a house like mine?\u2800\n\u2800\n\u23f0 How long does is take to sell a house in my area?\u2800\n\u2800\nMessage us today ( \u0040richardeliasteam ) to get the answers you need to make the best decision for your family this year!",
        "media_type": "VIDEO",
        "media_url": "https://video.xx.fbcdn.net/v/t50.2886-16/83631143_217323449278377_2768309446657547209_n.mp4?_nc_cat=102&vs=18040424392227446_3548321602&_nc_vs=HBkcFQAYJEdDY2MtQVNwMy02T3A4VUFBTW1iWVV6R0Ftc21ia1lMQUFBRhUAACgAGAAbAYgHdXNlX29pbAExFQAAGAAW7Mfi5vPqi0AVAigCQzMsF0ANmZmZmZmaGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHXqBwA\u00253D&_nc_sid=59939d&efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMGZlZWQifQ\u00253D\u00253D&_nc_ohc=vn7aPd5mIC8AX9Hxh4y&_nc_ht=video.xx&oh=13399f5ec2370df2963373064b9fae46&oe=5EA75DB4&_nc_rid=1ed655d206",
        "timestamp": "2020-01-25T18:20:29+0000"
    },
    {
        "id": "17853336724775688",
        "caption": "\ud83d\udde3 Just Listed Santee home ready for its new owners!\u2800\nCreate beautiful memories in this inviting and updated 4 bedroom, 2 bath home! \u2800\n\u2800\nThis gem is tucked away on a quiet cul de sac, situated on a 1/4 acre lot with room to park an RV and Boat. \u2800\nThe home feels clean and welcoming with newer flooring, recess lighting, and dual-paned windows throughout. The granite countertops in the kitchen will complement your baking experience and the space is perfect for cooking big meals or having the counter space to prep your weeknight dinners.\u2800\n\u2800\nThe master bedroom is equipped with an IKEA closet system and the master bath has been beautifully remodeled. A comfy retreat after a long day. \u2800\n\u2800\nThe backyard is where this home shines \ud83e\udd29 Your summer BBQs will be much more with this well-manicured yard! Enjoy a dip in the pool or relax in the shade\u2600\ufe0f\u2800\n\u2800\nWant to learn more? Message us today and we will be happy to arrange a private showing! Don't wait on this great neighborhood home. \u2800\n\u2800\n\ud83d\udcf9 \u0040curb360inc",
        "media_type": "VIDEO",
        "media_url": "https://video.xx.fbcdn.net/v/t50.2886-16/83907415_189632708851302_7123014193693509501_n.mp4?_nc_cat=102&vs=17878967782511559_3995314436&_nc_vs=HBksFQAYJEdGZFRBQVZtdGo5T2VLd0FBSDNIS25tckI5cGlia1lMQUFBRhUAABUAGCRHRTllOUFUbkp0Yy1aWG9BQUJxUEJVaXBHMlVCYmtZTEFBQUYVAgAoABgAGwGIB3VzZV9vaWwBMRUAABgAFo7LzODwtMI\u00252FFQIoAkMzLBdASUzMzMzMzRgSZGFzaF9iYXNlbGluZV8xX3YxEQB16gcA&_nc_sid=59939d&efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjk2MGZlZWQifQ\u00253D\u00253D&_nc_ohc=CHAGIB1PQMcAX9vCzJc&_nc_ht=video.xx&oh=fcac4ca49e648aa260a89d2276eac283&oe=5E923E2A&_nc_rid=3a855319d7",
        "timestamp": "2020-01-18T16:28:46+0000"
    },
    {
        "id": "18019127533256400",
        "caption": "Give a little swipe \ud83d\udc49\n\n5 Bed | 4 Bath | La Mesa\n\n8940 McKinley Ct is the place to be on January 11th from 2:00-4:00\n\nWant to know more about this amazing listing? Message us now \u0040richardeliasteam or message the rockstar \u0040cbattikha_realestate",
        "media_type": "CAROUSEL_ALBUM",
        "media_url": "https://scontent.xx.fbcdn.net/v/t51.2885-15/80049770_2461165830800579_3945059186336127837_n.jpg?_nc_cat=110&_nc_sid=8ae9d6&_nc_ohc=EnEyO5iFzV0AX_lCR_u&_nc_ht=scontent.xx&oh=570ab480d8b0a6239ca21b3a4dbd2841&oe=5EA62805",
        "timestamp": "2020-01-10T16:59:47+0000"
    },
    {
        "id": "17871244063546058",
        "caption": "Why live in La Mesa?\u2800\n(Save this post if La Mesa is a neighborhood you're interested in)\u2800\n\u2800\n#LaMesa is Centrally located in the rolling hills of San Diego County, known as the \"Jewel of the Hill.\" \ud83d\udc8e  A near-perfect climate, tree-lined streets, walkable neighborhoods, easy access to retail and commercial areas, and a quaint downtown village make La Mesa a highly desirable community in which to live! \ud83c\udfe1 \u2800\n\u2800\nFull of history and charm, there is so much to love about La Mesa. It is all about discovering one-of-a-kind places tucked away in tree-lined neighborhoods. It\u2019s about finding the friendly ambiance that hallmarks La Mesa as a small, picturesque city with lots of character. You are invited to experience the wealth of treasures that make up La Mesa with this gorgeous Craftsman home!\u2800\n\u2800\nA 5 bedroom 4 bathroom home situated in the highly desired La Mesa Meadows Community! Enter through to a light and bright spacious floor plan with a bedroom and full bath on the main floor. The living and family room provide for plenty of entertainment space with surround sound installed in the ceiling. Enter the large kitchen which features warm maple cabinets, granite countertops and backsplash, stainless steel appliances, full island, and walk-in pantry! The backyard is a true entertainer's delight featuring an outdoor built-in grill, waterfall, glass fire pit and a 6 person hot tub! \ud83d\ude0d \u2800\n\u2800\nWant to learn more about this amazing opportunity? Message us \u0040richardeliasteam or contact \u0040cbattikha_realestate",
        "media_type": "IMAGE",
        "media_url": "https://scontent.xx.fbcdn.net/v/l/t51.2885-15/79385083_168616464228523_2450867212698857302_n.jpg?_nc_cat=108&_nc_sid=8ae9d6&_nc_ohc=475XRIMM_xUAX_SixKa&_nc_ht=scontent.xx&oh=cd1b48da6ca641b7b4a2efbf1fc884f5&oe=5EA66C3D",
        "timestamp": "2020-01-04T21:13:43+0000"
    }
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
