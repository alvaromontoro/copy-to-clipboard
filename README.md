# Copy to clipboard

Copy to clipboard using pure JavaScript, without the need for Flash, or any plugin or library (although there is small jQuery version too, that you can see in the attached files or in the StackOverflow question).

## How it works

1. Creates a temporary hidden field.
2. Copies the content of the element to that field.
3. Selects the content of the field.
4. Executes the command copy like: `document.execCommand("copy")`.
5. Removes the temporary field.

## Browser support

The main issue is that not all browsers support this feature at the moment, but you can use it on the main ones from:

- Chrome 43
- Internet Explorer 10
- Firefox 41
- Safari 10

## Code in pure JavaScript

You can see demos of all these code in the attached project files and in this [answer in StackOverflow](https://stackoverflow.com/a/30905277/3695983). In these two versions, `innerHTML` is used so the content will be copied as a literal code (which is ok for the copy keeping format), but if you want to copy the text without the HTML tags, you can use `textContent`.

### Copy (not keeping format)

In this case, the field in which the content is copied is an input of type text (so the inner HTML tags if any, will be copied as is).

```
function copyToClipboard(elementId) {
  var aux = document.createElement("input");
  aux.setAttribute("value", document.getElementById(elementId).innerHTML);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
}
```

### Copy (keeping the format)

The main difference with the previous version is that instead of using a contenteditable div, thus preserving the formatting when copied.

```
function copy(element_id){
  var aux = document.createElement("div");
  aux.setAttribute("contentEditable", true);
  aux.innerHTML = document.getElementById(element_id).innerHTML;
  aux.setAttribute("onfocus", "document.execCommand('selectAll',false,null)"); 
  document.body.appendChild(aux);
  aux.focus();
  document.execCommand("copy");
  document.body.removeChild(aux);
}
```

## Read more

- [StackOverflow: Click button copy to clipboard using jQuery](https://stackoverflow.com/a/30905277/3695983)
- [StackOverflow en español: Copiar el contenido de un elemento al portapapeles usando JavaScript](https://es.stackoverflow.com/a/622/250)
- [MDN: Document.exeCommand()](https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand)
