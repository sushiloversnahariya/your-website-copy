import type { Lang } from "./translations";

export type Category = {
  id: string;
  slug: string;
  name_ru: string;
  name_he: string;
  name_en: string;
  note_ru: string | null;
  note_he: string | null;
  note_en: string | null;
  position: number;
};

export type Product = {
  id: string;
  category_id: string;
  slug: string;
  name_ru: string;
  name_he: string;
  name_en: string;
  description_ru: string | null;
  description_he: string | null;
  description_en: string | null;
  price: number;
  image_url: string | null;
  badge: string | null;
  set_items_ru: string[] | null;
  set_items_he: string[] | null;
  set_items_en: string[] | null;
  available: boolean;
  position: number;
};

export const CATEGORIES: Category[] = [
  {
    "id": "cat-nigiri",
    "slug": "nigiri",
    "name_ru": "Нигири",
    "name_he": "ניגירי",
    "name_en": "Nigiri",
    "note_ru": "4 шт.",
    "note_he": "4 יח׳",
    "note_en": "4 pcs",
    "position": 10
  },
  {
    "id": "cat-salad",
    "slug": "salad",
    "name_ru": "Салат",
    "name_he": "סלט",
    "name_en": "Salad",
    "note_ru": null,
    "note_he": null,
    "note_en": null,
    "position": 20
  },
  {
    "id": "cat-rolls",
    "slug": "rolls",
    "name_ru": "Роллы",
    "name_he": "רולים",
    "name_en": "Rolls",
    "note_ru": "8 шт.",
    "note_he": "8 יח׳",
    "note_en": "8 pcs",
    "position": 30
  },
  {
    "id": "cat-exclusive",
    "slug": "exclusive",
    "name_ru": "Эксклюзивные роллы",
    "name_he": "רולים מיוחדים",
    "name_en": "Exclusive Rolls",
    "note_ru": "8 шт.",
    "note_he": "8 יח׳",
    "note_en": "8 pcs",
    "position": 40
  },
  {
    "id": "cat-sets",
    "slug": "sets",
    "name_ru": "Сеты",
    "name_he": "סטים",
    "name_en": "Sets",
    "note_ru": "роллы в сетах без изменений",
    "note_he": "רולים בסטים ללא שינויים",
    "note_en": "sets are served as listed",
    "position": 50
  }
];

