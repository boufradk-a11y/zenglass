import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site-config';

// Liste des villes pour le SEO local
export const targetCities = [
  'paris',
  'boulogne-billancourt',
  'saint-denis',
  'argenteuil',
  'montreuil',
  'nanterre',
  'vitry-sur-seine',
  'creteil',
  'aubervilliers',
  'asnieries-sur-seine',
  'colombes',
  'versailles',
  'aulnay-sous-bois',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const cityUrls = targetCities.map((city) => ({
    url: `${siteConfig.url}/ville/${city}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteConfig.url}${siteConfig.links.booking}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...cityUrls,
  ];
}
