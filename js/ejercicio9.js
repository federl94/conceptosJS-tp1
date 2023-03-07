
let cadena = prompt('Ingrese una frase');

for(let i=0;i<cadena.length;i++){
    if(cadena.charAt(i) === 'a' || cadena.charAt(i) === 'e' || cadena.charAt(i) === 'i' 
    || cadena.charAt(i) === 'o' || cadena.charAt(i) === 'u'){
        document.write(cadena.charAt(i));
    }
}