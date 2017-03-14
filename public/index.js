function fetch(color) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/', true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      document.body.style.backgroundColor = color;
    }
  };
  xhr.send();
}

var buttonsDOM = document.querySelector('.buttons');
buttonsDOM.addEventListener('click', handleButtonClick);

function handleButtonClick(e) {
  if (e.target.nodeName === 'BUTTON') {
    fetch(event.target.id.split('-')[0]);
  }
}
