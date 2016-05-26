function copyToClipboard(elementId) {

  // Create a "hidden" input
  var aux = document.createElement("input");

  // Assign it the value of the specified element (that will be the inner HTML or the value it it's an input/textarea)
  aux.setAttribute("value", document.getElementById(elementId).innerHTML || document.getElementById(elementId).value);

  // Append it to the body
  document.body.appendChild(aux);

  // Highlight its content
  aux.select();

  // Copy the highlighted text
  document.execCommand("copy");

  // Remove it from the body
  document.body.removeChild(aux);

}