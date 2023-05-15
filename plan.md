 Vreme : pocetak 15.5
 Vreme : 21min

i. Uvod :
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
8. Promenu lozinke uvezati

ii. Registracija korisnika (ne radi se za administratora) :
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
	- кратак текстуални опис о агенцији. 
3. Npraviti frontalni deo za ubacivanje slike
4. Npraviti u bazi RegReqs tabelu 
5. Napraviti modele za reqreqs
	za sliku staviti string, koji je zapravo hesh+.jpg
6. Npraviti proveru velicine slike 
7. Npraviti postvljanje default slike (ako nista nije obelezeno)

iii. Prihvatanje i odbijanje zahteva registracije
1. Izlistati sve zahteve u tabeli (pogeldati prethodni projekat mozda)
2. Psotaviti 2 dugmeta prihvati i odbijanje
3. Npraviti metodu za odbivanje, brisanje zahteva iz sistema
4. Npraviti metodu prihvati (ubacivanje korisnika u users, i brisanje iz regreqs)




	
	