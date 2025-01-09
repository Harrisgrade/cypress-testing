import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    viewportHeight: 1080,
    viewportWidth: 1920,
    chromeWebSecurity: false,
    // baseUrl: "https://sparkfly.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
