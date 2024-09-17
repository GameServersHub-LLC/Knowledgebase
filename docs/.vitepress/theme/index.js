import DefaultTheme from "vitepress/theme";
import "./styles/custom.css";
import Layout from "./layout.vue";

// export default DefaultTheme;

export default {
  extends: DefaultTheme,
  Layout,
};
