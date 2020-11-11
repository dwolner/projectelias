<template>
    <q-page id="testimonials" class="bg-black q-py-xl flex flex-center">
        <div class="row well">
            <div class="col-xs-12 q-py-sm q-px-xl">
                <h3 class="Compass-Serif-Regular q-mb-md text-white" v-scroll-reveal="{ delay: 0, easing: 'ease-in-out', distance: '100px', origin: 'left' }" :style="$q.screen.width < 768 ? 'font-size: 2.5rem;' : ''">Testimonials</h3>
            </div>

            <div class="col-xs-12 col-md-6" v-scroll-reveal="{ delay: 0, easing: 'ease-in-out', distance: '100px', origin: 'bottom' }">
                <q-carousel 
                    v-model="slideIndex" 
                    class="rounded-borders"
                    control-color="white"
                    transition-prev="slide-right" 
                    transition-next="slide-left" 
                    animated 
                    swipeable 
                    navigation 
                    padding 
                    arrows
                    infinite
                    style="max-width: 800px; height: 100%; margin: 0 auto; background: rgba(0, 0, 0, 0)"
                >
                    <q-carousel-slide v-for="(slide, index) in textSlides" :key="index" :name="slide.author" class="column no-wrap flex-center" style="padding-bottom: 75px;">
                        <div class="text-center shadow-2" :style="`max-width: 100%; margin: 0 auto; border-radius: .25rem; background-image: url('statics/photos/curvy_lines.jpg'); background-size: cover; background-position: 50%;`">
                            <div class="q-my-md q-pa-md text-center" style="max-width: 560px;">
                                <q-icon class="q-mb-lg" name="fas fa-quote-right" color="primary" size="md" />

                                <p style="font-size: 1rem;">{{ slide.text }}</p>
                                <h6>
                                    <span style="font-weight: bold;">{{ slide.author }}</span>
                                </h6>
                            </div>
                        </div>
                    </q-carousel-slide>
                </q-carousel>
            </div>

            <div class="col-xs-12 col-md-6" v-scroll-reveal="{ delay: 0, easing: 'ease-in-out', distance: '100px', origin: 'bottom' }">
                <q-carousel 
                    v-model="videoSlideIndex" 
                    class="rounded-borders"
                    control-color="white"
                    transition-prev="slide-right" 
                    transition-next="slide-left" 
                    animated 
                    swipeable 
                    navigation 
                    padding 
                    arrows
                    infinite
                    style="height: 100%; max-width: 800px; margin: 0 auto; background: rgba(0, 0, 0, 0)"
                >
                    <q-carousel-slide v-for="(slide, index) in videoSlides" :key="index" :name="slide.id" class="column no-wrap flex-center" style="padding-bottom: 75px;">
                        <div class="text-center shadow-2 q-pa-sm bg-white" :style="`max-width: 100%; margin: 0 auto; border-radius: .25rem;`">
                            <iframe :width="videoWidth" :height="videoHeight" :src="`https://www.youtube.com/embed/${ slide.id }`" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </q-carousel-slide>
                </q-carousel>
            </div>
        </div>
    </q-page>
</template>

