'use client'

export default function Background() {

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.07)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />
      <div className="absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(ellipse_at_top,rgba(136,19,55,0.18),rgba(71,85,105,0.12)_40%,transparent_72%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-50 to-transparent" />
    </div>
        
  )
}
