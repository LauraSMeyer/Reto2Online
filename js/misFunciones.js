function traerInformacion() {
    $.ajax({
        url: "https://g98777ccbc182a3-dbgastos.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/library/library",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarRespuesta(respuesta.items)

        }

    });

}

function pintarRespuesta(items) {

    let myTable = "<table>";
    for (i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].id + "</td>";
        myTable += "<td>" + items[i].target + "</td>";
        myTable += "<td>" + items[i].capacity + "</td>";
        myTable += "<td>" + items[i].category_id + "</td>";
        myTable += "<td>" + items[i].name + "</td>";
        myTable += "<td> <button onclick='borrarElemento(" + items[i].id + ")'>Borrar</button>";
        myTable += "</tr>"
    }
    myTable += "</table>";
    $("#resultado").append(myTable);
}

function guardarInformacion() {
    let myData = {
        id: $("#id").val(),
        target: $("#target").val(),
        capacity: $("#capacity").val(),
        category_id: $("#category_id").val(),
        name: $("#name").val(),

    };
 
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g98777ccbc182a3-dbgastos.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/library/library",
        type: "POST",
        data: myData,
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            $("#id").val("");
            $("#target").val("");
            $("#capacity").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformacion();
            alert("se ha guardado el dato")
        }
    });
}


function editarInformacion() {
    let myData = {
        id: $("#id").val(),
        target: $("#target").val(),
        capacity: $("#capacity").val(),
        category_id: $("#category_id").val(),
        name: $("#name").val(),

    };
    console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g98777ccbc182a3-dbgastos.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/library/library",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            $("#id").val("");
            $("#target").val("");
            $("#capacity").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformacion();
            alert("se ha actualizado")
        }
    });
}

function borrarElemento(idElemento) {
    //alert (idElemento);
    let myData = {
        id: idElemento
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g98777ccbc182a3-dbgastos.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/library/library",
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            traerInformacion();
            alert("Se ha eliminado.")
        }
    })
}