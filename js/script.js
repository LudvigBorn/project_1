'use strict';
document.addEventListener('DOMContentLoaded',() => {

  let countOfAllQuestion = 5;
  //let countInOnePage = 3;
//Cards
  class Card{
    constructor(ordinal,data){
      this.ordinal = ordinal;
      this.id = data.id;
      this.question = data.question;
      this.parent = document.querySelector(data.parentSelector);
      this.option = data.option;
    }
    render(){
      let div = document.createElement('div');
      div.innerHTML = `
        <div class="question"><span>${this.ordinal} )</span> ${this.question} </div>
        <ol class="answers_block"type="A">
          <li class="option" data-option = "A">${this.option[0]}</li>
          <li class="option" data-option = "B">${this.option[1]}</li>
          <li class="option" data-option = "C">${this.option[2]}</li>
          <li class="option" data-option = "D">${this.option[3]}</li>
        </ol>
      `

      this.parent.append(div);
    }
  }
   let props =
    {
    question: 'New Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto delectus, hic facere nostrum ',
    option: [
      1,
      2,
      3,
      4
    ],
    parentSelector: '.wrapper_question'
   };

  //append cards
  for(let i = 0; i < countOfAllQuestion; i++){
    new Card(i+1, props).render();
  }


  //
  const wrapperQuestion =document.querySelector('.wrapper_question');

  function setSelection(target) {
    let parent = target.parentElement;
      Array.from(parent.children).forEach(item => {
        item.classList.remove('show-selection');
      });
      target.classList.add('show-selection');
  }

  wrapperQuestion.addEventListener('click',(event) => {
    let target = event.target;
    if(target && target.matches('[data-option]')){
      setSelection(target);
      console.log(target.parentNode.parentNode)
    }
  });

});