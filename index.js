const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    },
    {
        name: "shivam Shukla",
        username: "Shiivam_747",
        location: "pari chowk, Greater Noida",
        avatar: "images/new1.jpg",
        post: "images/prab.jpg",
        comment: " hey there ,lets ready for the party!! ",
        likes: 1234
    }

]

let postingEl=document.getElementById("posting")
function renderImage(){
    let temp=""
for(let i=0;i<posts.length;i+=1){
    temp+=`

    <div class="user-info">
        <div id="post-1-dp"><img  id="post-1-dp" src="${posts[i].avatar}"></div>
        <div class="info">
            <div id="fname">${posts[i].name}</div>
            <div  id="location">${posts[i].location}</div>
        </div>
    </div>
    
    <div class="post-1-image"><img id="post-1"  src="${posts[i].post}" data-react="${posts[i].uuid}"></div>
    <div id="react">
    <img  class="react-icon" src="images/icon-heart.png" data-like="${posts[i].uuid}">
    <img  class="react-icon" src="images/icon-comment.png">
    <img class="react-icon" src="images/icon-dm.png">
    </div>
    
    <div id="likes" class="likes">${posts[i].likes}</div>
    <div id="caption"><strong>${posts[i].username} </strong>${posts[i].comment}</div>

`   
}
postingEl.innerHTML=temp
}
renderImage();
//for likes increment on double click and single //


document.addEventListener('dblclick' ,function(e){
    if(e.target.dataset.react ){
        handleLikes(e.target.dataset.react)
    }
})
function handleLikes(postsId){
    const targetLike=posts.filter(function(likee){
        return likee.uuid=== postsId
    })[0]
    if(targetLike.isLiked){
        targetLike.likes--
        targetLike.isLiked=false
    }else{
        targetLike.likes++
        targetLike.isLiked=true
    }
    
    renderImage();
}
document.addEventListener('Click' ,function(e){
    if(e.target.dataset.like ){
        handleLikes(e.target.dataset.like)
    }
})
function handleLikes(postsId){
    const targetLike=posts.filter(function(likee){
        return likee.uuid=== postsId
    })[0]
    if(targetLike.isLiked){
        targetLike.likes--
        targetLike.isLiked=false
    }else{
        targetLike.likes++
        targetLike.isLiked=true
    }
    
    renderImage();
}

