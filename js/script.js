const citacoes = [
    '"Os homens nascem com grande vontade! Essa vontade os impulsiona a seguir em frente, superar obstáculos e alcançar seus sonhos!-" Monkey D. Luffy',

    '"Mesmo que o mundo te diga que seus sonhos são impossíveis, nunca desista deles. Se você acreditar em si mesmo e lutar com todas as suas forças, tudo será possível!" - Portgas D. Ace',

    '"O que importa não é o tamanho da sua aventura, mas a força da sua vontade. Se você tiver um sonho grande o suficiente, poderá conquistar qualquer coisa!" - Roronoa Zoro',

    '"Um amigo em necessidade é um amigo de verdade. Os verdadeiros amigos sempre estarão lá um para o outro, não importa o que aconteça." - Nami',

    '"Uma família não precisa ser de sangue. O que importa é o amor e o respeito que vocês têm um pelo outro." - Monkey D. Luffy',

    '"Mesmo que estejamos separados, nossos corações sempre estarão conectados. Somos nakama e nunca nos esqueceremos um do outro." - Tony Tony Chopper',

    '"A dor é apenas um sinal de que você está vivo. Continue lutando e nunca desista dos seus sonhos!" - Monkey D. Luffy',

    '"Mesmo que você caia muitas vezes, o que importa é se você sempre se levanta e continua em frente." - Usopp',

    '"Os fracos se tornam fortes quando lutam por algo que realmente importa." - Nico Robin',

    '"Ninguém tem o direito de tirar a liberdade de ninguém. Todos merecem viver em um mundo livre e justo." - Monkey D. Luffy',

    '"É melhor morrer de pé do que viver de joelhos." - Silvers Rayleigh',

    '"O verdadeiro tesouro não é o ouro ou a prata, mas a liberdade de viver a vida que você deseja." - Gol D. Roger',

    '"A única maneira de parar uma boa história é chegar ao fim." - Nico Robin',

    '"O riso é o melhor remédio." - Tony Tony Chopper',

    '"Um homem só precisa de um motivo para viver. Não importa se é estúpido ou sem sentido. Se você encontrar esse motivo, você poderá superar qualquer coisa." - Monkey D. Luffy',
];

const quoteElement = document.getElementById('citacao__rodape');

function getCitacaoAleatoria() {
    const randomIndex = Math.floor(Math.random() * citacoes.length);
    return citacoes[randomIndex];
}

window.onload = function() {
    const citacaoAleatoria = getCitacaoAleatoria();
    elementCitacao.textContent = citacaoAleatoria;
};