const STAGES = {
    HEART_OF_THE_KINGDOM: 'Heart of the Kingdom',
    BUTTERFLY_GARDEN:     'Butterfly Garden',
    MOON_GROVE:           'Moon Grove',
    ARCANE_LIBRARY:       'Arcane Library',
    ACTIVITY_STAGE:       'Activity Stage',
    EVERLAND_GROUND:      'Everland Gelände'
}

const DAYS = {
    FRIDAY:   "Freitag",
    SATURDAY: "Samstag",
    SUNDAY:   "Sonntag"
}

const ARTIST_STAGE_NAMES   = [STAGES.HEART_OF_THE_KINGDOM, STAGES.ARCANE_LIBRARY, STAGES.MOON_GROVE, STAGES.BUTTERFLY_GARDEN]
const ACTIVITY_STAGE_NAMES = [STAGES.ACTIVITY_STAGE, STAGES.EVERLAND_GROUND]

const ICONS_FOR_TIMETABLE = {
    "dj":             "🎧",
    "live":           "🎤",
    "werewolves":     "🐺",
    "drawing":        "🎨",
    "yoga":           "🧘",
    "dancing":        "🕺",
    "outfit-contest": "🏆",
    "dream":          "💭",
    "boxing":         "🥊",
    "cards":          "🎴",
    "black-stories":  "📓",
    "sports":         "⛹",
    "witch":          "🪄",
    "water":          "🤽"
}

/**
 * @type {{
 * [DAYS.FRIDAY]: {
 *  [STAGES.HEART_OF_THE_KINGDOM]: {time: string, type: string, name: string, genre: string}[],
 *  [STAGES.BUTTERFLY_GARDEN]: {time: string, type: string, name: string, genre: string}[],
 *  [STAGES.MOON_GROVE]: {time: string, type: string, name: string, genre: string}[],
 *  [STAGES.ARCANE_LIBRARY]: {time: string, type: string, name: string, genre: string}[]
 *  [STAGES.ACTIVITY_STAGE]: {time: string, type: string, name: string, genre: string}[]
 *  [STAGES.EVERLAND_GROUND]: {time: string, type: string, name: string, genre: string}[]
 * },
 * [DAYS.SATURDAY]: {
 *  [STAGES.HEART_OF_THE_KINGDOM]: {time: string, type: string, name: string, genre: string}[],
 *  [STAGES.BUTTERFLY_GARDEN]: {time: string, type: string, name: string, genre: string}[],
 *  [STAGES.MOON_GROVE]: {time: string, type: string, name: string, genre: string}[],
 *  [STAGES.ARCANE_LIBRARY]: {time: string, type: string, name: string, genre: string}[]
 *  [STAGES.ACTIVITY_STAGE]: {time: string, type: string, name: string, genre: string}[]
 *  [STAGES.EVERLAND_GROUND]: {time: string, type: string, name: string, genre: string}[]
 * },
 * [DAYS.SUNDAY]: {
 *  [STAGES.HEART_OF_THE_KINGDOM]: {time: string, type: string, name: string, genre: string}[],
 *  [STAGES.BUTTERFLY_GARDEN]: {time: string, type: string, name: string, genre: string}[],
 *  [STAGES.MOON_GROVE]: {time: string, type: string, name: string, genre: string}[],
 *  [STAGES.ARCANE_LIBRARY]: {time: string, type: string, name: string, genre: string}[]
 *  [STAGES.ACTIVITY_STAGE]: {time: string, type: string, name: string, genre: string}[]
 *  [STAGES.EVERLAND_GROUND]: {time: string, type: string, name: string, genre: string}[]
 * }
 * }}
 */
