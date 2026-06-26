const stats = [
  { id: 1, name: 'Focused consulting domains', value: '2' },
  { id: 2, name: 'Years of software architecture practice', value: '15+' },
  { id: 3, name: 'From advisory to delivery', value: 'End-to-end' },
  ]
  
  export default function Stats() {
    return (
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Focused on AI and Cloud outcomes</h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                We help teams move from strategy to production with practical architecture, implementation support, and delivery coaching.
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col bg-white p-8 hover:bg-gray-50 transition-colors duration-300">
                  <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.name}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-primary-800 sm:text-5xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }
  