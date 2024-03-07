script=""
changePage("theFirstAmendment.html")
function changePage(page){
  fetch(page).then(response=>response.text()).then(html=>{
    pageContent.innerHTML=html;
  })
}
/*function changeScript(myScript){
  script=myScript;
  setInterval(change, 1000);
}
function change(){
  fetch(script).then(response=>response.text()).then(text=>{
    scriptElement=document.createElement("script");
    scriptElement.innerHTML=text;
    pageContent.appendChild(scriptElement);
  })
}*/
theFirstAmendment.addEventListener("click", function(){
  changePage("theFirstAmendment.html")
})
sampleArgument.addEventListener("click", function(){
  changePage("sampleArgument.html")
})
GvL.addEventListener("click", function(){
  changePage("GvL.html")
})
religion.addEventListener("click", function(){
  changePage("religionInOurLives.html")
})
blog.addEventListener("click", function(){
  changePage("blog.html")
})
sources.addEventListener("click", function(){
  changePage("sources.html")
})
