var we = document.getElementsByClassName("t4a8o");
names = [] 
var x = document.getElementsByClassName("-GlrD _2xoTX");
var childs = x[0].children;
for ( i = 0 ; i < childs.length; i++){
y = childs[i].children;
m = (y[0].children)[0].children
k = m[1].children;
o = k[0].children;
p = o[0].children;
name = p[0].innerText;

names[i] = name;
}
we[0].click();
message = ""
event = document.createEvent("UIEvents"); 
for (j = 0 ; j < names.length ; j++){
    message = message+ "@" + names[j] + " ";
}
 messageBox = document.querySelectorAll("[contenteditable='true']")[1]; 
 event = document.createEvent("UIEvents"); 
        messageBox.innerHTML = '<span data-jid="16084816142@c.us" data-display="fardeen meeran" class="matched-mention _3Whw5 selectable-text select-all invisible-space copyable-text" data-plain-text="@fardeen meeran" data-app-text-template="@fardeen meeran"><span class="at-symbol">@</span><span dir="ltr">fardeen meeran</span></span></span><span><span data-jid="16084816142@c.us" data-display="fardeen meeran" class="matched-mention _3Whw5 selectable-text select-all invisible-space copyable-text" data-plain-text="@fardeen meeran" data-app-text-template="@fardeen meeran"><span class="at-symbol">@</span><span dir="ltr">fardeen meeran</span></span>''; // test it 
        event.initUIEvent("input", true, true, window, 1); 
        messageBox.dispatchEvent(event); 