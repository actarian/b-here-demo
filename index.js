const { serve } = require('b-here/server/main.js');

const app = serve({ dirname: __dirname, baseHref: '/b-here-demo/' });
