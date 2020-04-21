<template>
    <div id="concierge" class="bg-grey-2" style="width: 100%;">
        <div v-scroll-reveal.reset="{ opacity: 0, duration: 1000 }" class="row well container">

            <div class="col-xs-12 col-md-6 q-pa-xl">
                <div :class="$q.screen.width > 767 ? 'verticalCenter' : ''">
                    <div class="q-pa-sm">
                        <h5 class="Compass-Serif-Regular">Compass</h5>
                        <h5 class="q-mb-md uppercase" style="font-weight: 100;">Private Exclusives</h5>
                        <h4 class="q-mb-md Compass-Serif-Regular">Work with Richard to sell your home as a Compass Private Exclusive</h4>
                        <h6>Listing your home as a private exclusive allows you to control what information is shared about you and your home while still getting exposure to over 15,000 top agents.</h6>
                    </div>
                </div>
            </div>

            <div
                class="col-xs-12 col-md-6 relative-position"
                style="min-height: 300px; background: url('//images.ctfassets.net/qaddfuc6mowj/6tU1J1fJ9F62gwS3H7xs2Q/f8653385d2bc8a04e2c881b9d254001b/Concierge2.gif'); background-size: cover; background-repeat: no-repeat; background-position: 50%;"
            >
                
            </div>
        </div>

        <div v-scroll-reveal.reset="{ opacity: 0, duration: 1000 }" class="row well container bg-white">
            <div class="col-xs-12 col-sm-6 q-pa-xl row">
                <div class="col-xs-12 col-sm-6 q-pa-sm">
                    <img src="statics/team/richard_square.jpg" style="max-width: 100%;" />
                </div>
                <div class="col-xs-12 col-sm-6 q-pa-sm">
                    <div>
                        <p class="q-my-sm"><strong>Richard Elias</strong> | Realtor</p>
                        <p class="q-my-sm">richard.elias@compass.com</p>
                        <p class="q-my-sm">M: 619.672.2020</p>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 q-pa-xl">
                <ContactForm inquiryTypeInput="Concierge" />
            </div>
        </div>

        <div v-scroll-reveal.reset="{ opacity: 0, duration: 1000 }" class="row well container bg-white">
            <div class="col-xs-12 q-pa-xl" align="center">
                <h4 class="q-mb-md uppercase Compass-Serif-Regular" style="font-weight: 100;">What to expect</h4>
                <h6>A private exclusive listing is an off-market home that can be shared by a Compass agent directly with their colleagues and their buyers. Property details aren’t disseminated widely and won’t appear on public home search websites.</h6>
            </div>
            <div class="col-xs-12 q-pa-lg row" align="center">
                <div v-for="(item, index) in qualities" class="col-xs-12 col-sm-6 col-md-3 q-pa-md" align="center" :style="index ? `border-left: 1px solid #ccc;` : ''">
                    <h4>{{ item.title }}</h4>
                    <h6 class="q-mt-md">{{ item.desc }}</h6>
                </div>
            </div>
        </div>

        <div v-scroll-reveal.reset="{ opacity: 0, duration: 1000 }" class="row well container">

            <div class="col-xs-12 col-md-6 q-pa-xl">
                <div :class="$q.screen.width > 767 ? 'verticalCenter' : ''">
                    <div class="q-pa-sm">
                        <h5 class="Compass-Serif-Regular">Compass</h5>
                        <h5 class="q-mb-md uppercase" style="font-weight: 100;">Private Exclusives</h5>
                        <h4 class="q-mb-md Compass-Serif-Regular">Work with Richard to sell your home as a Compass Private Exclusive</h4>
                        <h6>Listing your home as a private exclusive allows you to control what information is shared about you and your home while still getting exposure to over 15,000 top agents.</h6>
                    </div>
                </div>
            </div>

            <div
                class="col-xs-12 col-md-6 relative-position"
                style="min-height: 300px; background: url('//images.ctfassets.net/qaddfuc6mowj/6tU1J1fJ9F62gwS3H7xs2Q/f8653385d2bc8a04e2c881b9d254001b/Concierge2.gif'); background-size: cover; background-repeat: no-repeat; background-position: 50%;"
            >
                
            </div>
        </div>

        <div v-scroll-reveal.reset="{ opacity: 0, duration: 1000 }" class="row well container">

            <div class="col-xs-12 col-md-6 q-pa-xl">
                <div :class="$q.screen.width > 767 ? 'verticalCenter' : ''">
                    <div class="q-pa-sm">
                        <h5 class="Compass-Serif-Regular">Compass</h5>
                        <h5 class="q-mb-md uppercase" style="font-weight: 100;">Private Exclusives</h5>
                        <h4 class="q-mb-md Compass-Serif-Regular">Work with Richard to sell your home as a Compass Private Exclusive</h4>
                        <h6>Listing your home as a private exclusive allows you to control what information is shared about you and your home while still getting exposure to over 15,000 top agents.</h6>
                    </div>
                </div>
            </div>

            <div
                class="col-xs-12 col-md-6 relative-position"
                style="min-height: 300px; background: url('//images.ctfassets.net/qaddfuc6mowj/6tU1J1fJ9F62gwS3H7xs2Q/f8653385d2bc8a04e2c881b9d254001b/Concierge2.gif'); background-size: cover; background-repeat: no-repeat; background-position: 50%;"
            >
                
            </div>
        </div>

        <q-dialog v-model="showConciergePromo" @show="showVideo = true" @hide="showVideo = false">
            <q-card>
                <q-card-section>
                    <q-btn class="absolute" round size="sm" color="white" @click="showConciergePromo = false" style="top: .5rem; right: .5rem; z-index: 999;">
                        <q-icon name="fas fa-times" color="black" />
                    </q-btn>
                    <video v-if="showVideo" autoplay controls src="statics/30secondprogramoverview.mp4" style="width: 100%;" />
                </q-card-section>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
import ContactForm from '../components/ContactForm'

export default {
    name: 'PrivateExclusives',

    components: {
        ContactForm
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

    methods: {
        
    }
}
</script>

<style scoped>
.hero {
    width: 100%;
    height: calc(100vh - 50px);
    background: #171819;
    position: relative;
    overflow: hidden;
}

.container {
    width: 100%;
    height: 100&;
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

@media (min-width: 768px) {
    .hero {
        min-height: 600px;
    }
}

.center {
    position: relative;
    width: fit-content;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}
</style>
