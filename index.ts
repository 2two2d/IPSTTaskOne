import type {TUser} from './types/TUser'

//Данна строка 'DDADSADASDAAADS' вывести все уникальные символы в строке "DAS"

function selectUniqLetters(str: string): string {

    let uniqLetters: string = ''

    str.split('').map((item)=>{
        if(uniqLetters.indexOf(item) === -1){
            uniqLetters += item
        }
    })

    return uniqLetters
}
// console.log(selectUniqLetters('qweasdqwdeadwdaw'))

//Данна строка 'hello alexandr!' сделать из нее 'hhhhh aaaaaaaaa'

function rewordTheLine(str: string): string {

    return str.split(' ').map((item: string)=>{
        return item[0].repeat(item.length)
    }).join(' ')
}
// console.log(rewordTheLine('hello alexandr!'))

//сделать палиндромы из строк "дим" "манек" "рота" чтоб получилось "димид" "манекенам" "ротатор"

function makePalindrome(str: string): string {

    return str + str.split('').slice(0, -1).reverse().join('')
}
// console.log(makePalindrome('рота'))

//вывести из объекта адресс в формате 'Город: city2 Улица: street2 Дом: house2'.
//из этого же объекта вывести 'фамилия personLastName имя personFirstName купил 5 штук товаров name'

async function displayUserProperties(): Promise<void>{

    const getClientAddress = (user: TUser): string => {
        return `Город: ${user.address.city}\n` +
                `Улица: ${user.address.street}\n` +
                `Дом: ${user.address.house}`
    }

    const getClientStats = (user: TUser): string => {
        return `${user.person.lastName} ${user.person.firstName}` +
                ` купил ${user.productsOrder.count} штук товаров ${user.productsOrder.product.name}`
    }

    const user: TUser = await fetch('https://raw.githubusercontent.com/jakiichu/data/main/data.json').
    then((response) => response.json())

    console.log(getClientAddress(user))
    console.log(getClientStats(user))


}
displayUserProperties()

//вывести все числа делящиеся только на себя до 100

function simpleNumbersUpToHundred(): void{

    const HIGHEST_NUMBER: number = 100

    function isSimpleNumber(num: number): boolean {
        if (num === 1 || num === 4) return false

        for (let i: number = 2; i <= num/2; i++){
            if(!(num % i)) return false
        }

        return true
    }

    for(let i: number = 1; i < HIGHEST_NUMBER; i++){
        if(isSimpleNumber(i)) console.log(i)
    }
}
// simpleNumbersUpToHundred()

//вывести числа фибаначи до 200

function fibonachiNumbers(): void{

    const HIGHEST_NUMBER: number = 200

    function fibonachiAtPosition(number: number): number {
        return number <= 1 ?
               number :
               fibonachiAtPosition(number - 1) + fibonachiAtPosition(number - 2)
    }

    let i: number = 0

    while (true) {

        let fibonachiNumber = fibonachiAtPosition(i)

        if (fibonachiNumber > HIGHEST_NUMBER) break

        console.log(fibonachiNumber)

        i += 1
    }
}

// fibonachiNumbers()

//В переменной month лежит какое-то число из интервала от 1 до 12(можно рандомайзер сделать). Определите в какую пору
// года попадает этот месяц (зима, лето, весна, осень). В переменной year лежит какой то год например 2022.
// Определите високосный это год или нет.

function displayMonthAndYear(): void{

    let month: number = Math.round(Math.random() * 12)
    let year: number = Math.round(Math.random() * 2024)

    const SEASONS: {'зима': number[],
                    'весна': number[],
                    'лето': number[],
                    'осень': number[]} = {'зима': [1,2,12], 'весна': [3,4,5], 'лето': [6,7,8], 'осень': [9,10,11]}

    let currentSeason: string[] = Object.keys(SEASONS).filter((season: string): boolean=>{
        return SEASONS[season].indexOf(month) != -1
    })

    let isYearLeap: boolean = Boolean(! (year % 4) && (year % 100))

    console.log(`Месяц: ${month}, сезон: ${currentSeason}`)
    console.log(`Год: ${year}, високосный: ${isYearLeap ? 'Да' : 'Нет'}`)
}
// displayMonthAndYear()

//отфильтровать выборкой массив и бинарным поиском найти элемент массив:[6,1,7,3,5,8,0,-1,3,2,4,5] искомое число 0

function binarySearch(arr: number[], value: number): number{

    arr = arr.sort()

    console.log(arr)

    let isFound: boolean = false
    let position: number = -1
    let middle: number
    let primeArrLength: number = arr.length

    let arrMiddle = (arr: number[]): number => Math.floor(arr.length/2)

    while(!isFound){
        middle = arrMiddle(arr)
        if (arr[middle] === value){
            position = primeArrLength - middle
            isFound = true
        } else if(arr[middle] < value){
            arr = arr.slice(middle)
            position = primeArrLength - arrMiddle(arr)
        } else {
            arr = arr.slice(0, middle)
            position = arrMiddle(arr)
            primeArrLength = arr.length
        }
    }

    return position
}
// console.log(binarySearch([6,1,7,3,5,8,0,-1,3,2,4,5], 8))

