import test from 'node:test';
import {createRequire} from 'node:module';
import {fileURLToPath} from 'node:url';
import {build} from 'vite';
import {existsSync} from 'node:fs';
import assert from 'node:assert/strict';
import {heroMediaConfig} from '../src/config.js';

test('Ouverture : les médias locaux configurés existent réellement', () => {
  const paths = [heroMediaConfig.poster, ...heroMediaConfig.slides.map(slide=>slide.src)];
  for(const path of paths){
    if(path.startsWith('/'))assert.ok(existsSync(new URL('../public'+path, import.meta.url)), 'Média absent : '+path);
  }
});

test('Rendu React : routes, accueil, services et partenaires validés', async () => {
  const result = await build({
    root: fileURLToPath(new URL('../', import.meta.url)),
    configFile: false,
    logLevel: 'error',
    build: {
      ssr: 'tests/render-entry.jsx',
      write: false,
      rollupOptions: {output: {format: 'cjs'}},
    },
  });
  const entry = result.output.find(item => item.type === 'chunk' && item.isEntry);
  const module = {exports: {}};
  new Function('require', 'module', 'exports', entry.code)(createRequire(import.meta.url), module, module.exports);
});
