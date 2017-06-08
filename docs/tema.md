---
order: 40
title: Realizzare un tema
label: Realizzare un tema
---

All'interno della directory `src/themes` è presente un CSS di esempio in cui viene mostrato come
sovrascrivere le variabili utilizzate all'interno del toolkit:

```
/* src/themes/pac/index.css */
:root {
  --Color-primary: #a8336c;

  --Pac-font-family-sans: Titillium Web, HelveticaNeue-Light, Helvetica Neue Light,
                          Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;
}

.t-Pac {
  font-family: var(--Pac-font-family-sans);
}
```

Similmente è possibile sovrascrivere qualsiasi variabile contenuta nei moduli CSS,
modificando ad esempio i colori che caratterizzano l'aspetto grafico dei vari elementi.

### Variabili CSS

Alcune variabili che è possibile sovrascrivere:

```
--Color-focus
--Color-primary

--Button-default-bg
--Button-default-color
--Button-default-border
--Button-danger-bg
--Button-danger-color
--Button-danger-border
--Button-info-bg
--Button-info-color
--Button-info-border

--Table-border-color
--Table-stripe-color

--Prose-color-link
--Prose-color-link-hover
--Prose-color-link-visited

--Form-input-border-color
--Form-state-invalid-border-color
--Form-state-invalid-label-color
--Form-state-invalid-message-color
--Form-state-warning-border-color
--Form-state-warning-label-color
--Form-state-warning-message-color

--Alert-error-bg
--Alert-error-color
--Alert-error-border
--Alert-error-background-image
--Alert-warning-bg
--Alert-warning-color
--Alert-warning-border
--Alert-warning-background-image
--Alert-success-bg
--Alert-success-color
--Alert-success-border
--Alert-success-background-image
--Alert-info-bg
--Alert-info-color
--Alert-info-border
--Alert-info-background-image

--Offcanvas-width
--Offcanvas-max-width

--Linklist-border-color
--Linklist-link-padding
--Linklist-link-arrow-width

--Treeview-link-padding
--Treeview-link-arrow-width
--Treeview-link-arrow-up
--Treeview-link-arrow-down

--Hero-height
--Hero-background-img
  ...
```

### Personalizzare i colori

La palette di colori è generata automaticamente a partire da un colore di base (`--Color-primary`) ([`src/utils/colors/index.css`](https://github.com/italia/ita-web-toolkit/blob/master/src/utils/colors/index.css))
applicando tinte e tonalità secondo quanto descritto nel [relativo paragrafo delle Linee Guida](http://design.italia.it/linee-guida/colori/);
in questo modo è sufficiente sovrascrivere la variabile `--Color-primary` per ottenere l'**intera palette**.

Per applicare font e colori personalizzati bisogna:

1. modificare il file del tema `src/themes/pac/index.css` sovrascrivendo le variabili CSS
2. effettuare una nuova *build* del toolkit tramite `npm run build` (vedi ["Utilizzare l'ambiente di sviluppo"](sviluppare))
3. incorporare i CSS generati (contenuti nella directory `build`) nei template HTML

In alternativa, è possibile modificare i CSS *mentre* il comando `npm run watch` è in esecuzione
(senza effetuare quindi una nuova build per ogni modifica); in questo caso
è possibile visualizzare immediatamente il risultato delle modifiche accedendo con il browser
all'indirizzo della styleguide (`http://localhost:1310`) e navigando tra i componenti dell'interfaccia.

### Nomenclatura delle regole CSS personalizzate

Tutte le modifiche che riguardano uno specifico **tema** vanno applicate assegnando al tag `body`
la **classe** utilizzata in `src/themes/*/index.css` (nel caso specifico `t-Pac`, ma può esser scelta arbitrariamente).

```
<!-- nel template HTML -->
<body class="t-Pac"> ...
```

Ciò significa che tale classe deve comparire **necessariamente** come prefisso nei selettori
di ogni nuova regola CSS introdotta dal tema (e/o qualsiasi
modifica ai moduli effettuata sovrascrivendo le regole originali).

Ad esempio, all'interno di `src/themes/index.css`, per applicare un `padding` alla classe `.Alert` dovrai utilizzare:

```
.t-Pac .Alert {
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

{% include '_footer.md' %}
