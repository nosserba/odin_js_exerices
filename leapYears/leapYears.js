const leapYears = function(year) { 
 return year % 100 == 0 && year % 400 == 0 || (year % 100 != 0 && year % 4 == 0) 
}
// const leapYears = function() was default template
// function() years is the parameter, parameters are the input and some functions require them to be invoked
// checks if year is divisible (%) by 100 AND IF ONLY divisible by 400 too
// OR if year divided by 100 IS NOT EQUAL (!=) to 0 AND IF ONLY also divisible by 4. 
module.exports = leapYears
