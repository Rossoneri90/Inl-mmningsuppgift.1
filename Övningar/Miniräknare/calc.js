let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));
console.log(buttons);

buttons.map(button => {
    button.addEventListener ('click', (e) => {
        console.log('clicked');
        console.log(e);
        console.log(e.target);
        console.log(e.target.innertext);
    });
});