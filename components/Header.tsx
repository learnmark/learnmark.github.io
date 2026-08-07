'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  ComputerDesktopIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  ShoppingBagIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import ThemeToggle from './ThemeToggle'

const products = [
  { name: 'llmxy', description: 'Managed LLM gateway deployment, routing operations, and production support.', href: '/llmxy', icon: SquaresPlusIcon },
  { name: 'LetScrum', description: 'Hosted Scrum workspace with onboarding, migration, and operational support.', href: '/letscrum', icon: CursorArrowRaysIcon },
  { name: 'Sello', description: 'Managed AI commerce workspace for stores, listings, teams, and operations.', href: '/sello', icon: ShoppingBagIcon },
]

const solutions = [
  { name: 'AI Consulting', description: 'Move from AI ideas to production-ready products and workflows.', href: '/solutions/ai', icon: ArrowPathIcon },
  { name: 'Cloud Consulting', description: 'Modernize platforms, architecture, and operations for cloud-native delivery.', href: '/solutions/cloud', icon: ChartPieIcon },
  { name: 'Platform Engineering', description: 'Build reliable CI/CD, infrastructure as code, and developer platforms.', href: '/solutions/devops', icon: SquaresPlusIcon },
  { name: 'Microservices Modernization', description: 'Evolve monoliths into scalable, observable distributed systems.', href: '/solutions/microservices', icon: FingerPrintIcon },
  { name: 'API & AI Gateway', description: 'Secure, route, observe, and govern API and LLM traffic.', href: '/solutions/gateway', icon: CursorArrowRaysIcon },
]

const services = [
  {
    name: 'Shopify Store Development',
    description: 'Store setup, theme development, commerce integrations, and launch support for Shopify brands.',
    href: '/services/shopify',
    icon: ComputerDesktopIcon,
  },
]

const callsToAction = [
  { name: 'Request Demo', href: '/contact', icon: PlayCircleIcon },
  { name: 'Contact Sales', href: '/contact', icon: PhoneIcon },
]

