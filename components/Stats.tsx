import type { HomeMessages } from '@/i18n/messages/home'
  
  export default function Stats({ messages }: { messages: HomeMessages['stats'] }) {
    return (
      <section className="site-section bg-slate-50">
        <div className="site-container">
          <div className="mx-auto max-w-2xl text-center lg:max-w-3xl">
            <p className="text-sm font-semibold uppercase text-primary-700">{messages.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">{messages.title}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {messages.description}
            </p>
          </div>
          <dl className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-4 text-center sm:grid-cols-3">
            {messages.items.map((stat) => (
              <div key={stat.name} className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm transition-colors duration-300 hover:border-primary-200">
                <dt className="text-sm font-semibold leading-6 text-slate-600">{stat.name}</dt>
                <dd className="order-first wrap-break-word text-2xl font-bold leading-tight text-primary-800 sm:text-3xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    )
  }
  