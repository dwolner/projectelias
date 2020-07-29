<template>
    <q-page id="concierge" class="flex flex-center">
        <div v-scroll-reveal.reset="{ opacity: 0, duration: 1000 }" class="container bg-grey-2">
            <div class="row well">

                <div class="col-xs-12 col-md-6 q-pa-xl flex flex-center">
                    <div class="q-pa-sm">
                        <h5 class="Compass-Serif-Regular">Compass</h5>
                        <h5 class="q-mb-md uppercase" style="font-weight: 100;">Private Exclusives</h5>
                        <h4 class="q-mb-md Compass-Serif-Regular">Work with Richard to sell your home as a Compass Private Exclusive</h4>
                        <h6>Listing your home as a private exclusive allows you to control what information is shared about you and your home while still getting exposure to over 15,000 top agents.</h6>
                    </div>
                </div>

                <div
                    class="col-xs-12 col-md-6 relative-position"
                    style="min-height: 300px; background: url('//images.ctfassets.net/qaddfuc6mowj/6tU1J1fJ9F62gwS3H7xs2Q/f8653385d2bc8a04e2c881b9d254001b/Concierge2.gif'); background-size: cover; background-repeat: no-repeat; background-position: 50%;"
                />
            </div>
        </div>

        <div v-scroll-reveal.reset="{ opacity: 0, duration: 1000 }" class="container bg-white">
            <div class="row well">
                <div class="col-xs-12 col-sm-6 q-pa-xl">
                    <ContactProfile />
                </div>
                <div class="col-xs-12 col-sm-6 q-pa-xl">
                    <ContactForm inquiryTypeInput="Private Exclusive" />
                </div>
            </div>
        </div>

        <div v-scroll-reveal.reset="{ opacity: 0, duration: 1000 }" class="container bg-white">
            <div class="row well">
                <div class="col-xs-12 q-pa-xl" align="center">
                    <h4 class="q-mb-md uppercase Compass-Serif-Regular" style="font-weight: 100;">What to expect</h4>
                    <h6>A private exclusive listing is an off-market home that can be shared by a Compass agent directly with their colleagues and their buyers. Property details aren’t disseminated widely and won’t appear on public home search websites.</h6>
                </div>
                <div class="col-xs-12 q-pa-lg q-mb-xl row" align="center">
                    <div v-for="(item, index) in qualities" class="col-xs-12 col-sm-6 col-md-3 q-pa-md" align="center" :style="index && $q.screen.width > 992 ? `border-left: 1px solid #ccc;` : ''">
                        <h4 style="font-size: 1.75rem;">{{ item.title }}</h4>
                        <h6 class="q-mt-md">{{ item.desc }}</h6>
                    </div>
                </div>
            </div>
        </div>

        <div v-scroll-reveal.reset="{ opacity: 0, duration: 1000 }" class="container bg-grey-2">
            <div class="row well q-py-xl">
                
                <div
                    class="col-xs-12 col-md-6 q-pa-xl relative-position"
                >
                    <q-img src="statics/photos/seller_reasons.jpg" style="max-width: 100%;" />
                </div>

                <div class="col-xs-12 col-md-6 q-pa-xl flex flex-center">
                    <div class="q-pa-sm">
                        <h4 class="Compass-Serif-Regular">Reasons why you might choose to sell your home as a private exclusive:</h4>
                        <ul>
                            <li><h6>New job or relocation</h6></li>
                            <li><h6>Family changes like marriage or divorce</h6></li>
                            <li><h6>Evolving financial circumstances</h6></li>
                            <li><h6>Health issues</h6></li>
                            <li><h6>Valuable belongings like art or furniture</h6></li>
                            <li><h6>Opposition to holding open houses</h6></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>

        <div v-scroll-reveal.reset="{ opacity: 0, duration: 1000 }" class="container">
            <div class="row well q-py-xl">

                <div class="col-xs-12 col-md-6 q-pa-xl flex flex-center">
                    <div class="q-pa-sm">
                        <h6 class="Compass-Serif-Regular">Richard Elias was recommended to me by a friend. I had interviewed three other realtors and decided on Rich. I am so glad I did. His knowledge of listing, terms and listing price were spot on. My house had 13 offers in 5 days. Closed escrow in 14 days with an all cash offer. $30,000.00 over listing price. Rich is very professional and friendly. I will recommend Rich to anyone who needs a realtor.</h6>
                        <h6 class="q-mt-lg">Tina C.</h6>
                    </div>
                </div>

                <div
                    class="col-xs-12 col-md-6 q-pa-xl relative-position"
                >
                    <q-img src="statics/photos/testimony.jpg" style="max-width: 100%;" />
                </div>

            </div>
        </div>
        
        <div style="position: relative; background-image: url('statics/Luxury-LA.jpg'); background-size: cover; background-position: 50%; width: 100%; height: auto;"> 
            <div class="overlay"></div>
            <Contact />
        </div>

    </q-page>
</template>

<script>
import ContactForm from '../components/ContactForm'
import Contact from '../components/Contact'
import ContactProfile from '../components/ContactProfile'

export default {
    name: 'PrivateExclusives',

    components: {
        ContactForm, Contact, ContactProfile
    },

    data() {
        return {
            showConciergePromo: false,
            showVideo: false,
            qualities: [{
                title: 'Discretion',
                desc: 'Privacy is the ultimate commodity and the decision to sell your home is a personal one.'
            }, {
                title: 'Flexibility',
                desc: 'Decide when to share details about your home, including price, more broadly on your own timing.'
            }, {
                title: 'Quality',
                desc: 'Retain exposure to over 15,000 top agents nationwide, including premium placement on our agent facing platform.'
            }, {
                title: 'Value',
                desc: 'Get the best offer by testing the market privately to gather key insights without your listing getting stale.'
            }]
        }
    },

    computed: {
        agentID() {
            return this.$store.state.agentID
        },
    },

    methods: {
        
    }
}
</script>

<style scoped>
.container {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.object-fit {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.overlay {
    background: rgba(0, 0, 0, .5);
    height: 100%;
    width: 100%;
    position: absolute;
}
</style>
