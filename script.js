function openTab(tabName){

    let tabs = document.querySelectorAll(".tab");

    tabs.forEach(function(tab){
        tab.classList.remove("active");
    });


    let selected = document.getElementById(tabName);


    if(selected){

        selected.classList.add("active");

    }


    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}



document.addEventListener("DOMContentLoaded", function(){

    openTab("inicio");

});
