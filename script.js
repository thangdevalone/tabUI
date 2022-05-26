var tabItem=document.querySelectorAll(".tab--item")
var tabContent=document.querySelectorAll(".tab--content")
setLine(tabItem[0])
tabItem.forEach(function(items,index){
    items.addEventListener("click",function() {
        var itemActive=document.querySelector(".tab--item.active");
        var contentActive=document.querySelector(".tab--content.active");
        if(!items.classList.contains("active")){
            items.classList.add("active");
            tabContent[index].classList.add("active");
            itemActive.classList.remove("active");
            contentActive.classList.remove("active");
            setLine(items)
        }
    })
})

function setLine(tabItem){
    var setLine=document.querySelector(".line");
    setLine.style.width=tabItem.offsetWidth+"px";
    setLine.style.left=tabItem.offsetLeft+"px";
}