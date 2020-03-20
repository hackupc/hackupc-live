/// /////////////////////
// Globals
/// /////////////////////
var body
var main
var header
var smallHeader
var aside
// var countdown
var schedule = { 'version': -1 }
let itsFullscreen = false

/// /////////////////////
// Main functions
/// /////////////////////
function updateCountdown () {
	var countdownStart = Util.dateStringToSeconds(schedule.countdownStart) + parseInt(schedule.baseTimeOffset) * 60
	// var running = false
	var obj = { hours: 0, minutes: 0, seconds: 0 }
	var elapsed = Util.getNowSeconds() - countdownStart
	var current = CONST.HACKATHON_DURATION - elapsed
	if (current > 0 && current < CONST.HACKATHON_DURATION) {
		obj = Util.getHumanTime(current)
		// running = true
	} else {
		if (current > CONST.HACKATHON_DURATION) {
			obj.hours = 36
		}
	}

	let hours = Util.pad(obj.hours)
	let minutes = Util.pad(obj.minutes)
	let seconds = Util.pad(obj.seconds)

	var countdownElements = document.querySelectorAll('.countdown-time')
	for (const elem of countdownElements) {
		let hoursElem = elem.getElementsByClassName('hours')[0]
		let minutesElem = elem.getElementsByClassName('minutes')[0]
		let secondsElem = elem.getElementsByClassName('seconds')[0]
		if (hoursElem && hoursElem.textContent !== hours) hoursElem.textContent = hours
		if (minutesElem && minutesElem.textContent !== minutes) minutesElem.textContent = minutes
		if (secondsElem && secondsElem.textContent !== seconds) secondsElem.textContent = seconds
	}
}

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
function init () {
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
}

document.addEventListener('DOMContentLoaded', function (event) {
	init()
	updateCountdown()
	setInterval(function () {
		updateCountdown()
	}, 1000)
})