const PROGRAM_DATA = {
    [DAYS.FRIDAY]:   {
        [STAGES.HEART_OF_THE_KINGDOM]: [
            {time: "16:30", type: "dj", name: "DJ Street", genre: "Handsup"},
            {time: "18:30", type: "dj", name: "SetteSensi", genre: "Techno"},
            {time: "20:00", type: "dj", name: "Sonic Pain", genre: "Hardstyle / Hardtechno"},
            {time: "21:00", type: "dj", name: "Vexx", genre: "Techno / Schranz"},
            {time: "22:30", type: "dj", name: "???", genre: "Techno"}
        ],
        [STAGES.ARCANE_LIBRARY]:       [
            {time: "19:00", type: "live", name: "Xavi", genre: "Latin"},
            {time: "19:30", type: "live", name: "Chloe", genre: "Balladen"},
            {time: "20:00", type: "live", name: "HUSH", genre: "Hardrock, Metal"},
            {time: "20:30", type: "live", name: "Silenzio", genre: "Klavier, ruhig bis schneller"},
            {time: "21:30", type: "live", name: "G!ANN!", genre: "Rap, Pop"},
            {time: "22:00", type: "live", name: "KIKI", genre: "J-Pop, JazzPop"},
            {time: "23:00", type: "live", name: "Auntie Whitney", genre: "Jazz, Soul"},
            {time: "23:30", type: "live", name: "ONLY K.O.", genre: "HipHop, Boom Bap, Oldschool Beats"}
        ],
        [STAGES.MOON_GROVE]:           [
            {time: "17:00", type: "dj", name: "Kaayaal", genre: "Heutige Hits (Club Mix)"},
            {time: "18:00", type: "dj", name: "Zoria", genre: "80er - 2000er"},
            {time: "19:30", type: "dj", name: "Oceana", genre: "House & 2010er Remixe"},
            {time: "21:00", type: "dj", name: "Ardent Luna", genre: "EDM"},
            {time: "22:00", type: "dj", name: "Aura Nights", genre: "House"},
            {time: "23:00", type: "dj", name: "Sync´d Souls", genre: "House"}
        ],
        [STAGES.BUTTERFLY_GARDEN]:     [
            {time: "17:30", type: "dj", name: "DJ Jar", genre: "J-Pop"},
            {time: "19:00", type: "dj", name: "DJ Obscura", genre: "???"},
            {time: "20:30", type: "dj", name: "Bohne Frei", genre: "Rock / Metal"},
            {time: "22:00", type: "dj", name: "Emotional Damage", genre: "Punkrock"}
        ],
        [STAGES.ACTIVITY_STAGE]:       [
            {time: "23:30 - 00:30", type: "werewolves", name: "Werwölfe", genre: "Wem kannst du wirklich vertrauen?"}
        ],
        [STAGES.EVERLAND_GROUND]:      [
            {time: "21:30 - 22:30", type: "drawing", name: "Star Brush", genre: "Zeichenplatz | Lass dich oder deine liebsten Zeichnen"}
        ]
    },
    [DAYS.SATURDAY]: {
        [STAGES.HEART_OF_THE_KINGDOM]: [
            {time: "00:00", type: "dj", name: "NLYNX", genre: "Epische Festival-Klänge"},
            {time: "01:00", type: "dj", name: "Triple T.", genre: "Techno"},
            {time: "02:00", type: "dj", name: "DJ N-Tec", genre: "Techno"},
            {time: "03:00", type: "dj", name: "DJ Xavi", genre: "Techno / Hardstyle"},
            {time: "14:30", type: "dj", name: "DJ Orochi", genre: "Bounce / Mashups"},
            {time: "16:30", type: "dj", name: "Djane Moonlight", genre: "Techno"},
            {time: "18:00", type: "dj", name: "Ardent Luna", genre: "Techno"},
            {time: "19:00", type: "dj", name: "DJ Aura Nights", genre: "Techno"},
            {time: "21:00", type: "dj", name: "DJ Zoria", genre: "BigRoom"},
            {time: "23:00", type: "dj", name: "Skully n Bone", genre: "Hardtechno"}
        ],
        [STAGES.ARCANE_LIBRARY]:       [
            {time: "12:00", type: "live", name: "Fehnfieber", genre: "Piano"},
            {time: "14:00", type: "live", name: "Der weiße Drache", genre: "Lustige Musik"},
            {time: "14:30", type: "live", name: "Jarvis", genre: "Rap"},
            {time: "15:00", type: "live", name: "Millie", genre: "Soul"},
            {time: "16:00", type: "live", name: "C7CTUS", genre: "Rap / Trap / R&B"},
            {time: "16:30", type: "live", name: "Chay Latte", genre: "Gesang / Pop"},
            {time: "17:00", type: "live", name: "Blanche", genre: "Pop, Folk"},
            {time: "18:00", type: "live", name: "Dave P", genre: "Rap, Pop"},
            {time: "18:30", type: "live", name: "Keira Maguire", genre: "Pop, Folk"},
            {time: "19:00", type: "live", name: "TheRealRJ", genre: "Rap / HipHop / Pop"},
            {time: "20:00", type: "live", name: "JUMO", genre: "Geschichten mit der Gitarre"},
            {time: "20:30", type: "live", name: "aMillie", genre: "Rock, Pop, Indie, Soul, R&B"},
            {time: "21:00", type: "live", name: "C0LT", genre: "Rap"},
            {time: "22:00", type: "live", name: "Loraine Dunnaham", genre: "Soul-Pop, Jazz & Dark Blues"},
            {time: "22:30", type: "live", name: "Ruby McMahon", genre: "???"},
            {time: "23:00", type: "live", name: "Tatsuya", genre: "Metalcore / Nu Metal"}
        ],
        [STAGES.MOON_GROVE]:           [
            {time: "00:00", type: "dj", name: "Sync´d Souls", genre: "House"},
            {time: "01:00", type: "dj", name: "Db", genre: "House"},
            {time: "14:00", type: "dj", name: "Open DJ-Pult", genre: "Unendliche Möglichkeiten"},
            {time: "15:00", type: "dj", name: "DJ Kayaal", genre: "80er - 2000er"},
            {time: "16:00", type: "dj", name: "Sonic Pain", genre: "Workout-Mix"},
            {time: "17:30", type: "dj", name: "Vexx", genre: "Trance / Psytrance"},
            {time: "18:30", type: "dj", name: "Obscura", genre: "???"},
            {time: "19:30", type: "dj", name: "SetteSensi", genre: "House"},
            {time: "20:30", type: "dj", name: "???", genre: "EDM"},
            {time: "21:30", type: "dj", name: "Triple T", genre: "Dance-Pop"},
            {time: "23:00", type: "dj", name: "DJ Street", genre: "80er-2000er"}
        ],
        [STAGES.BUTTERFLY_GARDEN]:     [
            {time: "00:00", type: "dj", name: "Emotional Damage", genre: "Punkrock"},
            {time: "00:30", type: "dj", name: "Black Tiger", genre: "80s-90s"},
            {time: "14:30", type: "dj", name: "DJ Street", genre: "???"},
            {time: "16:00", type: "dj", name: "Bohne Frei", genre: "Chill / Club House"},
            {time: "17:30", type: "dj", name: "Zoria", genre: "???"},
            {time: "18:30", type: "dj", name: "Oceana", genre: "Epic"},
            {time: "19:30", type: "dj", name: "DJ Xavi", genre: "Latin"},
            {time: "20:30", type: "dj", name: "Mo", genre: "HipHop"},
            {time: "22:00", type: "dj", name: "Hari", genre: "Metal"}
        ],
        [STAGES.ACTIVITY_STAGE]:       [
            {time: "12:00 - 13:00", type: "yoga", name: "Yoga", genre: "Entspannung im Festival-Alltag"},
            {time: "14:00 - 15:00", type: "dancing", name: "Paartänze", genre: "Wie tanzt man eigentlich richtig gemeinsam?"},
            {time: "15:00 - 17:00", type: "outfit-contest", name: "Outfit-Wettbewerb", genre: "Das beste, wildeste oder praktischste Festival-Outfit? All das gibt es hier"},
            {time: "17:00 - 18:00", type: "dream", name: "Traumreisen", genre: "Abschalten, aktiv und geleitet den Geist treiben lassen"},
            {time: "19:00 - 20:00", type: "dancing", name: "Poledance", genre: "Normales Tanzen ist euch zu langweilig? Dann kommt vorbei"}
        ],
        [STAGES.EVERLAND_GROUND]:      [
            {time: "12:00 - 13:00", type: "sports", name: "Butterfly Garden | Enchanted Workout", genre: "Fit sein ist wichtig!"},
            {time: "13:00 - 14:00", type: "water", name: "Aquafitness", genre: "See | Fitness und kühles Nass in einem? Was will man mehr?"},
            {time: "14:00 - 16:00", type: "witch", name: "Schnitzeljagd", genre: "Mit der Herbal Witchery. Was man dabei wohl so findet?"},
            {time: "17:00 - 18:00", type: "boxing", name: "Boxen", genre: "Boxring | Sich (geordnet) abreagieren und dabei noch Sport machen? Ab zum Boxen!"},
            {time: "17:00 - 19:00", type: "drawing", name: "Pastelpeach", genre: "Zeichenplatz | Lass dich oder deine liebsten Zeichnen"},
            {time: "18:00 - 20:00", type: "cards", name: "Midnight Witch", genre: "Die Karten erzählen viele Dinge&hellip;"},
            {time: "19:00 - 20:00", type: "witch", name: "Schnitzeljagd", genre: "Mit der Herbal Witchery. Was man dabei wohl so findet?"},
            {time: "20:00 - 21:00", type: "black-stories", name: "Black Stories", genre: "Ein Ball rollt um die Ecke und fällt um - warum?"},
            {time: "21:30 - 22:30", type: "drawing", name: "Star Brush", genre: "Zeichenplatz | Lass dich oder deine liebsten Zeichnen"},
            {time: "23:00 - 01:00", type: "drawing", name: "Kiu", genre: "Zeichenplatz | Lass dich oder deine liebsten Zeichnen"}
        ]
    },

    [DAYS.SUNDAY]: {
        [STAGES.HEART_OF_THE_KINGDOM]: [
            {time: "00:00", type: "dj", name: "Saijin", genre: "Schranz / Melodic"},
            {time: "01:30", type: "dj", name: "Vanilla", genre: "Hardtechno / Industrialtechno"},
            {time: "03:00", type: "dj", name: "Oceana", genre: "Techno / Elektro"},
            {time: "11:00", type: "dj", name: "Open DJ-Pult", genre: "Unendliche Möglichkeiten"},
            {time: "12:00", type: "dj", name: "DJ Moonlight", genre: "Latin"},
            {time: "13:30", type: "dj", name: "Großes Finale", genre: "Everland: A World Beyond"}
        ],
        [STAGES.ARCANE_LIBRARY]:       [
            {time: "00:00", type: "live", name: "Jarvis", genre: "Rap"},
            {time: "00:30", type: "live", name: "404UNK & Friends", genre: "Rap"}
        ],
        [STAGES.MOON_GROVE]:           [
            {time: "00:00", type: "dj", name: "DJ Street", genre: "80er-2000er"},
            {time: "00:30", type: "dj", name: "DJ JAR", genre: "Mainstream-Pop"}
        ],
        [STAGES.BUTTERFLY_GARDEN]:     [
            {time: "00:00", type: "dj", name: "N-Tec", genre: "House"}
        ],
        [STAGES.ACTIVITY_STAGE]:       [
            {time: "00:00 - 23:59", type: "activity", name: "Stille", genre: "Auf dieser Bühne ist es zwar ruhig, aber das Festival ist noch nicht vorbei&hellip;"},
        ],
        [STAGES.EVERLAND_GROUND]:      [
            {time: "11:00 - 12:00", type: "witch", name: "Schnitzeljagd", genre: "Mit der Herbal Witchery. Was man dabei wohl so findet?"},
            {time: "13:00 - 14:00", type: "water", name: "Aquafitness", genre: "See | Fitness und kühles Nass in einem? Was will man mehr?"}
        ]
    }
}


