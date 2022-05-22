const button=document.querySelector('#mode')
const body=document.querySelector('body')
load();

button.addEventListener('click',e=>{
    body.classList.toggle('darkmode');
    store(body.classList.contains('darkmode'));
    if(body.classList.contains('darkmode')){
        button.textContent =`Modo Claro`;
    }
    else{
        button.textContent =`
        Modo Oscuro
        `;
    }
})
function load(){
    const darkmode=localStorage.getItem('darkmode')

    if(!darkmode){
        store('false');
    }else if(darkmode=='true'){
        body.classList.add('darkmode');
    }
}
function store(value){
    localStorage.setItem('darkmode', value)
}