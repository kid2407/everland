document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('dragstart', e => e.preventDefault());

// ---------- nav scroll state ----------
const nav = document.getElementById('siteNav');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 40));

// ---------- mobile nav toggle ----------
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
});

// ---------- dropdown menus (Festival-Guide / Programm) ----------
document.querySelectorAll('[data-toggle-drop]').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const item = btn.closest('.nav-item');
        const wasOpen = item.classList.contains('open');
        document.querySelectorAll('.nav-item.open').forEach(i => i.classList.remove('open'));
        if (!wasOpen) item.classList.add('open');
    });
});
document.addEventListener('click', () => {
    document.querySelectorAll('.nav-item.open').forEach(i => i.classList.remove('open'));
});

// ---------- page router (SPA, kein Server nötig) ----------
function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const target = document.getElementById('page-' + id);
    if (target) {
        target.classList.add('active');
    }
    window.scrollTo({top: 0, behavior: 'auto'});
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', false);
    document.querySelectorAll('.nav-item.open').forEach(i => i.classList.remove('open'));
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

document.querySelectorAll('[data-target]').forEach(el => {
    el.addEventListener('click', () => showPage(el.getAttribute('data-target')));
});

// ---------- stars ----------
const starsEl = document.getElementById('stars');
for (let i = 0; i < 60; i++) {
    const s = document.createElement('div');
    s.className = 'star';
    s.style.left = Math.random() * 100 + '%';
    s.style.top = Math.random() * 55 + '%';
    s.style.animationDelay = (Math.random() * 3.5) + 's';
    starsEl.appendChild(s);
}
// ---------- fireflies ----------
const flyEl = document.getElementById('fireflies');
for (let i = 0; i < 14; i++) {
    const f = document.createElement('div');
    f.className = 'firefly';
    f.style.left = (10 + Math.random() * 80) + '%';
    f.style.top = (40 + Math.random() * 45) + '%';
    f.style.animationDelay = (Math.random() * 9) + 's';
    f.style.animationDuration = (7 + Math.random() * 5) + 's';
    flyEl.appendChild(f);
}

// ---------- scroll reveal ----------
const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
        }
    });
}, {threshold: 0.15});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// ---------- FAQ accordion ----------
document.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-q');
    const ans = item.querySelector('.faq-a');
    btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        item.parentElement.querySelectorAll('.faq-item.open').forEach(o => {
            o.classList.remove('open');
            o.querySelector('.faq-a').style.maxHeight = null;
        });
        if (!isOpen) {
            item.classList.add('open');
            ans.style.maxHeight = ans.scrollHeight + 'px';
        }
    });
});

// ---------- Timetable ----------
// TODO: Platzhalter-Programm durch echtes Line-up ersetzen.
// Struktur: pro Tag 4 Bühnen, pro Bühne eine Liste an Slots.
const stageNames = ['Hauptbühne', 'Marktplatz-Bühne', 'Strandbühne', 'Chill-Area'];
const programData = {
    fr: {
        'Hauptbühne': [
            {time: '20:00', icon: '🎧', title: 'Opening Set', desc: 'Der erste DJ-Set eröffnet den Abend.'},
            {time: '23:00', icon: '🔥', title: 'Feuershow', desc: 'Licht- und Feuerinszenierung.'}
        ],
        'Wald-Bühne': [
            {time: '19:00', icon: '🎤', title: 'Akustik-Set', desc: 'Ruhiger Einstieg in den Freitagabend.'},
            {time: '22:00', icon: '🎶', title: 'Live-Band', desc: 'Erste Live-Performance des Wochenendes.'}
        ],
        '3. Bühne': [
            {time: '18:00', icon: '⛴️', title: 'Einlass & Ankunft', desc: 'Die Boote legen ab — willkommen auf Everland.'},
            {time: '21:00', icon: '🎧', title: 'Sunset Set', desc: 'DJ-Set zum Sonnenuntergang am Strand.'}
        ],
        'Camping-Stage': [
            {time: '20:30', icon: '🌙', title: 'Lounge Session', desc: 'Entspannte Klänge abseits der Hauptbühnen.'}
        ]
    },
    sa: {
        'Hauptbühne': [
            {time: '19:00', icon: '🎤', title: 'Live-Act', desc: 'Der erste Live-Act des Tages.'},
            {time: '23:30', icon: '🎧', title: 'Headliner-Set', desc: 'Musikalischer Höhepunkt des zweiten Tages.'}
        ],
        'Wald-Bühne': [
            {time: '14:00', icon: '🧵', title: 'Workshop-Bühne', desc: 'Kreative Programmpunkte tagsüber.'},
            {time: '21:00', icon: '🎶', title: 'Live-Band', desc: 'Zweiter Live-Act des Wochenendes.'}
        ],
        '3. Bühne': [
            {time: '12:00', icon: '🛶', title: 'Bootstour', desc: 'Geführte Tour für Frühaufsteher.'},
            {time: '20:00', icon: '🎧', title: 'Sunset Set', desc: 'DJ-Set am Strand.'}
        ],
        'Camping-Stage': [
            {time: '16:00', icon: '🌿', title: 'Klangschalen-Session', desc: 'Ruhiger Programmpunkt am Nachmittag.'},
            {time: '22:30', icon: '🌙', title: 'Late-Night Lounge', desc: 'Entspannter Ausklang in die Nacht.'}
        ]
    },
    so: {
        'Hauptbühne': [
            {time: '17:00', icon: '🎶', title: 'Abschiedskonzert', desc: 'Letztes gemeinsames Set zum Ausklang.'}
        ],
        'Wald-Bühne': [
            {time: '13:00', icon: '🧵', title: 'Abschluss-Workshops', desc: 'Letzte Möglichkeit für kreative Programmpunkte.'}
        ],
        '3. Bühne': [
            {time: '12:00', icon: '🛶', title: 'Abschieds-Bootstour', desc: 'Letzte Fahrt um die Insel.'},
            {time: '20:00', icon: '⛴️', title: 'Abreise per Fähre', desc: 'Bis nächstes Jahr, Everland!'}
        ],
        'Camping-Stage': [
            {time: '14:00', icon: '🌙', title: 'Ausklang-Lounge', desc: 'Ruhiger Rückzugsort zum Tagesausklang.'}
        ]
    }
};
const stageGrid = document.getElementById('stageGrid');

