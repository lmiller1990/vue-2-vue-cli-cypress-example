import { mount } from "@cypress/vue";
import UsingVuetify from "./UsingVuetify.vue";
import vuetify from "../plugins/vuetify";

it("renders a message", () => {
  mount(UsingVuetify, {
    vuetify
  }) 

  cy.get("button").contains("OK");
});
