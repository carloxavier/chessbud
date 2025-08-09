import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, type User } from 'firebase/auth';
import { firebaseConfig } from './firebaseConfig';
import { elements } from './ui';
import { appState } from './state';

export function setupAuth(): void {
  try {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    appState.auth = auth;

    onAuthStateChanged(auth, (user) => {
      appState.currentUser = user;
      updateAuthUI(user);
      updatePremiumFeaturesAccess(user);
      if (user && appState.pendingActionAfterLogin) {
        appState.pendingActionAfterLogin();
        appState.pendingActionAfterLogin = null;
      }
    });
  } catch (e) {
    console.error('Firebase initialization error: Make sure to replace the placeholder config with your actual Firebase project config.', e);
    elements.authContainer.innerHTML = `<p class="text-red-500">Error de Auth</p>`;
  }
}

function updateAuthUI(user: User | null): void {
  if (user) {
    const firstName = (user.displayName || '').split(' ')[0] || 'Usuario';
    elements.authContainer.innerHTML = `
      <div class="flex items-center gap-2">
        <span class="text-gray-700">Hola, ${firstName}</span>
        <button id="logout-button" class="control-button bg-red-500 text-white px-3 py-1 rounded-lg text-sm">Salir</button>
      </div>`;
    document.getElementById('logout-button')!.addEventListener('click', () => signOut(appState.auth!));
  } else {
    elements.authContainer.innerHTML = `<button id="login-button" class="control-button bg-blue-500 text-white px-4 py-2 rounded-lg">Iniciar Sesión con Google</button>`;
    document.getElementById('login-button')!.addEventListener('click', signInWithGoogle);
  }
}

export function updatePremiumFeaturesAccess(user: User | null): void {
  const isUnlocked = !!user;
  elements.practiceModeButton.classList.toggle('disabled', !isUnlocked);
  elements.lockIconPractice.style.display = isUnlocked ? 'none' : 'block';

  if (!isUnlocked && appState.currentMode === 'practice') {
    (document.querySelector('[data-mode="lessons"]') as HTMLButtonElement)?.click();
  }
}

export function signInWithGoogle(): void {
  if (!appState.auth) {
    console.error('Firebase Auth is not initialized.');
    return;
  }
  const provider = new GoogleAuthProvider();
  signInWithPopup(appState.auth, provider).catch((error) => console.error('Google sign-in error', error));
}