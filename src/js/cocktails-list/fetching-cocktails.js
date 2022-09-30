// const infoBox = document.querySelector('.cocktails-list__info-box');

// function fetchingCocktails() {
//   const searchParams = new URLSearchParams({
//     name: 'bloody mary',
//   });

//   const url = `https://api.api-ninjas.com/v1/cocktail?apikey=wOfjttbmSoWVOtdG23G/VQ==oFynM9uaHElfI8Du&${searchParams}`;

//   return fetch(url).then(response => response.json);
// }

// fetchingCocktails();

// function makingMarkup(information) {
//   const markup = information
//     .map(
//       ({ instructions }) =>
//         `<ul class="cocktails-list__info-list list">
//         <li class="cocktails-list__info-item">
//             <p>Compound: tequila, lime juice, salt</p>
//         </li>
//         <li class="cocktails-list__info-item">
//             <p>Did you know that...${instructions}</p>
//         </li>
//     </ul>`
//     )
//     .join('');

//   infoBox.insertAdjacentHTML('beforeend', markup);
// }
