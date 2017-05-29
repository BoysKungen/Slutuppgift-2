function on(){
    var element = document.querySelector('.menu');
    var doc = document.querySelector('body');
    var top = document.querySelector('.back-to-top');
    if(!element.classList.contains("show-menu")){
        element.classList.add('show-menu')
        element.classList.remove('hide-menu')
        doc.classList.add('none')
        top.classList.add('show')
        top.click()
    }else if(element.classList.contains("show-menu")){
        element.classList.remove('show-menu')
        element.classList.add('hide-menu')
        doc.classList.remove('none')
        top.classList.remove('show')
    }
}