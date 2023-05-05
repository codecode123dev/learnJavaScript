// var fullName = 'dang ngoc son';
// var age = 26;
// alert(fullName);

// alert(age);


//confirm

// confirm('xacs nhan')

// setInterval(function() {
//     alert('thong bao')
// },1000)

// var myString = 'Hoc JS tai F8! JS';

/////// 1. Length

// console.log(myString.length)

/////// 2. Find Index (kết của Hiển thị vị trí index)
// var myString = 'Hoc JS cung tui';
// console.log(myString.indexOf('JS'));//tìm từ đẩu đến cuối

//console.log(myString.lastIndexOf('JS'))// tìm từ cuối lên đầu

/////// 3. Cut String

// console.log(myString.slice(4,8))
/////// 4. Replace

// console.log(myString.replace('JS','JavaScript'))

// console.log(myString.replace(/JS/g, 'JavaScript'))

//////// 5. Convert to upper case
// console.log(myString.toUpperCase())
///////// 6. Convert to lower case

// console.log(myString.toLowerCase())

/////////7. Trim(xử lý khi người dùng nhập vào Ví dụ : xóa khoảng trắng)

// console.log(myString.trim())

/////////8. Split biến chuỗi thành một array

// var languages = 'JavaScript, PHP, Ruby';
// var languages = 'JavaScript';


// console.log(languages.split(''))

/////////9. Get a character by index

// const myString2 = 'Minh Nguyen'

// console.log(myString2.charAt(15))// chuyền Index ko co thì sẽ thành chuỗi rỗng
// console.log(myString2[0]);
// console.log(myString2[16]);// chuyền Index ko co thì la undefine

// Array

// var languages = [
//     'minh',
//     1,
//     2,
//     'viet'
// ];

// console.log(languages)

//kiểm tra kiểu xem là array hay object

// console.log(Array.isArray(languages))

/////////////////////////////////////// Javascript array method//////////////////////////////
// var languages = [
//     'Javascript',
//     'PHP',
//     'Ruby',
//     'Java'

// ]


////////////////// 1. toString\

// console.log(languages.toString())//Chuyển dữ liệu language sang string


///////////////////  2 Join
// console.log(languages.join(' - '))//biến array thành chuỗi

///////////    3 Pop
// console.log(languages.pop())//xóa element cuối của mảng và trả về phần tử đã xóa
// console.log(languages)


////////////////   4 Push
// console.log(languages)
// console.log(languages.push('C' , 'C#'))//thêm 1 phần tử hoạc nhiều phần tử ở cuối mảng
// console.log(languages)


//////////5 Shift
// console.log(languages)
// console.log(languages.shift())//xóa phẩn tử ở đầu mảng và trả về phần tử đã xóa
// console.log(languages)

///////////6 Unshift
// console.log(languages)
// console.log(languages.unshift('C#', 'C'))//thêm một phần tử vào đầu mảng
// console.log(languages)


//7 Splicing

// var languages = [
//     'Javascript',
//     'PHP',
//     'Ruby',
//     'Java'

// ]

// languages.splice(1,1)//splice(start,deleteCount )//xóa phẩn tử
// languages.splice(1,0, 'C','C#')//splice(start,deleteCount,element )//chèn phẩn tử
// console.log(languages)


//8 Concat // Nối array
// var languages1 = [
//     'Javascript',
//     'PHP',
//     'Ruby',
//     'Java'

// ]

// var languages2 = [
//     'NodeJS'

// ]

// console.log(languages1.concat(languages2))

//9 Slicing//lấy phần tử trong mảng

// var languages1 = [
//     'Javascript',
//     'PHP',
//     'Ruby',
//     'Java'

// ]

// console.log(languages1.slice(1,2))
// console.log(languages1.slice(1))




// /////////////////Function///////////////////////

// function showDialog() {
//     alert('Hi')
// };

// showDialog();

/////////////////////Tham so//////////////////////////

// function writeLog(message, message2) {
//     console.log(message)
//     console.log(message2)
// } 


// writeLog('Test message','Test')


// argument
// function writeLog() {
//     console.log(arguments)
// } 

// writeLog('minh', 'viet')

// for of

// function writeLog() {
//     var myString = '';
//     for( var param of arguments) {
//         myString += `${param} - `
//     }
//     console.log(myString)
// } 
// writeLog('minh', 'viet')


// function show() {
//     console.log(arguments);
// }

// show('minh', 'viet', 'trung')

// `for of` và `for in` là 2 loại vòng lặp trong Javascript được sử dụng cho các mảng và các đối tượng.

// `for of`: được sử dụng để lặp qua các value của đối tượng
// `for in`: được sử dụng để lặp qua các key của đối tượng
// Ví dụ sử dụng `for of` để lặp qua các phần tử của một mảng:
// const arr = [1, 2, 3, 4, 5];

// for (const element of arr) {
//   console.log(element);
// }

