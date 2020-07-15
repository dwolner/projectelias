<template>
    <q-page class="flex">
        <div :style="parentStyle">
            <div class="well" :style="innerStyle">
                <div class="row">
                    <div class="col-xs-12" style="padding: 2rem 2.5rem 0;">
                        <h3 class="Compass-Serif-Regular q-mr-md" style="float: left;" v-scroll-reveal="{ delay: 0, easing: 'ease-in-out', distance: '100px', origin: 'left' }">
                            Sell your house in 2020!
                        </h3>

                        <span
                            class="gt-sm"
                            v-for="(item, index) in 6"
                            v-scroll-reveal="{ delay: index * 75, scale: 0.75, rotate: { z: -90 }, easing: 'ease-in-out', distance: '100px', origin: 'left' }"
                            style="float: left;"
                        >
                            <svg
                                version="1.1"
                                id="svg"
                                class=""
                                width="50"
                                height="50"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 50 50"
                                xml:space="preserve"
                                :style="`transform: rotate(-${45 - index * 9}deg);`"
                            >
                                <rect id="svgRectangle" class="animated" x="10" y="22" width="35" height="2" fill="#000" />
                            </svg>
                        </span>
                    </div>
                </div>

                <div class="row reverse-wrap q-pa-lg">
                    <div class="col-xs-12 col-md-6 q-pa-lg">
                        <h5 class="q-my-md">It's a Seller's Market</h5>

                        <p style="font-size: 1rem;">
                            Housing inventory is low nationwide which means there are fewer homes for buyers to choose from. There were 15.7% fewer homes for sale this March compared to 2019 according
                            to realtor.com’s March Housing Report. 
                        </p>
                        <p style="font-size: 1rem;">
                            Additionally, median listing prices are up nationally at $320,000, 3.8% higher than in 2019. If economic conditions worsen, the pool
                            of buyers might shrink and home prices could drop. Why wait to sell when prices are possibly going to drop?
                        </p>
                    </div>

                    <div class="col-xs-12 col-md-6 q-pa-lg" align="center">
                        <q-img src="statics/compass_sellers_graph.jpg" style="max-width: 400px;" />
                    </div>
                </div>

                <div class="row q-pa-lg">
                    <div class="col-xs-12 col-md-4 q-pa-lg" align="center">
                        <q-img src="statics/compass_money.jpg" style="max-width: 250px;" />
                    </div>

                    <div class="col-xs-12 col-md-8 q-pa-lg">
                        <h5 class="q-my-md">Interest rates are down</h5>

                        <p style="font-size: 1rem;">
                            Interest rates are expected to remain low throughout the year and there are many trends in the market showing good signs for sellers.
                        </p>
                    </div>
                </div>

                <div class="row reverse-wrap q-pa-lg">
                    <div class="col-xs-12 col-md-8 q-pa-lg">
                        <h5 class="q-my-md">Safe home selling standards and VAS</h5>

                        <p style="font-size: 1rem;">
                            The safety of our clients and communities are of the utmost importance to us. During these uncertain times, we are offering a completely virtual home selling and buying experience. From digital marketing, to virtual showings, to inspection, to closing, we have the resources to bring you through the entire transaction virtually.
                        </p>
                        <p style="font-size: 1rem;">
                            However, should you feel the need to show your home to prospective buyers in person, we have the tools to guide you through a safe process.
                        </p>
                    </div>

                    <div class="col-xs-12 col-md-4 q-pa-lg" align="center">
                        <q-img src="statics/compass_apartment.jpg" style="max-width: 250px;" />
                    </div>
                </div>
            </div>

            <div class="row well" :style="innerStyle">
                <div class="col-xs-12" style="padding: 2rem 2.5rem 0;">
                    <h3 class="Compass-Serif-Regular q-mr-md" style="float: left;" v-scroll-reveal="{ delay: 0, easing: 'ease-in-out', distance: '100px', origin: 'left' }">
                        Interested in selling?
                    </h3>

                    <span
                        class="gt-sm"
                        v-for="(item, index) in 6"
                        v-scroll-reveal="{ delay: index * 75, scale: 0.75, rotate: { z: -90 }, easing: 'ease-in-out', distance: '100px', origin: 'left' }"
                        style="float: left;"
                    >
                        <svg
                            version="1.1"
                            id="svg"
                            class=""
                            width="50"
                            height="50"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 50 50"
                            xml:space="preserve"
                            :style="`transform: rotate(-${45 - index * 9}deg);`"
                        >
                            <rect id="svgRectangle" class="animated" x="10" y="22" width="35" height="2" fill="#000" />
                        </svg>
                    </span>
                </div>

                <div class="col-xs-12 col-md-6 q-pa-md">
                    <div class="col-12 q-px-lg">
                        <h6>Give us your info and we will start you off with our Seller's Guide!</h6>
                    </div>
                    <div class="col-12 q-pa-md">
                        <ContactForm inquiryTypeInput="Selling" :agentID="agentID" @success="success()" />

                        <ContactProfile class="q-my-md" :agentID="agentID" />
                    </div>
                    <div id="pdfbutton" class="col-12 q-pa-lg">
                        <q-btn v-if="showPDFButton" size="lg" class="full-width" color="primary" @click="goToPDF()">
                            <h6>Get The Seller's Guide</h6>
                            <q-icon size="sm" name="fas fa-external-link-square-alt" class="q-ml-sm" />
                        </q-btn>
                    </div>
                </div>

                <div class="col-xs-12 col-md-6 q-pa-md" style="">
                    <div class="row well justify-center relative-position" style="border: 2px solid rgb(11, 11, 11);">
                        <div class="col-xs-12 col-sm-6 col-md-12 q-py-xl" align="center">
                            <h5>Top Videos For Sellers</h5>

                            <q-carousel
                                v-model="slideIndex"
                                class="rounded-borders"
                                control-color="black"
                                transition-prev="slide-right"
                                transition-next="slide-left"
                                animated
                                swipeable
                                navigation
                                padding
                                arrows
                                infinite
                                style="max-width: 500px; height: 100%; margin: 0 auto; background: rgba(0, 0, 0, 0);"
                            >
                                <q-carousel-slide v-for="(id, index) in videoIDs" :key="index" :name="id" class="column no-wrap flex-center" style="padding-bottom: 50px; padding-top: 25px;">
                                    <iframe
                                        sandbox="allow-scripts"
                                        :src="`https://www.simplifyingthemarket.com/en/videos/embed/${id}`"
                                        frameborder="0"
                                        allowfullscreen
                                        :width="videoEmbedWidth"
                                        :height="videoEmbedHeight"
                                    ></iframe>
                                </q-carousel-slide>
                            </q-carousel>
                        </div>

                        <div class="col-xs-12 col-sm-6 col-md-12 q-py-xl" align="center">
                            <div id="homebot_homeowner" style="max-width: 400px;"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </q-page>
