export const siteConfig = {
  name: "Zen Glass",
  description: "Expert Pare-Brise - Réparation & Remplacement avec franchise offerte",
  url: "https://zen-glass.com", // À adapter selon le domaine
  phone: "06 66 63 81 58",
  phoneFull: "+33666638158",
  address: {
    street: "123 Rue de l'Expertise",
    city: "Paris",
    zip: "75000",
    region: "Île-de-France",
    country: "FR",
  },
  offers: {
    franchise: 200,
    gift: 200,
  },
  links: {
    booking: "/rendez-vous",
  },
} as const;
