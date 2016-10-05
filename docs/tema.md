---
order: 40
title: Realizzare un tema
label: Realizzare un tema
---

All'interno della directory `src/themes` è presente un CSS di esempio in cui viene mostrato come
sovrascrivere le variabili utilizzate all'interno del toolkit:

```
/* src/themes/index.css */
:root {
  --Color-primary: #a8336c;

  --Pac-font-family-sans: Titillium Web, HelveticaNeue-Light, Helvetica Neue Light,
                          Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;
}

.Pac {
  font-family: var(--Pac-font-family-sans);
}
```

Similmente è possibile sovrascrivere qualsiasi variabile contenuta nei moduli CSS,
modificando ad esempio i colori che caratterizzano l'aspetto grafico dei vari elementi.

Per applicare font e colori personalizzati bisogna:

1. modificare il file del tema `src/themes/index.css` sovrascrivendo le variabili CSS
2. effettuare una nuova *build* del toolkit tramite `npm run build` (vedi ["Utilizzare l'ambiente di sviluppo"](/docs/sviluppare))
3. incorporare i CSS generati nei template HTML

La palette di colori è costruita automaticamente (`src/utils/colors/index.css` @TODO)
applicando tinte e tonalità secondo quanto descritto nel [relativo paragrafo delle Linee Guida](http://design.italia.it/linee-guida/colori/);
in questo modo è sufficiente sovrascrivere la variabile `--Color-primary` per ottenere l'intera *palette*.

Tutte le modifiche che riguardano uno specifico tema vanno applicate assegnando al tag `body`
la **classe** utilizzata in `src/themes/index.css` (nel caso specifico `Pac`, ma può esser scelta arbitrariamente).

```
<!-- nel template HTML -->
<body class="Pac"> ...
```

Ciò significa che tale classe deve comparire **necessariamente** come prefisso nei selettori
di ogni nuova regola CSS introdotta dal tema (e/o qualsiasi
modifica ai moduli effettuata sovrascrivendo le regole originali).

Ad esempio, all'interno di `src/themes/index.css`, per applicare un `padding` alla classe `.Alert` utilizzerò:

```
.Pac .Alert {
  padding-right: 1em;
}
```

e **non** quindi:

```
/* No !!! Mai senza prefisso ! */
.Alert {
  padding-right: 1em;
}
```
