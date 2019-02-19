---
order: 2
title: Come iniziare
label: Come iniziare
---

I componenti grafici del toolkit sono presentati tramite la styleguide inclusa in questo sito web, accessibile attraverso il menu alla tua sinistra:

- **Components**: elementi autonomi dell'interfaccia (form, tipografia, tabelle, griglia responsive, ...)  
- **Modules**: elementi che dipendono da altri componenti (header, footer, ...)
- **Templates**: template HTML di pagine intere o parti del layout
- **Utils**: componenti di utilità (margini, padding, colori, tipografia, ...)
- **Icons**: icone personalizzate in formato SVG, PNG e icon font

Nella pagina che illustra ogni singolo elemento è visibile in calce il template HTML che lo realizza.

## Come includere il Web Toolkit

Per utilizzare i componenti all'interno del tuo sito è necessario includere, oltre all'HTML, i fogli di stile (CSS) e i Javascript (JS) necessari.

Puoi scaricare i file CSS e i file Javascript già compilati da incorporare in ogni pagina:

<a role="button" href="https://github.com/italia/design-web-toolkit/tree/gh-pages/build" class="Button Button--default Button--shadow Button--round u-text-r-xs">Scarica il Web Toolkit</a>

Facendo riferimento al **[template HTML di esempio](https://raw.githubusercontent.com/italia/design-web-toolkit/gh-pages/build/index.html)**, vanno inclusi nella tua pagina HTML i file:

```
.
├── assets/*
├── build.css
├── vendor/modernizr.js
├── vendor/jquery.min.js
└── IWT.min.js
```

Gli altri file contenuti nella directory `build` sono Javascript associati a componenti dell'interfaccia opzionali:

```
├── 0.chunk.js
├── 1.chunk.js
├── ...
```

Tali file vengono **caricati automaticamente** a runtime solo dove il componente (es. carousel) viene effettivamente utilizzato nell'HTML.

Questo meccanismo permette di incorporare esempi e widget Javascript complessi nel toolkit, senza che ciò abbia impatto sulla dimensione finale del file `IWT.min.js`, riducendo quindi i tempi di scaricamento e parsing durante il rendering delle pagine.

Tali file devono essere comunque presenti nella stessa directory dove è situato il file `IWT.min.js`. Se il percorso di questa directory differisce da quello di default (`/build`), è necessario specificare il percorso alternativo, **relativo alla radice del sito web**.

{% raw %}
```
<!-- sostituire questo percorso con quello
     degli assets javascript nel proprio sito web:
     è il percorso, relativo alla webroot, della directory
     che contiene il file IWT.min.js e i file *.chunk.js -->

<script>__PUBLIC_PATH__ = '/assets/javascript/'</script>
```
{% endraw %}

#### Altri file

Oltre ai file CSS e Javascript già descritti, nella cartella `build` sono presenti i seguenti file:

- `src/icons`: icone personalizzate in formato SVG, PNG e *icon font*.
- `*.map`: file utili solo in fase di debug e possono essere omessi in produzione.
- `*.styleguide.*`: file che definiscono gli stili dell'interfaccia della styleguide che stai consultando e non devono essere inclusi in produzione.

#### Dipendenze esterne

Nella directory `vendor` si trovano i *polyfill* che è necessario includere soltanto se si desidera garantire la compatibilità con browser obsoleti (IE8/9):

```
.
├── polyfill.min.js
├── rem.min.js
├── respond.min.js
├── selectivizr.js
└── slice.js
```

La directory `vendor` Contiene inoltre la [libreria jQuery](https://jquery.com/), una dipendenza necessaria per alcuni componenti del toolkit.

Molti CMS o framework CSS vengono già distribuiti con una loro versione della libreria `jQuery`; in questo caso non è necessario utilizzare quella del toolkit, a patto che venga inclusa nell'HTML prima del file `IWT.min.js`.

## Personalizzare lo stile (CSS)

Se vuoi personalizzare gli elementi grafici (es. colori) utilizzando i file già compilati dovrai necessariamente **sovrascrivere** le classi del CSS di base (`build.css`) includendo un tuo ulteriore CSS contenente le direttive *custom*.

Questa metodologia non è ottimale se le personalizzazioni sono particolarmente complesse: in questo caso è consigliato seguire la procedura descritta alla sezione "[Utilizzare l'ambiente di sviluppo](sviluppare)" agendo direttamente sul codice sorgente dei fogli di stile del toolkit per realizzare una *build* personalizzata, prima di integrare il CSS nel layout.

## Tecnologie utilizzate

Il toolkit è basato su alcuni software open source che svolgono
diversi task e di cui è bene possedere una conoscenza anche sommaria
prima di procedere a modificare i sorgenti.

#### npm

Il tool [npm](https://docs.npmjs.com/getting-started/what-is-npm) è utilizzato per
la gestione delle dipendenze necessarie sia alla fase di sviluppo / compilazione
che per i componenti Javascript integrati lato client (nel browser).

La lista delle librerie utilizzate è visibile nel file [`package.json`](https://github.com/italia/design-web-toolkit/blob/master/package.json).

Prima di incorporare nuove dipendenze è buona pratica verificare se siano già presenti nel
[registro npm](https://www.npmjs.com/) in modo da poterle integrare più agevolmente.

#### SUIT CSS

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
nel file [`.postcss.js`](https://github.com/italia/design-web-toolkit/blob/master/.postcss.js)
contenuto nella directory radice del *repository*.

È possibile consultare l'
[elenco e la documentazione di tutte le classi SUIT CSS](https://github.com/suitcss/suit/blob/master/doc/api.md).

#### PostCSS

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

#### Verifica della sintassi

Per il *linting* (ovvero, l'analisi del codice in cerca di errori e/o costrutti con sintassi errata)
vengono utlizzati i due tool:

- [stylelint](http://stylelint.io/) - per il codice CSS
- [ESLint](http://eslint.org/) - per il codice Javascript

#### Generazione della styleguide e dei moduli CSS / JS

Questi due tool sono attivati dagli *script npm* secondo le modalità descritte
nel capitolo successivo: ["Utilizzare l'ambiente di sviluppo"](sviluppare):

- [fractal](http://fractal.build) è utilizzato per generare la *styleguide* (l'elenco navigabile dei componenti grafici)
- [webpack](https://webpack.github.io) organizza i moduli CSS / Javascript in modo da poter esser utilizzati in produzione

Non è necessario conoscere il funzionamento di questi software che vengono qui citati per completezza.

[Utilizzare l'ambiente di sviluppo](sviluppare)

{% include '_footer.md' %}
