const TAG_DATA = {
    base: [
        { nameJa: "傑作", desc: "作品のクオリティを底上げする必須タグ", value: "masterpiece" },
        { nameJa: "最高品質", desc: "ディテールと質感を向上させる", value: "best quality" },
        { nameJa: "高解像度", desc: "きめ細やかな描写", value: "highres" },
        { nameJa: "8K解像度", desc: "極めて精細な壁紙品質", value: "8k wallpaper" },
        { nameJa: "シネマティック照明", desc: "実写映画のような光の演出", value: "cinematic lighting" },
        { nameJa: "被写界深度", desc: "背景をぼかして被写体を際立たせる", value: "depth of field" },
        { nameJa: "レイトレーシング", desc: "光の反射をリアルにシミュレート", value: "ray tracing" },
        { nameJa: "シャープフォーカス", desc: "ピントがはっきり合った描写", value: "sharp focus" },
        { nameJa: "詳細な背景", desc: "背景の描き込みを増やす", value: "detailed background" },
        { nameJa: "超詳細", desc: "細部まで徹底的に描き込む", value: "ultra-detailed" }
    ],
    character: [
        { nameJa: "女の子", desc: "1人の女性キャラクター", value: "1girl" },
        { nameJa: "男の子", desc: "1人の男性キャラクター", value: "1boy" },
        { nameJa: "カップル", desc: "男女のペア", value: "2persons, couple" },
        { nameJa: "ロリ", desc: "幼い少女", value: "loli" },
        { nameJa: "ショタ", desc: "幼い少年", value: "shota" },
        { nameJa: "騎士", desc: "鎧を着た戦士", value: "knight" },
        { nameJa: "エルフ", desc: "尖った耳を持つ幻想種", value: "elf" },
        { nameJa: "吸血鬼", desc: "牙を持つ夜の住人", value: "vampire" },
        { nameJa: "魔女", desc: "魔法使いの女性", value: "witch" },
        { nameJa: "メイド", desc: "奉仕の制服を着た女性", value: "maid" },
        { nameJa: "巫女", desc: "日本の伝統的な聖職者", value: "miko" },
        { nameJa: "ナース", desc: "看護師", value: "nurse" },
        { nameJa: "女子高生", desc: "日本の制服を着た学生", value: "japanese school girl" },
        { nameJa: "サイボーグ", desc: "機械化された人間", value: "cyborg" },
        { nameJa: "天使", desc: "背中に羽を持つ聖なる存在", value: "angel" },
        { nameJa: "悪魔", desc: "角や尻尾を持つ存在", value: "demon" }
    ],
    hair: [
        { nameJa: "ロングヘア", desc: "長い髪", value: "long hair" },
        { nameJa: "ショートヘア", desc: "短い髪", value: "short hair" },
        { nameJa: "ツインテール", desc: "左右で結んだ髪", value: "twintails" },
        { nameJa: "ポニーテール", desc: "後ろで一本に結んだ髪", value: "ponytail" },
        { nameJa: "ボブカット", desc: "おかっぱ頭", value: "bob cut" },
        { nameJa: "姫カット", desc: "伝統的な日本の髪型", value: "hime cut" },
        { nameJa: "サイドポニー", desc: "横で結んだ髪", value: "side ponytail" },
        { nameJa: "お団子頭", desc: "髪を丸くまとめたスタイル", value: "hair bun" },
        { nameJa: "ドリルヘア", desc: "縦ロールの強い髪", value: "drill hair" },
        { nameJa: "乱れ髪", desc: "少し崩れた髪の毛", value: "messy hair" },
        { nameJa: "銀髪", desc: "銀色の髪", value: "silver hair" },
        { nameJa: "金髪", desc: "金色の髪", value: "blonde hair" },
        { nameJa: "赤髪", desc: "赤色の髪", value: "red hair" },
        { nameJa: "ピンク髪", desc: "桃色の髪", value: "pink hair" },
        { nameJa: "アホ毛", desc: "一本ぴょこんと跳ねた髪", value: "ahoge" }
    ],
    face: [
        { nameJa: "微笑み", desc: "穏やかな笑顔", value: "smiling" },
        { nameJa: "照れ顔", desc: "赤面した顔", value: "blushing" },
        { nameJa: "ドヤ顔", desc: "得意げな表情", value: "smirking" },
        { nameJa: "泣き顔", desc: "涙を流す表情", value: "crying" },
        { nameJa: "怒り顔", desc: "怒っている表情", value: "angry" },
        { nameJa: "驚き顔", desc: "びっくりした表情", value: "surprised" },
        { nameJa: "ジト目", desc: "冷ややかな視線", value: "jitome" },
        { nameJa: "釣り目", desc: "目尻が上がった目", value: "tsurime" },
        { nameJa: "タレ目", desc: "目尻が下がった目", value: "tareme" },
        { nameJa: "オッドアイ", desc: "左右で色が違う瞳", value: "heterochromia" },
        { nameJa: "猫目", desc: "瞳孔が細い目", value: "slit pupils" },
        { nameJa: "口を開ける", desc: "口を開いた状態", value: "open mouth" },
        { nameJa: "舌出し", desc: "舌をぺろっと出した顔", value: "tongue out" }
    ],
    clothes: [
        { nameJa: "セーラー服", desc: "海軍風の学生服", value: "sailor suit" },
        { nameJa: "ブレザー", desc: "ジャケット形式の学生服", value: "school blazer" },
        { nameJa: "体操服", desc: "学校用のスポーツウェア", value: "gym uniform" },
        { nameJa: "スク水", desc: "学校指定の水着", value: "school swimsuit" },
        { nameJa: "着物", desc: "日本の伝統衣装", value: "kimono" },
        { nameJa: "ドレス", desc: "華やかな洋装", value: "dress" },
        { nameJa: "ゴスロリ", desc: "ゴシック・アンド・ロリータ", value: "gothic lolita" },
        { nameJa: "チャイナドレス", desc: "中国の伝統的なドレス", value: "china dress" },
        { nameJa: "ビキニ", desc: "露出度の高い水着", value: "bikini" },
        { nameJa: "ワンピース", desc: "繋がった衣服", value: "one-piece dress" },
        { nameJa: "パーカー", desc: "フード付きのスウェット", value: "hoodie" },
        { nameJa: "オーバーサイズ", desc: "ダボっとした大きめの服", value: "oversized clothes" },
        { nameJa: "ニーハイ", desc: "膝上の靴下", value: "knee highs" },
        { nameJa: "タイツ", desc: "脚を覆うストッキング", value: "tights" }
    ],
    pose: [
        { nameJa: "立ちポーズ", desc: "立っている状態", value: "standing" },
        { nameJa: "座りポーズ", desc: "座っている状態", value: "sitting" },
        { nameJa: "寝そべり", desc: "横たわった状態", value: "lying flat" },
        { nameJa: "膝立ち", desc: "膝をついた状態", value: "kneeling" },
        { nameJa: "歩いている", desc: "歩行動作", value: "walking" },
        { nameJa: "走っている", desc: "走行動作", value: "running" },
        { nameJa: "見上げる", desc: "上を見ている", value: "looking up" },
        { nameJa: "見下ろす", desc: "下を見ている", value: "looking down" },
        { nameJa: "後ろ姿", desc: "背後からの視点", value: "from behind" },
        { nameJa: "アオリ", desc: "低い位置からのアングル", value: "from below" },
        { nameJa: "俯瞰", desc: "高い位置からのアングル", value: "from above" },
        { nameJa: "アップショット", desc: "被写体に寄った構図", value: "close-up" },
        { nameJa: "カウボーイショット", desc: "太ももから上の構図", value: "cowboy shot" },
        { nameJa: "全身ショット", desc: "頭から爪先までの構図", value: "full body" }
    ],
    style: [
        { nameJa: "アニメ風", desc: "2Dのアニメーションスタイル", value: "anime style" },
        { nameJa: "実写風", desc: "超リアルな写真質感", value: "photorealistic" },
        { nameJa: "水彩画", desc: "淡い色の重なり", value: "watercolor" },
        { nameJa: "油絵", desc: "深みのある絵画スタイル", value: "oil painting" },
        { nameJa: "スケッチ", desc: "ラフな描き込み", value: "sketch" },
        { nameJa: "サイバーパンク", desc: "ネオンとテクノロジー", value: "cyberpunk" },
        { nameJa: "スチームパンク", desc: "蒸気機関と真鍮", value: "steampunk" },
        { nameJa: "ファンタジー", desc: "魔法の世界観", value: "fantasy" },
        { nameJa: "ジブリ風", desc: "温かみのあるアニメ背景", value: "studio ghibli style" },
        { nameJa: "ピクセルアート", desc: "レトロなドット絵", value: "pixel art" }
    ],
    scene: [
        { nameJa: "室内", desc: "部屋の中", value: "indoors" },
        { nameJa: "屋外", desc: "外の風景", value: "outdoors" },
        { nameJa: "教室", desc: "学校の部屋", value: "classroom" },
        { nameJa: "ビーチ", desc: "砂浜と海", value: "beach" },
        { nameJa: "森", desc: "木々に囲まれた場所", value: "forest" },
        { nameJa: "街並み", desc: "都市の風景", value: "cityscape" },
        { nameJa: "カフェ", desc: "喫茶店の中", value: "cafe" },
        { nameJa: "宇宙", desc: "星々の間", value: "outer space" },
        { nameJa: "サイバーシティ", desc: "近未来の都市", value: "night city" },
        { nameJa: "夕焼け", desc: "オレンジ色の空", value: "sunset" },
        { nameJa: "夜空", desc: "星や月が見える空", value: "night sky" }
    ],
    mature: [
        { nameJa: "セクシー", desc: "色気のある雰囲気", value: "sexy" },
        { nameJa: "ランジェリー", desc: "下着姿", value: "lingerie" },
        { nameJa: "ビキニ", desc: "セパレートの水着", value: "bikini" },
        { nameJa: "透け感", desc: "衣服が透けている状態", value: "see-through" },
        { nameJa: "開脚", desc: "脚を開いたポーズ", value: "spread legs" },
        { nameJa: "ハート目", desc: "瞳がハートに", value: "heart-shaped pupils" },
        { nameJa: "アヘ顔", desc: "快楽に溺れた表情", value: "ahegao" },
        { nameJa: "全裸", desc: "服を着ていない", value: "naked" },
        { nameJa: "胸のアップ", desc: "バストの強調", value: "large breasts focus" }
    ]
};

