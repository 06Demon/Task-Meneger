import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// const VITE_API_URL = import.meta.env.VITE_API_URL;

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            "/api": {
                target: "http://127.0.0.1:8000",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ""),
            },
        },
    },
});
