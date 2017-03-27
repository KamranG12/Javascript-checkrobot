var surname1=document.getElementById('surname1');
var surname=document.getElementById('surname');
var toplanan1=document.getElementById('toplanan1');
var toplanan2=document.getElementById('toplanan2');
var emel=document.getElementById('emel');
var netice=document.getElementById('netice');
var button=document.getElementById('button');
var array=['+','-','/','*'];
var random=Math.floor(Math.random() * 4);
var form=document.getElementById('form');
var p1=document.getElementById('p1');

// console.log(array[random]);

toplanan1.innerHTML = (Math.floor(Math.random() * 100));
toplanan2.innerHTML = (Math.floor(Math.random() * 100));
emel.innerHTML = array[random];
var x=0;

if(emel.innerHTML =='+'){
    x=(+toplanan1.innerHTML)+(+toplanan2.innerHTML);
    // console.log(x);
}else if(emel.innerHTML =='-'){
    x=(+toplanan1.innerHTML)-(+toplanan2.innerHTML);
    // console.log(x);
}else if(emel.innerHTML =='*'){
    x=(+toplanan1.innerHTML)*(+toplanan2.innerHTML);
    // console.log(x);
}else if(emel.innerHTML =='/'){
    x=(+toplanan1.innerHTML)/(+toplanan2.innerHTML);
    // console.log(x);
}

button.addEventListener('click',function(){
    // console.log(surname1.value)
    if(x==netice.value && surname.value!='' && surname1.value!=''){
        form.style.display='none';
       p1.innerHTML='Emeliyyat ugurla sonlandi';
    }else{
       form.style.display='none';
       p1.innerHTML='Yanlishin var';
    }
})

