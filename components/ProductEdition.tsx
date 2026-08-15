type ProductFeature = {
  name: string
  description: string
}

type ProductEditionProps = {
  projectName: string
  description: string
  features: ProductFeature[]
  openSourceHref: string
  eyebrow: string
  title: string
  compareLabel: string
}

export default function ProductEdition({
  projectName,
  description,
  features,
  openSourceHref,
  eyebrow,
  title,
  compareLabel,
}: ProductEditionProps) {
  return (
    <section className="mt-16 border-y border-slate-200 py-14">
      <p className="text-sm font-semibold uppercase text-primary-700">{eyebrow}</p>
      <h2 className="mt-3 text-2xl font-bold text-slate-950">{title}</h2>
      <p className="mt-5 text-base leading-7 text-slate-600">{description}</p>

      <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2">
        {features.map((feature) => (
          <article key={feature.name} className="border-t border-slate-300 pt-5">
            <h3 className="font-semibold text-slate-950">{feature.name}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{feature.description}</p>
          </article>
        ))}
      </div>

      <a href={openSourceHref} className="mt-10 inline-flex text-sm font-semibold text-slate-900 hover:text-primary-800">
        {compareLabel} <span aria-hidden="true" className="ml-1">-&gt;</span>
      </a>
    </section>
  )
}