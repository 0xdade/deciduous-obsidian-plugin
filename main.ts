import { Plugin, MarkdownPostProcessorContext } from 'obsidian';
import * as jsyaml from 'js-yaml';
import { convertToDot } from 'deciduous/layout';
const { Graphviz } = require('@hpcc-js/wasm-graphviz');


export default class Deciduous extends Plugin {
	graphviz: typeof Graphviz;

	async renderDeciduousDiagram(
		source: string,
		el: HTMLElement,
		ctx: MarkdownPostProcessorContext
	) {
		try {
			const container = document.createElement("div");
			container.style.width = "100%";
			container.style.height = "auto";
			el.appendChild(container);
			const parsed = jsyaml.load(source)

			const { dot, types, title } = convertToDot(parsed);
			const currentSVG = this.graphviz.layout(dot, "svg", "dot");
			const svgElement = new DOMParser().parseFromString(currentSVG, "image/svg+xml").documentElement;
			svgElement.setAttribute("preserveAspectRatio", "xMidYMid meet");
			svgElement.setAttribute("width", "100%");
			svgElement.setAttribute("height", "100%");
			container.appendChild(svgElement)
		} catch (error) {
			console.error("Error rendering Deciduous diagram:", error);
			const errorMessage = document.createElement("pre");
			errorMessage.textContent = `Error: ${error.message}`;
			el.appendChild(errorMessage);
		}
	}

	async onload() {
		this.graphviz = await Graphviz.load();
		this.registerMarkdownCodeBlockProcessor(
			"deciduous",
			this.renderDeciduousDiagram.bind(this)
		);
	}

	onunload() {

	}
}
