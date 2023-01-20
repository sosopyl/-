
// ПОИСК ОШИБОК
// 1
// let elems = document.querySelectorAll('p');
// for(let elem of elems){
//     elem.textContent += '!';
// }

// 2
// let elems = document.querySelectorAll('p');

// for (let elem of elems) {
// 	elem.addEventListener('click', function() {
// 		this.textContent = Number(this.textContent) + 1;
// 	});
// }

// 3
// let button = document.querySelector('button');
// let elem   = document.querySelector('p');

// button.addEventListener('click', function() {
// 	elem.innerHTML = '<b>' + elem.innerHTML + '</b>';
// });

// 4
// let button = document.querySelector('button');
// let elems  = document.querySelectorAll('p');

// button.addEventListener('click', function() {
// 	let sum = 0;
	
// 	for (let elem of elems) {
// 		sum += Number(elem.textContent);
// 	}
	
// 	console.log(sum);
// });

// 5
// let elems = document.querySelectorAll('p');

// for (let elem of elems) {
// 	elem.addEventListener('click', () => {
// 		elem.textContent += '!';
// 	});
// }

// 6
// let button = document.querySelector('button');
// let elems  = document.querySelectorAll('p');

// button.addEventListener('click', function() {
// 	for (let elem of elems) {
// 		elem.innerHTML = '<b>' + elem.innerHTML + '</b>';
// 	}
// });

// 7
// let button = document.querySelector('button');
// let elems  = document.querySelectorAll('p');
// let sum = 0;

// for (let elem of elems) {
// 	sum += Number(elem.textContent);
	
// 	button.addEventListener('click', function() {
// 		console.log(sum);
// 	});
// }

// 8

// let button = document.querySelector('button');
// let elems  = document.querySelectorAll('input');
// let sum = 0;

// function func(){
//     let sum = 0;
//     for (let elem of elems) {
//         sum += +elem.value;
//     }
//     console.log(sum)
// }
// button.addEventListener('click', func)

// 9
// let btn  = document.querySelector('#btn');
// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');
// let inp3 = document.querySelector('#inp3');

// btn.addEventListener('click', function() {
// 	inp3.value = +inp1.value + +inp2.value;
// });

// 10
// let btn  = document.querySelector('#btn');
// let res  = document.querySelector('#res');
// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');

// btn.addEventListener('click', function() {
// 	res.textContent = +inp1.value + +inp2.value;
// });

// 11
// let inputs = document.querySelectorAll('input')
// let button = document.querySelector('#btn')

// button.addEventListener('click',function() {
// 	for (let input of inputs) {
// 		if (input.value === input.dataset.text) {
// 			console.log('right')
// 		} else {
// 			console.log('wrong')
// 		}
// 	}
// });
// 12
// let inputs = document.querySelectorAll('input')
// let button = document.querySelector('#btn')

// let texts = [
// 	'text1',
// 	'text2',
// 	'text3',
// ];

// button.addEventListener('click', func);
// function func (){
//     for(let i = 0; i < 3 ; i++){
//         if (inputs[i].value === texts[i]) {
//     			console.log('right')
//         	} else {
//     			console.log('wrong')
//         	}
//     }

// }

// 13
// let inputs = document.querySelectorAll('input');
// let btn = document.querySelector('#btn');
// let sum = 0;

// btn.addEventListener('click', function() {
//     let sum = 0;
//         for (let input of inputs) {
//             sum += +input.value;
//         }
//         console.log(sum)
	
// 	console.log(sum);
// });

// 14
// let btn  = document.querySelector('#btn');
// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');
// let inp3 = document.querySelector('#inp3');



// btn.addEventListener('click', function() {
//     let sum  = +inp1.value + +inp2.value;
// 	inp3.value = sum;
// });

// 15
// let inp = document.querySelector('#inp');

// inp.addEventListener('blur', function() {
// 	let digits = inp.value.split('');
// 	let sum = 0;
	
// 	for (let digit of digits) {
// 		sum += +digit;
// 	}
	
// 	console.log(sum);
// });
