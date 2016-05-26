function copyToClipboard(elementId) {
	// Create a "hidden" input
	var $temp = $("<input>");
	
	// Append it to the body
	$("body").append($temp);
	
	// Assign its value to the content of the specified element and select it
	$temp.val($(element).text()).select();
	
	// Copy the highlighted text
	document.execCommand("copy");
	
	// Remove it from the body
	$temp.remove();
}