
        let feed=document.getElementById("inst");
        async function showimg(){
            let response=await fetch(`https://api.unsplash.com/photos/random`);
            // let data=await response.json();
            // console.log(response);
            let url=response.url;
            console.log(url);

            let div=document.createElement("div");
            div.className="newone";
            div.innerHTML=`
            <img src="${url}" alt="">`
            feed.appendChild(div);
        }

        document.addEventListener("scroll",function(e){
            console.log(e);
            let {clienHeight,scrollHeight,scrollTop}=e.target.documentElement;
            console.log(scrollHeight);
            console.log(clienHeight);
            console.log(scrollTop);

            if(clienHeight+scrollTop+1>scrollHeight){
                showimg(10);
            }
        })
        showimg(10);
   