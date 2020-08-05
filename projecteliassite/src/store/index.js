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
				imageFilename: 'richard_square.jpg',
				about: 'As a San Diego native, Richard Elias is an expert in residential, luxury and investment properties in the Greater San Diego area. He prides himself in being able to provide his clients with the most exceptional real estate experience and consistently goes above and beyond to achieve this goal. Over the past 27 years, Richard has been committed to providing his clients with a truly impressive real estate experience through his comprehensive understanding of the real estate market and natural negotiation skills. This has led Richard to be ranked in the top ½% of real estate agents for sales year after year. Since obtaining his real estate license as soon as he legally could, as a senior in high school, Richard has helped thousands of people buy and sell homes. As a respected agent and mentor, Richard leads the top producing Richard Elias Team here at Compass. When he isn’t selling your home, finding your dream home, or coaching his team, Richard enjoys spending time with his family, entertaining friends, cooking, learning about new technology, car culture, and just being outside exploring beautiful San Diego.'
			  },
			  christina: {
			    name: 'Christina Battikha',
			    title: 'Realtor',
			    dreNumber: '01983805',
			    email: 'christina.battikha@compass.com',
			    phone: '619.504.9236',
				imageFilename: 'christina_square.jpg',
				about: 'Christina is a focused and energetic young professional who takes pride in representing her home community of San Diego. After earning her degree in business management, she went on to join a firm of top agents in Silicon Valley and there honed the outstanding customer service skills that distinguish her real estate practice today. Whether she is negotiating the highest selling price for one of her listings, or helping a family purchase their first home, Christina strives to build relationships that will last a lifetime. Her friendly, adaptable nature helps her relate to people from varying cultures and perspectives, and to create winning results that harmonize with their goals and values. “I love being able to help people at such an exciting time, and I do my best to make the home buying and selling process as fun and smooth as I can.”'
			  },
			  samantha: {
			    name: 'Samantha Lopez',
			    title: 'Realtor',
			    dreNumber: '01990167',
			    email: 'samantha.lopez@compass.com',
			    phone: '559.288.9060',
				imageFilename: 'samantha_square.jpg',
				about: 'Samantha’s entry to Real Estate was almost destined, due to her mother’s Real Estate Brokerage. Raised in Fresno and temporarily living in Los Angeles before permanently making San Diego her home, and even living in Spain for a little, she has gained multiple perspectives in different environments and nurturing an adaptable personality. In addition, working with a diverse clientele comes naturally to Samantha, which is why she enjoys focusing on real estate in the San Diego Market where she has made home for the last seven years. Samantha attended San Diego Mesa College where she studied Spanish and International Business. She also volunteers for non-profits such as #hashtaglunchbag.'
			  },
			  mari: {
			    name: 'Mari Rosas',
			    title: 'Realtor',
			    dreNumber: '02007303',
			    email: 'mari.rosas@compass.com',
			    phone: '619.344.1619',
				imageFilename: 'mari_square.jpg',
				about: 'Mari values the privilege to create a foundation for herself, her family and to help others do the same in America’s Finest City through her passion for real estate. Mari prides herself on her ability to provide clients with excellent customer service, efficiency, honesty and dedication to her craft. Whether her clients are buying or selling, Mari thrives from knowing she can assist in making their real estate dreams come true.'
			  },
			  diego: {
			    name: 'Diego Martinez',
			    title: 'Realtor',
			    dreNumber: '02023843',
			    email: 'diego.martinez@compass.com',
			    phone: '619.205.9664',
				imageFilename: 'diego_square.jpg',
				about: 'Diego is a native born San Diegan who was raised in a family where real estate and business was key. He attributes his success to his upbringing, watching his parents purchase their first investment property at a young age with the knowledge that owning real estate is another great way of making your money work for you. He is also a proud San Diego State University alumni, proud to represent his local communities and fellow millennials. To say that Diego loves helping people is an understatement, his decision to dive into something where he knew he wasn’t just selling a product, but actually helping someone fulfill a dream is still the best decision he’ s made to date.Diego’ s“ hustler” mindset, energetic and compassionate attitude towards people is something that is ingrained in him.He is always excited to meet new clients, treat them like a personal friend, and guide them through the home buying and selling process.'
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
