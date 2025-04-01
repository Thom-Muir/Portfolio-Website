// Based on a example from W3Schools
// Source: https://www.w3schools.com/howto/howto_js_collapsible.asp

var coll = document.getElementsByClassName("collapse-header");
var i;

for (i = 0; i < coll.length; i++) {
	var content = coll[i].nextElementSibling;
    content.style.maxHeight = content.scrollHeight + "px";
	
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
