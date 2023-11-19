import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
	server: {
		port: 8080,
		hmr: {
			host: "localhost",
			port: 8080,
		},
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	plugins: [react()],
	css: {
		devSourcemap: true,
	},
});
