import { BehaviorSubject } from 'rxjs';

// Manage logged in state
const isAuthenticatedState$ = new BehaviorSubject(false);

// Export readonly listener and snapshot for logged in state
export const isAuthenticated$ = isAuthenticatedState$.asObservable();
export const isAuthenticated = isAuthenticatedState$.getValue();

// Manage user state
const userState$ = new BehaviorSubject<null|Record<string, any>>(null);

// Export readonly listner and snapshot for user data
export const user$ = userState$.asObservable();
export const user = userState$.getValue();

/**
 * Handle user login
 */
export const login = () => {
    // TODO: Login user

    // Set user data
    userState$.next({ id: 'abcd' });

    // Set logged in as true
    isAuthenticatedState$.next(true);
};

export const logout = () => {
    // Remove user state
    userState$.next(null);

    // Set logged in to false
    isAuthenticatedState$.next(false);
};
