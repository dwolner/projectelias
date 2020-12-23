<template>
    <div id="contact-profile" class="row">
        <div class="col-xs-12 col-sm-6 col-md-4 q-pa-sm" :align="$q.screen.width > 599 ? 'right' : 'center'">
            <q-img :src="`statics/team/${ agentData.avatar }`" style="max-width: 300px;" />
        </div>
        <div class="col-xs-12 col-sm-6 col-md-8 q-pa-sm" :align="$q.screen.width > 599 ? 'left' : 'center'">
            <div>
                <p class="q-mb-sm" style="font-size: 1rem;"><strong>{{ agentData.name }}</strong> | {{ agentData.role }}</p>
                <p class="q-my-sm" style="font-size: 1rem;">DRE# {{ agentData.dreNumber }}</p>
                <p class="q-my-sm" style="font-size: 1rem;">{{ agentData.email }}</p>
                <p class="q-my-sm" style="font-size: 1rem;">✆: {{ agentData.phone }}</p>
            </div>
        </div>
        <div v-if="showAbout" class="col-xs-12 q-mt-md q-pa-sm" :align="$q.screen.width > 599 ? 'left' : 'center'">
            <p style="font-size: 1rem;">{{ agentData.about }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactProfile',

    props: ['showAbout'],

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
