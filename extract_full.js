const fs = require('fs');
const html = fs.readFileSync('r18.html', 'utf8');

const data = {};
let currentMain = '';
let currentSub = '';

// Find all h2 and h4 and tables
// A simple state machine approach
const regex = /<(h2|h4|table)[^>]*>(.*?)<\/\1>/gs;
let match;

while ((match = regex.exec(html)) !== null) {
    const type = match[1];
    let content = match[2].replace(/<\/?[^>]+(>|$)/g, "").trim();

    if (type === 'h2') {
        if (content === '目次') continue;
        currentMain = content;
        data[currentMain] = { "基本一覧": [] };
        currentSub = "基本一覧";
    } else if (type === 'h4') {
        currentSub = content;
        if (!data[currentMain]) data[currentMain] = {}; // Should not happen with well formed HTML
        data[currentMain][currentSub] = [];
    } else if (type === 'table') {
        const tableHtml = match[0];
        const rowRegex = /<tr>(.*?)<\/tr>/gs;
        let rowMatch;
        while ((rowMatch = rowRegex.exec(tableHtml)) !== null) {
            const rowBody = rowMatch[1];
            const cellRegex = /<td[^>]*>(.*?)<\/td>/gs;
            const cells = [];
            let cellMatch;
            while ((cellMatch = cellRegex.exec(rowBody)) !== null) {
                cells.push(cellMatch[1].replace(/<br\s*\/?>/gi, ", ").replace(/<\/?[^>]+(>|$)/g, "").trim());
            }
            if (cells.length >= 2) {
                const nameJa = cells[0];
                const value = cells[1];
                if (nameJa === '日本語' || nameJa === '詳細') continue;
                if (!data[currentMain]) continue;
                if (!data[currentMain][currentSub]) data[currentMain][currentSub] = [];
                data[currentMain][currentSub].push({ nameJa, desc: '', value });
            }
        }
    }
}

fs.writeFileSync('extracted_data.json', JSON.stringify(data, null, 2));
console.log('Extraction complete. Check extracted_data.json');
