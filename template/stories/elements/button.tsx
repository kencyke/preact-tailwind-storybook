import { storiesOf } from "@storybook/preact";
import { h } from "preact";

import "../styles/main.scss";

import Button from "../../src/elements/button";

storiesOf("Elements", module).add("Button", () => (
  <Button>Button</Button>
));
