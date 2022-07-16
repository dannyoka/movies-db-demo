require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || 3001;

function init() {
  app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`);
  });
}

init();
