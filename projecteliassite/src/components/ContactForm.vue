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
                v-model.number="zip"
                type="zip"
                mask="#####"
                class="col-xs-12 col-sm-6 q-py-md q-px-sm"
                filled
                fill-mask
                lazy-rules
                label="Your zip"
                :rules="[val => (val && val > 0) || 'Please enter your zip']"
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
                v-model.number="phone"
                type="number"
                mask="##########"
                class="col-xs-12 col-sm-6 q-py-md q-px-sm"
                filled
                fill-mask
                lazy-rules
                label="Your number"
                :rules="[val => (val && val > 0) || 'Please enter your number']"
            />

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
                    <q-btn label="Work with us" type="submit" class="full-width" color="primary" />
                </div>
                <div class="col-3">
                    <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
                </div>
            </div>
        </q-form>

        <div class="q-pa-sm">
            <p v-if="conciergeFormSuccess">Thank you! The team will be in touch soon.</p>
            <p v-if="conciergeFormFail">There was an issue sending your contact request, please try again or email <a href="mailto:richard.elias@compass.com"></a> directly.</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactForm',

    props: {
        inquiryTypeInput: {
            type: String,
            default: '',
        },
    },

    data() {
        return {
            name: null,
            zip: null,
            email: null,
            phone: null,
            options: ['General', 'Buying', 'Selling', 'Concierge', 'Other'],
            inquiryType: 'General',
            otherText: '',
            conciergeFormSuccess: false,
            conciergeFormFail: false
        }
    },

    computed: {
        globalInquiryType() {
            return this.$store.state.globalInquiryType
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
    },

    created() {
        if (this.inquiryTypeInput) {
            this.inquiryType = this.inquiryTypeInput
        } else if (this.globalInquiryType) {
            this.inquiryType = this.globalInquiryType
        }
    },
}
</script>

<style scoped></style>
