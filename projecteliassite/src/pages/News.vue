<template>
    <q-page class="flex flex-center">
        <div id="news">
            
            <div class="row well q-pa-sm justify-center q-pt-xl q-px-lg">
                <div class="col-12 q-pa-md">
                    <h3 class="text-white Compass-Serif-Regular">News</h3>
                </div>

                <div v-for="(item, index) in feed" v-scroll-reveal.reset="{ delay: index * 75, scale: .75, opacity: 0, easing: 'ease-in-out'}" class="col-xs-12 col-sm-6 col-md-4 q-pa-sm cursor-pointer" @click="selectItem(item)">
                    <div class="shadow-4 relative-position" :style="`height: 100%; background-image: url('${item.imageSrc}'); background-size: cover; background-position: 50%; height: 300px;`">
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
                </div>
            </div>

            <!-- <div class="row">
                <div v-for="(item) in feed" class="col-xs-12 col-sm-6 col-lg-3 q-pa-md">
                    <q-card class="full-height newsItem cursor-pointer" @click="selectItem(item)">
                        <q-card-section>
                            <h5>{{ item.title }}</h5>
                        </q-card-section>

                        <q-card-section class="newsItemContent" v-html="item.content" style="padding-top: 0;" />

                        <q-card-section style="padding: .75rem;">
                            <q-chip v-for="(cat, index) in item.categories" :key="cat + index" size="sm">
                                <q-icon class="q-mr-xs" name="fas fa-tag" style="font-size: .6rem;" />
                                {{ cat }}
                            </q-chip>
                        </q-card-section>
                    </q-card>
                </div>
            </div> -->

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
            
        </div>
    </q-page>
</template>

<script>

export default {
    name: 'News',

    components: {
        
    },

    data() {
        return {
            feed: [],
            selectedItem: null,
            showSelectedItem: false
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
                    // error
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
            }

            this.feed = data.items
        })
    }
}
</script>

<style scoped>
    #news {
        width: 100%;
        min-height: calc(100vh - 50px);
        background: #080808;
        position: relative;
        overflow: hidden;
    }

    .centerHeaderHold {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 1;
        background: rgba(0, 0, 0, 0.5);
        -webkit-transition: background 0.5s, opacity 0.5s;
        transition: background 0.5s, opacity 0.5s;
    }

    .centerHeader {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        width: 100%;
        padding: 1rem 2.5rem;
    }

    .centerHeaderHold:hover {
        opacity: 0;
    }
</style>

<style>
    .newsItemContent > h3 {
        font-size: 1rem;
    }

    .webfeedsFeaturedVisual {
        width: 100%;
    }
</style>
