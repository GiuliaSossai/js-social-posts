const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

/**
 * 1 faccio una funzione per creare il post
 * 2 faccio un'altra funzione che si occupa di creare html di ogni post
 * 3 stampo tutti i post
 */

const authorImage = (userData) => {
    const {name, image} = userData;
    return `<img class="profile-pic" src="${image}" alt="${name}"> `;
}

const authorDefaultImage = (userData) => {
   /*
        1. splittare nome e cognome in array
        2. prendere le iniziali di ogni parola presente in questo array
        3. concatere le iniziali in una unica stringa
        4. stampare il default
     */

    const {name} = userData;
    const nameParts = name.split(' ');
    let initials = '';
    for(let namePart of nameParts){
        initials += namePart.charAt(0);
    } 

    return `<div class="profile-pic-default">
                <span>${initials}</span>
            </div>`;

}

createPost();

const like = document.querySelector('.fa-thumbs-up');
console.log(like);
like.addEventListener('click', doLike);

function createPost (){
    //reset ambiente dove stampo la prima volta
    //document.getElementById('container').innerHTML = '';
  
    //1 eseguo ciclo su array per leggerne il contenuto
    for(let index in posts){
        const post = posts[index];
        console.log('post', post);
    
        //const id = post.id;
        const content = post.content;
        const media = post.media;
        const author = post['author'];
        const nameAuthor = author.name;
        const imageAuthor = author.image;
        const likes = post.likes;
        const date = post.created;
        
        // let newDate = date.toLocaleString();
        // console.log(newDate);
        
        //console.log('id:', id);
        console.log('content:', content);
        console.log('media:', media);
        console.log('author', author);
        console.log('name:', nameAuthor);
        console.log('img autore:', imageAuthor);
        console.log('likes:', likes);
        console.log('date:', date);
        console.log('----->');
    
        //delego alla seconda funzione la parte html di ogni post
        generateHtml(post);  
    }
}

function generateHtml(target){
    //leggo il contenuto del container
    //genero html per ogni post
    //ogni volta aggiungo un post sotto al contenuto gi?? presente
  
    const container = document.getElementById('container');

    //stabilisco che ogni post andr?? in coda a quello che gi?? ?? presente nel container con una variabile
    let mainContent = container.innerHTML;

    //destrutturo oggetto-target (ovvero il mio post)
    const {content, media, author, likes, created} = target;
    
    console.log('post', target);

    //definisco struttura html di mainContent
    mainContent += `
    <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                ${author.image ? authorImage(author) : authorDefaultImage(author)}          
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${author.name}</div>
                    <div class="post-meta__time">${created.split("-").reverse().join("-")}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${content}</div>
        <div class="post__image">
            <img src="${media}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${likes}</b> persone
                </div>
            </div> 
        </div>            
    </div>
    `;

    container.innerHTML = mainContent;


}

function doLike (event){
    console.log('hai cliccato pollice su!');
    
}
