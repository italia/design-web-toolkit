---
order: 27
title: Compatibilità con altri framework
label: Compatibilità con altri framework
---

Se utilizzi già un framework CSS all'interno del tuo progetto, ma hai intenzione di incorporare
*anche* uno o più moduli del toolkit, puoi creare una *build* personalizzata volta
a risolvere eventuali incompatibilità che potrebbero incorrere includendo il CSS/JS *as-is*.

**Scegliendo selettivamente i singoli moduli prima della fase di compilazione**
puoi escludere dall'output il codice di quelli che non vuoi utilizzare.

In questo modo si evitano eventuali conflitti con i plugin Javascript e i nomi delle classi CSS
e al contempo si riduce la dimensione dei file che il browser deve scaricare per visualizzare le pagine.

### Configurazione dinamica dei moduli da includere o escludere

Per escludere dai CSS/JS generati alcuni moduli e/o includerne selettivamente altri
edita il file [config.js](https://github.com/italia/ita-web-toolkit/blob/master/config.js)
contenuto nella directory radice del toolkit prima di effettuare una nuova `build`.

Il file contiene due liste di **espressioni regolari**:

- l'array `CONFIG.excludes` è la *blacklist* con i percorsi su filesystem dei moduli da escludere
- l'array `CONFIG.includes` è la *whitelist* con i percorsi su filesystem dei moduli da includere

#### Esempi di utilizzo di blacklist / whitelist

Per includere solo il modulo che realizza la visualizzazione ad albero (*treeview*)
più uno stile di base per la lista dei link (*linklist*) utilizza la seguente whitelist:

```
CONFIG.includes = [
    '(.*)theme(.*)',
    '(.*)utils(.*)',
    '(.*)linklist(.*)',
    '(.*)treeview(.*)',
]
```

Per escludere i moduli che non verrebbero utilizzati (es. carousel, spid),
puoi utilizzare una blacklist:

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

Dopo aver modificato il file `config.js`:

- eseguendo `npm run build:css` si ottiene in output il file `build/build.css`
- eseguendo `npm run build:js` si ottiene in output il file `build/IWT.min.js`

L'output conterrà esclusivamente il CSS e il Javascript dei moduli che hai configurato.

[Struttura del filesystem](struttura)

{% include '_footer.md' %}
