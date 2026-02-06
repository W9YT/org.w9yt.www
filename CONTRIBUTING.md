This project is built with [Sveltekit](https://svelte.dev/) with two UI frameworks [Tailwind](https://tailwindcss.com/) and [Skeleton](https://www.skeleton.dev/docs/svelte/get-started/introduction)

## Getting Started

1. Get [Node.js with npm](https://nodejs.org/en/download)
2. Install modules with `npm install`

## Structure

### News & Events

Pages in [`/news-events/`](src/routes/news-events) are written 
in [mdsvex](https://mdsvex.pngwn.io/docs).

A good example to start with is 
[`/news-events/demo`](src/routes/news-events/demo/+page.svx), copy the `demo` 
folder and make edits. Remember that the name of the folder determines the 
final URL.

### Menus

All menus are in [src/lib/menus](src/lib/menus).

### People Profiles

Pictures for profiles are in [static/assets/profile](static/assets/profile), 
and components for profiles are in 
[src/lib/composite/profiles](src/lib/composite/profiles).

### `.well-known`

Content in `.well-known` is not managed though this repo.

## Development 
Start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

```sh
npm run build
```

You can preview the production build with `npm run preview`.

