### 1.0.0-alpha

* BREAKING CHANGE: Modificato componente Accordion
* BREAKING CHANGE: Modificato componente Dropdown
* BREAKING CHANGE: Modificato componente Megamenu
* BREAKING CHANGE: Modificato componente Tooltip

* BREAKING CHANGE: Modifcato componente Card
  - spostato tra i template HTML (rimosso il CSS)

* BREAKING CHANGE: Modificato modulo Header

* Aggiunto componente 'Separator'
* Aggiunto componente 'Pills'

* Rivista struttura directory con template HTML:
  - components: componenti autonomi dell'interfaccia
  - modules: componenti che dipendono da altri componenti

* Modificato il CSS del modulo Header per permettere di impostare i colori tramite variabili
* Modificato il CSS del componente Treeview (palette dei colori e icona)

* Aggiornato ambiente di build a webpack v2 + code splitting
* Eliminato vendor.css (confluito in build.css)

* Aggiornato a versionamento semantico (1.0.0)

### 0.2.0-alpha12

* Aggiornati pacchetti suitcss in package.json

* Aggiunto npm-shinkwrap per lock delle nuove versioni dei pacchetti:
  - postcss-easy-import (per permettere import tramite globbing)
  - stylelint-config-suitcss (per evitare warning con stylelint)

* Modificato il comportamento della Treeview aggiungendo un handler
* Modificata la line-height di default per gli heading in .Prose
* Modificato import dei CSS tramite pattern di globbing (in index.css)

### 0.1.0-alpha11

* Integrato nuovo tema per la styleguide
* Aggiunto nuovo template - pagina di ingresso al servizio
* Aggiunto nuovo template - pagina di errore (403, 404)

### 0.1.0-alpha10

* Aggiunta icona instagram
* Aggiunto nuovo IDP SPID

### 0.1.0-alpha9

* Fix nuovo percorso repository

### 0.1.0-alpha8

* Fix tema fractal / styleguide

### 0.1.0-alpha7

* Nuovo tema fractal / styleguide

### 0.1.0-alpha6

* Fix #35 moduli mancant in package.json
* Fix layout footer comuni

### 0.1.0-alpha5

* Fix processo di build su sistemi Windows
* Fix accessibilità e HTML semantico

### 0.1.0-alpha4

* Aggiunti script per generare screenshot (pdf e svg) dei componenti

### 0.1.0-alpha3

* Aggiunto template di esempio con menu per Comuni (componente 'hero')
* Modificato header (posizione tasti per scelta della lingua e dropdown)
* Modificato menu orizzontale (posizione link di accesso ai servizi)

### 0.1.0-alpha2

* Aggiunta la possibilità di definire quali moduli CSS includere (config.js)
* Aggiunti bottoni SPID tramite dropdown

### 0.1.0-alpha1

* Release iniziale
