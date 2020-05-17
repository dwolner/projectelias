<template>
    <q-page class="flex flex-center">
        <div  :style="homeBotStyle">
            <div class="row well" :style="homeBotInnerStyle">
                <div class="col-xs-12 col-md-6 q-pa-xl">
                    <h4 style="font-size: 2rem;">
                        <div class="homebot-face" style="display: inline-block;"></div>
                        Interested in your home's worth?
                    </h4>
                    <h6 class="q-mt-sm" style="font-size: 1rem; line-height: 1.25rem;">
                        We invite you to join our free home digest tool to provide you with insight into your home's value. Keep going to learn more.
                    </h6>

                    <ContactForm inquiryTypeInput="Home Digest" buttonLabel="Sign up!" @success="success()" style="margin: 0 -.5rem;" />
                </div>

                <div class="col-xs-12 col-md-6 q-pa-xl" style="padding-left: 2.5rem;">
                    <div id="contact-profile" class="row justify-center">
                        <div class="col-sm-3 q-pa-sm">
                            <img src="statics/team/richard_square.jpg" style="max-width: 125px; width: 100%;" />
                        </div>
                        <div class="col-sm-9 q-pa-sm">
                            <div>
                                <p class="q-my-sm"><strong>Richard Elias</strong> | Realtor</p>
                                <p class="q-my-sm">richard@richardelias.com</p>
                                <p class="q-my-sm">✆: 619.562.6800</p>
                            </div>
                        </div>
                    </div>

                    <q-list>
                        <q-item-label header style="padding: 1rem 0 .5rem;"><h6 class="text-black">Sign up to recieve:</h6></q-item-label>
                        <q-item v-for="item in details" style="padding: .25rem 0; min-height: 30px;">
                            <q-item-section avatar>
                                <q-icon name="fas fa-home" style="font-size: .8rem;" />
                            </q-item-section>
                            <q-item-section
                                ><p style="margin: 0;">{{ item }}</p></q-item-section
                            >
                        </q-item>
                    </q-list>
                </div>

                <div class="col-xs-12 q-pa-xl" style="padding-left: 2.5rem;">
                    <q-carousel
                        v-model="slideIndex"
                        class=""
                        transition-prev="slide-right"
                        transition-next="slide-left"
                        control-color="black"
                        animated
                        swipeable
                        navigation
                        padding
                        arrows
                        infinite
                        style="background: rgba(0, 0, 0, 0); max-width: 750px; margin: 0 auto;"
                    >
                        <q-carousel-slide v-for="(item, index) in snapshots" :key="index" :name="item.id" class="column no-wrap flex-center items-center full-width" style="min-height: 580px;" @click="selectListing(item)">
                            <h6 class="q-mb-md">{{ item.title }}</h6>

                            <img :src="`statics/homebot/homebot_snapshot_${ item.id }.png`" style="height: auto; width: 100%; max-width: 400px; margin: 0 auto;">
                        </q-carousel-slide>
                    </q-carousel>

                </div>

            </div>
        </div>

        <Contact />
    </q-page>
</template>

<script>
import ContactForm from '../components/ContactForm'
import Contact from '../components/Contact'

export default {
    name: 'Sellers',

    components: {
        ContactForm,
        Contact
    },

    data() {
        return {
            slideIndex: 1,
            showPDFButton: false,
            togglePosition: 1,
            videoIDs: ['35238-70afc3829d7f0cdac24400a255ace4ba/a19b2bc9', '35238-70afc3829d7f0cdac24400a255ace4ba/ed23d645', '35238-70afc3829d7f0cdac24400a255ace4ba/1c3d0d96'],
            details: [
                'Estimated market value of your home',
                'Appreciation since you purchased your home',
                'Net worth/equity in your home',
                'A breakdown of principal and interest paid',
                'Tips for how to save on interest payments',
                'Your purchasing power to buy an investment property or trade up to a new home',
                'Estimated rental figures for your home (or a room in your home) on services like Airbnb or VRBO',
                'Your current cash-out potential for doing things like consolidating high-interest debt or increasing your home value through home improvement',
            ],
            snapshots: [
                {
                    id: 1,
                    title: 'Get a monthly wealth snapshot of your home'
                },
                {
                    id: 2,
                    title: 'Understand when to refinance'
                },
                {
                    id: 3,
                    title: 'Purchasing power for second home or trade up'
                },
                {
                    id: 4,
                    title: 'See the wealth power of extra principal payments'
                },
                {
                    id: 5,
                    title: 'Get smart about wealth from short-term rental'
                },
                {
                    id: 6,
                    title: 'Understand your mortgage - interest vs. principal'
                },
                {
                    id: 7,
                    title: 'Know your total cash-out power'
                },
                {
                    id: 8,
                    title: 'Understand when you can drop mortgage insurance'
                },
            ]
        }
    },

    computed: {
        videoEmbedWidth() {
            let width = this.$q.screen.width < 1024 ? this.$q.screen.width : 1024
            return this.$q.screen.width > 599 ? (width - 128) / 3 : width - 112
        },

        videoEmbedHeight() {
            return this.videoEmbedWidth * 0.5625
        },

        homeBotStyle() {
            return `
                background-image: url('statics/house_shots/Compass-NorthPBBirdrock-Originals-6.jpg');
                background-size: cover;
                width: 100%;
                ${this.$q.screen.width > 767 ? 'padding: 3rem;' : ''}
            `
        },

        homeBotInnerStyle() {
            return `
                background: rgba(255, 255, 255, .85);
                max-width: 1300px;
                width: 100%;
            `
        },
    },

    methods: {
        success() {
            this.showPDFButton = true
            this.scrollToElement('pdfbutton')
        },

        goToPDF() {
            window.open('https://richardelias.com/statics/SellingYourHouseSpring2020.pdf', '_blank')
        },
    },

    mounted() {
        window.Homebot('#homebot_homeowner', '926161d8746a94461a4f2df4afa8ef7a1186cea8f0be1ff3')
    },
}
</script>

<style scoped></style>
