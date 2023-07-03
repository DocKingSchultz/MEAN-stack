<!-- i. Uvod :
1. Napraviti users klasu
2. Napraviti klijent, agencija, administrator u bazi
3. Npraviti isto za front stranice
4. Npraviti admin stranicu da bude odvojena 
5. Odraditi login za obicne korisnike
6. Odraditi login za klijente administratora
7. Nrpaviti metodu za proveru lozinke
	-Ubaciti js fajl u projekat
	Лозинку проверити коришћењем регуларног израза (минимално 7 карактера, максимално 12 карактера, 
	од тога бар једно велико слово, један број и један специјални карактер, и мора почињати словом). 
8. Promenu lozinke uvezati -->

<!-- ii. Registracija korisnika (ne radi se za administratora) :
1. Nrpaviti stranicu sa formom sa formom 
	- корисничко име (које је јединствено, на нивоу свих корисника у систему), 
	- лозинка1 (и потврда лозинке), 
	- контакт телефон, 
	- и-мејл адреса (јединствено, највише један кориснички налог по и-мејл адреси). 
	При регистрацији клијента захтевати и унос следећих поља: 
	- име, 
	- презиме. 
	При регистрацији агенције захтевати и унос следећих поља: 
	- назив агенције, 
	- адреса седишта агенције (држава, град, улица и број), 
	- матични број агенције, 
	- кратак текстуални опис о агенцији.  -->
3. Ubacivanje slike [Teodora]
-Napraviti polje za ubacivanje slike :
	register component
-Ubaciti default slicicu
	src/assets/pictures
-Npraviti proveru formata :
	slika mora biti min 100x100, maks 300x300
	ukoliko slika nije odabrana postaviti default sliku
	ukoliko slika nije u formatu ispisati poruku
-Dodati ubacivanje slike na backu
-Ubaciti slicicu negde na frontu da se testira rad 

<!-- iii0 Subscribe header na promenu u okviru logina:
Napraviti servis za promenu tipa korisnika
U njemu treba da se nalazi vrednost tipam korisnika -->


<!-- iii. Prihvatanje i odbijanje zahteva registracije : [Filip]
1. Izlistati sve zahteve u tabeli (pogeldati prethodni projekat mozda)
2. Psotaviti 2 dugmeta prihvati i odbijanje
3. Npraviti metodu za odbivanje, brisanje zahteva iz sistema
4. Npraviti metodu prihvati (ubacivanje korisnika u users, i brisanje iz regreqs) -->



iv. Neregistrovani korisnici : [Teodora]
1. Pregled agenncija u sistemu :
	1)Napraviti informacije o agenciji (model front, model 	back, tabela u bazi)
		-informacije iz registracije
		-Dodati niz : komentari
			-Npraviti bazu,front,back, komentar
				-Tekst komentara
				-*Depersonalizovani podaci o klijentu
		-Galerija slika radova
			niz stringova sa heshom slika 
			Sta je galerija slika agencije ? Jel su to objekti koji su odradjeni ?
	2)Pretrazivanje agencije prema nazivu i/ili adresi
		Npraviti metode za sortiranje po informacijama po abecedi
		Kliktajem na naslov u ulazu tabele
	2)Tabela

v. Klijent :
0. Ispis podatak pritiskom na profil
	ime prezime email adresa kontakt telefon
1. Npraviti tabove za meni :
	Objekti	
2. Ispis objekata
	Npraviti modele objekta
	Obican ispis objekta :
		tip, adresa, broj prostorija, kvadratura 
		Postaviti 2 dugmeta izbrisi i izmeni
		Omoguciti pregled skice :
			Napraviti dugme pregled kada se pritisne na dugme iskoci prozor sa pregledom
			postaivti ispod skice choose file opciju, sa tekstom promeni izgled prostorije i dugmetom potvrdi
		Pregled skice :
			Napraviti js metodu koja parsira json fajl i generise sliku na cavnasu sa zadatim informacijama

Drugi deo :
3. Ubacivanje objekta :
	Forma :
		tip objekta ...
		broj prostorija
	Postaviti proveru da je broj prostorija manji od 3
	Npraviti js skriptu za citanje json formata
Json format ulazi :
[tip]
[adresa]
[broj prostorija]
[kvadratura]
...
Nrapviti da se od json formata direkt ubaci u bazu



Tabele :
i)User
ii)RegReqs
iii)Agencija
iv)Klijent
v)Objekat
	tip objekta
	adresa objekta
	broj prostorija
	kvadratura
	Skica :
		Broj prostorija prostorije :
		[0]
			pocetak kvadrata
			duzina
			sirina
			status (radi se, zavrsena, neutralno)
			vrata [niz] :
				(x,y) pocetak
	*slika (canvas objekta)






	
	