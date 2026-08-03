# Bundle cover images

Drop image files with these exact names in this folder to have them show up
automatically as each bundle's cover image (top-right of the dashboard card,
and above the title on the bundle detail page). Until a file exists at the
expected path, a dashed "Add image" placeholder is shown instead.

- `fuel-your-basket.jpg`
- `winning-game-day.jpg`
- `mango-sticky-rice.jpg`

Any image format works (`.jpg`, `.png`, `.webp`, etc.) as long as the
filename (including extension) matches the `coverImage` path set for that
bundle in `lib/data.ts`. Roughly square images work best given the current
layout sizing.
