<template>
    <q-page id="team" class="flex flex-center">

        <div class="row well container">

            <div class="col-xs-12 q-pt-xl q-px-xl">
                <h3 class="text-white Compass-Serif-Regular q-mr-md" style="float: left;" v-scroll-reveal.reset="{ delay: 0, easing: 'ease-in-out', distance: '100px', origin: 'left' }">The Team</h3>
                
                <span 
                    v-scroll-reveal.reset="{ delay: index * 75, scale: .75, rotate: { z: -90 }, easing: 'ease-in-out', distance: '100px', origin: 'left' }" 
                    v-for="(item, index) in 6" 
                    :key="index"
                    class="gt-sm" 
                    style="float: left;"
                >
                    <svg version="1.1" id="svg" class="" width="50" height="50"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50" xml:space="preserve" :style="`transform: rotate(-${ 45 - index * 9 }deg);`">
                        <rect id="svgRectangle" class="animated" x="10" y="22" width="35" height="2" fill="#fff" />
                    </svg>
                </span>
            </div>

            <div v-if="$q.screen.width > 767" class="col-xs-12 row q-pa-xl justify-center">
                <div 
                    v-scroll-reveal="{ delay: index * 75, scale: .75, easing: 'ease-in-out'}" 
                    v-for="(item, index) in team" 
                    :key="index"
                    align="center" 
                    class="col-xs-12 col-sm-6 col-md-4 col-lg q-pa-sm"
                >
                    <div class="bg-white full-width">
                        <div :class="`q-pa-md full-height ${ item.mainman ? 'cx-dotGridBackground' : 'bg-white' }`" align="center" @click="openWindow(`https://www.compass.com/agents/${ item.slug }`)">
                            <div class="relative-position cursor-pointer shadow-2">
                                <div class="learnMoreOverlay q-pa-md">
                                    <div style="border: solid 2px white; height: 100%;">
                                        <div class="verticalCenter">
                                            <h6 class="text-white">Learn More</h6>
                                            <q-icon class="text-white" name="fas fa-external-link-alt" size="xs" />
                                        </div>
                                    </div>
                                </div>
                                <q-img :src="`statics/team/${ item.filename }`" />
                            </div>
                            <h4 class="q-mt-lg q-mb-sm Compass-Serif-Regular text-black">{{ item.name }}</h4>
                            <div class="q-mx-md" :style="`border-bottom: 1.5px solid ${ item.mainman ? '#d2b623' : '#999' };`"></div>
                            <h6 class="text-grey-8 q-mt-sm">{{ item.role }}</h6>
                            <h6 class="text-grey-8 q-my-sm" :style="`font-size: ${ $q.screen.width > 1440 ? '.7rem' : '.9rem' }; line-height: 1rem;`" v-html="item.email" />
                            <h6 class="text-grey-8" :style="`font-size: ${ $q.screen.width > 1440 ? '.7rem' : '.9rem' }; line-height: 1.5rem;`">{{ item.number }}</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div v-else class="col-xs-12">
                <q-carousel
                    v-model="slideIndex"
                    class="col-12 q-mt-lg rounded-borders"
                    control-color="white"
                    transition-prev="slide-right"
                    transition-next="slide-left"
                    dark
                    animated
                    swipeable
                    navigation
                    padding
                    arrows
                    infinite
                    style="background: #080808;"
                >
                    <q-carousel-slide v-for="(item, index) in team" :key="index" :name="item.name" class="column no-wrap flex-center full-width" style="padding: 0 4rem 4rem;" @click="selectListing(item)">
                        <div class="bg-white full-width">
                            <div :class="`q-pa-md full-height ${ item.mainman ? 'cx-dotGridBackground' : 'bg-white' }`" align="center">
                                <div class="relative-position cursor-pointer shadow-2" @click="openWindow(`https://www.compass.com/agents/${ item.slug }`)">
                                    <div class="learnMoreOverlay q-pa-md">
                                        <div style="border: solid 2px white; height: 100%;">
                                            <div :class="$q.screen.width > 767 ? 'verticalCenter' : ''">
                                                <h6 class="text-white">Learn More</h6>
                                                <q-icon class="text-white" name="fas fa-external-link-alt" size="xs" />
                                            </div>
                                        </div>
                                    </div>
                                    <q-img :src="`statics/team/${ item.filename }`" />
                                </div>
                                <h4 class="q-mt-lg q-mb-sm Compass-Serif-Regular text-black">{{ item.name }}</h4>
                                <div class="q-mx-md" :style="`border-bottom: 1.5px solid ${ item.mainman ? '#d2b623' : '#999' };`"></div>
                                <h6 class="text-grey-8 q-mt-sm">{{ item.role }}</h6>
                                <h6 class="text-grey-8 q-my-sm" style="font-size: .9rem; line-height: 1rem;" v-html="item.email" />
                                <h6 class="text-grey-8" style="font-size: .9rem;">{{ item.number }}</h6>
                            </div>
                        </div>
                    </q-carousel-slide>
                </q-carousel>
            </div>
            
        </div>
    </q-page>
</template>

<script>
export default {
    name: 'Team',

    data() {
        return {
            slideIndex: 'Richard',

            team: [{
                filename: 'Richard.jpg',
                name: 'Richard',
                role: 'Lead Realtor',
                number: '619.672.2020',
                email: 'richard.elias<br />@compass.com',
                slug: 'richard-elias',
                mainman: true
            }, {
                filename: 'Christina.jpg',
                name: 'Christina',
                role: 'Realtor',
                number: '619.504.9236',
                email: 'christina.battikha<br />@compass.com',
                slug: 'christina-battikha'
            }, {
                filename: 'Sammie.jpg',
                name: 'Sammie',
                role: 'Realtor',
                number: '559.288.9060',
                email: 'samantha.lopez<br />@compass.com',
                slug: 'samantha-lopez'
            }, {
                filename: 'Mari.jpg',
                name: 'Mari',
                role: 'Realtor',
                number: '619.344.1619',
                email: 'mari.rosas<br />@compass.com',
                slug: 'mari-rosas'
            }, {
                filename: 'Diego.jpg',
                name: 'Diego',
                role: 'Realtor',
                number: '619.205.9664',
                email: 'diego.martinez<br />@compass.com',
                slug: 'diego-martinez'
            }]
        }
    },

    methods: {
        openWindow(link) {
            let options = {}
            window.open(link, '_blank')
        }
    }
}
</script>

<style scoped>
#team {
    width: 100%;
    /* min-height: 100vh; */
    background: #080808;
    position: relative;
    overflow: hidden;
}

.container {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.learnMoreOverlay {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 99;
    background: rgba(0, 0, 0, 0.5);
    -webkit-transition: background 0.5s, opacity 0.5s;
    transition: background 0.5s, opacity 0.5s;
}

.learnMoreOverlay:hover {
    opacity: 1;
}
</style>
