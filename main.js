const TAG_DATA = {
    "体位・プレイ": {
        "基本一覧": [
            { nameJa: "正常位", desc: "missionary", value: "missionary" },
            { nameJa: "女が馬乗り/逆正常位", desc: "girl on top, cowgirl", value: "cowgirl position" },
            { nameJa: "背面騎乗位", desc: "reverse cowgirl", value: "reverse cowgirl position" },
            { nameJa: "側位", desc: "spooning", value: "spooning" },
            { nameJa: "対面座位", desc: "upright straddle", value: "upright straddle" },
            { nameJa: "逆背面座位", desc: "reverse upright straddle", value: "reverse upright straddle" },
            { nameJa: "対面体位 / 立ちバック", desc: "standing sex", value: "standing sex" },
            { nameJa: "まんぐり返し", desc: "folded, legs up", value: "folded, legs up" },
            { nameJa: "奥まで挿入", desc: "deep penetration", value: "deep penetration" },
            { nameJa: "松葉崩し", desc: "prone bone / on side", value: "on side, leg up, split, leg hold, kneeling, prone bone" },
            { nameJa: "だいしゅきホールド", desc: "leg lock", value: "leg lock" },
            { nameJa: "種付けプレス", desc: "mating press", value: "mating press" },
            { nameJa: "おまんこサンドイッチ", desc: "pussy sandwich", value: "pussy sandwich" },
            { nameJa: "駅弁", desc: "suspended congress", value: "suspended congress" },
            { nameJa: "アナル固め / 逆駅弁", desc: "reverse suspended congress", value: "reverse suspended congress" },
            { nameJa: "女体盛", desc: "nyotaimori", value: "nyotaimori" },
            { nameJa: "体の上に食べ物", desc: "food on body", value: "food on body" },
            { nameJa: "胸の上に食べ物", desc: "food on breasts", value: "food on breasts" },
            { nameJa: "一部水中構図", desc: "partially underwater", value: "partially underwater shot" }
        ],
        "乳系プレイ": [
            { nameJa: "ぱふぱふ", desc: "head between breasts", value: "head between breasts" },
            { nameJa: "顔をうずめる", desc: "face to breasts", value: "face to breasts" },
            { nameJa: "顔の上に乳をのせる", desc: "breast smother", value: "breast smother" },
            { nameJa: "乳枕", desc: "breast pillow", value: "breast pillow" },
            { nameJa: "揉ませてる", desc: "guided breast grab", value: "guided breast grab" },
            { nameJa: "チョコパイ", desc: "chocolate on breasts", value: "chocolate on breasts" },
            { nameJa: "乳見せ", desc: "presenting breasts", value: "presenting breasts" },
            { nameJa: "乳首ズリ", desc: "penis to breast", value: "penis to breast" },
            { nameJa: "乳舐め", desc: "licking breast", value: "licking breast" },
            { nameJa: "乳に噛み跡", desc: "bite mark on breast", value: "bite mark on breast" },
            { nameJa: "乳を突く", desc: "poking breast", value: "poking another's breast" }
        ],
        "尻系プレイ": [
            { nameJa: "バック", desc: "bent over, sex from behind", value: "bent over, sex from behind" },
            { nameJa: "寝バック", desc: "prone bone", value: "prone bone" },
            { nameJa: "四つん這いバック", desc: "doggystyle", value: "doggystyle" },
            { nameJa: "壁尻", desc: "stuck, through wall", value: "stuck, through wall" },
            { nameJa: "尻タワー", desc: "human stacking", value: "human stacking" },
            { nameJa: "尻合わせ", desc: "ass to ass", value: "ass to ass" }
        ],
        "非挿入系体位": [
            { nameJa: "素股", desc: "grinding", value: "grinding" },
            { nameJa: "W素股", desc: "2girls, cooperative grinding, double grinding", value: "2girls, cooperative grinding, double grinding" },
            { nameJa: "尻素股", desc: "buttjob", value: "buttjob" },
            { nameJa: "服越し素股", desc: "dry humping", value: "dry humping" },
            { nameJa: "ふとももコキ", desc: "thighjob", value: "thighjob" },
            { nameJa: "足コキ", desc: "footjob", value: "footjob" },
            { nameJa: "貝合わせ", desc: "tribadism", value: "tribadism" }
        ],
        'フェラ・イラマチオ・キス': [
            { nameJa: 'フェラ', desc: 'fellatio', value: 'fellatio' },
            { nameJa: 'バキュームフェラ', desc: ':>=', value: ':>=' },
            { nameJa: 'イラマチオ', desc: 'irrumatio', value: 'irrumatio' },
            { nameJa: '喉ボコ', desc: 'throat bulge', value: 'throat bulge' },
            { nameJa: 'ディープスロート', desc: 'deepthroat', value: 'deepthroat' },
            { nameJa: 'キス', desc: 'kiss', value: 'kiss' },
            { nameJa: 'ディープキス/べろちゅー/フレンチキス', desc: 'french kiss', value: 'french kiss' },
            { nameJa: 'キス顔/キス待ち', desc: 'incoming kiss', value: 'incoming kiss' },
        ],
        'オナニー女': [
            { nameJa: 'オナニー女', desc: 'female masturbation', value: 'female masturbation' },
            { nameJa: '角オナ', desc: 'crotch rub', value: 'crotch rub' },
            { nameJa: 'セルフ愛撫', desc: 'hand on own crotch', value: 'hand on own crotch' },
            { nameJa: '女性主観視点/谷間本人視点', desc: 'female pov', value: 'female pov' },
            { nameJa: 'セルフ乳吸い', desc: 'sucking own breasts', value: 'sucking own breasts' },
        ],
        "二人": [
            { nameJa: "男女", desc: "hetero", value: "hetero" },
            { nameJa: "女女", desc: "yuri", value: "yuri" },
            { nameJa: "男男", desc: "bara", value: "bara" },
            { nameJa: "BL/腐", desc: "yaoi", value: "yaoi" },
            { nameJa: "女＋ふたなり", desc: "futa with female", value: "futa with female" },
            { nameJa: "男＋ふたなり", desc: "futa with male", value: "futa with male" },
            { nameJa: "おねロリ", desc: "onee-loli", value: "onee-loli, age difference" },
            { nameJa: "おねショタ", desc: "onee-shota", value: "onee-shota, age difference" },
            { nameJa: "おにショタ", desc: "onii-shota", value: "onii-shota, age difference" },
            { nameJa: "子供同士", desc: "kodomo doushi", value: "kodomo doushi" }
        ],
        "複数人": [
            { nameJa: "3P(女女男)", desc: "ffm threesome", value: "ffm threesome" },
            { nameJa: "3P(女男男)", desc: "mmf threesome", value: "mmf threesome" },
            { nameJa: "4P, 5P, 乱交", desc: "group sex", value: "group sex" },
            { nameJa: "複数人がセックス", desc: "orgy", value: "orgy" },
            { nameJa: "輪姦/集団", desc: "gangbang", value: "gangbang" },
            { nameJa: "親子丼", desc: "oyakodon", value: "oyakodon (sex), mother and daughter" },
            { nameJa: "姉妹丼", desc: "shimaidon", value: "shimaidon (sex)" }
        ],
        "ポーズ": [
            { nameJa: "I 字バランス", desc: "standing split", value: "standing split" },
            { nameJa: "ガニ股", desc: "bowlegged", value: "bowlegged pose" },
            { nameJa: "膝立ち", desc: "kneeling", value: "kneeling" },
            { nameJa: "前屈み", desc: "leaning forward", value: "leaning forward" },
            { nameJa: "より深い前屈み", desc: "bent over", value: "bent over" },
            { nameJa: "蹲踞", desc: "squatting", value: "squatting" },
            { nameJa: "女の子座り", desc: "wariza", value: "wariza" },
            { nameJa: "馬乗り", desc: "straddling", value: "straddling" },
            { nameJa: "四つん這い", desc: "all fours", value: "all fours" },
            { nameJa: "尻突き出し", desc: "top-down", value: "top-down" },
            { nameJa: "頭下げ", desc: "bottom-up", value: "bottom-up" },
            { nameJa: "野獣先輩ポーズ", desc: "arms behind head", value: "arms behind head" },
            { nameJa: "両脚上げ", desc: "knees up", value: "knees up" },
            { nameJa: "膝かかえ", desc: "knee up", value: "knee up" },
            { nameJa: "正座", desc: "seiza", value: "seiza" },
            { nameJa: "逆さ吊り", desc: "upside-down", value: "upside-down" },
            { nameJa: "横座り", desc: "yokozuwari", value: "yokozuwari" },
            { nameJa: "あぐら", desc: "indian style", value: "indian style" },
            { nameJa: "体育座り", desc: "hugging own legs", value: "hugging own legs" },
            { nameJa: "M字開脚", desc: "m legs", value: "m legs" },
            { nameJa: "内股", desc: "pigeon-toed", value: "pigeon-toed" },
            { nameJa: "もたれかかる", desc: "reclining", value: "reclining" },
            { nameJa: "仰向け", desc: "on back", value: "on back" },
            { nameJa: "うつ伏せ", desc: "on stomach", value: "on stomach" },
            { nameJa: "人の上に寝ている", desc: "lying on person", value: "lying on person" },
            { nameJa: "脚の上に座る", desc: "sitting on lap", value: "sitting on lap" },
            { nameJa: "膝枕", desc: "lap pillow", value: "lap pillow" },
            { nameJa: "爪先立ち", desc: "tiptoe", value: "tiptoe" },
            { nameJa: "股割り正面", desc: "side sitting split", value: "side sitting split" },
            { nameJa: "股割り側面", desc: "front sitting split", value: "front sitting split" },
            { nameJa: "手ブラ", desc: "covering breasts", value: "covering breasts" }
        ],
        'くぱぁ': [
            { nameJa: 'くぱぁ', desc: 'spread pussy', value: 'spread pussy' },
            { nameJa: '主観視点くぱぁ', desc: 'spreading another\'s pussy, pov hands', value: 'spreading another\'s pussy, pov hands' },
            { nameJa: '着衣くぱぁ', desc: 'spread pussy under clothes', value: 'spread pussy under clothes' },
            { nameJa: '片手くぱぁ', desc: 'half-spread pussy', value: 'half-spread pussy' },
        ],
        'エフェクト': [
            { nameJa: '受精', desc: 'impregnation, fertilization', value: 'impregnation, fertilization' },
            { nameJa: 'オノマトペ/擬音語', desc: 'sound effects', value: 'sound effects' },
            { nameJa: '断面図', desc: '（体の上に表示）', value: 'x-ray' },
            { nameJa: '子宮の中に精子', desc: 'x-ray, holding cum, uterus', value: 'x-ray, holding cum, uterus' },
            { nameJa: '断面図', desc: '（体の外に別コマで表示）', value: 'cross-section' },
            { nameJa: '断面図ありの中出し', desc: 'internal cumshot', value: 'internal cumshot' },
            { nameJa: '痙攣', desc: 'twitching', value: 'twitching' },
        ]

    },
    "エロ衣装": {
        "全身": [
            { nameJa: 'レオタード', desc: 'leotard', value: 'leotard' },
            { nameJa: '肩ひもなしのレオタード', desc: 'strapless leotard', value: 'strapless leotard' },
            { nameJa: '透けレオタード', desc: 'see-through leotard', value: 'see-through leotard' },
            { nameJa: 'レオタードずらし', desc: 'leotard aside', value: 'leotard aside' },
            { nameJa: 'ボディースーツ/ラバースーツ', desc: 'bodysuit', value: 'bodysuit' },
            { nameJa: 'ぴっちりボディースーツ', desc: 'impossible bodysuit', value: 'impossible bodysuit' },
            { nameJa: 'ビキニ', desc: 'bikini', value: 'bikini' },
            { nameJa: 'マイクロビキニ', desc: 'micro bikini', value: 'micro bikini' },
            { nameJa: '襷ブラ', desc: 'pretzel bikini', value: 'pretzel bikini' },
            { nameJa: 'ビキニずらし', desc: 'bikini bottom aside', value: 'bikini bottom aside' },
            { nameJa: '服の下にビキニ', desc: 'bikini over clothes', value: 'bikini over clothes' },
            { nameJa: '水着', desc: 'swimsuit', value: 'swimsuit' },
            { nameJa: 'スリングショット', desc: 'slingshot swimsuit', value: 'slingshot swimsuit' },
            { nameJa: 'ワンピース水着', desc: 'one-piece swimsuit', value: 'one-piece swimsuit' },
            { nameJa: 'スク水', desc: 'school swimsuit', value: 'school swimsuit' },
            { nameJa: '競泳水着', desc: 'competition swimsuit', value: 'competition swimsuit' },
            { nameJa: 'ハイレグワンピース水着', desc: 'highleg one-piece swimsuit', value: 'highleg one-piece swimsuit' },
            { nameJa: '水着ずらし', desc: 'swimsuit aside', value: 'swimsuit aside' },
            { nameJa: '服の下に水着', desc: 'swimsuit under clothes', value: 'swimsuit under clothes' },
            { nameJa: 'セーター', desc: 'sweater', value: 'sweater' },
            { nameJa: 'リブ生地セーター', desc: 'ribbed sweater', value: 'ribbed sweater' },
            { nameJa: '童貞を殺すセーター', desc: 'virgin killer sweater', value: 'virgin killer sweater' },
            { nameJa: '進化版童貞を殺すセーター', desc: 'virgin destroyer sweater', value: 'virgin destroyer sweater' },
            { nameJa: '緊縛/ボンデージ', desc: 'bondage', value: 'bondage' },
            { nameJa: 'ボンデージ拘束衣', desc: 'bondage outfit', value: 'bondage outfit' },
            { nameJa: 'リボン拘束', desc: 'ribbon bondage', value: 'ribbon bondage' },
            { nameJa: 'ナイトガウン/ネグリジェ', desc: 'nightgown', value: 'nightgown' },
            { nameJa: 'シュミーズ/丈長で肩紐のベビードール', desc: 'chemise', value: 'chemise' },
            { nameJa: 'ベビードール/短いランジェリーやネグリジェ', desc: 'babydoll', value: 'babydoll' },
            { nameJa: 'ランジェリー', desc: 'lingerie', value: 'lingerie' },
            { nameJa: '猫ランジェリー', desc: 'cat lingerie', value: 'cat lingerie' },
            { nameJa: 'バニーガール', desc: 'playboy bunny', value: 'playboy bunny' },
            { nameJa: '逆バニー', desc: 'reverse bunnysuit', value: 'reverse bunnysuit' },
            { nameJa: '網', desc: 'fishnets', value: 'fishnets' },
            { nameJa: 'コルセット（胸カップなし）', desc: 'corset', value: 'corset' },
            { nameJa: 'ビスチェ（胸カップつき）', desc: 'bustier', value: 'bustier' },
            { nameJa: 'レース付きの', desc: 'lace-trimmed', value: 'lace-trimmed' },
            { nameJa: 'リボン付きの', desc: 'ribbon-trimmed', value: 'ribbon-trimmed' },
            { nameJa: '手枷', desc: 'cuffs', value: 'cuffs' },
            { nameJa: '手錠（警察が使うやつ）', desc: 'handcuffs', value: 'handcuffs' },
            { nameJa: '全身タイツ', desc: 'bodystocking', value: 'bodystocking' },
            { nameJa: '破れた', desc: 'torn', value: 'torn' },
            { nameJa: 'テカりのあるラバー', desc: 'latex', value: 'latex' },
        ],
        "上半身": [
            { nameJa: 'ブラジャー', desc: 'bra', value: 'bra' },
            { nameJa: 'ブラなし', desc: 'no bra', value: 'no bra' },
            { nameJa: 'スポブラ', desc: 'sports bra', value: 'sports bra' },
            { nameJa: 'リボン付きブラ', desc: 'bow bra', value: 'bow bra' },
            { nameJa: 'ストラップレスブラ', desc: 'strapless bra', value: 'strapless bra' },
            { nameJa: 'トップレスブラ/オープンブラ', desc: 'cupless bra', value: 'cupless bra' },
            { nameJa: 'ホックを外したブラ/ロントホックが多い', desc: 'open bra', value: 'open bra' },
            { nameJa: 'ベルトブラ', desc: 'belt bra', value: 'belt bra' },
            { nameJa: '首輪', desc: 'collar', value: 'collar' },
            { nameJa: '犬の首輪', desc: 'animal collar', value: 'animal collar' },
            { nameJa: '金属の首輪', desc: 'metal collar', value: 'metal collar' },
            { nameJa: 'ベルトチョーカー', desc: 'belt collar', value: 'belt collar' },
            { nameJa: 'ウセク/古代エジプトの首飾り', desc: 'usekh collar', value: 'usekh collar' },
            { nameJa: 'トップレス', desc: 'topless female', value: 'topless female' },
            { nameJa: 'キャミソール', desc: 'camisole', value: 'camisole' },
            { nameJa: 'ニップレス', desc: 'pasties', value: 'pasties' },
            { nameJa: '目隠し', desc: 'blindfold', value: 'blindfold' },
            { nameJa: '猿轡', desc: 'gag', value: 'gag' },
            { nameJa: 'ボールギャグ', desc: 'ball gag', value: 'ball gag' },
            { nameJa: '口の中に服', desc: 'cloth gag', value: 'cloth gag' },
            { nameJa: 'テープギャグ', desc: 'tape gag', value: 'tape gag' },
            { nameJa: '開襟シャツ', desc: 'open collar', value: 'open collar' },
            { nameJa: '乳強調服', desc: 'framed breasts', value: 'framed breasts' },
            { nameJa: '脱いだブラ', desc: 'unworn bra', value: 'unworn bra' },
            { nameJa: 'ひもで縛られた胸', desc: 'breast bondage', value: 'breast bondage' },
            { nameJa: '胸のカットアウト', desc: 'breast cutout', value: 'breast cutout' },
            { nameJa: '谷間に布寄せ', desc: 'clothes between breasts', value: 'clothes between breasts' },
            { nameJa: '乳不足', desc: 'oversized breast cup', value: 'oversized breast cup' },
            { nameJa: 'ハミ乳', desc: 'undersized breast cup', value: 'undersized breast cup' },
        ],
        "下半身": [
            { nameJa: 'ショーツ/パンティ', desc: 'panties', value: 'panties' },
            { nameJa: 'ショーツずらし', desc: 'panties aside', value: 'panties aside' },
            { nameJa: 'リボン付きショーツ', desc: 'bow panties', value: 'bow panties' },
            { nameJa: '縞パン', desc: 'striped panties', value: 'striped panties' },
            { nameJa: '横で紐で結んだショーツ', desc: 'side-tie panties', value: 'side-tie panties' },
            { nameJa: 'T バック', desc: 'thong', value: 'thong' },
            { nameJa: '紐パン', desc: 'T バックより面積が狭い', value: 'g-string' },
            { nameJa: 'サイドのみ紐パン', desc: '前や後ろはちゃんと布がある', value: 'string panties' },
            { nameJa: 'ハイレグパンティ', desc: 'highleg panties', value: 'highleg panties' },
            { nameJa: '脱いだショーツ', desc: 'unworn panties', value: 'unworn panties' },
            { nameJa: 'ローライズパンツ', desc: 'lowleg panties', value: 'lowleg panties' },
            { nameJa: '濡れたパンティ', desc: 'wet panties', value: 'wet panties' },
            { nameJa: 'オープンショーツ', desc: 'crotchless panties', value: 'crotchless panties' },
            { nameJa: 'ほどけたパンティ', desc: 'untied panties', value: 'untied panties' },
            { nameJa: '染みパン', desc: 'stained panties', value: 'stained panties' },
            { nameJa: '見せハイレグパンツ', desc: 'panty straps', value: 'panty straps' },
            { nameJa: '下だけ穿いてない', desc: 'bottomless', value: 'bottomless' },
            { nameJa: 'ショーツなし', desc: 'no panties', value: 'no panties' },
            { nameJa: 'ガーターのひもだけ', desc: 'garter straps', value: 'garter straps' },
            { nameJa: 'ガーターのひもとベルト', desc: 'garter belt', value: 'garter belt' },
            { nameJa: 'ニーソックス/ニーハイ', desc: 'thighhighs', value: 'thighhighs' },
            { nameJa: '足枷', desc: 'shackles', value: 'shackles' },
            { nameJa: '前貼り', desc: 'maebari', value: 'maebari' },
            { nameJa: 'ハート前貼り', desc: 'heart maebari', value: 'heart maebari' },
            { nameJa: '×貼り', desc: 'cross pasties', value: 'cross pasties' },
            { nameJa: 'オープンクロッチ', desc: '股間部なしの衣装', value: 'crotchless' },
            { nameJa: 'バイブINパンツ', desc: 'vibrator under panties', value: 'vibrator under panties' },
            { nameJa: '尻カットアウト', desc: 'ass cutout', value: 'ass cutout' },
            { nameJa: 'アナルプラグ', desc: 'butt plug', value: 'butt plug' },
            { nameJa: 'ジュエリーアナルプラグ', desc: 'jewel butt plug', value: 'jewel butt plug' },
        ]
    },
    "男": {
        "基本": [
            { nameJa: "マッチョ", desc: "muscular male", value: "muscular male" },
            { nameJa: "おじさん", desc: "mature male", value: "mature male" },
            { nameJa: "アグリーバスタード", desc: "ugly bastard", value: "ugly bastard" },
            { nameJa: "カオナシ", desc: "faceless male", value: "faceless male" }
        ],
        "ペニス": [
            { nameJa: 'ペニス', desc: 'penis', value: 'penis' },
            { nameJa: 'ペニス静脈', desc: 'veiny penis', value: 'veiny penis' },
            { nameJa: '太いペニス', desc: 'girthy penis', value: 'girthy penis' },
            { nameJa: '勃起', desc: 'erection', value: 'erection' },
            { nameJa: '萎えペニス/勃起していないペニス', desc: 'flaccid', value: 'flaccid' },
            { nameJa: '包茎', desc: 'foreskin', value: 'foreskin' },
            { nameJa: '半剥け', desc: 'phimosis', value: 'phimosis' },
        ]
    },
    "液体": {
        "精液": [
            { nameJa: '精液', desc: 'cum', value: 'cum' },
            { nameJa: 'ガマン汁', desc: 'precum, precum drip', value: 'precum, precum drip' },
            { nameJa: '糸を引くガマン汁', desc: 'precum string', value: 'precum string' },
            { nameJa: '中出し', desc: 'cum in pussy', value: 'cum in pussy' },
            { nameJa: '溢れ精液', desc: 'cumdrip, cum overflow', value: 'cumdrip, cum overflow' },
            { nameJa: 'ザーメンブリッジ', desc: 'cum string', value: 'cum string' },
            { nameJa: '精液の水たまり', desc: 'cum pool', value: 'cum pool' },
        ],
        "愛液": [
            { nameJa: "愛液", desc: "pussy juice", value: "pussy juice" },
            { nameJa: "愛液跡", desc: "pussy juice trail", value: "pussy juice trail" },
            { nameJa: "下着の愛液跡", desc: "pussy juice stain", value: "pussy juice stain" }
        ],
        "おしっこ": [
            { nameJa: '放尿', desc: 'peeing', value: 'peeing' },
            { nameJa: 'おもらし', desc: 'peeing self', value: 'peeing self' },
            { nameJa: '飲尿', desc: 'drinking pee', value: 'drinking pee' },
        ]
    },
    "その他": {
        "ハンドサイン": [
            { nameJa: '貫通サイン', desc: '両手を使って輪と棒を表現するやつ', value: 'penetration gesture' },
            { nameJa: '貫通サイン', desc: '人差し指と中指との間に親指を入れるやつ', value: 'fig sign' },
            { nameJa: 'エア手コキ・手コキ素振り', desc: 'handjob jesture', value: 'handjob jesture' },
            { nameJa: 'エアフェラ', desc: 'fellatio gesture, tongue out', value: 'fellatio gesture, tongue out' },
            { nameJa: 'エアクンニ/舌出しピース', desc: 'cunnilingus gesture', value: 'cunnilingus gesture' },
            { nameJa: 'ピース', desc: 'v', value: 'v' },
            { nameJa: 'ギャルピース', desc: 'gyaru v', value: 'gyaru v' },
            { nameJa: '逆ピース', desc: 'inward v', value: 'inward v' },
            { nameJa: 'ダブルピース', desc: 'double v', value: 'double v' },
            { nameJa: '手でハート', desc: 'heart hands', value: 'heart hands' },
        ],
        "触手": [
            { nameJa: '触手', desc: 'tentacles', value: 'tentacles' },
            { nameJa: '触手姦', desc: 'tentacle sex', value: 'tentacle sex' },
            { nameJa: '苗床', desc: 'tentacle pit', value: 'tentacle pit' },
        ],
        "淫紋": [
            { nameJa: "淫紋", desc: "pubic tattoo", value: "pubic tattoo" }
        ],
        "バイブ・ディルド": [
            { nameJa: 'バイブ', desc: 'vibrator', value: 'vibrator' },
            { nameJa: 'ピンクローター', desc: 'egg vibrator', value: 'egg vibrator' },
            { nameJa: 'バイブINパンツ', desc: 'vibrator under panties', value: 'vibrator under panties' },
            { nameJa: 'ディルド', desc: 'dildo', value: 'dildo' },
            { nameJa: '双頭ディルド', desc: 'double dildo', value: 'double dildo' },
            { nameJa: '異物挿入', desc: 'vaginal object insertion', value: 'vaginal object insertion' },
        ],
        "服": [
            { nameJa: 'ふとももの食い込み', desc: 'skindentation', value: 'skindentation' },
            { nameJa: '食い込み', desc: 'wedgie', value: 'wedgie' },
            { nameJa: 'ブラチラ', desc: 'bra peek', value: 'bra peek' },
            { nameJa: '浮きブラ', desc: 'bralines', value: 'bralines' },
            { nameJa: '透けブラ', desc: 'bra visible through clothes', value: 'bra visible through clothes' },
            { nameJa: 'パンチラ', desc: 'pantyshot', value: 'pantyshot' },
            { nameJa: '短パンから見えるパンチラ', desc: 'upshorts', value: 'upshorts' },
            { nameJa: '前垂れ', desc: 'pelvic curtain', value: 'pelvic curtain' },
        ],
        "拘束": [
            { nameJa: '首枷・首輪', desc: 'collar', value: 'collar' },
            { nameJa: '手枷', desc: 'cuffs', value: 'cuffs' },
            { nameJa: '手錠', desc: '（警察が使うやつ）', value: 'handcuffs' },
            { nameJa: '足枷', desc: 'shackles', value: 'shackles' },
            { nameJa: 'テープ拘束', desc: 'tape bondage', value: 'tape bondage' },
            { nameJa: '後ろ手', desc: 'arms behind back', value: 'arms behind back' },
            { nameJa: '手首拘束', desc: 'bound wrists', value: 'bound wrists' },
            { nameJa: 'ロープ前手拘束', desc: 'rope, bound wrists, v arms', value: 'rope, bound wrists, v arms' },
            { nameJa: '足首拘束', desc: 'bound ankles', value: 'bound ankles' },
        ],
        "表情": [
            { nameJa: "オホ顔", desc: "puckered lips", value: "puckered lips, rolling eyes" },
            { nameJa: "首絞め", desc: "strangling", value: "strangling" },
            { nameJa: "断面図", desc: "x-ray", value: "x-ray" },
            { nameJa: "痙攣", desc: "twitching", value: "twitching" }
        ]
    },
    "部位": {
        "女性器": [
            { nameJa: '大陰唇', desc: 'pussy', value: 'pussy' },
            { nameJa: '大陰唇の食い込み', desc: 'partially visible vulva', value: 'partially visible vulva' },
            { nameJa: '小陰唇', desc: 'long labia', value: 'long labia' },
            { nameJa: '包茎クリトリス', desc: 'clitoral hood', value: 'clitoral hood' },
            { nameJa: 'マンスジ', desc: 'cleft of venus', value: 'cleft of venus' },
            { nameJa: 'マンスジ', desc: '布越し', value: 'cameltoe' },
            { nameJa: '愛撫', desc: 'hand on another\'s crotch', value: 'hand on another\'s crotch' },
            { nameJa: '破瓜', desc: 'defloration', value: 'defloration' },
            { nameJa: '陰毛', desc: 'pubic hair', value: 'pubic hair' },
            { nameJa: '生えかけ', desc: 'sparse pubic hair', value: 'sparse pubic hair' },
            { nameJa: 'もさもさの陰毛', desc: 'excessive pubic hair', value: 'excessive pubic hair' },
            { nameJa: '剃り跡', desc: 'pubic stubble', value: 'pubic stubble' },
        ],
        "アヌス": [
            { nameJa: '尻', desc: 'ass', value: 'ass' },
            { nameJa: 'アヌス', desc: 'anus', value: 'anus' },
            { nameJa: 'すぼんだアヌス、ドーナツ型アヌス', desc: 'puckered anus', value: 'puckered anus' },
            { nameJa: 'ぽっかりアナル', desc: 'spread anus', value: 'spread anus' },
            { nameJa: 'アナル', desc: '（danbooru タグでは挿入系のタグ）', value: 'anal' },
            { nameJa: '前立腺マッサージ', desc: 'prostate milking', value: 'prostate milking' },
            { nameJa: '尻たたき', desc: 'spanking', value: 'spanking' },
        ],
        "腹": [
            { nameJa: 'シックスパック', desc: 'abs', value: 'abs' },
            { nameJa: '腹筋', desc: '控え目', value: 'linea alba' },
            { nameJa: 'へそ', desc: 'navel', value: 'navel' },
            { nameJa: 'イカ腹', desc: 'belly', value: 'belly' },
            { nameJa: '腹出し', desc: 'stomach', value: 'stomach' },
            { nameJa: 'へそ出し', desc: 'midriff', value: 'midriff' },
            { nameJa: '鼠径部', desc: 'groin', value: 'groin' },
            { nameJa: '鼠径部のすじ', desc: 'groin tendon', value: 'groin tendon' },
            { nameJa: '腰骨', desc: 'hip bones', value: 'hip bones' },
            { nameJa: '服が張り付いて腰の段差が見えている', desc: 'hip dips', value: 'hip dips' },
            { nameJa: '細い腰', desc: 'narrow waist', value: 'narrow waist' },
            { nameJa: '横腹', desc: 'obliques', value: 'obliques' },
        ],
        "尻": [
            { nameJa: 'デカ尻', desc: 'wide hip', value: 'wide hip' },
            { nameJa: '尻だけ不自然にデカい', desc: 'huge ass', value: 'huge ass' },
            { nameJa: '平らな尻', desc: 'flat ass', value: 'flat ass' },
            { nameJa: '尻出し', desc: '（尻が布で覆われていない）', value: 'bare hips' },
            { nameJa: '棒の上に尻を乗せて休んでいる', desc: 'ass rest', value: 'ass rest' },
            { nameJa: '尻のしわ', desc: 'ass support grabbing own ass とセットでよく使われる', value: 'ass support,grabbing own ass' },
            { nameJa: '半ケツ', desc: 'butt crack', value: 'butt crack' },
            { nameJa: '下尻', desc: 'underbutt', value: 'underbutt' },
            { nameJa: '前から見える尻', desc: 'ass visible through thighs', value: 'ass visible through thighs' },
            { nameJa: '尻三つ葉', desc: '（水着や下着が張り付いて尻と性器とで領域が３つできること）', value: 'trefoil' },
            { nameJa: '尻タワー', desc: 'human stacking', value: 'human stacking' },
            { nameJa: '尻合わせ', desc: 'ass-to-ass', value: 'ass-to-ass' },
            { nameJa: '尻カットアウト', desc: 'ass cutout', value: 'ass cutout' },
            { nameJa: 'アナルプラグ', desc: 'butt plug', value: 'butt plug' },
            { nameJa: 'ジュエリーアナルプラグ', desc: 'jewel butt plug', value: 'jewel butt plug' },
        ],
        "乳": [
            { nameJa: '垂れ乳', desc: 'キャラが直立しているときに使う', value: 'sagging breasts' },
            { nameJa: '垂れ乳', desc: 'キャラが前傾しているときに使う', value: 'hanging breasts' },
            { nameJa: '胸チラ・ポロリ', desc: 'breast slip', value: 'breast slip' },
            { nameJa: '自然な乳', desc: 'breasts apart', value: 'breasts apart' },
            { nameJa: '乱れおっぱい', desc: 'unaligned breasts', value: 'unaligned breasts' },
            { nameJa: '片乳出し', desc: 'one breast out', value: 'one breast out' },
            { nameJa: '乳房の青筋・静脈', desc: 'veiny breasts', value: 'veiny breasts' },
            { nameJa: 'モントゴメリー腺', desc: '乳輪のつぶつぶ', value: 'glands of montgomery' },
            { nameJa: 'パイスラ', desc: 'strap between breasts', value: 'strap between breasts' },
            { nameJa: '乳揺れ・あばれる乳', desc: 'bouncing breasts', value: 'bouncing breasts' },
            { nameJa: '乱れおっぱい', desc: 'unaligned breasts', value: 'unaligned breasts' },
            { nameJa: '乳の下に腕', desc: 'arm under breasts', value: 'arm under breasts' },
            { nameJa: '髪ブラ', desc: 'hair over breasts', value: 'hair over breasts' },
            { nameJa: 'ボタン飛ばし', desc: 'bursting breasts', value: 'bursting breasts' },
            { nameJa: '乳強調服', desc: 'framed breasts', value: 'framed breasts' },
            { nameJa: 'とがった乳・乳首', desc: 'perky breasts', value: 'perky breasts' },
            { nameJa: 'とがった乳・乳首', desc: 'pointy breasts', value: 'pointy breasts' },
            { nameJa: '浮乳', desc: '・入浴時に使う', value: 'floating breasts' },
        ],
        "乳首/ピアス": [
            { nameJa: '陥没乳首', desc: 'inverted nipples', value: 'inverted nipples' },
            { nameJa: '乳輪', desc: 'areola', value: 'areola' },
            { nameJa: '乳輪チラ', desc: 'areola slip', value: 'areola slip' },
            { nameJa: '黒乳首', desc: 'dark nipples', value: 'dark nipples' },
            { nameJa: 'ニップレス', desc: 'pasties', value: 'pasties' },
            { nameJa: 'ハートニップレス', desc: 'heart pasties', value: 'heart pasties' },
            { nameJa: '胸ポチ/透け乳首/浮き乳首', desc: 'covered nipples', value: 'covered nipples' },
            { nameJa: '透け服', desc: 'see-through clothes', value: 'see-through clothes' },
            { nameJa: '乳首ピアス', desc: 'nipple piercing', value: 'nipple piercing' },
            { nameJa: 'バーベルピアス', desc: 'barbell piercing', value: 'barbell piercing' },
            { nameJa: 'バーピアス', desc: 'nipple bar', value: 'nipple bar' },
            { nameJa: 'リングピアス', desc: 'nipple rings', value: 'nipple rings' },
            { nameJa: '宝石ピアス', desc: 'nipple jewelry', value: 'nipple jewelry' },
            { nameJa: '乳首に名札', desc: '安全ピン名札の乳首ピアス', value: 'nipple tag' },
        ],
        "乳動作": [
            { nameJa: '他人の胸を揉む', desc: 'grabbing another\'s breast', value: 'grabbing another\'s breast' },
            { nameJa: '背後から胸揉み', desc: 'grabbing from behind', value: 'grabbing from behind' },
            { nameJa: '鷲掴み', desc: 'deep skin', value: 'deep skin' },
            { nameJa: '肩越しに乳揉み', desc: 'grabbed breast over shoulder', value: 'grabbed breast over shoulder' },
            { nameJa: 'セルフ乳揉み', desc: 'grabbing own breast', value: 'grabbing own breast' },
            { nameJa: '片乳出し', desc: 'one breast out', value: 'one breast out' },
            { nameJa: '乳挟み', desc: 'between breasts', value: 'between breasts' },
            { nameJa: '胸に顔をうずめる/ぱふぱふ', desc: 'face between breasts', value: 'face between breasts' },
            { nameJa: 'あててんのよ/つぶれおっぱい/おしつけおっぱい', desc: 'breast press', value: 'breast press' },
        ],
        "肩": [
            { nameJa: '肩出し・肩が見えている', desc: 'bare shoulders', value: 'bare shoulders' },
            { nameJa: '片方肩出し', desc: 'single bare shoulder', value: 'single bare shoulder' },
            { nameJa: 'オフショルダー', desc: '元から肩がない服と半脱ぎ両方含む', value: 'off shoulder' },
            { nameJa: 'オフショルダードレス', desc: 'off-shoulder dress', value: 'off-shoulder dress' },
            { nameJa: 'オフショルダーシャツ', desc: 'off-shoulder shirt', value: 'off-shoulder shirt' },
            { nameJa: 'カットアウェイショルダー/オープンショルダー', desc: 'shoulder cutout', value: 'shoulder cutout' },
            { nameJa: '片方オフショルダー', desc: 'single off shoulder', value: 'single off shoulder' },
            { nameJa: '髪が肩より前にある', desc: 'hair over shoulder', value: 'hair over shoulder' },
            { nameJa: '肩に手を置く', desc: 'hand on another\'s shoulder', value: 'hand on another\'s shoulder' },
            { nameJa: '肩に両手を置く', desc: 'hands on another\'s shoulders', value: 'hands on another\'s shoulders' },
            { nameJa: '肩組み', desc: 'arm around shoulder', value: 'arm around shoulder' },
            { nameJa: '首に腕をまわす', desc: 'arm around neck', value: 'arm around neck' },
            { nameJa: '肩タトゥー', desc: 'shoulder tattoo', value: 'shoulder tattoo' },
            { nameJa: '肩甲骨', desc: 'shoulder blades', value: 'shoulder blades' },
            { nameJa: '肩でコートを着る', desc: 'coat on shoulders', value: 'coat on shoulders' },
            { nameJa: '肩乗り', desc: 'チビキャラやポケモンを乗せることが多い', value: 'on shoulder' },
            { nameJa: '頭を肩に乗せる・もたれかかる', desc: 'head on another\'s shoulder', value: 'head on another\'s shoulder' },
            { nameJa: '肩車', desc: 'shoulder carry', value: 'shoulder carry' },
            { nameJa: '肩に傘の柄をのせる', desc: 'umbrella over shoulder', value: 'umbrella over shoulder' },
            { nameJa: '肩に噛み跡', desc: 'bite mark on shoulder', value: 'bite mark on shoulder' },
            { nameJa: '肩にタオル', desc: 'towel on one shoulder', value: 'towel on one shoulder' },
            { nameJa: '肩合わせ', desc: 'shoulder-to-shoulder', value: 'shoulder-to-shoulder' },
        ],
        "腕": [
            { nameJa: '脇見せのポーズ', desc: 'arms up', value: 'arms up' },
            { nameJa: '前に手を突き出す', desc: 'outstretched arms', value: 'outstretched arms' },
            { nameJa: '後ろ手縛り', desc: 'arms behind back', value: 'arms behind back' },
            { nameJa: '腕組み', desc: 'crossed arms', value: 'crossed arms' },
            { nameJa: '野獣先輩ポーズ', desc: 'arms behind head', value: 'arms behind head' },
            { nameJa: '腕を下ろす', desc: 'arms at sides', value: 'arms at sides' },
            { nameJa: '体の前で腕を交差', desc: 'v arms', value: 'v arms' },
            { nameJa: '手が股間の位置', desc: 'arms between legs', value: 'arms between legs' },
            { nameJa: '腕を真横に広げる', desc: 'spread arms', value: 'spread arms' },
            { nameJa: 'w 腕', desc: 'w arms', value: 'w arms' },
            { nameJa: 'テーブルの上に腕を置く', desc: 'arms on table', value: 'arms on table' },
            { nameJa: '✖腕', desc: 'x arms', value: 'x arms' },
            { nameJa: '首に腕', desc: 'arms around neck', value: 'arms around neck' },
            { nameJa: '腰に腕', desc: 'arms around waist', value: 'arms around waist' },
            { nameJa: '抱きしめる', desc: '真横か真後ろの構図になりやすい', value: 'arms around back' },
        ]
    },
    "撮影": {
        "アングル": [
            { nameJa: '真正面', desc: 'straight-on', value: 'straight-on' },
            { nameJa: '後ろ', desc: 'from behind', value: 'from behind' },
            { nameJa: '真横', desc: 'from side', value: 'from side' },
            { nameJa: 'ハイアングル', desc: 'from above', value: 'from above' },
            { nameJa: 'ローアングル', desc: 'from below', value: 'from below' },
            { nameJa: '虫の視点', desc: 'worm\'s eye view', value: 'worm\'s eye view' },
            { nameJa: '高所', desc: 'high up', value: 'high up' },
            { nameJa: '複数アングル', desc: 'multiple views', value: 'multiple views' },
            { nameJa: '画像自体が90度回転', desc: 'sideways', value: 'sideways' },
            { nameJa: '斜め構図', desc: '横長のアスペクト比でキャラの面積を大きくするためにカメラを傾けた構図', value: 'dutch angle' },
            { nameJa: '上下反転', desc: '逆立ちの時に使う', value: 'upside-down' },
            { nameJa: '魚眼', desc: 'fisheye', value: 'fisheye' },
            { nameJa: 'パノラマ', desc: 'panorama', value: 'panorama' },
            { nameJa: 'パース強調', desc: 'foreshortening', value: 'foreshortening' },
            { nameJa: 'サンライズ立ち', desc: 'sunrise stance', value: 'sunrise stance' },
            { nameJa: '外から室内を見る', desc: 'from outside', value: 'from outside' },
            { nameJa: '引きの視点', desc: 'wide shot', value: 'wide shot' },
            { nameJa: '超引きの視点', desc: 'very wide shot', value: 'very wide shot' },
            { nameJa: '一部水中構図', desc: 'partially underwater shot', value: 'partially underwater shot' },
        ],
        'スマホ写真': [
            { nameJa: 'スマホ写真', desc: 'cellphone photo', value: 'cellphone photo' },
            { nameJa: 'スマホを持っている', desc: 'viewer holding phone', value: 'viewer holding phone' },
            { nameJa: '主観視点', desc: 'pov', value: 'pov' },
            { nameJa: '主観視点の手', desc: 'pov hands', value: 'pov hands' },
        ],
        "画角": [
            { nameJa: '顔アップ', desc: 'close-up', value: 'close-up' },
            { nameJa: '頭から鎖骨まで', desc: 'portrait', value: 'portrait' },
            { nameJa: '頭からへそまで', desc: 'upper body', value: 'upper body' },
            { nameJa: '頭から膝上まで', desc: 'cowboy shot', value: 'cowboy shot' },
            { nameJa: '脚を含まない', desc: 'feet out of frame', value: 'feet out of frame' },
            { nameJa: '全身', desc: 'full body', value: 'full body' },
        ],
        "ライティング": [
            { nameJa: "逆光", desc: "backlighting", value: "backlighting" },
            { nameJa: "サイド光", desc: "sidelighting", value: "sidelighting" },
            { nameJa: "シネマティック", desc: "cinematic", value: "cinematic lighting" },
            { nameJa: "ボケ", desc: "bokeh", value: "bokeh" }
        ]
    }
};

