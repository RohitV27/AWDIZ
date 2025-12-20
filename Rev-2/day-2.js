for (i = 1; i <= 50; i += 10) {
    console.log(i);
}


// To print elements of an array in reverse order

var numbers = [10, 20, 30, 40, 50, 60];
for (var i = 4; i >= 0; i -= 10) {
    console.log(numbers[i]);
}

var count = 0;
for (var i = 20; i <= 46; i++) {
    if (i % 2 == 0) {
        count++;
        console.log(i);
    }
}
console.log("Total even numbers between 20 and 46 are: " + count);

// To find even numbers in an array

var Num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evenArray = [];
var Count = 0;
for (var i = 0; i < Num.length; i++) {
    if (Num[i] % 2 == 0) {
        evenArray.push(Num[i]);
        Count++;
}
}
console.log(evenArray);
console.log("Total even numbers in the array are: " + Count);


// To find the target value in the array

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var target = 10;
var flag = false;
for (var i = 0; i < array.length; i++) {
    if (array[i] == target) {
        console.log("Found it");
        flag = true;
    }
}

if (flag == false) {
    console.log("Not found");
}

