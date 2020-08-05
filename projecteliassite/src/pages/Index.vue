<template>
  <q-page class="flex flex-center">
    <div id="top" class="hero">
      <div class="row heroContainer text-white q-pa-lg" align="center">
        <div class="col-12">
          <img
            src="statics/logos/RichardElias_CompassLockupHorizontal-White.png"
            style="max-width: 18rem;"
          />
          <h3
            class="q-my-sm"
            style="letter-spacing: 2px; text-transform: uppercase;"
          >
            Richard Elias Team
          </h3>
          <h4 class="q-my-md">
            <transition-group
              name="staggered-fade"
              tag="span"
              v-bind:css="false"
              v-on:before-enter="beforeEnter"
              v-on:enter="enter"
              v-on:leave="leave"
            >
              <span
                v-for="(word, index) in tagline"
                :key="index"
                :data-index="index"
              >
                {{ word }}
              </span>
            </transition-group>
          </h4>
        </div>

        <div class="col-12">
          <div
            class="relative-position shadow-6"
            style="max-width: 300px; height: 150px; background: url('statics/homedigest_intro.png'); background-size: cover; background-repeat: no-repeat; background-position: 50% 20%;"
            @click="showVideo = true"
          >
            <div class="center">
              <q-btn flat>
                <q-icon
                  name="fas fa-play-circle"
                  color="white"
                  style="font-size: 4rem;"
                />
              </q-btn>
            </div>
          </div>
          <p class="q-my-sm">Learn more about how we can help.</p>
        </div>

        <div class="col-12">
          <q-btn flat color="light" @click="scrollToElement('team', 65)">
            <div class="full-width" style="font-size: .8rem;">See More</div>
            <q-icon
              name="fas fa-chevron-down"
              size="xs"
              style="font-size: .8rem;"
            />
          </q-btn>
        </div>
      </div>
      <video
        id="bgvid"
        autoplay="autoplay"
        preload="metadata"
        loop="loop"
        muted
        playsinline
        class="playing"
      >
        <source
          src="//videos.ctfassets.net/3xf6g0o5qdho/1uc2E01DTu8ASyAKYoq4oK/40e19ac85c90529f143fec0f001b1cda/MV_About_Header_1080p_.mp4"
          type="video/mp4"
        />
      </video>
    </div>

    <Team />

    <BuyersSellers />

    <MyListings />

    <Concierge />

    <Testimonials />

    <NewsInner showLength="3" />

    <!-- <OpenhousesInner showLength="3" /> -->

    <InstaFeed />

    <div
      style="position: relative; background-image: url('statics/Luxury-LA.jpg'); background-size: cover; background-position: 50%; width: 100%; height: auto;"
    >
      <div class="overlay"></div>
      <Contact />
    </div>

    <q-dialog
      v-model="showVideo"
      @show="showVideo = true"
      @hide="showVideo = false"
    >
      <q-card>
        <q-card-section style="padding: .25rem;">
          <q-btn
            flat
            class="absolute"
            round
            size="sm"
            color="white"
            @click="showVideo = false"
            style="top: .5rem; right: .5rem; z-index: 999;"
          >
            <q-icon name="fas fa-times" color="black" />
          </q-btn>
          <video
            v-if="showVideo"
            autoplay
            controls
            src="statics/site_intro.mp4"
            style="width: 100%;"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import Concierge from "../components/Concierge";
import InstaFeed from "../components/InstaFeed";
import MyListings from "../components/MyListings";
import BuyersSellers from "../components/BuyersSellers";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
import Homebot from "../components/Homebot";
import Lender from "../components/Lender";
import NewsInner from "../components/NewsInner";
import OpenhousesInner from "../components/OpenhousesInner";
import Contact from "../components/Contact";

export default {
  name: "PageIndex",

  components: {
    Concierge,
    InstaFeed,
    MyListings,
    BuyersSellers,
    Team,
    Testimonials,
    Lender,
    NewsInner,
    OpenhousesInner,
    Homebot,
    Contact
  },

  data() {
    return {
      showVideo: false,
      tagline: ""
    };
  },

  methods: {
    beforeEnter: function(el) {
      el.style.opacity = 0;
    },
    enter: function(el, done) {
      var delay = el.dataset.index * 500;
      setTimeout(function() {
        Velocity(el, { opacity: 1, translateX: '500px' }, { complete: done });
      }, delay);
    },
    leave: function(el, done) {
      var delay = el.dataset.index * 500;
      setTimeout(function() {
        Velocity(el, { opacity: 0, height: 0 }, { complete: done });
      }, delay);
    }
  },

  mounted() {
    setTimeout(() => {
      let tagline = "Let our experience move you.";
      this.tagline = tagline.split(" ");
    }, 500);
  }
};
</script>

<style scoped>
.hero {
  width: 100%;
  height: calc(100vh - 65px);
  background: #171819;
  position: relative;
  overflow: hidden;
}

.heroContainer {
  position: relative;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  position: relative;
  z-index: 100;
}

.hero video {
  -webkit-transition: all 2s cubic-bezier(0.835, 0, 0.19, 1);
  -o-transition: all 2s cubic-bezier(0.835, 0, 0.19, 1);
  transition: all 2s cubic-bezier(0.835, 0, 0.19, 1);
  opacity: 0.75;
  filter: alpha(opacity=0);
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 1;
  transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  background: #171819;
  background-size: cover;
  display: inline-block;
}

.overlay {
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  position: absolute;
}
</style>
