
//fatiando

// const doce = [1,2,3,4,5,6,7,8];
// const nutricionista = doce.slice(2,5);
// console.log(nutricionista);

// function sliceArray() {

// const originalArray = [1, 2, 3, 4, 5];
// const nutri = originalArray.slice(1,5);

// console.log(nutri);
//  }

 function sliceArray() {

const foods = ['feijoada', 'doce de leite', 'Mix de folhas', 'panqueca de banana fit', 'Brownie Fit' , 'Brigadeiro' , 'Buchada' , 'Batata Frita' , 'Big Mac'];
alert(foods.slice(2,5));

console.log(foods.slice(2));
// Expected output: Array ['Mix de folhas', 'panqueca de banana fit', 'Big Mac']

console.log(foods.slice(2, 4));
// Expected output: Array ['Mix de folhas', 'panqueca de banana fit']

console.log(foods.slice(1, 5));
// Expected output: Array ['doce de leite', 'Mix de folhas', 'panqueca de banana fit', 'Big Mac']

console.log(foods.slice(-2));
// Expected output: Array ['panqueca de banana fit', 'Big Mac']

console.log(foods.slice(2, -1));
// Expected output: Array ['Mix de folhas', 'panqueca de banana fit']

console.log(foods.slice());
// Expected output: Array ['feijoada', 'doce de leite', 'Mix de folhas', 'panqueca de banana fit', 'Big Mac']
 }