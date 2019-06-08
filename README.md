# Get Stuff Done
Detta är en fullstack CRUD applikation, utvecklad som en PWA, där utvecklingsprocessen har utgått från UP, SCRUM och MERN stacken.

### Besök webbapplikationen här
getstuffdone.se

## Hur applikationen fungerar
* Fungerar på datorer, surfplattor samt mobiltelefoner
* Registera dig som användare
* Lägg till/ta bort Projekt
* Lägg till/ta bor Tasks
* Checka av Tasks som har slutförts
* Navigera mellan dina Projekt även om du är offline
* Snabbare laddningstider då resurser sparas i cashe
* Spara icon på din telefon för att snabbare komma in, utan att behöva skriva in URL i webläsaren
* Fungerar bäst när du använder dig av Google Chrome som webbläsare

## Download
Det är tillåtet att clona/ladda ner denna applikationen för privat bruk. <br>
Du behöver i detta fall lägga till en egen .env fil i root med egna nycklar för MongoDB och JWT secret

# Mest använda scripts


### Install server dependencies
`npm install`

### Install client dependencies
cd client <br>
`npm install`

### Kör både Express & React från root
`npm run dev` <br>

Backend öppnar på [http://localhost:5000] och klienten öppnar på [http://localhost:3000]

### Build for production
cd client <br>
`npm run build`

### Kör de automatiska test suits som finns
`npm run test`

Mer information hittar du på repots Wiki. Det finns också en README.md för klienten i "client" foldern på engelska.