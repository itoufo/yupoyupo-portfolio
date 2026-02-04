export interface Service {
  id: string
  name: string
  tagline: string
  description: string
  url: string
  icon: string
  gradient: string
  features: string[]
}

export const services: Service[] = [
  {
    id: 'mirai-post',
    name: 'MirAI-POST',
    tagline: 'AIが投稿を、人間は戦略を',
    description: 'SNS投稿の完全自動化。X、Instagram、Noteへの投稿をAIが生成し、あなたは本質的な仕事に集中できる。',
    url: 'https://mirai-post.netlify.app/',
    icon: '⚡',
    gradient: 'from-cyan-500 to-blue-500',
    features: ['X投稿生成', 'Instagram対応', 'Note記事生成', '自動スケジューリング'],
  },
  {
    id: 'ai-camp',
    name: '新人類育成計画',
    tagline: '3年を2日に圧縮する',
    description: 'AIプログラミング2日間合宿。従来の学習を破壊し、最速で実践力を身につける。凡人のための教育ではない。',
    url: 'https://two-day-ai-camp.netlify.app/',
    icon: '🧬',
    gradient: 'from-purple-500 to-pink-500',
    features: ['2日間集中', '実践重視', '少人数制', '即戦力化'],
  },
  {
    id: 'taolis',
    name: 'タオリス',
    tagline: '人機和を探求する',
    description: '人と機械の調和を探求するテックメディア。表面的な情報ではなく、本質を捉えた深い分析を提供する。',
    url: 'https://www.taolis.net/',
    icon: '🔮',
    gradient: 'from-emerald-500 to-teal-500',
    features: ['AI・ML', 'Web開発', 'セキュリティ', '業界予測'],
  },
]
