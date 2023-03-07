let num = prompt('Ingrese un numero')
if (num%2==0 || num%3==0 || num%5==0 || num%7==0) {
    if (num%2==0) {
        document.write('Es divisible por 2<br>')
    }
    if (num%3==0) {
        document.write('Es divisible por 3<br>')
    }
    if (num%5==0) {
        document.write('Es divisible por 5<br>')
    }
    if (num%7==0) {
        document.write('Es divisible por 7<br>')
    }
}
else {
    document.write('El numero ingresado no es divisible por 2, 3, 5 y 7')
}
