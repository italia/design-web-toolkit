---
order: 3
title: Come iniziare
label: Come iniziare
---

Puoi visualizzare i componenti grafici nella styleguide
navigando dal menu "Componenti":

- **Components**: elementi base (form, tipografia, tabelle, griglia responsive, ...)  
- **Modules**: elementi e "widget" complessi (carousel, accordion, menu, ...)
- **Templates**: template HTML di pagine intere o porzioni rilevanti di queste
- **Utils**: componenti di utilità (margini, padding, colori, tipografia, ...)

Nella pagina che illustra ogni elemento è visibile il template HTML che lo realizza:
il **codice HTML** a corredo produce l'output visualizzato se vengono contestualmente
utilizzati i fogli di stile (CSS) e gli script (JS) necessari: è possibile scaricare
i file CSS / JS già compilati e incorporarli in un template HTML
come mostrato nel codice di esempio:

* [CSS / Javascript già compilati](https://github.com/italia-it/ita-web-toolkit/tree/gh-pages/build)
* [`index.html` con layout di pagina di esempio](https://github.com/italia-it/ita-web-toolkit/blob/master/src/_preview.tmpl)

In produzione è necessario includere i seguenti file:

- `IWT.min.js` - il file Javascript minificato, per l'utilizzo degli elementi dinamici
- `build.css` - il CSS con lo stile di base
- `vendor.css` - il CSS degli elementi dinamici appartenenti a progetti esterni al toolkit

La directory `vendor` contiene i *polyfill* che è necessario includere per garantire la compatibilità
con i browser obsoleti (es. IE9).

La directory `src/icons` contiene le icone personalizzate in formato SVG / PNG / icon font.

I file con estensione \*.map sono utili solo in fase di debug e possono essere omessi in produzione.

## Personalizzare lo stile (CSS)

Per personalizzare gli elementi grafici (es. colori)
utilizzando i file già compilati è necessario **sovrascrivere** le classi del CSS di base (`build.css`)
includendo un ulteriore CSS contenente le direttive *custom*;
questa metodologia non è ottimale se le personalizzazioni
sono particolarmente complesse: in questo caso è consigliato
seguire la procedura descritta in "[Utilizzare l'ambiente di sviluppo](sviluppare)"
agendo direttamente sul codice sorgente dei fogli di stile del toolkit
per realizzare una *build* personalizzata, prima di integrare il CSS nel layout.

[Tecnologie utilizzate](tecnologie)
