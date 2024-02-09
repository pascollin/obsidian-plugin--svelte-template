import { ItemView, WorkspaceLeaf } from "obsidian";

import MyComponent from "./MyComponent.svelte";

export const VIEW_TYPE_EXAMPLE = "example-view";

export class MyView extends ItemView {
  component!: MyComponent;

  constructor(leaf: WorkspaceLeaf) {
    super(leaf);
  }

  getViewType() {
    return VIEW_TYPE_EXAMPLE;
  }

  getDisplayText() {
    return "Example view";
  }

  async onOpen() {
    this.component = new MyComponent({
      target: this.contentEl,
      props: {
        variable: 1
      }
    });
  }

  async onClose() {
    this.component.$destroy();
  }
}