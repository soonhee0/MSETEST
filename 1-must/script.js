'use strict'


/**
 * 【問題1】
 * 
 * 関数isOddを定義しましょう。
 * isOddは、奇数ならtrueを、偶数ならfalseを返します。
 * 
 * @param {number}
 * @returns {boolean}
 */

// ここに関数を定義しましょう


// ここからはテストなので変更を加えないでください
console.log("*** 問題1 ***");


test(isOdd(2), false);
test(isOdd(5), true);
test(isOdd(3), true);
test(isOdd(10), false);



////////////////////////



/**
 * 【問題2】
 * 
 * 関数addObjを定義しましょう。
 * addObjは、第一引数のオブジェクトに、第二引数をkey、第三引数をvalueとして追加したオブジェクトを返します。
 * 
 * @param {Object}
 * @param {string}
 * @param {any}
 * @returns {Object}
 */

// ここに関数を定義しましょう


// ここからはテストなので変更を加えないでください
console.log("*** 問題2 ***");


let testObj = {
  blue: "青",
  yellow: "黄色",
  green: "緑",
}

let expectObj = {
  blue: "青",
  yellow: "黄色",
  green: "緑",
  red: "赤",
}

test(addObj(testObj, "red", "赤"), expectObj);


testObj = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
}

expectObj = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
}

test(addObj(testObj, "five", 5), expectObj);


testObj = {
  user: "engineer",
  age: 25,
  isMember: true,
}

expectObj = {
  user: "engineer",
  age: 25,
  isMember: true,
  address: "Tokyo"
}

test(addObj(testObj, "address", "Tokyo"), expectObj);



////////////////////////



/**
 * 【問題3】
 * 
 * 関数countAppleを定義しましょう。
 * countAppleは、オブジェクトのvalueに"Apple"がいくつ入っているかをカウントして返します。
 * 
 * @param {Object}
 * @returns {number}
 */

// ここに関数を定義しましょう


// ここからはテストなので変更を加えないでください
console.log("*** 問題3 ***");


testObj = {
  boo: "apple",
  hoo: "grape",
  woo: "apple"
}

test(countApple(testObj), 2);


testObj = {
  monkey: "banana",
  elephant: "apple",
  rabbit: "apple",
  bear: "apple",
  turtle: "cabbage",
  hippopotamus: "apple"
}

test(countApple(testObj), 4);


testObj = {
  a: "one",
  b: "two",
  c: "three",
  d: "four"
}

test(countApple(testObj), 0);



////////////////////////



/**
 * 【問題4】
 * 
 * 関数reverseを定義しましょう。
 * reverseは、配列の要素の順番を逆にした配列を返します。
 * 
 * @param {Array<any>}
 * @returns {Array<any>}
 */

// ここに関数を定義しましょう


// ここからはテストなので変更を加えないでください
console.log("*** 問題4 ***");


test(reverse([1, 2, 3]), [3, 2, 1]);
test(reverse([false, true, true]), [true, true, false]);
test(reverse(["my", "job", "is", "engineer"]), ["engineer", "is", "job", "my"]);
test(reverse(["zero"]), ["zero"]);



////////////////////////



/**
 * 【問題5】
 * 
 * 関数diffNumberを定義しましょう。
 * diffNumberは、第一引数に配列と第二引数の配列を比べて、第二引数にはない要素を配列で返します。
 * 
 * @param {Array<any>}
 * @param {Array<any>}
 * @returns {Array<any>}
 */

// ここに関数を定義しましょう


// ここからはテストなので変更を加えないでください
console.log("*** 問題5 ***");


let first = [1, 2, 3, 4, 5];
let second = [2, 4, 6, 8, 9];

test(diffNumber(first, second), [1, 3, 5]);


first = ["ice", "pool", "sea"];
second = ["summer", 8, "pool"];

test(diffNumber(first, second), ["ice", "sea"]);


first = [true, false];
second = [0, 1, 2];

test(diffNumber(first, second), [true, false]);



////////////////////////