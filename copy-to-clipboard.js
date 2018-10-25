function copyToClipboard(elementId) {
  // Get the element by its Id
  var el = document.getElementById(elementId)

  // Return unsuccessful if element not found
  if (!el) return false

  // Create a "hidden" input
  var aux = document.createElement("input");

  // Assign it the value of the specified element (that will be the inner HTML or the value it it's an input/textarea)
  aux.setAttribute("value", el.innerHTML || el.value);

  // Append it to the body
  document.body.appendChild(aux);

  // Highlight its content
  aux.select();

  // Copy the highlighted text
  var ok = document.execCommand("copy");

  // Remove it from the body
  document.body.removeChild(aux);

  // Return if successful or not
    return ok
}
