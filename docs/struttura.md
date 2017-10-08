---
order: 30
title: Struttura del file system
label: Struttura del file system
---

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

[Realizzare un tema](tema)

{% include '_footer.md' %}