// Ví dụ sử dụng `for in` để lặp qua các thuộc tính của một đối tượng:

// const obj = {name: "John", age: 30, city: "New York"};

// for (const key in obj) {
//   console.log(key + ": " + obj[key]);
// }


// function message() {
//     function show() {
//         console.log('Message')
//     }
//     show();
// }

// message();


///////////////////////Function////////////////////////


// Declaration function

// function showMessage() {
//     console.log('message 1')
// }

// //Expression function
// var showMessage2 = function() {
//     console.log('message 2')
// }

//khac nhau la Declaration function có thể gọi trước khi được định nghĩa
//Expression function không thể gọi trước khi được định nghĩa
//VD:
//Declaration function
// show1();
// function show1() {
//     console.log('message 1')
// }



//Expression function

// show2();
// var show2 = function() {
//     console.log('message 2')
// }


//include( chỉ có trong array và string) kết quả hiển thị true/ false

// console.log(Array.prototype.includes);
// console.log(String.prototype.includes);

// var course = 'Hi My name is Minh';

// console.log(course.includes('My'))
// console.log(course.includes('My',1))//1 là vị trí bắt đầu tìm đó là chữ i


// var name1 = ['minh', 'viet', 'trung'];

// console.log(name1.includes('minh'))
// console.log(name1.includes('minh', 1))//1 là vị trí bắt đàu tìm là viet



//////////////////object/////////////////////

// var emailKey = 'email';

// var myInfo = {
//     name: 'Minh',
//     age: '21',
//     address: 'Ha Noi',
//     [emailKey] : 'nguyenvanminh@gmail.com',
//     ['full-Name']: 'Nguyen Van Minh',
//     //tạo method
//     getName : function() {
//         return this.name;
//     }
// }
// myInfo.phone = 123456;//Thêm property
// myInfo["school"] = 'Greenwich';//Thêm property

// var myKey = 'address';
//cach goi
// console.log(myInfo.age);
// console.log(myInfo['full-Name']);
// console.log(myInfo['name']);
// console.log(myInfo[myKey]);

// console.log(myInfo.getName())

// console.log(myInfo)


/////////////////object constructor////////////////////////

// function User(firstName, lastName, avatar) {
//     this.firstName = firstName,
//     this.lastName = lastName,
//     this.avatar = avatar,

//     this.getName = function(){
//         return `${firstName} ${lastName}`
//     }
// };

// var author = new User('Minh', 'Nguyen', 'oke');
// var user = new User('Viet', 'Nguyen', 'Okee');

// author.title = 'hahaha';
// user.comment = 'hihihihi';

// console.log(author);
// console.log(user);

// console.log(user.getName());

// /////////////////onject prototype//////////////////////////////

// User.prototype.class = 'F8';
// User.prototype.getClassName = function(){
//     return this.class
// }

// console.log(author.class)

// console.log(user.getClassName())
///////////////////////////Date//////////////////////////////////

// var date = new Date();

// var day = date.getDay();
// var month = date.getMonth();
// var year = date.getFullYear();

// console.log(`${day}/${month}/${year}`)

///////////////////////Ternary operator//////////////////////

// a = 3;
// b = 2;
// var c = a == 1 ? a : b;//điều kiện ? nếu đúng : nếu sai

// console.log(c)
///////////////////////for in////////////////////////////////////
//lấy ra key của object hay index của array

// var myInfo = {
//     name : 'minh',
//     age : '21',
//     address : 'Ha Noi'
// }

// for (var key in myInfo){
//     console.log(key)
// }


// for (var key in myInfo){
//     console.log(myInfo[key])
// }
// //vd
// var languages = [
//     'java',
//     'Php',
//     'Ruby',
//     'Javascript'
// ]

// for(var key in languages){
//     console.log(key)
// }


// for(var key in languages){
//     console.log(languages[key])
// }

//vd
// var myString = 'Javascript';

// for(var key in myString){
//     console.log(myString[key])
// }


///////////////////for of (Dùng cho object thì phải sử dụng cách khác)/////////////////////////
//Vd cho array
// var myInfo = [
//     'Java',
//     'PHP',
//     'Ruby',
//     'C'
// ];


// for(var value of myInfo){
//     console.log(value);
// }
// //vd cho chuoi
// var myInfo = 'Java';


// for(var value of myInfo){
//     console.log(value);
// }

// vd cho object


// var myInfo = {
//     name : 'minh',
//     age : '21',
//     address : 'Ha Noi'
// }

// for(var value of Object.values(myInfo)){
//     console.log(value)
// }

////////////////////////do while//////////////////
// var i = 0;
// var isSuccess = false;

// do{
//     i++;
//     console.log('Nap the lan ' + i);
//     if(false){
//         isSuccess = true;
//     }
// }while(!isSuccess && i <=3)

///////////////////break and continue//////////////////////

// for(var i = 0; i < 10; i++ ){
//     console.log(i);
//     if(i >= 5){
//         break// thoát luôn
//     }
// }

