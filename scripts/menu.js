/**
   * Funcion activar menu de navbar para pantalla pequeña.
   * Se coloca propiedad onclick y se agrega boton para cierre del menu.
   *
   * @author Tania Bonilla  
   */
const activeMenu=()=>{
    const OpenMenuButton=document.getElementById('open-menu-button')
    const closeMenuButton=document.getElementById('close-menu-button')
    const mainMenu=document.getElementById('main-menu')
    if(OpenMenuButton && mainMenu && closeMenuButton){
        OpenMenuButton.addEventListener('click',()=>{
            mainMenu.classList.add('active')
        })
        closeMenuButton.addEventListener('click',()=>{
            mainMenu.classList.remove('active')
        })
    }

}
activeMenu()