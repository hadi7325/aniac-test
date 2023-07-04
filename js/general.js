
//show search box in desctop
const dropDownBtn = document.querySelector(".drop-down");
const dropDownMenu = document.querySelector(".drop-search-box")
const nav = document.querySelector(".nav")
dropDownBtn.addEventListener("click",function(){
    dropDownMenu.classList.toggle("active")
    nav.classList.toggle("active")
})


//navbar setting in desctop and mobile

window.addEventListener("load",function(){
    if(this.window.innerWidth > 992)
    window.addEventListener("scroll",function(){
        if(this.window.scrollY > 70){
            nav.classList.add("fix")
        }else{
            nav.classList.remove("fix")
        }
    })
})

window.addEventListener("load",function(){
    if(this.window.scrollY > 70){
        nav.classList.add("fix")
    }else{
        nav.classList.remove("fix")
    }
})




//show share and bookmark each item menu
const overlayCover = document.querySelector('#overlay-cover');
function showDrop(item,e){
    console.log( item)
    
    const parent = item.parentElement.parentElement
    const dropMenu = parent.querySelector(".drop-menu-item")
    dropMenu.classList.toggle("active")
    // if (!item.contains(e.target)) {
    //     dropMenu.classList.remove("active")
    // }else{

    // }

   
    // const openButton = document.querySelector('.openOverlay');
        // if(e.target === openButton){
        //      popup.style.display = 'block';
        //     overlay.style.display = 'block';
        // }
    

}





//add active class to each tab of section
const sectionFilterTabsEditorSuggest = document.querySelectorAll(".section-filter-tab-editor-suggest");
sectionFilterTabsEditorSuggest.forEach(tab => {
    tab.addEventListener("click",function(){
        for (let index = 0; index < sectionFilterTabsEditorSuggest.length; index++) {
            sectionFilterTabsEditorSuggest[index].classList.remove("active");
            
            
            tab.classList.add("active")
        }
        
    })
    
    
})


const sectionFilterTabsBestArticle = document.querySelectorAll(".section-filter-tab-best-article");
sectionFilterTabsBestArticle.forEach(tab => {
    tab.addEventListener("click",function(){
        for (let index = 0; index < sectionFilterTabsBestArticle.length; index++) {
            sectionFilterTabsBestArticle[index].classList.remove("active");
            
            
            tab.classList.add("active")
        }
        
    })
    
    
})

const sectionFilterTabsAniacSuggest = document.querySelectorAll(".section-filter-tab-aniac-suggest");
sectionFilterTabsAniacSuggest.forEach(tab => {
    tab.addEventListener("click",function(){
        for (let index = 0; index < sectionFilterTabsAniacSuggest.length; index++) {
            sectionFilterTabsAniacSuggest[index].classList.remove("active");
    
            
              tab.classList.add("active")
        }

    })


})

//show drop menus each link in navbar 
const navLinks = document.querySelector(".nav-links");

function showDropItems(element){
    const elementChild = element.querySelector(".link-drop-down");
    elementChild.classList.toggle("show")
     
}







//show menu navbar link in mobile version

const overlay = document.querySelector(".overlay");
function showMenuResponsive(element){
    navLinks.classList.toggle("active")
    overlay.classList.toggle("active")
}

overlay.addEventListener("click",function(){
    overlay.classList.remove("active")
    navLinks.classList.remove("active")
    const linkDropDowns = document.querySelectorAll(".link-drop-down");
    linkDropDowns.forEach(link => {
        if(navLinks.style.top !== 0 ){
            link.classList.remove("show")
        }
    })

})





// window.addEventListener("click", function (e) {
//     console.log(e.target === dropDownMenu.childNodes)
//     if (e.target === dropDownBtn) {
//         dropDownMenu.classList.toggle("active")
//     } else if (e.target === dropDownMenu.childNodes) {
//         dropDownMenu.classList.add("active")
//     }else if(e.target !== dropDownBtn){
//         dropDownMenu.classList.remove("active")

//     } else if(e.target !== dropDownMenu.childNodes){
//         dropDownMenu.classList.remove("active")

//     }
    
// })



