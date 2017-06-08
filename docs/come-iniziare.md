---
order: 3
title: Come iniziare
label: Come iniziare
---

## La styleguide

I componenti grafici del toolkit sono presentati tramite una styleguide;
puoi visualizzarli navigando dal menu "Componenti":

- **Components**: elementi autonomi dell'interfaccia (form, tipografia, tabelle, griglia responsive, ...)  
- **Modules**: elementi che dipendono da altri componenti (header, footer, ...)
- **Templates**: template HTML di pagine intere o parti del layout
- **Utils**: componenti di utilità (margini, padding, colori, tipografia, ...)
- **Icons**: icone personalizzate in formato SVG, PNG e icon font

Nella pagina che illustra ogni elemento è visibile in calce il template HTML che lo realizza.

## Utilizzo del toolkit

Per utilizzare i componenti all'interno del tuo sito è necessario<br>
includere, oltre l'HTML, i fogli di stile (CSS) e i Javascript (JS) necessari.

Puoi scaricare i file CSS / JS già compilati da incorporare in ogni pagina:<br>
**[CSS / Javascript già compilati](https://github.com/italia/ita-web-toolkit/tree/gh-pages/ita-web-toolkit/build)**

In produzione vanno inclusi i file:

```
.
├── build.css
├── vendor/modernizr.js
├── vendor/jquery.min.js
└── IWT.min.js
```

facendo riferimento al
**[template generico di esempio](https://raw.githubusercontent.com/italia/ita-web-toolkit/gh-pages/ita-web-toolkit/build/index.html)**

### File Javascript di componenti opzionali

I file contenuti nella directory `build` del tipo

```
├── 0.chunk.js
├── 1.chunk.js
├── ...
```

sono Javascript associati a componenti dell'interfaccia opzionali; vengono **caricati automaticamente** a runtime
solo dove il componente (es. carousel) viene effettivamente utilizzato nell'HTML.

Questo meccanismo permette di incorporare esempi e widget Javascript complessi nel toolkit, senza che ciò impatti sulla dimensione
finale del file `IWT.min.js` riducendo quindi i tempi di download e parsing durante il rendering delle pagine web.

Tail file devono esser presenti nella stessa directory dove è contenuto il file `IWT.min.js`;
se il percorso di questa directory differisce da quello di default (`/build`), è necessario specificare
il percorso alternativo, **relativo alla radice del sito web**, come visibile nel
**[template generico di esempio](https://raw.githubusercontent.com/italia/ita-web-toolkit/gh-pages/build/index.html)**:

{% raw %}
```
<!-- sostituire questo percorso con quello
     degli assets javascript nel proprio sito web:
     è il percorso, relativo alla webroot, della directory
     che contiene il file IWT.min.js e i file *.chunk.js -->

<script>__PUBLIC_PATH__ = '/assets/javascript/'</script>
```
{% endraw %}

### Altri contenuti della directory build

- `src/icons`: icone personalizzate in formato SVG, PNG e *icon font*.
- `*.map`: file utili solo in fase di debug e possono essere omessi in produzione.
- `*.styleguide.*`: file che definiscono l'aspetto della styleguide e possono essere omessi in produzione.

## Dipendenze esterne

Nella directory `vendor` si trovano i *polyfill* che è consigliabile includere per garantire la compatibilità
con i browser obsoleti (IE8/9):

```
.
├── polyfill.min.js
├── rem.min.js
├── respond.min.js
├── selectivizr.js
└── slice.js
```

La directory `vendor` Contiene inoltre la [libreria jQuery](https://jquery.com/),
una dipendenza necessaria per alcuni componenti del toolkit.

Molti CMS o framework CSS vengono già distribuiti con una loro versione della libreria `jQuery`;
in questo caso non è necessario utilizzare quella del toolkit, a patto che venga inclusa
nell'HTML prima del file `IWT.min.js`.

I componenti del toolkit lavorano con versioni di jQuery >= 1.11.x, tuttavia
se vuoi garantire la compatibilità con IE8 ricorda di utilizzare versioni
di jQuery inferiori alla 2.x.

## Personalizzare lo stile (CSS)

Se vuoi personalizzare gli elementi grafici (es. colori)
utilizzando i file già compilati dovrai necessariamente **sovrascrivere** le classi del CSS di base (`build.css`)
includendo un tuo ulteriore CSS contenente le direttive *custom*;
questa metodologia non è ottimale se le personalizzazioni
sono particolarmente complesse: in questo caso è consigliato
seguire la procedura descritta in "[Utilizzare l'ambiente di sviluppo](sviluppare)"
agendo direttamente sul codice sorgente dei fogli di stile del toolkit
per realizzare una *build* personalizzata, prima di integrare il CSS nel layout.

[Tecnologie utilizzate](tecnologie)

{% include '_footer.md' %}
