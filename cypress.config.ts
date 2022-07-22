import { defineConfig } from "cypress";

export default defineConfig({
    component: {
        specPattern: "**/*.spec.{js,ts,jsx,tsx}",
        devServer: {
            framework: "vue",
            bundler: "vite",
        },
    },
});
