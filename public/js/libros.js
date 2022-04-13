var LibroIndex = 0;
var aLibros = [];
var UpdateModeLibro = 'Update';

var BufferLibroTitulo;
var BufferLibroAutor;
var BufferLibroEditorial;
var BufferLibroFechaAlta;
var BufferLibroIdiomaOriginal;
var BufferLibroDiasPermitidos;
var BufferLibroCode;

function BufferingLibroData(){
    BufferLibroTitulo = $('#titulolibro').val();
    BufferLibroAutor = $('#autorlibro').val();
    BufferLibroEditorial = $('#editoriallibro').val();
    BufferLibroFechaAlta = $('#fechaaltalibro').val();
    BufferLibroIdiomaOriginal = $('#idiomaoriginallibro').val();
    BufferLibroDiasPermitidos = $('#diaspermitidoslibro').val();
    BufferLibroCode = $('#codelibro').val();
};

function ActiveLibro() {
    $('#codelibro').val(aLibros[LibroIndex].IdLibro);
    $('#titulolibro').val(aLibros[LibroIndex].Titulo);
    $('#autorlibro').val(aLibros[LibroIndex].Autor);
    $('#editoriallibro').val(aLibros[LibroIndex].Editorial);
    $('#fechaaltalibro').val(aLibros[LibroIndex].FechaDeAlta.substring(0, 10));
    $('#idiomaoriginallibro').val(aLibros[LibroIndex].IdiomaOriginal);    
    $('#diaspermitidoslibro').val(aLibros[LibroIndex].DiasPermitidos);    
}

function NuevoLibro(){
    $('#titulolibro').val('');
    $('#autorlibro').val('');
    $('#editoriallibro').val('');
    $('#fechaaltalibro').val('');
    $('#idiomaoriginallibro').val('');
    $('#diaspermitidoslibro').val('');
    $('#codelibro').val('');    
}

function ResetLibro(){
    $('#titulolibro').val(BufferLibroTitulo);
    $('#autorlibro').val(BufferLibroAutor);
    $('#editoriallibro').val(BufferLibroEditorial);
    $('#fechaaltalibro').val(BufferLibroFechaAlta);
    $('#idiomaoriginallibro').val(BufferLibroIdiomaOriginal);
    $('#diaspermitidoslibro').val(BufferLibroDiasPermitidos);
    $('#codelibro').val(BufferLibroCode);
}

function CrearLibro(){
    
    $.ajax({
	statusCode:{500:function(){
                if (($('#colortitulo').attr('class'))=='modal-header modal-header-info'){
                    $('#colortitulo').removeClass('modal-header modal-header-info').addClass('modal-header modal-header-warning');  
                }                
                $('#mensage').text('Error con el Servidor');
                $('#titulo').text('Atenction!');
                $('#dialoginfo').modal({
                    backdrop:'static',
                    keyboard:false  
                }); 
            }
        },        
        url: 'http://localhost:3000/nuevolibro',                    
        type: 'post',
        contentType: 'application/json; charset=utf-8',
	data: JSON.stringify({TituloLibro:$('#titulolibro').val(),AutorLibro:$('#autorlibro').val(),
                                     EditorialLibro:$('#editoriallibro').val(),FechaAltaLibro:$('#fechaaltalibro').val(),
                                     IdiomaOriginalLibro:$('#idiomaoriginallibro').val(),DiasPermitidosLibro:$('#diaspermitidoslibro').val()
                                     }),
        success: function(data){
            $('#codelibro').val(data.insertId);            
             
            aLibros.push({Titulo:$('#titulolibro').val(),Autor:$('#autorlibro').val(),
                                Editorial:$('#editoriallibro').val(),FechaDeAlta:$('#fechaaltalibro').val(),
                                IdiomaOriginal:$('#idiomaoriginallibro').val(),DiasPermitidos:$('#diaspermitidoslibro').val(),
                                IdLibro:$('#codelibro').val()});            
            
            LibroIndex = aLibros.length - 1;
            
            if (($('#colortitulo').attr('class'))=='modal-header modal-header-warning'){
                $('#colortitulo').removeClass('modal-header modal-header-warning').addClass('modal-header modal-header-info'); 
            } 
            $('#mensage').text('Nuevo Libro Creado');
            $('#titulo').text('Informacion');
            $('#dialoginfo').modal({
                backdrop:'static',
                keyboard:false  
            });
            
            UpdateModeLibro = 'Update';
            
            BufferingLibroData();
                        
            $('#DeleteLibro').prop('disabled',false);
            if (aLibros.length>1){
               $('#IniLibro').prop('disabled',false);
               $('#PrevLibro').prop('disabled',false); 
            }
            $('#CargarLibro').prop('disabled',false); 
        },                    
        error: function(error){
            if (($('#colortitulo').attr('class'))=='modal-header modal-header-info'){
                $('#colortitulo').removeClass('modal-header modal-header-info').addClass('modal-header modal-header-warning'); 
            } 
            $('#mensage').text('Error con el Servidor');
            $('#titulo').text('Atencion!       ');
            $('#dialoginfo').modal({
                backdrop:'static',
                keyboard:false  
            });
            $('#CargarLibro').prop('disabled',true);
        }
    });
    
}

