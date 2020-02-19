function wrap(execute) {
    //return modified funtion
    console.log("Entro a la funcion wrap!!");
}
var errorExec = wrap(function(e) {
    console.log("error al ejecutar");
    e.log("error");
    throw new Error('Error');
});
var resultExec = wrap(function(e) {
    return "result";
});
//console.log(errorExec && errorExec());
/*/console.log(errorExec && resultExec());
function setup(){
    var lista = document.querySelector("#listas").getElementsByClassName("lista");
    console.log(lista);
console.log(lista);
     for (var i = 0; i < lista.length; i++){
       // lista[i].addEventListener('click', function(){
            document.write(`<ul><li> ${[i]}${[lista.item.arguments]}  </li></ul>`);
            console.log("se ejecuto la function");
       // });
        console.log("entro a la function");
    }
}
setup();
/*
document.body.innerHTML = '<ul><li>A</li><li>B</li><li>C</li></ul>';
document.getElementsByTagName("li"[1].click());
console.log(document.body.innerHTML);*/

/*var buttones = document.querySelector(".button");
console.log(buttones);
buttones.addEventListener("click", function(){
    sort();
    console.log(sort());
    alert("botton");
});*/

function compare(a, b, c) {
    if (a.textContent < b.textContent && b.textContent > c.textContent) {
        alert(-1);
        console.log(-1);
        return -1;
    } else if (a.textContent > b.textContent && b.textContent < c.textContent) {
        alert(1);
        console.log(1);
        return 1;
    } else {
        console.log(0);
        alert(0);
        return 0;
    }
}
//var array_ordenado = un_array.sort(compare);
var arrayLIs = Array.prototype.slice.call(NodeList);

function sort() {
    var nodeList = document.querySelectorAll("li");
    var arrayLIs = Array.prototype.slice.call(nodeList);
    var objUL = document.querySelector("ul");
    var isAsc = true;
    if (!isAsc) {
        arrayLIs = arrayLIs.sort(compare);
        isAsc = true;
    } else {
        arrayLIs = arrayLIs.reverse();
        isAsc = false;
    }
    objUL.innerHTML = "";
    for (let i = 0; i < arrayLIs.length; i++) {
        objUL.appendChild(arrayLIs[i]);
    }
}

var li = document.getElementsByClassName(".listas");
for (let i = 0; i < li.length; i++) {
    const element = li[i];
    console.log(element);

}
console.log(li.length);