const STAGES = {
    HEART_OF_THE_KINGDOM: 'Heart of the Kingdom',
    BUTTERFLY_GARDEN: 'Butterfly Garden',
    MOON_GROVE: 'Moon Grove',
    ARCANE_LIBRARY: 'Arcane Library'
}

const DAYS = {
    FRIDAY: "Freitag",
    SATURDAY: "Samstag",
    SUNDAY: "Sonntag"
}

const STAGE_NAMES = [STAGES.HEART_OF_THE_KINGDOM, STAGES.BUTTERFLY_GARDEN, STAGES.MOON_GROVE, STAGES.ARCANE_LIBRARY]

/**
 * TODO: Platzhalter-Programm durch echtes Line-Up ersetzen.
 *
 * @type {{[DAYS.FRIDAY]: {[STAGES.HEART_OF_THE_KINGDOM]: [{time: string, icon: string, title: string, desc: string},{time: string, icon: string, title: string, desc: string}], [STAGES.BUTTERFLY_GARDEN]: [{time: string, icon: string, title: string, desc: string},{time: string, icon: string, title: string, desc: string}], [STAGES.MOON_GROVE]: [{time: string, icon: string, title: string, desc: string},{time: string, icon: string, title: string, desc: string}], [STAGES.ARCANE_LIBRARY]: [{time: string, icon: string, title: string, desc: string}]}, [DAYS.SATURDAY]: {[STAGES.HEART_OF_THE_KINGDOM]: [{time: string, icon: string, title: string, desc: string},{time: string, icon: string, title: string, desc: string}], [STAGES.BUTTERFLY_GARDEN]: [{time: string, icon: string, title: string, desc: string},{time: string, icon: string, title: string, desc: string}], [STAGES.MOON_GROVE]: [{time: string, icon: string, title: string, desc: string},{time: string, icon: string, title: string, desc: string}], [STAGES.ARCANE_LIBRARY]: [{time: string, icon: string, title: string, desc: string},{time: string, icon: string, title: string, desc: string}]}, [DAYS.SUNDAY]: {[STAGES.HEART_OF_THE_KINGDOM]: [{time: string, icon: string, title: string, desc: string}], [STAGES.BUTTERFLY_GARDEN]: [{time: string, icon: string, title: string, desc: string}], [STAGES.MOON_GROVE]: [{time: string, icon: string, title: string, desc: string},{time: string, icon: string, title: string, desc: string}], [STAGES.ARCANE_LIBRARY]: [{time: string, icon: string, title: string, desc: string}]}}}
 */
const PROGRAM_DATA = {
    [DAYS.FRIDAY]: {
        [STAGES.HEART_OF_THE_KINGDOM]: [],
        [STAGES.BUTTERFLY_GARDEN]: [],
        [STAGES.MOON_GROVE]: [],
        [STAGES.ARCANE_LIBRARY]: []
    },
    [DAYS.SATURDAY]: {
        [STAGES.HEART_OF_THE_KINGDOM]: [],
        [STAGES.BUTTERFLY_GARDEN]: [],
        [STAGES.MOON_GROVE]: [],
        [STAGES.ARCANE_LIBRARY]: []
    },
    [DAYS.SUNDAY]: {
        [STAGES.HEART_OF_THE_KINGDOM]: [],
        [STAGES.BUTTERFLY_GARDEN]: [],
        [STAGES.MOON_GROVE]: [],
        [STAGES.ARCANE_LIBRARY]: []
    }
}

/**
 * @type {[{name: string, role: string, slot: string},{name: string, role: string, slot: string},{name: string, role: string, slot: string},{name: string, role: string, slot: string},{name: string, role: string, slot: string},null]}
 */
const SPECIAL_DJS = [
    {name: 'DJ ???', role: 'Festival-Musik', slot: 'Sa · Heart of the Kingdom', special: true},
    {name: 'DJ ???', role: 'Festival-Musik', slot: 'Sa · Heart of the Kingdom', special: true}
]

/**
 * @type {[{name: string, role: string, slot: string},{name: string, role: string, slot: string},{name: string, role: string, slot: string},{name: string, role: string, slot: string},{name: string, role: string, slot: string},null]}
 */
