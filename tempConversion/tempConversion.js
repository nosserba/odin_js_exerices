const ftoc = function(f) {
return Math.round((f - 32) * (5/9) * 10) / 10 
}
// f to c formula is C = (F-32) * 5/9; then to round one decimal divide by 10 
const ctof = function(c) {
return Math.round(((c * 9/5) + 32) * 10) / 10
}
// c to f formula is F = C * (9/5) + 32; then to round divide by 10
module.exports = {
  ftoc,
  ctof
}
