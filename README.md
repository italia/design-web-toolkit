# Linee guida di design per i servizi web della Pubblica Amministrazione
## Implementazione di riferimento

L'implementazione di riferimento contiene fogli di stile CSS, componenti Javascript accessibili e snippet HTML
riutilizzabili per lo sviluppo del *frontend* dei siti web della Pubblica Amministrazione
conformi alle [linee guida di design](http://design.italia.it).

L'obiettivo del progetto è convogliare, in un unico framework di sviluppo,
i contributi della community di [design.italia.it](http://design.italia.it),
l'esperienza sul campo dei fornitori della PA e le competenze tecniche degli sviluppatori.

**L'utilizzo in produzione è consigliato a partire dalla release della versione stabile (1.0)**

### La documentazione per chi vuole utilizze il toolkit o contribuire allo sviluppo è disponibile online

- [documentazione](https://italia.github.io/design-web-toolkit/)

### È inoltre possibile consultare la roadmap

- [roadmap](https://github.com/italia/design-web-toolkit/milestone/1)

### I componenti dell'interfaccia sono presentati nella styleguide

- https://italia.github.io/design-web-toolkit/

Per ogni componente è riportato lo stato di maturità in modo da poter decidere
quali incorporare nel proprio sito web:

- prototype: proposte di componenti, da discutere nella community
- wip (work in progress): componenti in attesa di esser validati
- ready: componenti pronti per esser utilizzati in produzione

# Licenze software dei componenti di terze parti

## Componenti distribuiti con il toolkit

Vengono di seguito elencati i componenti distribuiti con il toolkit
che hanno una propria licenza diversa da CC0.

- [src/vendor/jquery.min.js](https://jquery.com/) (c) jQuery Foundation, licenza MIT
- [src/vendor/modernizr.js](https://modernizr.com/) licenza MIT
- [src/vendor/polyfill.min.js](https://github.com/inexorabletash/polyfill) Unlicense (Public Domain)
- [src/vendor/rem.min.js](https://github.com/chuckcarpenter/REM-unit-polyfill) (c)) Chuck Carpenter, licenza MIT
- [src/vendor/respond.min.js](https://github.com/scottjehl/Respond) (c) Scott Jehl, licenza MIT
- [src/vendor/selectivzr.js](http://selectivizr.com/) (c) Keith Clark, licenza MIT

- [src/modules/megamenu/megamenu.js](https://adobe-accessibility.github.io/Accessible-Mega-Menu/) (c) Adobe Systems Incorporated, licenza Apache 2.0
- [src/src/modules/carousel/a11y.js](https://github.com/rtrvrtg/owlcarousel2-a11ylayer) (c) 2015 Geoffrey Roberts, licenza MIT
- [src/modules/cookiebar/cookiebar.js](https://github.com/carlwoodhouse/jquery.cookieBar) (c) 2016 Carl Woodhouse, licenza MIT
- [src/components/form/index.css](https://github.com/giuseppeg/suitcss-components-form) (c) Giuseppe Gurgone, licenza MIT
- [src/components/table/index.css](https://github.com/trunkclub/suitcss-components-table) (c) Trunk Club, licenza MIT
- [src/print/index.css](https://github.com/h5bp/html5-boilerplate) (c) HTML5 Boilerplate, licenza MIT

Tramite gli [archivi npm](https://www.npmjs.com/):

- [frend](https://frend.co/) (c) 2015 Adam Duncan, Tom Digby, licenza MIT
- [suitcss](http://suitcss.github.io/) (c) Nicolas Gallagher, licenza MIT
- [headroom.js](http://wicky.nillia.ms/headroom.js/) (c) 2013 Nick Williams, licenza MIT
- [jquery.cookie](https://www.npmjs.com/package/jquery.cookie) (c) Klaus Hartl, licenza MIT
- [owl carousel](http://www.owlcarousel.owlgraphic.com/) (c) Owl (David Deutsch), licenza MIT
- [throttle-debounce](https://github.com/niksy/throttle-debounce) (c) Ivan Nikolić, Ben Alman, licenza MIT
- [salvattore](http://salvattore.com/) (c) 2013-2014 Rolando Murillo and Giorgio Leveroni, licenza MIT
- [piakaday](https://github.com/dbushell/Pikaday) (c) 2014 David Bushell BSD, licenza MIT
- [tablesaw](https://github.com/filamentgroup/tablesaw) (c) 2013 Filament Group, licenza MIT
- [popper.js](https://popper.js.org/) (c) 2016 Federico Zivolo and contributors, licenza MIT

### Dipendenze per la fase di compilazione

- compilatore per i fogli di stile [PostCSS](https://github.com/postcss/postcss) (c) Andrey Sitnik, licenza MIT
- generatore della styleguide [Fractal](https://github.com/frctl/fractal) (c) Mark Perkins, licenza MIT
- bundler per i moduli javascript [Webpack](https://webpack.github.io/) (c) Tobias Koppers, licenza MIT
- transpiler per moduli javascript [Babel](https://babeljs.io/), (c) 2014-2016 Sebastian McKenzie, licenza MIT
- linter per javascript [ESLint](http://eslint.org/), (c) jQuery Foundation and other contributors, licenza MIT
- linter per fogli di stile CSS [Stylelint](http://stylelint.io/) (c) Maxime Thirouin, David Clark & Richard Hallows, licenza MIT

### Testo completo Licenza MIT

The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
