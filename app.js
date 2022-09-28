const adviceID = document.querySelector('#adviceID');
const adviceText = document.querySelector('#adviceText');
const fetchAdvice = fetch('https://api.adviceslip.com/advice?t=' + Math.random()).then(response => response.json()).then(data => {
    adviceText.innerHTML = `"${data.slip.advice}"`;
    adviceID.innerHTML = `advice #${data.slip.id}`
});
