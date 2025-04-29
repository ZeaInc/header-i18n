import { Header_i18n_Data } from "..";

// types/codexteam-icons.d.ts
declare module "@codexteam/icons" {
  export const IconH1: any;
  export const IconH2: any;
  export const IconH3: any;
  export const IconH4: any;
  export const IconH5: any;
  export const IconH6: any;
  export const IconHeading: any;
}

declare module "@zeainc/editorjs-header-i18n" {
  import { BlockTool } from "@editorjs/editorjs";

  export default class Header_i18n implements BlockTool {
    save(block: HTMLDivElement): Header_i18n_Data;
    render(): HTMLElement;
  }
}
