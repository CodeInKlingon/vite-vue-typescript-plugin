import { HelloWorld, WorldHello } from "./index";

declare module "@vue/runtime-core" {
    export interface GlobalComponents {
        HelloWorld: typeof HelloWorld;
        WorldHello: typeof WorldHello;
    }
}
