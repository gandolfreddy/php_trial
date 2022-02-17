
const verifyCodeElem = document.querySelector(".verify-code");

let verifyCodeText = '';
for (let i=0; i < 4; i++) {
    let randNum = Math.floor(Math.random()*10);
    verifyCodeText += String(randNum);
}
verifyCodeElem.textContent = verifyCodeText;