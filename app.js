     //Ejercicio 1
     //Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.

     //alert ("un mensaje")


     //Ejercicio 2
     //Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).

     //document.write("Hello World!");


     //Ejercicio 3 
     //Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.

     //document.write("la suma de 5+3 es igual a " + (5+3))


     //Ejercicio 4
     //Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»

     //let nombredeusuario = prompt ("Coloque su nombre de usuario") 
     //document.write(`Hola ${nombredeusuario}`);

   
     //Ejercicio 5
     //Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.

     //let numero1 = Number.parseInt (prompt("Ingrese un numero"));
     //let numero2 = Number.parseInt (prompt("Ingrese otro numero"));
     //document.write(`El resultado es ${numero1+numero2}`);


     //Ejercicio 6
     //Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
 
     //let numero1 = Number.parseInt (prompt("Ingrese un numero"));
     //let numero2 = Number.parseInt (prompt("Ingrese otro numero"));
     //if (numero1>numero2) {
      //  document.write(`El primer numero ${numero1} es el mayor `);
     //} else {
      //  document.write(`El segundo numero ${numero2} es el mayor `);
     //}


     //Ejercicio 7
     //Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

     // let numero1 = Number.parseInt (prompt("Ingrese primer numero"));
     // let numero2 = Number.parseInt (prompt("Ingrese segundo numero"));
     // let numero3 = Number.parseInt (prompt("Ingrese tercer nuemero"));
     // if (numero1>numero2) {
     //     if (numero1>numero3) {
     //         document.write(`El numero ${numero1} es el mayor `);
     //     } else { 
     //         document.write(`El numero ${numero3} es el mayor `);
     //     }
     // } else { 
     //     if (numero2>numero3) {
     //         document.write(`El numero ${numero2} es el mayor `);
     //      } else {
     //        document.write(`El numero ${numero3} es el mayor `);
     //     }
     // }


    //  Ejercicio 8
    //  Escribe un programa que pida un número y diga si es divisible por 2

    //  let numero = parseInt (prompt("Ingrese un numero"));

    //  if (numero %2 === 0 ) {
    //    document.write(`El numero ${numero} es divisible por 2 `);

    //  } else {
    //    document.write(`El numero ${numero} no es divisible por 2 `);
    //  }


    //  Ejercicio 9
    //  Escribe un programa que pida una frase y escriba las vocales que aparecen
    //  Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)

    
    //     let frase = prompt("Ingrese una frase");
    
    //     for(let i = 0; i < frase.length; i++) {
    //         let vocal = frase.charAt(i);

    //         if (vocal == "a" || vocal == "e" || vocal == "i" || vocal == "o" || vocal == "u" || 
    // 						vocal == "A" || vocal == "E" || vocal == "I" || vocal == "O" || vocal == "U")
    // 		   {
    // 		document.write(frase.charAt(i));
    //   				}
    //     }
    


     // Ejercicio 10
     // Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
     // let numero = parseInt (prompt("Ingrese un numero"));

     // if (numero %2 == 0){
     //     document.write(`El numero ${numero}  es divisible por 2 `);
     // } else if (numero %3 == 0){
     //     document.write(`El numero ${numero}  es divisible por 3 `);
     // } else if (numero %5 == 0){
     //     document.write(`El numero ${numero}  es divisible por 5 `);
     // } else if (numero %7 == 0){
     //     document.write(`El numero ${numero} es divisible por 7 `);
     // }else {
     //     document.write(`El numero ${numero} no es divisible por 2, por 3, por 5, por 7 `);
     // }


     //  Ejercicio 11
     //  Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
 
    //  let numero = parseInt (prompt("Ingrese un numero"));

    //  if (numero %2 == 0){
    //     document.write(`El numero ${numero}  es divisible por 2 `);
    //  } 
    //  if (numero %3 == 0){
    //     document.write(`El numero ${numero}  es divisible por 3 `);
    //  } 
    //  if (numero %5 == 0){
    //     document.write(`El numero ${numero}  es divisible por 5 `);
    //  }
    //  if (numero %7 == 0){
    //     document.write(`El numero ${numero} es divisible por 7 `);
    //  }
    //  if (numero %2 != 0 & numero %3 != 0 & numero %5 != 0 & numero %7 != 0 ){
    //     document.write(`El numero ${numero} no es divisible por 2, ni por 3, ni por 5, ni por 7 `);
    //  }


