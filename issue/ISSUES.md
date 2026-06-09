# ISSUES - EventBoard

## Issue 1 - Layout base dell'app

**Titolo**

`Impostare il layout base di EventBoard`

**Descrizione**

Creare il layout base dell'app in `App.jsx`.

### Obiettivi

- Inserire un `<header>` principale.
- Mostrare il titolo `EventBoard`.
- Aggiungere un sottotitolo breve sotto il titolo.
- Inserire un contenitore principale per il contenuto della pagina.
- Mostrare sotto l'header il componente `EventList`.

### File coinvolti

- `src/App.jsx`
- eventuali file CSS già presenti nel progetto

### Note

Questa issue modifica la parte alta di `App.jsx`.

---

## Issue 2 - Barra filtri nella parte alta

**Titolo**

`Aggiungere barra filtri in App.jsx`

**Descrizione**

Aggiungere una barra filtri subito sotto il titolo principale dell'app.

### Obiettivi

- Inserire un blocco con label `Filtra per categoria`.
- Inserire un `<select>` con almeno queste opzioni:
  - Tutti
  - Conferenze
  - Workshop
  - Meetup
- Salvare il valore selezionato con `useState`.
- Mostrare temporaneamente il valore selezionato in pagina per verificare che il filtro funzioni.

### File coinvolti

- `src/App.jsx`

### Note

Questa issue modifica la stessa zona di `App.jsx` toccata anche dall'Issue 1.

---

## Issue 3 - Componente EventCard

**Titolo**

`Creare il componente EventCard`

**Descrizione**

Creare un componente React dedicato alla visualizzazione del singolo evento.

### Obiettivi

- Creare `src/components/EventCard.jsx`.
- Ricevere via props:
  - `title`
  - `date`
  - `category`
  - `status`
- Mostrare i dati dentro una card.
- Mostrare un badge con:
  - `Aperto` se lo stato è aperto
  - `Chiuso` se lo stato è chiuso

### File coinvolti

- `src/components/EventCard.jsx`
- `src/components/EventList.jsx`

### Note

Il componente dovrà essere usato da `EventList`.

---

## Issue 4 - Contatore eventi visibili

**Titolo**

`Aggiungere contatore eventi visibili`

**Descrizione**

Mostrare in pagina quanti eventi sono attualmente visibili nella lista.

### Obiettivi

- Gestire un array di eventi in `App.jsx` oppure importarlo da un file dati.
- Calcolare il numero di eventi mostrati.
- Inserire una riga in pagina con testo simile a:
  - `Eventi trovati: X`
- Posizionare il contatore sopra la lista eventi.

### File coinvolti

- `src/App.jsx`
- eventuale `src/data/events.js`

### Note

Questa issue modifica la stessa sezione generale usata anche dalle Issue 1 e 2.

---

## Issue 5 - Applicare il filtro alla lista

**Titolo**

`Applicare il filtro per categoria alla lista eventi`

**Descrizione**

Usare il valore selezionato nel filtro per mostrare solo gli eventi della categoria scelta.

### Obiettivi

- Usare il valore del filtro presente in `App.jsx`.
- Filtrare l'array eventi prima di passarlo a `EventList`.
- Se il filtro è `Tutti`, mostrare tutti gli eventi.
- Far sì che il contatore mostri il numero corretto di eventi filtrati.

### File coinvolti

- `src/App.jsx`
- eventuale `src/data/events.js`

### Note

Questa issue modifica la stessa logica usata anche nell'Issue 4.

---

## Issue 6 - Stato vuoto della lista

**Titolo**

`Gestire lo stato vuoto di EventList`

**Descrizione**

Se non ci sono eventi da mostrare, la lista deve visualizzare un messaggio chiaro.

### Obiettivi

- In `EventList`, controllare se la lista eventi è vuota.
- Se è vuota, mostrare un messaggio tipo:
  - `Nessun evento trovato`
- Se ci sono eventi, mostrare normalmente la lista.

### File coinvolti

- `src/components/EventList.jsx`

### Note

Questa issue è utile per creare un secondo possibile punto di conflitto con chi modifica `EventList`.

---

## Issue 7 - Ordinamento eventi per data

**Titolo**

`Ordinare gli eventi per data`

**Descrizione**

Ordinare gli eventi prima di mostrarli nella lista.

### Obiettivi

- Ordinare gli eventi per data crescente oppure decrescente.
- Applicare l'ordinamento ai dati passati a `EventList`.
- Verificare che l'ordine sia coerente dopo il filtro.

### File coinvolti

- `src/App.jsx`
- eventuale `src/data/events.js`

### Note

Questa issue può creare conflitti con Issue 4 e Issue 5 se più studenti lavorano sulla stessa logica dei dati.

---

## Issue 8 - Dati iniziali dell'app

**Titolo**

`Creare il file dati iniziale degli eventi`

**Descrizione**

Creare un file dati riutilizzabile con una lista di eventi fittizi.

### Obiettivi

- Creare `src/data/events.js`.
- Esportare un array di almeno 6 eventi.
- Ogni evento deve contenere:
  - `id`
  - `title`
  - `date`
  - `category`
  - `status`

### Esempio struttura

```js
export const events = [
  {
    id: 1,
    title: 'Frontend Conference',
    date: '2026-06-20',
    category: 'Conferenze',
    status: 'aperto'
  }
]
```

### File coinvolti

- `src/data/events.js`
- `src/App.jsx`

---

## Configurazione consigliata dei gruppi

### Gruppo da 4

- Studente 1 -> Issue 1
- Studente 2 -> Issue 2
- Studente 3 -> Issue 4
- Studente 4 -> Issue 5

Questa combinazione forza quasi sicuramente un conflitto su `src/App.jsx`.

### Gruppo da 5 o più

Aggiungere anche:
- Issue 3
- Issue 6
- Issue 7
- Issue 8

---

## Ordine consigliato dei merge

Per aumentare la probabilità di conflitto:

1. Fare merge di una PR che modifica `App.jsx`.
2. Fare merge di una seconda PR che modifica ancora `App.jsx`.
3. Provare poi a mergiare una terza PR rimasta indietro sullo stesso file.

In questo modo è molto probabile che GitHub segnali un conflitto.

---

## Cosa deve fare il gruppo quando compare un conflitto

1. Aprire il branch della Pull Request in locale su VS Code.
2. Aggiornare il branch con le modifiche di `main`.
3. Aprire il file in conflitto.
4. Leggere i marcatori di conflitto:

```text
<<<<<<< HEAD
codice presente in un branch
=======
codice presente nell'altro branch
>>>>>>> nome-branch
```

5. Decidere quale codice tenere oppure come unire le due versioni.
6. Eliminare i marcatori di conflitto.
7. Salvare il file.
8. Fare commit della risoluzione.
9. Fare push e completare la Pull Request.