</template>

<script>
import ContactForm from '../components/ContactForm'
import ContactProfile from '../components/ContactProfile'

export default {
    name: 'Sellers',

    components: {
        ContactForm,
        ContactProfile
    },

    data() {
        return {
            agentID: '',
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

        parentStyle() {
            return `
                background-image: url('statics/house_shots/Encinitas-19.jpg');
                background-size: cover;
                width: 100%;
                ${this.$q.screen.width > 767 ? 'padding: 3rem;' : ''}
            `
        },

        innerStyle() {
            return `
                background: rgba(255, 255, 255, .85);
                max-width: 1300px;
                width: 100%;
                margin-bottom: 3rem;
            `
        },
    },

    methods: {
        success() {
            this.showPDFButton = true
            this.scrollToElement('pdfbutton')
        },

        goToPDF() {
            window.open('https://richardelias.com/statics/SellingYourHouseSummer2020.pdf', '_blank')
        },
    },

    mounted() {
        window.Homebot('#homebot_homeowner', '926161d8746a94461a4f2df4afa8ef7a1186cea8f0be1ff3')
    },

    created() {
        let agentID = this.$router.currentRoute.query.agent
        console.log('agentID: ', agentID)

        if (agentID) this.agentID = agentID
    }
}
</script>

<style scoped></style>
