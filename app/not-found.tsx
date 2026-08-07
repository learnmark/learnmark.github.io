import Background from "@/components/Background"

export default function Example() {
    return (
        <main className="site-section grid min-h-full place-items-center">
          <Background />
          <div className="site-container mt-16 text-center">
            <p className="text-lg font-semibold text-red-800">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
            <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/"
                className="rounded-full bg-primary-800 px-5 py-3 text-sm font-semibold !text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-900"
              >
                Go back home
              </a>
              {/* <a href="#" className="text-sm font-semibold text-gray-900">
                Contact support <span aria-hidden="true">&rarr;</span>
              </a> */}
            </div>
          </div>
        </main>
    )
  }
  