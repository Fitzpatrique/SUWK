function menu(){
    if (document.getElementById("mobile-navigation-section-menu-list").style.display == "none"){
        document.getElementById("menu-icon").src = "icons/cancel.svg";
        document.getElementById("mobile-navigation-section-menu-list").style.display = "flex";
    }
    else{
        document.getElementById("menu-icon").src = "icons/menu.svg";
        document.getElementById("mobile-navigation-section-menu-list").style.display = "none";
    }
}

menu()