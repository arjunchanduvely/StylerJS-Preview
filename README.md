# StylerJS Preview

## Git clone parent with submodules

```bash
git clone --recurse-submodules git@github.com:arjunchanduvely/StylerJS-Preview.git
```

## Getting Started

First copy and rename theme.sample.scss
```bash
cp src/components/StylerJS/theme.sample.scss src/components/StylerJS/theme.scss
```
Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.