const DJS = [
    {name: 'DJ ???', role: 'Party-Musik', slot: 'Fr · Heart of the Kingdom'},
    {name: 'DJ ???', role: 'Party-Musik', slot: 'Fr · Heart of the Kingdom'},
    {name: 'DJ ???', role: 'Party-Musik', slot: 'Sa · Butterfly Garden'},
    {name: 'DJ ???', role: 'Party-Musik', slot: 'Sa · Moon Grove'},
    {name: 'DJ ???', role: 'Party-Musik', slot: 'So · Arcane Library'},
    {name: 'DJ ???', role: 'Party-Musik', slot: 'Fr · Butterfly Garden'},
    {name: 'DJ ???', role: 'Party-Musik', slot: 'Sa · Moon Grove'},
    {name: 'DJ ???', role: 'Party-Musik', slot: 'Sa · Moon Grove'},
    {name: 'DJ ???', role: 'Party-Musik', slot: 'So · Arcane Library'}
]

/**
 * @type {[{name: string, role: string, slot: string},{name: string, role: string, slot: string},{name: string, role: string, slot: string}]}
 */
const SPECIAL_LIVE_ACTS = [
    {name: '???', role: 'Mitreißende Hits', slot: 'Sa · Heart of the Kingdom', special: true},
    {name: '???', role: 'Mitreißende Hits', slot: 'Sa · Heart of the Kingdom', special: true}
]

/**
 * @type {[{name: string, role: string, slot: string},{name: string, role: string, slot: string},{name: string, role: string, slot: string}]}
 */
const LIVE_ACTS = [
    {name: '???', role: 'Partylaune!', slot: 'Sa · Butterfly Garden'},
    {name: '???', role: 'Partylaune!', slot: 'So · Moon Grove'},
    {name: '???', role: 'Partylaune!', slot: 'So · Moon Grove'},
    {name: '???', role: 'Partylaune!', slot: 'Fr · Arcane Library'},
    {name: '???', role: 'Partylaune!', slot: 'Sa · Butterfly Garden'},
    {name: '???', role: 'Partylaune!', slot: 'Fr · Arcane Library'},
    {name: '???', role: 'Partylaune!', slot: 'Fr · Arcane Library'},
    {name: '???', role: 'Partylaune!', slot: 'Sa · Butterfly Garden'},
    {name: '???', role: 'Partylaune!', slot: 'So · Moon Grove'}
]

/**
 * @type {[{name: string, role: string},{name: string, role: string},{name: string, role: string},{name: string, role: string}]}
 */
const TEAM_MEMBERS = [
    {name: 'Noah', role: 'Festival-Leitung'},
    {name: 'John', role: 'Live-Acts'},
    {name: 'River', role: 'Live-Acts'},
    {name: 'Maria', role: 'Live-Acts'},
    {name: 'Suzu', role: 'Catering'},
    {name: 'Kalea', role: 'DJs'},
    {name: 'Dexter', role: 'DJs'},
    {name: 'Emilia', role: 'DJs'},
    {name: 'Jessy', role: 'Activities'},
    {name: 'Millie', role: 'Activities'},
    {name: 'Ryu', role: 'Multitalent'}
]

// ---------- nav scroll state ----------
const nav = document.getElementById('siteNav')
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 40))

// ---------- dropdown menus (Festival-Guide / Programm) ----------
document.querySelectorAll('[data-toggle-drop]').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation()
        const item = btn.closest('.nav-item')
        const wasOpen = item.classList.contains('open')
        document.querySelectorAll('.nav-item.open').forEach(i => i.classList.remove('open'))
        if (!wasOpen) item.classList.add('open')
    })
})
document.addEventListener('click', () => {
    document.querySelectorAll('.nav-item.open').forEach(i => i.classList.remove('open'))
})

// ---------- page router (SPA, kein Server nötig) ----------
function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'))
    const target = document.getElementById('page-' + id)
    if (target) {
        target.classList.add('active')
    }
    window.scrollTo({top: 0, behavior: 'auto'})
    const navLinks = document.getElementById('navLinks')
    navLinks.classList.remove('open')
    document.querySelectorAll('.nav-item.open').forEach(i => i.classList.remove('open'))
    document.querySelectorAll('.reveal').forEach(el => io.observe(el))
}

document.querySelectorAll('[data-target]').forEach(el => {
    el.addEventListener('click', () => showPage(el.getAttribute('data-target')))
})

