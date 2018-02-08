import { usedByBoth } from './chunk1.js';

var usedByA = {
	color: 'darkslategray',
	message: 'this is only used by the main-a.js entry point, so will be bundled with it'
};

import("./apply-color-and-message.js").then(({ default: apply }) => {
	apply('#a [data-used-by="a"]', usedByA);
	apply('#a [data-used-by="both"]', usedByBoth);
});
//# sourceMappingURL=./main-a.js.map