export const PRODUCTS: Product[] = [
  {
    "id": "prod-losos",
    "category_id": "cat-nigiri",
    "slug": "losos",
    "name_ru": "Лосось",
    "name_he": "סלמון",
    "name_en": "Salmon",
    "description_ru": null,
    "description_he": null,
    "description_en": null,
    "price": 50,
    "image_url": "/menu/losos.jpg",
    "badge": null,
    "set_items_ru": null,
    "set_items_he": null,
    "set_items_en": null,
    "available": true,
    "position": 10
  },
  {
    "id": "prod-losos-opalen",
    "category_id": "cat-nigiri",
    "slug": "losos-opalen",
    "name_ru": "Лосось опалённый",
    "name_he": "סלמון צרוב",
    "name_en": "Seared Salmon",
    "description_ru": null,
    "description_he": null,
    "description_en": null,
    "price": 50,
    "image_url": "/menu/losos-opalen.jpg",
    "badge": null,
    "set_items_ru": null,
    "set_items_he": null,
    "set_items_en": null,
    "available": true,
    "position": 20
  },
  {
    "id": "prod-ugor",
    "category_id": "cat-nigiri",
    "slug": "ugor",
    "name_ru": "Угорь",
    "name_he": "צלופח",
    "name_en": "Eel",
    "description_ru": null,
    "description_he": null,
    "description_en": null,
    "price": 65,
    "image_url": "/menu/ugor.jpg",
    "badge": null,
    "set_items_ru": null,
    "set_items_he": null,
    "set_items_en": null,
    "available": true,
    "position": 30
  },
  {
    "id": "prod-chuka",
    "category_id": "cat-salad",
    "slug": "chuka",
    "name_ru": "Салат чука",
    "name_he": "סלט צ׳וקה",
    "name_en": "Chuka Salad",
    "description_ru": "водоросли чука 100 г + ореховый соус 20 г",
    "description_he": "водоросли чука 100 г + ореховый соус 20 г",
    "description_en": "водоросли чука 100 г + ореховый соус 20 г",
    "price": 35,
    "image_url": "/menu/chuka.jpg",
    "badge": null,
    "set_items_ru": null,
    "set_items_he": null,
    "set_items_en": null,
    "available": true,
    "position": 10
  },
  {
    "id": "prod-cal-tamago-shrimp",
    "category_id": "cat-rolls",
    "slug": "cal-tamago-shrimp",
    "name_ru": "Калифорния тамаго креветка",
    "name_he": "קליפורניה טמאגו שרימפס",
    "name_en": "California Tamago Shrimp",
    "description_ru": "нори, рис, сливочный сыр, омлет тамаго, креветка, кунжут",
    "description_he": "нори, рис, сливочный сыр, омлет тамаго, креветка, кунжут",
    "description_en": "нори, рис, сливочный сыр, омлет тамаго, креветка, кунжут",
    "price": 40,
    "image_url": "/menu/cal-tamago-shrimp.jpg",
    "badge": null,
    "set_items_ru": null,
    "set_items_he": null,
    "set_items_en": null,
    "available": true,
    "position": 10
  },
  {
    "id": "prod-cal-tuna",
    "category_id": "cat-rolls",
    "slug": "cal-tuna",
    "name_ru": "Калифорния тунец",
    "name_he": "קליפורניה טונה",
    "name_en": "California Tuna",
    "description_ru": "нори, рис, сливочный сыр, огурец, тунец, посыпан тобико",
    "description_he": "нори, рис, сливочный сыр, огурец, тунец, посыпан тобико",
    "description_en": "нори, рис, сливочный сыр, огурец, тунец, посыпан тобико",
    "price": 50,
    "image_url": "/menu/cal-tuna.jpg",
    "badge": null,
    "set_items_ru": null,
    "set_items_he": null,
    "set_items_en": null,
    "available": true,
    "position": 20
  },
  {
    "id": "prod-lava",
    "category_id": "cat-rolls",
    "slug": "lava",
    "name_ru": "Лава",
    "name_he": "לבה",
    "name_en": "Lava",
    "description_ru": "нори, рис, сливочный сыр, гребешок, икра тобико, майонез",
    "description_he": "нори, рис, сливочный сыр, гребешок, икра тобико, майонез",
    "description_en": "нори, рис, сливочный сыр, гребешок, икра тобико, майонез",
    "price": 60,
    "image_url": null,
    "badge": null,
    "set_items_ru": null,
    "set_items_he": null,
    "set_items_en": null,
    "available": true,
    "position": 30
  },
  {
    "id": "prod-bonito",
    "category_id": "cat-rolls",
    "slug": "bonito",
    "name_ru": "Бонито",
    "name_he": "בוניטו",
    "name_en": "Bonito",
    "description_ru": "нори, рис, сливочный сыр, огурец, креветка, посыпан стружкой тунца",
    "description_he": "нори, рис, сливочный сыр, огурец, креветка, посыпан стружкой тунца",
    "description_en": "нори, рис, сливочный сыр, огурец, креветка, посыпан стружкой тунца",
    "price": 45,
    "image_url": null,
    "badge": null,
    "set_items_ru": null,
    "set_items_he": null,
    "set_items_en": null,
    "available": false,
    "position": 40
  },
  {
    "id": "prod-phil-smoked",
    "category_id": "cat-rolls",
    "slug": "phil-smoked",
    "name_ru": "Филадельфия копчёный лосось",
    "name_he": "פילדלפיה סלמון מעושן",
    "name_en": "Philadelphia Smoked Salmon",
    "description_ru": "нори, рис, сливочный сыр, огурец, копчёный лосось",
    "description_he": "нори, рис, сливочный сыр, огурец, копчёный лосось",
    "description_en": "нори, рис, сливочный сыр, огурец, копчёный лосось",
    "price": 55,
    "image_url": "/menu/phil-smoked.jpg",
    "badge": null,
    "set_items_ru": null,
    "set_items_he": null,
    "set_items_en": null,
    "available": true,
    "position": 50
  },
  {
    "id": "prod-phil-opalen",
    "category_id": "cat-rolls",
    "slug": "phil-opalen",
    "name_ru": "Филадельфия опалённый лосось",
    "name_he": "פילדלפיה סלמון צרוב",
    "name_en": "Philadelphia Seared Salmon",
    "description_ru": "нори, рис, сливочный сыр, огурец, опалённый лосось",
    "description_he": "нори, рис, сливочный сыр, огурец, опалённый лосось",
    "description_en": "нори, рис, сливочный сыр, огурец, опалённый лосось",
    "price": 50,
    "image_url": null,
    "badge": null,
    "set_items_ru": null,
    "set_items_he": null,
    "set_items_en": null,
    "available": true,
    "position": 60
  },
  {
    "id": "prod-phil-salmon",
    "category_id": "cat-rolls",
    "slug": "phil-salmon",
    "name_ru": "Филадельфия лосось",
    "name_he": "פילדלפיה סלמון",
    "name_en": "Philadelphia Salmon",
    "description_ru": "нори, рис, сливочный сыр, огурец, лосось",
    "description_he": "нори, рис, сливочный сыр, огурец, лосось",
    "description_en": "нори, рис, сливочный сыр, огурец, лосось",
    "price": 50,
    "image_url": null,
    "badge": "popular",
    "set_items_ru": null,
    "set_items_he": null,
    "set_items_en": null,
    "available": true,
    "position": 70
  },
  {
    "id": "prod-phil-ikra",
    "category_id": "cat-rolls",
    "slug": "phil-ikra",
    "name_ru": "Филадельфия лосось икра",
    "name_he": "פילדלפיה סלמון קוויאר",
    "name_en": "Philadelphia Salmon Caviar",
    "description_ru": "нори, рис, сливочный сыр, огурец, лосось, икра",
    "description_he": "нори, рис, сливочный сыр, огурец, лосось, икра",
    "description_en": "нори, рис, сливочный сыр, огурец, лосось, икра",
    "price": 60,
    "image_url": null,
    "badge": null,
    "set_items_ru": null,
    "set_items_he": null,
    "set_items_en": null,
    "available": true,
    "position": 80
  },
  {
    "id": "prod-phil-shrimp",
    "category_id": "cat-rolls",
    "slug": "phil-shrimp",
    "name_ru": "Филадельфия лосось креветка",
    "name_he": "פילדלפיה סלמון שרימפס",
    "name_en": "Philadelphia Salmon Shrimp",
    "description_ru": "нори, рис, сливочный сыр, огурец, лосось, креветка",
    "description_he": "нори, рис, сливочный сыр, огурец, лосось, креветка",
    "description_en": "нори, рис, сливочный сыр, огурец, лосось, креветка",
    "price": 55,
    "image_url": null,
    "badge": null,
    "set_items_ru": null,
    "set_items_he": null,
    "set_items_en": null,
    "available": true,
    "position": 90
  },
  {
    "id": "prod-drakon",
    "category_id": "cat-rolls",
    "slug": "drakon",
    "name_ru": "Дракон",
    "name_he": "דרקון",
    "name_en": "Dragon",
    "description_ru": "нори, рис, сливочный сыр, огурец, угорь",
    "description_he": "нори, рис, сливочный сыр, огурец, угорь",
    "description_en": "нори, рис, сливочный сыр, огурец, угорь",
    "price": 65,
    "image_url": null,
    "badge": null,
    "set_items_ru": null,
    "set_items_he": null,
    "set_items_en": null,
    "available": true,
    "position": 100
  },
  {
    "id": "prod-futomaki",
    "category_id": "cat-rolls",
    "slug": "futomaki",
    "name_ru": "Футомаки лосось",
    "name_he": "פוטומאקי סלמון",
    "name_en": "Futomaki Salmon",
    "description_ru": "нори, рис, огурец, лосось",
    "description_he": "нори, рис, огурец, лосось",
    "description_en": "нори, рис, огурец, лосось",
    "price": 45,
    "image_url": "/menu/futomaki.jpg",
    "badge": null,
    "set_items_ru": null,
    "set_items_he": null,
    "set_items_en": null,
    "available": true,
    "position": 110
  },
  {
    "id": "prod-veg",
    "category_id": "cat-rolls",
    "slug": "veg",
    "name_ru": "Вегетарианский",
    "name_he": "צמחוני",
    "name_en": "Vegetarian",
    "description_ru": "нори, рис, огурец, морковь",
    "description_he": "нори, рис, огурец, морковь",
    "description_en": "нори, рис, огурец, морковь",
    "price": 35,
    "image_url": null,
    "badge": null,
    "set_items_ru": null,
    "set_items_he": null,
    "set_items_en": null,
    "available": true,
    "position": 120
  },
  {
    "id": "prod-tartar-tuna",
    "category_id": "cat-rolls",
    "slug": "tartar-tuna",
    "name_ru": "Тартар тунец",
    "name_he": "טרטר טונה",
    "name_en": "Tuna Tartare",
    "description_ru": "нори, рис, омлет тамаго, огурец, тунец в спайси соусе, икра тобико",
    "description_he": "нори, рис, омлет тамаго, огурец, тунец в спайси соусе, икра тобико",
    "description_en": "нори, рис, омлет тамаго, огурец, тунец в спайси соусе, икра тобико",
    "price": 50,
    "image_url": "/menu/tartar-tuna.jpg",
    "badge": null,
    "set_items_ru": null,
    "set_items_he": null,
    "set_items_en": null,
    "available": true,
    "position": 130
  },
  {
    "id": "prod-maki-ogurec",
    "category_id": "cat-rolls",
    "slug": "maki-ogurec",
    "name_ru": "Маки огурец",
    "name_he": "מאקי מלפפון",
    "name_en": "Cucumber Maki",
    "description_ru": "нори, рис, огурец",
    "description_he": "нори, рис, огурец",
    "description_en": "нори, рис, огурец",
    "price": 25,
    "image_url": "/menu/maki-ogurec.jpg",
    "badge": null,
    "set_items_ru": null,
    "set_items_he": null,
    "set_items_en": null,
    "available": true,
    "position": 140
  },
  {
    "id": "prod-tempura",
    "category_id": "cat-rolls",
    "slug": "tempura",
    "name_ru": "Темпура лосось",
    "name_he": "טמפורה סלמון",
    "name_en": "Tempura Salmon",
    "description_ru": "нори, рис, лосось, огурец, кляр, панко",
    "description_he": "нори, рис, лосось, огурец, кляр, панко",
    "description_en": "нори, рис, лосось, огурец, кляр, панко",
    "price": 60,
    "image_url": null,
    "badge": null,
    "set_items_ru": null,
    "set_items_he": null,
    "set_items_en": null,
    "available": true,
    "position": 150
  },
  {
    "id": "prod-cal-smoked",
    "category_id": "cat-rolls",
    "slug": "cal-smoked",
    "name_ru": "Калифорния копчёный лосось",
    "name_he": "קליפורניה סלמון מעושן",
    "name_en": "California Smoked Salmon",
    "description_ru": "нори, рис, сливочный сыр, огурец, копчёный лосось, кунжут",
    "description_he": "нори, рис, сливочный сыр, огурец, копчёный лосось, кунжут",
    "description_en": "нори, рис, сливочный сыр, огурец, копчёный лосось, кунжут",
    "price": 55,
    "image_url": "/menu/cal-smoked.jpg",
    "badge": null,
    "set_items_ru": null,
    "set_items_he": null,
    "set_items_en": null,
    "available": true,
    "position": 160
  },
  {
    "id": "prod-cal-salmon",
    "category_id": "cat-rolls",
    "slug": "cal-salmon",
    "name_ru": "Калифорния лосось",
    "name_he": "קליפורניה סלמון",
    "name_en": "California Salmon",
    "description_ru": "нори, рис, сливочный сыр, огурец, лосось, кунжут",
    "description_he": "нори, рис, сливочный сыр, огурец, лосось, кунжут",
    "description_en": "нори, рис, сливочный сыр, огурец, лосось, кунжут",
    "price": 45,
    "image_url": null,
    "badge": null,
    "set_items_ru": null,
    "set_items_he": null,
    "set_items_en": null,
    "available": true,
    "position": 170
  },
  {
    "id": "prod-cal-shrimp",
    "category_id": "cat-rolls",
    "slug": "cal-shrimp",
    "name_ru": "Калифорния креветка",
    "name_he": "קליפורניה שרימפס",
    "name_en": "California Shrimp",
    "description_ru": "нори, рис, сливочный сыр, огурец, креветка, кунжут",
    "description_he": "нори, рис, сливочный сыр, огурец, креветка, кунжут",
    "description_en": "нори, рис, сливочный сыр, огурец, креветка, кунжут",
    "price": 40,
    "image_url": "/menu/cal-shrimp.jpg",
    "badge": null,
    "set_items_ru": null,
    "set_items_he": null,
    "set_items_en": null,
    "available": true,
    "position": 180
  },
  {
    "id": "prod-cal-snow-crab",
    "category_id": "cat-rolls",
    "slug": "cal-snow-crab",
    "name_ru": "Калифорния снежный краб",
    "name_he": "קליפורניה קראב",
    "name_en": "California Snow Crab",
    "description_ru": "нори, рис, сливочный сыр, огурец, крабовая палочка, кунжут",
    "description_he": "нори, рис, сливочный сыр, огурец, крабовая палочка, кунжут",
    "description_en": "нори, рис, сливочный сыр, огурец, крабовая палочка, кунжут",
    "price": 35,
    "image_url": null,
    "badge": null,
    "set_items_ru": null,
    "set_items_he": null,
    "set_items_en": null,
    "available": true,
    "position": 190
  },
  {
    "id": "prod-midiyny",
    "category_id": "cat-exclusive",
    "slug": "midiyny",
    "name_ru": "Мидийный",
    "name_he": "מולים",
    "name_en": "Mussel Roll",
    "description_ru": "нори, рис, огурец, лосось, крабовая палочка, мидия в соусе майонез васаби, кунжут васаби",
    "description_he": "нори, рис, огурец, лосось, крабовая палочка, мидия в соусе майонез васаби, кунжут васаби",
    "description_en": "нори, рис, огурец, лосось, крабовая палочка, мидия в соусе майонез васаби, кунжут васаби",
    "price": 50,
    "image_url": "/menu/midiyny.jpg",
    "badge": null,
    "set_items_ru": null,
    "set_items_he": null,
    "set_items_en": null,
    "available": true,
    "position": 10
  },
  {
    "id": "prod-dabl-fish",
    "category_id": "cat-exclusive",
    "slug": "dabl-fish",
    "name_ru": "Дабл фиш",
    "name_he": "דאבל פיש",
    "name_en": "Double Fish",
    "description_ru": "нори, рис, сливочный сыр, огурец, тунец, лосось в спайси соусе, кранч-лук, икра тобико",
    "description_he": "нори, рис, сливочный сыр, огурец, тунец, лосось в спайси соусе, кранч-лук, икра тобико",
    "description_en": "нори, рис, сливочный сыр, огурец, тунец, лосось в спайси соусе, кранч-лук, икра тобико",
    "price": 65,
    "image_url": null,
    "badge": null,
    "set_items_ru": null,
    "set_items_he": null,
    "set_items_en": null,
    "available": true,
    "position": 20
  },
  {
    "id": "prod-gurme",
    "category_id": "cat-exclusive",
    "slug": "gurme",
    "name_ru": "Гурмэ",
    "name_he": "גורמה",
    "name_en": "Gourmet",
    "description_ru": "нори, рис, огурец, омлет тамаго, гребешок, манго, трюфельная паста",
    "description_he": "нори, рис, огурец, омлет тамаго, гребешок, манго, трюфельная паста",
    "description_en": "нори, рис, огурец, омлет тамаго, гребешок, манго, трюфельная паста",
    "price": 60,
    "image_url": "/menu/gurme.jpg",
    "badge": null,
    "set_items_ru": null,
    "set_items_he": null,
    "set_items_en": null,
    "available": true,
    "position": 30
  },
  {
    "id": "prod-phil-mango",
    "category_id": "cat-exclusive",
    "slug": "phil-mango",
    "name_ru": "Филадельфия лосось с манговым соусом",
    "name_he": "פילדלפיה סלמון עם מנגו",
    "name_en": "Philadelphia Salmon Mango",
    "description_ru": "нори, рис, сливочный сыр, омлет тамаго, лосось, манговый соус",
    "description_he": "нори, рис, сливочный сыр, омлет тамаго, лосось, манговый соус",
    "description_en": "нори, рис, сливочный сыр, омлет тамаго, лосось, манговый соус",
    "price": 55,
    "image_url": "/menu/phil-mango.jpg",
    "badge": null,
    "set_items_ru": null,
    "set_items_he": null,
    "set_items_en": null,
    "available": true,
    "position": 40
  },
  {
    "id": "prod-gold-drakon",
    "category_id": "cat-exclusive",
    "slug": "gold-drakon",
    "name_ru": "Золотой дракон",
    "name_he": "דרקון זהב",
    "name_en": "Golden Dragon",
    "description_ru": "нори, рис, сливочный сыр, авокадо или омлет тамаго, икра тобико, угорь, лепестки миндаля",
    "description_he": "нори, рис, сливочный сыр, авокадо или омлет тамаго, икра тобико, угорь, лепестки миндаля",
    "description_en": "нори, рис, сливочный сыр, авокадо или омлет тамаго, икра тобико, угорь, лепестки миндаля",
    "price": 75,
    "image_url": "/menu/gold-drakon.jpg",
    "badge": "chef",
    "set_items_ru": null,
    "set_items_he": null,
    "set_items_en": null,
    "available": true,
    "position": 50
  },
  {
    "id": "prod-set-48",
    "category_id": "cat-sets",
    "slug": "set-48",
    "name_ru": "Сет 48 шт.",
    "name_he": "סט 48 יח׳",
    "name_en": "Set 48 pcs",
    "description_ru": null,
    "description_he": null,
    "description_en": null,
    "price": 250,
    "image_url": null,
    "badge": null,
    "set_items_ru": [
      "Футомаки лосось — 16 шт.",
      "Филадельфия лосось — 8 шт.",
      "Калифорния лосось — 8 шт.",
      "Калифорния креветка — 8 шт.",
      "Калифорния снежный краб — 8 шт."
    ],
    "set_items_he": [
      "Футомаки лосось — 16 шт.",
      "Филадельфия лосось — 8 шт.",
      "Калифорния лосось — 8 шт.",
      "Калифорния креветка — 8 шт.",
      "Калифорния снежный краб — 8 шт."
    ],
    "set_items_en": [
      "Футомаки лосось — 16 шт.",
      "Филадельфия лосось — 8 шт.",
      "Калифорния лосось — 8 шт.",
      "Калифорния креветка — 8 шт.",
      "Калифорния снежный краб — 8 шт."
    ],
    "available": true,
    "position": 10
  },
  {
    "id": "prod-set-72",
    "category_id": "cat-sets",
    "slug": "set-72",
    "name_ru": "Сет 72 шт.",
    "name_he": "סט 72 יח׳",
    "name_en": "Set 72 pcs",
    "description_ru": null,
    "description_he": null,
    "description_en": null,
    "price": 370,
    "image_url": null,
    "badge": null,
    "set_items_ru": [
      "Футомаки лосось — 24 шт.",
      "Филадельфия лосось — 16 шт.",
      "Калифорния лосось — 8 шт.",
      "Калифорния креветка — 16 шт.",
      "Калифорния снежный краб — 8 шт."
    ],
    "set_items_he": [
      "Футомаки лосось — 24 шт.",
      "Филадельфия лосось — 16 шт.",
      "Калифорния лосось — 8 шт.",
      "Калифорния креветка — 16 шт.",
      "Калифорния снежный краб — 8 шт."
    ],
    "set_items_en": [
      "Футомаки лосось — 24 шт.",
      "Филадельфия лосось — 16 шт.",
      "Калифорния лосось — 8 шт.",
      "Калифорния креветка — 16 шт.",
      "Калифорния снежный краб — 8 шт."
    ],
    "available": true,
    "position": 20
  },
  {
    "id": "prod-set-96",
    "category_id": "cat-sets",
    "slug": "set-96",
    "name_ru": "Сет 96 шт.",
    "name_he": "סט 96 יח׳",
    "name_en": "Set 96 pcs",
    "description_ru": null,
    "description_he": null,
    "description_en": null,
    "price": 490,
    "image_url": null,
    "badge": null,
    "set_items_ru": [
      "Футомаки лосось — 24 шт.",
      "Филадельфия лосось — 24 шт.",
      "Калифорния лосось — 8 шт.",
      "Калифорния креветка — 16 шт.",
      "Калифорния тамаго креветка — 16 шт.",
      "Калифорния снежный краб — 8 шт."
    ],
    "set_items_he": [
      "Футомаки лосось — 24 шт.",
      "Филадельфия лосось — 24 шт.",
      "Калифорния лосось — 8 шт.",
      "Калифорния креветка — 16 шт.",
      "Калифорния тамаго креветка — 16 шт.",
      "Калифорния снежный краб — 8 шт."
    ],
    "set_items_en": [
      "Футомаки лосось — 24 шт.",
      "Филадельфия лосось — 24 шт.",
      "Калифорния лосось — 8 шт.",
      "Калифорния креветка — 16 шт.",
      "Калифорния тамаго креветка — 16 шт.",
      "Калифорния снежный краб — 8 шт."
    ],
    "available": true,
    "position": 30
  }
];

