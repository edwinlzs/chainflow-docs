import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightTypeDoc, { typeDocSidebarGroup } from "starlight-typedoc";
import chainflowFrontmatter from "./src/plugins/ChainflowFrontmatter";
import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "🌊hainflow",
      description:
        "Lightweight and flexible API workflow library for TypeScript.",
      expressiveCode: {
        themes: ['dark-plus'],
        plugins: [
          pluginCollapsibleSections(),
        ],
        styleOverrides: {
          collapsibleSections: {
            closedBackgroundColor: '#FFFFFF12',
            closedTextColor: '#FFFFFF55',
          },
          textMarkers: {
            markBackground: '#FFFFFF17',
            markBorderColor: '#FFFFFF40',
          }
        },
      },
      social: {
        github: "https://github.com/edwinlzs/chainflow",
      },
      sidebar: [
        {
          label: "QUICKSTART",
          autogenerate: { directory: "quickstart" },
        },
        {
          label: "GUIDES",
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
      head: [
        {
          tag: "link",
          attrs: {
            href: "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&family=Sora:wght@300&display=swap",
            rel: "stylesheet",
          },
        },
      ],
      customCss: ["./src/styles/globals.css", "./src/styles/theme.css"],
      plugins: [
        starlightTypeDoc({
          tsconfig: "https://github.com/edwinlzs/chainflow/blob/main/tsconfig.json",
          entryPoints: ["https://github.com/edwinlzs/chainflow/blob/main/src/index.ts"],
          typeDoc: {
            entryPointStrategy: "resolve",
            exclude: ["**/*.test.ts", "**/logger.ts"],
            excludeInternal: true,
            // excludeReferences: true,
          },
          sidebar: {
            collapsed: true,
          }
        }),
        chainflowFrontmatter({
          docsDir: "./src/content/docs/api",
          frontmatter: {
            layout: "/src/layouts/DocsLayout.astro",
          },
        }),
      ],
    }),
  ],
});
