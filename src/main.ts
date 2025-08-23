import { Chess } from 'chess.js';
import { elements } from './ui';
import { appState } from './state';
import { createBoard, drawBoardFromFen, clearBoard } from './board';
import { setupAuth, signInWithGoogle } from './auth';
import { pieceOrder, lessonPieces, lessons, puzzles, pieceSymbols, challenges } from './constants';

// Lessons UI
function updateLessonNav(): void {
  const { lessonProgressNav } = elements;
  lessonProgressNav.innerHTML = '';
  const currentPieceIndex = appState.lessonState.piece ? pieceOrder.indexOf(appState.lessonState.piece) : -1;

  pieceOrder.forEach((pieceKey, index) => {
    const navItem = document.createElement('div');
    navItem.className = 'flex flex-col items-center gap-1';
    const pieceEl = document.createElement('div');
    pieceEl.className = 'nav-piece';
    pieceEl.textContent = lessonPieces[pieceKey].symbol;
    if (appState.lessonState.piece) {
      if (index < currentPieceIndex) pieceEl.classList.add('completed');
      else if (index === currentPieceIndex) pieceEl.classList.add('active');
    }
    navItem.appendChild(pieceEl);

    if (appState.lessonState.piece && index === currentPieceIndex) {
      const stepsContainer = document.createElement('div');
      stepsContainer.className = 'flex gap-1.5';
      const types: Array<'move' | 'capture'> = ['move', 'capture'];
      types.forEach((type, typeIndex) => {
        if ((lessons as any)[pieceKey][type]) {
          const step = document.createElement('div');
          step.className = 'lesson-step';
          if (typeIndex <= types.indexOf(appState.lessonState.type as any)) step.classList.add('active');
          stepsContainer.appendChild(step);
        }
      });
      navItem.appendChild(stepsContainer);
    }

    lessonProgressNav.appendChild(navItem);
  });
}

function loadLesson(): void {
  clearBoard();
  appState.lessonState.inProgress = true;
  appState.selectedSquare = null;
  updateLessonNav();
  const lessonData = (lessons as any)[appState.lessonState.piece!][appState.lessonState.type!][0];
  console.log('Loading lesson:', appState.lessonState.piece, appState.lessonState.type, lessonData);
  appState.lessonState.pieceCoords = lessonData.piece;
  const pieceSquare = document.querySelector(`[data-col='${lessonData.piece[0]}'][data-row='${lessonData.piece[1]}']`) as HTMLElement;
  pieceSquare.innerHTML = `<span class="piece">${lessonPieces[appState.lessonState.piece!].symbol}</span>`;
  if (lessonData.enemy) {
    const enemySquare = document.querySelector(`[data-col='${lessonData.enemy[0]}'][data-row='${lessonData.enemy[1]}']`) as HTMLElement;
    enemySquare.innerHTML = `<span class="piece">♟</span>`;
  }
  lessonData.highlights.forEach(([col, row]: [number, number]) => {
    (document.querySelector(`[data-col='${col}'][data-row='${row}']`) as HTMLElement).classList.add('highlight');
  });
  const lessonTypeName: Record<'move' | 'capture', string> = { move: 'movimiento', capture: 'captura' };
  elements.messageArea.textContent = `Lección del ${lessonPieces[appState.lessonState.piece!].name}: ${lessonTypeName[appState.lessonState.type! as 'move' | 'capture']}`;
}

function handleLessonMove(fromSquare: HTMLElement, toSquare: HTMLElement): void {
  console.log('Handling lesson move:', appState.lessonState.piece, appState.lessonState.type);
  // For capture lessons, verify that the destination square contains an enemy piece
  if (appState.lessonState.type === 'capture') {
    const enemyPiece = toSquare.querySelector('.piece');
    if (!enemyPiece) {
      // No piece to capture, invalid move
      console.log('Invalid capture: no enemy piece at destination');
      return;
    }
  }
  
  toSquare.innerHTML = fromSquare.innerHTML;
  fromSquare.innerHTML = '';
  appState.lessonState.inProgress = false;
  document.querySelectorAll('.highlight').forEach((sq) => (sq as HTMLElement).classList.remove('highlight'));
  console.log('Move completed, showing dialog in 750ms');
  setTimeout(showCompletionDialog, 750);
}

