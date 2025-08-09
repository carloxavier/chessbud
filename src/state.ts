import type { Auth, User } from 'firebase/auth';
import type { Chess } from 'chess.js';

export type Mode = 'lessons' | 'challenges' | 'practice';

export interface LessonState {
  piece: 'pawn' | 'knight' | 'bishop' | 'rook' | 'queen' | 'king' | null;
  type: 'move' | 'capture' | null;
  inProgress: boolean;
  pieceCoords: [number, number] | null;
}

export interface Challenge {
  fen: string;
  goal: string;
  goalSquare: string;
}

export interface ChallengeState {
  inProgress: boolean;
  currentChallengeIndex: number;
  maxChallengeIndex: number;
  currentChallenge?: Challenge;
}

export interface AppState {
  currentMode: Mode;
  game: Chess | null;
  selectedSquare: HTMLElement | null;
  auth: Auth | null;
  currentUser: User | null;
  pendingActionAfterLogin: (() => void) | null;
  lessonState: LessonState;
  challengeState: ChallengeState;
}

export const appState: AppState = {
  currentMode: 'lessons',
  game: null,
  selectedSquare: null,
  auth: null,
  currentUser: null,
  pendingActionAfterLogin: null,
  lessonState: { piece: null, type: null, inProgress: false, pieceCoords: null },
  challengeState: { inProgress: false, currentChallengeIndex: 0, maxChallengeIndex: 0 },
};