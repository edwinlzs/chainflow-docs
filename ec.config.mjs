import { defineEcConfig } from "@astrojs/starlight/expressive-code";
import { pluginCollapsibleSections } from "@expressive-code/plugin-collapsible-sections";

export default defineEcConfig({
  themes: ["dark-plus"],
  plugins: [pluginCollapsibleSections()],
  styleOverrides: {
    collapsibleSections: {
      closedBackgroundColor: "#FFFFFF12",
      closedTextColor: "#FFFFFF55",
    },
    textMarkers: {
      markBackground: "#FFFFFF17",
      markBorderColor: "#FFFFFF40",
    },
  },
});
