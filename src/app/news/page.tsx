'use client'
import Image from 'next/image'

type Article = {
  title: string
  pubDate: string
  image: string
}

const mockArticles: Article[] = [
  {
    title: 'Earth Day Celebrated Globally',
    pubDate: '2025-04-22T09:00:00Z',
    image: '/images/earth.jpg',
  },
  {
    title: 'Space Elevator Opens in Asia',
    pubDate: '2025-04-18T14:30:00Z',
    image: '/images/space.jpg',
  },
  {
    title: 'AI Becomes Tech Minister',
    pubDate: '2025-04-20T12:15:00Z',
    image: '/images/ai.jpg',
  },
  {
    title: 'Underwater Cities Announced',
    pubDate: '2025-04-25T11:00:00Z',
    image: '/images/city.jpg',
  },
  {
    title: 'Green Energy Hits 95%',
    pubDate: '2025-04-24T10:00:00Z',
    image: '/images/green-energy.jpg',
  },
  {
    title: 'UN Recognizes Island Nation',
    pubDate: '2025-04-21T17:45:00Z',
    image: '/images/un.jpg',
  },
  {
    title: 'Moon Internet Now Live',
    pubDate: '2025-04-23T08:00:00Z',
    image: '/images/internet.jpg',
  },
  {
    title: 'Global Gaming Event Announced',
    pubDate: '2025-04-19T15:00:00Z',
    image: '/images/gaming.jpg',
  },
  {
    title: 'Maglev Train Breaks Record',
    pubDate: '2025-04-26T13:20:00Z',
    image: '/images/train.jpg',
  },
]

export default function NewsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">📰 World News</h1>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {mockArticles.map((article: Article, index) => (
          <article
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden flex flex-col"
          >
            <div className="relative w-full h-48">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            <div className="p-4 flex flex-col flex-grow">
              <p className="text-lg font-semibold text-blue-800">
                {article.title}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {new Date(article.pubDate).toLocaleDateString('en-GB', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </p>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
