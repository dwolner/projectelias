<template>
    <q-page class="flex flex-center" :style="homeBotStyle">
        <div class="row well" :style="homeBotInnerStyle">
            <div class="col-xs-12 col-md-6 q-pa-xl" style="padding-left: 2.5rem;">
                <h4 style="font-size: 2rem;"><div class="homebot-face" style="display: inline-block;"></div> Interested in your home's worth?</h4>
                <h6 class="q-mt-sm" style="font-size: 1.25rem;">We invite you to join our free homebot tool to provide you with insight into your home's value.</h6>
                <q-list>
                    <q-item-label header style="padding: 1rem 0 .5rem;"><h6 class="text-black">Sign up to recieve:</h6></q-item-label>
                    <q-item v-for="item in details" style="padding: .25rem 0; min-height: 30px;">
                        <q-item-section avatar>
                            <q-icon name="fas fa-chevron-right" style="font-size: .8rem;" />
                        </q-item-section>
                        <q-item-section><p style="margin: 0;">{{ item }}</p></q-item-section>
                    </q-item>
                </q-list>
            </div>

            <div class="col-xs-12 col-md-6 q-pa-xl">
                <div id="contact-profile" class="row justify-center">
                    <div class="col-xs-12 col-sm-6 q-pa-sm" :align="$q.screen.width > 767 ? 'right' : 'center'">
                        <img src="statics/team/richard_square.jpg" style="max-width: 125px;" />
                    </div>
                    <div class="col-xs-12 col-sm-6 q-pa-sm" :align="$q.screen.width > 767 ? 'left' : 'center'">
                        <div>
                            <p class="q-my-sm"><strong>Richard Elias</strong> | Realtor</p>
                            <p class="q-my-sm">richard.elias@compass.com</p>
                            <p class="q-my-sm">✆: 619.562.6800</p>
                        </div>
                    </div>
                </div>
                <ContactForm inquiryTypeInput="Homebot" buttonLabel="Sign up!" @success="success()" />
            </div>
        </div>
    </q-page>
</template>

<script>
import ContactForm from '../components/ContactForm'

export default {
    name: 'Sellers',

    components: {
        ContactForm,
    },

    data() {
        return {
            slideIndex: '35238-70afc3829d7f0cdac24400a255ace4ba/a19b2bc9',
            showPDFButton: false,
            videoIDs: ['35238-70afc3829d7f0cdac24400a255ace4ba/a19b2bc9', '35238-70afc3829d7f0cdac24400a255ace4ba/ed23d645', '35238-70afc3829d7f0cdac24400a255ace4ba/1c3d0d96'],
            details: [
                'Estimated market value of your home',
                'Appreciation since you purchased your home',
                'Net worth/equity in your home',
                'A breakdown of principal and interest paid',
                'Tips for how to save on interest payments',
                'Your purchasing power to buy an investment property or trade up to a new home',
                'Estimated rental figures for your home (or a room in your home) on services like Airbnb or VRBO',
                'Your current cash-out potential for doing things like consolidating high-interest debt or increasing your home value through home improvement'
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
                ${ this.$q.screen.width > 767 ? 'padding: 3rem;' : '' }
            `
        },

        homeBotInnerStyle() {
            return `
                background: rgba(255, 255, 255, .85);
                max-width: 1300px;
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
