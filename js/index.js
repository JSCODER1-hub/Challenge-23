// Selecting our main Elements
import jsonData from  "../data.json" assert {type: 'json'};
let bars = document.querySelectorAll('section .day-bars .day');

bars.forEach(bar =>{
    // 
    for (let i = 0 ; i < 7 ; i++)
    {
        if (jsonData[i].day == bar.classList[0]){
        bar.style.height = `${(jsonData[i].amount /60)* 100}%`;
        bar.onmouseover = function(){
            let span = bar.querySelector('span')
            span.style.display= "block";
            span.innerHTML =  `$${jsonData[i].amount}`;
    }
    bar.onmouseout = ()=>{bar.querySelector("span").style.display = "none"}
    }
}
})