npx json-server --port 4000 --watch db.json 
json-server db.json --routes routes.json


1. Utilizzo il server json solo per controllare l'autenticazione, ma la manipolazione dei todos avviene separatamente in quanto json server non permette di accedere agli elementi innestati
perciò la mia soluzione è stata quella di utilizzare json server per l'autenticazione, currentUser viene salvato in uno stato e i todos vengono manipolati con useReducer. 




OBIETTIVO:
Implementa tasto destro sul task che apre un div, implementa elimina attività  
Costruisci div suggerimenti task -> Titolo (modificabile), aggiungi sotto attività, bottone aggiungi alla mia giornata (cambia title category)




*Sistema scroll bar tasks e aggiungi task che viene spinto in basso, fissare larghezza massimo tasks