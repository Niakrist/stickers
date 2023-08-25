const addSticker = document.querySelector('.add-sticker');
const stickerFill = document.querySelector('.sticker__fill');
const body = document.querySelector('body');
const closes = document.querySelectorAll('.close-block');
const stickerWrapper = document.querySelector('.sticker-wrapper')
const add = document.querySelector('.add');


addSticker.addEventListener('click', function(e) {

  stickerWrapper.style.display = 'flex';


  
})


closes.forEach(close => {
  close.addEventListener('click', function() {
    stickerWrapper.style.display = '';
  })
})


add.addEventListener('click', function() {
  const textContent = document.querySelector('.text-content');

  const arrColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'F', 'E'];
  let deg = Math.floor(Math.random() * (20 - 0) - 0);
  deg *= Math.round(Math.random()) ? 1 : -1

  let genBGColor = '#';

  for (let i = 0; i < 6; i++) {
    genBGColor += arrColors[Math.floor(Math.random() * 16)];
  }

  const item = document.createElement('div');
  const pen = document.createElement('div');
  const bag = document.createElement('div');
  textContent.focus();
  item.textContent = textContent.value;
  item.className = 'sticker__item';
  pen.className = 'sticker__item-edit';
  bag.className = 'sticker__item-del'

  item.style.backgroundColor = genBGColor;
  item.style.rotate = deg + 'deg';
  stickerFill.appendChild(item);
  item.append(pen, bag)
  console.log(genBGColor)

  bag.addEventListener('click', function() {
    item.remove();
  })
  textContent.value = '';
  stickerWrapper.style.display = '';
})