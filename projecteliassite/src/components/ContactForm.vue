<template>
    <div>
        <q-form @submit="onSubmit" @reset="onReset" class="row">
            <q-input
                v-model="name"
                type="full name"
                class="col-xs-12 col-sm-6 q-py-md q-px-sm"
                filled
                fill-mask
                lazy-rules
                label="Your name"
                :rules="[val => (val && val.length > 0) || 'Please enter your name']"
            />

            <q-input
                v-model="email"
                type="email"
                class="col-xs-12 col-sm-6 q-py-md q-px-sm"
                filled
                fill-mask
                lazy-rules
                label="Your email"
                :rules="[val => (val && val.length > 0) || 'Please enter your email']"
            />

            <q-input
                ref="addressInput"
                v-show="showHomeDigest"
                v-model="streetAddress"
                type="address"
                class="col-xs-12 col-sm-6 q-py-md q-px-sm"
                filled
                fill-mask
                lazy-rules
                label="Your address"
                :rules="[val => !showHomeDigest || (val && val.length > 0) || 'Please enter your address']"
            />

            <q-input
                v-show="!showHomeDigest"
                v-model.number="zip"
                type="zip"
                mask="#####"
                class="col-xs-12 col-sm-6 q-py-md q-px-sm"
                filled
                fill-mask
                lazy-rules
                label="Your zip"
                :rules="[val => showHomeDigest || (val && val > 0) || 'Please enter your zip']"
            />

            <q-input
                v-model="phone"
                type="tel"
                mask="(###) ### - ####"
                hint="* Optional"
                class="col-xs-12 col-sm-6 q-py-md q-px-sm"
                filled
                fill-mask
                lazy-rules
                label="Your number"
                optional
            />

            <q-select
                v-model="interestedZips"
                v-show="showHomeDigest && showZips"
                class="col-xs-12 q-py-md q-px-sm"
                label="Zips you are interested in"
                multiple
                filled
                emit-value
                map-options
                :options="cities"
                :rules="[val => !showHomeDigest || (val && val.length > 0) || 'Please select some ZIPs you are interested in']"
            >
                <template v-slot:option="scope">
                    <q-item v-bind="scope.itemProps" v-on="scope.itemEvents">
                        <q-item-section>
                            <q-item-label v-html="scope.opt.label"></q-item-label>
                        </q-item-section>
                        <q-item-section side>
                            <q-icon v-show="interestedZips && interestedZips.includes(scope.opt.value)" name="fas fa-check-circle" color="green" style="font-size: .9rem;" />
                        </q-item-section>
                    </q-item>
                </template>
            </q-select>
<!--             
            <q-select
                v-show="inquiryType === 'Home Digest'"
                class="col-xs-12 q-py-md q-px-sm"
                label="Zips you are interested in"
                filled
                :value="interestedZips"
                use-input
                hide-selected
                fill-input
                input-debounce="0"
                :options="cities"
                @filter="interestedZipFilter"
                @input-value="setInterestedZips"
            >
                <template v-slot:no-option>
                    <q-item>
                        <q-item-section class="text-grey">
                            No results
                        </q-item-section>
                    </q-item>
                </template>
            </q-select> -->

            <q-select
                v-model="inquiryType"
                :options="options"
                class="col-xs-12 q-py-md q-px-sm"
                filled
                label="Inquiry Type"
                :rules="[val => (val && val.length > 0) || 'Please select an inquiry type']"
            />

            <q-input
                v-if="inquiryType === 'Other'"
                v-model="otherText"
                type="textarea"
                class="col-xs-12 q-py-md q-px-sm"
                filled
                fill-mask
                lazy-rules
                label="Other:"
                :rules="[val => (val && val.length > 0) || 'Please fill in your request']"
            />

            <div class="row q-py-md q-px-sm">
                <div class="col-9">
                    <q-btn :label="buttonLabel" type="submit" class="full-width" color="primary" />
                </div>
                <div class="col-3">
                    <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
                </div>
            </div>
        </q-form>

        <div v-if="conciergeFormSuccess || conciergeFormFail" class="q-pa-sm">
            <p v-if="conciergeFormSuccess">Thank you! The team will be in touch soon.</p>
            <p v-if="conciergeFormFail">There was an issue sending your contact request, please try again or email <a href="mailto:richard@richardelias.com"></a> directly.</p>
        </div>
    </div>
