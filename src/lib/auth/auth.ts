import { browser } from '$app/environment';
import { get, writable } from 'svelte/store';
import { createKeycloak } from './keycloak';
import type Keycloak from 'keycloak-js';
export const initialized = writable(false);
export const authError = writable(false);
export const authenticated = writable(false);
export const user = writable<any>(null);

let keycloak:Keycloak;

export async function initAuth() {
	if (!browser) return;

	keycloak = createKeycloak();

	try {
		keycloak.onAuthLogout = () => {
			console.log('KC logout on other tab');
			authenticated.set(false);
			authError.set(false);
			user.set(null);
		};

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

export async function reCheckAuth() {
	if (localStorage.getItem('stop-reCheckAuth')) {
		console.log("reCheckAuth skipped");
		return;
	}

	if (!get(authError) && !get(authenticated)) {
		initAuth();
	}
	console.log("reCheckAuth done");
}

export async function registerAccount() {
	return keycloak.register();
}