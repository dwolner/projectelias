<template>
    <div id="contact-profile" class="row">
        <div class="col-xs-12 col-sm-6 col-md-4 q-pa-sm">
            <q-img :src="`statics/team/${ agentData.imageFilename }`" style="max-width: 100%;" />
        </div>
        <div class="col-xs-12 col-sm-6 col-md-8 q-pa-sm">
            <div>
                <p class="q-my-sm" style="font-size: 1rem;"><strong>{{ agentData.name }}</strong> | {{ agentData.title }}</p>
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
        agentID: {
            default: 'richard',
            type: String
        }
    },

    data() {
        return {
            agentDataMap: {
                richard: {
                    name: 'Richard Elias',
                    title: 'Realtor',
                    dreNumber: '01104411',
                    email: 'richard@richardelias.com',
                    phone: '619.562.6800',
                    imageFilename: 'richard_square.jpg'
                },
                christina: {
                    name: 'Christina Battikha',
                    title: 'Realtor',
                    dreNumber: '01983805',
                    email: 'christina.battikha@compass.com',
                    phone: '619.504.9236',
                    imageFilename: 'christina_square.jpg'
                },
                samantha: {
                    name: 'Samantha Lopez',
                    title: 'Realtor',
                    dreNumber: '01990167',
                    email: 'samantha.lopez@compass.com',
                    phone: '559.288.9060',
                    imageFilename: 'samantha_square.jpg'
                },
                mari: {
                    name: 'Mari Rosas',
                    title: 'Realtor',
                    dreNumber: '02007303',
                    email: 'mari.rosas@compass.com',
                    phone: '619.344.1619',
                    imageFilename: 'mari_square.jpg'
                },
                diego: {
                    name: 'Diego Martinez',
                    title: 'Realtor',
                    dreNumber: '02023843',
                    email: 'cdiego.martinez@compass.com',
                    phone: '619.205.9664',
                    imageFilename: 'diego_square.jpg'
                }
            }
        }
    },

    computed: {
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
