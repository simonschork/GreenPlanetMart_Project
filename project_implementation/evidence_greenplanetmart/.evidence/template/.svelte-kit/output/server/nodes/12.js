import * as universal from '../entries/pages/settings/_page.js';
import * as server from '../entries/pages/settings/_page.server.js';

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/settings/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/pages/settings/+page.js";
export { server };
export const server_id = "src/pages/settings/+page.server.js";
export const imports = ["_app/immutable/nodes/12.CNb2NWZZ.js","_app/immutable/chunks/scheduler.X7OS_J9P.js","_app/immutable/chunks/index.C6P9XCO6.js","_app/immutable/chunks/VennDiagram.svelte_svelte_type_style_lang.B6HDP7T7.js","_app/immutable/chunks/entry.DvGLmUxT.js","_app/immutable/chunks/preload-helper.D7HrI6pR.js","_app/immutable/chunks/index.rV6zwFgL.js","_app/immutable/chunks/Button.nQP6i-gE.js","_app/immutable/chunks/index.CqVitEmB.js","_app/immutable/chunks/AccordionItem.CPdCQ7TG.js","_app/immutable/chunks/Prismjs.gx6STe0B.js"];
export const stylesheets = ["_app/immutable/assets/VennDiagram.B5RdCTK2.css"];
export const fonts = [];
