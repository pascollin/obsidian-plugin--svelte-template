import { Notice, Plugin, PluginSettingTab, Setting } from "obsidian";
import { MyView, VIEW_TYPE_EXAMPLE } from "./MyView" ;

interface MyPluginSettings {
	mySetting: string;
}

const DEFAULT_SETTINGS: MyPluginSettings = {
	mySetting: 'default'
}

export default class MyPlugin extends Plugin {
	async onload() {
		const ribbonIconEl1 = this.addRibbonIcon('apple', 'Sample Plugin Notice', () => {
			new Notice('This is a notice!');
		});

		const ribbonIconEl2 = this.addRibbonIcon(
			"dice",
			"Sample Plugin View",
			async () => {
				this.registerView(VIEW_TYPE_EXAMPLE, (leaf) => new MyView(leaf));

				if (!this.app.workspace.getLeavesOfType(VIEW_TYPE_EXAMPLE).length) {
		
					this.app.workspace.detachLeavesOfType(VIEW_TYPE_EXAMPLE);
		
					await this.app.workspace.getLeftLeaf(false).setViewState({
						type: VIEW_TYPE_EXAMPLE,
						active: true,
					});
		
					this.app.workspace.revealLeaf(
						this.app.workspace.getLeavesOfType(VIEW_TYPE_EXAMPLE)[0]
					);
				}
		
		
			}
		);
	}

	onunload() {}
}
