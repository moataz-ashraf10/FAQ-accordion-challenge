let plus=document.querySelector('.plus');
let a1=document.querySelector('.a1')
let minus=document.querySelector('.minu')
plus.addEventListener('click', function(){
    plus.classList.toggle('active');
    if(plus.classList.contains('active')){
        a1.style.display = 'block';
        plus.style.visibility='hidden';
        minus.style.visibility='visible';
    }
    minus.addEventListener('click', function(){
        a1.style.display = 'none';
        plus.style.visibility='visible';
        minus.style.visibility='hidden';
    })
})
let plus1=document.querySelector('.plus1');
let a2=document.querySelector('.a2')
let minus1=document.querySelector('.minu1')
plus1.addEventListener('click', function(){
    plus1.classList.toggle('active');
    if(plus1.classList.contains('active')){
        a2.style.display = 'block';
        plus1.style.visibility='hidden';
        minus1.style.visibility='visible';
    }
    minus1.addEventListener('click', function(){
        a2.style.display = 'none';
        plus1.style.visibility='visible';
        minus1.style.visibility='hidden';
    })
})
let plus2=document.querySelector('.plus2');
let a3=document.querySelector('.a3')
let minus2=document.querySelector('.minu2')
plus2.addEventListener('click', function(){
    plus2.classList.toggle('active');
    if(plus2.classList.contains('active')){
        a3.style.display = 'block';
        plus2.style.visibility='hidden';
        minus2.style.visibility='visible';
    }
    minus2.addEventListener('click', function(){
        a3.style.display = 'none';
        plus2.style.visibility='visible';
        minus2.style.visibility='hidden';
    })
})
let plus3=document.querySelector('.plus3');
let a4=document.querySelector('.a4')
let minus3=document.querySelector('.minu3')
plus3.addEventListener('click', function(){
    plus3.classList.toggle('active');
    if(plus3.classList.contains('active')){
        a4.style.display = 'block';
        plus3.style.visibility='hidden';
        minus3.style.visibility='visible';
    }
    minus3.addEventListener('click', function(){
        a4.style.display = 'none';
        plus3.style.visibility='visible';
        minus3.style.visibility='hidden';
    })
})
