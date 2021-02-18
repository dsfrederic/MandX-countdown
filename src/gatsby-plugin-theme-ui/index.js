import merge from "lodash.merge";
import theme from "@rafaelquintanilha/gatsby-theme-countdown/src/gatsby-plugin-theme-ui/index";

export default merge({}, theme, {
  colors: {
    primary: "#0C2D1C",
    background: "#0C2D1C"
  },
  svg: {
    fill: "#00A300"
  }
})