const TAG_DATA = {
    character: [
        { nameJa: "女の子", desc: "一般的な女性キャラクター", value: "1girl" },
        { nameJa: "男の子", desc: "一般的な男性キャラクター", value: "1boy" },
        { nameJa: "カップル", desc: "男女ペア、または二人組", value: "2persons, couple" },
        { nameJa: "騎士", desc: "鎧をまとった戦士", value: "knight" },
        { nameJa: "エルフ", desc: "尖った耳を持つ幻想的な種族", value: "elf" },
        { nameJa: "魔女", desc: "魔法を使う女性", value: "witch" },
        { nameJa: "サイボーグ", desc: "体の一部が機械化された人間", value: "cyborg" },
        { nameJa: "学生", desc: "制服を着た学生", value: "school student" },
        { nameJa: "メイド", desc: "エプロンドレスを着た奉仕者", value: "maid" },
        { nameJa: "巫女", desc: "和風の聖職者", value: "miko" }
    ],
    appearance: [
        { nameJa: "ロングヘア", desc: "長い髪の毛", value: "long hair" },
        { nameJa: "ショートヘア", desc: "短い髪の毛", value: "short hair" },
        { nameJa: "ツインテール", desc: "左右に結んだ髪型", value: "twintails" },
        { nameJa: "ポニーテール", desc: "後ろで一つに結んだ髪型", value: "ponytail" },
        { nameJa: "銀髪", desc: "神秘的な銀色の髪", value: "silver hair" },
        { nameJa: "青い目", desc: "澄んだ青色の瞳", value: "blue eyes" },
        { nameJa: "微笑み", desc: "優しく笑う表情", value: "smiling" },
        { nameJa: "照れ顔", desc: "頬を赤らめた表情", value: "blushing" },
        { nameJa: "巨乳", desc: "大きな胸の強調", value: "large breasts" },
        { nameJa: "美少女", desc: "顔立ちの整ったキャラクター", value: "beautiful face" }
    ],
    style: [
        { nameJa: "アニメ風", desc: "日本の2Dアニメスタイル", value: "anime style" },
        { nameJa: "実写風", desc: "写真のようなリアルな質感", value: "photorealistic" },
        { nameJa: "油絵風", desc: "厚塗りの芸術的なスタイル", value: "oil painting" },
        { nameJa: "サイバーパンク", desc: "ハイテクで退廃的な未来世界", value: "cyberpunk" },
        { nameJa: "スチームパンク", desc: "蒸気機関が発達したレトロ未来", value: "steampunk" },
        { nameJa: "ファンタジー", desc: "魔法と創造の世界", value: "fantasy" },
        { nameJa: "水彩画風", desc: "透明感のある淡い絵画スタイル", value: "watercolor" },
        { nameJa: "ジブリ風", desc: "スタジオジブリ作品のような雰囲気", value: "studio ghibli style" },
        { nameJa: "新海誠風", desc: "光の描写が美しいアニメスタイル", value: "makoto shinkai style" },
        { nameJa: "ピクセルアート", desc: "懐かしいドット絵風スタイル", value: "pixel art" }
    ],
    tech: [
        { nameJa: "高解像度", desc: "きめ細やかな描写", value: "highres" },
        { nameJa: "8K解像度", desc: "極めて精細な壁紙品質", value: "8k wallpaper" },
        { nameJa: "傑作", desc: "最高品質の出力（必須級）", value: "masterpiece" },
        { nameJa: "最高品質", desc: "質感を向上させるタグ", value: "best quality" },
        { nameJa: "シネマティック照明", desc: "映画のようなドラマチックな光", value: "cinematic lighting" },
        { nameJa: "被写界深度", desc: "背景をぼかして被写体を際立たせる", value: "depth of field" },
        { nameJa: "レイトレーシング", desc: "光の反射をリアルに描写", value: "ray tracing" },
        { nameJa: "シャープフォーカス", desc: "ピントがはっきり合った描写", value: "sharp focus" },
        { nameJa: "ダイナミックアングル", desc: "変化に富んだ構図", value: "dynamic angle" },
        { nameJa: "詳細な背景", desc: "背景を描き込みを増やす", value: "detailed background" }
    ],
    scene: [
        { nameJa: "森", desc: "自然豊かな森林", value: "forest" },
        { nameJa: "サイバーシティ", desc: "ネオン輝く未来都市", value: "cyberpunk city background" },
        { nameJa: "ビーチ", desc: "海辺の風景", value: "beach" },
        { nameJa: "図書館", desc: "本に囲まれた静かな場所", value: "library" },
        { nameJa: "宇宙", desc: "星々が輝く外宇宙", value: "outer space" },
        { nameJa: "教室", desc: "学校の室内", value: "classroom" },
        { nameJa: "夕焼け", desc: "黄金色の空", value: "sunset" },
        { nameJa: "雨の日", desc: "しっとりとした雨の風景", value: "rainy day" },
        { nameJa: "廃墟", desc: "放置された古い建物", value: "ruins" }
    ],
    mature: [
        { nameJa: "ランジェリー", desc: "下着姿", value: "lingerie" },
        { nameJa: "水着", desc: "全身の水着", value: "swimsuit" },
        { nameJa: "ビキニ", desc: "セパレートの水着", value: "bikini" },
        { nameJa: "透け感", desc: "服が透けて見える描写", value: "see-through" },
        { nameJa: "開脚", desc: "足を開いたポーズ", value: "spread legs" },
        { nameJa: "ハート目", desc: "瞳がハート形に", value: "heart-shaped pupils" },
        { nameJa: "アヘ顔", desc: "快楽に溺れた表情", value: "ahegao" },
        { nameJa: "全裸", desc: "何も着ていない状態", value: "naked" }
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
    renderRows(currentCategory);
    setupEventListeners();
}

function renderRows(category) {
    tagContainer.innerHTML = '';
    const tags = TAG_DATA[category];

    tags.forEach(tag => {
        const tr = document.createElement('tr');
        if (selectedTags.has(tag.value)) tr.classList.add('selected');

        const isChecked = selectedTags.has(tag.value) ? 'checked' : '';

        tr.innerHTML = `
            <td class="col-name">
                <label class="checkbox-container">
                    <input type="checkbox" data-value="${tag.value}" ${isChecked}>
                    <span class="checkmark"></span>
                    ${tag.nameJa}
                </label>
            </td>
            <td class="col-desc">${tag.desc}</td>
            <td class="col-tag">${tag.value}</td>
        `;

        // 行全体をクリックしても切り替えられるようにする (チェックボックス以外)
        tr.onclick = (e) => {
            if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'LABEL' && e.target.className !== 'checkmark') {
                const checkbox = tr.querySelector('input');
                checkbox.checked = !checkbox.checked;
                toggleTag(tag.value, checkbox.checked);
            }
        };

        // チェックボックス自体の変更イベント
        const checkbox = tr.querySelector('input');
        checkbox.onchange = (e) => {
            toggleTag(tag.value, e.target.checked);
        };

        tagContainer.appendChild(tr);
    });
}