/**
 * @type {{name: string, genre: string, slot: string, img: string?, special: boolean?}[]}
 */
const SPECIAL_DJS = [
    {name: 'NLYNX', genre: 'Epische Festival-Klänge', slot: 'Sa · Heart of the Kingdom', img: 'NLYNX', special: true},
    {name: 'SAIJIN', genre: 'Schranz / Melodic', slot: 'So · Heart of the Kingdom', img: 'SAIJIN', special: true}
]

/**
 * @type {{name: string, genre: string, slot: string, img: string?, special: boolean?}[]}
 */
const DJS = [
    {name: 'Sonic Pain', genre: 'Hardstyle / Hardtechno | Workout-Mix', slot: 'Fr · Heart of the Kingdom | Sa · Moon Grove', img: 'PAIN'},
    {name: 'MO', genre: 'HipHop', slot: 'Sa · Butterfly Garden', img: 'Mo'},
    {name: 'DJ Xavi', genre: 'Techno/Hardstyle | Latin', slot: 'Sa · Heart of the Kingdom | Sa · Butterfly Garden'},
    {name: 'DJ Aura Nights', genre: 'House | Techno', slot: 'Fr · Moon Grove | Sa · Heart of the Kingdom', img: 'Aura_Nights'},
    {name: 'Sync´d Souls', genre: 'House', slot: 'Fr · Moon Grove', img: 'Syncd_Souls'},
    {name: 'Skully n Bone', genre: 'Hardtechno', slot: 'Sa · Heart of the Kingdom', img: 'Skully_n_Bone'},
    {name: '???', genre: 'Techno | EDM', slot: 'Fr · Heart of the Kingdom | Sa · Moon Grove', img: 'Mouse'},
    {name: 'DJ Obscura', genre: '???', slot: 'Fr · Butterfly Garden | Sa · Moon Grove', img: 'Obscura'},
    {name: 'Djane Moonlight', genre: 'Techno | Latin', slot: 'Sa · Heart of the Kingdom | So · Heart of the Kingdom', img: 'Moonlight'},
    {name: 'Ardent Luna', genre: 'EDM | Techno', slot: 'Fr · Moon Grove | Sa · Heart of the Kingdom'},
    {name: 'Emotional Damage', genre: 'Punkrock | 2000er', slot: 'Fr · Butterfly Garden', img: 'Emotional_Damage'},
    {name: 'Vexx', genre: 'Techno/Schranz | Trance/Psytrance', slot: 'Fr · Heart of the Kingdom | Sa · Moon Grove', img: 'VEXX'},
    {name: 'DJ N-Tec', genre: 'Techno | House', slot: 'Sa · Heart of the Kingdom | So · Butterfly Garden', img: 'NTEC'},
    {name: 'DJ Zoria', genre: '80er - 2000er | ??? | BigRoom', slot: 'Fr · Moon Grove | Sa · Butterfly Garden | Sa · Heart of the Kingdom', img: 'Zoria'},
    {name: 'DJ JAR', genre: 'J-Pop | Mainstream-Pop', slot: 'Fr · Butterfly Garden | So · Moon Grove', img: 'JAR'},
    {name: 'Vanilla', genre: 'Hard-/Industrialtechno', slot: 'So · Heart of the Kingdom', img: 'Vanilla'},
    {name: 'SetteSensi', genre: 'Techno | House', slot: 'Fr · Heart of the Kingdom | Sa · Moon Grove', img: 'SetteSensi'},
    {name: 'DJ Street', genre: 'Handsup | ??? | 80er-2000er', slot: 'Fr · Heart of the Kingdom | Sa · Butterfly Garden | Sa · Moon Grove', img: 'Street'},
    {name: 'Triple T.', genre: 'Techno | Dance-Pop', slot: 'Sa · Heart of the Kingdom | Sa · Moon Grove', img: 'Triple_T'},
    {name: 'DJ Black Tiger', genre: '80s-90s | Mittelalterrock', slot: 'Sa · Butterfly Garden', img: 'BlackTiger'},
    {name: 'Bohne Frei', genre: 'Rock/Metal | Chill/Club House', slot: 'Fr · Butterfly Garden | Sa · Butterfly Garden', img: 'Boenefrei'},
    {name: 'DJ Hari', genre: 'Metal', slot: 'Sa · Butterfly Garden'},
    {name: 'DJ Orochi', genre: 'Bounce/Mashups', slot: 'Sa · Heart of the Kingdom', img: 'Orochi'},
    {name: 'DJ dB', genre: 'House', slot: 'Sa · Moon Grove'},
    {name: 'DJ Kaayaal', genre: 'Heutige Hits (Club Mix) | 80er - 2000er', slot: 'Fr · Moon Grove | Sa · Moon Grove', img: 'Kim_Kayaal'},
    {name: 'DJ Oceana', genre: 'House + 2010er Remixe | Epic | Techno/Elektro', slot: 'Fr · Moon Grove | Sa · Butterfly Garden | So · Heart of the Kingdom', img: 'Oceana'}
]

