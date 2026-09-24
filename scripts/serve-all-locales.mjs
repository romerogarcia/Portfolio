// Local preview with BOTH languages, so the ES/EN button works like on GitHub Pages.
// `ng serve` can only serve one locale at a time, so instead we run `ng build --watch`
// (Spanish at /, English at /en/) and serve the output folder with a tiny static server.
import { spawn } from 'node:child_process';
import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { createRequire } from 'node:module';
import { extname, join, normalize, sep } from 'node:path';

const PORT = Number(process.env.PORT ?? 4200);
const ROOT = join(process.cwd(), 'dist', 'portfolio', 'browser');
const LOCALES = ['en']; // non-default locales, each served from /<locale>/

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.map': 'application/json',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
  '.txt': 'text/plain; charset=utf-8',
};

// 1. Build both locales and rebuild on every change.
const ngBin = createRequire(import.meta.url).resolve('@angular/cli/bin/ng.js');
const ng = spawn(process.execPath, [ngBin, 'build', '--configuration', 'all-locales', '--watch'], {
  stdio: 'inherit',
});
ng.on('exit', (code) => process.exit(code ?? 0));
process.on('SIGINT', () => ng.kill('SIGINT'));

// 2. Serve dist/, falling back to each locale's index.html.
function resolveFile(urlPath) {
  const safe = normalize(decodeURIComponent(urlPath)).replace(/^([/\\])+/, '');
  if (safe.split(sep).includes('..')) return null;
  const file = join(ROOT, safe);
  if (existsSync(file) && statSync(file).isFile()) return file;
  if (existsSync(join(file, 'index.html'))) return join(file, 'index.html');
  const locale = LOCALES.find((l) => urlPath === `/${l}` || urlPath.startsWith(`/${l}/`));
  return join(ROOT, locale ?? '', 'index.html');
}

createServer((req, res) => {
  const { pathname } = new URL(req.url ?? '/', 'http://localhost');
  if (LOCALES.some((l) => pathname === `/${l}`)) {
    res.writeHead(301, { Location: `${pathname}/` }).end();
    return;
  }
  const file = resolveFile(pathname);
  if (!file || !existsSync(file)) {
    res.writeHead(503, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Compilando… recarga en unos segundos.');
    return;
  }
  res.writeHead(200, {
    'Content-Type': TYPES[extname(file)] ?? 'application/octet-stream',
    'Cache-Control': 'no-store',
  });
  createReadStream(file).pipe(res);
}).listen(PORT, () => {
  console.log(`\n  Español: http://localhost:${PORT}/\n  English: http://localhost:${PORT}/en/\n`);
  console.log(
    '  (Tras guardar un cambio, espera a que termine la compilación y recarga la página.)\n',
  );
});
