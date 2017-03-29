---
order: 15
title: Principali tecnologie utilizzate
label: Tecnologie utilizzate
---

Il toolkit è basato su alcuni software open source che svolgono
diversi task e di cui è bene possedere una conoscenza anche sommaria
prima di procedere a modificare i sorgenti.

## npm

Il tool [npm](https://docs.npmjs.com/getting-started/what-is-npm) è utilizzato per
la gestione delle dipendenze necessarie sia alla fase di sviluppo / compilazione
che per i componenti Javascript integrati lato client (nel browser).

La lista delle librerie utilizzate è visibile nel file [`package.json`](https://github.com/italia/ita-web-toolkit/blob/master/package.json).

Prima di incorporare nuove dipendenze è buona pratica verificare se siano già presenti nel
[registro npm](https://www.npmjs.com/) in modo da poterle integrare più agevolmente.

## SUIT CSS

[SUIT CSS](http://suitcss.github.io/) è una metodologia di implementazione
per i fogli di stile CSS a corredo di un insieme di utilità che ne facilitano
la manutenzione.

Relativamente al toolkit:

1. vengono adottate le
[convenzioni di nomenclatura](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md)
SUIT CSS nella stesura del codice dei fogli di stile

2. vengono utilizzate le [classi di utilità](https://github.com/suitcss/suit/blob/master/doc/utilities.md)
fornite dalla libreria. Si consiglia in particolare di far riferimento alla
[documentazione online delle classi SUIT CSS](https://github.com/suitcss/utils)
con particolare riferimento alla [griglia responsive](https://github.com/suitcss/components-grid/)

3. viene utilizzato il [preprocessore CSS di SUIT](https://github.com/suitcss/preprocessor)
integrato da un insieme di plugin *ad-hoc*; è possibile visualizzare la lista dei plugin
nel file [`.postcss.js`](https://github.com/italia/ita-web-toolkit/blob/master/.postcss.js)
contenuto nella directory radice del *repository*.

È possibile consultare l'
[elenco e la documentazione di tutte le classi SUIT CSS](https://github.com/suitcss/suit/blob/master/doc/api.md).

## PostCSS

[PostCSS](http://postcss.org/) è un tool che permette di manipolare i CSS tramite javascript.

I fogli di stile del toolkit vengono trasformati tramite PostCSS: in questo modo è possibile
usufruire di alcuni costrutti non standard che agevolano il mantenimento del codice.
Puoi far riferimento alla documentazione online dei singoli plugin:

- [postcss-devtools](https://github.com/postcss/postcss-devtools)
- [postcss-easy-import](https://github.com/TrySound/postcss-easy-import)
- [postcss-custom-properties](https://github.com/postcss/postcss-custom-properties)
- [postcss-custom-media](https://github.com/postcss/postcss-custom-media)
- [postcss-nesting](https://github.com/jonathantneal/postcss-nesting)
- [postcss-extend](https://github.com/travco/postcss-extend)
- [postcss-color-function](https://github.com/postcss/postcss-color-function)
- [postcss-inline-svg](https://github.com/TrySound/postcss-inline-svg)
- [postcss-assets](https://github.com/assetsjs/postcss-assets)
- [postcss-url](https://github.com/postcss/postcss-url)
- [postcss-calc](https://github.com/postcss/postcss-calc)
- [autoprefixer](https://github.com/postcss/autoprefixer)
- [postcss-pseudoelements](https://github.com/axa-ch/postcss-pseudoelements)
- [postcss-flexbugs-fixes](https://github.com/luisrudge/postcss-flexbugs-fixes)
- [postcss-reporter](https://github.com/postcss/postcss-reporter)

## Verifica della sintassi

Per il *linting* (ovvero, l'analisi del codice in cerca di errori e/o costrutti con sintassi errata)
vengono utlizzati i due tool:

- [stylelint](http://stylelint.io/) - per il codice CSS
- [ESLint](http://eslint.org/) - per il codice Javascript

## Generazione della styleguide e dei moduli CSS / JS

Questi due tool sono attivati dagli *script npm* secondo le modalità descritte
nel capitolo successivo: ["Utilizzare l'ambiente di sviluppo"](sviluppare):

- [fractal](http://fractal.build) è utilizzato per generare la *styleguide* (l'elenco navigabile dei componenti grafici)
- [webpack](https://webpack.github.io) organizza i moduli CSS / Javascript in modo da poter esser utilizzati in produzione

Non è necessario conoscere il funzionamento di questi software che vengono qui citati per completezza.

[Utilizzare l'ambiente di sviluppo](sviluppare)

{% include '_footer.md' %}