// for(var i = 0; i < 10; i++ ){
//     if(i % 2 !== 0 ){
//         continue;//bỏ qua điều kiện này rồi tiếp tục
//     }
//     console.log(i);
// }

// ///////////////////Nested loop////////////////////////////////


// var myArray = [
//     [1,2],
//     [3,4],
//     [5,6]
// ];

// for(var i = 0; i < myArray.length; i++){
//     console.log(myArray[i])
// };

// for(var a = 0; a < myArray.length; a++){
//     for(var b = 0; b < myArray[a].length; b++){
//         console.log(myArray[a][b])
//     }
// }


//////////array method//////////////////////////////////


// var courses = [
//     {
//         id: 1,
//         name: 'Java',
//         coin: 200
//     },
//     {
//         id: 2,
//         name: 'Html',
//         coin: 0
//     },
//     {
//         id: 3,
//         name: 'Javascript',
//         coin: 0
//     },
//     {
//         id: 4,
//         name: 'PHP',
//         coin: 200
//     },
//     {
//         id: 5,
//         name: 'C',
//         coin: 200
//     },
//     {
//         id: 6,
//         name: 'Java',
//         coin: 200
//     },
// ]


// forEach() duyệt qua từng phần tử của mảng

// courses.forEach(function(course,index){
//     console.log(index,course);
// });


// every() kiểm tra TẤT CẢ PHẦN TỬ(kiểm tra từ trên xuống dưới) của mảng phải thỏa mãn điều kiện nào đó
// nếu tất cả đều thỏa mãn điều kiện thì mới là true, một trong những phần tử sai thì là false thì ngừng ngay tại đó


// var isFree = courses.every(function(course,index){
//     console.log(index);
//     return course.coin === 0
    
// });

// console.log(isFree)


// SOME() kiểm tra điều kiện nếu  MỘT PHẦN TỬ (kiểm tra từ trên xuống dưới)  trong mảng thỏa mãn điều kiện nào đó
// thì trả về true và ngừng ngay tại đó
// var isFree = courses.some(function(course,index){
//     console.log(index);
//     return course.coin === 0
    
// });

// console.log(isFree)



// find() lặp qua từng phần tử(từ trên xuống dưới) tìm kiếm xem phần tử nào thỏa mãn điều kiện thì dừng lại 
//và trả về phần tử đó còn nếu không thì là undefined
//chỉ trả lại một phần tử

// var course =courses.find(function(course,index){
//     return course.name === 'Java'

// })

// console.log(course)

// lặp qua tất cả các phần tử, xem phần tử nào thỏa mãn thì lấy ra
// trả về tất cả phần tử thỏa mãn

// var listCourses = courses.filter(function(course,index){
//     return course.name === 'Java'

// })

// console.log(listCourses)


//////////////////////map()//////////////////////////////////
// var courses = [
//     {
//         id: 1,
//         name: 'Java',
//         coin: 200
//     },
//     {
//         id: 2,
//         name: 'Html',
//         coin: 0
//     },
//     {
//         id: 3,
//         name: 'Javascript',
//         coin: 0
//     },
//     {
//         id: 4,
//         name: 'PHP',
//         coin: 200
//     },
//     {
//         id: 5,
//         name: 'C',
//         coin: 200
//     },
//     {
//         id: 6,
//         name: 'Java',
//         coin: 200
//     },
// ]

// function courseHandler(course,index,originArray){
    
    // return course;
    // return course.name
    // return `<h2>${course.name}</h2>`
    
    // return {
    //     id : course.id,
    //     name : `Ngon ngu : ${course.name}`,
    //     coin : course.coin,
    //     coinText : `gia : ${course.coin}`,
    //     index: index,
    //     originArray : courses
        

    // }
// }

// var newCourses = courses.map(courseHandler);

// // console.log(newCourses);
// console.log(newCourses.join(''));

///////////////////Reduce()///////////////////////////////

var courses = [
    {
        id: 1,
        name: 'Java',
        coin: 200
    },
    {
        id: 2,
        name: 'Html',
        coin: 0
    },
    {
        id: 3,
        name: 'Javascript',
        coin: 0
    },
    {
        id: 4,
        name: 'PHP',
        coin: 200
    },
    {
        id: 5,
        name: 'C',
        coin: 200
    },
    {
        id: 6,
        name: 'Java',
        coin: 200
    },
]

//vi du : tính tổng số coin
var i = 1
function coinHandler(accumulator, currentValue){
    i++
    const total = accumulator + currentValue.coin;

    console.table({
        'lượt chạy' : i,
        'Biến tích trữ': accumulator,
        'giá khóa học': currentValue.coin,
        'Tích trữ được': total
    })
    return total

}


var totalCoin = courses.reduce(coinHandler,0)// accumulator = 0 => gọi là giá trị khởi tạo

console.log(totalCoin)

