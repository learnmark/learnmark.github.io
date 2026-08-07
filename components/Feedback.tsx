export default function Feedback() {
    return (
      <section className="site-section relative isolate overflow-hidden bg-white">
        <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-primary-300 to-transparent" />
        <div className="site-container">
        <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-slate-50/80 p-8 shadow-xl shadow-slate-900/5 sm:p-12">
          <figure>
            <blockquote className="text-center text-xl font-semibold leading-8 text-slate-950 sm:text-2xl sm:leading-9">
              <p>
                “Learnmark helped us connect AI strategy with a cloud architecture we could actually operate. Their team brought practical engineering depth, clear delivery guidance, and a strong focus on production readiness.”
              </p>
            </blockquote>
            <figcaption className="mt-10 flex items-center justify-center gap-x-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-800 ring-1 ring-primary-200">SC</div>
              <div className="text-base">
                <div className="font-semibold text-slate-950">Sarah Chen</div>
                <div className="text-slate-600">CTO at CloudFlow</div>
              </div>
            </figcaption>
          </figure>
        </div>
        </div>
      </section>
    )
  }
  