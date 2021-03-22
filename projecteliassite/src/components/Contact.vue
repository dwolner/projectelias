<template>
    <div id="contact">

        <div class="well row q-pa-xl" style="position: relative; z-index: 999; color: white;">
            <div class="col-xs-12 col-sm-4 q-px-md" align="center">
                <img src="statics/logos/RichardElias_CompassLockupHorizontal-White.png" style="max-width: 15rem; width: 100%; margin: -1rem 0;" />
                <p>San Diego Real Estate</p>
            </div>
            <div class="col-xs-12 col-sm-4 q-pa-sm" align="center">
                <!-- <h6 class="Compass-Serif-Regular q-my-md">COMPASS</h6> -->
                <p class="no-margin">Richard Elias Team | Compass</p>
                <p class="no-margin">✆: 619.562.6800</p>
                <p class="no-margin">Realtor® CA DRE #01104411</p>
                <p class="no-margin">CA DRE #01527365</p>
            </div>
            <div class="col-xs-12 col-sm-4 q-pa-sm" align="center">
                <p class="no-margin">655 W Broadway #1650</p>
                <p class="no-margin">San Diego, CA, 92101</p>
                <p class="no-margin"><a @click="showMap = true">Get directions</a></p>
            </div>
            <div class="col-xs-12 q-pa-sm" align="center">
                <q-btn dense color="primary" @click="$router.push('/letstalk')">
                    <q-icon name="fas fa-calendar" class="q-ma-xs" style="font-size: .8rem;" />
                    <span class="q-mt-sm q-mb-xs q-mx-xs" style="line-height: 1.3rem;">Let's talk</span>
                </q-btn>
            </div>
            <div class="col-xs-12 q-pa-sm" align="center">
                <span v-for="(item, index) in compassLocations" :key="index">
                    <a :href="item.url" target="_blank">{{ item.title }}</a>
                    <span v-if="(index + 1) !== compassLocations.length"> • </span>
                </span>
            </div>
            <div class="col-xs-12 q-py-md q-px-md" align="center">
                <p style="font-size: .8rem;">While some of the listings on this site may not be our exclusive listings, we have ongoing relationships with all of the listing agents.</p>
                <p><span style="font-style: italic;">Designed and developed by </span> <a href="http://danwolner.com/">Daniel Wolner.</a></p>
            </div>
            <div class="col-xs-6 q-px-sm" align="left">
                <p style="font-size: .8rem;">© COPYRIGHT {{ year }} | <a @click="$router.push('/privacypolicy')">PRIVACY POLICY</a></p>
            </div>
            <div class="col-xs-6 q-px-sm" align="right">
                <p style="font-size: .8rem;">THE RICHARD ELIAS TEAM</p>
            </div>
        </div>

        <q-dialog v-model="showMap">
            <q-card>
                <q-card-section>
                    <q-btn class="absolute" round size="sm" color="white" @click="showMap = false" style="top: .5rem; right: .5rem; z-index: 999;">
                        <q-icon name="fas fa-times" color="black" />
                    </q-btn>
                    <iframe :width="mapWidth" :height="mapWidth" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=655+W+Broadway+Ste.+1650,+San+Diego,+CA,+92101&key=AIzaSyBe1MCdquXljVHyTzXwD194J8Eq6ubdaTs" allowfullscreen></iframe>
                </q-card-section>
            </q-card>
        </q-dialog>

    </div>
</template>

<script>
import { date } from 'quasar'
export default {
    name: 'Contact',

    data() {
        return {
            mapOffset: 150,
            showMap: false,
            compassLocations: [
                { title: 'Carmel Valley', url: 'https://goo.gl/maps/ctwZ8TRrRyT3otcE7' },
                { title: 'Downtown San Diego', url: 'https://goo.gl/maps/13TsfmWnC5P81jMx7' },
                { title: 'La Jolla', url: 'https://goo.gl/maps/bnEd8AawhDhS3CgV6' },
                { title: 'Rancho Santa Fe', url: 'https://goo.gl/maps/K6J9fmxHn7TT6Wbp9' },
                { title: 'Encinitas', url: 'https://goo.gl/maps/8twVKAsvHXxGvNTr6' },
                { title: 'Cardiff', url: 'https://goo.gl/maps/ioJn3YpXu6rWGH8H7' },
            ]
        }
    },

    computed: {
        mapWidth() {
            let width = this.$q.screen.width - this.mapOffset
            return width < 300 ? width : 300
        },
        year() {
            let timeStamp = Date.now()
            return date.formatDate(timeStamp, 'YYYY')
        }
    },

    methods: {

    },

    created() {

    }
}
</script>

<style scoped>
    #contact {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
    }
</style>
