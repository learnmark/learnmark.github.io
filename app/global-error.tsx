'use client'

import './globals.css'
 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body className="site-shell text-slate-900 antialiased">
        <main className="site-section site-page grid min-h-screen place-items-center">
          <div className="site-container text-center">
            <p className="text-sm font-semibold uppercase text-primary-700">Unexpected error</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">Something went wrong.</h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-600">
              The page could not be completed. Try the request again or return later.
            </p>
            <button
              type="button"
              onClick={() => reset()}
              className="mt-10 rounded-full bg-primary-800 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-900"
            >
              Try again
            </button>
          </div>
        </main>
      </body>
    </html>
  )
}