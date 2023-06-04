npx json-server --port 4000 --watch db.json 
json-server db.json --routes routes.json


1. Utilizzo il server json solo per controllare l'autenticazione, ma la manipolazione dei todos avviene separatamente in quanto json server non permette di accedere agli elementi innestati
perciò la mia soluzione è stata quella di utilizzare json server per l'autenticazione, currentUser viene salvato in uno stato e i todos vengono manipolati con useReducer. 




OBIETTIVO:
SOTTOLINEATURA E CHECK FISSO AL COMPLETATA, SUONO 
OPTIONS COMPONENTI, AGGIUNGI RIMUOVI DA LA MIA GIORNATA, SEGNA COME NON COMPLETATA, SPOSTA ATTIVITà IN 
SUBTASKS

  {/**Quando faccio onClick: 1) mappa e modifica la proprietà completed 2) filtra i completati e li aggiunge a completed array */}