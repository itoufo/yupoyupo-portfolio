export const profile = {
  name: '伊東 雄歩',
  nameEn: 'Yuho Ito',
  nickname: 'ゆぽゆぽ',
  title: '令和のエジソン',
  role: '株式会社ウォーカー 代表取締役',
  image: 'https://abhrgewzglubansbyitm.supabase.co/storage/v1/object/public/avatars/yuho-ito.png',
  tagline: '社会の型に収まらない人間が、テクノロジーを武器にする',

  credentials: [
    { label: 'MENSA', value: 'IQ130+' },
    { label: 'JDLA', value: '認定講師' },
    { label: 'HAIIA', value: '理事' },
  ],

  stats: [
    { label: '創業', value: '2015' },
    { label: '圧縮率', value: '3年→2日' },
    { label: '満足度', value: '4.8/5.0' },
  ],

  bio: [
    '東北大学卒業後、2015年に株式会社ウォーカーを創業。',
    'AI開発・コンサルティング事業を展開し、150人月超の大規模プロジェクトを統括。',
    'ADHD特性と向き合いながら、型破りな発想で業界の常識を覆す。',
    '「3年の学習を2日に圧縮する」独自の教育メソッドを開発。',
  ],

  // 3つの役割 - 一人で全てをこなす
  roles: [
    {
      icon: 'CEO',
      title: '経営',
      description: '創業から10年、資金調達・事業戦略・組織運営を一人で設計。5件の訴訟を4勝。2000万円の損失からも復活する不死身の経営力。',
      color: 'cyan',
    },
    {
      icon: 'ENG',
      title: 'エンジニアリング',
      description: '8言語・7フレームワークを操り、5,000行/日の変態的コーディング速度でSaaSを10日でリリース。150人月超の大規模システムも設計・統括。',
      color: 'purple',
    },
    {
      icon: 'BIZ',
      title: '営業',
      description: 'プロダクト設計から提案書作成、クライアント折衝、クロージングまで全て一人。NLP心理学を武器に、人の心を動かす営業を科学する。',
      color: 'pink',
    },
    {
      icon: 'EDU',
      title: '教育',
      description: 'JDLA E検定認定講座の講師として教材設計から登壇まで。Digitech Questを全国展開し満足度4.8/5。「新人類育成計画」で3年の学習を2日に圧縮する。',
      color: 'amber',
    },
  ],

  // 経歴タイムライン
  timeline: [
    { year: '1990', event: '神奈川県横須賀市に生まれる', detail: 'IQ130超の好奇心の塊。「昆虫博士」と呼ばれる少年時代', tag: 'ORIGIN' },
    { year: '2008', event: '東北大学入学', detail: 'PC購入を機にプログラミングに目覚める。SEOで「恋愛術」Google 1位を達成', tag: 'AWAKENING' },
    { year: '2013', event: 'ソフトバンク入社', detail: 'PNet・WAF技術主任。全国郵便局のネット回線敷設PJにPMO参画', tag: 'CORPORATE' },
    { year: '2015', event: '株式会社ウォーカー設立', detail: 'フリーランス経験ゼロでいきなり法人設立。AI教材StoQを開発しEdixに出展', tag: 'FOUNDING' },
    { year: '2017', event: 'JDLA認定講座 講師就任', detail: 'E検定認定講座の教材作成・講師登壇。AI教育の第一線へ', tag: 'EDUCATION' },
    { year: '2019', event: '150人月超の大規模リプレース', detail: 'アパレル基幹システム全体設計・開発指揮。1000万件超のデータを無事故移行', tag: 'ENTERPRISE' },
    { year: '2020', event: '同時接続2,000人超のプラットフォーム構築', detail: 'コロナ禍にオンライン展示会サービスを爆速構築。AWS + React + Laravelで制圧', tag: 'SCALE' },
    { year: '2023', event: '大規模ECスクラッチ移行を統括', detail: '業界最大手ECサイトのFutureShopからの完全移行。30人月の設計・PM・開発', tag: 'ARCHITECT' },
    { year: '2024', event: 'AI教育事業に全力投球', detail: 'Digitech Quest全国展開。AIフレンズ継続率90%。MirAI-POSTを10日でリリース', tag: 'NOW' },
  ],

  // 実績データ
  proofs: [
    { value: '150+', unit: '人月', label: '大規模PJ統括', description: '基幹システムリプレース' },
    { value: '5,000', unit: '行/日', label: '超高速開発', description: '変態的コーディング速度' },
    { value: '10', unit: '日', label: 'SaaSリリース', description: '44,000行超を単独実装' },
    { value: '2,000+', unit: '人', label: '同時接続', description: 'オンライン展示会PF' },
    { value: '4.8', unit: '/5.0', label: '教育満足度', description: 'Digitech Quest' },
    { value: '90', unit: '%', label: 'コミュニティ継続率', description: 'AIフレンズ' },
  ],

  // 技術スキル
  skills: {
    languages: ['Python', 'PHP', 'Ruby', 'JavaScript', 'TypeScript', 'C#', 'Java', 'Swift'],
    frameworks: ['Laravel', 'Django', 'Rails', 'React', 'Vue.js', 'Next.js', 'React Native', 'Unity'],
    infra: ['AWS', 'Firebase', 'Docker', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'ElasticSearch'],
    ai: ['TensorFlow', 'scikit-learn', 'Pandas', 'OpenCV', 'LLM/RAG'],
  },

  // 趣味
  hobbies: [
    {
      icon: 'palette',
      title: '油絵',
      description: 'コードで世界を構築し、キャンバスで世界を表現する。論理の対極にある感性の探求。',
      color: 'from-amber-400 to-orange-500',
    },
    {
      icon: 'leaf',
      title: '観葉植物',
      description: 'デジタルの世界に生きるからこそ、生命の静かな成長に癒される。育てることは経営に通じる。',
      color: 'from-emerald-400 to-green-500',
    },
  ],

  // 苦手なこと（ADHD）
  weaknesses: [
    { icon: '🔄', title: '習慣化', description: '習慣にしようとすると、自動化して習慣がいらなくなる' },
    { icon: '🧹', title: '後片付け', description: '散らかった机の上こそが俺のクリエイティブ空間' },
    { icon: '🏠', title: '家事全般', description: 'コードは書けるが洗濯物は畳めない' },
  ],

  // サイドプロジェクト
  sideProjects: [
    {
      title: 'LLMOSEO診断ツール',
      description: 'LLM時代のSEO対策を診断。AIに選ばれるコンテンツかどうかを可視化する。',
      url: 'https://llmoseo.netlify.app/',
      tag: 'TOOL',
    },
    {
      title: 'FIDO認証プラグイン',
      description: 'パスワードレス認証をプラグイン一発で導入。生体認証・セキュリティキー対応。',
      url: '',
      tag: 'SECURITY',
    },
    {
      title: 'AI議事録ツール',
      description: 'ファシリテート機能付き。AIが会議を要約するだけでなく、議論を前に進める。',
      url: '',
      tag: 'AI',
    },
    {
      title: 'カオステトリス',
      description: 'ブロックが予測不能に暴れ回る、ADHDの脳内を具現化したようなカオスゲーム。',
      url: 'https://block-chaos.lovable.app/',
      tag: 'GAME',
    },
  ],
}
