import DefaultTheme from "vitepress/theme";
import "./styles/custom.css";
import Layout from "./Layout.vue";

// export default DefaultTheme;

export default {
  extends: DefaultTheme,
  Layout,
};
