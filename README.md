# Deciduous Obsidian Plugin

This is a simple markdown postprocessor plugin for [Obsidian.md](https://obsidian.md). It simply provides in-line local
rendering for [Deciduous](https://www.deciduous.app/) decision trees.

I don't intend to expand this plugin to support a ton of features, I like the simplicity of just rendering the markdown block as an svg.

The main area where I would consider extending the plugin is light/dark mode support. Right now it only renders black text on a white background, which looks bad in dark mode themes. I might also consider export to png/svg commands in the command palette.

## How to use

- Clone this repo.
- Make sure your NodeJS is at least v16 (`node --version`).
- `npm i` to install dependencies.
- `npm run dev` to start compilation in watch mode.

## Manually installing the plugin

- Copy over `main.js`, `styles.css`, `manifest.json` to your vault `VaultFolder/.obsidian/plugins/your-plugin-id/`.

## Adding your plugin to the community plugin list

- Check the [plugin guidelines](https://docs.obsidian.md/Plugins/Releasing/Plugin+guidelines).
- Publish an initial version.
- Make sure you have a `README.md` file in the root of your repo.
- Make a pull request at https://github.com/obsidianmd/obsidian-releases to add your plugin.

## API Documentation

See https://github.com/obsidianmd/obsidian-api
