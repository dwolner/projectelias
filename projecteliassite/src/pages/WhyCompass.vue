<template>
    <q-page class="flex flex-center">
        <div :style="parentStyle" class="relative-position" align="center">
            <!-- <div class="whiteOverlay"></div> -->

            <div class="q-pa-xl" :style="$q.screen.width > 767 ? 'padding: 5rem;' : 'padding: 2rem;'">
                <q-img src="statics/whycompass/compasslogotrans.png" style="max-width: 500px;" v-scroll-reveal="{ delay: 1000, easing: 'ease-in-out', distance: '100px', origin: 'left' }" />
            </div>
        </div>

        <div class="row full-width q-my-lg">
            <div class="col-xs-12" style="padding: 2.5rem 2.5rem 0;">
                <h3 class="Compass-Serif-Regular q-mr-md" style="float: left;" v-scroll-reveal="{ delay: 0, easing: 'ease-in-out', distance: '100px', origin: 'left' }">
                    Leadership
                </h3>
            </div>
            <div class="col-xs-12 col-md-6" style="padding: 2.5rem 2.5rem 0;">
                <q-list>
                    <q-item v-for="person in team" :key="person.name" class="q-mb-sm">
                        <q-item-section avatar>
                            <q-avatar>
                                <img :src="`statics/whycompass/${person.avatar}`">
                            </q-avatar>
                        </q-item-section>

                        <q-item-section>
                            <q-item-label>{{ person.name }}</q-item-label>
                            <q-item-label caption lines="1">{{ person.role }}</q-item-label>
                        </q-item-section>

                        <q-item-section side>
                            <img :src="`statics/whycompass/${person.icon}`" style="max-width: 100px;">
                        </q-item-section>
                    </q-item>
                </q-list>
            </div>
            <div class="col-xs-12 col-md-6 row" style="padding: 2.5rem 2.5rem 0;">
                <q-list class="col-8">
                    <q-item class="q-mb-sm">
                        <q-item-section side>
                            <img src="statics/whycompass/screen.png" style="max-width: 50px;">
                        </q-item-section>

                        <q-item-section>
                            <q-item-label>Marketing Team</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item class="q-mb-sm">
                        <q-item-section side>
                            <img src="statics/whycompass/person.png" style="max-width: 50px;">
                        </q-item-section>

                        <q-item-section>
                            <q-item-label>Engineers</q-item-label>
                        </q-item-section>
                    </q-item>
                </q-list>
                <div class="col-4">
                    <img src="statics/whycompass/companies.jpg" style="max-width: 150px;">
                </div>
            </div>
        </div>

        <div class="row full-width q-my-lg">
            <div class="col-xs-12" style="padding: 2.5rem 2.5rem 0;">
                <h3 class="Compass-Serif-Regular q-mr-md" style="float: left;" v-scroll-reveal="{ delay: 0, easing: 'ease-in-out', distance: '100px', origin: 'left' }">
                    Technology, Reimagined
                </h3>
            </div>
            <div class="col-xs-12">
                <q-carousel
                    v-model="techSlideIndex"
                    class="full-width"
                    transition-prev="slide-right"
                    transition-next="slide-left"
                    control-color="black"
                    animated
                    swipeable
                    navigation
                    padding
                    arrows
                    infinite
                    style="background: rgba(0, 0, 0, 0);"
                >
                    <q-carousel-slide v-for="(slide, index) in techSlides" :key="index" :name="slide.title" class="full-width row">
                        <div class="col-xs-12 col-md-6 q-pa-md" :align="$q.screen.width > 500 ? 'left' : 'center'">
                            <h4 class="q-mb-md">{{ slide.title }}</h4>
                            <h6>{{slide.info}}</h6>
                        </div>

                        <div class="col-xs-12 col-md-6 q-pa-md" align="center">
                            <img class="shadow-8" :src="`statics/whycompass/${ slide.filename }`" style="height: auto; width: 100%; max-width: 400px; margin: 0 auto;">
                        </div>
                    </q-carousel-slide>
                </q-carousel>
            </div>
        </div>

        <div class="row full-width q-my-lg">
            <div class="col-xs-12" style="padding: 2.5rem 2.5rem 0;">
                <h3 class="Compass-Serif-Regular q-mr-md" style="float: left;" v-scroll-reveal="{ delay: 0, easing: 'ease-in-out', distance: '100px', origin: 'left' }">
                    Compass Concierge
                </h3>
            </div>
            <div class="col-12 row" style="padding: 2.5rem 2.5rem 0;">
                <div
                    class="col-xs-12 col-md-4 relative-position"
                    :style="`min-height: 300px; background: url('statics/whycompass/concierge_frame.png'); background-size: cover; background-repeat: no-repeat; background-position: 50%;`"
                >
                    <div class="center">
                        <q-btn flat @click="showConciergePromo = true">
                            <q-icon name="fas fa-play-circle" color="white" style="font-size: 4rem;" />
                        </q-btn>
                    </div>
                </div>
                <div class="col-xs-12 col-md-8 q-pa-lg">
                    <h4 class="q-mb-md">Get fronted for the cost of home improvement services with no interest — ever.</h4>
                    <div class="row">
                        <div v-for="card in concierge" :key="card.title" class="col-sm-12 col-md-6 q-pa-md" align="center">
                            <h4>{{card.title}}</h4>
                            <h6>{{card.info}}</h6>
                        </div>
                    </div>
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

        <div class="row full-width q-my-lg">
            <div class="col-xs-12" style="padding: 2.5rem 2.5rem 0;">
                <h3 class="Compass-Serif-Regular q-mr-md" style="float: left;" v-scroll-reveal="{ delay: 0, easing: 'ease-in-out', distance: '100px', origin: 'left' }">
                    We Sell All Over San Diego
                </h3>
            </div>
            <div class="col-12 row" style="padding: 2.5rem 2.5rem 0;">
                <div class="col-xs-12 col-md-5 row justify-center q-pa-md">
                    <div v-for="card in sales" :key="card.title" class="col-sm-12 col-md-6 q-pa-md" align="center">
                        <h4>{{card.title}}</h4>
                        <h6>{{card.info}}</h6>
                    </div>
                </div>
                <div class="col-xs-12 col-md-7 q-pa-lg">
                    <img class="shadow-8" src="statics/whycompass/sandiegomap.png" style="max-width: 100%; margin: 0 auto;">
                </div>
            </div>
        </div>

        <div class="row full-width q-my-lg">
            <div class="col-xs-12" style="padding: 2.5rem 2.5rem 0;">
                <h3 class="Compass-Serif-Regular q-mr-md" style="float: left;" v-scroll-reveal="{ delay: 0, easing: 'ease-in-out', distance: '100px', origin: 'left' }">
                    Key Metrics
                </h3>
            </div>
            <div class="col-12 row" style="padding: 2.5rem 2.5rem 0;">
                <div class="col-xs-12 col-md-6 q-pa-md">
                    <img src="statics/whycompass/metrics.jpg" style="max-width: 100%; margin: 0 auto;">
                </div>
                <div class="col-xs-12 col-md-6 q-pa-md">
                    <img src="statics/whycompass/office_combo.png" style="max-width: 100%; margin: 0 auto;">
                </div>
            </div>
        </div>

        <div class="row full-width q-my-lg">
            <div class="col-xs-12" style="padding: 2.5rem 2.5rem 0;">
                <h3 class="Compass-Serif-Regular q-mr-md" style="float: left;" v-scroll-reveal="{ delay: 0, easing: 'ease-in-out', distance: '100px', origin: 'left' }">
                    What Sets Us Apart
                </h3>
            </div>
            <div class="col-12 row" style="padding: 2.5rem 2.5rem 0;">
                <div class="col-xs-12 col-md-6 q-pa-md">
                    <h3>Proactive Marketing —</h3>
                    <ul style="font-size: 1.5rem;">
                        <li>Reverse prospecting</li>
                        <li>Past client database</li>
                        <li>Thousands of leads</li>
                        <li>Proactive calling</li>
                        <li>Move up / downsize</li>
                        <li>Door knocking</li>
                    </ul>
                </div>
                <div class="col-xs-12 col-md-6 q-pa-md">
                    <h3>Targeted Marketing —</h3>
                    <ul style="font-size: 1.5rem;">
                        <li>Mail & email campaigns</li>
                        <li>Qualified list of renters</li>
                        <li>Network of top 10% of agents</li>
                        <li>Open houses (optional)</li>
                        <li>Network Tool</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="row full-width q-my-lg">
            <div class="col-xs-12" style="padding: 2.5rem 2.5rem 0;">
                <h3 class="Compass-Serif-Regular q-mr-md" style="float: left;" v-scroll-reveal="{ delay: 0, easing: 'ease-in-out', distance: '100px', origin: 'left' }">
                    Our Promise
                </h3>
            </div>
            <div class="col-12 row" style="padding: 2.5rem 2.5rem 0;">
                <div class="col-xs-12 col-md-4 q-pa-md" align="center">
                    <h4>Promote your home</h4>
                </div>
                <div class="col-xs-12 col-md-4 q-pa-md" align="center">
                    <h4>Protext your equity</h4>
                </div>
                <div class="col-xs-12 col-md-4 q-pa-md" align="center">
                    <h4>Close your sale</h4>
                </div>
            </div>
        </div>

        <div class="bg-black" style="position: relative; width: 100%; height: auto;"> 
            <div class="overlay"></div>
            <Contact />
        </div>
    </q-page>
