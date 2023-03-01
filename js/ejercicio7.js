let num1 = parseInt(prompt('Ingrese primer numero'));
let num2 = parseInt(prompt('Ingrese segundo numero'));
let num3 = parseInt(prompt('Ingrese tercer numero'));
if (num1>num2 && num1>num3) {
    document.write(num1)
}
if (num2>num1 && num2>num3) {
    document.write(num2)
}
if(num3>num1 && num3>num2) {
    document.write(num3)
};