</template>

<script>
import { citiesList } from '../js/cities.js'

export default {
    name: 'ContactForm',

    props: {
        inquiryTypeInput: {
            type: String,
            default: '',
        },

        buttonLabel: {
            type: String,
            default: 'Work with us',
        },

        showZips: {
            type: Boolean,
            default: false,
        },

        agentID: {
            default: '',
            type: String
        },
    },

    data() {
        return {
            name: null,
            email: null,
            streetAddress: null,
            zip: null,
            phone: null,
            interestedZips: null,
            options: ['General', 'Buying', 'Selling', 'Concierge', 'Private Exclusive', 'Sellers Home Digest', 'Buyers Home Digest', 'Other'],
            inquiryType: 'General',
            otherText: '',
            conciergeFormSuccess: false,
            conciergeFormFail: false,
        }
    },

    computed: {
        globalInquiryType() {
            return this.$store.state.globalInquiryType
        },

        showHomeDigest() {
            return this.inquiryType === 'Home Digest'
        },

        cities() {
            return citiesList.sort().map(
                cityObj => {
                    return { 
                        label: `${ cityObj.city.toLowerCase().charAt(0).toUpperCase()}${cityObj.city.toLowerCase().slice(1)} (${cityObj.zip})`,
                        value: cityObj.zip
                    }
                })
        },
    },

    methods: {
        onSubmit() {
            // email richard and steve
            let req = {
                name: this.name,
                zip: this.zip,
                email: this.email,
                phone: this.phone,
                type: this.inquiryType === 'Other' ? this.otherText : this.inquiryType,
            }
            if (this.streetAddress) req.streetAddress = this.streetAddress
            if (this.interestedZips) req.interestedZips = this.interestedZips
            if (this.agentID) req.agentID = this.agentID
            console.log('contact req: ', req)

            this.api.post('https://richardelias.com/api/contact', req, res => {
                console.log('contact res: ', res)

                if (res.success) {
                    this.conciergeFormSuccess = true
                    this.conciergeFormFail = false
                    this.onReset()

                    this.$emit('success')

                    this.setTimeout(() => {
                        this.$root.$emit('showContactFormOverlay', false)
                    }, 3000)
                } else {
                    // error
                    this.conciergeFormSuccess = false
                    this.conciergeFormFail = true
                }
            })
        },

        onReset() {
            // this.name = null
            // this.zip = null
            // this.email = null
            // this.phone = null
        },

        interestedZipFilter(val, update, abort) {
            update(() => {
                const needle = val.toLocaleLowerCase()
                this.options = this.cities.filter(v => v.toLocaleLowerCase().indexOf(needle) > -1)
            })
        },

        setInterestedZips(val) {
            console.log('setInterestedZips: ', val)
            this.interestedZips = val
        },
    },

    mounted() {
        if (this.inquiryTypeInput) {
            this.inquiryType = this.inquiryTypeInput
        } else if (this.globalInquiryType) {
            this.inquiryType = this.globalInquiryType
        }

        let addressInput = this.$refs.addressInput.$refs.input
        // console.log('addressInput: ', addressInput)
        var autocomplete = new google.maps.places.Autocomplete(addressInput)
        google.maps.event.addListener(autocomplete, 'place_changed', () => {
            var place = autocomplete.getPlace()
            console.log('place selected: ', place)
            this.streetAddress = place.formatted_address
        })
    },
}
</script>

<style scoped></style>
