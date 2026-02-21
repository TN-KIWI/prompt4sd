const fs = require('fs');
const html = fs.readFileSync('r18.html', 'utf8');

const data = {};
let currentMain = '';
let currentSub = '';

// Simple regex parser for this specific HTML structure
// Headers are h2 or h4
// Tables follow
const parts = html.split(/<h[24] id="[^"]+">/);
const headers = html.match(/<h([24]) id="[^"]+">([^<]+)<\/h[24]>/g);

if (headers) {
    headers.forEach((header, i) => {
        const hType = header.match(/<h([24])/)[1];
        const hText = header.replace(/<\/?[^>]+(>|$)/g, "").trim();
        const content = parts[i + 1];

        if (hType === '2') {
            currentMain = hText;
            data[currentMain] = {};
            currentSub = '概説'; // Default sub if none follows
            data[currentMain][currentSub] = [];
        } else if (hType === '4') {
            currentSub = hText;
            if (!data[currentMain]) data[currentMain] = {};
            data[currentMain][currentSub] = [];
        }

        // Extract rows from table in content
        const rows = content.match(/<tr><td[^>]*>([^<]+(?:<br>[^<]+)*)<\/td><td[^>]*>([^<]+(?:<br>[^<]+)*)<\/td><\/tr>/g);
        if (rows) {
            rows.forEach(row => {
                const cells = row.match(/<td[^>]*>([^<]+(?:<br>[^<]+)*)<\/td>/g);
                if (cells && cells.length >= 2) {
                    const nameJa = cells[0].replace(/<\/?[^>]+(>|$)/g, "").trim();
                    const value = cells[1].replace(/<\/?[^>]+(>|$)/g, "").trim();
                    if (nameJa !== '日本語' && nameJa !== '詳細') {
                        data[currentMain][currentSub].push({
                            nameJa,
                            desc: '', // Site doesn't always have a separate desc col, we use nameJa or split
                            value
                        });
                    }
                }
            });
        }
    });
}

fs.writeFileSync('extracted_data.json', JSON.stringify(data, null, 2));
console.log('Extraction complete. Check extracted_data.json');
