/* -------------------------------------------------------------------
 * Assignment 4th        : Problem Solving for JavaScript
 * Author Name           : Riyad Hossen
 * Created Date          : 07 February 2024
------------------------------------------------------------------- */

/*------------------------------------------------------------------
[Problem List]
* 01. Help The Zoo Manager
* 02. Good Name , Bad Name
* 03. Virus in my Array
* 04. Make A Great Password
* 05. Monthly Savings of a Freelancer
------------------------------------------------------------------- */

/*------------------------------------------------------------------
[Problem 01]
Help The Zoo Manager
------------------------------------------------------------------- */

function calculateMoney(ticketSale) {
    if (typeof ticketSale !== 'number' || ticketSale < 0) {
        return 'Invalid Number';
    }

    const perTicketPrice = 120;
    const dailyCoast = 500;
    const allStaffLunchCoast = 8 * 50;
    const totalExpenses = dailyCoast + allStaffLunchCoast;
    const totalIncome = ticketSale * perTicketPrice;
    const remainingMoney = totalIncome - totalExpenses;
    return remainingMoney;
}

// const numItemSoldPerDay = 10;
// const moneyRemaining = calculateMoney(numItemSoldPerDay);
// console.log(moneyRemaining);

/*------------------------------------------------------------------
[Problem 02]
Good Name, Bad Name
------------------------------------------------------------------- */

function checkName(name) {
    if (typeof name!=='string') {
        return 'Invalid';
    }
    const nameLastLetter = name.slice(- 1).toLowerCase();
    if (nameLastLetter === 'a' || nameLastLetter === 'y' || nameLastLetter === 'i' || nameLastLetter === 'e' || nameLastLetter === 'o' || nameLastLetter === 'u' || nameLastLetter === 'w') {
        return 'Good Name';
    }
    else {
        return 'Bad Name';
    }
}

// console.log(checkName(shanto));

/*------------------------------------------------------------------
[Problem 03]
Virus in my Array
------------------------------------------------------------------- */

function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        return 'Invalid Array';
    }

    let newArray = [];
    for (let i = 0; i < array.length; i++){
        if (typeof array[i] === 'number' && !isNaN(array[i])){
            newArray.push(array[i]);
        }
    }

    return newArray;
}

// let inputArray = [NaN, 1, 12, 0, -1, undefined];
// let inputArrayOptional = ['1', {num:2}, NaN];
// let inputArray = [1, null, undefined, 18, -19, NaN, '12', [1,2], {obb: 'lala'}];
// console.log(deleteInvalids(inputArray));
// console.log(deleteInvalids('array'));
// console.log(deleteInvalids(45));

/*------------------------------------------------------------------
[Problem 04]
Make A Great Password
------------------------------------------------------------------- */

function password(obj) {
    if(!obj || typeof obj !== 'object' || Object.keys(obj).length !== 3){
        return 'Invalid';
    }

    const {name, birthYear, siteName} = obj;
    if(typeof birthYear !== 'number' || !(/^\d{4}$/).test(birthYear.toString())){
        return 'Invalid';
    }

    const password = `${siteName[0].toUpperCase()}${siteName.substring(1, siteName.length)}#${birthYear}`;
    return password;
}


