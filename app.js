let API='AIzaSyDQ1-orBDuR-ev4-2covhebjBNFt6OvGiQ'

async function get(){
    let query=document.getElementById("Search").value;
    let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=${API}&part=snippet&maxResults=20`)
    let data=await res.json()
    // console.log(data)
    let {items}=data
    console.log(items)
    displaydata(items)
}
// AIzaSyDQ1-orBDuR-ev4-2covhebjBNFt6OvGiQ
let container=document.getElementById("container");
displaydata=(data)=>{
    container.innerHTML=''
    data.forEach(({snippet:{thumbnails:{medium:{url}}},snippet:{title},id:{videoId}})=>{
        let div=document.createElement("div");
        // let img=document.createElement("img");
        // img.src=url;

        let name=document.createElement("h3");
        name.innerText=title;

        let video=document.createElement('iframe');
        video.allow="fullscreen"
        video.src=`https://www.youtube.com/embed/${videoId}`
        div.append(video,name)
        container.append(div)
        
    })
}