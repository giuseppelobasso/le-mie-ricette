const recipes = [
    {
        id: 1,
        title: "Pasta alla Carbonara",
        category: "primo",
        time: 30,
        difficulty: "facile",
        servings: 4,
        image: "🍝",
        description: "La classica carbonara romana con guanciale croccante e pecorino romano. Un piatto semplice e gustoso.",
        ingredients: [
            "400g di spaghetti",
            "200g di guanciale",
            "4 tuorli d'uovo",
            "1 uovo intero",
            "100g di Pecorino Romano DOP",
            "Pepe nero q.b.",
            "Sale q.b."
        ],
        instructions: [
            "Tagliare il guanciale a listarelle spesse circa 1cm e metterlo in una padella ampia a fuoco medio-basso.",
            "Far rosolare il guanciale lentamente finché non diventa croccante e dorato. Non aggiungere olio.",
            "In una ciotola, mescolare i tuorli con l'uovo intero e il Pecorino Romano grattugiato fino a ottenere una crema.",
            "Cuocere la pasta in abbondante acqua salata. Scolarla al dente, tenendo da parte un po' di acqua di cottura.",
            "Versare la pasta nella padella con il guanciale (fuoco spento) e mescolare bene.",
            "Aggiungere la crema di uova e formaggio, mescolando velocemente. Aggiustare di sale e pepe.",
            "Servire immediatamente con altro Pecorino e pepe nero macinato fresco."
        ],
        tags: ["pasta", "roma", "tradizionale", "veloce"]
    },
    {
        id: 2,
        title: "Tiramisù della Nonna",
        category: "dolce",
        time: 30,
        difficulty: "facile",
        servings: 8,
        image: "🍰",
        description: "Il tiramisù più buono che esista, quello della nonna. Semplice, classico, irresistibile.",
        ingredients: [
            "500g di mascarpone",
            "4 uova",
            "100g di zucchero",
            "300g di savoiardi",
            "400ml di caffè espresso freddo",
            "2 cucchiai di Marsala o Rhum",
            "Cacao amaro in polvere q.b."
        ],
        instructions: [
            "Separare i tuorli dagli albumi. Montare i tuorli con lo zucchero fino a ottenere un composto chiaro e spumoso.",
            "Aggiungere il mascarpone ai tuorli montati e mescolare delicatamente fino a ottenere una crema liscia.",
            "Montare gli albumi a neve ben ferma e incorporarli delicatamente al composto di mascarpone.",
            "Mescolare il caffè freddo con il Marsala.",
            "Inzuppare rapidamente i savoiardi nel caffè e disporre un primo strato nello stampo.",
            "Coprire con uno strato di crema al mascarpone. Ripetere con un altro strato di savoiardi e crema.",
            "Rifinire con crema e cospargere di cacao amaro. Refrigerare per almeno 4 ore prima di servire."
        ],
        tags: ["dolce", "classico", "caffè", "festa"]
    },
    {
        id: 3,
        title: "Bruschetta al Pomodoro",
        category: "antipasto",
        time: 15,
        difficulty: "facile",
        servings: 4,
        image: "🍅",
        description: "L'antipasto perfetto per l'estate. Pomodori freschi, basilico e olio d'oliva extra vergine.",
        ingredients: [
            "400g di pomodori datterini",
            "1 mazzetto di basilico fresco",
            "Olio extra vergine d'oliva q.b.",
            "1 spicchio d'aglio",
            "Sale q.b.",
            "Pepe nero q.b.",
            "4 fette di pane casereccio"
        ],
        instructions: [
            "Lavare e tagliare i pomodori a dadini piccoli. Metterli in una ciotola.",
            "Aggiungere il basilico fresco tritato grossolanamente.",
            "Condiscere con olio extra vergine d'oliva, sale e pepe. Mescolare e lasciare marinare 10 minuti.",
            "Tostare le fette di pane sulla griglia o nel tostapane.",
            "Passare l'aglio sbucciato sulle fette di pane ancora calde.",
            "Spoonare il composto di pomodori sulle fette di pane.",
        ],
        tags: ["antipasto", "estate", "leggero", "veloce"]
    },
    {
        id: 4,
        title: "Pollo alla Cacciatora",
        category: "secondo",
        time: 60,
        difficulty: "media",
        servings: 4,
        image: "🍗",
        description: "Il pollo alla cacciatora fatto in casa, con pomodori, olive e peperoni. Comfort food italiano.",
        ingredients: [
            "1 pollo intero tagliato a pezzi",
            "400g di pomodori pelati",
            "200g di olive nere",
            "2 peperoni rossi",
            "1 cipolla rossa",
            "2 spicchi d'aglio",
            "1 bicchiere di vino bianco",
            "Rosmarino, salvia, alloro",
            "Olio extra vergine d'oliva",
            "Sale e pepe q.b."
        ],
        instructions: [
            "Tagliare i peperoni a listarelle e la cipolla a fette sottili.",
            "In una padella ampia, scaldare l'olio e soffriggere cipolla e aglio fino a doratura.",
            "Aggiungere i pezzi di pollo e rosolarli bene su tutti i lati.",
            "Sfumare con il vino bianco e lasciare evaporare l'alcol.",
            "Aggiungere i pomodori pelati, le olive, le erbe aromatiche e cuocere a fuoco basso per 40 minuti.",
            "Aggiustare di sale e pepe. Servire con pane casereccio per la scarpetta."
        ],
        tags: ["pollo", "secondo", "comfort food", "invernale"]
    },
    {
        id: 5,
        title: "Insalata Caprese",
        category: "contorno",
        time: 10,
        difficulty: "facile",
        servings: 2,
        image: "🥗",
        description: "Semplice e fresca come la tradizione vuole. Mozzarella di bufala, pomodori e basilico.",
        ingredients: [
            "250g di mozzarella di bufala",
            "2 pomodori maturi",
            "Foglie di basilico fresco",
            "Olio extra vergine d'oliva",
            "Sale q.b.",
            "Pepe nero q.b."
        ],
        instructions: [
            "Affettare la mozzarella e i pomodori a fette della stessa dimensione.",
            "Disporre alternando fette di mozzarella e pomodoro su un piatto.",
            "Inserire foglie di basilico fresco tra le fette.",
            "Condiscere con un filo generoso di olio extra vergine d'oliva.",
            "Aggiustare di sale e pepe. Servire immediatamente."
        ],
        tags: ["insalata", "estate", "leggero", "tradizionale"]
    },
    {
        id: 6,
        title: "Risotto ai Funghi Porcini",
        category: "primo",
        time: 45,
        difficulty: "media",
        servings: 4,
        image: "🍄",
        description: "Un risotto cremoso e profumato con funghi porcini secchi e freschi. Piatto autunnale per eccellenza.",
        ingredients: [
            "320g di riso Carnaroli",
            "30g di funghi porcini secchi",
            "300g di funghi champignon",
            "1 cipolla bianca",
            "150ml di vino bianco secco",
            "800ml di brodo vegetale caldo",
            "50g di burro",
            "60g di Parmigiano Reggiano",
            "Prezzemolo fresco",
            "Olio extra vergine d'oliva"
        ],
        instructions: [
            "Mettere i porcini secchi in ammollo in acqua tiepida per 20 minuti. Scolarli e tagliarli a pezzetti.",
            "Pulire e tagliare gli champignon a fettine sottili.",
            "In una padella, soffriggere la cipolla tritata con olio e burro. Aggiungere i funghi e cuocere 5 minuti.",
            "Aggiungere il riso e tostarlo per 2 minuti, mescolando.",
            "Sfumare con il vino bianco e lasciare evaporare.",
            "Aggiungere il brodo caldo un mestolo alla volta, mescolando spesso. Cuocere per 14-16 minuti.",
            "Togliere dal fuoco, aggiungere burro e Parmigiano, mantecare vigorosamente.",
            "Lasciare riposare 2 minuti, poi servire con prezzemolo fresco tritato."
        ],
        tags: ["riso", "funghi", "autunno", "cremoso"]
    },
    {
        id: 7,
        title: "Focaccia Genovese",
        category: "antipasto",
        time: 90,
        difficulty: "difficile",
        servings: 8,
        image: "🫓",
        description: "La focaccia più buona del mondo, morbida dentro e croccante fuori. Segreto: il sale grosso sopra.",
        ingredients: [
            "500g di farina 00",
            "325ml di acqua tiepida",
            "7g di lievito di birra secco",
            "10g di sale",
            "30ml di olio extra vergine d'oliva",
            "Sale grosso q.b. per la superficie",
            "Acqua q.b. per la copertura"
        ],
        instructions: [
            "Sciogliere il lievito nell'acqua tiepida e lasciare attivare 5 minuti.",
            "In una ciotola capiente, mettere la farina e il sale. Aggiungere l'acqua con il lievito.",
            "Impastare per 10-15 minuti fino a ottenere un pane liscio ed elastico.",
            "Aggiungere l'olio e continuare a impastare fino a incorporarlo completamente.",
            "Lasciare lievitare in luogo tiepido per 2 ore, fino al raddoppio.",
            "Stendere l'impasto in una teglia oliata con le dita, creando le classiche fossette.",
            "Lasciar lievitare ancora 30 minuti. Spennellare con acqua e cospargere di sale grosso.",
            "Cuocere in forno preriscaldato a 220°C per 20-25 minuti fino a doratura."
        ],
        tags: ["pane", "liguria", "classico", "lievitato"]
    },
    {
        id: 8,
        title: "Parmigiana di Melanzane",
        category: "secondo",
        time: 75,
        difficulty: "media",
        servings: 6,
        image: "🍆",
        description: "La parmigiana di melanzane napoletana, strato dopo strato di bontà. Piatto unico e generoso.",
        ingredients: [
            "3 melanzane grandi",
            "800g di passata di pomodoro",
            "250g di mozzarella",
            "100g di Parmigiano Reggiano",
            "Basilico fresco",
            "2 spicchi d'aglio",
            "Olio extra vergine d'oliva",
            "Sale e pepe q.b.",
            "Farina q.b. per infarinare"
        ],
        instructions: [
            "Tagliare le melanzane a fette di 1cm di spessore. Disporle su un carto da cucina e salare.",
            "Lasciare spurgare per 30 minuti, poi asciugare e infarinare leggermente.",
            "Rosolare le fette di melanzana in padella con olio caldo fino a doratura. Mettere da parte.",
            "In un'altra padella, preparare il sugo: soffriggere aglio con olio, aggiungere la passata, basilico, sale e pepe. Cuocere 15 minuti.",
            "Tagliare la mozzarella a fettine o dadini.",
            "In una teglia, alternare strati di sugo, melanzane, mozzarella e Parmigiano.",
            "Continuare fino a esaurimento ingredienti, finendo con sugo e Parmigiano.",
            "Cuocere in forno a 180°C per 30-35 minuti fino a doratura. Lasciar riposare 10 minuti prima di servire."
        ],
        tags: ["melanzane", "napoli", "forno", "classico"]
    },
    {
        id: 9,
        title: "Panna Cotta alla Vaniglia",
        category: "dolce",
        time: 15,
        difficulty: "facile",
        servings: 4,
        image: "🍮",
        description: "Dolce piemontese incredibilmente semplice. Cremosa, leggera, perfetta con frutta fresca o caramello.",
        ingredients: [
            "500ml di panna fresca",
            "80g di zucchero",
            "1 bustina di gelatina in fogli",
            "1 bacca di vaniglia",
            "Frutta fresca per guarnire"
        ],
        instructions: [
            "Ammollare la gelatina in acqua fredda per 10 minuti.",
            "Versare la panna in un pentolino, aggiungere lo zucchero e la vaniglia (semi e bacca).",
            "Scaldare a fuoco basso senza far bollire, mescolando fino a sciolta lo zucchero.",
            "Togliere dal fuoco, eliminare la vaniglia e aggiungere la gelatina strizzata.",
            "Mescolare bene fino a completa dissoluzione della gelatina.",
            "Versare in stampini e refrigerare per almeno 4 ore.",
            "Sformare e servire con frutta fresca o caramello."
        ],
        tags: ["dolce", "piemonte", "cremoso", "semplice"]
    },
    {
        id: 10,
        title: "Minestrone alla Genovese",
        category: "primo",
        time: 60,
        difficulty: "facile",
        servings: 6,
        image: "🥬",
        description: "Il minestrone più buono, con pesto e fagiolini. Piatto unico e nutriente per tutta la famiglia.",
        ingredients: [
            "200g di fagiolini",
            "150g di zucchine",
            "200g di patate",
            "150g di carote",
            "200g di pomodori",
            "150g di pasta mista",
            "1 cipolla",
            "1 spicchio d'aglio",
            "2 cucchiai di pesto alla genovese",
            "Olio extra vergine d'oliva",
            "Sale e pepe q.b."
        ],
        instructions: [
            "Pulire e tagliare tutte le verdure a dadini di circa 1cm.",
            "In una pentola capace, soffriggere cipolla e aglio con olio.",
            "Aggiungere le verdure più dure (carote, patate) e farle insaporire per 5 minuti.",
            "Aggiungere le verdure più tenere (zucchine, fagiolini, pomodori) e mescolare.",
            "Coprire con acqua, aggiungere sale e cuocere a fuoco basso per 30-35 minuti.",
            "Quando le verdure sono cotte, aggiungere la pasta e cuocere per il tempo indicato sulla confezione.",
            "Togliere dal fuoco, aggiungere il pesto e mescolare. Servire con un filo d'olio a crudo."
        ],
        tags: ["minestrone", "liguria", "verdure", "invernale"]
    },
    {
        id: 11,
        title: "Insalata Russa",
        category: "contorno",
        time: 45,
        difficulty: "media",
        servings: 8,
        image: "🥗",
        description: "L'insalata russa delle feste, con uova, patate, carote e piselli. Il contorno perfetto per Natale.",
        ingredients: [
            "4 uova",
            "400g di patate",
            "200g di carote",
            "150g di piselli",
            "200g di tonno sott'olio",
            "150g di maionese",
            "1 mazzetto di prezzemolo",
            "Sale e pepe q.b.",
            "Capperi e olive per decorare"
        ],
        instructions: [
            "Lessare le uova, raffreddarle e sgusciarle. Tagliarle a dadini.",
            "Lessare patate e carote a pezzi, raffreddare e tagliare a dadini.",
            "Lessare i piselli e scolarli bene.",
            "Mescolare tutti gli ingredienti in una ciotola capiente: uova, patate, carote, piselli e tonno scolato.",
            "Aggiungere la maionese e mescolare delicatamente.",
            "Aggiustare di sale e pepe. Decorare con prezzemolo, capperi e olive.",
            "Refrigerare per almeno 2 ore prima di servire per far insaporire."
        ],
        tags: ["insalata", "natale", "feste", "classico"]
    },
    {
        id: 12,
        title: "Gnocchi alla Sorrentina",
        category: "primo",
        time: 40,
        difficulty: "media",
        servings: 4,
        image: "🥔",
        description: "Gnocchi di patate al forno con pomodoro, mozzarella e basilico. Comfort food napoletano.",
        ingredients: [
            "1kg di patate",
            "300g di farina 00",
            "1 uovo",
            "Sale q.b.",
            "500ml di sugo di pomodoro",
            "250g di mozzarella",
            "50g di Parmigiano Reggiano",
            "Basilico fresco",
            "Olio extra vergine d'oliva"
        ],
        instructions: [
            "Lessare le patate con la buccia, sbucciarle e schiacciarle con lo schiacciapatate.",
            "Far raffreddare, poi aggiungere farina, uovo e sale. Impastare fino a ottenere un panetto liscio.",
            "Formare i gnocchi: tagliare pezzi di impasto e rotolarli a serpentelli, poi tagliare a pezzi di 2cm.",
            "Accennare ogni gnocco con la forchetta per creare le scanalature.",
            "Cuocere gli gnocchi in acqua bollente salata. Scolarli appena vengono a galla.",
            "Mescolare gli gnocchi con il sugo di pomodoro, la mozzarella a dadini e il basilico.",
            "Versare in una teglia, spolverizzare con Parmigiano e infornare a 180°C per 15-20 minuti."
        ],
        tags: ["gnocchi", "napoli", "patate", "forno"]
    }
];

// Funzione per ottenere tutte le categorie uniche
function getCategories() {
    const categories = new Set(recipes.map(r => r.category));
    return [...categories];
}

// Funzione per ottenere tutte le difficoltà uniche
function getDifficulties() {
    const difficulties = new Set(recipes.map(r => r.difficulty));
    return [...difficulties];
}
