
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/prestations"
  },
  {
    "renderMode": 2,
    "route": "/reservation"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "route": "/header"
  },
  {
    "renderMode": 2,
    "route": "/footer"
  },
  {
    "renderMode": 2,
    "route": "/en-construction"
  },
  {
    "renderMode": 2,
    "route": "/qui-suis-je"
  },
  {
    "renderMode": 2,
    "route": "/avis"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 814, hash: '21b4510e9cc6916ce17f86f509482b73678af658afebc27239d50969a781ecde', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1012, hash: 'ecb8e9af3e231601129c8ea585ec4f137c3b2096eceaf7fe6015e8af7b770587', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'prestations/index.html': {size: 9666, hash: '0c259e4e9d928b54d4f8771aaddd8f2548d6c3d831aa24f13331fa6e26161dbe', text: () => import('./assets-chunks/prestations_index_html.mjs').then(m => m.default)},
    'index.html': {size: 12550, hash: '403e2498bb6ea87a2c2908fbea5f8e1e005a83424d547d0c85aec69932970ab6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 8028, hash: '8bcf754ebd6bef3beba1e1e43a099d3bba3b529801ea411266a26af27f882f5f', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'reservation/index.html': {size: 8036, hash: '9e038c8a52a629cf3dc8f0643d79854f2466a97bf916d8d8e9c19e17e975933c', text: () => import('./assets-chunks/reservation_index_html.mjs').then(m => m.default)},
    'qui-suis-je/index.html': {size: 8035, hash: 'd46f5a63b6359a85de48d7b4252dcdddd1afbb30a70b8646ef160dbd563813f5', text: () => import('./assets-chunks/qui-suis-je_index_html.mjs').then(m => m.default)},
    'header/index.html': {size: 7278, hash: 'cf063440c3dbafecc612c8ae2fd7c5e1346270bcc327e1c045f28f3a686bb1dd', text: () => import('./assets-chunks/header_index_html.mjs').then(m => m.default)},
    'footer/index.html': {size: 6045, hash: 'f8211500147439ff1d80adb811db0ffaac3b6c912a0584e2e86226c7b1ed57d9', text: () => import('./assets-chunks/footer_index_html.mjs').then(m => m.default)},
    'avis/index.html': {size: 8021, hash: 'be479b9e220f1968214364a11039b26de236a75a0155316961f17427aab5b812', text: () => import('./assets-chunks/avis_index_html.mjs').then(m => m.default)},
    'en-construction/index.html': {size: 7979, hash: 'bbabd95deb4154cc51361c8593575ac0c9d219d5b26e55f4d39466880f145859', text: () => import('./assets-chunks/en-construction_index_html.mjs').then(m => m.default)},
    'styles-FGXOGJXM.css': {size: 455, hash: 'RBJ3ocI//s0', text: () => import('./assets-chunks/styles-FGXOGJXM_css.mjs').then(m => m.default)}
  },
};
