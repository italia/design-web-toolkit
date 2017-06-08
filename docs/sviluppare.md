---
order: 20
title: Utilizzare l'ambiente di sviluppo
label: Utilizzare l'ambiente di sviluppo
---

La procedura qui descritta è rivolta sia a chi vuole **contribuire allo sviluppo del toolkit**
sia a chi vuole **utilizzare il CSS personalizzato all'interno di un sito web**
per realizzare quindi un "tema" grafico specifico.

#### Ottenere i sorgenti

Per ottenere i sorgenti puoi scaricare direttamente
l'[archivio compresso](https://github.com/italia/ita-web-toolkit/releases/) da GitHub.

Un'alternativa migliore è il download dei sorgenti tramite
il software di versionamento [Git](https://git-scm.com/);
dopo aver [installato Git](https://git-scm.com/book/it/v1/Per-Iniziare-Installare-Git)
puoi effettuare una copia locale del repository digitando da linea di comando:

```
git clone https://github.com/italia/ita-web-toolkit
```

L'utilizzo di Git permette di mantenere i sorgenti sincronizzati
con i nuovi rilasci del toolkit nonché di contribuire al progetto
proponendo di incorporare le proprie modifiche nella linea principale di sviluppo, vedi anche:

* [Fork a repo](https://help.github.com/articles/fork-a-repo/)
* [Using pull request](https://help.github.com/articles/using-pull-requests/)

#### Installare il software richiesto

Per poter compilare i sorgenti (CSS / JS) è richiesta l'installazione di [Node.js / npm](https://nodejs.org).

Terminata l'installazione, la seguente sequenza di comandi eseguiti all'interno della directory del toolkit
completerà il download e l'installazione delle librerie richieste per lo sviluppo:

```
npm install
```

#### Compilare i sorgenti

Dopo aver eseguito il comando

```
npm run build
```

la directory `build` conterrà i file CSS e Javascript compilati.

#### Modificare i sorgenti

Per poter visualizzare la styleguide in locale (i template HTML con i diversi componenti grafici)
puoi sostituire come ultimo passaggio (al posto di `npm run build`) il comando

```
npm run watch
```

e visitare con il browser la pagina [http://localhost:1310](http://localhost:1310)

A questo punto puoi modificare i sorgenti: qualsiasi modifica effettuata ai fogli di stile CSS,
Javascript e/o template HTML mentre `npm run watch` rimane in esecuzione risulterà immediatamente visibile
nel browser **senza dover ricaricare manualmente la pagina o lanciare il comando di build**.

[Creare o modificare un modulo](moduli)

{% include '_footer.md' %}
