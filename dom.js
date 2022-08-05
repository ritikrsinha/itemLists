// console.dir(document);

// console.log(document.domain);
// console.log(document.URL); 
// console.log(document.title);
// document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);

// // document.all[10].textContent = "Hello";

// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID //
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// var main = document.querySelector('.title');
// console.log(headerTitle);
// headerTitle.textContent = ' Hello';
// headerTitle.innerText = 'Goodbye'
// main.style.fontWeight = 'bold';
// main.style.color = 'green';
// main.innerHTML = 'ADD ITEMS';
// header.style.borderBottom = 'solid 2px black';

// GETELEMENTSBYCLASSNAME //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold'; 
// items[1].style.backgroundColor = 'yellow';

// error
// items.style.backgroundColor = "light grey";

// for(let i = 0; i<items.length; i++){

// items[i].style.backgroundColor = '#f4f4f4';
// }
// items[2].style.backgroundColor = 'green';

// for(let i = 0; i<items.length; i++){

//     items[i].style.fontWeight = 'bold';
// }

// GETELEMENTSBYTAGNAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold'; 
// li[1].style.backgroundColor = 'yellow';
// for(let i = 0; i<li.length; i++){
// li[i].style.backgroundColor = 'gray';
// }

// QUERYSELECTOR //
// var header = document.querySelector('#main-header');
// header.style.borderBotton = 'solid 4px grey';

// var input = document.querySelector('input');
// input.value = "Hello World!";

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red'; 

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'green';

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.visibility = 'hidden';

// QUERYSELECTORALL //

var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = "Hello";

let odd = document.querySelectorAll('li:nth-child(odd)');
for(let i=0; i<odd.length; i++){
   odd[i].style.backgroundColor = "green";
}

let li = document.querySelectorAll('.list-group-item');
console.log(li);
li[1].style.color = 'green';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');
// for(let i=0; i<odd.length; i++){
//   odd[i].style.backgroundColor = "green";
//   even[i].style.backgroundColor = "#ccc";
// }