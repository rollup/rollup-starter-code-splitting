import usedByA from './used-by-a.js';
import usedByBoth from './used-by-both.js';

import('./dynamically-imported/apply-color-and-message.js').then(({ default: apply }) => {
	apply('#a [data-used-by="a"]', usedByA);
	apply('#a [data-used-by="both"]', usedByBoth);
});