function toggleTag(value, isChecked) {
    if (isChecked) {
        selectedTags.add(value);
    } else {
        selectedTags.delete(value);
    }
    updatePrompt();

    // 現在表示されているカテゴリの行だけスタイルを更新
    const rows = tagContainer.querySelectorAll('tr');
    rows.forEach(row => {
        const cb = row.querySelector('input');
        if (cb.dataset.value === value) {
            if (isChecked) row.classList.add('selected');
            else row.classList.remove('selected');
        }
    });
}

function updatePrompt() {
    if (selectedTags.size === 0) {
        promptDisplay.innerHTML = '<span class="placeholder">下のテーブルから項目を選択してプロンプトを作成してください...</span>';
        return;
    }

    const promptArray = Array.from(selectedTags);
    promptDisplay.textContent = promptArray.join(', ');
}

function setupEventListeners() {
    // タブ切り替え
    tabBtns.forEach(btn => {
        btn.onclick = () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            renderRows(currentCategory);
        };
    });

    // プロンプトコピー
    copyBtn.onclick = () => {
        const text = promptDisplay.textContent;
        if (selectedTags.size > 0 && !text.includes('下のテーブルから')) {
            navigator.clipboard.writeText(text).then(() => {
                const originalText = copyBtn.textContent;
                copyBtn.textContent = 'コピー完了！';
                copyBtn.classList.add('success');
                setTimeout(() => {
                    copyBtn.textContent = originalText;
                    copyBtn.classList.remove('success');
                }, 2000);
            });
        }
    };

    // すべてクリア
    clearBtn.onclick = () => {
        selectedTags.clear();
        updatePrompt();
        renderRows(currentCategory);
    };

    // ネガティブプロンプトコピー
    copyNegBtn.onclick = () => {
        navigator.clipboard.writeText(negPromptText.textContent).then(() => {
            copyNegBtn.textContent = 'コピー完了！';
            setTimeout(() => {
                copyNegBtn.textContent = 'Copy';
            }, 2000);
        });
    };
}

init();
