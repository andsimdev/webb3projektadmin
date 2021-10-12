# Webbutveckling 3, projekt
## Administrationsgränssnitt

> Administrationsgränssnittet är lösenordsskyddat och ansluter till projektets webbtjänst med stöd för att skapa, läsa, ändra och radera poster ur databasen

<br>

* På startsidan efter inloggning listas alla tre tabeller (studier, arbeten och webbplatser).

* Högst upp i varje kolumn finns en knapp för att skap en ny post till resepktive tabell.

* På varje listad post finns en länk för att ändra posten. Länken leder till en egen sida för att antingen uppdatera delar i posten eller radera den helt.

* Tabellen för webbplatser har stöd för bilduppladdning. Tjänsten stödjer bilder i png-format. Bilderna lagras på webbservern i en och samma katalog, men dess sökväg lagras tillsammans med respektive post i databastabellen.
