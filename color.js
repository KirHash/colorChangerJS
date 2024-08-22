const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((b) => {
  console.log(b);
  b.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    switch (e.target.id) {
      case 'black':
        body.style.backgroundColor = e.target.id;
        body.style.color = "white";
        break;
      case 'grey':
        body.style.backgroundColor = e.target.id;
        body.style.color = "white";
        break;
      case 'white':
        body.style.backgroundColor = e.target.id;
        body.style.color = "black";
        break;
      case 'blue':
        body.style.backgroundColor = e.target.id;
        body.style.color = "white";
        break;
      case 'yellow':
        body.style.backgroundColor = e.target.id;
        body.style.color = "black";
        break;
      case 'purple':
        body.style.backgroundColor = e.target.id;
        body.style.color = "white";
        break;
    }
  });
});