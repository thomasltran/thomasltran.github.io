
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const MANPATH: string;
	export const TERM_PROGRAM: string;
	export const NODE: string;
	export const INIT_CWD: string;
	export const _P9K_TTY: string;
	export const PYENV_ROOT: string;
	export const npm_package_devDependencies_typescript: string;
	export const npm_package_devDependencies_i: string;
	export const npm_config_version_git_tag: string;
	export const TERM: string;
	export const SHELL: string;
	export const npm_package_devDependencies_vite: string;
	export const HOMEBREW_REPOSITORY: string;
	export const TMPDIR: string;
	export const npm_config_init_license: string;
	export const TERM_PROGRAM_VERSION: string;
	export const npm_package_scripts_dev: string;
	export const TERM_SESSION_ID: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const npm_package_private: string;
	export const npm_config_registry: string;
	export const ZSH: string;
	export const npm_package_readmeFilename: string;
	export const USER: string;
	export const npm_package_description: string;
	export const LS_COLORS: string;
	export const npm_package_scripts_check_watch: string;
	export const COMMAND_MODE: string;
	export const npm_package_devDependencies_mdsvex: string;
	export const npm_package_scripts_deploy: string;
	export const npm_package_devDependencies__sveltejs_adapter_static: string;
	export const SSH_AUTH_SOCK: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const npm_execpath: string;
	export const npm_package_devDependencies_tslib: string;
	export const PAGER: string;
	export const npm_package_devDependencies_svelte: string;
	export const LSCOLORS: string;
	export const PATH: string;
	export const npm_config_argv: string;
	export const _: string;
	export const npm_config_engine_strict: string;
	export const __CFBundleIdentifier: string;
	export const PWD: string;
	export const npm_package_scripts_preview: string;
	export const P9K_SSH: string;
	export const npm_lifecycle_event: string;
	export const P9K_TTY: string;
	export const LANG: string;
	export const npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
	export const npm_package_devDependencies__smui_button: string;
	export const npm_package_name: string;
	export const ITERM_PROFILE: string;
	export const npm_package_scripts_build: string;
	export const npm_config_version_commit_hooks: string;
	export const XPC_FLAGS: string;
	export const npm_config_bin_links: string;
	export const XPC_SERVICE_NAME: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_package_version: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const PYENV_SHELL: string;
	export const SHLVL: string;
	export const HOME: string;
	export const COLORFGBG: string;
	export const npm_package_dependencies_gh_pages: string;
	export const npm_package_type: string;
	export const npm_package_devDependencies__smui_layout_grid: string;
	export const LC_TERMINAL_VERSION: string;
	export const npm_package_devDependencies__smui_top_app_bar: string;
	export const npm_config_save_prefix: string;
	export const npm_config_strict_ssl: string;
	export const HOMEBREW_PREFIX: string;
	export const npm_config_version_git_message: string;
	export const ITERM_SESSION_ID: string;
	export const LESS: string;
	export const LOGNAME: string;
	export const YARN_WRAP_OUTPUT: string;
	export const npm_lifecycle_script: string;
	export const npm_config_version_git_sign: string;
	export const npm_config_ignore_scripts: string;
	export const npm_config_user_agent: string;
	export const INFOPATH: string;
	export const HOMEBREW_CELLAR: string;
	export const _P9K_SSH_TTY: string;
	export const LC_TERMINAL: string;
	export const DISPLAY: string;
	export const npm_config_init_version: string;
	export const npm_config_ignore_optional: string;
	export const npm_package_scripts_check: string;
	export const COLORTERM: string;
	export const npm_node_execpath: string;
	export const npm_config_version_tag_prefix: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		MANPATH: string;
		TERM_PROGRAM: string;
		NODE: string;
		INIT_CWD: string;
		_P9K_TTY: string;
		PYENV_ROOT: string;
		npm_package_devDependencies_typescript: string;
		npm_package_devDependencies_i: string;
		npm_config_version_git_tag: string;
		TERM: string;
		SHELL: string;
		npm_package_devDependencies_vite: string;
		HOMEBREW_REPOSITORY: string;
		TMPDIR: string;
		npm_config_init_license: string;
		TERM_PROGRAM_VERSION: string;
		npm_package_scripts_dev: string;
		TERM_SESSION_ID: string;
		npm_package_devDependencies__sveltejs_kit: string;
		npm_package_private: string;
		npm_config_registry: string;
		ZSH: string;
		npm_package_readmeFilename: string;
		USER: string;
		npm_package_description: string;
		LS_COLORS: string;
		npm_package_scripts_check_watch: string;
		COMMAND_MODE: string;
		npm_package_devDependencies_mdsvex: string;
		npm_package_scripts_deploy: string;
		npm_package_devDependencies__sveltejs_adapter_static: string;
		SSH_AUTH_SOCK: string;
		__CF_USER_TEXT_ENCODING: string;
		npm_execpath: string;
		npm_package_devDependencies_tslib: string;
		PAGER: string;
		npm_package_devDependencies_svelte: string;
		LSCOLORS: string;
		PATH: string;
		npm_config_argv: string;
		_: string;
		npm_config_engine_strict: string;
		__CFBundleIdentifier: string;
		PWD: string;
		npm_package_scripts_preview: string;
		P9K_SSH: string;
		npm_lifecycle_event: string;
		P9K_TTY: string;
		LANG: string;
		npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
		npm_package_devDependencies__smui_button: string;
		npm_package_name: string;
		ITERM_PROFILE: string;
		npm_package_scripts_build: string;
		npm_config_version_commit_hooks: string;
		XPC_FLAGS: string;
		npm_config_bin_links: string;
		XPC_SERVICE_NAME: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_package_version: string;
		npm_package_devDependencies_svelte_check: string;
		PYENV_SHELL: string;
		SHLVL: string;
		HOME: string;
		COLORFGBG: string;
		npm_package_dependencies_gh_pages: string;
		npm_package_type: string;
		npm_package_devDependencies__smui_layout_grid: string;
		LC_TERMINAL_VERSION: string;
		npm_package_devDependencies__smui_top_app_bar: string;
		npm_config_save_prefix: string;
		npm_config_strict_ssl: string;
		HOMEBREW_PREFIX: string;
		npm_config_version_git_message: string;
		ITERM_SESSION_ID: string;
		LESS: string;
		LOGNAME: string;
		YARN_WRAP_OUTPUT: string;
		npm_lifecycle_script: string;
		npm_config_version_git_sign: string;
		npm_config_ignore_scripts: string;
		npm_config_user_agent: string;
		INFOPATH: string;
		HOMEBREW_CELLAR: string;
		_P9K_SSH_TTY: string;
		LC_TERMINAL: string;
		DISPLAY: string;
		npm_config_init_version: string;
		npm_config_ignore_optional: string;
		npm_package_scripts_check: string;
		COLORTERM: string;
		npm_node_execpath: string;
		npm_config_version_tag_prefix: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
