<template>
    <q-page id="news" class="flex flex-center cx-dotGridBackground">
            
        <div class="row well q-py-lg">
            <template v-if="feed.length">
                <div class="col-12 q-pt-xl q-px-xl q-pb-md">
                    <h3 class="text-black Compass-Serif-Regular">News</h3>
                </div>

                <div v-if="$q.screen.width > 767" class="q-px-xl col-12 row justify-center">
                    <div 
                        class="col-xs-12 col-sm-6 col-md-4 q-pa-sm cursor-pointer" 
                        v-if="!showLength || showLength && index < showLength" 
                        v-scroll-reveal="{ delay: index * 75, scale: .75, opacity: 0, easing: 'ease-in-out'}" 
                        v-for="(item, index) in feed" 
                        :key="index"
                        @click="selectItem(item)"
                    >
                        <div class="shadow-4 relative-position" :style="`height: 100%; background-image: url('${item.imageSrc}'); background-size: cover; background-position: 50%; height: 300px;`">
                            <div class="centerHeaderHold q-pa-md">
                                <div style="border: solid 2px white; height: 100%;">
                                    <img v-if="item.overlayFilename" :src="`statics/media/${item.overlayFilename}`" style="height: 100%; width: auto; transform: scale(0.7);" />

                                    <div v-else class="centerHeader q-pa-md" align="center">
                                        <h6 class="text-white" style="margin: 0; letter-spacing: 0.4rem; line-height: 1.5rem;">{{ item.title }}</h6>
                                        <q-chip v-if="index < 6" v-for="(cat, index) in item.categories" :key="cat + index" size="sm" style="color: white; background: transparent;">
                                            <q-icon class="q-mr-xs" name="fas fa-tag" style="font-size: .6rem;" />
                                            {{ cat }}
                                        </q-chip>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <template v-else>
                    <q-carousel
                        v-model="slideIndex"
                        class="col-12 rounded-borders"
                        control-color="black"
                        transition-prev="slide-right"
                        transition-next="slide-left"
                        dark
                        animated
                        swipeable
                        navigation
                        padding
                        arrows
                        infinite
                        style="background: #fff;"
                    >
                        <q-carousel-slide v-for="(item, index) in feed" :key="index" :name="item.title" class="column no-wrap flex-center full-width" style="padding: 4rem 0 4rem;" @click="selectItem(item)">
                            <div class="shadow-4 relative-position" :style="`height: 100%; width: 100%; background-image: url('${ item.imageSrc }'); background-size: cover; background-position: 50%; height: 300px;`">
                                <div class="centerHeaderHold q-pa-md">
                                    <div style="border: solid 2px white; height: 100%;">
                                        <img v-if="item.overlayFilename" :src="`statics/media/${item.overlayFilename}`" style="height: 100%; width: auto; transform: scale(0.7);" />

                                        <div v-else class="centerHeader q-pa-md" align="center">
                                            <h6 class="text-white" style="margin: 0; letter-spacing: 0.4rem; line-height: 1.5rem;">{{ item.title }}</h6>
                                            <q-chip v-for="(cat, index) in item.categories" :key="cat + index" size="sm" style="color: white; background: transparent;">
                                                <q-icon class="q-mr-xs" name="fas fa-tag" style="font-size: .6rem;" />
                                                {{ cat }}
                                            </q-chip>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </q-carousel-slide>
                    </q-carousel>
                </template>

                <div v-if="showLength" class="col-12 q-pa-md q-mb-xl" align="center">
                    <q-btn class="bg-black" size="lg" @click="$router.push('/news')">
                        <q-icon name="fas fa-envelope-open-text" class="q-mr-md text-white" style="font-size: 1.25rem;" />
                        <h6 class="q-mt-xs text-white">See More</h6>
                    </q-btn>
                </div>
            </template>

            <template v-if="!feed.length && !showLength">
                <div class="col-xs-12 q-pa-xl">
                    <h3 align="center" class="text-black Compass-Serif-Regular">No current news items, come back later!</h3>
                </div>
            </template>
        </div>

        <q-dialog v-model="showSelectedItem" style="width: 100%;">
            <div class="relative-position" style="width: 100%; max-width: 1000px;">
                <q-btn class="absolute" round flat @click="showSelectedItem = false" style="top: 0rem; right: 0; z-index: 999;">
                    <q-icon name="fas fa-times" color="black" style="font-size: 1rem;" />
                </q-btn>
                
                <div class="bg-white" style="padding-top: 2.5rem;">

                    <iframe
                        v-if="selectedItem"
                        :src="selectedItem.link"
                        name="myiFrame"
                        width="100%"
                        :height="searchHeight"
                        frameborder="1"
                        marginwidth="0px"
                        marginheight="0px"
                        scrolling="yes"
                        allowfullscreen="allowfullscreen"
                        style="border: 0px #ffffff none;"
                    ></iframe>

                </div>
            </div>
        </q-dialog>
        
    </q-page>
    
</template>

<script>

export default {
    name: 'NewsInner',

    props: ['showLength'],

    components: {
        
    },

    data() {
        return {
            feed: [],
            selectedItem: null,
            showSelectedItem: false,
            slideIndex: ''
        }
    },

    computed: {
        searchHeight() {
            return this.$q.screen.height - 160
        }
    },

    methods: {
        getFeed(cb) {
            this.api.get('https://richardelias.com/api/newsFeed', res => {
                console.log('newsFeed res: ', res)

                if (res.success) {
                    cb(res.body)
                } else {
                    cb(false)
                }
            })
        },

        selectItem(item) {
            // window.open(item.link, '_blank')

            this.selectedItem = item
            this.showSelectedItem = true
        }
    },

    created() {
        this.getFeed((data) => {
            if (data) {
                data.items.map((item) => {
                    var regex = /<img.*?src="(.*?)"/;
                    var src = regex.exec(item.content)[1];
                    item.imageSrc = src
                    return item
                })
                this.feed = data.items
                this.slideIndex = this.feed[0].title
            } else {
                
            }
        })
    }
}
</script>

<style scoped>
    #news {
        width: 100%;
        position: relative;
    }
</style>
