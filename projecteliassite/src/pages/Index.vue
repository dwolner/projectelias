<template>
    <q-page class="flex flex-center">
        <div id="top" class="hero">
            <div class="row container text-white q-pa-lg" align="center">
                <div class="col-12">
                    <img src="statics/logos/RichardElias_CompassLockupHorizontal-White.png" style="max-width: 18rem;" />
                    <h2 class="q-my-sm" style="letter-spacing: 2px; text-transform: uppercase;">Richard Elias Team</h2>
                    <h5 class="q-my-md">Helping you find your place in San Diego.</h5>
                </div>
                
                <div class="col-12">
                    <q-btn flat @click="showVideo = true">
                        <q-icon name="fas fa-play-circle" color="white" style="font-size: 4rem;" />
                    </q-btn>
                    <p class="q-my-sm">Learn more about how we can help.</p>
                </div>

                <div class="col-12">
                    <q-btn flat color="light" @click="scrollToElement('team', 65)">
                        <div class="full-width" style="font-size: .8rem;">See More</div>
                        <q-icon name="fas fa-chevron-down" size="xs" style="font-size: .8rem;" />
                    </q-btn>
                </div>
            </div>
            <video id="bgvid" autoplay="autoplay" preload="metadata" loop="loop" muted playsinline class="playing">
                <source src="//videos.ctfassets.net/3xf6g0o5qdho/1uc2E01DTu8ASyAKYoq4oK/40e19ac85c90529f143fec0f001b1cda/MV_About_Header_1080p_.mp4" type="video/mp4" />
            </video>
        </div>

        <Team />

        <BuyersSellers />

        <MyListings />

        <Concierge />

        <!-- <Homebot /> -->

        <Testimonials />

        <NewsInner showLength="3" />

        <OpenhousesInner showLength="3" />

        <InstaFeed />

        <div style="position: relative; background-image: url('statics/Luxury-LA.jpg'); background-size: cover; background-position: 50%; width: 100%; height: auto;"> 
            <div class="overlay"></div>
            <Contact />
        </div>

         <q-dialog v-model="showVideo" @show="showVideo = true" @hide="showVideo = false">
            <q-card>
                <q-card-section style="padding: .25rem;">
                    <q-btn flat class="absolute" round size="sm" color="white" @click="showVideo = false" style="top: .5rem; right: .5rem; z-index: 999;">
                        <q-icon name="fas fa-times" color="black" />
                    </q-btn>
                    <video v-if="showVideo" autoplay controls src="statics/site_intro.mp4" style="width: 100%;" />
                </q-card-section>
            </q-card>
        </q-dialog>
    </q-page>
</template>

<script>
import Concierge from '../components/Concierge'
import InstaFeed from '../components/InstaFeed'
import MyListings from '../components/MyListings'
import BuyersSellers from '../components/BuyersSellers'
import Team from '../components/Team'
import Testimonials from '../components/Testimonials'
import Homebot from '../components/Homebot'
import Lender from '../components/Lender'
import NewsInner from '../components/NewsInner'
import OpenhousesInner from '../components/OpenhousesInner'
import Contact from '../components/Contact'

export default {
    name: 'PageIndex',

    components: {
        Concierge,
        InstaFeed,
        MyListings,
        BuyersSellers,
        Team,
        Testimonials,
        Lender,
        NewsInner,
        OpenhousesInner,
        Homebot,
        Contact,
    },

    data() {
        return {
            showVideo: false
        }
    },

    methods: {},

    mounted() {},
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
    overflow: hidden;
}

.hero .container {
    position: relative;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    position: relative;
    z-index: 100;
}

.hero video {
    -webkit-transition: all 2s cubic-bezier(0.835, 0, 0.19, 1);
    -o-transition: all 2s cubic-bezier(0.835, 0, 0.19, 1);
    transition: all 2s cubic-bezier(0.835, 0, 0.19, 1);
    opacity: 0.75;
    filter: alpha(opacity=0);
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: 1;
    transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    background: #171819;
    background-size: cover;
    display: inline-block;
}

.overlay {
    background: rgba(0, 0, 0, .5);
    height: 100%;
    width: 100%;
    position: absolute;
}
</style>
