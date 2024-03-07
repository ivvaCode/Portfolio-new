
const back = document.querySelector(`#back`);
const next = document.querySelector(`#next`);
const photos =  [`animal.jpg`, `api.jpg`, `cake.jpg`, `count.jpg`, `dred.jpg`, `face.jpg`, `felicita.jpg`, `florida.jpg`, `list.jpg`, `low.jpg`, `medi.jpg`, `movie.jpg`, `photo.jpg`, `play.jpg`, `prediction.jpg`, `santa.jpg`, `shoes.jpg`, `shop.jpg`, `sport.jpg`, `wed.jpg`];
const names = [`Выбери животное`, `Погода`, `Рецепты тортов`, `Рассчитай бюджет`, `Сайт перкарни`, `Распознавание лица`, `Сайт ресторана`, `Счетчик до отпуска`, `Список дел`, `Cайт адвокатов`, `Cайт для медитации`, `Поиск фильмов`, `Сайт фотографа`, `Игра с ПК`, `Предсказания`, `До Рождества осталось...`, `Выбери правильный ответ`, `Cайт магазина`, `Сайт спортзала`, `Приглашение на свадьбу`,];
const links = [`https://choose-an-animal.glitch.me/`, `https://my-city-weather.glitch.me/`, `https://recipes-of-caces.glitch.me/`, `https://your-budget-for-rest.glitch.me/`, `https://ninth-topaz-sale.glitch.me/`, ``, `https://felicita-restaurant.glitch.me/`, `https://we-are-going-to-florida.glitch.me/`, `https://my-deal.glitch.me/`, `https://low-site.glitch.me/`, `https://relax-evening.glitch.me/`, `https://search-of-movies.glitch.me/`, `https://photo-svetlana-ivanova.glitch.me/`, `https://my-play-with-pc.glitch.me/`, `https://prediction-23.glitch.me/`, `https://santa-is-coming-to-us.glitch.me/`, `https://about-shoes.glitch.me/`, `https://our-shoes.glitch.me/`, `https://sport-gum.glitch.me/`, `https://tom-kate-wedding.glitch.me/`]
let i=0

next.addEventListener(`click`, () => {
         i++;
         if (i>photos.length-1 ) {
            i=0;
         };
         document.querySelector(`#pictures`).src=photos[i];
         document.querySelector(`#names`).src=names[i];
         document.querySelector(`#links`).src=links[i]; 
     })

back.addEventListener(`click`, () => {
         i--;
         if (i<0) {
          i = photos.length-1;
            };
            document.querySelector(`#pictures`).src=photos[i];
            document.querySelector(`#names`).src=names[i];
            document.querySelector(`#links`).src=links[i];
    })