</template>

<script>
import Contact from '../components/Contact'

export default {
    name: 'WhyCompass',

    components: {
        Contact
    },

    data() {
        return {
            showConciergePromo: false,
            showVideo: false,
            team: [{
                avatar: 'robert.jpg',
                name: 'Robert Reffkin',
                role: 'Chief Executive Officer',
                icon: 'goldman.png'
            }, {
                avatar: 'joseph.jpg',
                name: 'Joseph Sirosh',
                role: 'Chief Technology Officer',
                icon: 'microsoft.png'
            }, {
                avatar: 'greg.jpg',
                name: 'Greg Hart',
                role: 'Chief Product Officer',
                icon: 'amazon2.png'
            }, {
                avatar: 'ori.jpg',
                name: 'Ori Allon',
                role: 'Founder & Executive',
                icon: 'twitter.png'
            }],
            techSlideIndex: 'The Network Tool',
            techSlides: [{
                title: 'The Network Tool',
                info: 'Using the network tool, I can analyze your property across 350+ parameters to discover similar sold listings, identify the right brokers, and correspond with ideal prospective buyers through targeted outreach.',
                filename: 'network.jpg'
            }, {
                title: 'Digital Ads',
                info: 'As your agent, I have the ability to bring buyers that don’t have an agent to your home by targeting people who have looked at similar properties to yours, and launching targeted ads on Facebook, Instagram, and Google.',
                filename: 'digitalads.jpg'
            }, {
                title: 'Virtual Open Houses',
                info: 'Hosting Virtual Open Houses for homes similar to yours, I’ve captured thousands of leads into my contact management database. If they didn’t like the house they toured, perhaps they’ll like yours. I can invite them to consider your home in minutes.',
                filename: 'phones.jpg'
            }, {
                title: 'Virtual Agent Services',
                info: 'Compass VAS (Virtual Agent Services) is an exclusive suite of marketing services now available to Compass clients. By pairing the industry’s top talent with technology, we’re able to make the virtual home buying & selling experience intelligent and seamless.',
                filename: 'vas.png'
            }, {
                title: 'Marketing Center',
                info: 'Marketing Center gives me the ability to operate like a professional design studio in a matter of minutes. I can quickly create beautiful brochures, digital ads, postcards and more. Saving time on designing marketing material gives me time back to spend on you.',
                filename: 'mc1.png'            
            }, {
                title: 'Insights',
                info: 'While marketing your home, the insights dashboard grants me real-time data about your listing’s traffic, so I’m able to refine marketing and pricing strategy and discover new lead-generation opportunities.',
                filename: 'insights1.jpeg'            
            }],
            concierge: [{
                title: 'Smart',
                info: 'Your Compass agent will help you determine which services can deliver the greatest return on your investment.'
            }, {
                title: 'Fast',
                info: 'The entire process is designed for speed, so that work can begin — and your home can sell — as quickly as possible.'
            }, {
                title: 'Transparent',
                info: 'You\'ll never have to worry about upfront costs or interest.'
            }, {
                title: 'Easy',
                info: 'Your Compass agent will be by your side throughout the process, advising you along the way.'
            }],
            sales: [{
                title: '500+',
                info: 'Properties sold in San Diego'
            }, {
                title: '16',
                info: 'Average days on market'
            }, {
                title: '98.8%',
                info: 'List to sell price ratio'
            }]
        }
    },

    computed: {
        parentStyle() {
            return `
                background-image: url('statics/whycompass/nice_house.jpg');
                background-size: cover;
                background-position: 50%;
                width: 100%;
            `
        },
    },

    methods: {
        
    }
}
</script>

<style scoped>
    .whiteOverlay {
        background: rgba(255, 255, 255, 0.5);
        height: 100%;
        width: 100%;
        position: absolute;
    }
</style>
