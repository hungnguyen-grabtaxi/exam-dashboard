/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_CLIENT_PORT: string;
	readonly VITE_API_BASE_URL: string;
	// more env variables...
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

interface AppEnv {
	readonly ENV: "production" | "staging" | "dev";
}

declare const __APP_ENV__: AppEnv;
