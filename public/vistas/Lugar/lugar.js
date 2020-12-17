
/**
   * funcionalidad del formulario 
   * para buscar lugares donde impartir capacitacion 
   * uso de vue para obtener la informacion y enviarlo a backend
   *@version  17/12/20
   * @author Tania Bonilla  
   */
var applugar = new Vue({
    el:'#frm-lugar',
    data:{
         lugar:{
            idLugar    :0,
            accion       :'nuevo',
            direccion      :'',
            solicitante    :'',
            telefono       :'',
            msg            :''
            }
        },
        /**Metodos para guardar lugar
         * uso de alertify js para mostrar resultado de peticiones
         */
        methods:{
            guardarLugar:function(){
                fetch(`private/Modulos/Lugar/procesos.php?proceso=recibirDatos&lugar=${JSON.stringify(this.lugar)}`).then(resp => resp.json()).then(resp=>{
                    if(resp.msg.indexOf("correctamente")>=0){
                        alertify.success(resp.msg);
                       } else {
                        alertify.warning(resp.msg);
                       }
                   
                 });    
            },
            limpiarLugar:function(){
                this.lugar.idLugar = 0;
                this.lugar.direccion = '';
                this.lugar.solicitante= '';
                this.lugar.telefono= '';
                this.lugar.accion = 'nuevo';
                appBuscarLugar.buscarLugar();
            }
        }
});