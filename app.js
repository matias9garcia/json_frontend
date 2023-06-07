const botonMostrar = document.getElementById("verRefrisBoton")


botonMostrar.addEventListener("click", function(event)
    {
        event.preventDefault();

        let http = new XMLHttpRequest();

        http.open('get','productos.json', true);

        http.send();

        http.onload = function () {
            document.getElementById("lista_productos").innerHTML = "";
            if (this.readyState == 4 && this.status == 200) {

                let products = JSON.parse(this.responseText);
                
                alert("mostrando los refris!")
                for(let item of products){
                    var output = document.createElement("li");
                    output.innerHTML = `
                        <li class="producto">
                            <p>${item.titulo}</p>
                            <img src="${item.imagen}" alt="">
                            <p class="precio">$ ${item.precio}</p>
                            <p class="descripcion">${item.descripcion}</p>
                        </li>
                    `

                    document.getElementById("lista_productos").appendChild(output);
                }
            }

        }
    }
) 

