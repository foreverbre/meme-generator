document.addEventListener('DOMContentLoaded', function(){
    const newPic = document.querySelector('.meme');
    const formUrl = document.querySelector('#url'); 
    const topText = document.querySelector('#topText');
    const bottomText = document.querySelector('#bottomText');
     
    
   
    newPic.addEventListener('submit', function(event){
        event.preventDefault();
        const newOne = makeMeme(formUrl.value, topText.value, bottomText.value);
    })

    function makeMeme (pic, top, bottom){
        const img = document.createElement('img');
        const meme = document.createElement('div');
        
        const topTxt = document.createElement('p');
        const btmTxt = document.createElement('p');
        
        img.src = pic;
        meme.addEventListener('click', function (e){
            console.log(e.target.tagName)
            if(e.target.tagName ==='IMG'){
                e.target.remove();
                }
        })
        topTxt.innerText = top;
        
        btmTxt.innerText = bottom;
        meme.appendChild(img);
        meme.appendChild(topTxt);
        meme.appendChild(btmTxt);
        document.body.appendChild(meme);
        
    }
});
