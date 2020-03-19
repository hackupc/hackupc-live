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
var canNotify = false
let itsFullscreen = false
// To add a view, add here the id of the new article
var views = {
	'fullscreen': 'fullscreen',
	'live': 'live',
	'dayof': 'dayof',
	'rules': 'rules',
	'travel': 'travel',
	'streaming': 'streaming',
	'faq': 'faq',
	'schedule': 'schedule',
	'challenges': 'challenges',
	'map': 'map',
	'mentors': 'mentors'
}

let icons = {
	'logo': 'favicon.ico'
}

var actions = {
	removeEmptyStep: function (element) {
		if (element.children.length === 0) {
			element.parentElement.removeChild(element)
		}
	},
	// Remove happened element and parent if empty
	removeEndedEvent: function (element) {
		var parent = element.parentElement
		parent.removeChild(element)
		if (parent.children.length === 0) {
			parent.parentElement.removeChild(parent)
		}
	}
}

/// /////////////////////
// Main functions
/// /////////////////////
function malformedDataError () {
	// TODO: decide what to do if this happens
	console.error('New schedule data appears to be malformed. Please, try again refreshing the page. If the problem persists please contact us')
}

/*
* Generates timestamps (UTC) inside 'schedule'
*/
function generateTimestamps () {
	schedule.days.forEach(function (day) {
		day.startTmsp = Util.dateStringToSeconds(day.date) + parseInt(schedule.baseTimeOffset) * 60

		day.endTmsp = day.startTmsp + 24 * 60 * 60 + parseInt(schedule.baseTimeOffset) * 60

		day.events.forEach(function (event) {
			event.startTmsp = day.startTmsp + Util.hourStringToSeconds(event.startHour)
			if (!event.endHour) {
				event.endTmsp = event.startTmsp
			} else {
				event.endTmsp = day.startTmsp + Util.hourStringToSeconds(event.endHour)
			}
		})
	})
}

/*
* Choronological elements store start(optional)
* and end timestamps (in seconds)
* A chronological element can have 3 states: none, happening, happened
* An action callback can be specified
*/
function updateChronologicalElements () {
	var elements = document.querySelectorAll('[data-end-timestamp]')
	var now = 1570820400// Util.getNowSeconds()
	for (let i = 0; i < elements.length; i++) {
		if (elements[i].dataset.endTimestamp < now) {
			elements[i].classList.add(CONST.HAPPENED_CLASS)
			// If end action callback defined
			if (elements[i].dataset.endAction && actions[elements[i].dataset.endAction]) {
				actions[elements[i].dataset.endAction](elements[i])
			}
		} else if (elements[i].dataset.startTimestamp < now) {
			elements[i].classList.add(CONST.HAPPENING_CLASS)
			// If start action callback defined
			if (elements[i].dataset.startAction && actions[elements[i].dataset.startAction]) {
				actions[elements[i].dataset.startAction](elements[i])
			}
		}

		// If update action callback defined
		if (elements[i].dataset.updateAction && actions[elements[i].dataset.updateAction]) {
			actions[elements[i].dataset.updateAction](elements[i])
		}
	}
}

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

/*
* Generates events table to keep track of subscriptions (notifications)
*/
function generateEventReferences () {
	var localSubs = Util.storageGet('eventSubscriptions')
	var eventSubscriptions = {}
	schedule.days.forEach(function (day) {
		day.events.forEach(function (event) {
			// Init to false
			eventSubscriptions[event.id] = event
			eventSubscriptions[event.id].subscribed = false
			if (localSubs && localSubs[event.id]) { eventSubscriptions[event.id].subscribed = localSubs[event.id].subscribed }
		})
	})
	Util.storagePut('eventSubscriptions', eventSubscriptions)
}

/*
* Generates events table to keep track of subscriptions (notifications)
*/
function generateScheduleCompositedFields () {
	schedule.days.forEach(function (day) {
		day.events.forEach(function (event) {
			event.title = (event.talk ? '[Talk] ' : '') +
				(event.author ? (event.author + ': ') : '') +
				(event.title || '')
		})
	})
}

/*
* Loads the schedule in the global scope
* and checks version.
* If version is different from local
* executes callback
* Added actual datetime to avoid browser cached copies of schedule
*/
function updateSchedule (cb) {
	Util.loadFile('/data/schedule.json?date=' + Util.getNowDate().getTime(), function (data) {
		var newSchedule = JSON.parse(data)

		if (!newSchedule.version) { malformedDataError() }

		// TODO: discuss, != or <
		if (schedule.version !== newSchedule.version) {
			schedule = newSchedule
			generateTimestamps()
			generateEventReferences()
			generateScheduleCompositedFields()
			if (typeof cb === 'function') { cb() }
			console.info('Schedule updated on (' + Util.getNowDate() + '): \n' + schedule.message)
		} else {
			console.info('Schedule up to date')
		}
	}, function (data) {
		// show
		console.error('Error getting schedule: ' + data)
	})
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

function notify (msg, title, icon, cb) {
	var ntitle = title || CONST.DEFAULT_NOTIFICATION_TITLE
	var notification = new Notification(ntitle, {
		body: msg,
		icon: icon || CONST.DEFAULT_NOTIFICATION_ICON
	})

	notification.onclick = function () {
		if (typeof cb === 'function') { cb() }

		notification.close()
	}

	setTimeout(function () {
		notification.close()
	}, CONST.NOTIFICATION_TIMEOUT)
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
	updateSchedule(function () {
		init()
		updateChronologicalElements()
		updateCountdown()

		// Keep polling the schedule
		setInterval(function () {
			updateSchedule(function () {
				notify(schedule.message, 'Schedule changed!', icons.logo, function () {
					// goTo(views.schedule)
				})

				Util.fadeOut(main, function () {
					updateChronologicalElements()
					setTimeout(function () {
						Util.fadeIn(main)
						// we want the screen to actually disappear
					}, CONST.FADE_ANIMATION_DURATION * 1.2)
				})
			})
		}, CONST.SCHEDULE_REFRESH_INTERVAL)

		setInterval(function () {
			updateCountdown()
		}, 1000)

		setInterval(function () {
			updateChronologicalElements()
		}, 60000)
	})
})