//Cортируем этот массив методом пузырька [1,2,3,6,8,1,6,3,2,1,0,4] и склеиваем с массивом строк ['one', 'two','three']
// решенным заданием будет сичтаться массив [0, 1, 1, 1, 2, 2, 3, 3, 4, 6, 6, 8, 'one', 'two','three']

function displayConcatenatedArray(){

    let arrOfNumbers: number[] = [1,2,3,6,8,1,6,3,2,1,0,4]
    let arrOfStrings: string[] = ['one', 'two','three']

    arrOfNumbers = arrOfNumbers.sort((a: number , b: number): number=>{
        if (a < b) return -1
        if (a > b) return 1
        return 0
    })

    let concatenatedArray: (number|string)[] = [...arrOfNumbers, ...arrOfStrings]

    console.log(concatenatedArray)
}
// displayConcatenatedArray()

//вывести все элементы из двумерного массива [[1,4,5],[1,3,4],[2,6]] добавить все элементы в одномерный массив
// [1,4,5,1,3,4,2,6] и отсоритровать его

function displayMatrix(): void{

    let matrix: number[][] = [[1,4,5],[1,3,4],[2,6]]
    let array: number[] = [1,4,5,1,3,4,2,6]

    for(let subArr of matrix){
        for(let i of subArr){
            console.log(i)
            array.push(i)
        }
    }

    array = array.sort()

    console.log(array)
}
// displayMatrix()

// Напишите функцию, которая возвращает вложенный массив вида [[key, value], [key, value]] Ожидаемый результат:
// ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]

function objectToArray(prop: object): any[][]{

    return Object.keys(prop).map((key: string): [string, any] =>{
        return [key, prop[key]]
    })
}
// console.log(objectToArray({a: 1, b: 2}))

//Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия),
// rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(),
// который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days

class Worker{

    name: string
    surname: string
    rate: number
    days: number
    constructor(name: string, surname: string, rate: number, days: number) {
        this.name = name
        this.surname = surname
        this.rate = rate
        this.days = days
    }

    getSalary(){
        return this.days * this.rate
    }

}

let worker = new Worker('Jo', 'Silver', 1300, 12)
// console.log(worker.getSalary())

//Модифицируйте класс Worker из предыдущей задачи следующим образом: сделайте все его свойства приватными,
// а для их чтения сделайте методы-геттеры.

class ModifiedWorker{

    private _name: string
    private _surname: string
    private _rate: number
    private _days: number
    constructor(name: string, surname: string, rate: number, days: number) {
        this._name = name
        this._surname = surname
        this._rate = rate
        this._days = days
    }

    get name() {
        return this._name
    }

    get surname() {
        return this._surname
    }

    get rate() {
        return this._rate
    }

    get days() {
        return this._days
    }

    getSalary(){
        return this._days * this._rate
    }

}

// let worker = new ModifiedWorker('Jo', 'Silver', 1300, 12)
// console.log(worker.name)

//Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(), который параметром принимает строку,
// а возвращает ее в перевернутом виде, метод ucFirst(), который параметром принимает строку, а возвращает эту же строку,
// сделав ее первую букву заглавной и метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки.

class MyString{

    reverse = (str: string): string => {
        return str.split('').reverse().join('')
    }

    ucFirst = (str: string): string => {
        return str.slice(0,1).toUpperCase() + str.slice(1)
    }

    ucWords = (str: string): string => {
        return str.split(' ').map((item: string)=>{
            return item.slice(0,1).toUpperCase() + item.slice(1)
        }).join(' ')
    }
}

// let string = new MyString()
// console.log(string.reverse('Дед макар...'))
// console.log(string.ucFirst('капибара'))
// console.log(string.ucWords('безумие есть повторение одного и тогоже действия из раза в раз в ожидании другого результата'))

//создать класс calculation , в котором будет одна переменная calculationLine. методы: setterCalculationLine который
// будет к переменной приравнивать значение которое передается, setLastSymbolCalculationLine который будет в конец строки
// прибавлять символ, gettercalCulationLine который будет выводить переменную, lastSymbol получение последнего символа,
// deleteLastSymbol удаление последнего символа из строки

class calculation{
    private _calculationLine: string

    constructor(str: string) {
        this._calculationLine = str
    }

    setterCalculationLine = (str: string): void => {
        this._calculationLine = str
    }

    setLastSymbolCalculationLine = (char: string): void => {
        if (char.length !== 1) return
        this._calculationLine += char
    }

    getterCalculationLine = (): string => {
        return this._calculationLine
    }

    lastSymbol = (): string => {
        return this._calculationLine.charAt(this._calculationLine.length-1)
    }

    deleteLastSymbol = () => {
        this._calculationLine = this._calculationLine.slice(0,-1)
    }

}

// let calculator = new calculation('Линия')
// console.log('Переменная:')
// console.log(calculator.getterCalculationLine())
// calculator.setterCalculationLine('Новая лини')
// console.log('Новая переменная:')
// console.log(calculator.getterCalculationLine())
// calculator.setLastSymbolCalculationLine('я')
// console.log('Новая переменная после добавления символа "я":')
// console.log(calculator.getterCalculationLine())
// console.log('Последний символ новой переменной:')
// console.log(calculator.lastSymbol())
// calculator.deleteLastSymbol()
// console.log('Новая переменная после удаления последнего символа:')
// console.log(calculator.getterCalculationLine())