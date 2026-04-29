export default function sitemap() {
  return [
    { url: 'https://autodun.com', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://autodun.com/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://autodun.com/contact', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://autodun.com/blog', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
  ]
}
