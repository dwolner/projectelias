<template>
    <q-page id="concierge" class="flex flex-center cx-dotGridBackground full-width">
  
        <div v-scroll-reveal.reset="{ opacity: 0, duration: 1000 }" class="row well container flex flex-center">
            <div class="col-xs-12 col-md-6 q-pa-xl">
                <div class="q-pa-sm">
                    <h3 class="Compass-Serif-Regular q-mb-md">Compass Concierge</h3>
                    <p>Get fronted for the cost of home improvement services with no interest — ever.</p>
                    <p>Compass Concierge is the hassle-free way to sell your home faster and for a higher price with services like staging, flooring, painting, and more.</p>
                </div>
                <div class="col-xs-12 q-pa-sm">
                    <h5 class="q-mb-md">Learn how <span style="text-transform: capitalize;">{{ agentID }}</span> can help sell your home faster and for a higher price with Concierge.</h5>
                </div>

                <ContactProfile />

                <div class="col-12 bg-white">
                    <ContactForm inquiryTypeInput="Concierge" />
                </div>
            </div>

            <div
                class="col-xs-12 col-md-6 relative-position"
                :style="`height: ${ $q.screen.width > 1024 ? '100vh' : '400px' }; min-height: 300px; background: url('statics/Concierge2.gif'); background-size: cover; background-repeat: no-repeat; background-position: 50%;`"
            >
                <div class="center">
                    <q-btn flat @click="showConciergePromo = true">
                        <q-icon name="fas fa-play-circle" color="white" style="font-size: 4rem;" />
                    </q-btn>
                </div>
            </div>
        </div>

        <q-dialog v-model="showConciergePromo" @show="showVideo = true" @hide="showVideo = false">
            <q-card>
                <q-card-section style="padding: .25rem;">
                    <q-btn class="absolute" round flat size="sm" color="white" @click="showConciergePromo = false" style="top: .5rem; right: .5rem; z-index: 999;">
                        <q-icon name="fas fa-times" color="black" />
                    </q-btn>
                    <video v-if="showVideo" autoplay controls src="statics/30secondprogramoverview.mp4" style="width: 100%;" />
                </q-card-section>
            </q-card>
        </q-dialog>

    </q-page>
</template>

<script>
import ContactForm from './ContactForm'
import ContactProfile from './ContactProfile'

export default {
    name: 'Concierge',

    components: {
        ContactForm,
        ContactProfile
    },

    data() {
        return {
            showConciergePromo: false,
            showVideo: false
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
    min-height: 100vh;
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
