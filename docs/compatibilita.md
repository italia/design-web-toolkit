---
order: 27
title: Compatibilità con altri framework
label: Compatibilità con altri framework
---

Per chi già utilizza un framework CSS all'interno del proprio progetto, ma ha intenzione di incorporare
*anche* uno o più moduli del toolkit, è possibile creare una *build* personalizzata volta
a risolvere eventuali incompatibilità che potrebbero incorrere includendo il CSS/JS *as-is*.

**Scegliendo selettivamente i singoli moduli prima della fase di compilazione**
è possibile escludere dall'output il codice di quelli che non si vuol
utilizzare nel proprio sito.

In questo modo si evitano eventuali conflitti con i plugin Javascript e i nomi delle classi CSS
e al contempo si riduce la dimensione dei file che il browser deve scaricare per visualizzare le pagine.

### Configurazione dinamica dei moduli da includere o escludere

Per escludere (dall'output della build) alcuni moduli e/o includerne selettivamente altri
è sufficiente editare il file [config.js](https://github.com/italia-it/ita-web-toolkit/blob/master/config.js)
contenuto nella directory radice del toolkit prima di effettuare una nuova `build`.

Il file contiene due liste di **espressioni regolari**:

- l'array `CONFIG.excludes` è la *blacklist* con i percorsi su filesystem dei moduli da escludere
- l'array `CONFIG.includes` è la *whitelist* con i percorsi su filesystem dei moduli da includere

#### Esempi di utilizzo di blacklist / whitelist

Per includere solo il modulo che realizza la visualizzazione ad albero (*treeview*)
più uno stile di base per la lista dei link (*linklist*) declinata secondo il tema corrente
si può utilizzare la seguente whitelist:

```
CONFIG.includes = [
    '(.*)theme(.*)',
    '(.*)utils(.*)',
    '(.*)linklist(.*)',
    '(.*)treeview(.*)',
]
```

Per escludere i moduli che non verrebbero utilizzati (es. carousel, spid),
va invece utilizzata una blacklist:

```
CONFIG.excludes = [
    '(.*)carousel(.*)',
    '(.*)spid(.*)',
]
```

Per escludere `normalize.css` (perché eventualmente già incluso dal proprio framework):

```
CONFIG.excludes = [
    '(.*)normalize(.*)',
]
```

Dopo aver modificato il file `config.js`:

- eseguendo `npm run build:css` si ottiene in output il file `build/build.css`
- eseguendo `npm run build:js` si ottiene in output il file `build/IWT.min.js`

L'output conterrà esclusivamente il CSS e il Javascript dei moduli configurati.

[Struttura del filesystem](struttura)
