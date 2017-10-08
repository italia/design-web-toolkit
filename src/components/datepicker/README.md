## Inserimento di una data 

Questa guida spiega brevemente come presentare all'utente dei campi per 
l'inserimento di una data.

### Tre campi di testo

Come regola generale, tre differenti campi di testo di tipo "number" 
sono il modo più indicato per presentare all'utente una form per 
l'inserimento di una data.

Trovate un esempio del codice da utilizzare per la creazione della form in 
questo modulo.

Vale la regola generale per cui è bene non usare javascript
per far avanzare l'utente in modo automatico tra un campo e l'altro
della form, in quanto renderebbe controintuitiva la navigazione da tastiera.

### Datepicker

L'utilizzo del widget datepicker mostrato nell'esempio di questo modulo
è consigliato solo nel caso all'utente venga chiesto di inserire una data
che sia verosimilmente prossima alla data corrente o quando conoscere il
giorno della specifica data possa essere utile.

Come buona regola è consigliato l'utilizzo di un bottone esterno al campo di
input per triggerare il datepicker. Questo permette di evitare l'apertura
del widget al focus sul campo e l'eventuale utilizzo di widget nativi per
il campo di tipo data sui device mobile.

Un caso d'uso per il datepicker, quando si sta chiedendo di decidere una data per 
fissare un appuntamento.
Sconsigliato invece l'utilizzo del datepicker se si sta chiedendo all'utente
di inserire una data di nascita o una data che segna qualche evento memorabile
(ad esempio data di matrimonio o acquisto immobile).
In questi casi sono consigliati i tre campi separati di cui al primo esempio.
