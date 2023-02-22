<img src="https://badge.fury.io/js/@cirtemegla%2Fds-tokens.svg" alt="package current version" /> <img src="https://img.shields.io/node/v/hydrogen" alt="node version"> <img src="https://img.shields.io/appveyor/build/abnersimoes/ds-tokens" alt="project build">

<img src="https://forthebadge.com/images/badges/uses-js.svg" /> <img src="https://forthebadge.com/images/badges/built-with-love.svg" />

---

# Chroma Design Tokens

This project is responsible for centralizing the design tokens of the Chroma design system. Also managing white label tokens.

## ⚙️ Setup

1. You need to have [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) installed;

2. Just clone this repository and run:

```bash
yarn install
```

## 💼 Workflow

Compiling watching changes:

```bash
yarn start
```

Compiling build to deploy:

```bash
yarn build
```

Build will read the files inside the `src` folder which will compile to usable files in the `build` folder.

## 🚚 Publish package

Just change version in the `package.json` to a version abose and run:

```bash
npm run publish --access=public
```

### 🗂️ Folder architecture

### General architecture

```bash
├── actions/
├── formats/
├── helpers/
├── src/
├── transforms/
├── utils/
├── build.js
└── package.json
```

### How to create a new white label

Just replicate the file architecture inside the `src/brand` folder

```bash
├── src/
│ ├── brand/
│ │ ├── brand-a/
│ │ │ ├── assets/
│ │ │ │ ├── fonts/
│ │ │ │ └── ...
│ │ │ ├── color.json
│ │ │ ├── font-face.json
│ │ │ └── font.json
│ ├── components/
│ ├── global/
│ └── platform/
```

### How to create component specific tokens

Just create a folder with the name of the component inside the `src/components` folder. Once that's done, you can create files for each token category

```bash
├── src/
│ ├── brand/
│ ├── components/
│ │ └── button/
│ │ ├── color.json
│ │ ├── font.json
│ │ └── size.json
│ ├── global/
│ └── platform/
```

### How to custom tokens for dark mode

Copy the default style file (light mode) and add the `.dark` suffix. Once this is done, change the values of the tokens that will override the default values

```bash
├── src/
│ ├── brand/
│ ├── components/
│ │ └── button/
│ │ ├── color.json
│ │ ├── color.dark.json
│ │ └── ...
│ ├── global/
│ └── platform/
```

### Folder to manage global tokens that will be reused by other tokens

```bash
├── src/
│ ├── brand/
│ ├── components/
│ ├── global/
│ │ ├── colors/
│ │ │ ├── neutral.json
│ │ │ └── ...
│ │ ├── font/
│ │ │ ├── line-height.json
│ │ │ └── ...
│ │ └── size/
│ │ ├── spacing.json
│ │ └── ...
│ └── platform/
```

### Folder to manage tokens with different values for each platform (web, ios, android)

```bash
├── src/
│ ├── brand/
│ ├── components/
│ ├── global/
│ └── platform/
│ ├── web/
│ │ ├── font.json
│ │ └── ...
│ ├── android/
│ │ ├── font.json
│ │ └── ...
│ └── ios/
│ ├── font.json
│ └── ...
```

## Contributors ✨

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/abnersimoes">
        <img src="https://avatars.githubusercontent.com/u/3276365?v=4" width="100px;" alt="Abner Simões"/>
        <br />
        <sub><b>Abner Simões</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/thiagonzalez">
        <img src="https://avatars.githubusercontent.com/u/967571?v=4" width="100px;" alt="Thiago Gonzalez"/>
        <br />
        <sub><b>Thiago Gonzalez</b></sub>
      </a>
    </td>
  </tr>
</table>
