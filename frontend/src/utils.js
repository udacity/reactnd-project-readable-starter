export function isQueryFound (text, query) {
	if(text && text.toLowerCase().indexOf(query) !== -1) return true;
	return false;
}