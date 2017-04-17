/**
 * Created by caipf on 2017/3/6.
 */
function resetFields(whichform){
    if(Modernizr.input.placeholder) return;
    for(var i=0;i<whichform.elements.length;i++){
       var element=whichform.elements[i];
       if(element.type=="submit") continue;
       var check=element.placeholder||element.getAttribute('placeholder');
       if(!check) continue;
       element.onfocus=function () {
           var text=this.placeholder || this.getAttribute('placeholder');
           if(this.value==text){
               this.className='';
               this.value="";
           }
       }
       element.onblur=function () {
           if(this.value==""){
               this.className+=' placeholder';
               this.value=this.placeholder || this.getAttribute('placeholder');
           }
       }
       element.onblur();
    }
}

function prepareForms() {
    for(var i=0;i<document.forms.length;i++){
        var thisform=document.forms[i];
        resetFields(thisform);
    }
}

function addLoadEvent(func) {
    var oldonload=window.onload;
    if(typeof window.onload!='function'){
        window.onload=func;
    }else {
        window.onload=function(){
            oldonload();
            func();
        }
    }
}
addLoadEvent(prepareForms);
/**
 * Created by caipf on 2017/3/6.
 */
function resetFields(whichform){
    if(Modernizr.input.placeholder) return;
    for(var i=0;i<whichform.elements.length;i++){
       var element=whichform.elements[i];
       if(element.type=="submit") continue;
       var check=element.placeholder||element.getAttribute('placeholder');
       if(!check) continue;
       element.onfocus=function () {
           var text=this.placeholder || this.getAttribute('placeholder');
           if(this.value==text){
               this.className='';
               this.value="";
           }
       }
       element.onblur=function () {
           if(this.value==""){
               this.className='placeholder';
               this.value=this.placeholder || this.getAttribute('placeholder');
           }
       }
       element.onblur();
    }
}

function prepareForms() {
    for(var i=0;i<document.forms.length;i++){
        var thisform=document.forms[i];
        resetFields(thisform);
    }
}

function addLoadEvent(func) {
    var oldonload=window.onload;
    if(typeof window.onload!='function'){
        window.onload=func;
    }else {
        window.onload=function(){
            oldonload();
            func();
        }
    }
}
addLoadEvent(prepareForms);
/**
 * Created by caipf on 2017/3/6.
 */
function resetFields(whichform){
    if(Modernizr.input.placeholder) return;
    for(var i=0;i<whichform.elements.length;i++){
       var element=whichform.elements[i];
       if(element.type=="submit") continue;
       var check=element.placeholder||element.getAttribute('placeholder');
       if(!check) continue;
       element.onfocus=function () {
           var text=this.placeholder || this.getAttribute('placeholder');
           if(this.value==text){
               this.className='';
               this.value="";
           }
       }
       element.onblur=function () {
           if(this.value==""){
               this.className='placeholder';
               this.value=this.placeholder || this.getAttribute('placeholder');
           }
       }
       element.onblur();
    }
}

function prepareForms() {
    for(var i=0;i<document.forms.length;i++){
        var thisform=document.forms[i];
        resetFields(thisform);
    }
}

