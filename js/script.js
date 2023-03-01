//1.	З клавіатури вводяться імена двох дітей та кількість у них цукерок. 
//Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою, або вивести, що кількість однакова.

//First Step - получаем от пользователя имена каждого из детей
// Second Step - получаем от пользователя количество конфет каждого из детей
// Third шаг - проверяем чье количество конфет больше
// Четвертый шаг - выводим результат пользователю

/*const firstChildName = prompt('Напишіть імя вашої дитини сюди', '0')

let quantityFirstChildCandy = parseInt(prompt('напишіть кільких наявних цукерок', '0'))

const secondChildName = prompt('Напишіть імя вашої дитини сюди', '0')
let quantitySecondChildCandy = parseInt(prompt('напишіть кільких наявних цукерок', '0'))

if (quantityFirstChildCandy > quantitySecondChildCandy)
	document.write(`Больше конфеток все таки у ${firstChildName}`)
else if (quantityFirstChildCandy < quantitySecondChildCandy)
	document.write(`Больше конфеток все таки у ${secondChildName}`)
else if (quantityFirstChildCandy === quantitySecondChildCandy)
	document.write(`Больше конфеток все таки одинаково и победила дружбаааааа`)
else
	document.write(`вы ввели некоректное число`)*/


//========================================================================================================================================================

//2.	З клавіатури вводиться ціна товару і кількість грошей. 
//Якщо грошей не вистачає то відмовляємо у покупці, інакше, якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.


// Отримуємо ціну товару - parseFloat - Number
// отримуємо кількість наявних грошей у покупця
// перевіряємо чи вистачає грошей 
// якщо грошей не вистачає то пропонуємо купити лотерею за 4 грн
/*
let priceProduct = parseFloat(prompt('Введіть вартість товару', '0'))
let quantityMoney = parseFloat(prompt('Введіть наявну кількість грошенят', '0'))
let remainderMoney = quantityMoney - priceProduct;

if (quantityMoney < priceProduct)
	document.write(`Вибачте але сумми в ${quantityMoney} не вистачає для покупки данного товару`)
else if (remainderMoney >= 4)
	document.write(`Пропонуємо купити ще лотерейку за 4 грн`)*/

//========================================================================================================================================================

//3.	Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.




//========================================================================================================================================================
//4.	З клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером).


/*let humanAge = parseFloat(prompt('Введіть свій вік'))

if (humanAge <= 6)
	document.write(`Вибачте але ви ще тільки у садочку`)
else if (humanAge <= 17)
	document.write(`Вибачте але ви ще тільки школяр`)
else if (humanAge > 17 && humanAge <= 25)
	document.write(`Ви Студент`)
else if (humanAge > 25 && humanAge < 60)
	document.write(`Ви роботяга`)
else if (humanAge >= 60)
	document.write(`Вибачте але вам тільки в могилу`)
*/

//========================================================================================================================================================


//5.	З клавіатури вводиться назва категорії водія (А-мотоцикл, В-легковий автомобіль, 
//С-вантажний автомобіль). Вивести на екран назву транспортного засобу, яким він може керувати.

//1. Отримуємо  назву орднієї з категорій А, В, С
//2. перевіряємо чи дорівнює назва введеного значення данним у змінних
//3. Якщо так то виводимо назву відповідної категорії, якщо ні то видаємо помилку
/*
const motorBike = 'A'
const car = 'B'
const freightСar = 'C'

let categoryTransport = prompt('Введите категорию водительских прав', 'null')

if (categoryTransport === motorBike)
	document.write('У вас право управление мотоциклом')
else if (categoryTransport === car)
	document.write('У вас право управление легковым автомобилем')
else if (categoryTransport === freightСar)
	document.write('У вас право управление грузовым автомобилем')
else
	document.write(`Avada Cedavra`)*/


//========================================================================================================================================================

//6.	З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.

