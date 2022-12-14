//Cok kullkanilan Array methods ve Array icinde Array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// https://www.w3schools.com/js/js_array_methods.asp

let items=[1, 2, 3, 4, 5]

// Array inside the Array
let maleUsers=['medet', 'mert', 'sahin', 'murat']
let femaleUsers=['Aybis', 'demet', 'ayse', 'fatma', 'Derya']

items.unshift(maleUsers)
console.log(items)

items.push(femaleUsers)
console.log(items)
document.querySelector('#info2').innerHTML= items
console.log(items.length)
console.log('first element:', items[0][0]) // arrayin ilk elementi bir array ve onun ilk elmanina ulastik returns: medet
console.log('last element:', items[items.length-1][femaleUsers.length-1]) // returns derya 

console.log(items[items.length-1][Math.floor(femaleUsers.length/2)]) //mid element of last items element it returns ayse

console.log('length of maleUsers',items[0].length) // items icinde maleUsers arrayine ulastik ve length ine baktik returns:4

console.log('length of femaleUsers',items[items.length-1].length) // item icinde femaleUsers arrayine ulastik ve onun length ine baktik returns:5 


//******* Array icerisinden oge ayirmaki => splice(index, item?) */
const sliceDeneme=items.slice(1,6)
console.log('with slice I seperated part of male and femaleUsers',sliceDeneme) // [1,2,3,4,5]

let splice1=items.splice(items.length-1,1, 'femaleUser deleted and this added') // ayrilan parcayi yakalamak icin declare ettim.
document.querySelector('#info2').innerHTML= items // return: medet,mert, sahin, murat,1,2,3,4,5,femaleUser deleted and this added 

let splice2=items.splice(0,1,'maleUser has spliced')
console.log(items) // retursn: 'maleUser has spliced', 1, 2, 3, 4, 5, 'femaleUser deleted and this added'
console.log(splice2) // returns: ['medet', 'mert', 'sahin', 'murat']

let splice3=items.splice(0,1)+items.splice(items.length-1,1)
console.log(items) // [1, 2, 3, 4, 5]

items=[1,2,3,4,5,6,7]

let myCars=['bmw', 'mercedes', 'suzuki']
const myColors=['white', 'black', ' yellow']
items.push(myCars)
items.unshift(myColors)
console.log('items with colors and cars', items)

let newItems=items.splice(1,items.length-2) // itemsten 1,2,3,4,5,6,7 yi sildim ve sadece myColors ve myCars in kalmisi icin bunu yazdim
console.log(items) // [Array(3), Array(3)]

// console.log('items yeni hali',items)
// let newItems= items.splice(2,4) // bunun anlami index 2 ye git ve 4 tane elemani sil ve o elemanlari newItemsin icinde yakaladim 
// console.log('splice edilmis items',items) // 1, 2, 7 
// console.log('newItems:',newItems) //3,4,5,6

/********************  Array icerisindeki ogenin index bilgisini bulmak => indexOf('value')*/
items.unshift('lorem')
items.push('ipsum')
console.log(items)// ['lorem', Array(3), Array(3), 'ipsum']

console.log(items.indexOf(myColors)) // 1
console.log(items.indexOf(myCars)) // 2 

/********Array kopyalamak => slice, [...ES6] */
let copyItems=items
console.log(items) // ['lorem', Array(3), Array(3), 'ipsum']

copyItems.pop()
console.log('copyItems: ',copyItems)
console.log('items :',items)

copyItems= items.slice() // slice method returns selected elements in an array, as a new array. Yani refference i bozar.
console.log('copyItems= items.slice()', copyItems)

items.pop()
console.log('items:', items, 'copyItems:', copyItems)

let es6Items= [...items] // kopyalamak icin kullaniriz tipki splice gibi items i es6Items declarationinin icine kopyaladi yeni bir arraymis gibi olusturdu
items.pop()
items.pop()
console.log('items:', items)
console.log(es6Items,'[...items]')


/********* iki aray bilgisini birlestirme [...ES6, ...ES6] */
let allUsers=[...femaleUsers, ...maleUsers] // bu yontemle femaleUserts ve maleUsers i allUsers declaration icine kopyaladim ve allUsersi degistirdigim zaman diger arrayler bundan etkilenmeyecek...
//eger kopyalama yontemleri disinda yapsaydim yeni bir array olusturmadigi icin allUseri degistirdigim zaman root olarak belirledigim femaleUsers ve maleUsers arraylerimde degisektii... 
console.log(allUsers,'allUsers by using [...femaleUsers, ...maleUsers]') // ['Aybis', 'demet', 'ayse', 'fatma', 'Derya', 'medet', 'mert', 'sahin', 'murat']


