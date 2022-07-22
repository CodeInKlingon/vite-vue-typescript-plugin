import { HelloWorld, WorldHello } from './components/index'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    HelloWorld: typeof  HelloWorld
    WorldHello: typeof WorldHello
  }
}