function addLoadEvent(func) {
    var oldonload=window.onload;
    if(typeof window.onload!='function'){
        window.onload=func;
    }else {
        window.onload=function(){
            oldonload();
            func();
        }
    }
}
addLoadEvent(prepareForms);
function resetFields(e){if(!Modernizr.input.placeholder)for(var o=0;o<e.elements.length;o++){var t=e.elements[o];if("submit"!=t.type){var n=t.placeholder||t.getAttribute("placeholder");n&&(t.onfocus=function(){var e=this.placeholder||this.getAttribute("placeholder");this.value==e&&(this.className="",this.value="")},t.onblur=function(){""==this.value&&(this.className="placeholder",this.value=this.placeholder||this.getAttribute("placeholder"))},t.onblur())}}}function prepareForms(){for(var e=0;e<document.forms.length;e++){var o=document.forms[e];resetFields(o)}}function addLoadEvent(e){var o=window.onload;"function"!=typeof window.onload?window.onload=e:window.onload=function(){o(),e()}}addLoadEvent(prepareForms);
function resetFields(e){if(!Modernizr.input.placeholder)for(var o=0;o<e.elements.length;o++){var t=e.elements[o];if("submit"!=t.type){var n=t.placeholder||t.getAttribute("placeholder");n&&(t.onfocus=function(){var e=this.placeholder||this.getAttribute("placeholder");this.value==e&&(this.className="",this.value="")},t.onblur=function(){""==this.value&&(this.className="placeholder",this.value=this.placeholder||this.getAttribute("placeholder"))},t.onblur())}}}function prepareForms(){for(var e=0;e<document.forms.length;e++){var o=document.forms[e];resetFields(o)}}function addLoadEvent(e){var o=window.onload;"function"!=typeof window.onload?window.onload=e:window.onload=function(){o(),e()}}function resetFields(e){if(!Modernizr.input.placeholder)for(var o=0;o<e.elements.length;o++){var t=e.elements[o];if("submit"!=t.type){var n=t.placeholder||t.getAttribute("placeholder");n&&(t.onfocus=function(){var e=this.placeholder||this.getAttribute("placeholder");this.value==e&&(this.className="",this.value="")},t.onblur=function(){""==this.value&&(this.className="placeholder",this.value=this.placeholder||this.getAttribute("placeholder"))},t.onblur())}}}function prepareForms(){for(var e=0;e<document.forms.length;e++){var o=document.forms[e];resetFields(o)}}function addLoadEvent(e){var o=window.onload;"function"!=typeof window.onload?window.onload=e:window.onload=function(){o(),e()}}addLoadEvent(prepareForms),addLoadEvent(prepareForms);
function resetFields(e){if(!Modernizr.input.placeholder)for(var o=0;o<e.elements.length;o++){var t=e.elements[o];if("submit"!=t.type){var n=t.placeholder||t.getAttribute("placeholder");n&&(t.onfocus=function(){var e=this.placeholder||this.getAttribute("placeholder");this.value==e&&(this.className="",this.value="")},t.onblur=function(){""==this.value&&(this.className="placeholder",this.value=this.placeholder||this.getAttribute("placeholder"))},t.onblur())}}}function prepareForms(){for(var e=0;e<document.forms.length;e++){var o=document.forms[e];resetFields(o)}}function addLoadEvent(e){var o=window.onload;"function"!=typeof window.onload?window.onload=e:window.onload=function(){o(),e()}}function resetFields(e){if(!Modernizr.input.placeholder)for(var o=0;o<e.elements.length;o++){var t=e.elements[o];if("submit"!=t.type){var n=t.placeholder||t.getAttribute("placeholder");n&&(t.onfocus=function(){var e=this.placeholder||this.getAttribute("placeholder");this.value==e&&(this.className="",this.value="")},t.onblur=function(){""==this.value&&(this.className="placeholder",this.value=this.placeholder||this.getAttribute("placeholder"))},t.onblur())}}}function prepareForms(){for(var e=0;e<document.forms.length;e++){var o=document.forms[e];resetFields(o)}}function addLoadEvent(e){var o=window.onload;"function"!=typeof window.onload?window.onload=e:window.onload=function(){o(),e()}}function resetFields(e){if(!Modernizr.input.placeholder)for(var o=0;o<e.elements.length;o++){var t=e.elements[o];if("submit"!=t.type){var n=t.placeholder||t.getAttribute("placeholder");n&&(t.onfocus=function(){var e=this.placeholder||this.getAttribute("placeholder");this.value==e&&(this.className="",this.value="")},t.onblur=function(){""==this.value&&(this.className="placeholder",this.value=this.placeholder||this.getAttribute("placeholder"))},t.onblur())}}}function prepareForms(){for(var e=0;e<document.forms.length;e++){var o=document.forms[e];resetFields(o)}}function addLoadEvent(e){var o=window.onload;"function"!=typeof window.onload?window.onload=e:window.onload=function(){o(),e()}}function resetFields(e){if(!Modernizr.input.placeholder)for(var o=0;o<e.elements.length;o++){var t=e.elements[o];if("submit"!=t.type){var n=t.placeholder||t.getAttribute("placeholder");n&&(t.onfocus=function(){var e=this.placeholder||this.getAttribute("placeholder");this.value==e&&(this.className="",this.value="")},t.onblur=function(){""==this.value&&(this.className="placeholder",this.value=this.placeholder||this.getAttribute("placeholder"))},t.onblur())}}}function prepareForms(){for(var e=0;e<document.forms.length;e++){var o=document.forms[e];resetFields(o)}}function addLoadEvent(e){var o=window.onload;"function"!=typeof window.onload?window.onload=e:window.onload=function(){o(),e()}}function resetFields(e){if(!Modernizr.input.placeholder)for(var o=0;o<e.elements.length;o++){var t=e.elements[o];if("submit"!=t.type){var n=t.placeholder||t.getAttribute("placeholder");n&&(t.onfocus=function(){var e=this.placeholder||this.getAttribute("placeholder");this.value==e&&(this.className="",this.value="")},t.onblur=function(){""==this.value&&(this.className="placeholder",this.value=this.placeholder||this.getAttribute("placeholder"))},t.onblur())}}}function prepareForms(){for(var e=0;e<document.forms.length;e++){var o=document.forms[e];resetFields(o)}}function addLoadEvent(e){var o=window.onload;"function"!=typeof window.onload?window.onload=e:window.onload=function(){o(),e()}}addLoadEvent(prepareForms),addLoadEvent(prepareForms),addLoadEvent(prepareForms),addLoadEvent(prepareForms),addLoadEvent(prepareForms);