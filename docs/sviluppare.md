---
order: 3
title: Utilizzare l'ambiente di sviluppo
label: Utilizzare l'ambiente di sviluppo
---

#### Premessa

La procedura di seguito descritta è rivolta ad utenti con esperienza, in particolare:

* chi desidera **contribuire allo sviluppo del Web Toolkit**
* chi vuole **personalizzare il CSS** per realizzare quindi un "tema" grafico specifico

## Ottenere il codice sorgente

Per ottenere il codice sorgente puoi fare riferimento al [repository](https://github.com/italia/design-web-toolkit) del Web Toolkit su GitHub, utilizzando il software di versionamento [Git](https://git-scm.com/).

Dopo aver [installato Git](https://git-scm.com/book/it/v1/Per-Iniziare-Installare-Git), puoi effettuare una copia locale del repository digitando da linea di comando:

```
git clone https://github.com/italia/design-web-toolkit
```

L'utilizzo di Git permette di mantenere il codice sorgente sincronizzato con i nuovi rilasci del toolkit, nonché di contribuire al progetto proponendo di incorporare le proprie modifiche nella linea principale di sviluppo, vedi anche:

* [Fork a repo](https://help.github.com/articles/fork-a-repo/)
* [Using pull request](https://help.github.com/articles/using-pull-requests/)

#### Installare le dipendenze

Per poter compilare il codice sorgente (CSS / JS) è richiesta l'installazione di [Node.js / npm](https://nodejs.org).

Terminata l'installazione, la seguente sequenza di comandi eseguiti all'interno della directory del Web Toolkit completerà il download e l'installazione delle librerie richieste per lo sviluppo:

```
npm install
```

#### Compilazione del codice sorgente

Per compilare il codice sorgente e quindi generare i file minificati nella cartella `build`, è necessario eseguire il comando seguente:

```
npm run build
```

#### Modificare il codice sorgente

Per poter visualizzare la styleguide in locale (la documentazione che stai leggendo, con tutti i diversi componenti grafici) puoi sostituire come ultimo passaggio (al posto di `npm run build`) il comando seguente e visitare con il browser la pagina [http://localhost:1310](http://localhost:1310):

```
npm run watch
```

A questo punto è possibile iniziare a modificare i file sorgente: qualsiasi modifica effettuata ai fogli di stile CSS, Javascript e/o template HTML risulterà immediatamente visibile nel browser, senza dover ricaricare manualmente la pagina o lanciare di nuovo il comando di build, grazie allo script `npm run watch` che controlla le modifiche e lancia il processo di build automaticamente.

## Struttura delle cartelle

La directory `src` contiene le sotto-directory:

- **components** - CSS/Javascript/HTML dei componenti autonomi dell'interfaccia
- **modules** - CSS/Javascript/HTML degli elementi complessi dell'interfaccia
- **fonts** - il font Titillium Web e le direttive CSS @font-face relative
- **icons** - le icone svg / png utilizzate nel progetto e il CSS per l'*icon font*
- **legacy** - CSS per supportare i vecchi browser
- **scripts** - Javscript "globali" (non legati a una particolare componente dell'interfaccia)
- **templates** - template HTML per elementi del layout e pagine web
- **themes** - il foglio di stile con le personalizzazioni per uno specifico tema (es. colore principale dal quale viene declinata l'intera *palette*)
- **utils** - CSS contenenti classi di utilità generica (margini, padding, tipografia responsive, ...)
- **vendor** - Javascript da incorporare per garantire un minimo grado di compatibilità con i browser obsoleti (IE8/9)

```
.
├── docs
└── src
    ├── components
    │   └── ...
    ├── fonts
    │   └── titillium
    │       └── font
    ├── icons
    │   └── ita
    │       ├── font
    │       ├── png
    │       └── svg
    ├── legacy
    ├── modules
    │   └── ...
    ├── scripts
    ├── templates
    │   ├── layout
    │   ├── pages
    │   └── ...
    ├── themes
    │   └── pac
    ├── utils
    │   ├── borders
    │   ├── colors
    │   └── ...
    └── vendor
```

## Compatibilità con altri framework

Se utilizzi già un framework CSS all'interno del tuo progetto, ma hai intenzione di incorporare *anche* uno o più moduli del toolkit, puoi creare una *build* personalizzata volta a risolvere eventuali incompatibilità che potrebbero incorrere includendo il CSS/JS *as-is*.

**Scegliendo selettivamente i singoli moduli prima della fase di compilazione** puoi escludere dall'output il codice di quelli che non vuoi utilizzare.

In questo modo si evitano eventuali conflitti con i plugin Javascript e i nomi delle classi CSS e al contempo si riduce la dimensione dei file che il browser deve scaricare per visualizzare le pagine.

#### Configurazione dinamica dei moduli da includere o escludere

Per escludere dai CSS/JS generati alcuni moduli e/o includerne selettivamente altri edita il file [config.js](https://github.com/italia/design-web-toolkit/blob/master/config.js) contenuto nella directory radice del toolkit prima di effettuare una nuova `build`.

Il file contiene due liste di **espressioni regolari**:

* l'array `CONFIG.excludes` è la *blacklist* con i percorsi su filesystem dei moduli da escludere
* l'array `CONFIG.includes` è la *whitelist* con i percorsi su filesystem dei moduli da includere

#### Esempi di utilizzo di blacklist / whitelist

Per includere solo il modulo che realizza la visualizzazione ad albero (*treeview*) più uno stile di base per la lista dei link (*linklist*) utilizza la seguente whitelist:

```
CONFIG.includes = [
    '(.*)theme(.*)',
    '(.*)utils(.*)',
    '(.*)linklist(.*)',
    '(.*)treeview(.*)',
]
```

Per escludere i moduli che non verrebbero utilizzati (es. carousel, spid), puoi utilizzare una blacklist:

```
CONFIG.excludes = [
    '(.*)carousel(.*)',
    '(.*)spid(.*)',
]
```

Per escludere `normalize.css` (perché eventualmente già incluso dal tuo framework):

```
CONFIG.excludes = [
    '(.*)normalize(.*)',
]
```

Dopo aver modificato il file `config.js`, l'output conterrà esclusivamente il CSS e il Javascript dei moduli che hai configurato. Ciò si può ottenere eseguendo i seguenti comandi:

* eseguendo `npm run build:css` si ottiene in output il file `build/build.css`
* eseguendo `npm run build:js` si ottiene in output il file `build/IWT.min.js`


{% include '_footer.md' %}
