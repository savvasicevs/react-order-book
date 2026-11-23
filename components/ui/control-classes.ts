// provenance: original
/* Control classes: the library's control material for components that ship on their own
   (2026-10-02, the audit's pattern 11). src/components/library/controls.ts is the site's
   copy; components used to paste its look in as a flat 8% fill "so the file ships alone",
   and those copies never turned white on a raised light surface. These read the same
   tokens WITH a fallback, so they follow the site's raised-surface rule here and still
   draw correctly in a buyer's app that has no such tokens. Shipped beside every component
   that imports it (scripts/build-registry.mjs bundles ui helpers automatically).

   Whole class strings, never assembled from pieces: Tailwind reads this file as text. */

/** how every pill thumb glides between options (layoutId): the spring measured from the
 *  house pages, 440/34, shared by the library switches and the lab screens alike */
export const GLIDE = { type: "spring", stiffness: 440, damping: 34 } as const

/** what is ON in a switcher. Light (his call, 2026-10-02, after the inline slider): a WHITE
 *  pill with a hairline and a soft shadow on the grey track. Dark: the 8% thumb */
export const THUMB =
  "bg-white shadow-[inset_0_0_0_1px_var(--light-outline,rgba(0,0,0,0.09)),0_1px_3px_rgba(0,0,0,0.08)] dark:bg-[var(--control-fill,color-mix(in_oklab,var(--foreground)_8%,transparent))] dark:shadow-[var(--control-shadow,inset_0_1px_0_0_color-mix(in_srgb,var(--foreground)_6%,transparent))]"

/** what a switcher's options sit in; its 2px padding is the gap the thumb keeps. Light: a
 *  light grey track with no outline, the white pill sits in it. Dark: a hairline, no fill */
export const TRACK = "rounded-[13.5px] border border-transparent bg-[color-mix(in_srgb,var(--foreground)_5%,var(--background))] p-0.5 dark:border-foreground/[0.04] dark:bg-transparent"

/** an option that is off: the label alone answers the pointer */
export const SEGMENT_OFF = "text-foreground/60 hover:text-foreground/90"

/** a secondary button: the thumb standing alone; size it with h-7 / h-9 and px */
export const BUTTON =
  "inline-flex items-center justify-center gap-1.5 rounded-[12px] bg-[var(--control-fill,color-mix(in_oklab,var(--foreground)_8%,transparent))] shadow-[var(--control-shadow,inset_0_1px_0_0_color-mix(in_srgb,var(--foreground)_6%,transparent))] text-foreground/90 outline-none transition-[color,background-color,scale] duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[var(--control-fill-hover,color-mix(in_oklab,var(--foreground)_12%,transparent))] focus-visible:bg-[var(--control-fill-hover,color-mix(in_oklab,var(--foreground)_12%,transparent))] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-40 motion-reduce:active:scale-100"

/** an icon-only control: no fill at rest, a faint one under the pointer */
export const ICON_BUTTON =
  "inline-flex items-center justify-center rounded-full text-foreground/60 outline-none transition-[color,background-color,scale,opacity] duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-foreground/[0.06] hover:text-foreground/90 focus-visible:bg-foreground/[0.06] active:scale-[0.96] disabled:pointer-events-none disabled:opacity-40 motion-reduce:active:scale-100"

/** a field: the track with just enough fill to read as somewhere to type */
export const FIELD =
  "rounded-[14px] border border-foreground/[0.04] bg-[var(--field-fill,color-mix(in_oklab,var(--foreground)_5%,transparent))] text-foreground/90 outline-none transition-[background-color,border-color] duration-150 placeholder:text-foreground/45 focus:border-foreground/[0.12]"

/** the one loud button of a form: 48px, full width, filled with the accent (the dashboards'
 *  Modal primary). A ticket, a swap, a confirm: one of these and nothing louder. It was the
 *  ink pill until 2026-11-11, when the accent became the library's action colour. The fill is
 *  the brighter accent step where the theme has one, else the chart accent every install
 *  carries; the ink on it is the same in both themes. A light line along the top and a darker
 *  one along the bottom give it its edge; hover lifts the fill a step. */
export const BUTTON_PRIMARY =
  "inline-flex h-12 w-full items-center justify-center gap-2 rounded-[14px] bg-[var(--color-accent-400,var(--chart-1))] text-[14px] font-medium text-[var(--on-accent,#0e0e0e)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.45),inset_0_-1px_0_0_rgba(0,0,0,0.16)] outline-none transition-[background-color,scale,opacity] duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[color-mix(in_srgb,var(--color-accent-400,var(--chart-1))_78%,white)] focus-visible:bg-[color-mix(in_srgb,var(--color-accent-400,var(--chart-1))_78%,white)] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-40 motion-reduce:active:scale-100"

/** a component's own card, field or block (spec 14.8). Dark: a #121212 fill on black. Light
 *  (his call, 2026-10-02: "on light the card background is too dark, it can just be white, a
 *  quiet outline and a small shadow"): white, a 1px hairline (the --light-outline token, or 9% ink in an app without it) and a
 *  barely there shadow,
 *  drawn as box shadows so the outline takes no layout */
export const SURFACE =
  "bg-background shadow-[inset_0_0_0_1px_var(--light-outline,color-mix(in_srgb,var(--foreground)_9%,transparent)),0_1px_2px_rgba(0,0,0,0.04)] dark:bg-[color-mix(in_srgb,var(--foreground)_7%,var(--background))] dark:shadow-none"

/** a block sitting ON a surface: a faint 4% grey inside a white card in light, #1f1f1f in dark */
export const RAISED = "bg-[color-mix(in_srgb,var(--foreground)_4%,var(--background))] dark:bg-[color-mix(in_srgb,var(--foreground)_12%,var(--background))]"
