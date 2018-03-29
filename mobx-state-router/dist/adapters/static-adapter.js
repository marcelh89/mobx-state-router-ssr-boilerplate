"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var query_string_1 = require("query-string");
var router_store_1 = require("../router-store");
var match_url_1 = require("./match-url");
/**
 * Responsible for keeping the `RouterState` without sync with the Browser bar.
 */
var StaticAdapter = /** @class */ (function () {
    function StaticAdapter(routerStore) {
        var _this = this;
        this.goToLocation = function (location) {
            if (process.env.NODE_ENV === 'development') {
                console.log("HistoryAdapter.goToLocation(" + JSON.stringify(location) + ")");
            }
            // Find the matching route
            var routes = _this.routerStore.routes;
            var matchingRoute = null;
            var params = undefined;
            for (var i = 0; i < routes.length; i++) {
                var route = routes[i];
                params = match_url_1.matchUrl(location.pathname, route.pattern);
                if (params) {
                    matchingRoute = route;
                    break;
                }
            }
            if (matchingRoute) {
                return _this.routerStore.goTo(new router_store_1.RouterState(matchingRoute.name, params, query_string_1.parse(location.search)));
            }
            else {
                return _this.routerStore.goToNotFound();
            }
        };
        this.routerStore = routerStore;
    }
    return StaticAdapter;
}());
exports.StaticAdapter = StaticAdapter;
//# sourceMappingURL=static-adapter.js.map