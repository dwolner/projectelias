<template>
    <q-layout view="hhh LpR fFf" @scroll="scrollHandler">
        <q-header reveal elevated>
            <q-toolbar style="height: 65px;">
                <q-btn flat @click="leftDrawerOpen = !leftDrawerOpen" icon="fas fa-bars" aria-label="Menu" style="font-size: .7rem;" />

                <q-toolbar-title style="padding: 0;"></q-toolbar-title>

                <q-btn dense size="md" @click="$router.push('/letstalk')">
                    <q-icon name="fas fa-calendar" class="q-ma-xs" style="font-size: .8rem;" />
                    <span class="gt-sm q-ma-xs" style="line-height: 1.3rem;">Let's talk</span>
                </q-btn>

                <q-btn dense size="md" @click="$router.push('/search')">
                    <q-icon name="fas fa-search" class="q-ma-xs" style="font-size: .8rem;" />
                    <span class="gt-sm q-ma-xs" style="line-height: 1.3rem;">Search for homes</span>
                </q-btn>

                <q-btn dense size="xs" @click="openWindow('https://www.instagram.com/richardeliasteam/')">
                    <q-icon name="fab fa-instagram" class="q-ma-xs" />
                </q-btn>
                <q-btn dense size="xs" @click="openWindow('https://www.youtube.com/channel/UCXsNhXcS4RLEBW18Mrh1Lxg')">
                    <q-icon name="fab fa-youtube" class="q-ma-xs" />
                </q-btn>
                <q-btn dense size="xs" @click="openWindow('https://www.facebook.com/RichardEliasTeam/')">
                    <q-icon name="fab fa-facebook" class="q-ma-xs" />
                </q-btn>
                <q-btn dense size="xs" @click="openWindow('https://www.linkedin.com/in/richardeliasrealtor/')">
                    <q-icon name="fab fa-linkedin" class="q-ma-xs" />
                </q-btn>

                <q-btn dense @click="nav(menuItems[0])">
                    <img src="statics/logos/RichardElias_CompassLockupHorizontal-White.png" style="max-height: 3.4rem;" />
                </q-btn>
            </q-toolbar>
        </q-header>

        <q-drawer v-model="leftDrawerOpen" overlay side="left">
            <q-list class="navMenu" dark separator>
                <q-item v-for="item in menuItems" :key="item.title" clickable tag="a" target="_blank" @click="nav(item)">
                    <!-- <q-item-section avatar>
            			<q-icon name="code" />
                    </q-item-section>-->
                    <q-item-section align="center">
                        <h6 style="font-size: .9rem;">{{ item.title }}</h6>
                    </q-item-section>
                </q-item>
            </q-list>

            <div class="full-width q-my-sm" align="center" @click="$root.$emit('showContactFormOverlay', true)">
                <q-btn round outline>
                    <q-icon size="xs" name="far fa-envelope" />
                </q-btn>
                <br />
                <span class="gt-sm q-ma-xs" style="line-height: 1.3rem;">Email me</span>
            </div>

            <div class="full-width q-my-sm" align="center" @click="$router.push('/letstalk')">
                <q-btn round outline>
                    <q-icon size="xs" name="far fa-calendar" />
                </q-btn>
                <br />
                <span class="gt-sm q-ma-xs" style="line-height: 1.3rem;">Let's talk</span>
            </div>
        </q-drawer>

        <q-page-container>
            <router-view />
        </q-page-container>

        <q-dialog v-model="showContactFormOverlay" @hide="$store.commit('globalInquiryType', 'General')" style="width: 100%; padding: 1rem;">
            <div class="bg-white relative-position" style="width: 100%; max-width: 750px;">
                <q-btn class="absolute" round flat color="white" @click="showContactFormOverlay = false" style="top: .5rem; right: .5rem; z-index: 999;">
                    <q-icon name="fas fa-times" color="black" style="font-size: 1rem;" />
                </q-btn>

                <div class="row q-pa-md">
                    <div class="col-12 q-pa-md">
                        <h6 class="q-my-sm" style="letter-spacing: 2px; text-transform: uppercase;">Richard Elias Team</h6>
                        <h2 class="Compass-Serif-Regular ">Contact</h2>
                    </div>

                    <div class="col-12">
                        <div class="q-mx-md" :style="`border-bottom: 1px solid #999;`"></div>
                    </div>

                    <ContactForm v-if="showContactFormOverlay" class="col-12 q-my-sm q-pa-sm" />

                    <!-- <div class="col-xs-12 col-md-6 q-pa-md" align="center">
                        <h6 class="Compass-Serif-Regular q-my-md">COMPASS</h6>
                        <p>San Diego Real Estate</p>
                        <p>Richard Elias Team | Compass</p>
                        <p>Realtor® DRE #01104411</p>
                    </div>

                    <div class="col-xs-12 col-md-6 q-pa-md" align="center">
                        <h6 class="Compass-Serif-Regular q-my-md">LOCATION</h6>
                        <p style="margin-bottom: 0;">655 W Broadway #1650, San Diego, CA, 92101</p>
                        <p><a @click="showMap = true">Get directions</a></p>
                        <p>619.672.2020</p>
                        <p>richard.elias@compass.com</p>
                    </div> -->
                </div>
            </div>
        </q-dialog>

        <q-dialog v-model="homebotCTA" seamless position="right">
            <q-card dark style="width: 100%; max-width: 400px; background: rgba(11, 11, 11, .8);">
                <q-card-section align="right">
                    <q-btn flat round icon="close" v-close-popup />
                </q-card-section>

                <q-card-section style="padding: 0 2rem;">
                    <h6>Interested in your home's worth?</h6>

                    <div class="homebot-face" style="margin: 1rem auto;"></div>

                    <p>Sign up for our free <strong>HomeBot tool</strong> to get</p>

                    <ul style="font-family: 'Compass-Sans-Regular';">
                        <li>Estimated market value of your home</li>
                        <li>Appreciation since you purchased your home</li>
                        <li>Net worth/equity in your home</li>
                        <li>A breakdown of principal and interest paid</li>
                        <li>Tips for how to save on interest payments</li>
                        <li>Tips for how to save on interest payments</li>
                    </ul>

                    <q-space />
                </q-card-section>

                <q-card-actions align="right" style="padding: 2rem;">
                    <q-btn color="white" style="padding: .25rem;" v-close-popup @click="$router.push('/homebot')">
                        <h6 class="q-mt-xs" style="font-size: .9rem; color: rgb(11, 11, 11);">Check it out</h6>
                        <q-icon class="q-ml-xs" name="fas fa-chevron-right" style="font-size: .6rem; color: rgb(11, 11, 11);" />
                    </q-btn>
                </q-card-actions>
            </q-card>
        </q-dialog>
    </q-layout>