function showCompletionDialog(): void {
  console.log('Showing completion dialog for:', appState.lessonState.piece, appState.lessonState.type);
  const currentPieceIndex = pieceOrder.indexOf(appState.lessonState.piece!);
  let nextLessonHandler: () => void;
  let title: string, message: string;
  const isFinalLesson = appState.lessonState.piece === 'king' && appState.lessonState.type === 'capture';

  elements.dialogButtons.innerHTML = '';

  if (isFinalLesson) {
    title = '¡FELICIDADES!';
    message = '¡Has completado todas las lecciones! Inicia sesión para desbloquear el modo de Práctica con IA.';
    nextLessonHandler = () => resetLessonsView();

    const loginButton = document.createElement('button');
    loginButton.className = 'control-button bg-blue-500 text-white p-3 rounded-lg shadow-md text-xl w-full';
    loginButton.textContent = 'Iniciar Sesión para Jugar';
    loginButton.onclick = () => {
      appState.pendingActionAfterLogin = () => {
        (document.querySelector('[data-mode="practice"]') as HTMLButtonElement).click();
      };
      signInWithGoogle();
      elements.completionDialog.classList.add('hidden');
    };
    elements.dialogButtons.appendChild(loginButton);
  } else {
    if (appState.lessonState.type === 'move') {
      title = '¡Muy bien!';
      message = `¡Aprendiste a mover el ${lessonPieces[appState.lessonState.piece!].name}! Ahora, a capturar.`;
      nextLessonHandler = () => {
        appState.lessonState.type = 'capture';
        loadLesson();
      };
    } else {
      const nextPiece = pieceOrder[currentPieceIndex + 1];
      title = '¡Excelente!';
      message = `¡Ya dominas el ${lessonPieces[appState.lessonState.piece!].name}! ¿Listo para la siguiente pieza?`;
      nextLessonHandler = () => {
        appState.lessonState.piece = nextPiece as any;
        appState.lessonState.type = 'move';
        loadLesson();
      };
    }

    const continueButton = document.createElement('button');
    continueButton.className = 'control-button bg-green-500 text-white p-3 rounded-lg shadow-md text-xl w-full';
    continueButton.textContent = 'Continuar';
    continueButton.onclick = () => {
      elements.completionDialog.classList.add('hidden');
      nextLessonHandler();
    };
    elements.dialogButtons.appendChild(continueButton);
  }

  elements.dialogTitle.textContent = title;
  elements.dialogMessage.textContent = message;

  const closeButton = elements.closeDialogButton;
  const newCloseButton = closeButton.cloneNode(true) as HTMLButtonElement;
  closeButton.parentNode!.replaceChild(newCloseButton, closeButton);
  newCloseButton.addEventListener(
    'click',
    () => {
      elements.completionDialog.classList.add('hidden');
      if (!isFinalLesson) nextLessonHandler();
    },
    { once: true },
  );

  elements.completionDialog.classList.remove('hidden');
}

function resetLessonsView(): void {
  clearBoard();
  elements.messageArea.textContent = '¡Has completado el entrenamiento!';
  appState.lessonState.piece = null;
  appState.lessonState.type = null;
  updateLessonNav();
}

// Challenges
function getDaysSinceStart(): number {
  const startDate = new Date('2024-01-01');
  const today = new Date();
  const diffTime = Math.abs(Number(today) - Number(startDate));
  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}

function loadChallenge(index: number): void {
  clearBoard();
  appState.challengeState.inProgress = true;
  appState.challengeState.currentChallengeIndex = index;
  const challenge = challenges[index % challenges.length];
  appState.challengeState.currentChallenge = challenge;
  const { fen, goal, goalSquare } = challenge;
  appState.game = new Chess(fen);

  drawBoardFromFen(fen);
  elements.messageArea.textContent = goal;
  (document.querySelector(`[data-square="${goalSquare}"]`) as HTMLElement).classList.add('goal-square');
  updateChallengeNav();
}

