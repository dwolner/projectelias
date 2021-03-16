<template>
    <q-page class="flex flex-center">
        <div :style="parentStyle" class="relative-position" align="center">
            <div class="blackOverlay"></div>

            <div class="q-pa-xl" :style="$q.screen.width > 767 ? 'padding: 5rem;' : 'padding: 2rem;'">
                <q-img src="statics/logos/RichardElias_CompassLockupHorizontal-White.png" style="max-width: 700px;" v-scroll-reveal="{ delay: 1000, easing: 'ease-in-out', distance: '100px', origin: 'left' }" />
            </div>
        </div>

        <div class="row full-width q-py-lg">
            <div class="col-xs-12 col-md-6 q-pt-lg q-px-lg" v-scroll-reveal="{ delay: 1000, opacity: 0, duration: 1000 }">
                <div class="col-xs-12 q-pa-md">
                    <h3 class="Compass-Serif-Regular q-mr-md" >
                        Leadership
                    </h3>
                </div>
                <q-list padding>
                    <q-expansion-item v-for="person in team" :key="person.name" class="q-mb-sm">
                        <template v-slot:header>
                            <q-item-section avatar>
                                <!-- <q-avatar> -->
                                    <img :src="`statics/whycompass/${person.avatar}`" style="max-width: 70px;">
                                <!-- </q-avatar> -->
                            </q-item-section>

                            <q-item-section>
                                <q-item-label style="font-size: 1.5rem;">{{ person.name }}</q-item-label>
                                <q-item-label caption lines="1" style="font-size: 1.25rem;">{{ $q.screen.width > 500 ? person.role : person.abvRole }}</q-item-label>
                            </q-item-section>

                            <q-item-section side>
                                <img :src="`statics/whycompass/${person.icon}`" style="max-width: 80px;">
                            </q-item-section>
                        </template>

                        <q-card-section>
                            {{ person.desc }}
                        </q-card-section>
                    </q-expansion-item>
                </q-list>
            </div>
                    
            <div class="col-xs-12 col-md-6 row q-px-lg q-mt-md" :style="$q.screen.width > 1024 ? `border-left: 1px dashed black;` : ''" v-scroll-reveal="{ delay: 2000, opacity: 0, duration: 1000 }">
                <div class="col-xs-12 q-pa-md">
                    <h3 class="Compass-Serif-Regular full-width">
                        Marketing & Engineers
                    </h3>
                    <h6 style="line-height: 0.7rem;">from companies such as...</h6>
                </div>
                <div v-for="logo in logos" :key="logo.filename" class="col-xs-6 q-pa-sm" align="center">
                    <img :src="`statics/whycompass/${logo.filename}`" style="max-height: 50px;">
                </div>
            </div>
        </div>

        <div class="full-width relative-position" style="background-image: url('/statics/whycompass/2e61de05da09ea0fc20b76d23f21be8c856c959a.gif'); background-size: cover; background-position: 50%;">
            <div class="blackOverlay"></div>
            <div class="row q-py-lg">
                <div class="col-xs-12" style="padding: 2.5rem 2.5rem 0;">
                    <h3 class="Compass-Serif-Regular q-mr-md text-white" style="float: left;" v-scroll-reveal="{ delay: 0, easing: 'ease-in-out', distance: '100px', origin: 'left' }">
                        Technology, Reimagined
                    </h3>
                </div>
                <q-carousel
                    v-model="techSlideIndex"
                    class="col-xs-12"
                    transition-prev="slide-right"
                    transition-next="slide-left"
                    animated
                    swipeable
                    navigation
                    padding
                    arrows
                    infinite
                    dark
                    style="background: rgba(0, 0, 0, 0);"
                >
                    <q-carousel-slide v-for="(slide, index) in techSlides" :key="index" :name="slide.title" class="full-width row flex flex-center text-white">
                        <div class="col-xs-12 col-md-6 q-pa-md" :align="$q.screen.width > 500 ? 'left' : 'center'">
                            <h4 class="q-mb-md">{{ slide.title }}</h4>
                            <h6>{{slide.info}}</h6>
                        </div>

                        <!-- <div class="col-xs-12 col-md-6 q-pa-md" align="center">
                            <img class="shadow-8" :src="`statics/whycompass/${ slide.filename }`" style="height: auto; width: 100%; max-width: 100%; margin: 0 auto;">
                        </div> -->

                        <div class="col-xs-12 col-md-6 q-pa-md relative-position">
                            <div 
                                class="col-xs-12 relative-position"
                                :style="`min-height: 300px; background-image: url('statics/whycompass/${ slide.filename }'); background-size: cover; background-repeat: no-repeat; background-position: 50% 0%;`"
                            >
                                <div class="center">
                                    <q-btn flat round style="background: rgba(0, 0, 0, .25); padding: 1rem;" @click="expandImage(slide)">
                                        <q-icon name="fas fa-expand-alt" color="white" style="font-size: 4rem;" />
                                    </q-btn>
                                </div>
                            </div>
                        </div>
                    </q-carousel-slide>
                </q-carousel>
            </div>
        </div>

        <div class="row full-width">
            <q-carousel
                v-model="conciergeSlideIndex"
                class="col-xs-12"
                :transition-prev="$q.screen.width > 1024 ? 'slide-down' : 'slide-right'"
                :transition-next="$q.screen.width > 1024 ? 'slide-up' : 'slide-left'"
                :control-color="conciergeSlideIndex === 'Compass Concierge' ? 'black' : ''"
                :duration="3000"
                animated
                :vertical="$q.screen.width > 1024 ? true : false"
                swipeable
                padding
                arrows
                infinite
                style="background: rgba(0, 0, 0, 0);"
            >
                <q-carousel-slide v-for="(slide, index) in conciergeSlides" :key="index" :name="slide.title" :class="`full-width row flex flex-center q-pa-lg ${ slide.dark ? 'bg-black text-white' : ''}`">
                     <div class="col-xs-12">
                        <h3 :class="`Compass-Serif-Regular ${ $q.screen.width > 1024 ? 'q-pa-lg' : '' } q-pt-lg`" style="float: left;" v-scroll-reveal="{ delay: 0, easing: 'ease-in-out', distance: '100px', origin: 'left' }">
                            {{ slide.title }}
                        </h3>
                    </div>
                    <div :class="`col-xs-12 row ${ $q.screen.width > 1024 ? 'q-pa-lg' : 'q-py-lg' }`">
                        <div
                            class="col-xs-12 col-md-4 relative-position"
                            :style="`min-height: 300px; background-image: url('statics/whycompass/${ slide.filename }'); background-size: cover; background-repeat: no-repeat; background-position: 50%;`"
                        >
                            <div class="center">
                                <q-btn v-if="!slide.dark" flat @click="showDialog = true, showConciergePromo = true">
                                    <q-icon name="fas fa-play-circle" color="white" style="font-size: 4rem;" />
                                </q-btn>

                                <q-btn v-else flat round style="background: rgba(0, 0, 0, .25); padding: 1rem;" @click="expandImage(slide)">
                                    <q-icon name="fas fa-expand-alt" color="white" style="font-size: 4rem;" />
                                </q-btn>
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-8">
                            <h4 class="q-pa-md" v-scroll-reveal="{ delay: 200, easing: 'ease-in-out', opacity: 0, distance: '0', origin: 'bottom' }">{{ slide.desc }}</h4>
                            <div class="row">
                                <div v-for="(card, index) in slide.features" :key="card.title" class="col-sm-12 col-md-6 q-pa-lg" align="center">
                                    <h4 v-scroll-reveal="{ delay: index * 300, easing: 'ease-in-out', distance: '100px', origin: 'left' }">{{card.title}}</h4>
                                    <h6 v-scroll-reveal="{ delay: (index * 300) + 200, easing: 'ease-in-out', distance: '100px', origin: 'left' }">{{card.info}}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </q-carousel-slide>
            </q-carousel>
        </div>

        <q-dialog v-model="showDialog" @show="" @hide="showConciergePromo = false, largeImageFilename = '', maximizedFilenames = ''">
            <div class="relative-position" :style="showConciergePromo ? '' : 'max-width: 100%;'">
                <q-btn class="absolute" round flat size="md" color="white" @click="showDialog = false" style="top: .5rem; right: .5rem; z-index: 999;">
                    <q-icon name="fas fa-times" color="black" />
                </q-btn>
                <q-card>
                    <q-card-section style="padding: .25rem;">

                        <video v-if="showConciergePromo" autoplay controls src="statics/30secondprogramoverview.mp4" style="width: 100%;" />

                        <img v-if="largeImageFilename && !maximizedFilenames" class="shadow-8" :src="`statics/whycompass/${ largeImageFilename }`" style="max-width: 100%; max-height: calc(100vh - 60px);">

                        <q-carousel
                            v-if="maximizedFilenames"
                            v-model="maximizedFilenamesIndex"
                            class="full-width"
                            control-color="black"
                            transition-prev="slide-right"
                            transition-next="slide-left"
                            animated
                            swipeable
                            navigation
                            padding
                            arrows
                            infinite
                            style="background: rgba(0, 0, 0, 0);"
                        >
                            <q-carousel-slide v-for="(imageFilename, index) in maximizedFilenames" :key="index" :name="imageFilename" class="full-width row flex flex-center text-white">
                                <div class="col-xs-12" align="center">
                                    <img :src="`statics/whycompass/${ imageFilename }`" style="max-width: 100%; max-height: calc(100vh - 140px);">
                                </div>
                            </q-carousel-slide>
                        </q-carousel>
                    </q-card-section>
                </q-card>
            </div>
        </q-dialog>

        <div class="full-width relative-position" :style="`background-image: url('statics/whycompass/newmap.png'); height: 600px; background-size: cover; background-repeat: no-repeat; background-position: ${ $q.screen.width > 1800 ? '100%' : $q.screen.width > 1200 ? '70%' : '60%' };`">
            <div class="lt-sm whiteOverlay"></div> 
            <div class="row fit q-pa-lg">
                <div class="col-xs-12 col-sm-6 flex flex-center">
                    <div class="full-width q-px-lg q-pt-lg" v-scroll-reveal="{ delay: 1000, easing: 'ease-in-out', distance: '100px', origin: 'left' }">
                        <h3 class="Compass-Serif-Regular q-mr-md">
                            We Sell All Over San Diego
                        </h3>
                    </div>
                    <div class="full-width q-pa-lg row" style="z-index: 1;" v-scroll-reveal="{ delay: 1500, easing: 'ease-in-out', distance: '100px', origin: 'left' }">
                        <div v-for="card in sales" :key="card.title" class="col-xs-12 col-md-6 q-py-md">
                            <h4>{{card.title}}</h4>
                            <h6>{{card.info}}</h6>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="col-12 row q-my-lg flex flex-center">
                <div class="col-xs-12 col-md-5 row justify-center q-pa-lg">
                    <div v-for="card in sales" :key="card.title" class="col-sm-12 col-md-6 q-pa-md text-white" align="center">
                        <h4>{{card.title}}</h4>
                        <h6>{{card.info}}</h6>
                    </div>
                </div>
                <div class="col-xs-12 col-md-7 q-px-xl q-py-md">
                    <img class="shadow-8" src="statics/whycompass/sandiegomap.png" style="max-width: 100%; margin: 0 auto;">
                </div>
            </div> -->
        </div>

        <div class="row full-width q-py-lg" style="background: url('statics/topo.svg'); background-size: cover;">
            <div class="col-xs-12" style="padding: 2.5rem 2.5rem 0;">
                <h3 class="Compass-Serif-Regular q-mr-md" style="float: left;" v-scroll-reveal="{ delay: 0, easing: 'ease-in-out', distance: '100px', origin: 'left' }">
                    Compass vs. Competition
                </h3>
            </div>
            <div class="col-12 row flex flex-center">
                <div class="col-xs-12 col-md-7 q-py-md">
                    <!-- <img src="statics/whycompass/metrics.jpg" style="max-width: 100%; margin: 0 auto;" /> -->
                    <div class="q-px-xl q-py-md">
                        <h5 style="font-weight: 700;">Year Over Year Growth</h5>
                        <h6>All Brokers-All San Diego County-All Price Points</h6>
                    </div>
                    <div class="gt-sm q-px-xl">
                        <q-table
                            class="full-width"
                            title=""
                            virtual-scroll
                            :data="metricsTableData"
                            :columns="metricsTableColumns"
                            :grid="$q.screen.lt.md"
                            row-key="name"
                            hide-pagination
                        >
                            <template v-slot:body-cell="props">
                                <q-td :props="props" v-html="props.value">
                                </q-td>
                            </template>
                            <template v-slot:bottom="props">
                                <div class="full-width" align="right">
                                    <q-item-label>Scroll right for more ></q-item-label>
                                </div>
                            </template>
                        </q-table>
                    </div>

                    <q-carousel
                        v-model="keyMetricsIndex"
                        class="full-width lt-md"
                        control-color="black"
                        transition-prev="slide-right"
                        transition-next="slide-left"
                        animated
                        swipeable
                        navigation
                        padding
                        arrows
                        infinite
                        style="background: rgba(0, 0, 0, 0);"
                    >
                        <q-carousel-slide v-for="(metric, index) in metricsTableData" :key="index" :name="metric.company" class="full-width row flex flex-center">
                            <q-card class="full-width">
                                <q-card-section>
                                    <q-item-label style="font-weight: 700; font-size: 1rem;">{{ metric.company }}</q-item-label>
                                </q-card-section>
                                <q-separator />
                                <q-list dense>
                                    <q-item v-for="key in Object.keys(metric)" :key="key" v-if="key !== 'company'">
                                        <q-item-section>
                                            <q-item-label>{{ metricsTableColumns.find(column => column.name === key).label }}</q-item-label>
                                        </q-item-section>
                                        <q-item-section side>
                                            <q-item-label :style="metricsTableColumns.find(column => column.name === key).format ? `color: ${ metric[key] > 0 ? 'green' : 'red' }` : ''">{{ `${metric[key]}${metricsTableColumns.find(column => column.name === key).format ? '%' : ''}` }}</q-item-label>
                                        </q-item-section>
                                    </q-item>
                                </q-list>
                            </q-card>
                        </q-carousel-slide>
                    </q-carousel>

                </div>
                <div class="col-xs-12 col-md-5 q-px-md q-pt-lg" align="center">
                    <!-- <img src="statics/whycompass/office_combo.jpg" style="max-width: 500px; margin: 0 auto;" /> -->
                    <!-- <q-carousel
                        v-model="keyMetricsImagesIndex"
                        class="full-width"
                        control-color="black"
                        transition-prev="slide-right"
                        transition-next="slide-left"
                        animated
                        swipeable
                        navigation
                        padding
                        arrows
                        infinite
                        style="background: rgba(0, 0, 0, 0);"
                    >
                        <q-carousel-slide v-for="(slide, index) in keyMetricsImages" :key="index" :name="slide.filename" class="full-width row flex flex-center text-white"> -->
                            <div 
                                class="col-xs-12 relative-position shadow-6"
                                :style="`min-height: 400px; background-image: url('statics/whycompass/${ keyMetricsImages[0].filename }'); background-size: cover; background-repeat: no-repeat; background-position: 50% 0%;`"
                            >
                                <div class="center">
                                    <q-btn flat round style="background: rgba(0, 0, 0, .25); padding: 1rem;" @click="expandImage(keyMetricsImages[0])">
                                        <q-icon name="fas fa-expand-alt" color="white" style="font-size: 4rem;" />
                                    </q-btn>
                                </div>
                            </div>
                        <!-- </q-carousel-slide>
                    </q-carousel> -->
                </div>
            </div>
        </div>

        <div class="row full-width q-py-lg bg-black">
            <div class="col-xs-12" style="padding: 2.5rem 2.5rem 0;">
                <h3 class="Compass-Serif-Regular q-mr-md text-white" style="float: left;" v-scroll-reveal="{ delay: 0, easing: 'ease-in-out', distance: '100px', origin: 'left' }">
                    What Sets Us Apart
                </h3>
            </div>
            <div class="col-12 row">
                <div class="col-xs-12 col-md-6 q-px-xl q-py-md text-white">
                    <h4 v-scroll-reveal="{ delay: 0, easing: 'ease-in-out', distance: '0', opacity: 0, origin: 'right' }">Proactive Marketing —</h4>
                    <ul style="font-size: 1.5rem;">
                        <li v-scroll-reveal="{ delay: 100, easing: 'ease-in-out', distance: '0', opacity: 0, origin: 'right' }">Reverse prospecting</li>
                        <li v-scroll-reveal="{ delay: 200, easing: 'ease-in-out', distance: '0', opacity: 0, origin: 'right' }">Past client database</li>
                        <li v-scroll-reveal="{ delay: 300, easing: 'ease-in-out', distance: '0', opacity: 0, origin: 'right' }">Thousands of leads</li>
                        <li v-scroll-reveal="{ delay: 400, easing: 'ease-in-out', distance: '0', opacity: 0, origin: 'right' }">Proactive calling</li>
                        <li v-scroll-reveal="{ delay: 500, easing: 'ease-in-out', distance: '0', opacity: 0, origin: 'right' }">Move up / downsize</li>
                        <li v-scroll-reveal="{ delay: 600, easing: 'ease-in-out', distance: '0', opacity: 0, origin: 'right' }">Door knocking</li>
                    </ul>
                </div>
                <div class="col-xs-12 col-md-6 q-px-xl q-py-md text-white">
                    <h4 v-scroll-reveal="{ delay: 0, easing: 'ease-in-out', distance: '0', opacity: 0, origin: 'right' }">Targeted Marketing —</h4>
                    <ul style="font-size: 1.5rem;">
                        <li v-scroll-reveal="{ delay: 100, easing: 'ease-in-out', distance: '0', opacity: 0, origin: 'right' }">Mail & email campaigns</li>
                        <li v-scroll-reveal="{ delay: 200, easing: 'ease-in-out', distance: '0', opacity: 0, origin: 'right' }">Qualified list of renters</li>
                        <li v-scroll-reveal="{ delay: 300, easing: 'ease-in-out', distance: '0', opacity: 0, origin: 'right' }">Network of top 10% of agents</li>
                        <li v-scroll-reveal="{ delay: 400, easing: 'ease-in-out', distance: '0', opacity: 0, origin: 'right' }">Open houses (optional)</li>
                        <li v-scroll-reveal="{ delay: 500, easing: 'ease-in-out', distance: '0', opacity: 0, origin: 'right' }">Network Tool</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="row full-width q-py-lg" style="background: url('statics/topo.svg'); background-size: cover;">
            <div class="col-xs-12" style="padding: 2.5rem 2.5rem 0;">
                <h3 class="Compass-Serif-Regular q-mr-md" style="float: left;" v-scroll-reveal="{ delay: 0, easing: 'ease-in-out', distance: '100px', origin: 'left' }">
                    Our Promise
                </h3>
            </div>
            <div class="col-xs-12 col-md-5 q-px-xl q-py-md">
                <img src="statics/compass_apartment.jpg" class="shadow-6" style="max-width: 100%; margin: 0 auto;" v-scroll-reveal="{ delay: 0, easing: 'ease-in-out', distance: '100px', origin: 'bottom' }" />
            </div>
            <div class="col-xs-12 col-md-7 q-px-xl q-py-md">
                <h4 class="q-py-md" v-scroll-reveal="{ delay: 0, easing: 'ease-in-out', distance: '100px', origin: 'left' }">Promote your home</h4>
                <h4 class="q-py-md" v-scroll-reveal="{ delay: 500, easing: 'ease-in-out', distance: '100px', origin: 'left' }">Protect your equity</h4>
                <h4 class="q-py-md" v-scroll-reveal="{ delay: 1000, easing: 'ease-in-out', distance: '100px', origin: 'left' }">Close your sale</h4>
                <img src="statics/logos/RichardElias_LogoLockup-Black.png" align="right" style="max-width: 250px; margin: 0 auto;" />
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
            showDialog: false,
            largeImageFilename: '',
            maximizedFilenames: '',
            maximizedFilenamesIndex: '',
            team: [{
                avatar: 'robert.jpg',
                name: 'Robert Reffkin',
                role: 'Chief Executive Officer',
                abvRole: 'CEO',
                icon: 'goldman.png',
                desc: 'Prior to Compass Robert worked at Goldman Sachs as Chief of Staff to the President & COO following five years working in the firm\'s private equity arm. Prior to Goldman Sachs, he worked at Lazard and McKinsey & Company.'
            }, {
                avatar: 'joseph.jpg',
                name: 'Joseph Sirosh',
                role: 'Chief Technology Officer',
                abvRole: 'CTO',
                icon: 'microsoft.png',
                desc: 'Before Compass, Joseph Sirosh was the Corporate Vice President of the Data Group, leading Microsoft\'s Database, Big Data and Machine Learning products. Joseph joined Microsoft in fall 2013 from Amazon.com Inc.'
            }, {
                avatar: 'greg.jpg',
                name: 'Greg Hart',
                role: 'Chief Product Officer',
                abvRole: 'CPO',
                icon: 'amazon2.png',
                desc: 'Hart began his Amazon career in books and then he then moved on to product management roles in music, gaming, video, DVDs, software and artificial intelligence. From 2009-11, he served as VP and technical adviser to the CEO as an informal chief of staff to Bezos.'
            }, {
                avatar: 'ori.jpg',
                name: 'Ori Allon',
                role: 'Founder & Executive',
                abvRole: 'Founder',
                icon: 'twitter.png',
                desc: 'Before starting Urban Compass with Robert Reffkin in May 2013, Allon developed the search algorithm Orion that was acquired by Google. He then created Julpan, which analyzed the way people shared information on the social web. Microsoft was his lead investor. The company was acquired one year later by Twitter, which made Allon the director of its NYC engineering office.'
            }],
            logos: [{ 
                filename: 'apple.png'
            }, {
                filename: 'facebook.png'
            }, {
                filename: 'microsoft.png'
            }, {
                filename: 'condenast.png'
            }, {
                filename: 'loreal.png'
            }, {
                filename: 'rolex.png'
            }, {
                filename: 'neimanmarcus.png'
            }, {
                filename: 'tiffany.png'
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
                filename: 'virtualopenhouse.gif'
            }, {
                title: 'Marketing Center',
                info: 'Marketing Center gives me the ability to operate like a professional design studio in a matter of minutes. I can quickly create beautiful brochures, digital ads, postcards and more. Saving time on designing marketing material gives me time back to spend on you. Marketing Center designs created by the Design team at Compass, recruited from top marketing companies.',
                filename: 'marketingcenter.jpg'            
            }, {
                title: 'Insights',
                info: 'While marketing your home, the insights dashboard grants me real-time data about your listing’s traffic, so I’m able to refine marketing and pricing strategy and discover new lead-generation opportunities.',
                filename: 'insights.gif'            
            }, {
                title: 'Virtual Agent Services',
                info: 'Compass VAS (Virtual Agent Services) is an exclusive suite of marketing services now available to Compass clients. By pairing the industry’s top talent with technology, we’re able to make the virtual home buying & selling experience intelligent and seamless.',
                filename: 'vas.png'
            }],
            conciergeSlideIndex: 'Compass Concierge',
            conciergeSlides: [{
                title: 'Compass Concierge',
                desc: 'Get fronted for the cost of home improvement services with no interest — ever.',
                filename: 'concierge_frame.jpg',
                features: [{
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
                }]
            }, {
                dark: true,
                title: 'Private Exclusives',
                desc: 'A private exclusive listing is an off-market home that can be shared by a Compass agent directly with their colleagues and their buyers.',
                filename: 'privateexclusiveroom.jpg',
                features: [{
                    title: 'Discretion',
                    info: 'Privacy is the ultimate commodity and the decision to sell your home is a personal one.'
                }, {
                    title: 'Flexibility',
                    info: 'Decide when to share details about your home, including price, more broadly on your own timing.'
                }, {
                    title: 'Quality',
                    info: 'Retain exposure to Compass agents, including premium placement on our agent facing platform.'
                }, {
                    title: 'Value',
                    info: 'Get the best offer by testing the market privately to gather key insights without your listing getting stale.'
                }]
            }],
            sales: [{
                title: '500+',
                info: 'Properties sold in San Diego'
            }, {
                title: '14',
                info: 'Average days on market'
            }, {
                title: '100.5%',
                info: 'List to sell price ratio'
            }],
            keyMetricsImagesIndex: 'keymetrics1.jpg',
            keyMetricsImages: [{
                filename: 'keymetrics1.jpg',
                maximizedFilenames: [
                    'keymetrics1.jpg',
                    'keymetrics2.jpg',
                    'keymetrics3.jpg',
                    'keymetrics4.jpg',
                    'keymetrics5.jpg',
                    'keymetrics6.jpg'
                ]
            }, {
                filename: 'keymetrics2.jpg',
                maximizedFilenames: [
                    'keymetrics1.jpg',
                    'keymetrics2.jpg',
                    'keymetrics3.jpg',
                    'keymetrics4.jpg',
                    'keymetrics5.jpg',
                    'keymetrics6.jpg'
                ]
            }, {
                filename: 'keymetrics3.jpg',
                maximizedFilenames: [
                    'keymetrics1.jpg',
                    'keymetrics2.jpg',
                    'keymetrics3.jpg',
                    'keymetrics4.jpg',
                    'keymetrics5.jpg',
                    'keymetrics6.jpg'
                ]
            }, {
                filename: 'keymetrics4.jpg',
                maximizedFilenames: [
                    'keymetrics1.jpg',
                    'keymetrics2.jpg',
                    'keymetrics3.jpg',
                    'keymetrics4.jpg',
                    'keymetrics5.jpg',
                    'keymetrics6.jpg'
                ]
            }, {
                filename: 'keymetrics5.jpg',
                maximizedFilenames: [
                    'keymetrics1.jpg',
                    'keymetrics2.jpg',
                    'keymetrics3.jpg',
                    'keymetrics4.jpg',
                    'keymetrics5.jpg',
                    'keymetrics6.jpg'
                ]
            }, {
                filename: 'keymetrics6.jpg',
                maximizedFilenames: [
                    'keymetrics1.jpg',
                    'keymetrics2.jpg',
                    'keymetrics3.jpg',
                    'keymetrics4.jpg',
                    'keymetrics5.jpg',
                    'keymetrics6.jpg'
                ] 
            }],
            keyMetricsIndex: 'Compass',
            metricsTableColumns: [{
                name: 'company',
                field: 'company',
                label: '',
                align: 'left',
                style: 'font-weight: bold;'
            }, {
                name: 'units2020',
                field: 'units2020',
                label: 'Units Sold 2020'
            }, {
                name: 'units2019',
                field: 'units2019',
                label: 'Units Sold 2019'
            }, {
                name: 'unitsPercentage',
                field: 'unitsPercentage',
                label: '% Change Units',
                format: (val, row) => `<span style="color: ${ val > 0 ? 'green' : 'red' }">${ val }%</span>`
            }, {
                name: 'volume2020',
                field: 'volume2020',
                label: 'Sales Volume 2020'
            }, {
                name: 'volume2019',
                field: 'volume2019',
                label: 'Sales Volume 2019'
            }, {
                name: 'volumePercentage',
                field: 'volumePercentage',
                label: '% Change Volume',
                format: (val, row) => `<span style="color: ${ val > 0 ? 'green' : 'red' }">${ val }%</span>`
            }],
            metricsTableData: [{
                "company": "Compass",
                "units2020": "3,514",
                "units2019": "2,502",
                "unitsPercentage": 40.4,
                "volume2020": "$3,223B",
                "volume2019": "$2,241B",
                "volumePercentage": 43.8
            },
            {
                "company": "Big Block",
                "units2020": "2,106",
                "units2019": "2,636",
                "unitsPercentage": -20.1,
                "volume2020": "$1,232B",
                "volume2019": "$1,479B",
                "volumePercentage": -16.7
            },
            {
                "company": "Coldwell Banker West",
                "units2020": "1,859",
                "units2019": "2,844",
                "unitsPercentage": -34.6,
                "volume2020": "$1,151B",
                "volume2019": "$1,628B",
                "volumePercentage": -29.3
            },
            {
                "company": "Berkshire Hathaway",
                "units2020": "1,822",
                "units2019": "2,299",
                "unitsPercentage": -20.8,
                "volume2020": "$2,056B",
                "volume2019": "$2,289B",
                "volumePercentage": -10.2
            },
            {
                "company": "Coldwell Banker Residential",
                "units2020": "1,819",
                "units2019": "2,781",
                "unitsPercentage": -34.6,
                "volume2020": "$1,422B",
                "volume2019": "$2,081B",
                "volumePercentage": -31.7
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
        expandImage(slide) {
            this.showDialog = true
            this.largeImageFilename = slide.filename
            if (slide.maximizedFilenames) {
                this.maximizedFilenames = slide.maximizedFilenames
                this.maximizedFilenamesIndex = slide.maximizedFilenames[0]
            } else {
                this.maximizedFilenames = ''
                this.maximizedFilenamesIndex = ''
            }
        }
    }
}
</script>

<style>
    .q-transition--slide-up-leave-active {
        transition: all 1s;
    }
    .q-transition--slide-down-leave-active {
        transition: all 1s;
    }
    .q-transition--slide-up-enter-active {
        transition: all 1s;
    }
    .q-transition--slide-down-enter-active {
        transition: all 1s;
    }
</style>
<style scoped>
    .whiteOverlay {
        background: rgba(255, 255, 255, 0.65);
        height: 100%;
        width: 100%;
        position: absolute;
    }
    .blackOverlay {
        background: rgba(0, 0, 0, 0.5);
        height: 100%;
        width: 100%;
        position: absolute;
    }
</style>
