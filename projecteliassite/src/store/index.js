import Vue from 'vue'
import Vuex from 'vuex'

// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function ( /* { ssrContext } */ ) {
	const Store = new Vuex.Store({
		modules: {
			// example
		},

		// enable strict mode (adds overhead!)
		// for dev mode only
		strict: process.env.DEV,

		state: {
			secret: 'eliasteam',
			globalInquiryType: 'General',
			agentID: 'richard',

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
			    email: 'diego.martinez@compass.com',
			    phone: '619.205.9664',
			    imageFilename: 'diego_square.jpg'
			  }
			}
		},

		mutations: {
			globalInquiryType(state, payload) {
				state.globalInquiryType = payload
			},
			
			setAgentID(state, payload) {
				state.agentID = payload
			}
		}
	})

	return Store
}
