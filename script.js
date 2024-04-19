
let imgcontainer=document.getElementById("img-container");

let accessKey = 'O0BmdiN-yyxE-hpjJOwok0fdRqj6a4DW2uHsVWc3BEg';
let count=10;
let imgdata=[];

function setAttributes(element,attributes){
    for(const key in attributes){
        element.setAttribute(key,attributes[key]);
    }
    console.log(attributes);
}



function imgdisplay(){
    imgdata.forEach((phote)=>{
        let a=document.createElement("a");
        setAttributes(a,{
            href:`phote.links.html`,
            target:"_blank"
        });
        console.log(a);
        let img =document.createElement("img");
        setAttributes(img,{
            src:phote.urls.small,
            alt:`${phote.alt_description}`
        });
          
        // console.log(img);
           
        //first we append img to link a
        a.append(img);
        //second we append link to imgcontainer
        imgcontainer.append(a);
    })
}



async function img(){
    let response=await fetch(`https://api.unsplash.com/photos/random/?client_id=${accessKey}&count=${count}`);
     imgdata=await response.json();
    console.log(imgdata);

    imgdisplay();

    window.addEventListener("scroll",()=>{
        if(window.scrollY+window.innerHeight>=document.body.offsetHeight){
            img();
        }
    })
}
img();