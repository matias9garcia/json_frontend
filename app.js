

$(document).ready(function() {
    $("#verClientesBoton").click(function(event) {
        event.preventDefault();

        $.ajax({
            url: "http://localhost:3000/clientes", // Replace with your API endpoint
            type: "GET",
            dataType: "json",
            success: function(response) {
                // Handle the response

                $("#lista_clientes").empty();

                alert("Mostrando los clientes!");

                $.each(response, function(index, item) {
                    var output = `
                        <li class="cliente">
                            <p>${item.nombre}</p>
                            <img src="${item.imagen}" alt="">
                            <p class="precio">Celular: ${item.telefono}</p>
                        </li>
                    `;

                    $("#lista_clientes").append(output);
                });
                console.log(response);
            },
            error: function(xhr, status, error) {
                // Handle the error
                console.error(error);
            }
        });
    });
});


$("#crearClienteBoton").click(function(event) {
    event.preventDefault();

    // Prepare client data
    var clienteData = {
        "imagen": "/assets/img/eddy.jpg",
        "nombre": $('#nombre_cliente').val(),
        "telefono": $('#telefono').val(),
        
        // Add more properties as needed
    };

    // Make POST request
    $.ajax({
        url: "http://localhost:3000/clientes",
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(clienteData),
        success: function(response) {
            // Handle the response
            alert(response);
            console.log(response);
        },
        error: function(xhr, status, error) {
            // Handle the error
            console.log(error);
        }
    });
});