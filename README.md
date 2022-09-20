# Onboarding partout
**In deze Read Me leg ik, Midas Maas, uit hoe het project Onboarding Website werkt. Ik leg per view uit welke functies zij huisvesten en welke componenten waarvoor verantwoordelijk zijn. Dit project is op basis van versie 2 het Vue.JS-framework ([documentatie](https://vuejs.org/v2/guide/index.html)) en de styling wordt geregeld door SCSS ([documentatie](https://sass-lang.com/documentation)).**



## Onboarding.vue
Dit venster is waar de gebruiker de onboarding kan doorlopen. Ik ga er per component doorheen.

### ChapterSelector
Dit zijn de navigatieknoppen waarmee door de content heen genavigeerd kan worden. Het checkt hoeveel hoofdstukken iedere module heeft, waardoor het weet welke content weergegeven moet worden. Content wordt dan weer ingeladen door de textData en Checkboxes- functies van Onboarding.vue. Doordat in die functies een dataverzoek wordt gedaan op basis vab de Vue-router en de ChapterSelector deze manipuleert, zorgen deze knoppen voor makkelijke navigatie door de content.

### Transition
Een transitie-element op basis van Vue's transition-API. Een watcher checkt of de router wordt aangepast en voert zo een animatie uit.

### BlockBuilder
Aan dit component wordt de data meegegeven. Dit component checkt welk type lay-out tekst en afbeeldingen moet hebben en schrijft deze vervolgens uit.

### Task
Deze checkt of het taakje is aangevinkt en houdt dit bij in VueX, een API van Vue om globaal waardes op te slaan en aan te passen. Goed om te weten is dat plug-in VueXPersistance al deze waardes opslaat op de local storage.

### Sidebar
In de Sidebar wordt ieder hoofstuk weergegeven. Het biedt de gebruiker eveneens de mogelijkheid om door de content te navigeren. Dit doet het op vergelijkbare wijze als de ChapterSelector. Echter is een belangrijk onderscheid dat de waarde van de parameters voor de Vue-router uit de waarde van de index komen in de V-for waaruit de items worden weggeschreven.

Naast navigeren, is het ook verantwoordelijk voor het weergeven van de progressie. Dat gebeurt in Completed Chapters, waar wordt gecheckt hoeveel hoofdstukken voltooid zijn. Deze waarde wordt in combinatie met het totaal aantal hoofdstukken dan weer gebruikt om de progressie uit te rekenen en weer te geven aan de gebruiker.

Het vertelt de gebruiker ook waar in de onboarding de persoon is. Het checkt wat de huidige, volgende en vorige hoofdstukken en modules zijn en schrijft op basis hiervan de juiste SCSS-class toe. 

Als laatste is er het animatielement dat animeert wanneer de gebruiker een module open klikt. Hiervoor gebruik ik wederom de transition-API.

## Dashboard.vue
Het dashboard is de startpagina van het project. Het komt qua werking grotendeels overeen met het Sidebar-component uit de onboarding-pagina. Grote verschil is dat deze minder functies heeft en dat het een introductietekst weergeeft.

## Collegas.vue && Apps.vue
Deze twee schermen werken grotendeels hetzelfde en dienen dan ook een vergelijkbaar nut: de gebruiker een overzicht geven. Op het app-scherm van de applicaties die Partout gebruikt en op het Collegas-scherm van de collega's.

### Filterknoppen
Deze filterknoppen checken of de catagorie van de items gelijk is aan de catagorie van de filterknop die aangeklikt is. Dit geeft de items die daaraan voldoen terug en veranderd eveneens de SCSS-class. Op de items wordt eveneens een alfabetische filterening toegepast die ook omgekeerd kan worden met een knop. Daaronder worden de gefilterede en gesorteerde items in een V-For uitgeschreven.

## SCSS
In SCSS files heb ik per venster en meestal per component SCSS-classes aangemaakt. Ik heb voor de naamgeving zoveel mogelijk gebruik pogen te maken van de BEM-schrijfwijze ([documentatie](http://getbem.com/introduction/)). 