function UpdateLibro(){
        
    $.ajax({
	statusCode:{500:function(){
                if (($('#colortitulo').attr('class'))=='modal-header modal-header-info'){
                    $('#colortitulo').removeClass('modal-header modal-header-info').addClass('modal-header modal-header-warning');  
                }                
                $('#mensage').text('Error con el servidor');
                $('#titulo').text('Atencion!');
                $('#dialoginfo').modal({
                    backdrop:'static',
                    keyboard:false  
                }); 
            }
        },
        url: 'http://localhost:3000/updatelibro',                    
        type: 'put',
        contentType: 'application/json; charset=utf-8',
	data: JSON.stringify({TituloLibro:$('#titulolibro').val(),AutorLibro:$('#autorlibro').val(),
                                     EditorialLibro:$('#editoriallibro').val(),FechaAltaLibro:$('#fechaaltalibro').val(),
                                     IdiomaOriginalLibro:$('#idiomaoriginallibro').val(),DiasPermitidosLibro:$('#diaspermitidoslibro').val(),
                                     CodeLibro:$('#codelibro').val()
                                     }),            
        success: function(data){
            
            aLibros[LibroIndex].IdLibro = $('#codelibro').val();
            aLibros[LibroIndex].Titulo = $('#titulolibro').val();
            aLibros[LibroIndex].Autor = $('#autorlibro').val();            
            aLibros[LibroIndex].Editorial = $('#editoriallibro').val();            
            aLibros[LibroIndex].FechaDeAlta = $('#fechaaltalibro').val();            
            aLibros[LibroIndex].IdiomaOriginal = $('#idiomaoriginallibro').val();            
            aLibros[LibroIndex].DiasPermitidos = $('#diaspermitidoslibro').val();
            
            BufferingLibroData();            
            
            if (($('#colortitulo').attr('class'))=='modal-header modal-header-warning'){
                $('#colortitulo').removeClass('modal-header modal-header-warning').addClass('modal-header modal-header-info'); 
            }            
            $('#mensage').text('Libro actualizado');
            $('#titulo').text('Informacion');
            $('#dialoginfo').modal({
                backdrop:'static',
                keyboard:false  
            });            
        },                    
        error: function(error){
            if (($('#colortitulo').attr('class'))=='modal-header modal-header-info'){
                $('#colortitulo').removeClass('modal-header modal-header-info').addClass('modal-header modal-header-warning'); 
            } 
            $('#mensage').text('Error con el servidor');
            $('#titulo').text('Atencion!');
            $('#dialoginfo').modal({
                backdrop:'static',
                keyboard:false  
            });                        
        }
    });
}