let selectedTags = new Set();
let currentCategory = 'base';
let searchQuery = '';

const tagContainer = document.getElementById('tag-container');
const promptDisplay = document.getElementById('prompt-display');
const copyBtn = document.getElementById('copy-btn');
const clearBtn = document.getElementById('clear-btn');
const tabBtns = document.querySelectorAll('.tab-btn');
const searchInput = document.getElementById('tag-search');
const copyNegBtn = document.getElementById('copy-neg-btn');
const negPromptText = document.getElementById('negative-prompt-text');

// Initialize
function init() {
    renderRows();
    setupEventListeners();
}

function renderRows() {
    tagContainer.innerHTML = '';
    const tags = TAG_DATA[currentCategory];

    const filteredTags = tags.filter(tag =>
        tag.nameJa.includes(searchQuery) ||
        tag.value.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tag.desc.includes(searchQuery)
    );

    if (filteredTags.length === 0) {
        tagContainer.innerHTML = '<tr><td colspan="3" style="text-align:center; padding: 2rem; color: var(--text-muted);">見つかりませんでした</td></tr>';
        return;
    }

    filteredTags.forEach(tag => {
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

        tr.onclick = (e) => {
            if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'LABEL' && e.target.className !== 'checkmark') {
                const checkbox = tr.querySelector('input');
                checkbox.checked = !checkbox.checked;
                toggleTag(tag.value, checkbox.checked);
            }
        };

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

    const rows = tagContainer.querySelectorAll('tr');
    rows.forEach(row => {
        const checkbox = row.querySelector('input');
        if (checkbox && checkbox.dataset.value === value) {
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
    // Tabs
    tabBtns.forEach(btn => {
        btn.onclick = () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            searchInput.value = ''; // Reset search on tab change
            searchQuery = '';
            renderRows();
        };
    });

    // Search
    searchInput.oninput = (e) => {
        searchQuery = e.target.value;
        renderRows();
    };

    // Copy Prompt
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

    // Clear All
    clearBtn.onclick = () => {
        selectedTags.clear();
        updatePrompt();
        renderRows();
    };

    // Copy Negative Prompt
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
