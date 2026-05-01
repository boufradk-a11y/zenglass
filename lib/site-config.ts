export const siteConfig = {
  name: "Zen Glass",
  description: "Expert Pare-Brise - Réparation & Remplacement avec franchise offerte",
  url: "https://zenglass.fr", // À adapter selon le domaine
  phone: "01 23 45 67 89",
  phoneFull: "+33123456789",
  address: {
    street: "123 Rue de l'Expertise",
    city: "Paris",
    zip: "75000",
    region: "Île-de-France",
    country: "FR",
  },
  offers: {
    franchise: 150,
    gift: 200,
  },
  links: {
    booking: "/rendez-vous",
  },
} as const;
