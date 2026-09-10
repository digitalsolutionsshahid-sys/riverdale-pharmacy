---
name: accessibility-a11y
description: Enforce WCAG 2.1 AA accessibility standards, semantic HTML structure, alt text best practices, keyboard navigation, and contrast ratio validation for web applications.
---

# Accessibility (a11y) Skill

Standards and verification procedures to ensure WCAG 2.1 AA compliance and maximum Lighthouse accessibility scores.

## 1. Semantic HTML Foundation

- Use landmark elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<aside>`, `<footer>`.
- Every page must have a single `<h1>` tag representing the main topic.
- Use native button and link elements:
  - `<button>` for actions (opening dialogs, submitting forms, toggling states).
  - `<a href="...">` or `<Link href="...">` for navigation to URLs.
  - Never attach `onClick` handlers to non-interactive `<div>` or `<span>` elements without full keyboard role and keyboard event listeners.

## 2. Image Alt Text Protocol

- Every image rendered with `<Image>` or `<img>` must have an explicit `alt` attribute:
  - Meaningful images (e.g., store exterior, pharmacist consulting patient): Descriptive `alt` conveying context (e.g., `alt="CarePlus Pharmacy storefront with accessible entrance ramp and signage"`).
  - Decorative icons or graphic flourishes: `alt=""` or `aria-hidden="true"`.
- Do not use redundant phrases like "image of" or "photo of" in alt text.

## 3. Color Contrast Discipline

- **Normal Text (< 18pt / 24px regular or < 14pt / 18.5px bold)**: Minimum 4.5:1 contrast ratio against its background.
  - E.g., `text-slate-900` on `bg-white` (15.5:1 ratio) - PASS.
  - Avoid light slate (`text-slate-400` or `text-gray-400`) for functional body or meta copy.
- **Large Text (>= 18pt regular or >= 14pt bold) & UI Elements**: Minimum 3:1 contrast ratio.
  - Form input borders (`border-slate-300` or darker) must be visible against input background.
  - Focus rings: `focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2`.

## 4. Forms & Interactive Elements

- Every input must be linked to a `<label>` via `id` and `htmlFor`, or have an `aria-label`:
  ```tsx
  <label htmlFor="patient-phone" className="block text-sm font-medium text-slate-700">Phone Number</label>
  <input id="patient-phone" type="tel" aria-required="true" className="..." />
  ```
- Validation errors must use `aria-invalid="true"` and `aria-describedby="error-message-id"`.
- Modals, flyout menus, and mobile draw-downs:
  - Trap focus within dialog when open.
  - Support <kbd>Escape</kbd> key to dismiss.
  - Return focus to trigger element on close.
