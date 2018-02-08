import usedByB from './used-by-b.js';
import usedByBoth from './used-by-both.js';

import('./dynamically-imported/apply-color-and-message.js').then(({ default: apply }) => {
	apply('#b [data-used-by="b"]', usedByB);
	apply('#b [data-used-by="both"]', usedByBoth);
});