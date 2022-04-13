var SocioIndex = 0;
var aSocios = [];
var UpdateMode = 'UpdateSocio';
var BufferCodeSocio;
var BufferNombreSocio;
var BufferPrimerApellido;
var BufferSegundoApellido;
var BufferDNISocio;
var BufferFechaNacimiento;
var BufferFechaAlta;
var BufferEmailSocio;
var BufferDireccionSocio;
var BufferCodigoPostal;
var BufferCiudadSocio;
var BufferPersonaContacto;
var BufferTelefonoMovil;
var BufferTelefonoFijo;

function BufferSocio(){
    BufferCodeSocio = $('#codesocio').val();
    BufferNombreSocio = $('#nombresocio').val();
    BufferPrimerApellido = $('#primerapellidosocio').val();
    BufferSegundoApellido = $('#segundoapellidosocio').val();
    BufferDNISocio = $('#dnisocio').val();
    BufferFechaNacimiento = $('#datepicker').val();
    BufferFechaAlta = $('#datepicker2').val();
    BufferEmailSocio = $('#emailsocio').val();
    BufferDireccionSocio = $('#direccionsocio').val();
    BufferCodigoPostal = $('#codigopostalsocio').val();
    BufferCiudadSocio = $('#ciudadsocio').val();
    BufferPersonaContacto = $('#personacontactosocio').val();
    BufferTelefonoMovil = $('#mobilsocio').val();
    BufferTelefonoFijo = $('#fijosocio').val();    
}

function ResetSocio(){
    $('#codesocio').val(BufferCodeSocio);
    $('#nombresocio').val(BufferNombreSocio);
    $('#primerapellidosocio').val(BufferPrimerApellido);
    $('#segundoapellidosocio').val(BufferSegundoApellido);
    $('#dnisocio').val(BufferDNISocio);
    $('#datepicker').val(BufferFechaNacimiento);
    $('#datepicker2').val(BufferFechaAlta);
    $('#emailsocio').val(BufferEmailSocio);
    $('#direccionsocio').val(BufferDireccionSocio);
    $('#codigopostalsocio').val(BufferCodigoPostal);
    $('#ciudadsocio').val(BufferCiudadSocio);    
    $('#personacontactosocio').val(BufferPersonaContacto);
    $('#mobilsocio').val(BufferTelefonoMovil);
    $('#fijosocio').val(BufferTelefonoFijo);    
}

function ActiveSocio() {
    $('#codesocio').val(aSocios[SocioIndex].IdSocio);
    $('#nombresocio').val(aSocios[SocioIndex].Nombre);
    $('#primerapellidosocio').val(aSocios[SocioIndex].PrimerApellido);
    $('#segundoapellidosocio').val(aSocios[SocioIndex].SegundoApellido);
    $('#dnisocio').val(aSocios[SocioIndex].DNI);
    $('#datepicker').val((aSocios[SocioIndex].FechaNacimiento).substring(0, 10));
    $('#datepicker2').val((aSocios[SocioIndex].FechaAlta).substring(0, 10));
    $('#emailsocio').val(aSocios[SocioIndex].Email);
    $('#direccionsocio').val(aSocios[SocioIndex].Direccion);
    $('#codigopostalsocio').val(aSocios[SocioIndex].CodigoPostal);
    $('#ciudadsocio').val(aSocios[SocioIndex].Ciudad);    
    $('#personacontactosocio').val(aSocios[SocioIndex].PersonaContacto);
    $('#mobilsocio').val(aSocios[SocioIndex].TelefonoMovil);
    $('#fijosocio').val(aSocios[SocioIndex].TelefonoFijo);     
}

function NewSocio(){
    
    BufferSocio();
    
    $('#nombresocio').val('');
    $('#primerapellidosocio').val('');
    $('#segundoapellidosocio').val('');
    $('#dnisocio').val('');
    $('#datepicker').val('');
    $('#datepicker2').val('');
    $('#emailsocio').val('');
    $('#direccionsocio').val('');
    $('#codigopostalsocio').val('');
    $('#ciudadsocio').val('');    
    $('#personacontactosocio').val('');
    $('#mobilsocio').val('');
    $('#fijosocio').val('');
    $('#codesocio').val('');
    
    $('#SaveSocio').prop('disabled',false);
    // $('#ResetSocio').prop('disabled',false);
    
    UpdateMode = 'SaveSocio';
}

