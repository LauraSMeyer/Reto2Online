function traerInformacion2() {
    $.ajax({
        url: "https://g98777ccbc182a3-dbgastos.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/message/message",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarRespuesta2(respuesta.items)

        }

    });

}

function pintarRespuesta2(items) {

    let myTable = "<table>";
    for (i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].id + "</td>";
        myTable += "<td>" + items[i].messagetext + "</td>";
        myTable += "<td> <button onclick='borrarElemento2(" + items[i].id + ")'>Borrar</button>";
        myTable += "</tr>"
    }
    myTable += "</table>";
    $("#resultado").append(myTable);
}

function guardarInformacion2() {
    let myData = {
        id: $("#id").val(),
        messagetext: $("#messagetext").val(),



    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g98777ccbc182a3-dbgastos.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/message/message",
        type: "POST",
        data: myData,
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            $("#id").val("");
            $("#messagetext").val("");
            traerInformacion2();
            alert("se ha guardado el dato")
        }
    });
}


function editarInformacion2() {
    let myData = {
        id: $("#id").val(),
        messagetext: $("#messagetext").val(),


    };
    console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g98777ccbc182a3-dbgastos.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/message/message",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            $("#id").val("");
            $("#messagetext").val("");
            traerInformacion2();
            alert("se ha actualizado")
        }
    });
}

function borrarElemento2(idElemento) {
    //alert (idElemento);
    let myData = {
        id: idElemento
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g98777ccbc182a3-dbgastos.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/message/message",
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            traerInformacion2();
            alert("Se ha eliminado.")
        }
    })
}