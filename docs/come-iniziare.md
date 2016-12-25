---
order: 3
title: Come iniziare
label: Come iniziare
---

## La styleguide

I componenti grafici del toolkit sono presentati tramite una styleguide;
puoi visualizzarli navigando dal menu "Componenti":

- **Components**: elementi base (form, tipografia, tabelle, griglia responsive, ...)  
- **Modules**: elementi grafici e interattivi autonomi (carousel, accordion, menu, ...)
- **Extra**: moduli personalizzati che dipendono da altri moduli (bottone spid, tasto per condivisione sui social, ...)
- **Templates**: template HTML di pagine intere o parti del layout
- **Utils**: componenti di utilità (margini, padding, colori, tipografia, ...)
- **Icons**: icone personalizzate in formato SVG, PNG e icon font

Nella pagina che illustra ogni elemento è visibile in calce il template HTML che lo realizza.

## Utilizzo del toolkit

Per utilizzare i componenti all'interno del tuo sito è necessario<br>
includere, oltre l'HTML, i fogli di stile (CSS) e i Javascript (JS) necessari.

Puoi scaricare i file CSS / JS già compilati da incorporare in ogni pagina:<br>
**[CSS / Javascript già compilati](https://github.com/italia-it/ita-web-toolkit/tree/gh-pages/build)**

In produzione vanno inclusi almeno i file:

```
.
├── build.css
├── vendor.css
├── vendor/modernizr.js
├── vendor/jquery.min.js
└── IWT.min.js
```

facendo riferimento al
**[template generico di esempio](https://raw.githubusercontent.com/italia-it/ita-web-toolkit/master/src/_preview.tmpl)**

La directory `src/icons` contiene le icone personalizzate in formato SVG, PNG e *icon font*.

I file con estensione \*.map sono utili solo in fase di debug e possono essere omessi in produzione.

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

Molti CMS o framework CSS includono già una loro distribuzione della libreria `jQuery`;
in questo caso non è necessario utilizzare quella distribuita con il toolkit,
a patto che venga inclusa prima del file `IWT.min.js`.

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
