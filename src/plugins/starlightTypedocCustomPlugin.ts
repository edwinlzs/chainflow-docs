import fs from 'fs';

/** Custom plugin to inject a specific layout */
import type { StarlightPlugin } from "@astrojs/starlight/types"

export default function starlightTypedocCustomPlugin(): StarlightPlugin {
  return {
    name: 'starlight-typedoc-plugin',
    hooks: {
      async setup({ astroConfig, config, logger, updateConfig }) {
        injectLayout();
      },
    },
  }
}

const injectLayout = () => {

}

const findFiles = (
  currentDir: string,
  filter: (path: string) => boolean,
  callback: (filename: string, currentDir: string) => void,
) => {
  const paths = fs.readdirSync(currentDir);

  paths.forEach((path: string) => {
    const filename = `${currentDir}/${path}`;

    if (filter(path)) {
      return callback(filename, currentDir);
    }

    const stat = fs.lstatSync(filename);
    if (stat.isDirectory()) {
      findFiles(filename, filter, callback);
    }
  });
};