var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var a = "333";
var b = "salam";
var c = 444;
var d = "hello code";
var People = ["salam", "salam"];
var num = [1, 2, 3, 4];
var data = [
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
var stu = ["ulvi", "Nigar", "Zeyno"];
var JOIN_ARR = __spreadArray(__spreadArray([], data, true), stu, true);
console.log(JOIN_ARR);
var Bollean = false;
var salam = "salam1";
if ("salam" === salam) {
    console.log(true);
}
console.log(data);
var HefeGun;
(function (HefeGun) {
    HefeGun[HefeGun["pazarErtesi"] = 1] = "pazarErtesi";
    HefeGun[HefeGun["CAxsami"] = 2] = "CAxsami";
    HefeGun[HefeGun["Cersenbe"] = 3] = "Cersenbe";
    HefeGun[HefeGun["CumeA"] = 4] = "CumeA";
    HefeGun[HefeGun["Cume"] = 5] = "Cume";
    HefeGun[HefeGun["Senbe"] = 6] = "Senbe";
    HefeGun[HefeGun["Bazar"] = 7] = "Bazar";
})(HefeGun || (HefeGun = {}));
if (HefeGun.pazarErtesi === 1) {
    console.log("birinciu gun");
}
var employe = {};
employe.name = "ulviu";
employe.code = 1111;
employe.hobbies = ["salam", "necesem", 111, 222];
console.log(employe.code, employe.name, employe.hobbies);
var StuName = "Nigar";
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
var Sum = function (a, b) {
    return a + b;
};
console.log(Sum(1, 4));
var Employees = /** @class */ (function () {
    function Employees(code, name) {
        var _this = this;
        this.display = function () { return console.log(_this.empCode + " " + _this.empName); };
        this.empName = name;
        this.empCode = code;
    }
    return Employees;
}());
var emp = new Employees(1, "Ram");
emp.display();
function Devide(a, b) {
    this.a = a;
    this.b = b;
}
Devide.prototype.Sum = function (a, b) {
    return a + b;
};
Devide.prototype.Power = function (a, b) {
    return a * a * a;
};
var devide = new Devide(1, 2);
console.log(devide.Sum(1, 2));
console.log(devide.Power(33));
function Persons(name, age) {
    this.name = name;
    this.age = age;
}
var person5 = new Persons("Ulvi", 22);
Persons.prototype.GetAge = function (age) {
    return age - 2;
};
console.log(person5.GetAge(22));
