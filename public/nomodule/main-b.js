System.register(['./chunk1.js'], function (exports, module) {
'use strict';
var usedByBoth;
return {
setters: [function (module) {
usedByBoth = module.usedByBoth;
}],
execute: function () {

var usedByB = exports('null', {
	color: 'darkslateblue',
	message: 'this is only used by the main-b.js entry point, so will be bundled with it'
});

module.import("./apply-color-and-message.js").then(({ default: apply }) => {
	apply('#b [data-used-by="b"]', usedByB);
	apply('#b [data-used-by="both"]', usedByBoth);
});

}
};
});
//# sourceMappingURL=./main-b.js.map
