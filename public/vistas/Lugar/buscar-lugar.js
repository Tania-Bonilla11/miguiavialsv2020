/**
   * funcionalidad del formulario 
   * para buscar lugares por usuarios con privilegios
   * 
   *@version  17/12/20
   * @author Tania Bonilla  
   */
var appBuscarLugar= new Vue({
    el: '#frm-buscar-lugar',
    /**se almacena los datos obtenidos del html en un array  */
    data: {
        mislugar: [],
        valor: ''
    },
    /** Metodos para el mantenimiento de los lugares
     * uso de alertify para notificacion
     */
    methods: {
        buscarLugar: function () {
            fetch(`private/Modulos/Lugar/procesos.php?proceso=buscarLugar&lugar=${this.valor}`).then(resp => resp.json()).then(resp => {
                this.mislugar = resp;
            });
        },
        modificarLugar: function (lugar) {
            applugar.lugar =lugar;
            applugar.lugar.accion = 'modificar';
        },
        eliminarLugar: function (idLugar) {
            alertify.confirm("Mantenimiento Lugar","¿Estas seguro de eliminar el registro?",
           ()=>{
            fetch(`private/Modulos/Lugar/procesos.php?proceso=eliminarLugar&lugar=${idLugar}`).then(resp => resp.json()).then(resp => {
                this.buscarLugar();
            });
                alertify.success('Registro eliminado correctamente');
            },
            ()=>{
                alertify.error('Accion de eliminar cancelada por el usuario');
            });
        }
    },
    created: function () {
        this.buscarLugar();
    }
});