let selectedTags = new Set();
let currentMainCategory = '体位・プレイ';
let currentSubCategory = '';
let searchQuery = '';

const tagContainer = document.getElementById('tag-container');
const subTabContainer = document.getElementById('sub-category-tabs');
const promptDisplay = document.getElementById('prompt-display');
const copyBtn = document.getElementById('copy-btn');
const clearBtn = document.getElementById('clear-btn');
const tabBtns = document.querySelectorAll('.tab-btn');
const searchInput = document.getElementById('tag-search');
const copyNegBtn = document.getElementById('copy-neg-btn');
const negPromptText = document.getElementById('negative-prompt-text');

// Initialize
function init() {
    renderSubTabs();
    renderRows();
    setupEventListeners();
}

function renderSubTabs() {
    subTabContainer.innerHTML = '';
    const subCats = Object.keys(TAG_DATA[currentMainCategory]);

    // Set default subcategory if none selected or if switching main category
    if (!currentSubCategory || !TAG_DATA[currentMainCategory][currentSubCategory]) {
        currentSubCategory = subCats[0];
    }

    subCats.forEach(sub => {
        const btn = document.createElement('button');
        btn.className = `sub-tab-btn ${sub === currentSubCategory ? 'active' : ''}`;
        btn.textContent = sub;
        btn.onclick = () => {
            currentSubCategory = sub;
            renderSubTabs();
            renderRows();
        };
        subTabContainer.appendChild(btn);
    });
}

