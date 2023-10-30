/*const choices = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];
const resultText = ["Empatatado", "Ganado", "Perdido"];
let playerScore = 0;
let computerScore = 0;

const startBtn = document.getElementById('startBtn');
startBtn.addEventListener('click', playGame);

function playGame() {
    const playerChoice = prompt("Elige una opción: Piedra, Papel, Tijera, Lagarto o Spock").trim();
    const computerChoice = getRandomChoice();

    if (!choices.includes(playerChoice)) {
        console.log("Opción no válida. Por favor, elige una de las opciones proporcionadas.");
        return;
    }

    console.log(`Tú eliges: ${playerChoice}`);
    console.log(`La computadora elige: ${computerChoice}`);

    const result = determineWinner(playerChoice, computerChoice);
    console.log(`Resultado: ${resultText[result]}`);

    if (result === 1) {
        playerScore++;
    } else if (result === 2) {
        computerScore++;
    }

    console.log(`Puntuación: Tú (${playerScore}) - Computadora (${computerScore})`);

    let playAgain = confirm(`Has ${resultText[result === 1 ? 1 : 2]}. ¿Quieres jugar de nuevo?`);
    if (playAgain) {
        playGame();
    }
}

function getRandomChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 0; // Empate
    } else if (
        (playerChoice === "Piedra" && (computerChoice === "Tijera" || computerChoice === "Lagarto")) ||
        (playerChoice === "Papel" && (computerChoice === "Piedra" || computerChoice === "Spock")) ||
        (playerChoice === "Tijera" && (computerChoice === "Papel" || computerChoice === "Lagarto")) ||
        (playerChoice === "Lagarto" && (computerChoice === "Papel" || computerChoice === "Spock")) ||
        (playerChoice === "Spock" && (computerChoice === "Piedra" || computerChoice === "Tijera"))
    ) {
        return 1; // Ganas
    } else {
        return 2; // Pierdes
    }
}