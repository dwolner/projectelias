import Vue from 'vue'
import axios from 'axios'
import {
	Platform, scroll
} from 'quasar'

const {
  getScrollTarget,
  setScrollPosition,
  getScrollPosition
} = scroll

Vue.prototype.scrollToElement = (id, extraOffset) => {
  console.log('scrollToElement: ', id, extraOffset)
  let el = document.getElementById(id)
  console.log('EL: ', el)

  let target = getScrollTarget(el)
  // let elOffset = el.offsetTop + (el.clientHeight * .5)
  let elOffset = el.offsetTop
  console.log('elOffset: ', elOffset)

  let offset = extraOffset ? elOffset + extraOffset : elOffset
  let duration = 400

  console.log('setScrollPosition: ', target, offset, duration)
  setScrollPosition(target, offset, duration)
}

// Vue.prototype.scrollIt = (id, selectorToScroll, customOffset) => {
// 	var element = id ? document.getElementById(id) : false
// 	console.log('element: ', element)

// 	// var elementToScroll = selectorToScroll ? document.querySelector(selectorToScroll) : window
// 	// console.log('elementToScroll: ', elementToScroll)
	
// 	var elementOffsetTop = element ? element.offsetTop : 0
// 	var leftScrollPos = 0
// 	var topScrollPos = elementOffsetTop - (customOffset || 25)

// 	console.log('leftScrollPos: ', leftScrollPos)
// 	console.log('topScrollPos: ', topScrollPos)

// 	// console.log('scrollIt platform: ', Platform.is, Platform.is.mobile, Platform.is.ios)
// 	// scrollToOptions doesnt work on mobile safari iOS
// 	// if (Platform.is.mobile && Platform.is.ios) {
// 		window.scrollTo(leftScrollPos, topScrollPos)
// 	// } else {
// 	// 	elementToScroll.scrollTo({
// 	// 		'behavior': 'smooth',
// 	// 		'left': leftScrollPos,
// 	// 		'top': topScrollPos
// 	// 	})
// 	// }
// }
