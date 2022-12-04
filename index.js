// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"];
event = 'suprise'


function writeCards(names, event){
  let appreciationCards=[];
for (let i=0;  i< names.length; i++){
  appreciationCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return appreciationCards;
}
function countDown(startInt){
    while (startInt > 0) {
      console.log(startInt);
      startInt -= 1;
    }
    console.log(startInt);
}
