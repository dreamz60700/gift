let burger = document.getElementById('header_icon');
let navigation = document.querySelector('.navigation');
let body = document.getElementById("content");
let burgerMenu = document.getElementById('header_icon2')





burger.addEventListener("click", function(){
    navigation.classList.toggle('with-sidebar');
    body.style.opacity = "0.3";
    body.style.transition = "0.3s"
});



body.onclick = () => {
    if(navigation.style.transform != "translateX(-250px)"){
     navigation.classList.remove('with-sidebar');
     navigation.style.transition = "0.3s"
     body.style.opacity = "1";
        };
};

burgerMenu.onclick = () => {
    if(navigation.style.transform != "translateX(-250px)"){
        navigation.classList.remove('with-sidebar');
        body.style.opacity = "1";
        navigation.style.transition = "0.3s"
           };
};
