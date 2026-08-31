import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import { keycloak } from './keycloak';

export const initialized = writable(false);
export const authError = writable(false);
export const authenticated = writable(false);
export const user = writable<any>(null);

export async function initAuth() {
	if (!browser) return;

	try {
		const isAuthenticated = await keycloak.init({
			onLoad: 'check-sso',
			pkceMethod: 'S256'
		});

		authenticated.set(isAuthenticated);

		if (isAuthenticated) {
			user.set({
				username: keycloak.tokenParsed?.preferred_username,
				name: keycloak.tokenParsed?.name,
				email: keycloak.tokenParsed?.email
			});
		}
	} catch (err) {
		console.error('Keycloak initialization failed:', err);
		authError.set(true);
	} finally {
		initialized.set(true);
	}
}

export function login() {
	if (!browser) return;

	return keycloak.login();
}

export function logout() {
	if (!browser) return;

	return keycloak.logout({
		redirectUri: "https://w9yt.org/IETF-Clear-Site-Data-cookies?p=" + window.location.pathname
	});
}
