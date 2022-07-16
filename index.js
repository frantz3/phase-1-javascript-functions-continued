// code your solution here
function saturdayFun(haveFun = `roller-skate`) { 
    return `This Saturday, I want to ${haveFun}!`
}

function mondayWork(work = `go to the office`) {
    return `This Monday, I will ${work}.`
}

//i need to define a function called wrapAdjective that gets passed a string with default of "*" and returns a function
function wrapAdjective(emphasis = '*') {
    //i need to return a sub function that gets passed a string but defaults to the verbiage "special"
    const myFunc = function insideFoo(par = 'special') {
        //i need to string interpolate what is passed in to return to match test cases
       return `You are ${emphasis}${par}${emphasis}!`
    }
    return myFunc
    
}