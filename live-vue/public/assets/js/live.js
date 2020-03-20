/// /////////////////////
// Globals
/// /////////////////////
var body
var main
var header
var smallHeader
var aside
let itsFullscreen = false

/// /////////////////////
// Navigation
/// /////////////////////
function toggleFullscreen () {
	if (itsFullscreen) {
		hideFullscreen()
		itsFullscreen = false
	} else {
		showFullscreen()
		itsFullscreen = true
	}
}

function hideFullscreen () {
	Util.fadeOut(body, function () {
		Util.show(header)
		Util.show(smallHeader)
		Util.fadeIn(body, () => { document.exitFullscreen() })
	})
}

function showFullscreen () {
	Util.fadeOut(body, function () {
		Util.hide(header)
		Util.hide(smallHeader)
		Util.fadeIn(body, () => { document.documentElement.requestFullscreen() })
	})
}

function openAsideMenu () {
	// Prevent seeing under veil
	// (for some reason veil is shorter than body)
	document.body.scrollTop = 0

	Util.blockScroll(body)
	aside.classList.remove('hidden')
	// Force dom repaint
	setTimeout(function () {
		aside.classList.remove('closed')
	}, 1)
	Util.veil(body)
}

function closeAsideMenu () {
	Util.unveil(body)
	aside.classList.add('closed')
	setTimeout(function () {
		aside.classList.add('hidden')
		Util.releaseScroll(body)
	}, CONST.ASIDE_OPEN_ANIMATION_DURATION)
}

/// /////////////////////
// Initialization
/// /////////////////////
document.addEventListener('DOMContentLoaded', function (event) {
	body = document.body
	main = document.getElementsByTagName('main')[0]
	header = document.getElementById('header-nav-bar')
	smallHeader = document.getElementById('header-small')
	aside = document.getElementById('aside-small-menu')

	document.addEventListener('keypress', function (ev) {
		var key = String.fromCharCode(ev.which)
		if (key === 'p' || key === 'f' || key === ' ') { toggleFullscreen() }
	})
	document.getElementById('countdown-li').addEventListener('click', function () {
		toggleFullscreen()
	})
	// document.getElementById('countdown-full').addEventListener('click', function () {
		// toggleFullscreen()
	// })

	document.getElementById('open-aside-btn').addEventListener('click', function () {
		openAsideMenu()
	})
	document.getElementById('close-aside-btn').addEventListener('click', function () {
		closeAsideMenu()
	})
})