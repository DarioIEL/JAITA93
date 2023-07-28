# Twitter o simili

1. Fornire un nome alla propria piattaforma di condivisione messaggi
2. La piattaforma dovrà avere 2 pagine in totale
    - Pagina 1: 
    Login: 2 campi (username, password). Per poter accedere alla pagina successiva i due campi devono essere compilati
    username : min 8 - max 15 caratteri
    password: min 8 - max 20, contenere almeno una lettera maius, un num, un char speciale $/()"!?*
    Quando i due campi sono ben compilati accedo alla pagina 2 cliccando sul pulsante Login

    EXTRA 1: Creare un array di 3 oggetti utente con le seguenti prop: username, password. Quando clicco sulla login verificare che effettivamente esiste quell'utente. Sugg: guarda il metodo find() per gli array 

    - Pagina 2:
    Nella pagina due ci sarà un saluto di benvenuto per l'utente (non deve essere lo stesso utente che si è loggato)

    Deve essere presente una textarea (<textarea id="miaTxtArea"></textarea>).
    Sotto la textarea deve esserci un contatore con un punto iniziale di 280 caratteri. Ad ogni digitazione nella textarea il contatore diminuisce di 1. Arrivato a zero blocco il contatore e blocco la possibilità all'utente di scrivere ulteriormente. Sugg: studiare i keyboard Event

    Sotto la textarea ci sarà un pulsante con invia messaggio. 
    Al click il messaggio verrà stampato sotto nella pagina con la data e l'ora nel quale è stato inviato. 
    Svuotare la textarea. 
    All'inserimento di un nuovo messaggio comparirà al di sotto del primo.

    EXTRA 2: Creare un oggetto utente con le seguenti prop (
        username, password, 
        messaggi[{ testo: string, data: new Date()}],
        avatar: string ovvero il percorso dell'immagine utente
        )

    Quando stampo il messaggio con data e ora stampo anche il nome e l'avatar dell'utente