/**
 * @type {{name: string, genre: string, slot: string, img: string?, special: boolean?}[]}
 */
const SPECIAL_LIVE_ACTS = [
    {name: 'Loraine Dunnaham', genre: 'Soul-Pop, Jazz & Dark Blues', slot: 'Sa · Arcane Library', img: 'Loraine_Dunnaham', special: true},
    {name: 'TheRealRJ', genre: 'Rap / HipHop / Pop', slot: 'Sa · Arcane Library', img: 'TheRealRJ', special: true}
]

/**
 * @type {{name: string, genre: string, slot: string, img: string?, special: boolean?}[]}
 */
const LIVE_ACTS = [
    {name: 'Millie', genre: 'Soul', slot: 'Sa · Arcane Library', img: 'Millie_Kennedy'},
    {name: 'Keira Maguire', genre: 'Pop, Folk', slot: 'Sa · Arcane Library', img: 'Keira_Maguire'},
    {name: 'HUSH', genre: 'Hardrock, Metal', slot: 'Fr · Arcane Library', img: 'Hush'},
    {name: 'Silenzio', genre: 'Klavier', slot: 'Fr · Arcane Library'},
    {name: 'G!ANN!', genre: 'Rap, Pop', slot: 'Fr · Arcane Library'},
    {name: 'Chloe', genre: 'Balladen', slot: 'Fr · Arcane Library', img: 'Chloe'},
    {name: 'Ruby McMahon', genre: '???', slot: 'Sa · Arcane Library'},
    {name: 'Fehnfieber', genre: 'Piano', slot: 'Sa · Arcane Library', img: 'Fehnfieber'},
    {name: 'C0LT', genre: 'Rap', slot: 'Sa · Arcane Library', img: 'COLT'},
    {name: 'Clip9', genre: 'Rap', slot: 'Sa · Arcane Library'},
    {name: 'Jarvis', genre: 'Rap', slot: 'Sa · Arcane Library | So · Arcane Library', img: 'Jarvis'},
    {name: 'C7CTUS', genre: 'Rap / Trap / R&B', slot: 'Sa · Arcane Library', img: 'C7ctus'},
    {name: '404UNK & Friends', genre: 'Rap', slot: 'Sa · Arcane Library | So · Arcane Library'},
    {name: 'Chay Latte', genre: 'Pop', slot: 'Sa · Arcane Library', img: 'Chay_Latte'},
    {name: 'JUMO', genre: 'Geschichten mit der Gitarre', slot: 'Sa · Arcane Library'},
    {name: 'Tatsuya', genre: 'Metalcore / Nu Metal', slot: 'Sa · Arcane Library', img: 'Tatsuya'},
    {name: 'OTP Bando', genre: 'HipHop / RNB / Trap', slot: 'Sa · Arcane Library', img: 'OTP_Bando'},
    {name: 'OTP Damage', genre: 'HipHop / RNB / Trap', slot: 'Sa · Arcane Library', img: 'OTP_Damage'},
    {name: 'OTP Greedy', genre: 'HipHop / RNB / Trap', slot: 'Sa · Arcane Library', img: 'OTP_Greedy'},
    {name: 'OTP Stunna', genre: 'HipHop / RNB / Trap', slot: 'Sa · Arcane Library', img: 'OTP_Stunna'},
    {name: 'Auntie Whitney', genre: 'Jazz / Soul', slot: 'Fr · Arcane Library', img: 'Auntie_Whitney'},
    {name: 'The Sisters', genre: 'Jazz / Soul', slot: 'Fr · Arcane Library', img: 'The_Sisters'},
    {name: 'ONLY K.O.', genre: 'HipHop / Boom Bap / Oldschool Beats', slot: 'Fr · Arcane Library', img: 'Only_KO'},
    {name: 'Jane Doe', genre: 'Darkpop, Acoustic', slot: 'Sa · Arcane Library', img: 'Jane_Doe'},
    {name: 'Blanche', genre: 'Pop, Folk', slot: 'Sa · Arcane Library', img: 'Blanche'},
    {name: 'Dave P', genre: 'Rap, Pop', slot: 'Sa · Arcane Library'},
    {name: 'aMillie', genre: 'Rock, Pop, Indie, Soul, R&B', slot: 'Sa · Arcane Library'},
    {name: 'Xavi', genre: 'Latin', slot: 'Fr · Arcane Library'}
]

