import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  canonical?: string;
}

const DEFAULT_TITLE = "SnapCuller — Fastest Photo Culling & RAW Sorting Software";
const DEFAULT_DESCRIPTION = "The fastest photo culling software for professional photographers. Instant RAW previews with zero import time.";
const DEFAULT_KEYWORDS = "photo culling software, RAW sorting, wedding photography, fast photo selection, Alternative to Narrative Select";
const DEFAULT_IMAGE = "https://snapculler.com/og-image.png";

export function SEO({ title, description, keywords, image, canonical }: SEOProps) {
  useEffect(() => {
    // Update Document Title
    const formattedTitle = title 
      ? `${title} | SnapCuller` 
      : DEFAULT_TITLE;
    
    document.title = formattedTitle;

    // Helper to update or create meta tags
    const updateMetaTag = (selector: string, attr: string, content: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        if (selector.startsWith('meta[name')) {
          element.setAttribute('name', selector.split('"')[1]);
        } else if (selector.startsWith('meta[property')) {
          element.setAttribute('property', selector.split('"')[1]);
        }
        document.head.appendChild(element);
      }
      element.setAttribute(attr, content);
    };

    // Update Meta Tags
    updateMetaTag('meta[name="description"]', 'content', description || DEFAULT_DESCRIPTION);
    updateMetaTag('meta[name="keywords"]', 'content', keywords || DEFAULT_KEYWORDS);
    
    // Update Canonical URL
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    const canonicalUrl = canonical || (window.location.origin + window.location.pathname);
    canonicalTag.setAttribute('href', canonicalUrl);

    // Update Open Graph tags
    updateMetaTag('meta[property="og:title"]', 'content', formattedTitle);
    updateMetaTag('meta[property="og:description"]', 'content', description || DEFAULT_DESCRIPTION);
    updateMetaTag('meta[property="og:url"]', 'content', window.location.href);
    updateMetaTag('meta[property="og:image"]', 'content', image || DEFAULT_IMAGE);

    // Update Twitter Tags
    updateMetaTag('meta[name="twitter:title"]', 'content', formattedTitle);
    updateMetaTag('meta[name="twitter:description"]', 'content', description || DEFAULT_DESCRIPTION);
    updateMetaTag('meta[name="twitter:image"]', 'content', image || DEFAULT_IMAGE);

  }, [title, description, keywords, image, canonical]);

  return null;
}
