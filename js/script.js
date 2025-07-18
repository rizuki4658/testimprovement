// Userback = window.Userback || {}
// var USERBACK_TOKEN = 'A-yfnQMpl8IxkqO2cRRLNYqEQhDjgzRWqsQnfYgv6833gConJH0j'
// // window.location.origin.includes('refreshedtech') ? 'A-yfnQMpl8IxkqO2cRRLNYqEQhDjgzRWqsQnfYgv6833gConJH0j' : '7871|14535|yfnQMpl8IxkqO2cRRLNYqEQhDjgzRWqsQnfYgv6833gConJH0j'
// Userback.access_token = USERBACK_TOKEN //live server
// // Userback.access_token = '7871|13594|yfnQMpl8IxkqO2cRRLNYqEQhDjgzRWqsQnfYgv6833gConJH0j'; //test server
// ;(function (id) {
// 	var s = document.createElement('script')
// 	s.async = 1
// 	s.src = 'https://static.userback.io/widget/v1.js'
// 	var parent_node = document.head || document.body
// 	parent_node.appendChild(s)
// })('userback-sdk')

// Userback.on_open = function () {
// 	Userback.name = window.name
// 	Userback.email = window.email
// }

// var APP_ID = 'a2i3lhp8'

// class CustomerSupport {
// 	whiteLabel
// 	appID = APP_ID

// 	constructor() {
// 		this.whiteLabel = JSON.parse(window.localStorage.getItem('white-label'))

// 		this.#intercom()
// 		// this.#helpscout(window, document, window.Beacon || function() {})
// 	}

// 	#intercom() {
// 		// 'https://app.refreshedtech.com'
// 		if (!['https://app.reusely.com'].includes(window.location.origin)) {
// 			return undefined
// 		}

// 		;(function () {
// 			var w = window
// 			var ic = w.Intercom
// 			if (typeof ic === 'function') {
// 				ic('reattach_activator')
// 				ic('update', w.intercomSettings)
// 			} else {
// 				var d = document
// 				var i = function () {
// 					i.c(arguments)
// 				}
// 				i.q = []
// 				i.c = function (args) {
// 					i.q.push(args)
// 				}
// 				w.Intercom = i
// 				var l = function () {
// 					var s = d.createElement('script')
// 					s.type = 'text/javascript'
// 					s.async = true
// 					s.src = 'https://widget.intercom.io/widget/' + APP_ID
// 					var x = d.getElementsByTagName('script')[0]
// 					x.parentNode.insertBefore(s, x)
// 				}
// 				if (document.readyState === 'complete') {
// 					l()
// 				} else if (w.attachEvent) {
// 					w.attachEvent('onload', l)
// 				} else {
// 					w.addEventListener('load', l, false)
// 				}
// 			}
// 		})()
// 	}

// 	// #helpscout(e, t, n) {
// 	//   function a() {
// 	//     var e = t.getElementsByTagName("script")[0],
// 	//       n = t.createElement("script");
// 	//     n.type = "text/javascript", n.async = !0, n.src = "https://beacon-v2.helpscout.net", e.parentNode.insertBefore(n, e)
// 	//   }
// 	//   if (e.Beacon = n = function(t, n, a) {
// 	//       e.Beacon.readyQueue.push({
// 	//         method: t,
// 	//         options: n,
// 	//         data: a
// 	//       })
// 	//     }, n.readyQueue = [], "complete" === t.readyState) return a();
// 	//   e.attachEvent ? e.attachEvent("onload", a) : e.addEventListener("load", a, !1)
// 	// }

// 	use(command, options) {
// 		window.Intercom && window.Intercom(command, options)
// 		// window.Beacon && window.Beacon(command, options)
// 	}
// }

// window.CustomerSupport = new CustomerSupport()

WebFont.load({
	google: {
		families: ['Material Icons']
	}
})

;(function () {
	var gs = document.createElement('script')
	gs.src = 'https://js.partnerstack.com/v1/'
	gs.type = 'text/javascript'
	gs.async = 'true'
	gs.onload = gs.onreadystatechange = function () {
		var rs = this.readyState
		if (rs && rs != 'complete' && rs != 'loaded') return
		try {
			if (typeof growsumo !== 'undefined') {
				window.growsumo = growsumo
				growsumo._initialize('pk_n7Tr4JYIBC1nxzQMhFn1yXcRL357wNkA')
			}

			if (typeof growsumoInit === 'function') {
				growsumoInit()
			}
		} catch (e) {}
	}
	var s = document.getElementsByTagName('script')[0]
	s.parentNode.insertBefore(gs, s)
})()
