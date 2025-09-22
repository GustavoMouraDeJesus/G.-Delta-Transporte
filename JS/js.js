
let h1 = document.getElementById("title-main");
let firstText = "G. Delta Transportes";
let secondText = "A sua melhor opção!";

function typeText(text, callback) {
    h1.innerHTML = "";
    text.split('').forEach((char, index) => {
        setTimeout(() => {
            h1.innerHTML += char;
            if (index === text.length - 1 && callback) {
                setTimeout(callback, 4000); // tempo maior de exibição
            }
        }, 100 * index); // digitação mais rápida
    });
}

function eraseText(callback) {
    let current = h1.innerHTML;
    for (let i = current.length; i >= 0; i--) {
        setTimeout(() => {
            h1.innerHTML = current.slice(0, i);
            if (i === 0 && callback) {
                setTimeout(callback, 800); // apagamento mais rápido
            }
        }, 100 * (current.length - i)); // apagamento mais rápido
    }
}


function loopTexts() {
    typeText(firstText, () => {
        eraseText(() => {
            typeText(secondText, () => {
                eraseText(loopTexts);
            });
        });
    });
}

loopTexts();
