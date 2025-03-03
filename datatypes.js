const firstname ="Gift";
const lastname ="Origho";
const country ="Nigeria";
const city ="Delta";
const age ="25";
const IsMarried ="false"
const year ="2025";

////////////checking datatypes(typeof)

console.log(typeof firstname);
console.log("10" == 10);
console.log(parseInt("9.8") == 10);

/////////////3 Js statements providing truthy value

console.log("10" == 10);
console.log(10/10 == 1 && 20 == 20);
console.log(400 /8 == 50 || 8 - 5 ==6);

/////////////// 3 Js statements providing falsy value

console.log("10" == 10);
console.log(100 /10 == 1 && 20 == 20);
console.log(40/8 == 50 || 8 - 5 == 6);


////////////confirming the result of the ffg without using console.log
4 > 3 && 10 < 12; //true
4 > 3 && 10 > 12; //false
4 > 3|| 10  < 12; //true
4 > 3 || 10 > 12; //true
!(4 > 3); //false
!(4 < 3); //true
! false; //true
!(4 > 3 && 10 < 12); //false
!( 4 > 3 && !0 > 12); //true
!(4 ==="4"); //true


//////////////confirming result using console.log
console.log(4 > 3 && 10< 12); //true
console.log(4 > 3 && 10 > 12) //false
console.log(4 > 3|| 10  < 12); //true
console. log(4 > 3 || 10 > 12); //true
console.log(!(4 > 3)); //false
console.log(!(4 < 3)); //true
console.log (! false); //true
console.log(!(4 > 3 && 10 < 12)); //false
console.log(!( 4> 3 && !0 > 12)); //true
console.log( !(4 ==="4")); //true


//////////////Script that prompt user to enter the base and height of a triangle

let base = parseFloat(prompt("enter the base of a triangle:"));
let height = parseFloat(prompt("enter the height of a triangle"));

let area = 0.5 * base * height;

alert(
    "The area of a triangle with base of $(base) and height of $(height) = $(area");


//////////////////checking the legality of driving
let userYear = parseFloat(prompt("Enter the year you were born:"));
const Year = 2025;

If (year - userYear >= 18 ) 
alert ("You are ${year - useryear}. You are old enough to drive");
else {alert("You are ${year - userYear}. You will be allowed to drive after ${18 - (year - userYear)} years")}



/////////////////////Variable Declaration

let challenge = "30 days of Javascript";

///////////////////////////Change toUppercase
console.log(challenge.toUpperCase());
console.log(challenge.toLowercase());


let firstword = challenge.slice(0,2);
console.log(firstword);

let Phrasesliced = challenge.slice(3);
console.log(Phrasesliced);


console.log(challenge.includes("script"));

console.log(challenge.indexOf('a'));

console.log(challenge.lastIndexOf("a"));

let sentence = 
"You can not end a sentence with because because because is a conjunction";
console.log(sentence.indexOf("because"));


console.log(challenge.startsWith("3"));

console.log(challenge.endsWith("Javascript"));

const randNum = Math.floor("Math,random() * 100 + 1");
console.log(randNum);

const a = 20;
const b = 20;


//if
if(a > b){
    console.log("a is greater than b");
    }else{
        console.log("a is less than b");
}

//TERNINARY
let result = a > b ? "a is greater than b" : "a is less than b";
console.log(result);

/////////////////////////Score assigning to students
const studentscore = 10;
let studentGrade ="";

if(studentscore>= 80 && studentscore<= 100) (
    studentGrade = "A");
elseif(studentscore>= 70 && studentscore<=79) 
       { studentGrade = "B";
       }elseif(studentscore >= 60 && studentscore <= 69) 
{studentGrade = "C";
}elseif(studentscore>= 40 && studentscore<= 59)
{studentGrade = "D";
}elseif (studentscore >= 0 && studentscore <= 39)
{tudentGrade ="Fail";
} else { 
    studentGrade="invalid score";
}

console.log("Your grade is: ${studentGrade}");












