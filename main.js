/*************************/

function sumation_check(num1, num2) {
  if (num1 == 15 || num2 == 15 || num1 + num2 == 15) return true;
  else return false;
}


//1- console.log(sumation_check(5, 5));
/*************************/

function perfectSquare(num) {
  var b = 0;
  for (var i = 1; i <= num / 2 + 1; i++) {
    if (i * i == num) {
      b = 1;
      return true;
    }
  }
  if (b == 0) {
    return false;
  }
}

//2- perfectSquare(36);
/*************************/

function replace_Zero(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] != i + 1) {
      console.log(i + 1);
      return i + 1;
    }
  }
}

//3- replace_Zero( [1, 2, 0, 4, 5] );
/*************************/

function lowerUpper(ch) {
  if (ch.charCodeAt(0) > 90) {
    console.log(String.fromCharCode(ch.charCodeAt(0) - 32));
    return String.fromCharCode(ch.charCodeAt(0) - 32);
  } else {
    console.log(String.fromCharCode(ch.charCodeAt(0) + 32));
    return String.fromCharCode(ch.charCodeAt(0) + 32);
  }
}
//4- lowerUpper("d");
/*************************/

function calcOdd(num1, num2) {
  var sum = 0;
  for (var i = num1; i < num2; i++) {
    if (i % 2 != 0) {
      sum += i;
    }
  }
  return sum;
}


//5- console.log(calcOdd(10, 30));
/*************************/

function luck(num) {
  var flag = 0;
  var num2;
  for (var i = 0; i < num; i++) {
    num2 = prompt(`enter number ${i + 1}:`);
    if (num2 == 4 || num2 == 7) {
      flag = 1;
    }
  }

  if (flag == 0) {
    console.log("It’s not your lucky day");
    return "It’s not your lucky day";
  } else {
    console.log("It’s your lucky day");
    return "It’s your lucky day";
  }
}

//6- luck(3);
/*************************/

function divisors(num) {
  var arr = [];
  for (var i = 1; i <= num; i++) {
    var di = num / i;
    if (di % 1 == 0) {
      arr.push(i);
    }
  }
  console.log(arr.toString().replaceAll(",", " "));
  return arr.toString();
}

//7- divisors( 12 );
/*************************/

function prime(num) {
  var arr = [];
  if (num >= 1) {
    arr.push(1);
  }
  for (var i = 3; i <= num; i++) {
    var arrtest = [];
    for (var k = 2; k <= i; k++) {
      var di = i / k;

      if (Number.isInteger(di)) {
        arrtest.push(i);
      }
    }
    if (arrtest.length == 1) {
      arr.push(arrtest[0]);
    }
  }

  console.log(arr.toString().replaceAll(",", " "));
  return arr.toString();
}

//8- prime(15)
/*************************/

function oddAndEven(num) {
  var oddNums = 0;
  var evenNums = 0;
  var sumArr = 0;
  var num2;
  var arr = [];

  for (var i = 0; i < num; i++) {
    num2 = prompt(`enter number ${i + 1}:`);
    arr.push(num2);

    while (!num2 || num2 == 0) {
      num2 = prompt(`دخل الرقم متسبهوش فاضى بعد اذنك ${i + 1}:`);
      arr.pop();
      arr.push(num2);
    }
  }

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      evenNums++;
    } else {
      oddNums++;
    }
    sumArr += +arr[i];
  }

  console.log(`the sum of numbers: ${sumArr}`);
  console.log(`the numbers of odds: ${oddNums}`);
  console.log(`the numbers of evens: ${evenNums}`);
  return `the sum of numbers: ${sumArr}, 
  the numbers of odds: ${oddNums} 
  and the numbers of evens: ${evenNums}`;
}

//9- oddAndEven(2);
/*************************/

function pum(num) {
  var st = "";
  for (var i = 0; i < num * 4; i += 4) {
    console.log(`${i + 1} ${i + 2} ${i + 3} PUM`);
    st += `${i + 1} ${i + 2} ${i + 3} PUM, `;
  }
  return st;
}

//10- pum(3);

function mult(num1, num2) {
  if (num1 * num2 > 0) {
    console.log("positive");
    return "positive";
  } else if (num1 * num2 < 0) {
    console.log("negative");
    return "negative";
  } else if (num1 * num2 == 0) {
    console.log("zero");
    return "zero";
  }
}

//11- mult(2, 0);

function finalGrade(exam_garde, projects_num) {
  var finalGrade = 0;
  if (exam_garde > 90 && exam_garde <= 100 && projects_num > 10) {
    finalGrade = 100;
  } else if (exam_garde > 75 && exam_garde <= 90 && projects_num >= 5) {
    finalGrade = 90;
  } else if (exam_garde > 50 && exam_garde <= 75 && projects_num >= 2) {
    finalGrade = 75;
  } else {
    finalGrade = 0;
  }
  return finalGrade;
}

//12- console.log(finalGrade(75, 10));

