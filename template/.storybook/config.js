import { configure } from "@storybook/preact";

function loadStories() {
  require("../stories");
}

configure(loadStories, module);