import { usedByBoth } from './chunk1.js';

var usedByB = {
	color: 'darkslateblue',
	message: 'this is only used by the main-b.js entry point, so will be bundled with it'
};

import("./apply-color-and-message.js").then(({ default: apply }) => {
	apply('#b [data-used-by="b"]', usedByB);
	apply('#b [data-used-by="both"]', usedByBoth);
});
//# sourceMappingURL=./main-b.js.map
