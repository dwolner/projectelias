<template>
    <div id="compasssearch">
        <div class="row well container">
            <div class="col-xs-12 q-pa-md" align="right">
                <div id="IDX" />
                <!-- <iframe
                    style="border: 0px #ffffff none;"
                    src="https://www.compass.com/homes-for-sale/san-diego-ca/"
                    name="myiFrame"
                    width="100%"
                    :height="searchHeight"
                    frameborder="1"
                    marginwidth="0px"
                    marginheight="0px"
                    scrolling="no"
                    allowfullscreen="allowfullscreen"
                ></iframe> -->
            </div>
        </div>
    </div>
</template>

<script>
window.hj_search_load_callback = (hj) => {
    console.log('hj_search_load_callback: ', hj)
    hj.init({          
        license: '3030-3D15-DA1E-77A7',          
        market: 'sdmls',
        container: '#IDX',
        googleApiKey: 'AIzaSyBe1MCdquXljVHyTzXwD194J8Eq6ubdaTs',        
        contactForm: {
            fields: {
                text: {
                    text: "I'm interested in MLS# {id} at {address.deliveryLine}, {address.city} {address.zip}"
                }
            }
        }          
    })
}

var script = document.createElement('script');
script.async = true
script.type = 'text/javascript'
script.src = 'https://sm.homejunction.com/app/js/bootstrap.js?callback=hj_search_load_callback'
document.head.appendChild(script);

export default {
    name: 'CompassSearch',

    data() {
        return {}
    },

    computed: {
        searchHeight() {
            return this.$q.screen.height - 105
        }
    },

    methods: {
        openWindow(link) {
            let options = {}
            window.open(link, '_blank')
        },
    },

    created() {
        
    }
}
</script>

<style scoped>
#compasssearch {
    width: 100%;
    min-height: calc(100vh - 65px);
    background: #fff;
    position: relative;
    overflow: hidden;
}

.container {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>
