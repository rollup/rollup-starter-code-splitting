System.register([], function (exports, module) {
'use strict';
return {
execute: function () {

var usedByBoth = exports('usedByBoth', {
	color: 'slategrey',
	message: 'this is used by both entry points, so will be put in its own chunk'
});

}
};
});
//# sourceMappingURL=./chunk1.js.map