function updateChallengeNav(): void {
  const day = appState.challengeState.currentChallengeIndex + 1;
  elements.challengeDayDisplay.textContent = `Reto del Día #${day}`;
  elements.prevChallengeButton.disabled = day <= 1;
  elements.nextChallengeButton.disabled = day > appState.challengeState.maxChallengeIndex;
}

function handleChallengeMove(fromSquare: HTMLElement, toSquare: HTMLElement): void {
  const { goalSquare } = appState.challengeState.currentChallenge!;
  const fromId = fromSquare.dataset.square!;
  const toId = toSquare.dataset.square!;

  const move = appState.game!.move({ from: fromId, to: toId } as any);
  if (move) {
    // Make it always white to move next
    const fenParts = appState.game!.fen().split(' ');
    fenParts[1] = 'w';
    appState.game!.load(fenParts.join(' '));

    drawBoardFromFen(appState.game!.fen());
    (document.querySelector(`[data-square="${goalSquare}"]`) as HTMLElement).classList.add('goal-square');

    if (toId === goalSquare) {
      appState.challengeState.inProgress = false;
      setTimeout(() => {
        elements.dialogTitle.textContent = '¡Reto Completado!';
        elements.dialogMessage.textContent = '¡Lo has conseguido! ¿Quieres probar otro reto?';
        elements.dialogButtons.innerHTML = `<button id="dialog-next-challenge" class="control-button bg-yellow-500 text-white p-3 rounded-lg shadow-md text-xl w-full">Siguiente Reto</button>`;
        elements.completionDialog.classList.remove('hidden');
        const nextChallengeBtn = document.getElementById('dialog-next-challenge');
        if (nextChallengeBtn) {
          (nextChallengeBtn as HTMLButtonElement).onclick = () => {
            elements.completionDialog.classList.add('hidden');
            if (appState.challengeState.currentChallengeIndex < appState.challengeState.maxChallengeIndex) {
              loadChallenge(appState.challengeState.currentChallengeIndex + 1);
            } else {
              elements.messageArea.textContent = '¡Has completado todos los retos de hoy!';
            }
          };
        }
      }, 500);
    }
  }
}

// Practice
function startNewPuzzle(): void {
  appState.game = new Chess(puzzles[Math.floor(Math.random() * puzzles.length)].fen);
  elements.messageArea.textContent = 'Juegan las blancas. ¡Tu turno!';
  appState.selectedSquare = null;
  drawBoardFromFen(appState.game.fen());
  updateTurnIndicator();
}

function updateTurnIndicator(): void {
  if (!appState.game) return;
  if (appState.game.game_over()) {
    elements.gameInfo.innerHTML = `<span class="turn-indicator bg-red-500">¡Juego Terminado!</span>`;
  } else {
    const turn = appState.game.turn() === 'w' ? 'Blancas' : 'Negras';
    const color = appState.game.turn() === 'w' ? 'bg-blue-500' : 'bg-gray-700';
    elements.gameInfo.innerHTML = `<span class="turn-indicator ${color}">Turno de: ${turn}</span>`;
  }
}

