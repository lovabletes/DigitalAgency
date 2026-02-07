
import { readFileSync } from 'fs';
const registry = JSON.parse(readFileSync('./data/wake-registry.json', 'utf8'));

const urls = registry.projects.flatMap(p =>
    p.services.map(url => ({ name: p.name, url }))
);

async function wakeUp() {
    for (const site of urls) {
        console.log(`Pinging ${site.name}...`);
        let attempts = 0;
        const maxAttempts = 5;
        let success = false;

        while (attempts < maxAttempts && !success) {
            attempts++;
            const start = Date.now();
            try {
                const res = await fetch(site.url, { method: 'HEAD', timeout: 30000 });
                const duration = (Date.now() - start) / 1000;
                console.log(`[${site.name}] Attempt ${attempts}: Status ${res.status} in ${duration}s`);
                if (res.ok || res.status === 404 || res.status === 401) { // 404/401 is still a response from a live server
                    success = true;
                }
            } catch (err) {
                const duration = (Date.now() - start) / 1000;
                console.log(`[${site.name}] Attempt ${attempts}: Failed after ${duration}s - ${err.message}`);
            }
            if (!success && attempts < maxAttempts) {
                console.log(`Waiting 5 seconds before next attempt...`);
                await new Promise(r => setTimeout(r, 5000));
            }
        }
    }
}

wakeUp();
