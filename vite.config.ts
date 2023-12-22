import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ssr from "vite-plugin-ssr/plugin";
import { ssr as vikeSSR } from 'vike/plugin';

import vercel from 'vite-plugin-vercel'
import { vavite } from "vavite";

export default defineConfig(({ mode }) => {
	console.log("mode=", mode)
	return {
		buildSteps: [
			{ name: "client" },
			{
				name: "server",
				config: {
					build: { ssr: true },
				},
			},
		],
		server: {
			port: 4001,
			strictPort: true,
		},

		plugins: [
			vavite({
				serverEntry: "/server/index.ts",
				serveClientAssetsInDev: true,
			}),
			react(),
			mode == 'development' ? ssr({ prerender: true }) : vikeSSR({ prerender: true }),
			vercel()
		],
	}
});
