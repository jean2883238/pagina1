window.onload = function () {
    // crea dinámicamente elementos HTML en una página vacía
    var div = document.createElement("div");
    var parrafo = document.createElement("p");
    var header = document.createElement("header");
    var parrafo2 = parrafo.cloneNode(true);
    var texto = document.createTextNode("Este es el segundo párrafo del div");

    parrafo.innerText = "Y continuamos aprendiendo";
    parrafo2.appendChild(texto);
    div.setAttribute('class','contenedorGeneral');
    header.setAttribute('class','cabecera');
    
    for (var i = 1; i < 4; i++) {
        var heading = document.createElement("h" + i);

        if (i === 1) {
            heading_text = document.createTextNode("Buscando soluciones. " + "h"+i);
        } else if (i === 2) {
            heading_text = document.createTextNode("Nuevos Retos. " +"h"+i);
        } else if (i === 3) {
            heading_text = document.createTextNode("Crear un Mundo mejor. " + "h" + i);
        }

        // Agregando el texto a h1, h2, h3
        heading.appendChild(heading_text);
        // Agregar el título al header
        header.appendChild(heading);
        // Agregando el header al body
        document.body.appendChild(heading);
    }

    // for (var i = 1; i < 4; i++) {
    //     var heading = document.createElement("h" + i);
    //     var heading_text = document.createTextNode("Web interactiva h" + i);
    //     // Agregando el texto a h1, h2, h3
    //     heading.appendChild(heading_text);
    //     // Agregar el título al header
    //     header.appendChild(heading);
    //     // Agregando el header al body
    //     document.body.appendChild(heading);
    // }

    // agregando párrafos al div
    div.appendChild(parrafo);
    div.insertBefore(parrafo2, parrafo);
    // agregando el div al body de html
    document.body.appendChild(div);
}