function BuscarLibro() {
    
    var OrderSearch = $('#buscarlibro option:selected').val();
    var ContentSearch = $('#contentbuscarlibro').val();
    
    $.ajax({
	statusCode:{500:function(){
                if (($('#colortitulo').attr('class'))=='modal-header modal-header-info'){
                    $('#colortitulo').removeClass('modal-header modal-header-info').addClass('modal-header modal-header-warning');  
                }                
                $('#mensage').text('Error con el Servidor');
                $('#titulo').text('Atenction!      ');
                $('#dialoginfo').modal({
                    backdrop:'static',
                    keyboard:false  
                }); 
            }
        },        
        url: 'http://localhost:3000/buscarlibro',                    
        type: 'post',
        contentType: 'application/json; charset=utf-8',
	data: JSON.stringify({ContentSearch:ContentSearch,OrderSearch:OrderSearch
                                    }),
        success: function(data){
            
            aLibros = eval(data);
            
            if (aLibros.length == 0) {
                if (($('#colortitulo').attr('class'))=='modal-header modal-header-info'){
                    $('#colortitulo').removeClass('modal-header modal-header-info').addClass('modal-header modal-header-warning'); 
                } 
                $('#mensage').text('Ningun Libro Encontrado');
                $('#titulo').text('Atencion!');
                $('#dialoginfo').modal({
                    backdrop:'static',
                    keyboard:false                    
                });
                $('#DeleteLibro').prop('disabled',true);
                $('#NextLibro').prop('disabled',true);
                $('#EndLibro').prop('disabled',true);
                $('#IniLibro').prop('disabled',true);
                $('#PrevLibro').prop('disabled',true);
                $('#ResetLibro').prop('disabled',true);
                $('#SaveLibro').prop('disabled',true);
            }else{
                if (($('#colortitulo').attr('class'))=='modal-header modal-header-warning'){
                    $('#colortitulo').removeClass('modal-header modal-header-warning').addClass('modal-header modal-header-info'); 
                } 
                $('#mensage').text('Nuevo(s) Libro(s) Cargado(s)');
                $('#titulo').text('Informacion');
                $('#dialoginfo').modal({
                    backdrop:'static',
                    keyboard:false  
                });
                LibroIndex = 0;
                ActiveLibro();
                BufferingLibroData();
                $('#CargarLibro').prop('disabled',false);
                $('#DeleteLibro').prop('disabled',false);
                $('#NextLibro').prop('disabled',false);
                $('#EndLibro').prop('disabled',false);
                if (aLibros.length == 1) {
                    $('#NextLibro').prop('disabled',true);
                    $('#EndLibro').prop('disabled',true);
                    $('#PrevLibro').prop('disabled',true);
                    $('#IniLibro').prop('disabled',true);                    
                }
            }            
        },                    
        error: function(error){
            if (($('#colortitulo').attr('class'))=='modal-header modal-header-info'){
                $('#colortitulo').removeClass('modal-header modal-header-info').addClass('modal-header modal-header-warning'); 
            } 
            $('#mensage').text('Error con el Servidor');
            $('#titulo').text('Atencion!');
            $('#dialoginfo').modal({
                backdrop:'static',
                keyboard:false  
            });                        
        }
    });    
}

function BuscarLibroFiltro() {
    
    var OrderSearch = $('#buscarlibro option:selected').val();
    var ContentSearch = $('#contentbuscarlibro').val();
    
    $.ajax({
	statusCode:{500:function(){
                if (($('#colortitulo').attr('class'))=='modal-header modal-header-info'){
                    $('#colortitulo').removeClass('modal-header modal-header-info').addClass('modal-header modal-header-warning');  
                }                
                $('#mensage').text('Error con el Servidor');
                $('#titulo').text('Atenction!      ');
                $('#dialoginfo').modal({
                    backdrop:'static',
                    keyboard:false  
                }); 
            }
        },        
        url: 'http://localhost:3000/buscarlibrofiltro',                    
        type: 'post',
        contentType: 'application/json; charset=utf-8',
	data: JSON.stringify({ContentSearch:ContentSearch,OrderSearch:OrderSearch
                                    }),
        success: function(data){
            
            aLibros = eval(data);
            
            if (aLibros.length == 0) {
                if (($('#colortitulo').attr('class'))=='modal-header modal-header-info'){
                    $('#colortitulo').removeClass('modal-header modal-header-info').addClass('modal-header modal-header-warning'); 
                } 
                $('#mensage').text('Ningun Libro Encontrado');
                $('#titulo').text('Atencion!');
                $('#dialoginfo').modal({
                    backdrop:'static',
                    keyboard:false                    
                });
                $('#DeleteLibro').prop('disabled',true);
                $('#NextLibro').prop('disabled',true);
                $('#EndLibro').prop('disabled',true);
                $('#IniLibro').prop('disabled',true);
                $('#PrevLibro').prop('disabled',true);
                $('#ResetLibro').prop('disabled',true);
                $('#SaveLibro').prop('disabled',true);
                //$('#SalvarDetailGrid').prop('disabled',true);
            }else{
                if (($('#colortitulo').attr('class'))=='modal-header modal-header-warning'){
                    $('#colortitulo').removeClass('modal-header modal-header-warning').addClass('modal-header modal-header-info'); 
                } 
                $('#mensage').text('Nuevo(s) Libro(s) Cargado(s)');
                $('#titulo').text('Informacion');
                $('#dialoginfo').modal({
                    backdrop:'static',
                    keyboard:false  
                });
                LibroIndex = 0;
                ActiveLibro();
                BufferingLibroData();
                $('#CargarLibro').prop('disabled',false);
                //$('#SalvarDetailGrid').prop('disabled',false);
                $('#DeleteLibro').prop('disabled',false);
                $('#NextLibro').prop('disabled',false);
                $('#EndLibro').prop('disabled',false);
                if (aLibros.length == 1) {
                    $('#NextLibro').prop('disabled',true);
                    $('#EndLibro').prop('disabled',true);
                    $('#PrevLibro').prop('disabled',true);
                    $('#IniLibro').prop('disabled',true);                    
                }
            }            
        },                    
        error: function(error){
            if (($('#colortitulo').attr('class'))=='modal-header modal-header-info'){
                $('#colortitulo').removeClass('modal-header modal-header-info').addClass('modal-header modal-header-warning'); 
            } 
            $('#mensage').text('Error con el Servidor');
            $('#titulo').text('Atencion!');
            $('#dialoginfo').modal({
                backdrop:'static',
                keyboard:false  
            });                        
        }
    });    
}

