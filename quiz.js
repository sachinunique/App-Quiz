const clicked = document.getElementById('onClicker');

clicked.addEventListener('submit', (e)=>{

    e.preventDefault();
const name = {...e.target}[0].value;
localStorage.setItem("playerName",name);
    
})

