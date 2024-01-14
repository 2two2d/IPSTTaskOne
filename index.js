//Данна строка 'DDADSADASDAAADS' вывести все уникальные символы в строке "DAS"
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function selectUniqLetters(str) {
    var uniqLetters = '';
    str.split('').map(function (item) {
        if (uniqLetters.indexOf(item) === -1) {
            uniqLetters += item;
        }
    });
    return uniqLetters;
}
// console.log(selectUniqLetters('qweasdqwdeadwdaw'))
//Данна строка 'hello alexandr!' сделать из нее 'hhhhh aaaaaaaaa'
function rewordTheLine(str) {
    return str.split(' ').map(function (item) {
        return item[0].repeat(item.length);
    }).join(' ');
}
// console.log(rewordTheLine('hello alexandr!'))
//сделать палиндромы из строк "дим" "манек" "рота" чтоб получилось "димид" "манекенам" "ротатор"
function makePalindrome(str) {
    return str + str.split('').slice(0, -1).reverse().join('');
}
// console.log(makePalindrome('рота'))
//вывести из объекта адресс в формате 'Город: city2 Улица: street2 Дом: house2'.
//из этого же объекта вывести 'фамилия personLastName имя personFirstName купил 5 штук товаров name'
function displayUserProperties(user) {
    console.log("\u0413\u043E\u0440\u043E\u0434: ".concat(user.city, " \u0423\u043B\u0438\u0446\u0430: ").concat(user.street, " \u0414\u043E\u043C: ").concat(user.house));
    console.log("\u0444\u0430\u043C\u0438\u043B\u0438\u044F ".concat(user.lastName, " \u0438\u043C\u044F ").concat(user.firstName, " \u043A\u0443\u043F\u0438\u043B ").concat(user.goodsBought, " \u0448\u0442\u0443\u043A \u0442\u043E\u0432\u0430\u0440\u043E\u0432 name"));
}
// displayUserProperties({city: 'city2', street: 'street2', house: 'house2',
//                             lastName: 'personLastName', firstName: 'personFirstName', goodsBought: 5})
//вывести все числа делящиеся только на себя до 100
function simpleNumbersUpToHundred() {
    var HIGHEST_NUMBER = 100;
    function isSimpleNumber(num) {
        if (num === 1 || num === 4)
            return false;
        for (var i = 2; i <= num / 2; i++) {
            if (!(num % i))
                return false;
        }
        return true;
    }
    for (var i = 1; i < HIGHEST_NUMBER; i++) {
        if (isSimpleNumber(i))
            console.log(i);
    }
}
// simpleNumbersUpToHundred()
//вывести числа фибаначи до 200
function fibonachiNumbers() {
    var HIGHEST_NUMBER = 200;
    function fibonachiAtPosition(number) {
        return number <= 1 ?
            number :
            fibonachiAtPosition(number - 1) + fibonachiAtPosition(number - 2);
    }
    var i = 0;
    while (true) {
        var fibonachiNumber = fibonachiAtPosition(i);
        if (fibonachiNumber > HIGHEST_NUMBER)
            break;
        console.log(fibonachiNumber);
        i += 1;
    }
}
// fibonachiNumbers()
//В переменной month лежит какое-то число из интервала от 1 до 12(можно рандомайзер сделать). Определите в какую пору
// года попадает этот месяц (зима, лето, весна, осень). В переменной year лежит какой то год например 2022.
// Определите високосный это год или нет.
function displayMonthAndYear() {
    var month = Math.round(Math.random() * 12);
    var year = Math.round(Math.random() * 2024);
    var SEASONS = { 'зима': [1, 2, 12], 'весна': [3, 4, 5], 'лето': [6, 7, 8], 'осень': [9, 10, 11] };
    var currentSeason = Object.keys(SEASONS).filter(function (season) {
        return SEASONS[season].indexOf(month) != -1;
    });
    var isYearLeap = (!(year % 4) && (year % 100));
    console.log("\u041C\u0435\u0441\u044F\u0446: ".concat(month, ", \u0441\u0435\u0437\u043E\u043D: ").concat(currentSeason));
    console.log("\u0413\u043E\u0434: ".concat(year, ", \u0432\u0438\u0441\u043E\u043A\u043E\u0441\u043D\u044B\u0439: ").concat(isYearLeap ? 'Да' : 'Нет'));
}
// displayMonthAndYear()
//отфильтровать выборкой массив и бинарным поиском найти элемент массив:[6,1,7,3,5,8,0,-1,3,2,4,5] искомое число 0
function binarySearch(arr, value) {
    arr = arr.sort();
    console.log(arr);
    var isFound = false;
    var position = -1;
    var middle;
    var primeArrLength = arr.length;
    var arrMiddle = function (arr) { return Math.floor(arr.length / 2); };
    while (!isFound) {
        middle = arrMiddle(arr);
        if (arr[middle] === value) {
            position = primeArrLength - middle;
            isFound = true;
        }
        else if (arr[middle] < value) {
            arr = arr.slice(middle);
            position = primeArrLength - arrMiddle(arr);
        }
        else {
            arr = arr.slice(0, middle);
            position = arrMiddle(arr);
            primeArrLength = arr.length;
        }
    }
    return position;
}
// console.log(binarySearch([6,1,7,3,5,8,0,-1,3,2,4,5], 8))
//Cортируем этот массив методом пузырька [1,2,3,6,8,1,6,3,2,1,0,4] и склеиваем с массивом строк ['one', 'two','three']
// решенным заданием будет сичтаться массив [0, 1, 1, 1, 2, 2, 3, 3, 4, 6, 6, 8, 'one', 'two','three']
function displayConcatenatedArray() {
    var arrOfNumbers = [1, 2, 3, 6, 8, 1, 6, 3, 2, 1, 0, 4];
    var arrOfStrings = ['one', 'two', 'three'];
    arrOfNumbers = arrOfNumbers.sort(function (a, b) {
        if (a < b)
            return -1;
        if (a > b)
            return 1;
        return 0;
    });
    var concatenatedArray = __spreadArray(__spreadArray([], arrOfNumbers, true), arrOfStrings, true);
    console.log(concatenatedArray);
}
// displayConcatenatedArray()
//вывести все элементы из двумерного массива [[1,4,5],[1,3,4],[2,6]] добавить все элементы в одномерный массив
// [1,4,5,1,3,4,2,6] и отсоритровать его
function displayMatrix() {
    var matrix = [[1, 4, 5], [1, 3, 4], [2, 6]];
    var array = [1, 4, 5, 1, 3, 4, 2, 6];
    for (var _i = 0, matrix_1 = matrix; _i < matrix_1.length; _i++) {
        var subArr = matrix_1[_i];
        for (var _a = 0, subArr_1 = subArr; _a < subArr_1.length; _a++) {
            var i = subArr_1[_a];
            console.log(i);
            array.push(i);
        }
    }
    array = array.sort();
    console.log(array);
}
// displayMatrix()
// Напишите функцию, которая возвращает вложенный массив вида [[key, value], [key, value]] Ожидаемый результат:
// ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]
function objectToArray(prop) {
    return Object.keys(prop).map(function (key) {
        return [key, prop[key]];
    });
}
// console.log(objectToArray({a: 1, b: 2}))
//Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия),
// rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(),
// который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days
// class Worker{
//
//     name: string
//     surname: string
//     rate: number
//     days: number
//     constructor(name, surname, rate, days) {
//         this.name = name
//         this.surname = surname
//         this.rate = rate
//         this.days = days
//     }
//
//     getSalary(){
//         return this.days * this.rate
//     }
//
// }
//
// let worker = new Worker('Jo', 'Silver', 1300, 12)
// console.log(worker.getSalary())
//Модифицируйте класс Worker из предыдущей задачи следующим образом: сделайте все его свойства приватными,
// а для их чтения сделайте методы-геттеры.
var Worker = /** @class */ (function () {
    function Worker(name, surname, rate, days) {
        this._name = name;
        this._surname = surname;
        this._rate = rate;
        this._days = days;
    }
    Object.defineProperty(Worker.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Worker.prototype, "surname", {
        get: function () {
            return this._surname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Worker.prototype, "rate", {
        get: function () {
            return this._rate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Worker.prototype, "days", {
        get: function () {
            return this._days;
        },
        enumerable: false,
        configurable: true
    });
    Worker.prototype.getSalary = function () {
        return this._days * this._rate;
    };
    return Worker;
}());
// let worker = new Worker('Jo', 'Silver', 1300, 12)
// console.log(worker.name)
//Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(), который параметром принимает строку,
// а возвращает ее в перевернутом виде, метод ucFirst(), который параметром принимает строку, а возвращает эту же строку,
// сделав ее первую букву заглавной и метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки.
var MyString = /** @class */ (function () {
    function MyString() {
        this.reverse = function (str) {
            return str.split('').reverse().join('');
        };
        this.ucFirst = function (str) {
            return str.slice(0, 1).toUpperCase() + str.slice(1);
        };
        this.ucWords = function (str) {
            return str.split(' ').map(function (item) {
                return item.slice(0, 1).toUpperCase() + item.slice(1);
            }).join(' ');
        };
    }
    return MyString;
}());
// let string = new MyString()
// console.log(string.reverse('Дед макар...'))
// console.log(string.ucFirst('капибара'))
// console.log(string.ucWords('безумие есть повторение одного и тогоже действия из раза в раз в ожидании другого результата'))
//создать класс calculation , в котором будет одна переменная calculationLine. методы: setterCalculationLine который
// будет к переменной приравнивать значение которое передается, setLastSymbolCalculationLine который будет в конец строки
// прибавлять символ, gettercalCulationLine который будет выводить переменную, lastSymbol получение последнего символа,
// deleteLastSymbol удаление последнего символа из строки
var calculation = /** @class */ (function () {
    function calculation(str) {
        var _this = this;
        this.setterCalculationLine = function (str) {
            _this._calculationLine = str;
        };
        this.setLastSymbolCalculationLine = function (char) {
            if (char.length !== 1)
                return;
            _this._calculationLine += char;
        };
        this.getterCalculationLine = function () {
            return _this._calculationLine;
        };
        this.lastSymbol = function () {
            return _this._calculationLine.charAt(_this._calculationLine.length - 1);
        };
        this.deleteLastSymbol = function () {
            _this._calculationLine = _this._calculationLine.slice(0, -1);
        };
        this._calculationLine = str;
    }
    return calculation;
}());
var calculator = new calculation('Линия');
console.log('Переменная:');
console.log(calculator.getterCalculationLine());
calculator.setterCalculationLine('Новая лини');
console.log('Новая переменная:');
console.log(calculator.getterCalculationLine());
calculator.setLastSymbolCalculationLine('я');
console.log('Новая переменная после добавления символа "я":');
console.log(calculator.getterCalculationLine());
console.log('Последний символ новой переменной:');
console.log(calculator.lastSymbol());
calculator.deleteLastSymbol();
console.log('Новая переменная после удаления последнего символа:');
console.log(calculator.getterCalculationLine());