// gordugun gibi slice methoduyla 2 farkli arrayi yeni bir arrayin icine ekleyip yeni bir arraymis gibi kullanmak istedim fakat + islemi donumumu etkiledi ve arrayim stringe donustu ustteki methodu kullann 
let allUsers2=femaleUsers.slice() + maleUsers.slice() 
console.log(allUsers2, 'allUsers2 by using slice methods', typeof allUsers2)


let allUsers3= femaleUsers.slice()// sadece femaleUsers lari allUser3 e kopyaladim ve yeni bir arrayim oldu allUser3 u istedigim gibi degistirebilirim femaleUsers arrayim bundan etkilenmeyecek tekrar ediyorum eger direk esitleyip refferansla kopyalamayi deneseydin ne zaman allUser3 u degisirsen root arrayin etkilencekti 
allUsers3.shift()
console.log('allUser3 with shift() method:', allUsers3, 'femaleUsers: ', femaleUsers)  // aybis allusers3 arrayinde shift edilip disari atildi ama femaleUsers in icinde hala duruyor...
 
let allUsers4= femaleUsers
console.log(femaleUsers) //['Aybis', 'demet', 'ayse', 'fatma', 'Derya']
allUsers4.pop()
console.log(femaleUsers) // ['Aybis', 'demet', 'ayse', 'fatma', 'Derya']

/*************Array icindeki bilgiyi Stringe cevirmek => toString, join */
console.log('toString()', allUsers.toString(), typeof allUsers)

let arrayToString= allUsers.join(' --- ') // hepsini --- ile birlestirdim 
console.log(arrayToString, typeof arrayToString) //Aybis --- demet --- ayse --- fatma --- Derya --- medet --- mert --- sahin --- murat string

//******** istedigimiz index e element eklemek => splice (index , 0 , 'value') */
let newArr=[1, 2, 3, 4, 5, 6, 7]
console.log('newArr:', newArr)
newArr.splice(3, 0, '3.5', '3.7')
console.log('newArr with splice()', newArr)

newArr=[1, 2, 3, 4, 5, 6, 7]
newArr.splice(newArr.length, 0 , 'sonuna ekledim')
console.log(newArr, 'sonuna ekleme yaptik by using splice()') 

newArr.splice(Math.floor(newArr.length/2), 0, 'mid element')
console.log(newArr,'ortaya element ekleme')  //[1, 2, 3, 4, 'mid element', 5, 6, 7, 'sonuna ekledim'] 


/**********map() method */
let users=[
    {firstname: 'medet', lastname: 'diler'},
    {firstname: 'aybis', lastname: 'erden'},
    {firstname: 'mia', lastname: 'mincir'},
]
console.log('users object array', users)

let UsersFullName=users.map(fnc)
function fnc(item){
    return [item.firstname, item.lastname].join(' ')
}
document.querySelector('#info2').innerHTML= UsersFullName
console.log('map function denemsi',UsersFullName)

//PRACTICE AREA WHEN YOU COME HERE TO PRACTICE AGAIN USE THIS AREA AND DELETE FORMER PRACTICE CODES 
let practiceArr=['medet', 'diler', 'aybis', 'dunya']

let number=[1, 2, 3, 4]
let ages=[25, 26, 27]


console.log('includes method: ', practiceArr.includes('dunya', practiceArr.length-1))

let copyArr=practiceArr.slice(1,3)
console.log(copyArr)

console.log([1, 2, 3, 4, 5].slice(1,3))
console.log([3, 7, 8, 11, 13].slice(-4, -1))

let newNumbers=[1, 2, 3, 4, 5]
let sqrNUmbers=newNumbers.map(sqr)
function sqr(num){
    return Math.sqrt(num)
}
console.log(sqrNUmbers)


let age=[20, 30, 33, 36, 40, 42]
// let formDOM=document.querySelector('#form').addEventListener('submit', (e)=>{
//     e.preventDefault();
//     document.querySelector('#info2').innerHTML= age.filter(checkAge)
// })

//function checkAge(ages){
  //  return ages > document.querySelector('#checkAge').value
//}//


const formDOM=document.querySelector('#form').addEventListener('submit', (e)=>{
    e.preventDefault()
    document.querySelector('#info2').innerHTML= age.find(function(age){
        return age> document.querySelector('#checkAge').value;
    })
})









