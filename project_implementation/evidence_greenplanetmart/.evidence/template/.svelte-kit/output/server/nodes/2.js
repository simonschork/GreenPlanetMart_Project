import * as universal from '../entries/pages/explore/_layout.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/pages/explore/+layout.js";
export const imports = ["_app/immutable/nodes/2.LNt7lfa7.js","_app/immutable/chunks/index.rV6zwFgL.js","_app/immutable/nodes/3.DFfCqtsO.js","_app/immutable/chunks/scheduler.X7OS_J9P.js","_app/immutable/chunks/index.C6P9XCO6.js"];
export const stylesheets = [];
export const fonts = [];
