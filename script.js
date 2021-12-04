let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let show = '';
for (item of buttons) {
  item.addEventListener('click', (e) => {
    // console.log(item);
    buttontext = e.target.innerText;
    // console.log(buttontext);
    if (buttontext == 'X') {
      buttontext = '*';
      show += buttontext;
      screen.value = show;
    } else if (buttontext == 'C') {
      show = '';
      screen.value = show;
    } else if (buttontext == '=') {
      screen.value = eval(show);
    } else if (buttontext == 'B') {
      if (show.length > 0) {
        show = show.slice(0, -1);
        screen.value = show;
      }
    } else if (buttontext == 'pow') {
      show += '**';
      screen.value = show;
    } else if (buttontext == 'sqre') {
      show += '*2';
      screen.value = eval(show);
    } else if (buttontext == 'sqrt') {
      let y = Math.sqrt(parseInt(eval(show)));
        screen.value = y;
        show = y;
    } else {
      show += buttontext;
      screen.value = show;
    }
  });
}
