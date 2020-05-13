<template>
    <q-page class="flex flex-center q-pa-xl" :style="homeBotStyle">
        <div class="row well" :style="homeBotInnerStyle">
            <div class="col-xs-12 q-px-xl q-pt-xl">
                <h3><div class="homebot-face" style="display: inline-block;"></div> Interested in your home's worth?</h3>
                <h6>We invite you to join our free homebot tool to provide you with insight into your home's value.</h6>
            </div>
            <div class="col-xs-12 col-md-6 q-pa-xl" style="padding-left: 2.5rem;">
                <q-list>
                    <q-item-label header><h6>Sign up to recieve:</h6></q-item-label>
                    <q-item>
                        <q-item-section avatar>
                            <q-icon name="fas fa-chevron-right" style="font-size: .8rem;" />
                        </q-item-section>
                        <q-item-section>Estimated market value of your home</q-item-section>
                    </q-item>
                    <q-item>
                        <q-item-section avatar>
                            <q-icon name="fas fa-chevron-right" style="font-size: .8rem;" />
                        </q-item-section>
                        <q-item-section>Appreciation since you purchased your home</q-item-section>
                    </q-item>
                    <q-item>
                        <q-item-section avatar>
                            <q-icon name="fas fa-chevron-right" style="font-size: .8rem;" />
                        </q-item-section>
                        <q-item-section>Net worth/equity in your home</q-item-section>
                    </q-item>
                    <q-item>
                        <q-item-section avatar>
                            <q-icon name="fas fa-chevron-right" style="font-size: .8rem;" />
                        </q-item-section>
                        <q-item-section>A breakdown of principal and interest paid</q-item-section>
                    </q-item>
                    <q-item>
                        <q-item-section avatar>
                            <q-icon name="fas fa-chevron-right" style="font-size: .8rem;" />
                        </q-item-section>
                        <q-item-section>Tips for how to save on interest payments</q-item-section>
                    </q-item>
                    <q-item>
                        <q-item-section avatar>
                            <q-icon name="fas fa-chevron-right" style="font-size: .8rem;" />
                        </q-item-section>
                        <q-item-section>Your purchasing power to buy an investment property or trade up to a new home</q-item-section>
                    </q-item>
                    <q-item>
                        <q-item-section avatar>
                            <q-icon name="fas fa-chevron-right" style="font-size: .8rem;" />
                        </q-item-section>
                        <q-item-section>Estimated rental figures for your home (or a room in your home) on services like Airbnb or VRBO</q-item-section>
                    </q-item>
                    <q-item>
                        <q-item-section avatar>
                            <q-icon name="fas fa-chevron-right" style="font-size: .8rem;" />
                        </q-item-section>
                        <q-item-section>Your current cash-out potential for doing things like consolidating high-interest debt or increasing your home value through home improvement</q-item-section>
                    </q-item>
                </q-list>
            </div>

            <div class="col-xs-12 col-md-6 q-pa-xl">
                <div id="contact-profile" class="row justify-center">
                    <div class="col-xs-12 col-sm-6 q-pa-sm" align="right">
                        <img src="statics/team/richard_square.jpg" style="max-width: 150px;" />
                    </div>
                    <div class="col-xs-12 col-sm-6 q-pa-sm" align="left">
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
                background-image: url('statics/house_shots/Compass-PB-Originals-52.jpg');
                background-size: cover;
            `
        },

        homeBotInnerStyle() {
            return `
                background: rgba(255, 255, 255, .8);
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
