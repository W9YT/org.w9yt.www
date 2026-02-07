import { execSync } from 'node:child_process';
export const prerender = true;
export function GET() {
    const hash = execSync('git rev-parse HEAD').toString().trim();
    const date = new Date().toISOString();

    return new Response(JSON.stringify({ hash, date }), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
