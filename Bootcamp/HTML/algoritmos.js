//Primer algoritmo:

for(var i=0; i<5;i++){   
    console.log(i);
 }

 //Imprime:
 //0 , 1 , 2 , 3, 4



//Segundo algoritmo:
for(var i=0; i<5; i++)
{
   i = i + 1;  
   console.log(i);
}
//Imrpime:
//1 , 3 , 5


//Tercer algoritmo:
for(var i=0; i<5; i++)
{
   i = i + 3; 
   console.log(i);
}
//Imprime:
//3 , 7

//Cuarto algoritmo
function y(num1, num2){   
    return num1+num2;
 }
 console.log(y(2,3))
 console.log(y(3,5))

//Se imprime:
//5 , 8


//Quinto algoritmo
function y(num1, num2){
    console.log(num1);   
    return num1+num2;
 }
 console.log(y(2,3))
 console.log(y(3,5)) 

//Se imprime:
// 2, 5 , 3 , 8

//Sexto algoritmo
a = 15;
console.log(a);
function y(a){
   console.log(a);   
   return a;
}
b = y(10);
console.log(b);

//Se imprime:
//15, 10, 10

//Septimo algoritmo
a = 15;
console.log(a);
function y(a){
   console.log(a);   
   return a*2;
}
b = y(10);
console.log(b);

//Se imprime:
//15, 10, 20 