function renderDay(day) {
    stageGrid.innerHTML = '';
    stageNames.forEach(stage => {
        const col = document.createElement('div');
        col.className = 'stage-col';
        const items = (programData[day][stage] || []).map(item =>
            `<div class="tl-item"><div class="tl-time">${item.time}</div><div class="tl-icon">${item.icon}</div><div class="tl-body"><h4>${item.title}</h4><p>${item.desc}</p></div></div>`
        ).join('') || '<p style="color:#a894c4;font-size:.85rem;text-align:center;">Programm folgt</p>';
        col.innerHTML = `<h3>${stage}</h3>${items}`;
        stageGrid.appendChild(col);
    });
}

renderDay('fr');
document.querySelectorAll('.day-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.day-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        renderDay(tab.dataset.day);
    });
});

// ---------- DJs / Live-Acts / Team Platzhalter-Grids ----------
// TODO: Platzhalter durch echte Namen, Fotos & Rollen ersetzen.
const djs = [
    {name: 'DJ Nova', role: 'House / Techno', slot: 'Fr · Hauptbühne'},
    {name: 'DJ Solace', role: 'Melodic Techno', slot: 'Sa · Hauptbühne'},
    {name: 'DJ Lumen', role: 'Trance', slot: 'Sa · Chill-Area'},
    {name: 'DJ Vale', role: 'Deep House', slot: 'So · Hauptbühne'},
    {name: 'DJ Ember', role: 'Drum & Bass', slot: 'Fr · Marktplatz'},
    {name: 'DJ Rift', role: 'Progressive', slot: 'Sa · Hauptbühne'}
];
const liveActs = [
    {name: 'The Wandering Echoes', role: 'Indie / Folk', slot: 'Fr · Hauptbühne'},
    {name: 'Solstice', role: 'Electro-Pop', slot: 'Sa · Hauptbühne'},
    {name: 'Nightbloom', role: 'Live-Band', slot: 'So · Hauptbühne'}
];
const team = [
    {name: 'Festivalleitung', role: 'Organisation'},
    {name: 'Programm-Team', role: 'Booking & Line-up'},
    {name: 'Presse & Venture', role: 'Kommunikation'},
    {name: 'Sicherheit', role: 'Vor Ort-Team'}
];

function fillGrid(id, items, icon) {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = items.map(a => `
    <div class="artist-card reveal in">
      <div class="artist-photo">${icon}</div>
      <h4>${a.name}</h4>
      <div class="role">${a.role}</div>
      <div class="slot">${a.slot || ''}</div>
    </div>`).join('');
}

fillGrid('djGrid', djs, '🎧');
fillGrid('liveGrid', liveActs, '🎤');
const teamGridEl = document.getElementById('teamGrid');
if (teamGridEl) {
    teamGridEl.innerHTML = team.map(t => `
    <div class="team-card reveal in">
      <div class="team-photo">🧑‍🎤</div>
      <h4>${t.name}</h4>
      <div class="role">${t.role}</div>
    </div>`).join('');
}