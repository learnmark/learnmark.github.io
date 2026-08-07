'use client'

import { useState } from 'react'
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'

export default function Subscribe() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setMessage('')

    try {
      const response = await fetch('https://formspree.io/f/xkonnbdr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage('Thanks for subscribing!')
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <div className="site-section relative isolate overflow-hidden bg-slate-950">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:linear-gradient(to_top,black,transparent_86%)]" />
      <div className="site-container">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Subscribe to our AI and Cloud notes</h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Get practical architecture notes, AI delivery lessons, and cloud modernization ideas from Learnmark.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Your email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-full border-0 bg-white/5 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary-400 sm:text-sm sm:leading-6"
              />
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="flex-none rounded-full bg-primary-600 px-4 py-3 text-sm font-semibold !text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            {message && (
              <p className={`mt-4 text-sm ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                {message}
              </p>
            )}
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-xl bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon aria-hidden="true" className="h-6 w-6 text-white" />
              </div>
              <dt className="mt-4 font-semibold text-white">Practical field notes</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                Receive concise resources for AI product delivery, cloud platforms, and engineering leadership.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-xl bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon aria-hidden="true" className="h-6 w-6 text-white" />
              </div>
              <dt className="mt-4 font-semibold text-white">No spam</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                No spam, only useful consulting notes with the option to unsubscribe at any time.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}
