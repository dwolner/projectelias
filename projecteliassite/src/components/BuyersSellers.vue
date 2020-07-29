<template>
    <q-page class="flex flex-center cx-dotGridBackground">
        <div id="buyerssellers" class="row">

            <div class="col-xs-12 q-px-xl q-pt-xl">
                <div class="row well justify-center">
                    <div class="col-sm-12 q-pa-sm q-mb-md">
                        <h3 class="Compass-Serif-Regular" v-scroll-reveal="{ delay: 0, easing: 'ease-in-out', distance: '100px', origin: 'left' }">Buying Or Selling?</h3>
                    </div>

                    <div v-for="(item, index) in features" v-scroll-reveal="{ delay: index * 75, easing: 'ease-in-out', distance: '100px', origin: 'left' }" align="center" class="col-xs-12 col-sm-6 col-md-4 q-pa-sm infoCard">
                        <div class="bg-white q-pa-md full-height">
                            <q-icon :name="item.icon" style="font-size: 3rem;" />
                            <h5 class="q-my-lg">{{ item.title }}</h5>
                            <p style="max-width: 300px;">{{ item.desc }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="buyerssellersbuttons" class="col-xs-12 justify-center q-py-xl">
                <div class="row" style="max-width: 750px; margin: 0 auto;">
                    <div class="col-xs-12 col-sm-6 q-px-sm q-py-md" align="center">
                        <q-btn class="full-width" color="primary" size="lg" @click.stop="$router.push('/buyers')">
                            I am a buyer
                        </q-btn>
                    </div>

                    <div class="col-xs-12 col-sm-6 q-px-sm q-py-md" align="center">
                        <q-btn class="full-width" color="primary" size="lg" @click.stop="$router.push('/sellers')">
                            I am a seller
                        </q-btn>
                    </div>
                </div>
            </div>

        </div>
    </q-page>
</template>

<script>
import Homebot from './Homebot'

export default {
    name: 'Team',

    components: {
        Homebot
    },

    data() {
        return {
            features: [{
                icon: 'far fa-file',
                title: 'Contracts',
                desc: 'We help with all disclosures and contracts necessary in today’s heavily regulated environment.'
            }, {
                icon: 'fas fa-graduation-cap',
                title: 'Experience',
                desc: 'We are well educated in and experienced with the entire sales process.'
            }, {
                icon: 'far fa-handshake',
                title: 'Negotiations',
                desc: 'We act as a “buffer” in negotiations with all parties throughout the entire transaction.'
            }, {
                icon: 'fas fa-dollar-sign',
                title: 'Pricing',
                desc: 'We help you understand today’s real estate values when setting the price of a listing or an offer to purchase.'
            }, {
                icon: 'fas fa-search',
                title: 'Market Conditions',
                desc: 'We simply and effectively explain today’s real estate headlines and decipher what they mean to you.'
            }]
        }
    },

    computed: {

    },

    methods: {
        // toggleMoreInfo(type) {

        //     if (!this.showMoreInfo && type !== this.currentMoreInfoType) {
        //         this.currentMoreInfoType = type
        //         this.showMoreInfo = !this.showMoreInfo
        //     } else if (this.showMoreInfo && type !== this.currentMoreInfoType) {
        //         this.currentMoreInfoType = type
        //     } else {
        //         this.showMoreInfo = !this.showMoreInfo
        //     }
            
        //     this.$nextTick(() => {
        //         let homebotElement = document.getElementById('homebot_homeowner')
        //         // console.log('homebotElement: ', homebotElement)
        //         // console.log('type: ', type)
    
        //         if (type === 'Sellers' && homebotElement) {
        //             // console.log('show homebot')
        //             window.Homebot('#homebot_homeowner', '926161d8746a94461a4f2df4afa8ef7a1186cea8f0be1ff3')
        //         }
        //     })
            
        // },

        // goToPDF() {
        //     window.open(`https://richardelias.com/statics/${ this.currentMoreInfoType === 'Buyers' ? 'BuyingaHomeSpring2020.pdf' : 'SellingYourHouseSpring2020.pdf' }`, '_blank')
        // }
    },

    created() {
        this.$root.$on('goToHomebot', () => {
            console.log('goToHomebot')
            this.toggleMoreInfo('Sellers')
        })
    }
}
</script>

<style scoped>
#buyerssellers {
    width: 100%;
    /* min-height: 100vh; */
    position: relative;
    /* overflow: hidden; */
}

.container {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.infoCard {
    transition: transform .5s;
}

.infoCard:hover {
    transform: scale(1.25) !important;
    z-index: 999;
}

</style>

<style>
    .q-item__section.column.q-focusable.relative-position.cursor-pointer.q-item__section--side.justify-center {
        display: none;
    }
</style>
