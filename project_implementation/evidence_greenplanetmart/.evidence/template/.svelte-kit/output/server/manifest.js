export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["apple-touch-icon.png","data/greenplanetmart/inventory_positions/inventory_positions.parquet","data/greenplanetmart/inventory_positions/inventory_positions.schema.json","data/greenplanetmart/order_fulfillment_items/order_fulfillment_items.parquet","data/greenplanetmart/order_fulfillment_items/order_fulfillment_items.schema.json","data/greenplanetmart/procurement_schedule_lines/procurement_schedule_lines.parquet","data/greenplanetmart/procurement_schedule_lines/procurement_schedule_lines.schema.json","data/greenplanetmart/reporting_readiness/reporting_readiness.parquet","data/greenplanetmart/reporting_readiness/reporting_readiness.schema.json","data/greenplanetmart/sales_billing_items/sales_billing_items.parquet","data/greenplanetmart/sales_billing_items/sales_billing_items.schema.json","data/manifest.json","favicon.ico","icon-192.png","icon-512.png","icon.svg"]),
	mimeTypes: {".png":"image/png",".json":"application/json",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.CVnSY4fc.js","app":"_app/immutable/entry/app.D3WkUS8t.js","imports":["_app/immutable/entry/start.CVnSY4fc.js","_app/immutable/chunks/entry.B_-faIPT.js","_app/immutable/chunks/scheduler.X7OS_J9P.js","_app/immutable/entry/app.D3WkUS8t.js","_app/immutable/chunks/preload-helper.D7HrI6pR.js","_app/immutable/chunks/scheduler.X7OS_J9P.js","_app/immutable/chunks/index.C6P9XCO6.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/12.js'))
		],
		routes: [
			{
				id: "/api/customFormattingSettings.json",
				pattern: /^\/api\/customFormattingSettings\.json\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/customFormattingSettings.json/_server.js'))
			},
			{
				id: "/api/prerendered_queries/[query_hash].arrow",
				pattern: /^\/api\/prerendered_queries\/([^/]+?)\.arrow\/?$/,
				params: [{"name":"query_hash","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/prerendered_queries/_query_hash_.arrow/_server.js'))
			},
			{
				id: "/api/settings.json",
				pattern: /^\/api\/settings\.json\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/settings.json/_server.js'))
			},
			{
				id: "/api/[route_hash]/[additional_hash]/all-queries.json",
				pattern: /^\/api\/([^/]+?)\/([^/]+?)\/all-queries\.json\/?$/,
				params: [{"name":"route_hash","optional":false,"rest":false,"chained":false},{"name":"additional_hash","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/_route_hash_/_additional_hash_/all-queries.json/_server.js'))
			},
			{
				id: "/explore/console",
				pattern: /^\/explore\/console\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/explore/schema",
				pattern: /^\/explore\/schema\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/settings",
				pattern: /^\/settings\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
