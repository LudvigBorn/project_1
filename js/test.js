
class Card {
  constructor(optional){

    this.name = optional.name;
    this.age = optional.age;
    this.nix = optional.nix;
  }
  sayAge(){
    console.log(this.age)
  }
}

let firstCard = new Card({
  name: 'Alex',
  age: 33
})

firstCard.sayAge();

function all(){

}

class RenderProperties {
   constructor(options){
        Object.assign(this, {
            fill : false,
            fillStyle : 'rgba(0, 255, 0, 0.5)',
            lineWidth : 1,
            strokeStyle : '#00FF00',
            // hello //error
        }, options);
    }
}

let test = new RenderProperties({
  fill:true,
})

console.log(test)