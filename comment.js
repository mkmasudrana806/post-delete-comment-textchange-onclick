document.getElementById('post').addEventListener('click', function(){
    const commentElement = document.getElementById('comment');
    const commentText = commentElement.value ;
    const p = document.createElement('p');
    p.innerText = commentText;
    const articleSection = document.getElementById('article');
    articleSection.appendChild(p);
    commentElement.value='';
})