<script>
export default {
    name: 'Testimonials',

    data() {
        return {
            slideIndex: 'Lin',
            textSlides: [
                {
                    text: 'I was amazed that during the first week after you brought the property to market that you had over 17 showings and three legitimate offers at or over the asking price. Not only did you do an outstanding job marketing the property, but your communication with us and follow up on all aspects of the transaction was more than I ever expected. The timing of the sale from initial listing to close of escrow far exceeded our expectations. Thank you for an outstanding job selling the subject property and we look forward to working with you in the sale of the other condo next year.',
                    author: 'Lin',
                    date: '12/10/2020',
                },
                {
                    text:
                        'Christina is an excellent relator and great asset! Her dedication and patience were extremely helpful in our search. We spent many nights and weekends looking for the perfect home and she was always willing to be there. She also accommodated our price point concerns and answered any questions we  had. Not only did she help in our home search, she also referred us to a great mortgage broker which made our home buying process much easier. We would highly recommend her to any potential home buyer.',
                    author: 'Martino Michael',
                    date: '04/08/2019',
                },
                {
                    text: 'Richard Elias was nothing short of a super hero when it came to selling our Carmel Valley home! Trust me, he is your go-to person to get the job done!',
                    author: 'Tiffany Lien',
                    date: '08/15/2018',
                },
                {
                    text: 'So grateful to have found Mari Rosas when we started our relocating process to San Diego. Our first impression was that she was very friendly and prepared. She spent all the time we needed to get familiar with our new city and make sure we found exactly what we needed. It was quite the journey to  get into our dream home and thanks to her, it was made possible. She was always there to answer our calls and texts,even if was just to vent! Her professionalism, hard work, and dedication are much respected and appreciated. We consider Mari a friend for life and highly recommend her to anyone we know.',
                    author: 'Jessica Garcia',
                    date: '01/23/2019',
                },
                {
                    text: 'Richard Elias was recommended to me by a friend. I had interviewed three other realtors and decided on Rich. I am so glad I did. His knowledge of listing, terms and listing price were spot on. My house had 13 offers in 5 days. Closed escrow in 14 days with an all cash offer. $30,000.00 over listing price. Rich is very professional and friendly. I will recommend Rich to anyone who needs a realtor.',
                    author: 'Tina C.',
                    date: '01/23/2019',
                },
                {
                    text:
                        'Samantha was very knowledgeable, patient and flexible with her availability to show us houses at our convenience.  She answered all our questions and made us feel at ease while searching for our forever home. If you are buying or selling your home I highly recommend Samantha Lopez.',
                    author: 'Roxanne Granados',
                    date: '01/17/2019',
                },
                {
                    text:
                        'Richard Elias and his team are extremely knowledgeable and helpful. They guided us through the process of buying our first home front to back. I would highly recommend them to anyone looking for a great team.',
                    author: 'Z. Harrison',
                    date: '01/17/2019',
                },
                {
                    text:
                        'I reached out to Christina when my husband and I were interested in purchasing a home in California. My husband is active military and got orders in a different state so Christina picked up where we left off and found us a reliable realtor in Texas. She would check in periodically during our home  buying process and was always available when we had questions. After we purchased our home she continued to check in. She was very personable and I will be referring her to anyone I know wanting to buy/sell in San Diego.',
                    author: 'Astetler40',
                    date: '01/27/2020',
                },
                {
                    text:
                        'Samantha is the utmost professional! She responds immediately to my text and email correspondence. Her technical expertise is brilliant, and she cares at a personal level for what is best for her clients. Samantha is one in a million!',
                    author: 'Jessica Von Prisk',
                    date: '01/19/2019',
                },
            ],
            videoSlideIndex: 'GvXz6px-QHo',
            videoSlides: [
                {
                    id: 'GvXz6px-QHo'
                },
                {
                    id: 'mRAuqZJlXsk'
                },
                {
                    id: '2yr17zwNzfA'
                },
                {
                    id: 'jbkl0POmqZ4'
                },
                {
                    id: 'McOLc6YwmMw'
                },
                {
                    id: 'kEX55YQIEJ8'
                },
                {
                    id: '_lneDbg6bCs'
                },
                {
                    id: 'CD-5V_we-Kk'
                },
                {
                    id: 'MK00gMTL6X4'
                }
            ],

            videoOffset: 137
        }
    },

    computed: {
        videoWidth() {
            let width = (this.$q.screen.width > 1023 ? this.$q.screen.width / 2 : this.$q.screen.width ) - this.videoOffset
            return width < 540 ? width : 540
        },

        videoHeight() {
            return this.videoWidth * .5625
        }
    },

    methods: {},
}
</script>

<style scoped>
#testimonials {
    width: 100%;
    /* min-height: 100vh; */
    position: relative;
    overflow: hidden;
}

.hero {
    width: 100%;
    min-height: 100vh;
    background: #171819;
    position: relative;
    overflow: hidden;
}

.container {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>