/*const MONDAY = 1
const TUESDAY = 2
const WENSDAY = 3
const THURSDAY = 4
const FRIDAY = 5
const SATURDAY = 6
const SUNDAY = 7

let someDay = parseInt(prompt(`Введіть номер дня тижня`, '0'))
let result;

if (someDay === MONDAY)
	result = 'Monday'
else if (someDay === TUESDAY)
	result = 'tuesday'
else if (someDay === WENSDAY)
	result = 'wensday'
else if (someDay === THURSDAY)
	result = 'thursday'
else if (someDay === FRIDAY)
	result = 'friday'
else if (someDay === SATURDAY)
	result = 'saturday'
else if (someDay === SUNDAY)
	result = 'sunday'
console.log(result);*/


//========================================================================================================================================================
//7.	З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься


/*let someMonth = parseInt(prompt(`Введіть номер місяця`, '0'))

if (someMonth <= 2 || someMonth === 12)
	console.log('winter')
else if (someMonth <= 5)
	console.log('spring')
else if (someMonth >= 6 && someMonth < 9)
	console.log('summer')
else if (someMonth >= 9)
	console.log('authem')*/

/*
const myNumber = parseInt(prompt('your number'))
const mySecondNumber = parseInt(prompt('your number'))
const myThirdNumber = parseInt(prompt('your number'))


let resultNumber = Math.max(myNumber, mySecondNumber, myThirdNumber)

console.log(resultNumber);*/


//========================================================================================================================================================

// З клавіатури 6 разів генерується число від 1 до 10  і кожного разу дається можливість користувачу вгадати число.

/*let guessedCount = 0
for (i = 0; i < 10; i++) {
	let compNum = 1 + Math.floor(Math.random() * 10)
	let userNum = parseInt(prompt('Введите ваше число'))
	if (userNum === compNum) {
		guessedCount++
		document.write(`User ${userNum}, Comp ${compNum}<br> `)
	}
}
document.write(`Guess ${guessedCount} `)*/

/*let pass

for (let i = 0; (i < 3) && (pass !== '123'); i++) {
	pass = prompt(`Password`)
}
document.write(`Hello Hozyain`)*/

/*let pass
let i = 0

while ((i < 3) && (pass !== '123')) {
	pass = prompt(`Password`)
	i++
}
document.write(`Hello Hozyain`)*/


/*for (let c1 = 0; c1 <= 9; c1++) {
	for (let c2 = 0; c2 <= 9; c2++) {
		console.log(`${c1} - ${c2}`);
	}
}*/



//Оленка має 0 грн і хоче назбирати на телефон який коштує 10000грн. Для цього вона кожного разу допомагає мамі і отримує випадкову суму грошей від 1 - 200 грн.
// Підрахувати скільки разів Оленка має допомогти мамі щоб назбирати на телефон.

/*let startMoney = 0
const phonePrice = 10000

const minPayment = 1, maxPayment = 200

let counter = 0


do {
	const payment = minPayment + Math.floor(Math.random() * (maxPayment - minPayment + 1))
	startMoney += payment
	counter++
} while (startMoney < phonePrice);
document.write(`${counter}`)*/


//do while

//========================================================================================================================================================


//while

/*let money = 0
const phonePrice = 10000

const minPayment = 1, maxPayment = 400

let counter = 0

while (money < phonePrice) {
	const payment = minPayment + Math.floor(Math.random() * (maxPayment - minPayment + 1))
	money += payment
	counter++
}

document.write(`result sum is ${counter}`)*/


//Generation some number
/*const minNumber = 1
const maxNumber = 40000

let resultNumber = minNumber + Math.floor(Math.random() * (maxNumber - minNumber + 1))

console.log(resultNumber);*/

//========================================================================================================================================================


//3.	Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.



for (let i = 0; i <= 9; i++) {
	for (let a = 0; a <= 9; a++) {
		console.log(`${i} - ${a}`)
	}
}