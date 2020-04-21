<template>
    <q-page class="flex flex-center">
        <div align="center">
            <div class="calendly-inline-widget" data-url="https://calendly.com/richardeliasteam" :style="`min-width: 350px; height: ${ $q.screen.height - 150 }px;`"></div>
        </div>
    </q-page>
</template>

<script>

export default {
    name: 'Calendly',

    components: {
    },

    data() {
        return {
        }
    },

    computed: {
       
    },

    methods: {

    },

    created() {
        let recaptchaScript = document.createElement('script')
            recaptchaScript.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js')
        document.head.appendChild(recaptchaScript)
    }
}
</script>

<style scoped>
   
</style>
