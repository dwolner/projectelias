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
				role: 'Lead Realtor',
				dreNumber: '01104411',
				email: 'richard@richardelias.com',
				phone: '619.562.6800',
				headshot: 'Richard.jpg',
				avatar: 'richard_square.jpg',
				slug: 'richard-elias',
				mainman: true,
				about: 'As a San Diego native, Richard Elias is an expert in residential, luxury and investment properties in the Greater San Diego area. He prides himself in being able to provide his clients with the most exceptional real estate experience and consistently goes above and beyond to achieve this goal. Over the past 27 years, Richard has been committed to providing his clients with a truly impressive real estate experience through his comprehensive understanding of the real estate market and natural negotiation skills. This has led Richard to be ranked in the top ½% of real estate agents for sales year after year. Since obtaining his real estate license as soon as he legally could, as a senior in high school, Richard has helped thousands of people buy and sell homes. As a respected agent and mentor, Richard leads the top producing Richard Elias Team here at Compass. When he isn’t selling your home, finding your dream home, or coaching his team, Richard enjoys spending time with his family, entertaining friends, cooking, learning about new technology, car culture, and just being outside exploring beautiful San Diego.'
			  },
			  christina: {
			    name: 'Christina Battikha',
			    role: 'Realtor',
			    dreNumber: '01983805',
			    email: 'christina.battikha@compass.com',
			    phone: '619.504.9236',
				avatar: 'christina_square.jpg',
				headshot: 'Christina.jpg',
				slug: 'christina-battikha',
				about: 'Christina is a focused and energetic young professional who takes pride in representing her home community of San Diego. After earning her degree in business management, she went on to join a firm of top agents in Silicon Valley and there honed the outstanding customer service skills that distinguish her real estate practice today. Whether she is negotiating the highest selling price for one of her listings, or helping a family purchase their first home, Christina strives to build relationships that will last a lifetime. Her friendly, adaptable nature helps her relate to people from varying cultures and perspectives, and to create winning results that harmonize with their goals and values. “I love being able to help people at such an exciting time, and I do my best to make the home buying and selling process as fun and smooth as I can.”'
			  },
			  mari: {
			    name: 'Mari Rosas',
			    role: 'Realtor',
			    dreNumber: '02007303',
			    email: 'mari.rosas@compass.com',
			    phone: '619.344.1619',
				avatar: 'mari_square.jpg',
				headshot: 'Mari.jpg',
				slug: 'mari-rosas',
				about: 'Mari values the privilege to create a foundation for herself, her family and to help others do the same in America’s Finest City through her passion for real estate. Mari prides herself on her ability to provide clients with excellent customer service, efficiency, honesty and dedication to her craft. Whether her clients are buying or selling, Mari thrives from knowing she can assist in making their real estate dreams come true.'
			  },
			  christopher: {
			    name: 'Christopher Triana',
			    role: 'Realtor',
			    dreNumber: '02127696',
			    email: 'christopher.triana@compass.com',
			    phone: '619.942.3223',
				avatar: 'christopher_square.jpg',
				headshot: 'Christopher.jpg',
				slug: 'christopher-triana',
				about: 'Christopher\'s professional journey has taken him from coast to coast and has finally brought him home. His passion for building and sustaining meaningful relationships with clients has helped him thrive in a variety of industries including cosmetology, education, and sales. With his extensive stylist background, Christopher boasts more than a decade of experience, patiently helping clients evaluate their aesthetics, preferences, and goals. Consistently exceeding his clients\’ expectations, he delivers quality and unique results. Ultimately, his knack for business partnered with his passion for client success encouraged him to pursue sales opportunities across the US assisting businesses in opening accounts and guiding them into higher producing ventures. His drive paired with his trustworthiness makes him the perfect person to have in your corner, negotiating the best possible deal.'
			  },
			  devrie: {
			    name: 'Devrie Grimm',
			    role: 'Realtor',
			    dreNumber: '02106079',
			    email: 'devrie.grimm@compass.com',
			    phone: '858.731.6537',
				avatar: 'devrie_square.jpg',
				headshot: 'Devrie.jpg',
				slug: 'devrie-grimm',
				about: 'Growing up in Houston, Texas, Devrie developed a natural appreciation for architecture and interior design at an early age. After moving to San Diego in 2015, Devrie fell deeply in love with the city. Merging her passion for Real Estate and her love for her new city, Devrie was inspired to help others make San Diego home. She has become a go - to for buyers, sellers and investors alike. With her extensive network and impeccable white glove level of service, Devrie is committed to helping her clients navigate today\'s complex Real Estate market.'
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
