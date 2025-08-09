import { Chess } from 'chess.js';
import { elements } from './ui';
import { pieceSymbols } from './constants';

export function createBoard(): void {
  const { boardEl } = elements;
  boardEl.innerHTML = '';
  for (let row = 7; row >= 0; row--) {
    for (let col = 0; col < 8; col++) {
      const squareEl = document.createElement('div');
      squareEl.classList.add('square', (row + col) % 2 === 0 ? 'dark' : 'light');
      squareEl.dataset.square = `${String.fromCharCode(97 + col)}${row + 1}`;
      squareEl.dataset.col = String(col);
      squareEl.dataset.row = String(row);
      boardEl.appendChild(squareEl);
    }
  }
}

export function drawBoardFromFen(fen: string): void {
  const { boardEl } = elements;
  const tempGame = new Chess(fen);
  boardEl.querySelectorAll('.square').forEach((squareEl) => {
    const element = squareEl as HTMLElement & { dataset: { square: string } };
    const piece = tempGame.get(element.dataset.square as any);
    element.innerHTML = '';
    if (piece) {
      const pieceEl = document.createElement('span');
      pieceEl.classList.add('piece');
      const color = piece.color as 'w' | 'b';
      const type = piece.type as keyof typeof pieceSymbols['w'];
      pieceEl.textContent = pieceSymbols[color][type];
      element.appendChild(pieceEl);
    }
  });
}

export function clearBoard(): void {
  const { boardEl } = elements;
  boardEl.querySelectorAll('.square').forEach((sq) => {
    const el = sq as HTMLElement;
    el.innerHTML = '';
    el.classList.remove('highlight', 'selected', 'goal-square');
  });
}