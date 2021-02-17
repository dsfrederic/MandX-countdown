import merge from "lodash.merge";
import theme from "@rafaelquintanilha/gatsby-theme-countdown/src/gatsby-plugin-theme-ui/index";

export default merge({}, theme, {
  colors: {
    primary: "#007500",
    background: "#007500"
  },
  svg: {
    fill: "#00A300"
  }
})