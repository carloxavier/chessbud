export const pieceOrder = ['pawn', 'knight', 'bishop', 'rook', 'queen', 'king'] as const;
export type PieceKey = typeof pieceOrder[number];

export const lessonPieces: Record<PieceKey, { name: string; symbol: string }> = {
  pawn: { name: 'Peón', symbol: '♙' },
  knight: { name: 'Caballo', symbol: '♘' },
  bishop: { name: 'Alfil', symbol: '♗' },
  rook: { name: 'Torre', symbol: '♖' },
  queen: { name: 'Reina', symbol: '♕' },
  king: { name: 'Rey', symbol: '♔' },
};

export const lessons: Record<PieceKey, any> = {
  pawn: { move: [{ piece: [4, 1], highlights: [[4, 2], [4, 3]] }], capture: [{ piece: [4, 4], enemy: [3, 5], highlights: [[3, 5]] }] },
  knight: { move: [{ piece: [1, 0], highlights: [[0, 2], [2, 2], [3, 1]] }], capture: [{ piece: [4, 4], enemy: [5, 6], highlights: [[5, 6]] }] },
  bishop: { move: [{ piece: [2, 0], highlights: [[0, 2], [1, 1], [3, 1], [4, 2], [5, 3], [6, 4], [7, 5]] }], capture: [{ piece: [2, 2], enemy: [5, 5], highlights: [[5, 5]] }] },
  rook: { move: [{ piece: [0, 0], highlights: [[0, 7], [7, 0]] }], capture: [{ piece: [0, 0], enemy: [0, 5], highlights: [[0, 5]] }] },
  queen: { move: [{ piece: [3, 3], highlights: [[3, 0], [0, 3], [5, 5], [1, 5]] }], capture: [{ piece: [3, 3], enemy: [7, 7], highlights: [[7, 7]] }] },
  king: { move: [{ piece: [4, 0], highlights: [[3, 0], [3, 1], [4, 1], [5, 1], [5, 0]] }], capture: [{ piece: [4, 4], enemy: [5, 5], highlights: [[5, 5]] }] },
};

export const puzzles = [
  { fen: 'r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3', goal: 'Juegan las blancas. ¡Desarrolla tus piezas!' },
  { fen: '4k3/8/8/8/8/8/4P3/4K3 w - - 0 1', goal: 'Juegan las blancas. ¡Intenta coronar el peón!' },
];

export const pieceSymbols = {
  w: { p: '♙', r: '♖', n: '♘', b: '♗', q: '♕', k: '♔' },
  b: { p: '♟', r: '♜', n: '♞', b: '♝', q: '♛', k: '♚' },
} as const;

export const challenges = [
  { fen: '8/8/8/8/8/2N5/8/8 w - - 0 1', goal: 'Lleva el caballo a f6', goalSquare: 'f6' },
  { fen: '8/8/8/8/8/8/8/R7 w - - 0 1', goal: 'Lleva la torre a h8', goalSquare: 'h8' },
  { fen: '8/8/8/8/8/8/1B6/8 w - - 0 1', goal: 'Lleva el alfil a g7', goalSquare: 'g7' },
  { fen: '8/8/8/8/8/8/8/Q7 w - - 0 1', goal: 'Lleva la reina a e5', goalSquare: 'e5' },
  { fen: '4K3/8/8/8/8/8/8/8 w - - 0 1', goal: 'Lleva el rey a c6', goalSquare: 'c6' },
];