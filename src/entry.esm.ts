import * as components from "./components/index";
import "./components/global-components";

const myPlugin = {
    install(app: any, options: any) {
        Object.entries(components).forEach(([componentName, component]) => {
            componentName;
            app.component(component.name, component);
        });
    },
};

export default myPlugin;
