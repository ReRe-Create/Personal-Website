document.addEventListener('DOMContentLoaded', () => {
let hello= document.getElementById("hello");
let tree= document.getElementById("tree");
let tree2= document.getElementById("tree2");
let sun= document.getElementById("sun");

window.addEventListener('scroll',() =>{
    let value = window.scrollY;

    tree.style.left = (value * -0.5) + 'px';
    tree.style.rotate = (value * -0.5) + 'px';
    tree2.style.left = (value * 0.5) + 'px';

    let maxScroll= 290;
    let opacity= 1-(value / maxScroll);
    if( opacity<0){
        opacity=0;
}
hello.style.opacity = opacity;

    if(value<=290){
        sun.style.marginTop = value *0.5 + 'px';
   
    }    

});

});