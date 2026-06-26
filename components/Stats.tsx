const stats = [
  { id: 1, name: 'Focused consulting domains', value: '2' },
  { id: 2, name: 'Years of software architecture practice', value: '15+' },
  { id: 3, name: 'From advisory to delivery', value: 'End-to-end' },
  ]
  
  export default function Stats() {
    return (
      <section className="bg-slate-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center lg:max-w-3xl">
            <p className="text-sm font-semibold uppercase text-primary-700">How we measure value</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Focused on AI and Cloud outcomes</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              We help teams move from strategy to production with practical architecture, implementation support, and delivery coaching.
            </p>
          </div>
          <dl className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-4 text-center sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-colors duration-300 hover:border-primary-200">
                <dt className="text-sm font-semibold leading-6 text-slate-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-bold tracking-tight text-primary-800 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    )
  }
  