// ==UserScript==
// @author       Chamie (chamie.habrahabr.ru)
// @name         GOST free view
// @include      http://protect.gost.ru/v.aspx?control=8*
// @description  Открывает "защищённые" документы ГОСТа одной страницей, позволяя сохранить их.
// @version      1.0.2p1
// @grant        none
// @run-at       document-end
// ==/UserScript==

function fixGreed(){
  td = document.getElementsByClassName('download')[0].getElementsByTagName('table')[1].getElementsByTagName('td')[1];
  links = td.getElementsByTagName('a');
  td.innerHTML += '<button id="showall">Показать все</button>';
  document.getElementById('showall').addEventListener('click', function(){showAll(links);}, true);
}

function showAll(links){
  wnd = window.open();
  wnd.focus();
  wnd.document.open();
  txt = '<html><head><title>Все страницы</title></head><body style="text-align: center;">';
  for(i=0; i<links.length; i++) {
    if(links[i].innerHTML != '') {
      txt += '<img src="http://protect.gost.ru/image.ashx?page='+links[i].href.split('pageK=')[1]+'"><br>';
    }
  }
  txt += '</body></html>';
  wnd.document.write(txt);
  wnd.document.close();
}

fixGreed();
