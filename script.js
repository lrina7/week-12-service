
const button = document.querySelector('.button');

function correctComment () {
const info = document.getElementById('info');
let name = document.getElementById('name').value;
let link = document.getElementById('link').value;
let text = document.getElementById('text').value;
let newName = document.querySelector('.nameResult');
let avatar = document.querySelector('.linkResult');
let comment = document.querySelector('.commentResult');

name = name.replace(/\s+/g,'').toLowerCase(); //убираем лишние пробелы и приводим к нижнему регистру
name2 = name[0].toUpperCase() + name.slice(1); //приводим первуй букву к верхнему регистру
newName.textContent = name2; //выводим правильное имя в чат
document.getElementById('name').value = "";//очищаем поле

const newElement = document.createElement('img');//создаём новый элемент для чата
avatar.append(newElement);//добавляем элемент в div
newElement.src = link; //добавляем введённую ссылку для аватара
document.getElementById('link').value = "";//очищаем поле

const spam = ['viagra', 'xxx', 'sex'];//список сло спама
  let filteredText = text;//создаём копию исходного текста
  for (const word of spam) {
    const regex = new RegExp(word, 'gi');//создаём регулярное выражение для поиска слова-спама без учёта регистра
    filteredText = filteredText.replace(regex, '***');//заменяем найденное слово на ***
    comment.textContent = filteredText ;//выводим исправленный комментарий в чат
  }
  document.getElementById('text').value = "";//очищаем поле

  if(name === '' || link === '' || text === '') {
    event.preventDefault();
    alert ('Пожалуйста, заполните все поля!');//выводим сообщение об ошибке - не все поля заполнены!
  }
}

button.addEventListener('click', correctComment);//добавляем слушатель событий на кнопку