// TO DO LIST

var keypressed = document.getElementById('keypressed');
var newUL = document.createElement('ul')
var btn = document.getElementById('btn');


keypressed.onkeypress = (e) => {
    if (e.key == 'Enter') {
        var newLI = document.createElement('li');
        var txt = document.createTextNode(keypressed.value);
        var container = document.getElementById('container');
        
        newLI.appendChild(txt);
        newUL.appendChild(newLI);
        container.append(newUL);

        keypressed.value = "";

    } else {
       
    }

    newUL.style.listStyleType = "none";
    newLI.style.fontSize = "20px";
    newLI.style.padding = "20px";
    newLI.style.borderBottom = "1px solid #cac6c6"
}

btn.addEventListener('click', function () {
    newUL.textContent = "";
})