// ---------- stars ----------
const starsEl = document.getElementById('stars')
for (let i = 0; i < 60; i++) {
    const s = document.createElement('div')
    s.className = 'star'
    s.style.left = Math.random() * 100 + '%'
    s.style.top = Math.random() * 55 + '%'
    s.style.animationDelay = (Math.random() * 3.5) + 's'
    starsEl.appendChild(s)
}
// ---------- fireflies ----------
const flyEl = document.getElementById('fireflies')
for (let i = 0; i < 14; i++) {
    const f = document.createElement('div')
    f.className = 'firefly'
    f.style.left = (10 + Math.random() * 80) + '%'
    f.style.top = (40 + Math.random() * 45) + '%'
    f.style.animationDelay = (Math.random() * 9) + 's'
    f.style.animationDuration = (7 + Math.random() * 5) + 's'
    flyEl.appendChild(f)
}

// ---------- scroll reveal ----------
const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
        }
    })
}, {threshold: 0.15})
document.querySelectorAll('.reveal').forEach(el => io.observe(el))

// ---------- FAQ accordion ----------
document.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-q')
    const ans = item.querySelector('.faq-a')
    btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open')
        item.parentElement.querySelectorAll('.faq-item.open').forEach(o => {
            o.classList.remove('open')
            o.querySelector('.faq-a').style.maxHeight = null
        })
        if (!isOpen) {
            item.classList.add('open')
            ans.style.maxHeight = ans.scrollHeight + 'px'
        }
    })
})

// ---------- Timetable ----------
const stageGrid = document.getElementById('stageGrid')

function renderDay(day) {
    let col, items
    stageGrid.innerHTML = ''
    STAGE_NAMES.forEach(stage => {
        col = document.createElement('div')
        col.className = 'stage-col'
        if (PROGRAM_DATA[day].hasOwnProperty(stage) && PROGRAM_DATA[day][stage].length > 0) {
            items = (PROGRAM_DATA[day][stage]).map(item =>
                `<div class="tl-item"><div class="tl-time">${item.time}</div><div class="tl-icon">${item.icon}</div><div class="tl-body"><h4>${item.title}</h4><p>${item.desc}</p></div></div>`
            ).join('')
        } else {
            items = '<p style="color:#a894c4;font-size:.85rem;text-align:center;">Programm folgt</p>'
        }
        col.innerHTML = `<h3>${stage}</h3>${items}`
        stageGrid.appendChild(col)
    })
}

renderDay(DAYS.FRIDAY)

document.querySelectorAll('.day-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.day-tab').forEach(t => t.classList.remove('active'))
        tab.classList.add('active')
        renderDay(tab.dataset.day)
    })
})

// ---------- DJs / Live-Acts / Team Platzhalter-Grids ----------

/**
 * @param {string} id
 * @param {[{name: string, role: string, slot: string, img: string?, special: boolean?}]} items
 * @param {string} type Entweder "dj" oder "live"
 */
function fillGrid(id, items, type) {
    const el = document.getElementById(id)
    if (!el) return

    if (items.length === 0) {
        el.parentElement.parentElement.style.display = 'none';
        return;
    }

    el.innerHTML = items.map(a => {
        let artistImage = a.img ? `<img class='artistImage' src='/everland/assets/img/${type}/${a.img}.gif'>` : `<img class='artistImage' src='/everland/assets/img/artistPlaceholder.gif'>`
        let borderImage = a.special ? `<img class="artistBorder" src="/everland/assets/img/artist_border_special.png">` : `<img class="artistBorder" src="/everland/assets/img/artist_border.png">`

        return `
    <div class="artist-card reveal in">
        <div class="artist-photo">
            ${artistImage}
            ${borderImage}
        </div>
      <h4>${a.name}</h4>
      <div class="role">${a.role}</div>
      <div class="slot">${a.slot || ''}</div>
    </div>`
    }).join('')
}

fillGrid('djSpecialGrid', SPECIAL_DJS, 'dj')
fillGrid('djGrid', DJS, 'dj')
fillGrid('liveSpecialGrid', SPECIAL_LIVE_ACTS, 'live')
fillGrid('liveGrid', LIVE_ACTS, 'live')

const teamGridEl = document.getElementById('teamGrid')
if (teamGridEl) {
    if (TEAM_MEMBERS.length === 0) {
        teamGridEl.parentElement.parentElement.style.display = 'none';
    } else {
        teamGridEl.innerHTML = TEAM_MEMBERS.map(t => `
    <div class="team-card reveal in">
      <div class="team-photo">🧑‍🎤</div>
      <h4>${t.name}</h4>
      <div class="role">${t.role}</div>
    </div>`).join('')
    }
}