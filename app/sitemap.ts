import { MetadataRoute } from 'next'
import { publicRoutes } from './seo'

export const dynamic = "force-static";
 
export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes
}