search = () => {
let input = document.getElementById('myInput');
let filter = input.value.toUpperCase();
let ul = document.getElementById('myUL')
let li = ul.getElementsByTagName('li')
let span = document.querySelector('SPAN')


for (let i = 0; i < li.length; i++) {
 let a = li[i].getElementsByTagName('a')[0];
 
 if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {

    li[i].style.display = '';

    
 }else{  
    li[i].style.display ='none';

 }
}
}