const $body = document.body;
const $racconChoice = document.querySelector('.raccoon');
const $resultText = document.querySelector('.result_text');
const $resultImg = document.querySelector('.result_card');
const $Audio = document.querySelector('#audio')

const $krCheck = document.querySelector('#korean');
const $cnCheck = document.querySelector('#chinese');
const $wtCheck = document.querySelector('#western');
const $jnCheck = document.querySelector('#japanese');

const foodArray = [
  { food: '볶음밥', category : '중식', image: './img/1.jpg' },
  { food: '짜장면', category: '중식', image: './img/2.jpg' },
  { food: '피자', category: '양식', image: './img/5.jpg' },
  { food: '파스타', category: '양식', image: './img/3.jpg' },
  { food: '제육덮밥', category: '한식', image: './img/4.jpg' },
  { food: '김치찌개', category: '한식', image: './img/6.jpg' },
  { food: '연어초밥', category: '일식', image: './img/7.jpg' },
  { food: '붓카케우동', category: '일식', image: './img/8.jpg' },
  
];



let ranChoice = Math.floor(Math.random() * foodArray.length);

let resultText = foodArray[ranChoice].food;
let resultImage = foodArray[ranChoice].image;


$racconChoice.addEventListener('click', function () {

    $Audio.play();
    $body.classList.add('action');
    let filterFood = foodArray;
    let filterFoods;
    let filterChoice;
    let filterText;
  
    if( $krCheck.checked ) {
      filterFoods = filterFood.filter(food => food.category !== '한식');
      filterChoice = Math.floor(Math.random() * filterFoods.length);
      filterText = filterFoods[filterChoice].food;
      filterImage = filterFoods[filterChoice].image;
      $resultText.textContent = filterText;
      $resultImg.innerHTML = `<img src="${filterImage}">`;
  
    }else if( $cnCheck.checked){
      filterFoods = filterFood.filter(food => food.category !== '중식');
      filterChoice = Math.floor(Math.random() * filterFoods.length);
      filterText = filterFoods[filterChoice].food;
      filterImage = filterFoods[filterChoice].image;
      $resultText.textContent = filterText;
      $resultImg.innerHTML = `<img src="${filterImage}">`;
  
    }else if($wtCheck.checked){
      filterFoods = filterFood.filter(food => food.category !== '양식');
      filterChoice = Math.floor(Math.random() * filterFoods.length);
      filterText = filterFoods[filterChoice].food;
      filterImage = filterFoods[filterChoice].image;
      $resultText.textContent = filterText;
      $resultImg.innerHTML = `<img src="${filterImage}">`;
  
    } else if($jnCheck.checked){
      filterFoods = filterFood.filter(food => food.category !== '일식');
      filterChoice = Math.floor(Math.random() * filterFoods.length);
      filterText = filterFoods[filterChoice].food;
      filterImage = filterFoods[filterChoice].image;
      $resultText.textContent = filterText;
      $resultImg.innerHTML = `<img src="${filterImage}">`;
    }else {
      console.log(localStorage.getItem('resultValue'));
      $resultText.textContent = resultText;
      $resultImg.innerHTML = `<img src="${resultImage}">`;
      }
  
});