/**
 * @type {{"Festival-Leitung": [{name: string, image: boolean},{name: string, image: boolean}], Bauplaner: [{name: string, image: boolean},{name: string, image: boolean},{name: string, image: boolean},{name: string, image: boolean},{name: string, image: boolean}], "Security & Beh&ouml;rden": [{name: string, image: boolean},{name: string, image: boolean},{name: string, image: boolean}], DJs: [{name: string, image: boolean},{name: string, image: boolean},{name: string, image: boolean}], "Live-Acts": [{name: string, image: boolean},{name: string, image: boolean},{name: string, image: boolean}], Catering: [{name: string, image: boolean}], Activities: [{name: string, image: boolean},{name: string, image: boolean}], Multitalente: [{name: string, image: boolean},{name: string, image: boolean}]}}
 */
const TEAM_MEMBERS = {
    "Festival-Leitung":         [
        {"name": "Noah", "image": true},
        {"name": "Jessy", "image": true}
    ],
    "Bauplaner":                [
        {"name": "Noah", "image": true},
        {"name": "Ryu", "image": true},
        {"name": "Alice", "image": true},
        {"name": "Lutzi", "image": true},
        {"name": "Kalea", "image": true}
    ],
    "Security & Beh&ouml;rden": [
        {"name": "Chloe", "image": true},
        {"name": "Lutzi", "image": true},
        {"name": "Cooper", "image": true}
    ],
    "DJs":                      [
        {"name": "Kalea", "image": true},
        {"name": "Dexter", "image": true},
        {"name": "Emilia", "image": true}
    ],
    "Live-Acts":                [
        {"name": "John", "image": true},
        {"name": "River", "image": true},
        {"name": "Maria", "image": false}
    ],
    "Catering":                 [
        {"name": "Suzune", "image": true}
    ],
    "Activities":               [
        {"name": "Jessy", "image": true},
        {"name": "Millie", "image": true}
    ],
    "Multitalente":             [
        {"name": "Ryu", "image": true}
    ],
}

