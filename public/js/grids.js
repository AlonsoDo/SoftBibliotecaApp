var IdMasterGrid = 0;
var IdDetailGrid = 0;


function IniMasterGrid(){
    
    $("#master").jqGrid({
        datatype: 'local',
        colModel: [
            { label: 'id', name: 'id', key: true, index: 'id', width: 60},            
            { label: 'Lote', name: 'IdLote', width: 60},
            { label: 'Socio', name: 'IdSocio', width: 60},
            { label: 'Nombre de Socio', name: 'NombreSocio', width: 420},
            { label: 'Fecha de Salida', name: 'FechaSalida', width: 140},
            { label: 'Fecha de Entrada', name: 'FechaEntrada', width: 144}
        ],
        gridComplete: function() {
            $('tr.jqgrow:even').addClass('myAltRowClass');
            $('tr.jqgrow:odd').addClass('myAltRowClass2');            
        },
        height: 110
    });    
        
}

function IniDetailGrid(){
    
    $("#detail").jqGrid({
        datatype: 'local',
        colModel: [
            { label: 'id', name: 'id', key: true, index: 'id', width: 60},
            { label: 'Lote', name: 'IdLote', width: 60},  
            { label: 'Socio', name: 'IdSocio', width: 60},
            { label: 'Libro', name: 'IdLibro', width: 60},
            { label: 'Titulo del Libro', name: 'TituloLibro', width: 360},
            { label: 'Fecha de Salida', name: 'FechaSalida', width: 140},
            { label: 'Fecha de Entrada', name: 'FechaEntrada', width: 144}
        ],        
        gridComplete: function() {
            $('tr.jqgrow:even').addClass('myAltRowClass');
            $('tr.jqgrow:odd').addClass('myAltRowClass2');            
        },
        height: 110
    });
        
}

