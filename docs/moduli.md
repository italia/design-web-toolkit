---
order: 25
title: Creare o modificare un modulo
label: Creare o modificare un modulo
---

Gli elementi dell'interfaccia (moduli), contenuti nella directory `src/modules` sono costituiti da:

1. uno (o più) file **CSS**
2. uno (o più) file **Javascript**
3. uno (o più) snippet HTML di esempio (file \*.tmpl)

All'interno della directory di ogni modulo deve esser presente almeno una tra queste tre componenti.

Il **codice CSS** va collocato in un file:

  `src/modules/<nome-modulo>/index.css`

e verrà automaticamente incluso nella build.

Il **codice Javascript** va collocato in un file

  `src/modules/<nome-modulo>/index.js`

e verrà automaticamente incluso nella build.

Puoi includere ulteriori **assets** (CSS / JS / immagini) contenuti nella directory del modulo
utilizzando le direttive `require` (nell'index.js) o `@import` (nell' index.css).

Il nome dei file con gli snippet HTML *deve* iniziare con quello del modulo, ad esempio:

- `src/modules/<nome-modulo>/<nome-modulo>.tmpl`
- `src/modules/<nome-modulo>/<nome-modulo>--2.tmpl`

Negli snippet HTML è possibile utilizzare i costrutti del
[linguaggio di templating nunjucks](https://mozilla.github.io/nunjucks/).

I CSS vengono processati tramite PostCSS (e i relativi plugin presentati nella sezione [Tecnologie](tecnologie))
al momento dell'esecuzione di `npm run build` (o `npm run build:css`).

Nei file Javascript è possibile utilizzare la sintassi [ECMAScript 2015](https://babeljs.io/docs/learn-es2015/).

### Regole generali nello sviluppo di nuovi moduli

- i moduli devono essere quanto più possibile indipendenti tra loro
- nei CSS si possono utilizzare le classi di utilità (quelle con prefisso `u-*`), ma **non** incorporare selettori di altri moduli
- [le regole di nomenclatura sono quelle di SUIT CSS](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md)
- i componenti Javascript devono dichiarare tutte le loro dipendenze nell'`index.js` (es. tramite i costrutti `import` o `require`)
- è incoraggiato l'utilizzo del costrutto PostCSS `@extend`, ma **esclusivamente** per estendere le classi di utilità (`u-*`)

[Compatibilita con altri framework](compatibilita)

{% include '_footer.md' %}
