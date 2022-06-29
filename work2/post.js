// POST SIRALAMA VE POST EKLEME ÖDEVİ
// #ÖDEV 2

const posts = [
    {id : 1, name : '1. POST'},
    {id : 2, name : '2. POST'},
    {id : 3, name : '3. POST'}
];

const listPosts = () => {
    posts.map(post => {
        console.log(post.name)
    })
}

// const addPost = (newPost) => {   ///////////////////// düz yapı
//     posts.push(newPost)
// }

// addPost({id : 4, name : '4. POST'})

// listPosts()

const addPost = (newPost) => {    ///////////////////// async await yapı
    const promise1 = new Promise((resolve, reject) => {
        posts.push(newPost)
        resolve(posts)
        reject('HATA')
    })
    
}

async function showPosts() {

    try{
        await addPost({id : 4, name : '4. POST'})
    listPosts()
    }catch (err) {
        console.log(err);
    }
    
}

showPosts()

