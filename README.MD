Obsidian plugins developpment documentation width Svelte plugin as issue at current date. Applying their template and instruction doesn't produce a valid project. Build fails about tricky ts and esbuild errors.

This is my personnal Obsidian plugin template ready to use with Svelte components.

- It was initiated with npm create vite@latest
- Then i added some stuffs from Obsidiant plugin template https://github.com/obsidianmd/obsidian-sample-plugin.git, like esbuild.config.mjs and package.json
- Apply some advices form the obsidiant svelte documentation https://docs.obsidian.md/Plugins/Getting+started/Build+a+plugin and types param
- update depreciated compilerOptions: { css: true } to compilerOptions: { css: "injected" },
- update entrypoints (src/maints) and output (plugin/main.js) 
- Finally remove unuseful things and made some customisation :
    - create a src folder with basic main.ts + myview.ts + mycomponent.svelte
    - create a plugin directory then link it to an obsidian plugins subdirectory (having my code workspace inside the obsidian plugins directory was a bit strange to me)
- remove vite
- remove vite.config.ts
- remove "include" vite.config.ts from tsconfig.json
- add esbuild package
- run yarn dev