const openSource = [
  { name: 'llmxy', description: 'Self-hosted LLM gateway, consoles, unified API, billing, and optional Envoy relay.', href: '/open-source/llmxy', icon: SquaresPlusIcon },
  { name: 'LetScrum', description: 'Apache-2.0 Scrum service and interface with REST and gRPC APIs.', href: '/open-source/letscrum', icon: CursorArrowRaysIcon },
  { name: 'Sello', description: 'Public multi-tenant commerce SaaS foundation under active development.', href: '/open-source/sello', icon: ShoppingBagIcon },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 px-3 pt-4">
      <nav aria-label="Global" className="site-frame flex items-center justify-between rounded-full border border-slate-200/80 bg-white/85 px-5 py-3 shadow-sm shadow-slate-900/5 backdrop-blur-xl lg:px-6">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Learnmark</span>
            <img alt="Learnmark Logo" src="/logo.svg" className="theme-logo h-8 w-auto" />
          </a>
        </div>
        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-9">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-slate-900 focus:outline-none hover:text-primary-800">
              Products
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white/95 shadow-xl shadow-slate-900/10 backdrop-blur-xl transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-primary-50 ring-1 ring-primary-100 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="h-6 w-6 text-primary-700" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-slate-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-slate-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-slate-900/5 bg-slate-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-slate-900 hover:bg-white"
                  >
                    <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-primary-700" />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-slate-900 focus:outline-none hover:text-primary-800">
              Services
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white/95 shadow-xl shadow-slate-900/10 backdrop-blur-xl transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {services.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-primary-50 ring-1 ring-primary-100 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="h-6 w-6 text-primary-700" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-slate-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-slate-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-slate-900/5 bg-slate-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-slate-900 hover:bg-white"
                  >
                    <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-primary-700" />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-slate-900 focus:outline-none hover:text-primary-800">
              Solutions
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white/95 shadow-xl shadow-slate-900/10 backdrop-blur-xl transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {solutions.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-primary-50 ring-1 ring-primary-100 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="h-6 w-6 text-primary-700" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-slate-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-slate-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-slate-900 focus:outline-none hover:text-primary-800">
              Open Source
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white/95 shadow-xl shadow-slate-900/10 backdrop-blur-xl transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {openSource.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-primary-50 ring-1 ring-primary-100 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="h-6 w-6 text-primary-700" />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold text-slate-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-slate-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
          
          <a href="/about" className="text-sm font-semibold leading-6 text-slate-900 hover:text-primary-800">
            About Us
          </a>
        </PopoverGroup>
        <div className="hidden items-center gap-2 lg:flex lg:flex-1 lg:justify-end">
          <ThemeToggle />
          <a
            href="/contact"
            className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold !text-white shadow-sm shadow-slate-900/10 transition-all duration-300 hover:bg-primary-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-900"
          >
            Start a project
          </a>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm" />
        <DialogPanel className="fixed inset-x-3 top-3 z-50 max-h-[calc(100dvh-1.5rem)] overflow-y-auto rounded-3xl border border-white/10 bg-slate-950 p-5 text-white shadow-2xl shadow-slate-950/40">
          <div aria-hidden="true" className="absolute inset-0 -z-10 rounded-3xl bg-[linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[size:42px_42px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />
          <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-40 rounded-3xl bg-[radial-gradient(ellipse_at_top,rgba(136,19,55,0.32),transparent_68%)]" />

          <div className="flex items-center justify-between">
            <a href="/" className="theme-light-surface rounded-full bg-white px-3 py-2 shadow-sm" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Learnmark</span>
              <img alt="Learnmark Logo" src="/logo.svg" className="h-8 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-full bg-white/10 p-2.5 text-slate-100 ring-1 ring-white/15 transition hover:bg-white/15"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <p className="text-xs font-semibold uppercase text-primary-200">AI + Cloud + Commerce</p>
            <p className="mt-3 text-xl font-bold leading-7 text-white">Build intelligent products, reliable platforms, and Shopify stores.</p>
            <a
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-5 inline-flex w-full justify-center rounded-full bg-primary-700 px-4 py-3 text-sm font-semibold !text-white shadow-lg shadow-primary-950/30 transition hover:bg-primary-600"
            >
              Start a project
            </a>
          </div>

          <div className="mt-5 space-y-3">
            <Disclosure as="div" className="rounded-2xl border border-white/10 bg-white/[0.04]">
              <DisclosureButton className="group flex w-full items-center justify-between px-4 py-4 text-base font-semibold leading-7 text-white">
                Products
                <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-slate-400 transition group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="space-y-2 border-t border-white/10 p-3">
                {products.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex gap-x-3 rounded-xl px-3 py-3 text-left hover:bg-white/[0.06]"
                  >
                    <item.icon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-primary-200" />
                    <span>
                      <span className="block font-semibold text-white">{item.name}</span>
                      <span className="mt-1 block text-sm leading-6 text-slate-400">{item.description}</span>
                    </span>
                  </DisclosureButton>
                ))}
              </DisclosurePanel>
            </Disclosure>

            <Disclosure as="div" className="rounded-2xl border border-white/10 bg-white/[0.04]">
              <DisclosureButton className="group flex w-full items-center justify-between px-4 py-4 text-base font-semibold leading-7 text-white">
                Services
                <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-slate-400 transition group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="space-y-2 border-t border-white/10 p-3">
                {services.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex gap-x-3 rounded-xl px-3 py-3 text-left hover:bg-white/[0.06]"
                  >
                    <item.icon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-primary-200" />
                    <span>
                      <span className="block font-semibold text-white">{item.name}</span>
                      <span className="mt-1 block text-sm leading-6 text-slate-400">{item.description}</span>
                    </span>
                  </DisclosureButton>
                ))}
              </DisclosurePanel>
            </Disclosure>

            <Disclosure as="div" className="rounded-2xl border border-white/10 bg-white/[0.04]">
              <DisclosureButton className="group flex w-full items-center justify-between px-4 py-4 text-base font-semibold leading-7 text-white">
                Solutions
                <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-slate-400 transition group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="space-y-2 border-t border-white/10 p-3">
                {solutions.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex gap-x-3 rounded-xl px-3 py-3 text-left hover:bg-white/[0.06]"
                  >
                    <item.icon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-primary-200" />
                    <span>
                      <span className="block font-semibold text-white">{item.name}</span>
                      <span className="mt-1 block text-sm leading-6 text-slate-400">{item.description}</span>
                    </span>
                  </DisclosureButton>
                ))}
              </DisclosurePanel>
            </Disclosure>

            <div className="grid grid-cols-1 gap-3">
              <a href="/about" onClick={() => setMobileMenuOpen(false)} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-base font-semibold !text-white hover:bg-white/[0.06]">
                About Us
              </a>
            </div>

            <Disclosure as="div" className="rounded-2xl border border-white/10 bg-white/[0.04]">
              <DisclosureButton className="group flex w-full items-center justify-between px-4 py-4 text-base font-semibold leading-7 text-white">
                Open Source
                <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-slate-400 transition group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="space-y-2 border-t border-white/10 p-3">
                {openSource.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex gap-x-3 rounded-xl px-3 py-3 text-left hover:bg-white/[0.06]"
                  >
                    <item.icon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-primary-200" />
                    <span>
                      <span className="block font-semibold text-white">{item.name}</span>
                      <span className="mt-1 block text-sm leading-6 text-slate-400">{item.description}</span>
                    </span>
                  </DisclosureButton>
                ))}
              </DisclosurePanel>
            </Disclosure>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
