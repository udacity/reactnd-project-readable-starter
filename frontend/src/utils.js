export function isQueryFound (text, query) {
	debugger
	if(text && text.toLowerCase().indexOf(query) !== -1) return true;
	return false;
}