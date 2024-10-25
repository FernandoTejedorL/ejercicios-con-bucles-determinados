/* 1- Crea una función que reciba un número, la función debe 
imprimir una cuenta atrás desde ese número hasta 0\.*/

const countdown = number1 => {
     for (let counter = number1; counter >= 0; counter--) {
        console.log(counter); 
    }
}
countdown(8)

/* 2- Crea una función que reciba un array de 10 números e 
imprima por consola la suma de todos los valores del array.*/

const indexPositions = array2 => {
    let resultTest = 0
    for (const number of array2) {
        resultTest += number
    }
    console.log(resultTest)
}

indexPositions([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


/* 3- Crea una función que reciba un número e imprima por consola la tabla de multiplicar
 del número que ha recibido hasta el 10\. Para el 4 el resultado debe ser:  
    
  4 x 0 \= 0 4 x 1 \= 4 4 x 2 \= 8 4 x 3 \= 12 4 x 4 \= 16 4 x 5 \= 20 4 x 6 \
  = 24 4 x 7 \= 28 4 x 8 \= 32 4 x 9 \= 36 4 x 10 \= 40  */

const multiplyChart = (number3) => {
    for (let counter3 = 0; counter3 <= 10; counter3++){
        console.log(`${number3} x ${counter3} = ${number3 * counter3}`);
    }
}
multiplyChart(4)

    
/* 4- Crea la función inversa para que la tabla de multiplicar salga en orden inverso. 
Para el 4 el resultado debe ser:  
    
  4 x 10 \= 40 4 x 9 \= 36 4 x 8 \= 32 4 x 7 \= 28 4 x 6 \= 24 4 x 5 \=
   20 4 x 4 \= 16 4 x 3 \= 12 4 x 2 \= 8 4 x 1 \= 4 4 x 0 \= 0  */

const reverseMultiplyChart = (number4) => {
    for (let counter4 = 10; counter4 >= 0; counter4--){
        console.log(`${number4} x ${counter4} = ${number4 * counter4}`);
    }
}
reverseMultiplyChart(4)

    
/* 5- Crea una función que reciba el año actual y tu edad, la función debe imprimir:  
    
  - "naciste en el año X"  
  - "En el año X cumpliste 1 año"  
  - "En el año X cumpliste 2 años"  
  - "En el año X cumpliste 3 años" ....*/

const yearAndYears = (year, age) => {
    console.log(`Naciste en el año ${year - age}`);
    let age2 = 1;
    console.log(`En el año ${year-age+1} cumpliste ${age2} año`);
    for (let counter5 = year - (age-2); counter5 <= year; counter5++) {
        age2++;
        console.log(`En el año ${counter5} cumpliste ${age2} años`);
    } 
}
yearAndYears(2024, 38);


/* 6- Crea una función que reciba dos números e imprima todos los números pares 
desde el primero hasta el segundo. Si recibe 2 y 12 imprimirá 2, 4, 6, 8, 10, 12\.*/

const evenInside = (num6a, num6b) => {
    let evensList = []
    for (let counter6 = num6a; counter6 <= num6b; counter6++) {
        if (counter6 % 2 === 0) {
            evensList.push(counter6)
        }
    }
    console.log(evensList)
}
evenInside(0, 15)


/* 7- Crea una función que genere 2 arrays y los rellene con 5 números aleatorios cada uno, 
la función debe decir qué valores se han repetido en los dos arrays.  */

const arraySingle = () => {
    const arrayTo = [];
         for (let counter7 = 0; counter7 < 5; counter7++){
        let randomArrayNumA = Math.floor(Math.random() * 10);
        arrayTo.push(randomArrayNumA);
    }
    return arrayTo;  
}
const arrayTo1 = arraySingle();
const arrayTo2 = arraySingle();
const arrayDoubleComparison = () => {
    for (let counter7b = 0; counter7b < 5; counter7b++) {
        if (arrayTo1.includes(arrayTo2[counter7b])) {
        }
        console.log(`El array 1 [${arrayTo1}] incluye el valor ${arrayTo2[counter7b]} 
            del array 2 [${arrayTo2}]`)
    }
}

arrayDoubleComparison()

    
/* 8- Crea una función que reciba un número y te diga si es primo o no. Un número 
primo es aquel que sólo puede dividirse por si mismo  */

    
/* 9- Crea una función que reciba un array de 10 números, imprime por consola cada número, 
su cuadrado y su cubo en este formato: "Número: 2 \- Cuadrado: 4 \- Cubo: 8". Nota: 
Dentro del objeto Math existe el método pow. Math.pow(número, exponente)  */

const powArray = array9 => {
    for (const number of array9){
        console.log(`Número: ${number}`);
        console.log(`Cuadrado: ${Math.pow(number, 2)}`);
        console.log(`Cubo: ${Math.pow(number, 3)}`);        
    }
}
powArray ([1,2,3,4,5,6,7,8,9,10])
    
/* 10- Crea una función que reciba una palabra e imprima por consola esa palabra pero con las 
vocales en mayúscula.  */

const vowelsToLower = word10 => {
    let newWord10 = ('')
    for (let counter10 = 0; counter10 < word10.length; counter10++){
        if ('aeiouAEIOU'.includes(word10.charAt(counter10))) {
            newWord10 += word10.charAt(counter10).toLowerCase();
        } else {
            newWord10 += word10.charAt(counter10);
           }
    }
    return newWord10
}
const result10 = vowelsToLower('CANTIMPLORA')
console.log(result10)

    
/* 11- Crea una función que reciba una frase e imprima el número de veces que se repite cada vocal, 
por ejemplo para la frase "Enrique ordeña cabras", el resultado por consola debe 
ser: a: 3, e: 3, i: 1, o: 1, u: 1  */

const vowelsRepeated = (sentence) => {
    let aCounter = 0;
    let eCounter = 0;
    let iCounter = 0;
    let oCounter = 0;
    let uCounter = 0;
    for (let counter11 = 0; counter11 < sentence.length; counter11++) {
           if (sentence.charAt(counter11).includes('a')) {
            aCounter += 1;
        } else if (sentence.charAt(counter11).includes('e')) {
            eCounter += 1;
        } else if (sentence.charAt(counter11).includes('i')) {
            iCounter += 1;
        } else if (sentence.charAt(counter11).includes('o')) {
            oCounter += 1;
        } else if (sentence.charAt(counter11).includes('u')) {
            uCounter += 1;
        }
    }
    console.log(`a: ${aCounter}`)
    console.log(`e: ${eCounter}`)
    console.log(`i: ${iCounter}`)
    console.log(`o: ${oCounter}`)
    console.log(`u: ${uCounter}`)
}

vowelsRepeated('es la chica segoviana');
    
/* 12- Crea una función que reciba dos palabras e intercale las letras de cada una para formar una 
nueva palabra. Si la función recibe (hola, adios) el resultado será "haodliao", pero si recibe 
(adios, hola) el resultado será "ahdoiloa"  */

const intercalatedLetters = (word12a,word12b) =>{
    let mixedWord = ('');
    for (let counter12 = 0; counter12 < Math.max(word12a.length, word12b.length); counter12++){
        mixedWord+=word12a.charAt(counter12)+word12b.charAt(counter12);
    }
    console.log(mixedWord);
}
intercalatedLetters('hola','adios');
    
/* 13- Crea una función que reciba una palabra e imprima la misma palabra en orden inverso 
conservando las mayúsculas y las minúsculas. Si recibe "Mariposas" deberá imprimir "sasopiraM"*/

const reverseWord = (word13) => {
    let reverseLetters = ('');
    for (let counter13 = word13.length ; counter13 >= 0 ; counter13--){
        reverseLetters+=word13.charAt(counter13);
    }
    console.log(reverseLetters);
}
reverseWord('Mariposa');

/* 14- Crea una función que reciba un array con 5 palabras, debes imprimir por consola un array que 
contenga la inicial y la última letra de cada palabra en mayúsculas, es decir, si nuestra función 
recibiera un array con \['hola', 'adios', 'gato', 'perro', 'casa'\] deberá imprimir por 
consola \['H', 'A', 'A', 'S', 'G', 'O', 'P','O', 'C', 'A'\]*/

const fiveToLetters = array14 => {
    let newArray14 = [];
    for (let counter14 = 0 ; counter14 < array14.length ; counter14++){
        let lastChar = array14[counter14].charAt(array14[counter14].length-1).toUpperCase(); 
        newArray14.push(array14[counter14].charAt(0).toUpperCase(), lastChar);
    }
    console.log(newArray14);
}
fiveToLetters(['hola', 'adios', 'gato', 'perro', 'casa']);