// ---------- nav scroll state ----------
const nav = document.getElementById('siteNav')
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 40))

// ---------- dropdown menus (Festival-Guide / Programm) ----------
document.querySelectorAll('[data-toggle-drop]').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation()
        const item    = btn.closest('.nav-item')
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
    const s                = document.createElement('div')
    s.className            = 'star'
    s.style.left           = Math.random() * 100 + '%'
    s.style.top            = Math.random() * 55 + '%'
    s.style.animationDelay = (Math.random() * 3.5) + 's'
    starsEl.appendChild(s)
}
// ---------- fireflies ----------
const flyEl = document.getElementById('fireflies')
for (let i = 0; i < 14; i++) {
    const f                   = document.createElement('div')
    f.className               = 'firefly'
    f.style.left              = (10 + Math.random() * 80) + '%'
    f.style.top               = (40 + Math.random() * 45) + '%'
    f.style.animationDelay    = (Math.random() * 9) + 's'
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
    },
    {threshold: 0.15})
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
/**
 * @param {string} day
 * @param {HTMLElement} timetableGrid
 * @param {string[]} stages
 */
function renderDayForTimetable(day, timetableGrid, stages) {
    let col, items
    timetableGrid.innerHTML = ''
    stages.forEach(stage => {
        col           = document.createElement('div')
        col.className = 'stage-col'
        if (PROGRAM_DATA[day].hasOwnProperty(stage) && PROGRAM_DATA[day][stage].length > 0) {
            items = (PROGRAM_DATA[day][stage]).map(
                /**
                 * @param {{time: string, type: string, name: string, genre: string}} entry
                 */
                entry =>
                    `<div class="tl-item"><div class="tl-time">${entry.time}</div><div class="tl-icon">${ICONS_FOR_TIMETABLE[entry.type] ?? "❔"}</div><div class="tl-body"><h4>${entry.name}</h4><p>${entry.genre}</p></div></div>`
            ).join('')
        } else {
            items = '<p style="color:#a894c4;font-size:.85rem;text-align:center;">Programm folgt</p>'
        }
        col.innerHTML = `<h3>${stage}</h3>${items}`
        timetableGrid.appendChild(col)
    })
}

