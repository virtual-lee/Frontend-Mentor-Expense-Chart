fetch("data.json")
.then(response => {
   return response.json();
})
.then(jsondata => {
    //console.log(jsondata);
    weekTotal(jsondata)


});


function weekTotal(data){
    
    let weekTotal = 0;
    
    for (let i=0; i < data.length; i++){
       weekTotal += data[i].amount;
    }

    barHeight(data, weekTotal)

};


function barHeight(data, weekTotal){
    const maxHeight = 150;
    let barData = data;

    barData.forEach((x, i) => {
        let day = x.day;
        let amount = x.amount
        let elementBar = document.querySelector(`.${day} .bar`)
        let elementValue = document.querySelector(`.${day} .amount`)
        let height = (x.amount/weekTotal)*100*6
        elementBar.style.height = `${height}px`;
        elementValue.textContent = `$${amount}`;
        
    });

    highestExpense(barData)
};

function highestExpense(data){
    let highestAmount = 0;
    let highestDay = '';
    

    data.forEach((x) => {
        if (x.amount > highestAmount){
            highestAmount = x.amount;
            highestDay = x.day;
        }
    })
    console.log(highestDay)
    let element = document.querySelector(`.${highestDay} .bar`)
    console.log(element)
    element.style.backgroundColor = "hsl(186, 34%, 60%)";
}

let elementBar = document.querySelectorAll('.bar');
let elementValue = document.querySelectorAll('.amount');

for (let i=0; i < elementBar.length; i++){
    elementBar[i].addEventListener("mouseover", function( event ) {
        elementValue[i].style.display = "block";
        elementValue[i].style.transition = "display ease 1s";
    });
}

for (let i=0; i < elementBar.length; i++){
    elementBar[i].addEventListener("mouseout", function( event ) {
        elementValue[i].style.display = "none";
    });
}



