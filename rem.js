(function (doc, win){

    let docEl= doc.documentElement;

    let reSize= function (){

        let clientWidth= parseInt(docEl.clientWidth);

        if(clientWidth){

            docEl.style.fontSize= clientWidth / 750 + 'px'

        }

    }

    doc.addEventListener('resize', reSize, false)

    win.addEventListener('DOMContentLoaded', reSize, false)

})(document, window)