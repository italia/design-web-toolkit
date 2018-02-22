---
order: 4
title: Creare o modificare un modulo
label: Creare o modificare un modulo
---

Gli elementi dell'interfaccia (moduli), contenuti nella directory `src/modules` sono di norma costituiti da:

* uno o più file **CSS**
* uno o più file **Javascript**
* uno o più snippet HTML di esempio (file \*.tmpl)

All'interno della directory di ogni modulo deve esser presente almeno una tra queste tre componenti. Per la creazione di un nuovo modulo, va mantenuta una nomenclatura e rispettate una serie di regole già esistenti:

#### CSS

Il **codice CSS** va collocato in un file di tipo `src/modules/<nome-modulo>/index.css` e verrà automaticamente incluso nella build.

#### Javascript

Il **codice Javascript** va collocato in un file di tipo `src/modules/<nome-modulo>/index.js` e verrà automaticamente incluso nella build.

#### Asset aggiuntivi
Puoi includere ulteriori **asset** (CSS / JS / immagini) nella directory del modulo utilizzando le direttive `require` (nell'index.js) o `@import` (nell' index.css).

#### Nomi dei file

Il nome dei file con gli snippet HTML *deve* iniziare con quello del modulo, ad esempio:

- `src/modules/<nome-modulo>/<nome-modulo>.tmpl`
- `src/modules/<nome-modulo>/<nome-modulo>--2.tmpl`

## Regole generali

- i moduli devono essere quanto più possibile indipendenti tra loro
- nei CSS si possono utilizzare le classi di utilità (quelle con prefisso `u-*`), ma **non** incorporare selettori di altri moduli
- [le regole di nomenclatura sono quelle di SUIT CSS](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md)
- i componenti Javascript devono dichiarare tutte le loro dipendenze nell'`index.js` (es. tramite i costrutti `import` o `require`)
- è incoraggiato l'utilizzo del costrutto PostCSS `@extend`, ma **esclusivamente** per estendere le classi di utilità (`u-*`)

Negli snippet HTML è possibile utilizzare i costrutti del [linguaggio di templating nunjucks](https://mozilla.github.io/nunjucks/).

I CSS vengono processati tramite PostCSS (e i relativi plugin presentati nella sezione [Tecnologie](tecnologie)) al momento dell'esecuzione di `npm run build`.

Nei file Javascript è possibile utilizzare la sintassi [ECMAScript 2015](https://babeljs.io/docs/learn-es2015/).

{% include '_footer.md' %}
