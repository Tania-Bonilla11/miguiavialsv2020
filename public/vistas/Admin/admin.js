/**
   * Uso de vue para enviar datos en forma de objeto admin a backend
   * 
   *@version  17/12/20
   * @author Tania Bonilla  
   */
var appadmin = new Vue({
  el:'#frm-Admin',
  data:{
      admin:{
          idAdmin    :0,
          accion       :'nuevo',
          admin        :'',
          apellido     :'',
          correo       :'',
          clave      :'',
          genero       :'',
          msg          :''
          }
      },
      /**
       * Metodos para recibir datos de procesos de php 
       */
      methods:{
          guardarAdmin:function(){
              fetch(`private/Modulos/Admin/procesos.php?proceso=recibirDatos&admin=${JSON.stringify(this.admin)}`).then(resp => resp.json()).then(resp=>{
                 if(resp.msg.indexOf("correctamente")>=0){
                  alertify.success(resp.msg);
                 } else {
                  alertify.warning(resp.msg);
                 }
                  
               });    
          },
          limpiarAdmin:function(){
                  this.admin.idAdmin = 0;
                  this.admin.admin = '';
                  this.admin.apellido = '';
                  this.admin.correo = '';
                  this.admin.clave = '';
                  this.admin.genero = '';
                  this.admin.accion = 'nuevo';
                  appBuscarAdmin.buscarAdmin();
          }
      }
});