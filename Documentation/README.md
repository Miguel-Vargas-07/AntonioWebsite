# Antonio's Barbershop — Site v2

A static site (no build step, no backend) in [`docs/`](../docs), built to spec
from `Instructions/AntonioWebsiteInstructions.txt` and refined per
`Instructions/AntonioWebsiteInstructionsV.2.txt`.

## Viewing it

Open any file in `docs/` directly in a browser (`docs/index.html`, etc.), or
serve the folder with any static file server. No install step needed. You'll
host it on GitHub Pages yourself later — nothing here assumes a live URL.

## Pages

| File | Purpose |
|---|---|
| `index.html` | Home — intro + the "browse → prices → book" cycle |
| `haircuts.html` | Style lookbook (image slots, see below) |
| `prices.html` | Prices, add-ons, cancellation policy |
| `booking.html` | Availability preview + time-slot picker |
| `about.html` | Bio placeholder (intentionally blank, see below) |

Every page shares `css/style.css` and `js/main.js`, so a style change made in
one place applies everywhere.

## Design

Black background with a single deep-gold accent (`--gold: #a9822f`) — no blue,
no bright yellow, no gradients or glow effects. Kept deliberately plain per
feedback that the first pass read as "too AI, too flashy."

## Image slots — upload mapping

The haircut cards and the About portrait don't have real photos yet. Each has
a dashed placeholder box with a stable ID (`data-image-id` in the HTML) so a
folder of photos can be dropped in and mapped later:

| ID | Where | Style |
|---|---|---|
| `cut-01` | haircuts.html | Classic Skin Fade |
| `cut-02` | haircuts.html | Textured Crop |
| `cut-03` | haircuts.html | Pompadour |
| `cut-04` | haircuts.html | Buzz Cut |
| `cut-05` | haircuts.html | Beard Trim & Line Up |
| `cut-06` | haircuts.html | Kids Cut |
| `about-01` | about.html | Antonio's portrait |

To wire a photo in: replace the `.img-slot` div's contents (or swap the whole
div for an `<img>`) at the matching `data-image-id`, and drop the file
somewhere like `docs/images/`.

## Intentionally unfinished (v2)

- **Bio** — `about.html` has a placeholder bio, not written content. Fill it
  in directly when ready.
- **Instagram** — every "message the shop" touchpoint (header modal, footer,
  booking page) shows "link coming soon" instead of a real URL. A placeholder
  handle was guessed in v1 and removed in v2 — add the real profile link once
  it's provided.
- **Booking calendar** — `booking.html` is a static, hand-coded preview
  (July 2026, a few marked-available days, mock time slots) with working
  client-side selection, but it isn't wired to a real calendar. The page
  notes that live Google Calendar sync is planned for a future version.

## Next steps

1. Drop in real haircut/portrait photos using the ID table above.
2. Add the real Instagram profile link (replaces the "coming soon" placeholders).
3. Write the actual bio for `about.html`.
4. Wire `booking.html` to Google Calendar for real availability.
5. Deploy via GitHub Pages (root or `/docs`, as preferred) when ready.
