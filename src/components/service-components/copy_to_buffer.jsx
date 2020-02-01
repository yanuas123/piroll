export function copyToBuffer(el) {
	if(document.createRange) {
		var range = document.createRange();
		range.selectNodeContents(el);
		var selection = window.getSelection();
		selection.removeAllRanges();
		selection.addRange(range);
		document.execCommand("copy", false, null);
		selection.removeAllRanges();
		return true;
	}
}