function AceptarBorrarLibro(){
    
    aLibros.splice(LibroIndex,1);
    
    LibroIndex = 0;
    
    var CodeLibro = $('#codelibro').val();
    
    $('#IniLibro').prop('disabled',true);
    $('#PrevLibro').prop('disabled',true);
    
    if (aLibros.length == 0){        
        $('#NextLibro').prop('disabled',true);
        $('#EndLibro').prop('disabled',true);
        $('#DeleteLibro').prop('disabled',true);
        $('#SaveLibro').prop('disabled',true);
        $('#ResetLibro').prop('disabled',true);
        $('#IniLibro').prop('disabled',true);
        $('#PrevLibro').prop('disabled',true);
        
        $('#titulolibro').val('');
        $('#autorlibro').val('');
        $('#editoriallibro').val('');
        $('#fechaaltalibro').val('');
        $('#idiomaoriginallibro').val('');
        $('#diaspermitidoslibro').val('');
        $('#codelibro').val('');                      
    }else{
        ActiveLibro();
        if (aLibros.length == 1) {
           $('#NextLibro').prop('disabled',true);
           $('#EndLibro').prop('disabled',true); 
        }
    }
    
    if (aLibros.length > 1) {
        $('#NextLibro').prop('disabled',false);
        $('#EndLibro').prop('disabled',false); 
    }
    
    $.ajax({
	statusCode:{500:function(){
                if (($('#colortitulo').attr('class'))=='modal-header modal-header-info'){
                    $('#colortitulo').removeClass('modal-header modal-header-info').addClass('modal-header modal-header-warning');  
                }                
                $('#mensage').text('Error con el Servidor');
                $('#titulo').text('Atenction!');
                $('#dialoginfo').modal({
                    backdrop:'static',
                    keyboard:false  
                }); 
            }
        },        
        url: 'http://localhost:3000/borrarlibro',                    
        type: 'delete',
        contentType: 'application/json; charset=utf-8',
	data: JSON.stringify({IdLibro:CodeLibro}),
        success: function(data){
            if (($('#colortitulo').attr('class'))=='modal-header modal-header-warning'){
                $('#colortitulo').removeClass('modal-header modal-header-warning').addClass('modal-header modal-header-info'); 
            } 
            $('#mensage').text('Libro Borrado');
            $('#titulo').text('Informacion');
            $('#dialoginfo').modal({
                backdrop:'static',
                keyboard:false  
            });
            
            BufferingLibroData();
                        
            //$('#DeleteLibro').prop('disabled',false);
            if (aLibros.length>1) {
               $('#IniLibro').prop('disabled',false);
               $('#PrevLibro').prop('disabled',false); 
            }
        },                    
        error: function(error){
            if (($('#colortitulo').attr('class'))=='modal-header modal-header-info'){
                $('#colortitulo').removeClass('modal-header modal-header-info').addClass('modal-header modal-header-warning'); 
            } 
            $('#mensage').text('Error con el Servidor');
            $('#titulo').text('Atencion!');
            $('#dialoginfo').modal({
                backdrop:'static',
                keyboard:false  
            });                        
        }
    });    
}

