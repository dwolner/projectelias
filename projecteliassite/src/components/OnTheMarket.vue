<template>
    <div id="OnTheMarket">

        <div class="row well container">
            <div class="col-xs-12 q-px-sm">
                <h4>On The Market</h4>
            </div>

            <div class="col-xs-12 row justify-center q-pt-md">
                <div 
                    v-scroll-reveal="{ delay: index * 75, scale: .75, easing: 'ease-in-out', rotate: { y: 90 }}" 
                    class="col-xs-12 q-pa-sm cursor-pointer" 
                    v-for="(item, index) in featured" 
                    :key="index"
                    @click="selectItem(item)"
                >
                    <div class="shadow-4 relative-position" :style="`height: 100%; background-image: url('statics/${ item.imageSrc }'); background-size: cover; background-position: 50%; height: ${ $q.screen.width > 552 ? '100px' : '175px' };`">
                        <div class="centerHeaderHold q-pa-md">
                            <div style="border: solid 2px white; height: 100%;">
                                <div class="centerHeader q-pa-md">
                                    <h6 align="center" class="text-white" style="margin: 0; letter-spacing: 0.4rem; line-height: 1.5rem;">{{ item.title }} <q-icon name="fas fa-chevron-right" style="color: white;" /></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                        :src="`https://www.compass.com/${ selectedItem.customRoute }`"
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
            featured: [ 
                // {
                //     title: 'East County San Diego',
                //     imageSrc: 'house_shots/CA-SanDiego-RanchoSantaFe-36.jpg',
                //     customRoute: 'homes-for-sale/la-mesa-ca-91942/locations=51163,51120,51140,51138,51148,51113/',
                //     link: 'https://search.richardelias.com/#/search?listingType=%5B%22Residential%22%5D&pageSize=250&sortField=daysOnHJI&sortOrder=asc&zoom=12&market=sdmls&center=%7B%22lat%22%3A32.80684427912777,%22lng%22%3A-116.94088442163086%7D&propertyType=%5B%5D&keyword=&box=32.87910001174263,-116.80492861108398,32.7345297593719,-117.07684023217773&status=%5B%5D'
                // },
                {
                    title: 'Search Homes In San Diego',
                    imageSrc: 'house_shots/Compass-Edited-DelMar-73.jpg',
                    customRoute: 'homes-for-sale/san-diego-ca-92103/locations=51117,51102,51106,51062,51118/',
                    link: 'https://search.richardelias.com'
                },
                // {
                //     title: 'North San Diego (Off 15 Freeway)',
                //     imageSrc: 'house_shots/Compass-NorthPBBirdrock-Originals-6.jpg',
                //     customRoute: 'homes-for-sale/san-diego-ca-92131/locations=51085,51111,51094,51096/',
                //     link: ''
                // },
                // {
                //     title: 'Coastal/North San Diego',
                //     imageSrc: 'house_shots/Compass-LaJolla-Originals-25.jpg',
                //     customRoute: 'homes-for-sale/cardiff-by-the-sea-ca-92007/locations=51158,51141,51170,51132/',
                //     link: ''
                // },
            // {
            //     title: 'Single Family Homes Under $600k',
            //     imageSrc: 'house_shots/Compass-LaJolla-Originals-25.jpg',
            //     customRoute: 'san-diego-ca/property-type=Single%20Family,Condo,Townhouse/price.max=600k/'
            // }, {
            //     title: 'Homes In East County',
            //     imageSrc: 'house_shots/Compass-Edited-DelMar-73.jpg',
            //     customRoute: 'el-cajon-ca/property-type=Single%20Family/locations=20257,20232/'
            // }, {
            //     title: 'Income Properties For Sale',
            //     imageSrc: 'house_shots/Compass-NorthPBBirdrock-Originals-6.jpg',
            //     customRoute: '_map/mapview=32.996076063851554,-116.7180315037495,32.49478704546498,-117.41978321273389/property-type=Multi%20Family/'
            // } 
            ],
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
            window.open(item.link, '_blank')

            // this.selectedItem = item
            // this.showSelectedItem = true
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
        position: relative;
    }
</style>
