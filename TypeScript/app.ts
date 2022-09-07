var a: string = "333";
var b: string = "salam";
var c: number = 444;
var d: any = "hello code";
var People: Array<string> = ["salam", "salam"];
var num: Array<number> = [1, 2, 3, 4];
var data: Array<string | number | Boolean> = [
  "salam",
  "salam",
  "salam",
  12,
  3,
  4,
  45,
  5,
  true,
];

data.push("salam", "ulvi");
var stu: Array<string> = ["ulvi", "Nigar", "Zeyno"];

var JOIN_ARR = [...data, ...stu];
console.log(JOIN_ARR);

var Bollean: Boolean = false;
var salam: string = "salam1";
if ("salam" === salam) {
  console.log(true);
}
console.log(data);

enum HefeGun {
  pazarErtesi = 1,
  CAxsami = 2,
  Cersenbe = 3,
  CumeA = 4,
  Cume = 5,
  Senbe = 6,
  Bazar = 7,
}
if (HefeGun.pazarErtesi === 1) {
  console.log("birinciu gun");
}

interface Employee {
  name: string;
  code: number;
  hobbies: Array<any>;
}
var employe = <Employee>{};
employe.name = "ulviu";
employe.code = 1111;
employe.hobbies = ["salam", "necesem", 111, 222];
console.log(employe.code, employe.name, employe.hobbies);

var StuName: string = "Nigar";

switch (StuName) {
  case "Ulvi":
    console.log("salam Ulvi");

    break;
  case "Nigar":
    console.log("salam UNigar");

    break;
  case "Zeynep":
    console.log("salam Zeynep");

    break;

  default:
    console.log("duzgun daxil edin");

    break;
}

const Sum = (a: number, b: number): number => {
  return a + b;
};
console.log(Sum(1, 4));

class Employees {
  empCode: number;
  empName: string;

  constructor(code: number, name: string) {
    this.empName = name;
    this.empCode = code;
  }

  display = () => console.log(this.empCode + " " + this.empName);
}
let emp = new Employees(1, "Ram");
emp.display();

function Devide(a: number, b: number) {
  this.a = a;
  this.b = b;
}
Devide.prototype.Sum = function (a: number, b: number) {
  return a + b;
};
Devide.prototype.Power = function (a: number, b: number) {
  return a * a * a;
};

const devide = new Devide(1, 2);

console.log(devide.Sum(1, 2));
console.log(devide.Power(33));

function Persons(name: string, age: number){
    this.name = name;
    this.age = age; 
}


const person5=new Persons("Ulvi",22)
Persons.prototype.GetAge=function(age: number){
    return age-2;
}

console.log(person5.GetAge(22));






