<template>
    <q-page class="flex flex-center">
        <iframe
            src="https://www.simplifyingthemarket.com/en/videos/?a=35238-70afc3829d7f0cdac24400a255ace4ba"
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
    </q-page>
</template>

<script>
import NewsInner from '../components/NewsInner'

export default {
    name: 'Videos',

    components: {
        NewsInner,
    },

    data() {
        return {}
    },

    computed: {
        searchHeight() {
            return this.$q.screen.height - 65
        },
    },

    methods: {},

    created() {},
}
</script>

<style scoped></style>
