/*
function addClass(obj, cls) {
    var className = obj.className ? obj.className.split(" ") : [];
   // var className= obj.className.split(" ");
    console.log(className);
    for (var i = 0; i < className.length; i++) {
        if (className[i] == cls) return;
    }
    className.push(cls);
    obj.className = className.join(" ");

}

var obj = {
    className: "open menu"
};

addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open'); // без изменений (класс уже существует)
addClass(obj, 'me'); // obj.className='open menu new me'

alert(obj.className); // "open menu new me"*/

/////////////////////////////////////////////////

function camelize(string) {
    var string = string.split('');
    console.log(string);
    for (var i = 0; i < string.length; i++) {
        if (string[i] == "-") {
            string[i] = "";
            string[i + 1] = string[i + 1].toUpperCase();
        }
    }
    console.log(string);
    return string = string.join("");
}

//camelize("background-color") == 'backgroundColor';
//camelize("list-style-image") == 'listStyleImage';
//camelize("-webkit-transition") == 'WebkitTransition';
/////////////////////////////////////////////////
function camelize1(str) {
    var arr = str.split('-');

    for (var i = 1; i < arr.length; i++) {
        // преобразовать: первый символ с большой буквы
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    return arr.join('');
}

//alert( camelize1("background-color") ); // backgroundColor
//alert( camelize1("list-style-image") ); // listStyleImage
//alert( camelize1("-webkit-transition") ); // WebkitTransition
/////////////////////////////////////////////////
var obj = {
    className: "open menu menu"
};

function removeClass(obj, name) {
    var className = obj.className.split(" ");
    for (var i = 0; i < className.length; i++) {
        var remove = className[i].indexOf(name);
        if (remove >= 0) {
            className.splice(i, 1);
            i--;
            //В примере выше есть тонкий момент. Элементы массива проверяются один за другим.
            // При вызове splice удаляется текущий, i-й элемент, и те элементы, которые идут дальше, сдвигаются на его место.
            // Таким образом, на месте i оказывается новый, непроверенный элемент.
            // Чтобы это учесть, строчка (*) уменьшает i, чтобы следующая итерация
            // цикла заново проверила элемент с номером i. Без нее функция будет работать с ошибками.
        }
    }
    return obj.className = className.join(" ")
}

//removeClass(obj, 'open'); // obj.className='menu'
//removeClass(obj, 'blabla'); // без изменений (нет такого класса)
//alert( obj.className );
/////////////////////////////////////////////////

// var arr =[5,3,8,1,7,4];
// function filterRangeInPlace(arr, a, b){
//     for(var i=0; i<arr.length; i++){
//         if (a<=arr[i]<=b){
//             arr.splice(i,1)
//         }
//     }
// }
// filterRangeInPlace(arr, 1, 4);
// console.log(arr);
/////////////////////////////////////////////////
var arr = [5, 2, 1, -10, 8];

function asorti(a, b) {
    if (a < b) return 1;
    if (a > b) return -1;
}

//console.log(arr.sort(asorti));
/////////////////////////////////////////////////
var arr = [1, 2, 3, 4, 5];

function randomArr(a, b) {
    var random = Math.random() - 0.5;
    return random;
}

arr.sort(randomArr);
///alert( arr );
/////////////////////////////////////////////////
// var vasia ={name:"Вася", age:"23"};
// var masha ={name:"Маша", age:"18"};
// var vovochka = {name:"Вовочка", age:"6"};
// var people= [vasia ,masha, vovochka];
// function compareAge(personA, personB) {
//     return personA.age - personB.age;
// }
// people.sort(compareAge);
// console.log(people[0].age);
// for(var i = 0; i < people.length; i++) {
//     alert(people[i].name); // Вовочка Маша Вася
// }
/////////////////////////////////////////////////
var list = {value: 1};
list.nextt = {value: 2};
list.nextt.nextt = {value: 3};
list.nextt.nextt.nextt = {value: 4};
// function printList(list) { // обычный перебор
//     var tmp = list;
//     while (tmp) {
//         alert( tmp.value );
//         tmp = tmp.nextt;
//     }
// }
function printList(list) { // через рекурсию
    // alert( list.value ); // (1)
    if (list.next) {
        printList(list.next); // (2)
    }
}

printList(list);
/////////////////////////////////////////////
var arr = ["Есть", "жизнь", "на", "Марсе"];

var arrLength = arr.map(function (arrL) {
    return arrL.length;
});
//alert( arrLength );
////////////////////////////////////////////
var arr = [1, 2, 3, 4, 5];

function getsSums(arr) {
    var result = [];
    if (!arr.length) return result;

    var Totalsum = arr.reduce(function (summa, num) {
        result.push(summa);
        return summa + num;
    });
    result.push(Totalsum);
    /// console.log(result);
    return result;
}

//alert(getsSums([1,2,3,4,5,]));
/////////////////////////////////////////////////////
function getSums(arr) {
    var arrSums = [];
    var a = arr.reduce(function (sum, current, i, arr) {
        return arrSums[i] = sum + current;
    }, 0);
    return arrSums;
}

//console.log(getsSums([1,2,3,4,5]));
///////////////////////////////////////////////////////
// var a = [1,2,3];
// var b = [4,5,6];
// var str=["css","html","javascript",];
//console.log(a.concat(b));
//console.log(a.reverse());
// console.log(str.shift());
// var res =str.splice(0,1);
// console.log(res);
// var res2 = str.slice(1,4);
// console.log(res2);
// var res = a.slice(0,3);
// var res2 = a.slice(3,5);
// console.log(res, res2);
// a.push(4,5,6);
// var res = a.splice(1,3, 2,3,4);
// console.log(res);
// var res2 = a.splice(3,0, 'a','b','c');
// console.log(a);
// var lern ={js:'test',
//     jq: 'hello',
//     css: 'world'};
// var res = Object.keys(lern);
// console.log(res);
//////////////////////////////////////////////////////////
// var vasya = {name: "Вася", age: 23};
// var masha = {name: "Маша", age: 18};
// var vovochka = {name: "Вовочка", age: 6};
//
// var people = [vasya, masha, vovochka];
// function Sort(people1 , people2) {
//    // return people1.age - people2.age;
//     if (people1.age > people2.age) return 1;
//     if (people1.age < people2.age) return -1;
// }
// people.sort(Sort);
// // теперь people: [vovochka, masha, vasya]
// alert(people[0].age); // 6
////////////////////////////////////////////////////////
// var str = "string";
// str = str.split("");
// str[0] = str[0].toUpperCase();
// var result = str.join("");
// console.log(result);
//
// var str2 = 'hello';
// str2 = str2[0].toUpperCase() + str2.substr(1);
// alert(str2);
////////////////////////////////////////////////////////
// var str = "123456";
// str = str.split("");
// str = str.reverse();
// str = str.join("");
// //console.log(str);
// str = str.split("").reverse().join("");
// //console.log(str);
// var str1 = "http://javascript";
// alert(str1.substring(0,7));
// function test(str) {
//     if(str.substring(0,7) == "http://"){
//         alert("Da");
//     }else{
//         alert("Net");
//     }
// }
//console.log(test(str1));
////////////////////////////////////////////////////////
// function hasElem(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] == 'c') {
//             return true;
//         }
//     }
//
//     return false; //элемент 'c' не найден
// }
// //var arr = ['a', 'b', 'c', 'd', 'с'];
// alert(hasElem(arr));
////////////////////////////////////////////////////////
var str = "";
for (var i = 0; i < 20; i++) {
    str = "";
    for (var j = 0; j <= i; j++) {
        str += "x";
    }
//    console.log(str);
}
////////////////////////////////////////////////////////
var obj = {a: 1, b: 2, c: 3, d: 4};
var result = {};
for (var num in obj) {
    // console.log(obj);
    result[obj[num]] = num;
}
//console.log(result);
////////////////////////////////////////////////////////
// var arr = ['a', 'b', 'c', 'a', 'a', 'b'];
// var count = {};
// for (var i = 0; i < arr.length; i++) {
//     if (count[arr[i]] === undefined) {
//         count[arr[i]] = 1;
//     } else {
//         count[arr[i]]++;
//     }
// }
// console.log(count);
/////////////////////////////////////////////////////////
// function SumArr(arr){
//     var sum=0;
//     for(var i=0; i<arr.length;i++){
//         for(var j=0;j<arr[i].length;j++){
//             sum+=arr[i][j];
//         }
//     }
//     console.log(sum);
// }
// SumArr([[1, 2, 3],[4, 5],[6]]);
/////////////////////////////////////////////////////////
// // var arr = [12, 19, 28, 13, 14, 345];
// var result =[];
// var sum =0;
//
// for(var i=0; i<arr.length; i++){
//     if(inRange(arr[i])){
//         result.push(arr[i]);
//     }
// }
// //console.log(result);
//
// for(var j=0; j<arr.length;j++){
//    sum+= arraySum(getDigits(arr[j]));
// }
// //console.log(sum);
//
// function getDigits(num){ // разбивает числа на строчные цифры
//     var str= String(num);
//     return str.split("");
// }
//
// function arraySum(arr){ // сумирует цифры
//     var sum =0;
//     for(var i=0; i<arr.length; i++){
//         sum+=Number(arr[i]);
//     }
//     return sum;
// }
//  function inRange(num){ // bol
//     var sum = arraySum(getDigits(num));
//
//     if (sum >= 1 && sum <= 9){
//         return true;
//     }else{
//         return false;
//     }
//  }
/////////////////////////////////////////////////////////
// var arr = [-1, 2, 3, 4, 56, 12, -4, -32, 2];
// var newArr = [];
// for (var i = 0; i < arr.length; i++) {
//     if (isNumberInRange(arr[i])) {
//         newArr.push(arr[i]);
//     }
// }
//
// //console.log(newArr) ;
//
// function isNumberInRange(num) {
//     if (num == 13) {
//         return true;
//     }
//     return false;
// }
//
//
// function getDigitsSum(num) {
//     var num = String(num);
//     var sum = 0;
//     for (var i = 0; i < num.length; i++) {
//         sum += Number(num[i]);
//     }
//     return sum;
// }
//
// function Fun(num) {
//     var result = 0;
//     for (var i = 0; i < 2018; i++) {
//         if (getDigitsSum(i) == 13) {
//             console.log(i);
//         }
//     }
// }
//
// function isEven(num) {
//     if (num % 2 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// var newArr = [];
//
// for(var i=0; i<arr.length;i++){
//     if(isEven(arr[i])){
//         newArr.push(arr[i])
//     }
// }
// console.log(newArr);
/////////////////////////////////////////////////////////
// var str= "string";
// var strOne ="var_text_hello";
// var newArr = [];
// var arr = str.split(' ');
// for (var i = 0; i < arr.length; i++) {
//     newArr.push(ucfirst(arr[i]));
// }
// var newStr = newArr.join(' ');
// //alert(newStr);
//
// function ucfirst(str) {
//     return str[0].toUpperCase() + str.substr(1);
// }
// function delHyphen(str){
//     str=str.split('_');
//     var newStr= "";
//     for(var i=0; i<str.length;i++){
//         if(i==0){
//             newStr+=str[i];
//         }else{newStr += ucfirst(str[i])}
//     }
//     return newStr;
// }
// console.log(delHyphen(strOne));
/////////////////////////////////////////////////////////
// var arr = [1, 2, 3, 4, 5, 6];
//
//function outputArr(arr) {
//     var result = arr.shift();
//     console.log(result);
//     if (arr.length != 0) {
//         outputArr(arr);
//     }
// }
//outputArr(arr);
/////////////////////////////////////////////////////////
// function getFigure(num) {
//     return String(num).split("");
// }
// function getNumber(arr){
//     var sum = 0;
//     for(var i=0; i<arr.length; i++){
//         sum += Number(arr[i]);
//     }
//     return sum;
// }
// function getNumAndFig(num){
//     return getNumber(getFigure(num));
// }
//
// function CheckNum(num){
//     var sumnam= getNumAndFig(num);
//      if(sumnam>=9){
//          sumnam = CheckNum(sumnam);
//      }
//      return sumnam;
// }
// console.log(CheckNum(134567));
/////////////////////////////////////////////////////////
function columOne(num){
    for(var i =1; i<=num;i++){
        console.log(i);
    }
}
//columOne(100);
