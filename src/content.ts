export const logo = {
  alt: 'Logotyp: en pizzaslice med tre pepperoni i en grön cirkel',
}

export interface ImageEntry {
  file: string
  alt: string
  photographer: string
}

export interface MenuItem {
  name: string
  ingredients: string
  price: number
  badge?: string
}

export interface MenuCategory {
  id: string
  title: string
  items: MenuItem[]
}

export interface OpeningRow {
  day: string
  hours: string
}

export const theme = {
  colors: {
    tomato: '#C8301E',
    tomatoDark: '#A32312',
    cream: '#FFF8EC',
    basil: '#1F4D36',
    basilMuted: '#4A6656',
    tint: '#E3EEE5',
  },
  fonts: {
    display: { family: 'Lilita One', weights: [400] },
    body: { family: 'Nunito', weights: [400, 600, 800] },
  },
  radius: {
    card: '1.5rem',
    button: '9999px',
    tag: '0.75rem',
  },
}

export const site = {
  name: 'Pizzeria Bella Nova (Demo)',
  footerText: 'Demo, inte ett riktigt företag',
  ctaLabel: 'Ring och beställ',

  meta: {
    title: 'Pizzeria Bella Nova (Demo) | Pizza i Malmö',
    description:
      'Demosida för en påhittad pizzeria i Malmö. Meny, öppettider, karta och telefonnummer för att ringa och beställa.',
  },

  hero: {
    label: 'Nygräddat varje dag!',
    heading: 'Ring. Vi bakar. Du äter.',
    subheading: 'Stenugnsbakade pizzor i Malmö. Ring så är din klar när du kommer.',
  },

  menu: {
    heading: 'Meny',
    intro: 'Bakat i stenugn när du ringer. Räkna med cirka 15 till 20 minuter.',
    navLabel: 'Menykategorier',
    categories: [
      {
        id: 'pizzor',
        title: 'Pizzor',
        items: [
          {
            name: 'Margherita',
            ingredients: 'Tomatsås, mozzarella, färsk basilika',
            price: 119,
          },
          {
            name: 'Funghi',
            ingredients: 'Tomatsås, mozzarella, champinjoner, vitlök',
            price: 129,
          },
          {
            name: 'Diavola',
            ingredients: 'Tomatsås, mozzarella, stark salami, chili, rödlök',
            price: 139,
          },
          {
            name: 'Prosciutto e rucola',
            ingredients: 'Tomatsås, mozzarella, lufttorkad skinka, rucola, parmesan',
            price: 149,
          },
          {
            name: 'Quattro formaggi',
            ingredients: 'Mozzarella, gorgonzola, parmesan, provolone. Utan tomatsås',
            price: 149,
          },
          {
            name: 'Capricciosa',
            ingredients: 'Tomatsås, mozzarella, skinka, champinjoner, kronärtskocka, oliver',
            price: 145,
          },
          {
            name: 'Vegetariana',
            ingredients: 'Tomatsås, mozzarella, aubergine, paprika, zucchini, rödlök',
            price: 139,
          },
          {
            name: 'Bella Nova',
            ingredients: 'Tomatsås, mozzarella, kryddig korv, rostad paprika, basilika',
            price: 155,
            badge: 'Husets val',
          },
        ],
      },
      {
        id: 'sallader',
        title: 'Sallader',
        items: [
          {
            name: 'Caprese',
            ingredients: 'Tomat, mozzarella, basilika, olivolja',
            price: 99,
          },
          {
            name: 'Insalata verde',
            ingredients: 'Sallatsmix, gurka, oliver, fänkål, citronvinägrett',
            price: 89,
          },
          {
            name: 'Rucola och parmesan',
            ingredients: 'Rucola, körsbärstomater, parmesan, rostade pinjenötter',
            price: 99,
          },
        ],
      },
      {
        id: 'dryck',
        title: 'Dryck',
        items: [
          { name: 'Läsk', ingredients: '33 cl, flera sorter', price: 28 },
          { name: 'Italiensk citronsoda', ingredients: '33 cl', price: 32 },
          { name: 'Mineralvatten', ingredients: '33 cl, med eller utan bubblor', price: 25 },
          { name: 'Öl', ingredients: '33 cl, lager', price: 59 },
        ],
      },
    ] satisfies MenuCategory[],
  },

  openingHours: {
    heading: 'Öppettider',
    todayLabel: 'Idag',
    note: 'Ring en stund innan du kommer, så är pizzan varm när du hämtar.',
    days: [
      { day: 'Måndag', hours: '11:00-21:00' },
      { day: 'Tisdag', hours: '11:00-21:00' },
      { day: 'Onsdag', hours: '11:00-21:00' },
      { day: 'Torsdag', hours: '11:00-21:00' },
      { day: 'Fredag', hours: '11:00-22:00' },
      { day: 'Lördag', hours: '11:00-22:00' },
      { day: 'Söndag', hours: '12:00-21:00' },
    ] satisfies OpeningRow[],
  },

  location: {
    heading: 'Hitta hit',
    addressLines: ['Demogatan 2', '211 22 Malmö'],
    description:
      'Hämta din pizza hos oss. Vi ligger en kort promenad från Möllevångstorget, och cykelställ finns utanför dörren.',
    mapTitle: 'Karta över Malmö där Pizzeria Bella Nova (Demo) skulle ligga',
    mapLinkLabel: 'Öppna större karta',
    mapNote: 'Adressen är påhittad. Kartan visar ungefär var det skulle ligga.',
    map: { lat: 55.5936, lon: 13.0108 },
  },

  contact: {
    heading: 'Hör av dig',
    intro: 'Ring så bakar vi. Har du allergier eller frågor, säg till när du ringer.',
    phoneLabel: 'Telefon',
    phoneDisplay: '040-000 00 00',
    phoneHref: 'tel:+46400000000',
    emailLabel: 'E-post',
    email: 'hej@bellanova.example',
    instagramLabel: 'Instagram',
    instagramHandle: '@bellanova.demo',
    instagramUrl: 'https://www.instagram.com/bellanova.demo',
  },
}

export const images = {
  hero: {
    file: 'hero',
    alt: 'Nygräddad pizza med paprika och färsk basilika, sedd uppifrån',
    photographer: 'georgia-z',
  },
  menuPizza: {
    file: 'pizza',
    alt: 'Närbild på en pizza med tomatsås, ost och pepperoni',
    photographer: 'fernando-andrade',
  },
  menuSalad: {
    file: 'sallad',
    alt: 'Färsk sallad med tomat och riven ost i en skål',
    photographer: 'frames-for-your-heart',
  },
  oven: {
    file: 'ugn',
    alt: 'En pizza på väg in i en het stenugn',
    photographer: 'kajetan-sumila',
  },
} satisfies Record<string, ImageEntry>
