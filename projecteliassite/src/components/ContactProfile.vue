<template>
    <div id="contact-profile" class="row">
        <div class="col-xs-12 col-sm-6 col-md-4 q-pa-sm">
            <q-img :src="`statics/team/${ agentData.imageFilename }`" style="max-width: 100%;" />
        </div>
        <div class="col-xs-12 col-sm-6 col-md-8 q-pa-sm">
            <div>
                <p class="q-mb-sm" style="font-size: 1rem;"><strong>{{ agentData.name }}</strong> | {{ agentData.title }}</p>
                <p class="q-my-sm" style="font-size: 1rem;">DRE# {{ agentData.dreNumber }}</p>
                <p class="q-my-sm" style="font-size: 1rem;">{{ agentData.email }}</p>
                <p class="q-my-sm" style="font-size: 1rem;">✆: {{ agentData.phone }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactProfile',

    props: {

    },

    data() {
        return {
            
        }
    },

    computed: {
        agentID() {
            return this.$store.state.agentID
        },

        agentDataMap() {
            return this.$store.state.agentDataMap
        },

        agentData() {
            return this.agentDataMap[this.agentID]
        }
    },

    methods: {
        
    }
}
</script>

<style scoped>

</style>