async function getAiMove(): Promise<void> {
  updateTurnIndicator();
  elements.geminiOutput.classList.remove('hidden');
  elements.geminiContent.classList.add('hidden');
  elements.geminiLoading.classList.remove('hidden');
  const fen = appState.game!.fen();
  const possibleMoves = appState.game!.moves();
  if (possibleMoves.length === 0) {
    updateTurnIndicator();
    return;
  }

  let retries = 3;
  let moveMade = false;

  while (retries > 0 && !moveMade) {
    const prompt = `Eres un tutor de ajedrez amable y divertido para un niño de 10 años. Juegas con las piezas negras. Es tu turno. La posición actual en FEN es: "${fen}". Los movimientos legales que puedes hacer son: ${possibleMoves.join(', ')}.\n1. Elige tu mejor movimiento de la lista de movimientos legales y escríbelo en notación SAN (ej. "Nf6", "Qxg2").\n2. En una nueva línea, explica tu movimiento de forma muy simple, corta y animada.\nFormatea tu respuesta exactamente así:\nMOVIMIENTO: [Tu movimiento en SAN]\nEXPLICACIÓN: [Tu explicación]`;
    try {
      const apiKey = '';
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ role: 'user', parts: [{ text: prompt }] }] }),
      });
      if (!response.ok) throw new Error('API Error');
      const result = await response.json();
      const text: string = result.candidates[0].content.parts[0].text;
      const moveMatch = text.match(/MOVIMIENTO: (.*)/);
      const explanationMatch = text.match(/EXPLICACIÓN: (.*)/s);
      const aiMoveSAN = moveMatch ? moveMatch[1].trim() : null;
      const explanation = explanationMatch ? explanationMatch[1].trim() : '¡Veamos qué tal esto!';
      elements.geminiContent.innerHTML = explanation.replace(/\n/g, '<br>');
      if (aiMoveSAN && appState.game!.move(aiMoveSAN as any, { sloppy: true } as any)) {
        moveMade = true;
      } else {
        retries--;
      }
    } catch (e) {
      retries--;
    }
  }

  if (!moveMade) {
    elements.geminiContent.innerHTML = '¡Vaya! Me he liado un poco, pero aquí va mi jugada.';
    const randomMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
    appState.game!.move(randomMove as any);
  }

  drawBoardFromFen(appState.game!.fen());
  elements.geminiLoading.classList.add('hidden');
  elements.geminiContent.classList.remove('hidden');
  updateTurnIndicator();
}

