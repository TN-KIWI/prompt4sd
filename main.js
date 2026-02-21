const TAG_DATA = {
    character: [
        { label: "Girl", value: "1girl" },
        { label: "Boy", value: "1boy" },
        { label: "Couple", value: "2persons, couple" },
        { label: "Knight", value: "knight" },
        { label: "Elf", value: "elf" },
        { label: "Witch", value: "witch" },
        { label: "Cyborg", value: "cyborg" },
        { label: "Student", value: "school student" },
        { label: "Detective", value: "detective" },
        { label: "Angel", value: "angel" },
        { label: "Demon", value: "demon" },
        { label: "Nurse", value: "nurse" },
        { label: "Police", value: "police officer" },
        { label: "Maid", value: "maid" },
        { label: "Shrine Maiden", value: "miko" }
    ],
    appearance: [
        { label: "Long Hair", value: "long hair" },
        { label: "Short Hair", value: "short hair" },
        { label: "Twin Tails", value: "twintails" },
        { label: "Ponytail", value: "ponytail" },
        { label: "Bob Cut", value: "bob cut" },
        { label: "Hime Cut", value: "hime cut" },
        { label: "Silver Hair", value: "silver hair" },
        { label: "Golden Hair", value: "blonde hair" },
        { label: "Blue Eyes", value: "blue eyes" },
        { label: "Red Eyes", value: "red eyes" },
        { label: "Smile", value: "smiling" },
        { label: "Smirking", value: "smirking" },
        { label: "Blushing", value: "blushing" },
        { label: "Pouting", value: "pouting" },
        { label: "Large Breasts", value: "large breasts" },
        { label: "Flat Chest", value: "flat chest" },
        { label: "Beautiful Face", value: "beautiful face" }
    ],
    style: [
        { label: "Anime Style", value: "anime style" },
        { label: "Photorealistic", value: "photorealistic" },
        { label: "Oil Painting", value: "oil painting" },
        { label: "Cyberpunk", value: "cyberpunk" },
        { label: "Steampunk", value: "steampunk" },
        { label: "Fantasy", value: "fantasy" },
        { label: "Watercolor", value: "watercolor" },
        { label: "Sketch", value: "sketch" },
        { label: "Studio Ghibli", value: "studio ghibli style" },
        { label: "Makoto Shinkai", value: "makoto shinkai style" },
        { label: "Greg Rutkowski", value: "by greg rutkowski" },
        { label: "Ukiyo-e", value: "ukiyo-e" },
        { label: "Pixel Art", value: "pixel art" }
    ],
    tech: [
        { label: "High Res", value: "highres" },
        { label: "8K", value: "8k wallpaper" },
        { label: "Masterpiece", value: "masterpiece" },
        { label: "Best Quality", value: "best quality" },
        { label: "Cinematic Lighting", value: "cinematic lighting" },
        { label: "Soft Lighting", value: "soft lighting" },
        { label: "Depth of Field", value: "depth of field" },
        { label: "Ray Tracing", value: "ray tracing" },
        { label: "Sharp Focus", value: "sharp focus" },
        { label: "Dynamic Angle", value: "dynamic angle" },
        { label: "From Below", value: "from below" },
        { label: "From Above", value: "from above" },
        { label: "Cowboy Shot", value: "cowboy shot" },
        { label: "Detailed Background", value: "detailed background" }
    ],
    scene: [
        { label: "Forest", value: "forest" },
        { label: "Cyber City", value: "cyberpunk city background" },
        { label: "Beach", value: "beach" },
        { label: "Library", value: "library" },
        { label: "Space", value: "outer space" },
        { label: "Classroom", value: "classroom" },
        { label: "Sunset", value: "sunset" },
        { label: "Rainy Day", value: "rainy day" },
        { label: "Ruins", value: "ruins" },
        { label: "Bedroom", value: "bedroom" },
        { label: "Cafe", value: "cafe" },
        { label: "Under Water", value: "underwater" }
    ],
    mature: [
        { label: "Lingerie", value: "lingerie" },
        { label: "Swimsuit", value: "swimsuit" },
        { label: "Bikini", value: "bikini" },
        { label: "See-through", value: "see-through" },
        { label: "Spread Legs", value: "spread legs" },
        { label: "Heart-shaped Pupils", value: "heart-shaped pupils" },
        { label: "Ahegao", value: "ahegao" },
        { label: "Naked", value: "naked" },
        { label: "Oppai", value: "large breasts" }
    ]
};


let selectedTags = new Set();
let currentCategory = 'character';

const tagContainer = document.getElementById('tag-container');
const promptDisplay = document.getElementById('prompt-display');
const copyBtn = document.getElementById('copy-btn');
const clearBtn = document.getElementById('clear-btn');
const tabBtns = document.querySelectorAll('.tab-btn');
const copyNegBtn = document.getElementById('copy-neg-btn');
const negPromptText = document.getElementById('negative-prompt-text');

// Initialize
function init() {
    renderTags(currentCategory);
    setupEventListeners();
}

function renderTags(category) {
    tagContainer.innerHTML = '';
    const tags = TAG_DATA[category];

    tags.forEach(tag => {
        const tagEl = document.createElement('div');
        tagEl.className = 'tag' + (selectedTags.has(tag.value) ? ' selected' : '');
        tagEl.textContent = tag.label;
        tagEl.onclick = () => toggleTag(tag.value);
        tagContainer.appendChild(tagEl);
    });
}

function toggleTag(value) {
    if (selectedTags.has(value)) {
        selectedTags.delete(value);
    } else {
        selectedTags.add(value);
    }
    updatePrompt();
    renderTags(currentCategory);
}

function updatePrompt() {
    if (selectedTags.size === 0) {
        promptDisplay.innerHTML = '<span class="placeholder">Click tags below to start building your prompt...</span>';
        return;
    }

    const promptArray = Array.from(selectedTags);
    promptDisplay.textContent = promptArray.join(', ');
}

function setupEventListeners() {
    // Tabs
    tabBtns.forEach(btn => {
        btn.onclick = () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            renderTags(currentCategory);
        };
    });

    // Copy Prompt
    copyBtn.onclick = () => {
        const text = promptDisplay.textContent;
        if (selectedTags.size > 0) {
            navigator.clipboard.writeText(text).then(() => {
                const originalText = copyBtn.textContent;
                copyBtn.textContent = 'Copied!';
                copyBtn.classList.add('success');
                setTimeout(() => {
                    copyBtn.textContent = originalText;
                    copyBtn.classList.remove('success');
                }, 2000);
            });
        }
    };

    // Clear All
    clearBtn.onclick = () => {
        selectedTags.clear();
        updatePrompt();
        renderTags(currentCategory);
    };

    // Copy Negative Prompt
    copyNegBtn.onclick = () => {
        navigator.clipboard.writeText(negPromptText.textContent).then(() => {
            copyNegBtn.textContent = 'Copied!';
            setTimeout(() => {
                copyNegBtn.textContent = 'Copy';
            }, 2000);
        });
    };
}

init();
