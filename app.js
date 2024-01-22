// local reviews data
const reviews = [
  {
    id: 1,
    name: 'Xiao Yan',
    job: 'Sect Master Xiao',
    img: 'https://th.bing.com/th/id/OIP.utu_iCPDUxgeTpv-_-VqtwHaE0?rs=1&pid=ImgDetMain',
    text: "Xiao Yan is a handsome young man with black hair and pitch-black eyes. ",
  },
  {
    id: 2,
    name: 'Hai Bodong',
    job: 'Ice Emperor',
    img: 'https://th.bing.com/th/id/R.c866b37e33e05dacf25932dc720d8513?rik=hTCZydLtpnIW3Q&pid=ImgRaw&r=0',
    text: 'When he was first shown he was a tall old man with a long light blue hair and beard.',
  },
  {
    id: 3,
    name: 'Xiao Yi Xian',
    job: 'Little Fairy Doctor',
    img: 'https://i.ytimg.com/vi/KpbipwKcYhs/maxres2.jpg?sqp=-oaymwEoCIAKENAF8quKqQMcGADwAQH4AbYIgAK4CIoCDAgAEAEYNSAzKH8wDw==&rs=AOn4CLAV0Ab8pJOFgvGCZ3ljz7ZGRSkpVw',
    text: 'The lady was wearing a pale white dress. She was not extremely beautiful but could be called an uncommon beauty. Her lightly smiling face emitted a fresh aura that was unique and greatly increased her charm.',
  },
  {
    id: 4,
    name: 'Yao Chen',
    job: 'Xiao Yan teacher',
    img: 'https://th.bing.com/th/id/OIP.HGZ-ik7irmWLgClya-Wy2wHaFj?rs=1&pid=ImgDetMain',
    text: 'He is described as an old man with a white beard.',
  },
];
// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener('click', function () {
  currentItem +=3;
  if (currentItem > 3){
    currentItem = 3;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener('click', function () {
  currentItem-=3;
  if (currentItem < 0) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener('click', function () {
  console.log('hello');

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});