Npraviti nove buttone za poslove :
	Ako je posao active ili finished obojiti red u zeleno, ako je red rejected obojiti u crveno (ako su requested ne obojiti)
	Inicijalizovati niz activeToPayJobsID sa svim poslovima koji su active
	Proci kroz niz activeToPayJobsID za svaki koji ima sve  sobe da su zelena boja ostaviti ga u nizu u suportnom ga izbaciti iz niza
	Npraviti metodu checkIfactiveToPayJobsID(id:number) koja ce da proveri da li id koji je psolat u funckiji postoji u nizu finishedJobsID, ako postoji metoda vraca true u suprotnom vraca false
	Na html pageu postaviti uslov if ngif:checkIfactiveToPayJobsID(i) ispisi dugme plati 
	Npraviti metodu plati(id), u jobs nizu promeniti da je posao sa tim IDijem finished
	Postaviti na frontu dodatno dugme komentar koje postoji samo ako je status posla finished
	Dodati polje u jobs agencyUsername gde ce stajati username agencije koja je vezana za posao
	Izmeniti u metodi naparvi ponudu da se prilikom kreiranje ponuda za agenciju u selectedJob doda i da je job.agencyUsername=agency.username
	Sada nastaviti sa insertovanjem komentara, tako sto akda se pritisne dugme komentar pozove metoda komentar()
	Kreirati fiedl makeCommentActive==false
	Kada se aktivira ovo polje vidi se forma za pravljenje komentara
	Napraviti newComment polje na frontu
	Postaviti ngModel na newComment.mark
	Postaviti ngModel na newCommnet.description
	Dok ce usernameOfUser, anmeOfUser, lastnameOfUser da budu pokupljeni iz local storagea
	newComment.agencyUserName=agency.username
	Pozvati back da insertuje comment u agencyComments u usera sa agency usernamemom
	Npraviti na frontu uslov dfa ako je job requsted i cost>0 da se pojave dugmici prihvati i odbij
	Npraviti buttone prihvati(id), i odbij(id)
	Na prihvati id job se prebacuje u active i updejtuje se u bazu
	Na opciju odbij job se birse iz niza i azurira se takav user


	
	