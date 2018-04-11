var elList, addLink, newList, newText, counter, listItems;

elList = document.getElementById('list');
addLink = document.querySelector('a');
counter = document.getElementById('counter');

function addItem(e) {
     e.preventDefault();

     newList = document.createElement('li');
     newText = document.createTextNode('new List Element');
     newList.appendChild(newText);
     elList.appendChild(newList);
}

function count() {
     listItems = document.querySelectorAll('li').length;
     counter.innerHTML = listItems;
}

addLink.addEventListener('click',addItem,false);
elList.addEventListener('DOMNodeInserted',count,false);