const stageGrid = document.getElementById('stageGrid')
renderDayForTimetable(DAYS.FRIDAY, stageGrid, ARTIST_STAGE_NAMES)

document.querySelectorAll('#artistTimetable .day-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('#artistTimetable .day-tab').forEach(t => t.classList.remove('active'))
        tab.classList.add('active')
        renderDayForTimetable(tab.dataset.day, stageGrid, ARTIST_STAGE_NAMES)
    })
})

const activityGrid = document.getElementById('activityGrid')
renderDayForTimetable(DAYS.FRIDAY, activityGrid, ACTIVITY_STAGE_NAMES)

document.querySelectorAll('#activityTimetable .day-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('#activityTimetable .day-tab').forEach(t => t.classList.remove('active'))
        tab.classList.add('active')
        renderDayForTimetable(tab.dataset.day, activityGrid, ACTIVITY_STAGE_NAMES)
    })
})

// ---------- DJs / Live-Acts / Team Platzhalter-Grids ----------

/**
 * @param {string} id
 * @param {{name: string, genre: string, slot: string, img: string?, special: boolean?}[]} items
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
      <div class="role">${a.genre}</div>
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
    let teamHTML = '', memberCard = ''
    for (let [role, members] of Object.entries(TEAM_MEMBERS)) {
        teamHTML += `<p class="eyebrow">${role}</p>`
        teamHTML += `<div class="team-grid team-grid-${members.length}">`
        teamHTML += members.map(member => {
            return `
            <div class="team-card reveal in">
                <div class="team-photo">
                    <img src="${member.image ? `/everland/assets/img/team/${member.name}.gif` : '/everland/assets/img/artistPlaceholder.gif'}">
                </div>
                <h4>${member.name}</h4>
            </div>`
        }).join('')
        teamHTML += `</div>`
    }

    teamGridEl.innerHTML = teamHTML
}