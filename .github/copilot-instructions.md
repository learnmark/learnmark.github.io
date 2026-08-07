# Learnmark Development Rules

These rules apply to every new page, component, feature, and user-facing change in this repository.

## Architecture

- Keep the existing Next.js App Router, TypeScript, Tailwind CSS, Server Component, and shared-component patterns.
- Prefer Server Components. Add `'use client'` only for browser APIs, local interaction state, or client-side form behavior.
- Reuse the owning shared surface before creating another abstraction. In particular, preserve `SolutionPage`, `LocalizedSolutionPage`, `OpenSourceProjectPage`, `LocalizedOpenSourceProjectPage`, and `ProductEdition` patterns.
- Do not add a new internationalization or theme library unless the existing implementation cannot support the requirement.

## Internationalization Is Required

- Every new user-facing string must support all locales in `i18n/config.ts`: `en`, `zh-CN`, `zh-TW`, `ja`, `fr`, and `de`.
- Do not hardcode visible text in pages or shared components. This includes headings, body copy, buttons, menus, form labels, placeholders, option labels, status/error/success messages, tooltips, `title`, `aria-label`, and meaningful image `alt` text.
- Put domain copy in a strongly typed `Record<Locale, ...>` under `i18n/messages/`. Put truly shared navigation/footer/system copy in the existing common or system message files.
- Keep product names, source code, shell commands, repository URLs, API values, and other technical identifiers unchanged unless localization is semantically required.
- Use `getLocale()` from `i18n/server.ts` in Server Components. It preserves the required precedence: the `learnmark-locale` cookie first, browser `Accept-Language` second, and English fallback last.
- Preserve the current URL strategy. Do not add locale prefixes such as `/en` or `/zh-CN` without an explicit product decision.
- Pass only the active locale's message slice into Client Components. Never send all six dictionaries to the browser or import `i18n/server.ts` into a Client Component.
- Keep stable form/API values separate from translated labels. Query parameters and submitted values must remain backward compatible.
- New pages must localize metadata with `generateMetadata()`, `getLocale()`, and `createPageMetadata({ locale })`. Localize JSON-LD and Open Graph locale signals as well.
- Preserve a correct `<html lang>` value and localized accessibility metadata. Do not replace localized copy with client-only rendering that causes an English flash or hydration mismatch.
- When translated arrays are paired with icons, images, routes, or other config, keep their lengths and order aligned. Prefer stable keys for new structures.
- Check long German/French labels and CJK text at mobile and desktop widths; text must wrap without clipping, overlap, or horizontal scrolling.

## Language Switcher

- Keep `LanguageSwitcher` immediately beside `ThemeToggle` in both desktop and mobile Header controls.
- The selector must remain a keyboard-accessible dropdown showing all six native language names and the current selection.
- A language change must update `learnmark-locale`, update the document language, and refresh the current route without changing the URL.
- Do not duplicate locale detection, cookie names, or language options outside `i18n/config.ts`.

## Light And Dark Themes Are Required

- Every new UI surface must be complete and readable in both light and dark modes.
- Keep `next-themes` as the single theme authority. `ThemeProvider` must continue using `attribute="class"`, `defaultTheme="system"`, and `enableSystem`.
- Do not implement separate theme state, custom local storage, or another flash-prevention script. Do not replace the `.dark` class strategy.
- Prefer the existing slate/gray/primary Tailwind utilities and CSS variables in `app/globals.css`; the global dark mappings already cover common text, surface, border, ring, hover, logo, and toggle classes.
- If a new utility or custom color is not covered by the global mappings, add an intentional `dark:` style or extend the semantic mapping. Never ship light-only backgrounds, borders, shadows, focus states, charts, images, or form controls.
- Maintain accessible contrast for normal, muted, hover, focus, disabled, success, warning, and error states in both themes.
- Use `theme-toggle` for theme/language control surfaces, `theme-logo` for the normal logo, and `theme-light-surface` only when an element must deliberately remain light in dark mode.
- Keep localized accessible labels on theme controls. Theme icons are Moon for light mode and Sun for dark mode, using the existing Heroicons dependency.

## Visual Design

- Preserve Learnmark's restrained technology-consulting visual language: slate neutrals, rose `primary` accents, crisp borders, subtle grid/radial atmosphere, high information clarity, and purposeful dark sections.
- Do not introduce purple-first palettes, decorative gradient blobs/orbs, stock-style decoration, excessive glass effects, or generic card-heavy marketing layouts.
- Use the established layout utilities:
  - `site-page` for the isolated page shell.
  - `site-container` for the canonical `80rem` content width with 24px mobile and 32px desktop gutters.
  - `site-section` for 80px mobile and 96px desktop vertical rhythm.
  - `site-frame` only for framed shells without content gutters, such as the Header.
  - `site-product-grid-row` for the existing two-column sticky product layout.
- Match existing corner hierarchy: `rounded-lg` for repeated cards/items, `rounded-2xl` for major framed panels, and `rounded-full` for command CTAs and compact controls.
- Do not nest decorative cards inside cards. Keep page sections unframed unless the content is a real tool, modal, repeated item, or intentionally bounded panel.
- Preserve the current typography hierarchy and Manrope setup. Do not add another font or viewport-scaled type without a clear product reason.
- Use Heroicons already installed in the project. Icon-only controls require localized accessible names; unfamiliar controls also require localized tooltips.
- Use real product/interface imagery when imagery is needed. Preserve aspect ratios, responsive dimensions, meaningful localized alt text, and `next/image` where it provides value.
- Keep fixed-format controls, grids, media, and navigation dimensions stable so translated copy, loading states, and hover states do not shift the layout.
- New pages must feel like the working product or service experience, not a detached landing-page template. Follow the nearest existing route for composition and density.

## Completion Checklist

- Verify all six locales, browser-language defaulting, cookie persistence, and English fallback.
- Verify light, dark, and system themes, including focus, hover, form, menu, footer, and image/logo states.
- Check 390px mobile and at least 1280px desktop layouts for overlap, clipping, menu placement, and horizontal overflow.
- Check localized page title, description, Open Graph locale, JSON-LD language, accessibility labels, and form feedback.
- Run `npx tsc --noEmit` and `npm run build` before finishing. Do not consider a user-facing change complete while either command fails.