function CrearSocio(){
    
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
        url: 'http://localhost:3000/nuevosocio',                    
        type: 'post',
        contentType: 'application/json; charset=utf-8',
	data: JSON.stringify({Nombre:$('#nombresocio').val(),PrimerApellido:$('#primerapellidosocio').val(),
                                     SegundoApellido:$('#segundoapellidosocio').val(),DNI:$('#dnisocio').val(),
                                     FechaNacimiento:$('#datepicker').val(),FechaAlta:$('#datepicker2').val(),
                                     Direccion:$('#direccionsocio').val(),Email:$('#emailsocio').val(),
                                     CodigoPostal:$('#codigopostalsocio').val(),CiudadSocio:$('#ciudadsocio').val(),
                                     PersonaContacto:$('#personacontactosocio').val(),MobilSocio:$('#mobilsocio').val(),
                                     FijoSocio:$('#fijosocio').val()
                                    }),
        success: function(data){
            $('#codesocio').val(data.insertId);            
             
            aSocios.push({Nombre:$('#nombresocio').val(),PrimerApellido:$('#primerapellidosocio').val(),
                                SegundoApellido:$('#segundoapellidosocio').val(),DNI:$('#dnisocio').val(),
                                FechaNacimiento:$('#datepicker').val(),FechaAlta:$('#datepicker2').val(),
                                Direccion:$('#direccionsocio').val(),Email:$('#emailsocio').val(),
                                CodigoPostal:$('#codigopostalsocio').val(),CiudadSocio:$('#ciudadsocio').val(),
                                PersonaContacto:$('#personacontactosocio').val(),MobilSocio:$('#mobilsocio').val(),
                                FijoSocio:$('#fijosocio').val(),IdSocio:$('#codesocio').val()});            
            
            SocioIndex = aSocios.length - 1;
            
            $('#CargarSocio').prop('disabled',false);
            
            if (($('#colortitulo').attr('class'))=='modal-header modal-header-warning'){
                $('#colortitulo').removeClass('modal-header modal-header-warning').addClass('modal-header modal-header-info'); 
            } 
            $('#mensage').text('Nuevo Socio Creado');
            $('#titulo').text('Informacion');
            $('#dialoginfo').modal({
                backdrop:'static',
                keyboard:false  
            });
            
            BufferSocio();
                        
            $('#DeleteSocio').prop('disabled',false);
            if (aSocios.length>1) {
               $('#IniSocio').prop('disabled',false);
               $('#PrevSocio').prop('disabled',false); 
            }
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

function UpdateSocio(){
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
        url: 'http://localhost:3000/updatesocio',                    
        type: 'put',
        contentType: 'application/json; charset=utf-8',
	data: JSON.stringify({Nombre:$('#nombresocio').val(),PrimerApellido:$('#primerapellidosocio').val(),
                                     SegundoApellido:$('#segundoapellidosocio').val(),DNI:$('#dnisocio').val(),
                                     FechaNacimiento:$('#datepicker').val(),FechaAlta:$('#datepicker2').val(),
                                     Direccion:$('#direccionsocio').val(),Email:$('#emailsocio').val(),
                                     CodigoPostal:$('#codigopostalsocio').val(),CiudadSocio:$('#ciudadsocio').val(),
                                     PersonaContacto:$('#personacontactosocio').val(),MobilSocio:$('#mobilsocio').val(),
                                     FijoSocio:$('#fijosocio').val(),IdSocio:$('#codesocio').val()
                                    }),
        success: function(data){
            //$('#codesocio').val(data.insertId);            
             
            /*aSocios.push({Nombre:$('#nombresocio').val(),PrimerApellido:$('#primerapellidosocio').val(),
                                SegundoApellido:$('#segundoapellidosocio').val(),DNI:$('#dnisocio').val(),
                                FechaNacimiento:$('#datepicker').val(),FechaAlta:$('#datepicker2').val(),
                                Direccion:$('#direccionsocio').val(),Email:$('#emailsocio').val(),
                                CodigoPostal:$('#codigopostalsocio').val(),CiudadSocio:$('#ciudadsocio').val(),
                                PersonaContacto:$('#personacontactosocio').val(),MobilSocio:$('#mobilsocio').val(),
                                FijoSocio:$('#fijosocio').val(),IdSocio:$('#codesocio').val()});            
            
            SocioIndex = aSocios.length - 1;*/
            
            //$('#nombresocio').val(data.Nombre);
            
            var aTemp = eval(data);
            
            aSocios[SocioIndex].Nombre = aTemp.Nombre;
            aSocios[SocioIndex].PrimerApellido = aTemp.PrimerApellido;
            aSocios[SocioIndex].SegundoApellido = aTemp.SegundoApellido;
            aSocios[SocioIndex].DNI = aTemp.DNI;
            aSocios[SocioIndex].FechaNacimiento = aTemp.FechaNacimiento;
            aSocios[SocioIndex].FechaAlta = aTemp.FechaAlta;
            aSocios[SocioIndex].Direccion = aTemp.Direccion;
            aSocios[SocioIndex].Email = aTemp.Email;
            aSocios[SocioIndex].CodigoPostal = aTemp.CodigoPostal;
            aSocios[SocioIndex].CiudadSocio = aTemp.CiudadSocio;
            aSocios[SocioIndex].PersonaContacto = aTemp.PersonaContacto;
            aSocios[SocioIndex].MobilSocio = aTemp.MobilSocio;
            aSocios[SocioIndex].FijoSocio = aTemp.FijoSocio;
            
            if (($('#colortitulo').attr('class'))=='modal-header modal-header-warning'){
                $('#colortitulo').removeClass('modal-header modal-header-warning').addClass('modal-header modal-header-info'); 
            } 
            $('#mensage').text('Socio Modificado');
            $('#titulo').text('Informacion');
            $('#dialoginfo').modal({
                backdrop:'static',
                keyboard:false  
            });
            
            BufferSocio();
                        
            $('#DeleteSocio').prop('disabled',false);
            if (aSocios.length>1) {
               $('#IniSocio').prop('disabled',false);
               $('#PrevSocio').prop('disabled',false); 
            }
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

function BuscarSocio() {
    
    var OrderSearch = $('#buscarsocio option:selected').val();
    var ContentSearch = $('#contentbuscarsocio').val();
    
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
        url: 'http://localhost:3000/buscarsocio',                    
        type: 'post',
        contentType: 'application/json; charset=utf-8',
	data: JSON.stringify({ContentSearch:ContentSearch,OrderSearch:OrderSearch
                                    }),
        success: function(data){
            
            aSocios = eval(data);
            
            if (aSocios.length == 0) {
                if (($('#colortitulo').attr('class'))=='modal-header modal-header-info'){
                    $('#colortitulo').removeClass('modal-header modal-header-info').addClass('modal-header modal-header-warning'); 
                } 
                $('#mensage').text('Ningun Socio Encontrado');
                $('#titulo').text('Atencion!');
                $('#dialoginfo').modal({
                    backdrop:'static',
                    keyboard:false                    
                });
                $('#DeleteSocio').prop('disabled',true);
                $('#NextSocio').prop('disabled',true);
                $('#EndSocio').prop('disabled',true);
                $('#IniSocio').prop('disabled',true);
                $('#PrevSocio').prop('disabled',true);
                $('#ResetSocio').prop('disabled',true);
                $('#SaveSocio').prop('disabled',true);
                $('#CargarSocio').prop('disabled',true);
            }else{
                if (($('#colortitulo').attr('class'))=='modal-header modal-header-warning'){
                    $('#colortitulo').removeClass('modal-header modal-header-warning').addClass('modal-header modal-header-info'); 
                } 
                $('#mensage').text('Nuevo(s) Socio(s) Cargado(s)');
                $('#titulo').text('Informacion');
                $('#dialoginfo').modal({
                    backdrop:'static',
                    keyboard:false  
                });
                SocioIndex = 0;
                ActiveSocio();
                BufferSocio();
                $('#CargarSocio').prop('disabled',false);
                $('#DeleteSocio').prop('disabled',false);
                $('#NextSocio').prop('disabled',false);
                $('#EndSocio').prop('disabled',false);
                if (aSocios.length == 1) {
                    $('#NextSocio').prop('disabled',true);
                    $('#EndSocio').prop('disabled',true);
                    $('#PrevSocio').prop('disabled',true);
                    $('#IniSocio').prop('disabled',true);                    
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

function BuscarSocioFiltro() {
    
    var OrderSearch = $('#buscarsocio option:selected').val();
    var ContentSearch = $('#contentbuscarsocio').val();
    
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
        url: 'http://localhost:3000/buscarsociofiltro',                    
        type: 'post',
        contentType: 'application/json; charset=utf-8',
	data: JSON.stringify({ContentSearch:ContentSearch,OrderSearch:OrderSearch
                                    }),
        success: function(data){
            
            aSocios = eval(data);
            
            if (aSocios.length == 0) {
                if (($('#colortitulo').attr('class'))=='modal-header modal-header-info'){
                    $('#colortitulo').removeClass('modal-header modal-header-info').addClass('modal-header modal-header-warning'); 
                } 
                $('#mensage').text('Ningun Socio Encontrado');
                $('#titulo').text('Atencion!');
                $('#dialoginfo').modal({
                    backdrop:'static',
                    keyboard:false                    
                });
                $('#DeleteSocio').prop('disabled',true);
                $('#NextSocio').prop('disabled',true);
                $('#EndSocio').prop('disabled',true);
                $('#IniSocio').prop('disabled',true);
                $('#PrevSocio').prop('disabled',true);
                $('#CargarSocio').prop('disabled',true);
            }else{
                if (($('#colortitulo').attr('class'))=='modal-header modal-header-warning'){
                    $('#colortitulo').removeClass('modal-header modal-header-warning').addClass('modal-header modal-header-info'); 
                } 
                $('#mensage').text('Nuevo(s) Socio(s) Cargado(s)');
                $('#titulo').text('Informacion');
                $('#dialoginfo').modal({
                    backdrop:'static',
                    keyboard:false  
                });
                SocioIndex = 0;
                ActiveSocio();
                BufferSocio();
                $('#CargarSocio').prop('disabled',false);
                $('#DeleteSocio').prop('disabled',false);
                $('#NextSocio').prop('disabled',false);
                $('#EndSocio').prop('disabled',false);
                if (aSocios.length == 1) {
                    $('#NextSocio').prop('disabled',true);
                    $('#EndSocio').prop('disabled',true);
                    $('#PrevSocio').prop('disabled',true);
                    $('#IniSocio').prop('disabled',true);                    
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

function AceptarBorrar(){
    
    aSocios.splice(SocioIndex,1);
    
    SocioIndex = 0;
    
    var CodeSocio = $('#codesocio').val();
    
    $('#IniSocio').prop('disabled',true);
    $('#PrevSocio').prop('disabled',true);
    
    if (aSocios.length == 0){        
        $('#NextSocio').prop('disabled',true);
        $('#EndSocio').prop('disabled',true);
        $('#DeleteSocio').prop('disabled',true);
        $('#SaveSocio').prop('disabled',true);
        $('#ResetSocio').prop('disabled',true);
        $('#IniSocio').prop('disabled',true);
        $('#PrevSocio').prop('disabled',true);
        $('#CargarSocio').prop('disabled',true);
        
        $('#nombresocio').val('');
        $('#primerapellidosocio').val('');
        $('#segundoapellidosocio').val('');
        $('#dnisocio').val('');
        $('#datepicker').val('');
        $('#datepicker2').val('');
        $('#emailsocio').val('');
        $('#direccionsocio').val('');
        $('#codigopostalsocio').val('');
        $('#ciudadsocio').val('');    
        $('#personacontactosocio').val('');
        $('#mobilsocio').val('');
        $('#fijosocio').val('');
        $('#codesocio').val('');            
    }else{
        ActiveSocio();
        $('#CargarSocio').prop('disabled',false);
        if (aSocios.length == 1) {
           $('#NextSocio').prop('disabled',true);
           $('#EndSocio').prop('disabled',true); 
        }
    }
    
    if (aSocios.length > 1) {
        $('#NextSocio').prop('disabled',false);
        $('#EndSocio').prop('disabled',false); 
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
        url: 'http://localhost:3000/borrarsocio',                    
        type: 'delete',
        contentType: 'application/json; charset=utf-8',
	data: JSON.stringify({IdSocio:CodeSocio}),
        success: function(data){
            if (($('#colortitulo').attr('class'))=='modal-header modal-header-warning'){
                $('#colortitulo').removeClass('modal-header modal-header-warning').addClass('modal-header modal-header-info'); 
            } 
            $('#mensage').text('Socio Borrado');
            $('#titulo').text('Informacion');
            $('#dialoginfo').modal({
                backdrop:'static',
                keyboard:false  
            });
            
            BufferSocio();
                        
            //$('#DeleteSocio').prop('disabled',false);
            
            if (aSocios.length>1) {
               $('#IniSocio').prop('disabled',false);
               $('#PrevSocio').prop('disabled',false); 
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

function NextSocio(){
    if ((SocioIndex + 2) == aSocios.length) {
        $('#NextSocio').prop('disabled',true);
        $('#EndSocio').prop('disabled',true); 
    }
    SocioIndex = SocioIndex + 1;
    ActiveSocio();
    BufferSocio();
    $('#IniSocio').prop('disabled',false);
    $('#PrevSocio').prop('disabled',false);
}

function EndSocio(){    
    SocioIndex = aSocios.length - 1;
    $('#NextSocio').prop('disabled',true);
    $('#EndSocio').prop('disabled',true);
    ActiveSocio();
    BufferSocio();
    $('#IniSocio').prop('disabled',false);
    $('#PrevSocio').prop('disabled',false);
}

function IniSocio(){
    SocioIndex = 0;
    ActiveSocio();
    BufferSocio();
    $('#IniSocio').prop('disabled',true);
    $('#PrevSocio').prop('disabled',true);
    if (aSocios.length  > 1) {
        $('#NextSocio').prop('disabled',false);
        $('#EndSocio').prop('disabled',false);   
    }     
}

function PrevSocio(){
    SocioIndex = SocioIndex - 1;
    if (SocioIndex == 0) {
        $('#IniSocio').prop('disabled',true);
        $('#PrevSocio').prop('disabled',true);
    }
    ActiveSocio();
    BufferSocio();
    if (aSocios.length  > 1) {
        $('#NextSocio').prop('disabled',false);
        $('#EndSocio').prop('disabled',false);   
    } 
}

function CargarSocio(){
    
    IdMasterGrid = IdMasterGrid + 10;
    var Id = IdMasterGrid.toString();
    
    var CodeSocio = $('#codesocio').val();
    var NombreSocio = $('#nombresocio').val();
    var PrimerApellido = $('#primerapellidosocio').val();
    var SegundoApellido = $('#segundoapellidosocio').val();
    var NombreCompleto = NombreSocio + ' ' + PrimerApellido + ' ' + SegundoApellido;
    var FormattedDate = new Date().
            toLocaleString('en-us', {year: 'numeric', month: '2-digit', day: '2-digit'}).
            replace(/(\d+)\/(\d+)\/(\d+)/, '$3-$1-$2');
    
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
        url: 'http://localhost:3000/cargarsocio',                    
        type: 'post',
        contentType: 'application/json; charset=utf-8',
	data: JSON.stringify({NombreCompleto:NombreCompleto,IdSocio:CodeSocio,FechaSalida:FormattedDate}),
        success: function(data){
            IdLote = data.insertId;
            
            $('#CargarSocio').prop('disabled',true);            
            $('#DeleteRowMasterGrid').prop('disabled',false);
            
            if (($('#colortitulo').attr('class'))=='modal-header modal-header-warning'){
                $('#colortitulo').removeClass('modal-header modal-header-warning').addClass('modal-header modal-header-info'); 
            } 
            $('#mensage').text('Socio Cargado');
            $('#titulo').text('Informacion');
            $('#dialoginfo').modal({
                backdrop:'static',
                keyboard:false  
            });
            
            BufferSocio();
                        
            $('#DeleteSocio').prop('disabled',false);
            if (aSocios.length>1) {
               $('#IniSocio').prop('disabled',false);
               $('#PrevSocio').prop('disabled',false); 
            }
            
            $("#master").jqGrid("addRowData",IdMasterGrid,{id:Id,IdLote:IdLote,IdSocio:CodeSocio,NombreSocio:NombreCompleto,FechaSalida:FormattedDate},"first");
                
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

function DeleteRowMasterGrid(){
    if (($('#colortitulo').attr('class'))=='modal-header modal-header-info'){
        $('#colortitulo').removeClass('modal-header modal-header-info').addClass('modal-header modal-header-warning'); 
    } 
    $('#mensage4').text('Borrar Lote?');
    $('#titulo').text('Atencion!       ');
    $('#dialoginfo4').modal({
        backdrop:'static',
        keyboard:false  
    });
}

function AceptarBorrarGridMaster(){
    alert('test');
}