function NextLibro(){
    if ((LibroIndex + 2) == aLibros.length) {
        $('#NextLibro').prop('disabled',true);
        $('#EndLibro').prop('disabled',true); 
    }
    LibroIndex = LibroIndex + 1;
    ActiveLibro();
    BufferingLibroData();
    $('#IniLibro').prop('disabled',false);
    $('#PrevLibro').prop('disabled',false);
}

function EndLibro(){
    LibroIndex = aLibros.length - 1;
    $('#NextLibro').prop('disabled',true);
    $('#EndLibro').prop('disabled',true);
    ActiveLibro();
    BufferingLibroData();
    $('#IniLibro').prop('disabled',false);
    $('#PrevLibro').prop('disabled',false);
}

function IniLibro(){
    LibroIndex = 0;
    ActiveLibro();
    BufferingLibroData();
    $('#IniLibro').prop('disabled',true);
    $('#PrevLibro').prop('disabled',true);
    if (aLibros.length  > 1) {
        $('#NextLibro').prop('disabled',false);
        $('#EndLibro').prop('disabled',false);   
    }     
}

function PrevLibro(){
    LibroIndex = LibroIndex - 1;
    if (LibroIndex == 0) {
        $('#IniLibro').prop('disabled',true);
        $('#PrevLibro').prop('disabled',true);
    }
    ActiveLibro();
    BufferingLibroData();
    if (aLibros.length  > 1) {
        $('#NextLibro').prop('disabled',false);
        $('#EndLibro').prop('disabled',false);   
    } 
}

function CargarLibro(){
    
    IdDetailGrid = IdDetailGrid + 10;    
    var Id = IdDetailGrid.toString();    
    var CodeSocio = $('#codesocio').val();
    var CodeLibro = $('#codelibro').val();
    var TituloLibro = $('#titulolibro').val();    
    var FormattedDate = new Date().
            toLocaleString('en-us', {year: 'numeric', month: '2-digit', day: '2-digit'}).
            replace(/(\d+)\/(\d+)\/(\d+)/, '$3-$1-$2');
    var CellLote = $('#master').jqGrid('getCell',IdMasterGrid,'IdLote');
        
    $("#detail").jqGrid("addRowData",IdDetailGrid,{id:Id,IdLote:CellLote,IdSocio:CodeSocio,IdLibro:CodeLibro,TituloLibro:TituloLibro,FechaSalida:FormattedDate},"first");
    
    $('#SalvarDetailGrid').prop('disabled',false);
}

function SalvarDetailGrid(){
    
    var aGridData = jQuery("#detail").getRowData();
    
    $('#CargarLibro').prop('disabled',true);
    
    $.ajax({
	statusCode:{500:function(){
                if (($('#colortitulo').attr('class'))=='modal-header modal-header-info'){
                    $('#colortitulo').removeClass('modal-header modal-header-info').addClass('modal-header modal-header-warning');  
                }                
                $('#mensage').text('Error con el Servidor');
                $('#titulo').text('Atenction!');
                $('#dialoginfo').modal({
                    backdrop:'static',
                    keyboard:false  
                }); 
            }
        },        
        url: 'http://localhost:3000/salvardetailgrid',                    
        type: 'post',
        contentType: 'application/json; charset=utf-8',
	data: JSON.stringify({aGridData:aGridData}),
        success: function(data){            
            if (($('#colortitulo').attr('class'))=='modal-header modal-header-warning'){
                $('#colortitulo').removeClass('modal-header modal-header-warning').addClass('modal-header modal-header-info'); 
            } 
            $('#mensage').text('Datos Salvados');
            $('#titulo').text('Informacion');
            $('#dialoginfo').modal({
                backdrop:'static',
                keyboard:false  
            });            
        },                    
        error: function(error){
            if (($('#colortitulo').attr('class'))=='modal-header modal-header-info'){
                $('#colortitulo').removeClass('modal-header modal-header-info').addClass('modal-header modal-header-warning'); 
            } 
            $('#mensage').text('Error con el Servidor');
            $('#titulo').text('Atencion!       ');
            $('#dialoginfo').modal({
                backdrop:'static',
                keyboard:false  
            });            
        }
    });
    
}