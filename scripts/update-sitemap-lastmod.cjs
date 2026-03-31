const fs = require('fs');
const path = require('path');

const sitemapPath = path.join(__dirname, '..', 'src', 'sitemap.xml');
const today = new Date().toISOString().slice(0, 10);

if (!fs.existsSync(sitemapPath)) {
  console.error(`Sitemap not found at ${sitemapPath}`);
  process.exit(1);
}

const original = fs.readFileSync(sitemapPath, 'utf8');
const matches = original.match(/<lastmod>[^<]*<\/lastmod>/g) || [];
const updated = original.replace(/<lastmod>[^<]*<\/lastmod>/g, `<lastmod>${today}</lastmod>`);

if (updated !== original) {
  fs.writeFileSync(sitemapPath, updated, 'utf8');
  console.log(`Updated sitemap lastmod to ${today}`);
} else if (matches.length > 0) {
  console.log(`Sitemap lastmod is already up to date (${today})`);
} else {
  console.log('No <lastmod> tags found to update in sitemap.xml');
}
