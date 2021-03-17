const sumAll = function(min, max) { // setting parameter of the sumAll function(parameters 1, parameter 2) 
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";// check parameters no integer return error
    if (min < 0 || max < 0) return "ERROR";// check parameters to see if less than zero  
    if (min > max) {//the "if" condition that needs to pass for code inside {} to run.^ executes those if statements first 
        const temp = min; // block of code to run, first it sets the constant "temp" to = min; 
        min = max; // next line of code to execute
        max = temp; // final line to run inside the min>max condition
    }
    let sum = 0; // creating new variable before our "for" loop, it only exists inside the sumAll function
    for (let i = min; i < max + 1; i++) { // the begin is (let i = min;), condition is (i <max+1), loop runs for i from the min up to (but not including) the max + 1
        sum += i; // (+= is the same as (sum = sum + i) but cleaner to say += ) 
    }
    return sum; // returns sum of all the loops from the min to the max, aka the numbers in the array 
}; 


module.exports = sumAll // was in the problem template
