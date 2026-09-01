import Keycloak from 'keycloak-js';
import { dev } from '$app/environment';

let url_path = "https://auth.w9yt.org";
if (dev) {
    url_path = "http://localhost:8080"
} 

export function createKeycloak() {
    return new Keycloak({
        url: url_path,
        realm: "BARS",
        clientId: "www-w9yt-org"
    });

}
