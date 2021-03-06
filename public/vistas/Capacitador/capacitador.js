var appcapacitador = new Vue({
    el:'#frm-capacitador',
    data:{
        capacitador:{
            idCapacitador    :0,
            accion           :'nuevo',
            nombre           :'',
            apellido         :'',
            direccion        :'',
            correo           :'',
            genero           :'',
            telefono         :'',
            msg              :''
            }
        },
        methods:{
            guardarCapacitador:function(){
                fetch(`private/Modulos/Capacitador/procesos.php?proceso=recibirDatos&capacitador=${JSON.stringify(this.capacitador)}`).then(resp => resp.json()).then(resp=>{
                    if(resp.msg.indexOf("correctamente")>=0){
                        alertify.success(resp.msg);
                       } else {
                        alertify.warning(resp.msg);
                       }
                 });
            },
            limpiarCapacitador:function(){
                this.capacitador.idCapacitador = 0;
                this.capacitador.nombre = '';
                this.capacitador.apellido = '';
                this.capacitador.direccion = '';
                this.capacitador.correo = '';
                this.capacitador.genero = '';
                this.capacitador.telefono = '';
                this.capacitador.accion = 'nuevo';
                appBuscarCapacitador.buscarCapacitador();
            }
        }
});