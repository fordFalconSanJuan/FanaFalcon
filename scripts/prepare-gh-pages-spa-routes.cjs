const fs = require('fs');
const path = require('path');

const distRoot = path.join(__dirname, '..', 'dist', 'FanaFalcon', 'browser');
const indexPath = path.join(distRoot, 'index.html');
const notFoundPath = path.join(distRoot, '404.html');
const staticRoutes = ['galeria', 'albums'];

if (!fs.existsSync(indexPath)) {
  console.error(`Build output not found at ${indexPath}`);
  process.exit(1);
}

fs.copyFileSync(indexPath, notFoundPath);

for (const route of staticRoutes) {
  const routeDir = path.join(distRoot, route);
  const routeIndexPath = path.join(routeDir, 'index.html');

  fs.mkdirSync(routeDir, { recursive: true });
  fs.copyFileSync(indexPath, routeIndexPath);
}

console.log('Prepared 404 fallback and static route entry points for GitHub Pages');
