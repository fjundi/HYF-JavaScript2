////Create 3 call back
//Question 1

function threeCallBack(){
    console.log("This number is divisible by 3!");
}

function fiveCallBack(){
    console.log("This number is divisible by 5!");
}

let arr = new Array;

function threeFive(startIndex, stopIndex, threeCallBack, fiveCallBack){
    for(let i = startIndex; i <= stopIndex; i++){
        arr.push(i);
    }

    for (let f = 0; f <= arr.length; f++){
        if (arr[f]%3 == 0) {
            threeCallBack();
        }else if (arr[f]%5 == 0) {
            fiveCallBack();
        } 
    }
}

threeFive(0,21,threeCallBack,fiveCallBack);



console.log("Test")

//Question 3

function repeatStringNumTimes(string, num) {
    // repeat after me

    let repeatedString = "";

    for (let a = 0; a < num; a++){
        repeatedString += string;

    }
    return repeatedString
}
console.log(repeatStringNumTimes("abc", 3));

//Question 4

function repeatStringNumTimes(string, num) {
    // repeat after me

    let repeatedString = "";
    b = 0;

    while (b < num){
        b++;
        repeatedString += string;

    }
    return repeatedString
}
console.log(repeatStringNumTimes("abc", 3));

//Question 5

function repeatStringNumTimes(string, num) {
    // repeat after me

    let repeatedString = "";
    c = 0;

    do { c++; repeatedString += string;
       }
    while (c < num)



        return repeatedString
}
console.log(repeatStringNumTimes("abc", 3));

//Question 6

var Car = function() {
  this.wheels = 4;
  this.engines = 1;
  this.seats = 5;
};

// Only change code below this line.

var MotorBike = function() {
this.wheels = 2;
  this.engines = 1;
  this.seats = 2;
};


//Question 7


    
    function multiplyAll(arr) {
       var product = 1;
      for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++){
          product *= arr[i][j];
        }
      }
      return product;
    }
    // Modify values below to test your code
    multiplyAll([[1,2],[3,4],[5,6,7]]);

//Question 8



//Question 9

var x = 9; 
function f1(val) { 
    val = val+1; 
    return val;
}
f1(x);
console.log(x);

//In this example, the value of x is passed directly into the console.log command.

var y = { x: 9 };
function f2(val) {
    val.x = val.x + 1;
    return val;
}
f2(y);
console.log(y);

//In this example, the reference of y is passed directly into the console.log command. Since the reference of y is an object, f2(y) references the function with the parameter of y, instead of the actual value of y.


