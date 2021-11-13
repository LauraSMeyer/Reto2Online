function traerInformacion1() {
    $.ajax({
        url: "https://g98777ccbc182a3-dbgastos.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/client/client",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarRespuesta1(respuesta.items)

        }

    });

}

function pintarRespuesta1(items) {

    let myTable = "<table>";
    for (i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].id + "</td>";
        myTable += "<td>" + items[i].name + "</td>";
        myTable += "<td>" + items[i].email + "</td>";
        myTable += "<td>" + items[i].age + "</td>";
        myTable += "<td> <button onclick='borrarElemento1(" + items[i].id + ")'>Borrar</button>";
        myTable += "</tr>"
    }
    myTable += "</table>";
    $("#resultado").append(myTable);
}

function guardarInformacion1() {
    let myData = {
        id: $("#id").val(),
        name: $("#name").val(),
        email: $("#email").val(),
        age: $("#age").val(),


    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g98777ccbc182a3-dbgastos.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/client/client",
        type: "POST",
        data: myData,
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacion1();
            alert("se ha guardado el dato")
        }
    });
}


function editarInformacion1() {
    let myData = {
        id: $("#id").val(),
        name: $("#name").val(),
        email: $("#email").val(),
        age: $("#age").val(),


    };
    console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g98777ccbc182a3-dbgastos.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/client/client",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacion1();
            alert("se ha actualizado")
        }
    });
}

function borrarElemento1(idElemento) {
    //alert (idElemento);
    let myData = {
        id: idElemento
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g98777ccbc182a3-dbgastos.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/client/client",
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            traerInformacion1();
            alert("Se ha eliminado.")
        }
    })
}