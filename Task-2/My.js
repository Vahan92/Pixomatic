function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  document.getElementById("add").onclick  = function() {
    var ol = document.getElementById("sortTrue");
    var node = document.createElement("Li");
    node.className = "list-group-item";
    var text = document.getElementById("user_input").value;
    if (text.length==0) {
      alert("Please enter a name");
    } else {
    var textnode=document.createTextNode(text);
    document.getElementById("user_input").value = '';
    node.appendChild(textnode);
    node.style.color = getRandomColor();
    ol.appendChild(node);
    console.log(ol.children.length);
    console.log(node);
    if (ol.children.length<7) {
        ol.style.display = "none";
    } else {
      ol.style.display = "initial";
    }
  }
}

// sort: true
Sortable.create(sortTrue, {
  group: "sorting",
  sort: true
});