</template>

<script>
import ContactForm from '../components/ContactForm'

export default {
    name: 'MyLayout',

    components: {
        ContactForm,
    },

    data() {
        return {
            leftDrawerOpen: false,
            showContactFormOverlay: false,
            homebotCTA: false,
            menuItems: [
                { title: 'Home', sectionID: 'top' },
                { title: 'The Team', sectionID: 'team' },
                { title: 'Buyers', route: '/buyers' },
                { title: 'Sellers', route: '/sellers' },
                { title: 'My Listings', sectionID: 'mylistings' },
                { title: 'Concierge', sectionID: 'concierge' },
                { title: 'Testimonials', sectionID: 'testimonials' },
                { title: 'News', route: '/news' },
                { title: 'Open Houses', route: '/openhouses' },
                { title: 'Private Exclusives', route: '/privateexclusives' },
                { title: 'Current Matters', route: '/videos' },
                { title: 'Contact', sectionID: 'contact' },
                // { title: 'Compass Search', route: '/search' }
            ],
        }
    },

    methods: {
        nav(item) {
            console.log('nav: ', item)

            if (item.sectionID) {
                this.$router.push(`/#${item.sectionID}`)

                // var element = document.getElementById(item.sectionID)
                setTimeout(() => {
                    this.scrollToElement(item.sectionID, 75)
                }, 1000)
            }
            if (item.route) this.$router.push(item.route)

            this.leftDrawerOpen = false
        },

        openWindow(link) {
            let options = {}
            window.open(link, '_blank')
        },

        scrollHandler(val) {
            // console.log('scrollHandler: ', val)
            // console.log('scrollHandler position: ', val.position)
        },

        showHomeBotDialog() {
            this.homebotCTA = true
        },
    },

    mounted() {
        console.log('ROuter: ', this.$router.currentRoute)

        this.showHomeBotDialog()

        this.$root.$on('showContactFormOverlay', val => {
            this.showContactFormOverlay = val
        })

        if (this.$router.currentRoute && this.$router.currentRoute.hash) {
            this.$nextTick(() => {
                setTimeout(() => {
                    this.scrollToElement(this.$router.currentRoute.hash.replace('#', ''), 75)
                }, 1000)
            })
        }
    },
}
</script>

<style scoped>
.navMenu {
    padding: 1rem;
}
</style>