// Events
function registerEvents(): void {
  elements.modeSelector.addEventListener('click', (e) => {
    const button = (e.target as HTMLElement).closest('button') as HTMLButtonElement | null;
    if (!button) return;

    if (button.id === 'practice-mode-button' && !appState.currentUser) {
      elements.dialogTitle.textContent = 'Función Bloqueada';
      elements.dialogMessage.textContent = 'Necesitas iniciar sesión para jugar contra la IA y poner a prueba tus habilidades.';
      elements.dialogButtons.innerHTML = `<button id="dialog-login-button" class="control-button bg-blue-500 text-white p-3 rounded-lg shadow-md text-xl w-full">Iniciar Sesión con Google</button>`;
      elements.completionDialog.classList.remove('hidden');
      document.getElementById('dialog-login-button')!.onclick = () => {
        appState.pendingActionAfterLogin = () => {
          button.click();
        };
        signInWithGoogle();
        elements.completionDialog.classList.add('hidden');
      };
      return;
    }

    appState.currentMode = button.dataset.mode as any;
    document.querySelectorAll('#mode-selector button').forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    clearBoard();
    elements.geminiOutput.classList.add('hidden');

    elements.lessonsContainer.style.display = 'none';
    elements.practiceContainer.style.display = 'none';
    elements.challengesContainer.style.display = 'none';
    elements.gameInfo.innerHTML = '';

    if (appState.currentMode === 'lessons') {
      elements.lessonsContainer.style.display = 'flex';
      appState.lessonState.piece = pieceOrder[0];
      appState.lessonState.type = 'move';
      loadLesson();
    } else if (appState.currentMode === 'challenges') {
      elements.challengesContainer.style.display = 'flex';
      appState.challengeState.maxChallengeIndex = getDaysSinceStart();
      loadChallenge(appState.challengeState.maxChallengeIndex);
    } else if (appState.currentMode === 'practice') {
      elements.practiceContainer.style.display = 'flex';
      startNewPuzzle();
    }
  });

  elements.newPuzzleButton.addEventListener('click', startNewPuzzle);
  elements.prevChallengeButton.addEventListener('click', () => {
    if (appState.challengeState.currentChallengeIndex > 0) {
      loadChallenge(appState.challengeState.currentChallengeIndex - 1);
    }
  });
  elements.nextChallengeButton.addEventListener('click', () => {
    if (appState.challengeState.currentChallengeIndex < appState.challengeState.maxChallengeIndex) {
      loadChallenge(appState.challengeState.currentChallengeIndex + 1);
    }
  });

  elements.boardEl.addEventListener('click', (e) => {
    const clickedSquare = (e.target as HTMLElement).closest('.square') as HTMLElement | null;
    if (!clickedSquare) return;

    if (appState.currentMode === 'lessons') {
      if (!appState.lessonState.inProgress) return;
      if (appState.selectedSquare) {
        const fromSquare = appState.selectedSquare;
        fromSquare.querySelector('.piece')?.classList.remove('selected');
        appState.selectedSquare = null;
        if (clickedSquare.classList.contains('highlight') && clickedSquare !== fromSquare) {
          handleLessonMove(fromSquare, clickedSquare);
        }
      } else {
        const pieceEl = clickedSquare.querySelector('.piece');
        const c = parseInt(clickedSquare.dataset.col!);
        const r = parseInt(clickedSquare.dataset.row!);
        if (pieceEl && appState.lessonState.pieceCoords && c === appState.lessonState.pieceCoords[0] && r === appState.lessonState.pieceCoords[1]) {
          appState.selectedSquare = clickedSquare;
          (pieceEl as HTMLElement).classList.add('selected');
        }
      }
    } else if (appState.currentMode === 'challenges') {
      if (!appState.challengeState.inProgress) return;
      if (appState.selectedSquare) {
        const fromSquare = appState.selectedSquare;
        fromSquare.querySelector('.piece')?.classList.remove('selected');
        document.querySelectorAll('.highlight').forEach((sq) => (sq as HTMLElement).classList.remove('highlight'));
        appState.selectedSquare = null;
        handleChallengeMove(fromSquare, clickedSquare);
      } else {
        const pieceEl = clickedSquare.querySelector('.piece');
        if (pieceEl) {
          appState.selectedSquare = clickedSquare;
          (pieceEl as HTMLElement).classList.add('selected');
          const legalMoves = appState.game!.moves({ square: clickedSquare.dataset.square!, verbose: true } as any) as Array<any>;
          legalMoves.forEach((move) => {
            (document.querySelector(`[data-square="${move.to}"]`) as HTMLElement).classList.add('highlight');
          });
        }
      }
    } else {
      // Practice
      if (!appState.game || appState.game.game_over() || appState.game.turn() !== 'w') return;
      if (appState.selectedSquare) {
        const fromSquareId = appState.selectedSquare.dataset.square!;
        const toSquareId = clickedSquare.dataset.square!;
        document.querySelector(`[data-square="${fromSquareId}"]`)?.querySelector('.piece')?.classList.remove('selected');
        appState.selectedSquare = null;
        if (fromSquareId !== toSquareId) {
          const move = appState.game.move({ from: fromSquareId, to: toSquareId, promotion: 'q' } as any);
          if (move) {
            drawBoardFromFen(appState.game.fen());
            if (!appState.game.game_over()) {
              elements.gameInfo.innerHTML = `<span class="turn-indicator bg-gray-700">Turno de: Negras</span>`;
              setTimeout(getAiMove, 500);
            } else {
              updateTurnIndicator();
            }
          }
        }
      } else {
        const squareId = clickedSquare.dataset.square!;
        const piece = appState.game.get(squareId as any);
        if (piece && piece.color === appState.game.turn()) {
          appState.selectedSquare = clickedSquare;
          clickedSquare.querySelector('.piece')?.classList.add('selected');
        }
      }
    }
  });

  elements.closeDialogButton.addEventListener('click', () => {
    elements.completionDialog.classList.add('hidden');
  });
}

function init(): void {
  createBoard();
  setupAuth();
  (document.querySelector('[data-mode="lessons"]') as HTMLButtonElement).click();
}

registerEvents();
init();