type OverrideEntry = { name?: string; note?: string; description?: string; set_items?: string[] };

export const LOCALE_OVERRIDES: Partial<Record<Lang, Record<string, OverrideEntry>>> = {
  "uk": {
    "nigiri": {
      "name": "Нігірі",
      "note": "4 шт."
    },
    "salad": {
      "name": "Салат"
    },
    "rolls": {
      "name": "Роли",
      "note": "8 шт."
    },
    "exclusive": {
      "name": "Ексклюзивні роли",
      "note": "8 шт."
    },
    "sets": {
      "name": "Сети",
      "note": "роли в сетах без змін"
    },
    "extras": {
      "name": "Палички та соуси"
    },
    "sauce-soy": {
      "name": "Соєвий соус"
    },
    "sauce-ginger": {
      "name": "Імбир"
    },
    "sauce-wasabi": {
      "name": "Васабі"
    },
    "sauce-teriyaki": {
      "name": "Теріякі"
    },
    "sauce-spicy": {
      "name": "Спайсі"
    },
    "sauce-mayo": {
      "name": "Майонез"
    },
    "losos": {
      "name": "Лосось"
    },
    "losos-opalen": {
      "name": "Опалений лосось"
    },
    "ugor": {
      "name": "Вугор"
    },
    "chuka": {
      "name": "Салат чука",
      "description": "водорості чука 100 г + горіховий соус 20 г"
    },
    "lava": {
      "name": "Лава",
      "description": "норі, рис, вершковий сир, гребінець, ікра тобіко, майонез"
    },
    "midiyny": {
      "name": "Мідійний",
      "description": "норі, рис, огірок, лосось, крабова паличка, мідія в соусі майонез васабі, кунжут васабі"
    },
    "dabl-fish": {
      "name": "Дабл фіш",
      "description": "норі, рис, вершковий сир, огірок, тунець, лосось у спайсі соусі, кранч-цибуля, ікра тобіко"
    },
    "gurme": {
      "name": "Гурме",
      "description": "норі, рис, огірок, омлет тамаго, гребінець, манго, трюфельна паста"
    },
    "phil-mango": {
      "name": "Філадельфія лосось з манговим соусом",
      "description": "норі, рис, вершковий сир, омлет тамаго, лосось, манговий соус"
    },
    "gold-drakon": {
      "name": "Золотий дракон",
      "description": "норі, рис, вершковий сир, авокадо або омлет тамаго, ікра тобіко, вугор, пелюстки мигдалю"
    },
    "cal-tamago-shrimp": {
      "name": "Каліфорнія тамаго креветка",
      "description": "норі, рис, вершковий сир, омлет тамаго, креветка, кунжут"
    },
    "cal-tuna": {
      "name": "Каліфорнія тунець",
      "description": "норі, рис, вершковий сир, огірок, тунець, посипаний тобіко"
    },
    "bonito": {
      "name": "Боніто",
      "description": "норі, рис, вершковий сир, огірок, креветка, посипаний стружкою тунця"
    },
    "phil-smoked": {
      "name": "Філадельфія копчений лосось",
      "description": "норі, рис, вершковий сир, огірок, копчений лосось"
    },
    "phil-opalen": {
      "name": "Філадельфія опалений лосось",
      "description": "норі, рис, вершковий сир, огірок, опалений лосось"
    },
    "phil-salmon": {
      "name": "Філадельфія лосось",
      "description": "норі, рис, вершковий сир, огірок, лосось"
    },
    "phil-ikra": {
      "name": "Філадельфія лосось ікра",
      "description": "норі, рис, вершковий сир, огірок, лосось, ікра"
    },
    "phil-shrimp": {
      "name": "Філадельфія лосось креветка",
      "description": "норі, рис, вершковий сир, огірок, лосось, креветка"
    },
    "drakon": {
      "name": "Дракон",
      "description": "норі, рис, вершковий сир, огірок, вугор"
    },
    "futomaki": {
      "name": "Футомакі лосось",
      "description": "норі, рис, огірок, лосось"
    },
    "veg": {
      "name": "🌱 Вегетаріанський",
      "description": "норі, рис, огірок, морква"
    },
    "tartar-tuna": {
      "name": "🌶 Тартар тунець",
      "description": "норі, рис, омлет тамаго, огірок, тунець у спайсі соусі, ікра тобіко"
    },
    "maki-ogurec": {
      "name": "Макі огірок",
      "description": "норі, рис, огірок"
    },
    "tempura": {
      "name": "🔥 Темпура лосось",
      "description": "норі, рис, лосось, огірок, кляр, панко"
    },
    "cal-smoked": {
      "name": "Каліфорнія копчений лосось",
      "description": "норі, рис, вершковий сир, огірок, копчений лосось, кунжут"
    },
    "cal-salmon": {
      "name": "Каліфорнія лосось",
      "description": "норі, рис, вершковий сир, огірок, лосось, кунжут"
    },
    "cal-shrimp": {
      "name": "Каліфорнія креветка",
      "description": "норі, рис, вершковий сир, огірок, креветка, кунжут"
    },
    "cal-snow-crab": {
      "name": "Каліфорнія сніжний краб",
      "description": "норі, рис, вершковий сир, огірок, крабова паличка, кунжут"
    },
    "set-48": {
      "name": "Сет 48 шт.",
      "set_items": [
        "Футомакі лосось — 16 шт.",
        "Філадельфія лосось — 8 шт.",
        "Каліфорнія лосось — 8 шт.",
        "Каліфорнія креветка — 8 шт.",
        "Каліфорнія сніжний краб — 8 шт."
      ]
    },
    "set-72": {
      "name": "Сет 72 шт.",
      "set_items": [
        "Футомакі лосось — 24 шт.",
        "Філадельфія лосось — 16 шт.",
        "Каліфорнія лосось — 8 шт.",
        "Каліфорнія креветка — 16 шт.",
        "Каліфорнія сніжний краб — 8 шт."
      ]
    },
    "set-96": {
      "name": "Сет 96 шт.",
      "set_items": [
        "Футомакі лосось — 24 шт.",
        "Філадельфія лосось — 24 шт.",
        "Каліфорнія лосось — 8 шт.",
        "Каліфорнія креветка — 16 шт.",
        "Каліфорнія тамаго креветка — 16 шт.",
        "Каліфорнія сніжний краб — 8 шт."
      ]
    }
  },
  "en": {
    "chuka": {
      "description": "chuka seaweed 100 g + nut sauce 20 g"
    },
    "cal-tamago-shrimp": {
      "description": "nori, rice, cream cheese, tamago omelet, shrimp, sesame"
    },
    "cal-tuna": {
      "description": "nori, rice, cream cheese, cucumber, tuna, topped with tobiko"
    },
    "lava": {
      "description": "nori, rice, cream cheese, scallop, tobiko, mayonnaise"
    },
    "bonito": {
      "description": "nori, rice, cream cheese, cucumber, shrimp, topped with tuna flakes"
    },
    "phil-smoked": {
      "description": "nori, rice, cream cheese, cucumber, smoked salmon"
    },
    "phil-opalen": {
      "description": "nori, rice, cream cheese, cucumber, seared salmon"
    },
    "phil-salmon": {
      "description": "nori, rice, cream cheese, cucumber, salmon"
    },
    "phil-ikra": {
      "description": "nori, rice, cream cheese, cucumber, salmon, caviar"
    },
    "phil-shrimp": {
      "description": "nori, rice, cream cheese, cucumber, salmon, shrimp"
    },
    "drakon": {
      "description": "nori, rice, cream cheese, cucumber, eel"
    },
    "futomaki": {
      "description": "nori, rice, cucumber, salmon"
    },
    "veg": {
      "description": "nori, rice, cucumber, carrot"
    },
    "tartar-tuna": {
      "description": "nori, rice, tamago omelet, cucumber, spicy tuna, tobiko"
    },
    "maki-ogurec": {
      "description": "nori, rice, cucumber"
    },
    "tempura": {
      "description": "nori, rice, salmon, cucumber, batter, panko"
    },
    "cal-smoked": {
      "description": "nori, rice, cream cheese, cucumber, smoked salmon, sesame"
    },
    "cal-salmon": {
      "description": "nori, rice, cream cheese, cucumber, salmon, sesame"
    },
    "cal-shrimp": {
      "description": "nori, rice, cream cheese, cucumber, shrimp, sesame"
    },
    "cal-snow-crab": {
      "description": "nori, rice, cream cheese, cucumber, crab stick, sesame"
    },
    "midiyny": {
      "description": "nori, rice, cucumber, salmon, crab stick, mussel in wasabi mayo sauce, wasabi sesame"
    },
    "dabl-fish": {
      "description": "nori, rice, cream cheese, cucumber, tuna, salmon in spicy sauce, crispy onion, tobiko"
    },
    "gurme": {
      "description": "nori, rice, cucumber, tamago omelet, scallop, mango, truffle paste"
    },
    "phil-mango": {
      "description": "nori, rice, cream cheese, tamago omelet, salmon, mango sauce"
    },
    "gold-drakon": {
      "description": "nori, rice, cream cheese, avocado or tamago omelet, tobiko, eel, almond flakes"
    },
    "set-48": {
      "set_items": [
        "Futomaki Salmon - 16 pcs",
        "Philadelphia Salmon - 8 pcs",
        "California Salmon - 8 pcs",
        "California Shrimp - 8 pcs",
        "California Snow Crab - 8 pcs"
      ]
    },
    "set-72": {
      "set_items": [
        "Futomaki Salmon - 24 pcs",
        "Philadelphia Salmon - 16 pcs",
        "California Salmon - 8 pcs",
        "California Shrimp - 16 pcs",
        "California Snow Crab - 8 pcs"
      ]
    },
    "set-96": {
      "set_items": [
        "Futomaki Salmon - 24 pcs",
        "Philadelphia Salmon - 24 pcs",
        "California Salmon - 8 pcs",
        "California Shrimp - 16 pcs",
        "California Tamago Shrimp - 16 pcs",
        "California Snow Crab - 8 pcs"
      ]
    }
  },
  "he": {
    "chuka": {
      "description": "אצות צ'וקה 100 גרם + רוטב אגוזים 20 גרם"
    },
    "cal-tamago-shrimp": {
      "description": "נורי, אורז, גבינת שמנת, אומלט טמאגו, שרימפס, שומשום"
    },
    "cal-tuna": {
      "description": "נורי, אורז, גבינת שמנת, מלפפון, טונה, בציפוי טוביקו"
    },
    "lava": {
      "description": "נורי, אורז, גבינת שמנת, סקאלופ, טוביקו, מיונז"
    },
    "bonito": {
      "description": "נורי, אורז, גבינת שמנת, מלפפון, שרימפס, שבבי טונה"
    },
    "phil-smoked": {
      "description": "נורי, אורז, גבינת שמנת, מלפפון, סלמון מעושן"
    },
    "phil-opalen": {
      "description": "נורי, אורז, גבינת שמנת, מלפפון, סלמון צרוב"
    },
    "phil-salmon": {
      "description": "נורי, אורז, גבינת שמנת, מלפפון, סלמון"
    },
    "phil-ikra": {
      "description": "נורי, אורז, גבינת שמנת, מלפפון, סלמון, קוויאר"
    },
    "phil-shrimp": {
      "description": "נורי, אורז, גבינת שמנת, מלפפון, סלמון, שרימפס"
    },
    "drakon": {
      "description": "נורי, אורז, גבינת שמנת, מלפפון, צלופח"
    },
    "futomaki": {
      "description": "נורי, אורז, מלפפון, סלמון"
    },
    "veg": {
      "description": "נורי, אורז, מלפפון, גזר"
    },
    "tartar-tuna": {
      "description": "נורי, אורז, אומלט טמאגו, מלפפון, טונה בספייסי, טוביקו"
    },
    "maki-ogurec": {
      "description": "נורי, אורז, מלפפון"
    },
    "tempura": {
      "description": "נורי, אורז, סלמון, מלפפון, בלילה, פנקו"
    },
    "cal-smoked": {
      "description": "נורי, אורז, גבינת שמנת, מלפפון, סלמון מעושן, שומשום"
    },
    "cal-salmon": {
      "description": "נורי, אורז, גבינת שמנת, מלפפון, סלמון, שומשום"
    },
    "cal-shrimp": {
      "description": "נורי, אורז, גבינת שמנת, מלפפון, שרימפס, שומשום"
    },
    "cal-snow-crab": {
      "description": "נורי, אורז, גבינת שמנת, מלפפון, מקל סרטן, שומשום"
    },
    "midiyny": {
      "description": "נורי, אורז, מלפפון, סלמון, מקל סרטן, מולים ברוטב מיונז וואסבי, שומשום וואסבי"
    },
    "dabl-fish": {
      "description": "נורי, אורז, גבינת שמנת, מלפפון, טונה, סלמון ברוטב ספייסי, בצל קריספי, טוביקו"
    },
    "gurme": {
      "description": "נורי, אורז, מלפפון, אומלט טמאגו, סקאלופ, מנגו, ממרח כמהין"
    },
    "phil-mango": {
      "description": "נורי, אורז, גבינת שמנת, אומלט טמאגו, סלמון, רוטב מנגו"
    },
    "gold-drakon": {
      "description": "נורי, אורז, גבינת שמנת, אבוקדו או אומלט טמאגו, טוביקו, צלופח, שבבי שקדים"
    },
    "set-48": {
      "set_items": [
        "פוטומאקי סלמון - 16 יח׳",
        "פילדלפיה סלמון - 8 יח׳",
        "קליפורניה סלמון - 8 יח׳",
        "קליפורניה שרימפס - 8 יח׳",
        "קליפורניה קראב - 8 יח׳"
      ]
    },
    "set-72": {
      "set_items": [
        "פוטומאקי סלמון - 24 יח׳",
        "פילדלפיה סלמון - 16 יח׳",
        "קליפורניה סלמון - 8 יח׳",
        "קליפורניה שרימפס - 16 יח׳",
        "קליפורניה קראב - 8 יח׳"
      ]
    },
    "set-96": {
      "set_items": [
        "פוטומאקי סלמון - 24 יח׳",
        "פילדלפיה סלמון - 24 יח׳",
        "קליפורניה סלמון - 8 יח׳",
        "קליפורניה שרימפס - 16 יח׳",
        "קליפורניה טמאגו שרימפס - 16 יח׳",
        "קליפורניה קראב - 8 יח׳"
      ]
    }
  }
};
