## Get Stuff Done
Detta är en fullstack CRUD applikation, utvecklad som en PWA, där utvecklingsprocessen har utgått från UP, SCRUM och MERN stacken.

## Besök webbapplikationen här
getstuffdone.se

## Download
Det är tillåtet att clona/ladda ner denna applikationen för privat bruk. <br>

## Mest använda scripts
Inne i projekt foldern, i consolen, kan du köra följande script

### Install server dependencies
npm install

### Install client dependencies
cd client
npm install

### Kör både Express & React från root
npm run dev <br>

Backend öppnar på [http://localhost:5000] och klienten öppnar på [http://localhost:3000]

### Build for production
cd client
npm run build

### `npm server`
Kör applikationen i utvecklings miljö. <br>
Kör även Nodemon server för "hot-reload". <br>
Öppnar på port [http://localhost:5000]

### `npm run test`
Kör de automatiska test suits som finns.

### `npm push heroku master`
Pushar ändringar till Heroku som kör en ny build och publicerar ändringarna på live servern.

Mer information hittar du på repots Wiki. Det finns också en README.md för klienten i "client" foldern på engelska.