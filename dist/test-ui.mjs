import { Input as o } from "element-ui";
const e = {
  name: "Input",
  data() {
    return {
      value: ""
    };
  },
  render(n) {
    return console.log("h", n), n(o);
  }
};
console.log("window", window);
export {
  e as TInput
};
//# sourceMappingURL=test-ui.mjs.map
