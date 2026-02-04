export interface Service {
  id: string
  name: string
  description: string
  url: string
  color: 'blue' | 'purple' | 'emerald'
}

export const services: Service[] = [
  {
    id: 'mirai-post',
    name: 'MirAI-POST',
    description: 'AIがSNS投稿を自動生成。X、Instagram、Noteへの投稿をサポート。高エンゲージメントを実現する魅力的なコンテンツを作成します。',
    url: 'https://mirai-post.netlify.app/',
    color: 'blue',
  },
  {
    id: 'ai-camp',
    name: '新人類育成計画',
    description: 'AIプログラミング2日間合宿。最新のAI技術を学び、未来のエンジニアを育成するプログラムです。',
    url: 'https://two-day-ai-camp.netlify.app/',
    color: 'purple',
  },
  {
    id: 'taolis',
    name: 'タオリス',
    description: '人と機械の調和を探求するテックメディア。AI、Web開発、インフラ、セキュリティなど幅広いトピックをカバー。',
    url: 'https://www.taolis.net/',
    color: 'emerald',
  },
]
