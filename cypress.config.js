const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern:
      "../PruebaTecnicaRebus/cypress/integrations/pom/HomePrestaShop.cy.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
