<template>
    <div id="OnTheMarket">

        <div class="row well container" style="min-height: calc(100vh - 75px);">
            <div class="col-xs-12 q-py-xl">
                
            </div>
        </div>

        <q-dialog v-model="showSelectedItem" style="width: 100%;">
            <div class="relative-position" style="width: 100%; max-width: 1440px;">
                <q-btn class="absolute" round flat @click="showSelectedItem = false" style="top: 0rem; right: 0; z-index: 999;">
                    <q-icon name="fas fa-times" color="black" style="font-size: 1rem;" />
                </q-btn>
                
                <div class="bg-white q-px-md" style="padding-top: 2.5rem;">

                    <iframe
                        v-if="selectedItem"
                        :src="`https://www.compass.com/homes-for-sale/san-diego-ca/${ selectedItem.customRoute }`"
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
</template>

<script>

export default {
    name: 'OnTheMarket',
    
    props: ['showLength', 'neighborhood'],

    components: {
        
    },

    data() {
        return {
            neighborhoods: [ {
                title: 'Single Family Homes Under $600k',
                imageSrc: '',
                customRoute: 'property-type=Single%20Family,Condo,Townhouse/price.max=600k/'
            } ],
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
        selectItem(item) {
            // window.open(item.link, '_blank')

            this.selectedItem = item
            this.showSelectedItem = true
        }
    },

    created() {
        if (this.neighborhood) {
            k('neighborhood: ', this.neighborhood)
            // this.selectItem(this.neighborhoods.find(hood => {
            //     return hood.id === this.neighborhood
            // }))
        }
    }
}
</script>

<style scoped>
    #OnTheMarket {
        width: 100%;
        background: #080808;
        position: relative;
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
        padding: 1rem 3.5rem;
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
