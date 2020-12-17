/** codigo que permite mostrar el icono de navbar cuando la panatalla se hace pequeña*/ 
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