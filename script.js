// story에서 클릭 이벤트

function sorry() {
    alert('아직 개발 중∙∙∙');
}

// fav에서 스크롤 이벤트

var btt = document.getElementById('back-to-top'),
    docElem = document.documentElement,
    offset,
    scrollPos,
    docHeight;

docHeight = Math.max(docElem.offsetHeight, docElem.scrollHeight,);

if(docHeight != 'undefined'){
    offset = docHeight / 8;
}

window.addEventListener('scroll', function(){
    scrollPos = docElem.scrollTop;
    console.log(scrollPos);


    if(scrollPos > offset){
        btt.className = 'visible';
    } else{
        btt.className = '';
    }
    // btt.className = (scrollPos > offset) ? 'visible' : '';

});

btt.addEventListener('click',function(ev){
    ev.preventDefault();
    docElem.scrollTop = 0;
    srollToTop();
});

function scrollToTop(){
    var scrollInterval = setInterval(function(){
        if(scrollPos !=0){
            window.scrollBy(0.-55);
        } else{
            clearInterval(scrollInterval);
        }
    }, 15);
}
