const button = document.getElementById('generate-btn');

    let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'my phone', 'the car'];
    let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
    
    const getRandomExcuse = () => {
        const randomWho = who[Math.floor(Math.random() * who.length)];
        const randomAction = action[Math.floor(Math.random() * action.length)];
        const randomWhat = what[Math.floor(Math.random() * what.length)];
        const randomWhen = when[Math.floor(Math.random() * when.length)];
        
        return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
    };

window.onload = () => {

    let excuseDefault = document.querySelector('#excuse');
    excuseDefault.innerText =getRandomExcuse();

    button.addEventListener('click', () => {
        const excuse = getRandomExcuse();
        const display = document.getElementById('excuse');
        display.textContent = excuse;
    });
};
