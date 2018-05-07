function setup() {
     var inputText = Document.getElementById('message');
     inputText.focus();
}

window.addEventListener('DOMContentLoaded',setup, false);

window.addEventListener('beforeunload',function (event) {
     var msg = 'You have changes that have not been saved......';
     (event || window.event).returnValue = msg;                            // FOR IE5 - 8
     return msg;
})
