npx json-server --port 4000 --watch db.json 
json-server db.json --routes routes.json


1. Utilizzo il server json solo per controllare l'autenticazione, ma la manipolazione dei todos avviene separatamente in quanto json server non permette di accedere agli elementi innestati
perciò la mia soluzione è stata quella di utilizzare json server per l'autenticazione, currentUser viene salvato in uno stato e i todos vengono manipolati con useReducer. 