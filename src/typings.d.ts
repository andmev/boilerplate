declare module "*.modules.css";
declare module "react-dom" {
  import { Root, RootOptions } from "react-dom/client";

  export function createRoot(
    container: Element | DocumentFragment,
    options?: RootOptions
  ): Root;
}
