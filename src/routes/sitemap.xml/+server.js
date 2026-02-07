import { readFileSync } from 'fs';
import { resolve } from 'path';

export const prerender = true;

export async function GET() {
    // Load XML file from /static
    const xmlPath = resolve('src/sitemap.xml');
    const xml = readFileSync(xmlPath, 'utf-8');

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml'
        }
    });
}
