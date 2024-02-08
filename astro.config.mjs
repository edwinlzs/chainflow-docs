import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightTypeDoc, { typeDocSidebarGroup } from 'starlight-typedoc'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Chainflow Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
						
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
        typeDocSidebarGroup,
			],
			plugins: [
        starlightTypeDoc({
					// out: "./src/content/api/",
						tsconfig: '../chainflow/tsconfig.json',
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
