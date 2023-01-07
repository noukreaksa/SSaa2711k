const dispaly = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
    item.onclick=() => {
    if (item.id=='clear')
    {
        dispaly.innerText = '';
    }else if (item.id=='backspace') 
    {
        let string = dispaly.innerText.toString();
        dispaly.innerText=string.substr(0,string.length - 1);
    }else if (dispaly.innerText !='' && item.id=='equal'){
        dispaly.innerText=eval(dispaly.innerText);
    }else if (dispaly.innerText =='' && item.id=='equal') 
    {
        dispaly.innerText='Empty!';
        setTimeout(()=> (dispaly.innerText=''),2000);
    }else
    {
        dispaly.innerText +=item.id;
    }
}
})

const themeToggleBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('calculatorr');
const toggleIcon = document.querySelector('.toggler-icpn');
let isDark = true;
themeToggleBtn.onclick =() =>{
    calculator.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
    isDark = !isDark;
}