import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
	logo: (
		<>
			<img
				width={45}
				height={45}
				src="https://avatars.githubusercontent.com/u/105475254?v=4"
			/>
			<span>Sorber™ Consulting</span>
		</>
	),
	project: {
		link: "https://github.com/jsorb84",
	},
	chat: {
		link: "https://discord.gg/VnxWB5pZdH",
	},
	docsRepositoryBase: "https://github.com/jsorb84/jsorb84-docs",
	footer: {
		text: "J.R. Sorber - Sorber™ Enterprises 2023",
	},
};

export default config;
