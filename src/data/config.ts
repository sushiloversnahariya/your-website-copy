export const WHATSAPP_PHONE = "972536201760";
export const CONTACT_PHONE = "053-620-1760";
export const CONTACT_PHONE_RAW = "0536201760";
export const CONTACT_EMAIL = "sushiloversnahariya@gmail.com";
export const GOOGLE_MAPS_URL = "https://maps.google.com/?cid=2075951431049223728";
export const GOOGLE_REVIEW_URL = "https://g.page/r/CTAep-LTQs8cEB0/review";

export const SOCIAL_LINKS = [
  { id: "whatsapp", href: "https://wa.me/972536201760", label: "WhatsApp" },
  { id: "instagram", href: "https://www.instagram.com/sushi_lovers_nahariya/", label: "Instagram" },
  { id: "facebook", href: "https://www.facebook.com/sushiloversnahariya", label: "Facebook" },
];

export type CityId = "nahariya" | "akko" | "maalot";

export const DELIVERY_ZONES: Record<CityId, { min: number; fee: number }> = {
  nahariya: { min: 200, fee: 30 },
  akko: { min: 250, fee: 50 },
  maalot: { min: 350, fee: 60 },
};

export const PICKUP_MIN = 70;

export type ExtraOption = {
  id: string;
  labelKey: string;
  price: number;
  grams: string | null;
  available: boolean;
};

export const EXTRAS: ExtraOption[] = [
  { id: "sticks", labelKey: "extra_sticks", price: 0, grams: null, available: true },
  { id: "soy", labelKey: "extra_soy", price: 1, grams: "13", available: true },
  { id: "teriyaki", labelKey: "extra_teriyaki", price: 2, grams: "15", available: true },
  { id: "spicy", labelKey: "extra_spicy", price: 2, grams: "15", available: true },
  { id: "wasabi", labelKey: "extra_wasabi", price: 1, grams: "2.5", available: true },
  { id: "ginger", labelKey: "extra_ginger", price: 1, grams: "10", available: true },
];

export const PAYMENT_METHODS = [
  { id: "paybox", labelKey: "payment_paybox", emoji: "💳" },
  { id: "cash", labelKey: "payment_cash", emoji: "💵" },
] as const;

export const TIME_SLOTS = ["10:00-13:00", "13:00-16:00", "16:00-19:00"];
export const TIME_SLOTS_SATURDAY = ["14:00-16:00", "16:00-19:00"];

export const GALLERY_IMAGES = Array.from({ length: 9 }, (_, i) => `/gallery/${i + 1}.webp`);

export const REVIEWS = [
  { id: "irina", name: "Ирина Пуляркина", rating: 5, textKey: "review_irina" },
  { id: "anastasiia", name: "Anastasiia Lishchinskyi", rating: 5, textKey: "review_anastasiia" },
  { id: "alexey", name: "Alexey Antipov", rating: 5, textKey: "review_alexey" },
  { id: "kfar-vradim", name: "Kfar Vradim", rating: 5, textKey: "review_kfar_vradim" },
  { id: "kate", name: "Kate Moreva", rating: 5, textKey: "review_kate" },
  { id: "sofi", name: "Sofi Timonina", rating: 5, textKey: "review_sofi" },
  { id: "inna", name: "Inna Vaisblat", rating: 5, textKey: "review_inna" },
  { id: "polina", name: "Polina Vinogradov", rating: 5, textKey: "review_polina" },
];

const IMAGE_BY_FILENAME: Record<string, string> = {
  "cal-tuna.jpg": "/menu-fast/california-tuna.webp",
  "cal-smoked.jpg": "/menu-fast/california-smoked-salmon.webp",
  "cal-shrimp.jpg": "/menu-fast/california-shrimp.webp",
  "cal-tamago-shrimp.jpg": "/menu-fast/california-tamago-shrimp-upload.webp",
  "phil-smoked.jpg": "/menu-fast/philadelphia-smoked-salmon.webp",
  "futomaki.jpg": "/menu-fast/futomaki-salmon.webp",
  "chuka.jpg": "/menu-fast/chuka-salad.webp",
  "maki-ogurec.jpg": "/menu-fast/cucumber-maki.webp",
  "tartar-tuna.jpg": "/menu-fast/tuna-tartare.webp",
  "midiyny.jpg": "/menu-fast/mussel-roll.webp",
  "gurme.jpg": "/menu-fast/gourmet.webp",
  "phil-mango.jpg": "/menu-fast/philadelphia-salmon-mango.webp",
  "gold-drakon.jpg": "/menu-fast/golden-dragon.webp",
  "losos.jpg": "/menu-fast/nigiri-salmon.webp",
  "losos-opalen.jpg": "/menu-fast/nigiri-seared-salmon.webp",
  "ugor.jpg": "/menu-fast/nigiri-eel.webp",
};

const IMAGE_BY_SLUG: Record<string, string> = {
  lava: "/menu-fast/13-lava.webp",
  bonito: "/menu-fast/16-bonito.webp",
  "phil-opalen": "/menu-fast/17-phil-opalen.webp",
  "phil-salmon": "/menu-fast/18-phil-salmon.webp",
  "phil-ikra": "/menu-fast/14-phil-ikra.webp",
  "phil-shrimp": "/menu-fast/15-phil-shrimp.webp",
  drakon: "/menu-fast/20-drakon.webp",
  veg: "/menu-fast/07-veg.webp",
  tempura: "/menu-fast/22-tempura.webp",
  "cal-salmon": "/menu-fast/21-cal-salmon.webp",
  "cal-snow-crab": "/menu-fast/26-cal-snow-crab.webp",
  "dabl-fish": "/menu-fast/28-dabl-fish.webp",
  "set-48": "/menu-fast/30-set-48.webp",
  "set-72": "/menu-fast/32-set-72.webp",
  "set-96": "/menu-fast/31-set-96.webp",
};

export function resolveImage(slug: string, imageUrl: string | null): string | null {
  const filename = imageUrl?.split("/").pop()?.split("?")[0];
  return (filename && IMAGE_BY_FILENAME[filename]) || IMAGE_BY_SLUG[slug] || imageUrl || null;
}
