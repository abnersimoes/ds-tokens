<img src="https://forthebadge.com/images/badges/uses-js.svg" /> <img src="https://forthebadge.com/images/badges/built-with-love.svg" />

---

# Chroma Design Tokens

This project is responsible for centralizing the design tokens of the Chroma design system. Also managing white label tokens.

## How to use

### Web:

Just import the files from the `build/web/{white-label}/` folder:

```bash
├── build/
│ ├── web/
│ │ ├── {white-label}/
│ │ │ ├── assets/
│ │ │ ├── font-face.{css|sass}
│ │ │ ├── tokens.{css|sass}
│ │ │ ├── tokens.dark.{css|sass}
```

### Example of an automation shell command

Create a `.env` file:

```bash
DESIGN_TOKENS_SRC=./node_modules/@cirtemegla/chroma-tokens/build/web/
DESIGN_TOKENS_BRAND=algemetric
```

Run the script:

```bash
#!/bin/sh

DESIGN_TOKENS_BRAND=$(grep DESIGN_TOKENS_BRAND .env | cut -d '=' -f2)
DESIGN_TOKENS_SRC=$(grep DESIGN_TOKENS_SRC .env | cut -d '=' -f2)
DESIGN_TOKENS=${DESIGN_TOKENS_SRC}${DESIGN_TOKENS_BRAND}

echo 🧩 Building $DESIGN_TOKENS_BRAND tokens

rm -rf ./build
cp -R ${DESIGN_TOKENS} ./build

echo ✅ Build completed!
```
