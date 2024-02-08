import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightTypeDoc, { typeDocSidebarGroup } from "starlight-typedoc";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "🌊hainflow",
      social: {
        github: "https://github.com/edwinlzs/chainflow",
      },
      sidebar: [
        {
          label: "Guides",
          // items: [
            // Each item here is one entry in the navigation menu.
            // { label: "Get Started", link: "/guides/get-started/" },
          // ],
          autogenerate: { directory: "guides" },
        },
        // {
        //   label: "Reference",
        //   autogenerate: { directory: "reference" },
        // },
        typeDocSidebarGroup,
      ],
      plugins: [
        starlightTypeDoc({
          tsconfig: "../chainflow/tsconfig.json",
          entryPoints: ["../chainflow/src/core", "../chainflow/src/http"],
          typeDoc: {
            entryPointStrategy: "expand",
            exclude: ["**/*.test.ts", "**/logger.ts"],
          },
        }),
      ],
    }),
  ],
});
