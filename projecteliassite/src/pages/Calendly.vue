<template>
    <q-page class="flex flex-center">
        
        <div align="center">
            <h6>Meet with me virtually</h6>
            <div class="calendly-inline-widget" data-url="https://calendly.com/richardeliasteam" style="min-width:320px;height:600px;"></div>
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
