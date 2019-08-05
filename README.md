# Styling for NxTx

### Use it in your browser
Minified: `<script src="https://nxtxorg.github.io/styling/build/styling.min.js"></script>`

Unminified: `<script src="https://nxtxorg.github.io/styling/build/styling.js"></script>`


### API

`\add-css-rule(rule:string, index:number)` Insert/override css rule at index

`\set-root-style(property:string, ...values:any[])` Set style property of nxtx root

`\set-font-family(...fontFamilies:string[])`  Set font-family on nxtx root

`\set-local-font-family(fontName:string, fontPath:string)` Set font-family from font path

`\set-google-font-family(...fontFamilies:string[])` Set font-family from Google Fonts. The first font name will be loaded and the rest will be used as fallback font-families
