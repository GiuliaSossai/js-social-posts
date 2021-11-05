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

createPost();

function createPost (){
    //reset ambiente dove stampo la prima volta
    //document.querySelector('.team-container').innerHTML = '';
  
    //1 eseguo ciclo su array per leggerne il contenuto
    for(let index in posts){
        const post = posts[index];
        console.log('post', post);
    
        const id = post.id;
        const content = post.content;
        const media = post.media;
        const authorName = post.author.name;
        const authorImage = post.author.image;
        const likes = post.likes;
        const created = post.created;
        
        console.log('id:', id);
        console.log('content:', content);
        console.log('media:', media);
        console.log('author name:', authorName);
        console.log('authoer image:', authorImage);
        console.log('likes:', likes);
        console.log('date:', created);
        console.log('----->');
    
        //delego alla seconda funzione la parte html di ogni post
        generateHtml(post);  
    }
}

function generateHtml(target){


    
}
