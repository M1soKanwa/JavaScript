/*

<article class="card-wrapper">
            <img class="card-image" src="https://www.goha.ru/s/f/NUk4/plaN44/L6NX3iFBmN.jpg" alt="John avatar">
            <h2 class="username">John</h2>
            <p class="description">Description for John</p>
        </article>

*/


const root = document.querySelector('#root');

function createUserCart (user) {
    const article = document.createElement('article');
    article.classList.add('card-wrapper');
    const img = document.createElement('img');
    
    img.setAttribute('src', user.profilePicture);
    img.setAttribute('alt', user.name);
    img.classList.add('card-image');

    const h2 = document.createElement('h2');
    h2.append(user.name);
    img.classList.add('username');

    const p = document.createElement('p');
    p.append(user.description);
    p.classList.add('description');

    article.append(img, h2, p);

    return article;
}

const cardArray = data.map(user => createUserCart(user));

root.append(...cardArray);


