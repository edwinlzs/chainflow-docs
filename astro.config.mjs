import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightTypeDoc, { typeDocSidebarGroup } from "starlight-typedoc";
import chainflowFrontmatter from "./src/plugins/ChainflowFrontmatter";
import expressiveCode from "astro-expressive-code";

export default defineConfig({
  integrations: [
    starlight({
      title: "🌊hainflow",
      description:
        "Lightweight and flexible API workflow library for TypeScript.",
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
          autogenerate: { directory: "guides" },
        },
        {
          label: "BLOG",
          collapsed: true,
          autogenerate: { directory: "blog" },
        },
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
          tsconfig: "./chainflow.tsconfig.json",
          entryPoints: ["./node_modules/chainflow/dist/index.d.ts"],
          typeDoc: {
            entryPointStrategy: "resolve",
            exclude: ["**/*.test.ts", "**/logger.ts"],
            excludeInternal: true,
          },
          sidebar: {
            collapsed: true,
          },
        }),
        chainflowFrontmatter({
          docsDir: "./src/content/docs/api",
          frontmatter: {
            layout: "/src/layouts/DocsLayout.astro",
          },
        }),
      ],
    }),
    expressiveCode(),
  ],
});