function renderRows() {
    tagContainer.innerHTML = '';

    // Get tags from current sub-category or filter all across all main categories if searching
    let tagsToShow = [];
    if (searchQuery) {
        // Search across ALL main categories and ALL sub-categories
        Object.values(TAG_DATA).forEach(mainCatData => {
            Object.values(mainCatData).forEach(subTags => {
                tagsToShow = tagsToShow.concat(subTags);
            });
        });
    } else {
        tagsToShow = TAG_DATA[currentMainCategory][currentSubCategory] || [];
    }

    const filteredTags = tagsToShow.filter(tag =>
        tag.nameJa.includes(searchQuery) ||
        tag.value.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tag.desc.includes(searchQuery)
    );

    if (filteredTags.length === 0) {
        tagContainer.innerHTML = '<tr><td colspan="3" style="text-align:center; padding: 2rem; color: var(--text-muted);">見つかりませんでした</td></tr>';
        return;
    }

    // Deduplicate if searching (though mostly shouldn't be needed)
    const uniqueTags = Array.from(new Set(filteredTags.map(t => t.value)))
        .map(val => filteredTags.find(t => t.value === val));

    uniqueTags.forEach(tag => {
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
    // Main Tabs
    tabBtns.forEach(btn => {
        btn.onclick = () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentMainCategory = btn.dataset.category;
            currentSubCategory = ''; // Reset sub-category
            renderSubTabs();
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
