'use strict';
var arr1 = prompt('Please write the heighth for column1');
var arrResult1 = parseInt(arr1);
var arr2 = prompt('Please write the heighth for column2');
var arrResult2 = parseInt(arr2);
var arr3 = prompt('Please write the heighth for column3');
var arrResult3 = parseInt(arr3);
var maxNumber = Math.max(arrResult1, arrResult2, arrResult3);
alert(maxNumber);
