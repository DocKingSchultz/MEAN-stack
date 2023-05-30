 Vreme : pocetak 15.5
 Vreme : 4h + 2h

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
3. Npraviti Multer komuniakciju za ubacivanje slike :
	Raditi sve na zasebnoj komponenti file-upload
	Guide : 
	File upload  : https://github.com/JosephScript/mean-multer-ngf
	Image upload : https://github.com/Jon-Peppinck/mean-image-upload

KDP :
	Imatu sliku monitora ispred sebe 

Snimci :
	https://studentetfbgacrs-my.sharepoint.com/personal/sa190595d_student_etf_bg_ac_rs/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fsa190595d%5Fstudent%5Fetf%5Fbg%5Fac%5Frs%2FDocuments%2FSnimci%20predavanja%2F6%2E%20semestar%20%282022%29%2F%21%20KDP&ga=1

Kodovi za analizirati (https://studentetfbgacrs-my.sharepoint.com/personal/sa190595d_student_etf_bg_ac_rs/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fsa190595d%5Fstudent%5Fetf%5Fbg%5Fac%5Frs%2FDocuments%2FSnimci%20predavanja%2F6%2E%20semestar%20%282022%29%2F%21%20KDP%2FKod&view=0) :
	1. 04-1 - Regioni 
	2. Uslovna sinhronizacija
	3. One Lane bridge problem
	4. Readers Writers NO fifo
	5. Readers Writers FIFO
	6. Ciggaretes Smoker problem
	7. UnisexBathroom problem
	8. UnisexBathroom FIFO
	9. Savings account
	
	1. 05-1 Monitori
	2. Readers Writers
	3. Readers Writers FIFO
	4. Cigaretes
	5. Unisex
	6. Unisex FIFO

*Za nejasne zadatke pogledati video predavanje


Odraditi rokove :
	2019 https://si.kocka.tech/wiki/%D0%9A%D0%94%D0%9F/%D0%9A2_2019
	2022 https://si.kocka.tech/wiki/%D0%9A%D0%94%D0%9F/%D0%9A2_2022
	

*Dodatni rokovi :
	Januar 22 https://si.kocka.tech/wiki/%D0%9A%D0%94%D0%9F/%D0%88%D0%B0%D0%BD%D1%83%D0%B0%D1%80_2022
	Janaur 21 https://si.kocka.tech/wiki/%D0%9A%D0%94%D0%9F/%D0%88%D0%B0%D0%BD%D1%83%D0%B0%D1%80_2021
	Januar 20 https://si.kocka.tech/wiki/%D0%9A%D0%94%D0%9F/%D0%88%D0%B0%D0%BD%D1%83%D0%B0%D1%80_2020

	
<!-- 4. Npraviti u bazi RegReqs tabelu 
5. Napraviti modele za reqreqs
	za sliku staviti string, koji je zapravo hesh+.jpg -->

6. Npraviti proveru velicine slike 
7. Npraviti postvljanje default slike (ako nista nije obelezeno)


8. Npraviti front deo u angularu za pakiranje podataka za slanje na back
9. Odraditi slanje na back, i proveirti uspesnost
10. Ubaciti podatke u bazu
11. Proveiriti da li radi dobro
12. Proveriti kako da dohvatis sliku koja je sacuvana sa multerom
13. Proveriti kako radi registracija da li provera popunjensot svioh polja
14. Proveriti proveru 



iii. Prihvatanje i odbijanje zahteva registracije :
1. Izlistati sve zahteve u tabeli (pogeldati prethodni projekat mozda)
2. Psotaviti 2 dugmeta prihvati i odbijanje
3. Npraviti metodu za odbivanje, brisanje zahteva iz sistema
4. Npraviti metodu prihvati (ubacivanje korisnika u users, i brisanje iz regreqs)

iv. Neregistrovani korisnici :
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

cloudinary upload :
https://blog.bitsrc.io/api-upload-file-to-cloudinary-with-node-js-a16da3e747f7
https://www.djamware.com/post/5f0533338ce55338fd15aca3/mean-stack-angular-10-tutorial-upload-image-file



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






	
	