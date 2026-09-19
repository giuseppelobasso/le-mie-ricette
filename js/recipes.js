const recipes = [
    {
        id: 1,
        title: "Cobbler alle Fragole con Ganache allo Yogurt",
        category: "dolce",
        time: 35,
        difficulty: "facile",
        servings: 6,
        image: "🍓",
        description: "Cobbler alle fragole con frolla sabbiata e ganache allo yogurt. Un dessert tiepido e fragrante, perfetto per l'estate.",
        ingredients: [
            "350g di fragole",
            "40g di zucchero",
            "10g di succo di limone",
            "Scorza di limone q.b.",
            "1 pizzico di sale",
            "8g di amido di mais",
            "Vaniglia q.b.",
            "150g di farina debole",
            "35g di zucchero",
            "6g di lievito per dolci",
            "75g di burro freddo",
            "75g di panna",
            "200g di cioccolato bianco",
            "100g di panna (ganache)",
            "120g di yogurt greco bianco"
        ],
        instructions: [
            "Ganache: scalda la panna senza portarla a bollore, aggiungi il cioccolato bianco tritato e mescola fino a scioglimento. Aggiungi un pizzico di sale. Quando tiepido, incorpora lo yogurt greco. Tieni da parte.",
            "Fragole: taglia le fragole e condiscile con zucchero, succo e scorza di limone, sale, amido e vaniglia. Lascia macerare 15 minuti.",
            "Sciroppo: metti in un pentolino gli scarti delle fragole con acqua, zucchero e succo di limone. Fai sobbollire 10 minuti, filtra e riduci 2 minuti.",
            "Frolla: mescola farina, zucchero, lievito e sale. Aggiungi il burro freddo a pezzetti e lavora fino a consistenza sabbiosa. Unisci la panna e mescola pochissimo.",
            "Assemblaggio: versa le fragole nella teglia di alluminio. Distribuisci l'impasto a cucchiaiate lasciando zone scoperte. Cuoci in forno statico a 180°C per circa 20 minuti fino a doratura.",
            "Servi tiepido con la ganache allo yogurt e qualche goccia di sciroppo di fragole."
        ],
        tags: ["fragole", "dessert", "estivo", "forno"]
    },
    {
        id: 2,
        title: "Crema Pasticcera",
        category: "contorno",
        time: 20,
        difficulty: "facile",
        servings: 6,
        image: "🍮",
        description: "Crema pasticcera classica: vellutata, densa e profumata. Perfetta come base per torte, crostate e dolci al cucchiaio. Resa ~600g.",
        ingredients: [
            "500g di latte intero",
            "110g di zucchero",
            "4-6 tuorli medi",
            "35-50g di amido di mais",
            "1 pizzico di sale",
            "Scorza di agrumi q.b.",
            "Stecca di vaniglia q.b."
        ],
        instructions: [
            "Metti il latte in un pentolino con gli aromi scelti e una parte dello zucchero. Porta a sfiorare il bollore.",
            "In una ciotola, monta i tuorli con le polveri fino a ottenere un composto leggermente spumoso.",
            "Filtra il latte direttamente nella ciotola con il composto di tuorli. Mescola bene con una frusta.",
            "Versa il composto in una pentola a fondo pesante. Cuoci a fiamma media mescolando continuamente con frusta e leccapentole.",
            "Alla prima bolla o a 85°C con termometro, togli dal fuoco.",
            "Copri con pellicola a contatto per evitare la formazione della pellicina. Raffredda velocemente."
        ],
        tags: ["crema", "base", "dolci", "classico"]
    },
    {
        id: 3,
        title: "Padellino Torinese",
        category: "antipasto",
        time: 120,
        difficulty: "media",
        servings: 4,
        image: "🍕",
        description: "Pizza al padello alla torinese, morbida e soffice. Impasto a lunga lievitazione con farine multiple per un risultato superiore.",
        ingredients: [
            "200g di farina Caputo Nuvola",
            "200g di farina Tipo 1",
            "100g di semola",
            "400g di acqua",
            "10g di olio",
            "15g di sale",
            "4-5g di lievito"
        ],
        instructions: [
            "Impastare con metodo no knead: acqua ghiacciata, tutto insieme tranne l'olio che viene messo dopo 2 giri di pieghe.",
            "Mettere la massa in frigo per 7-8 ore.",
            "Stagliare a panetti da 240g molto stretti e lasciare lievitare per 3 ore a temperatura ambiente direttamente in teglia senza stendere.",
            "Mettere olio sotto e sopra durante la lievitazione.",
            "Fare un buco al centro prima di infornare.",
            "Cuocere a 190°C per 14 minuti.",
            "Sfornare, lasciar raffreddare, e rigenerare nel forno a 230-250°C per 5-8 minuti."
        ],
        tags: ["pizza", "lievitati", "padello", "torino"]
    },
    {
        id: 4,
        title: "Pala Farcita",
        category: "antipasto",
        time: 150,
        difficulty: "media",
        servings: 4,
        image: "🫓",
        description: "Pizza alla pala con lunga lievitazione in frigo. Impasto idratato e croccante, perfetto per essere farcito a piacere.",
        ingredients: [
            "500g di farina Caputo Nuvola",
            "360g di acqua",
            "10g di olio",
            "15g di sale",
            "5g di lievito"
        ],
        instructions: [
            "Impastare tutti gli ingredienti fino a ottenere un impasto liscio ed elastico.",
            "Lasciare lievitare in frigo per 12-24 ore.",
            "Portare a temperatura ambiente e lasciar lievitare per 3 ore.",
            "Stendere l'impasto sulla teglia della pala.",
            "Cuocere in forno preriscaldato a 220°C per circa 12 minuti.",
            "Farcire a piacere dopo la cottura."
        ],
        tags: ["pizza", "lievitati", "pala", "lunga lievitazione"]
    },
    {
        id: 5,
        title: "Pan di Spagna",
        category: "contorno",
        time: 45,
        difficulty: "media",
        servings: 6,
        image: "🍰",
        description: "Pan di Spagna classico: alto, soffice e arioso. La base perfetta per torte farcite, zuppa inglese e dolci al cucchiaio. Teglia ∅ 24/26 cm.",
        ingredients: [
            "300g di uova intere (~5 grandi)",
            "200g di zucchero semolato",
            "140g di farina 00 debole",
            "60g di fecola di patate",
            "1 pizzico di sale",
            "Scorza di limone q.b.",
            "Vaniglia q.b."
        ],
        instructions: [
            "Versa uova e zucchero nella planetaria. Porta a bagnomaria per 3 minuti fino a 40-45°C mescolando continuamente.",
            "Monta a velocità media aumentando gradualmente fino alla massima per 13-14 minuti. Il composto deve quintuplicare di volume e superare la prova scrittura.",
            "Setaccia insieme farina e fecola (doppia setacciatura).",
            "Aggiungi le polveri al composto montato in 3 riprese, mescolando con spatola dal basso verso l'alto il meno possibile.",
            "Versa in teglia da ∅ 24cm imburrata e infarinata con disco di carta da forno sul fondo.",
            "Cuoci in forno statico preriscaldato a 180°C per 30-35 minuti. Prova stecchino: deve uscire asciutto.",
            "Sforna, lascia intiepidire 5 minuti nella teglia, poi sforma su gratella e raffredda completamente."
        ],
        tags: ["base", "torte", "classico", "forno"]
    },
    {
        id: 6,
        title: "Pico de Gallo",
        category: "antipasto",
        time: 15,
        difficulty: "facile",
        servings: 2,
        image: "🥑",
        description: "Salsa messicana fresca con avocado e yogurt greco, accompagnata da pico de gallo tradizionale. Perfetta per tacos e nachos.",
        ingredients: [
            "600g di avocado",
            "250g di yogurt greco",
            "Succo di 1 lime",
            "Sale q.b.",
            "1 cipolla rossa media",
            "1 peperoncino fresco medio",
            "25g di coriandolo fresco",
            "450g di pomodorini datterini",
            "Succo di mezzo lime",
            "Scorza di lime q.b.",
            "15g di olio"
        ],
        instructions: [
            "Pico de Gallo: tritare finemente cipolla rossa, peperoncino, pomodori e coriandolo. Unire in ciotola, condire con succo di mezzo lime, scorza di lime e olio. Mescolare delicatamente.",
            "Lasciare riposare in frigo per almeno 1 ora prima di servire.",
            "Salsa: schiacciare la polpa di avocado con una forchetta. Aggiungere lo yogurt greco, il succo di lime e il sale. Mescolare fino ad ottenere una crema omogenea."
        ],
        tags: ["salsa", "avocado", "fresco", "messicano"]
    },
    {
        id: 7,
        title: "Pizzette del Fornaio",
        category: "antipasto",
        time: 180,
        difficulty: "media",
        servings: 6,
        image: "🍕",
        description: "Pizzette morbide e soffici con impasto a lievitazione prolungata. Perfette per aperitivi e merende. Resa: 6 pizzette.",
        ingredients: [
            "500g di farina Caputo Nuvola",
            "220g di latte",
            "150g di acqua",
            "15g di olio",
            "15g di sale",
            "12g di lievito"
        ],
        instructions: [
            "Fare un autolisi con farina e liquidi, lasciare riposare 30 minuti, poi aggiungere olio e sale.",
            "Formare una palla e lasciare puntare per 2 ore a temperatura ambiente.",
            "Stagliare in 6 panetti da circa 140g e lasciar lievitare fino a raddoppio (circa 1 ora).",
            "Formare le pizzette stendendo i panetti con i polpastrelli e condire.",
            "Cuocere in forno statico preriscaldato a 250°C per circa 10 minuti.",
            "Aggiungere la mozzarella ed eventuali altri ingredienti ed infornare per altri 5 minuti."
        ],
        tags: ["pizza", "lievitati", "aperitivo", "forno"]
    },
    {
        id: 8,
        title: "Shokupan",
        category: "primo",
        time: 360,
        difficulty: "difficile",
        servings: 4,
        image: "🍞",
        description: "Pane giapponese Shokupan: soffice, morbido e filante grazie alla tecnica del Tangzhong. Un impasto ricco e avvolgente.",
        ingredients: [
            "500g di farina Caputo Manitoba Oro",
            "200g di farina Caputo Alba",
            "470ml di latte",
            "3 uova",
            "110g di zucchero",
            "10g di lievito di birra fresco",
            "90g di burro",
            "14g di sale"
        ],
        instructions: [
            "Tangzhong: sciogliere 50g di farina in 250g di latte a fuoco basso fino a 65°C mescolando. Lasciar raffreddare coprendo con pellicola a contatto.",
            "Impasto: nella planetaria con gancio, mettere farina, tangzhong, latte, uova, sale, zucchero e lievito. Impastare a velocità 1.",
            "Quando l'impasto è formato, aggiungere il burro poco alla volta. Continuare ad impastare per 10 minuti fino a quando l'impasto si stacca dalle pareti e forma un velo.",
            "Lasciare riposare l'impasto coperto fino al raddoppio.",
            "Dividere l'impasto in 4 parti uguali.",
            "Stendere ogni porzione in un rettangolo lungo, piegare i lati lunghi verso il centro e poi chiudere a rotolo stretto.",
            "Disporre i 4 salsicciotti uno accanto all'altro e lasciar lievitare fino a 2 cm dal bordo.",
            "Cuocere in forno statico preriscaldato a 170°C per 45 minuti, senza coperchio.",
            "Lasciar raffreddare completamente su una griglia prima di affettare."
        ],
        tags: ["pane", "giapponese", "lievitati", "tangzhong"]
    },
    {
        id: 9,
        title: "Teglia Romana",
        category: "antipasto",
        time: 720,
        difficulty: "media",
        servings: 4,
        image: "🍕",
        description: "Pizza in teglia alla romana: alta, soffice e con crosta croccante. Lunga lievitazione in frigo per un impasto digeribile e saporito.",
        ingredients: [
            "750g di farina Caputo Aria",
            "525g di acqua",
            "22,5g di olio",
            "15g di sale",
            "5g di lievito"
        ],
        instructions: [
            "Impastare con metodo no knead: acqua ghiacciata, tutto insieme.",
            "Mettere la massa in frigo per 7-8 ore.",
            "Stagliare a panetti da 600g e lasciare lievitare fino a raddoppio.",
            "Stendere su semola e portare in teglia facendo aderire bene.",
            "Cuocere a 250°C.",
            "Sfornare, lasciar raffreddare, condire e rigenerare in forno."
        ],
        tags: ["pizza", "lievitati", "teglia", "roma"]
    },
    {
        id: 10,
        title: "Zuppa Inglese",
        category: "dolce",
        time: 60,
        difficulty: "media",
        servings: 8,
        image: "🍒",
        description: "Dolce al cucchiaio classico con strati di pan di spagna bagnato all'alchermes e crema pasticcera. Almeno 4 ore di riposo in frigo. 8-10 porzioni.",
        ingredients: [
            "1 base di Pan di Spagna da 28 cm",
            "800g di Crema Pasticcera",
            "800g di Crema al Cioccolato",
            "Alchermes q.b.",
            "Acqua o sciroppo leggero q.b.",
            "Cacao amaro q.b.",
            "Panna montata o decorazioni q.b.",
            "Gocce di cioccolato q.b. (opzionale)",
            "Frutta candita q.b. (opzionale)"
        ],
        instructions: [
            "Prepara il Pan di Spagna e lascialo raffreddare completamente. Prepara la Crema Pasticcera e falla raffreddare bene.",
            "Taglia il pan di spagna in 2 o 3 dischi, oppure ricava cubi regolari.",
            "Diluisci l'alchermes con un po' di acqua o sciroppo leggero se vuoi una bagna meno intensa.",
            "Bagna generosamente il primo strato di pan di spagna.",
            "Stendi uno strato di crema pasticcera. Continua alternando pan di spagna bagnato e crema fino a esaurimento.",
            "Termina con crema in superficie. Livella bene.",
            "Spolvera con cacao amaro oppure decora con panna montata, gocce di cioccolato o frutta candita.",
            "Lascia riposare in frigorifero almeno 4 ore prima di servire."
        ],
        tags: ["dolce", "alchermes", "crema", "classico"]
    }
];

function getCategories() {
    const categories = new Set(recipes.map(r => r.category));
    return [...categories];
}

function getDifficulties() {
    const difficulties = new Set(recipes.map(r => r.difficulty));
    return [...difficulties];
}
