import { Libro } from "../models/libro.model";

export const LIBRI: Libro[] = [
  {
    _id: 1,
    title: 'Berserk',
    autore: 'Kentaro Miura',
    description: "Berserk (ベルセルク Beruseruku) è un manga scritto e disegnato da Kentarō Miura. Le vicende si incentrano su Gatsu, un guerriero maledetto costretto a vagare senza sosta per sopravvivere e trovare vendetta. La storia, inizialmente dell'orrore ma via via arricchita di elementi del genere fantasy, esplora gli anfratti più profondi della natura umana. Le tematiche principali sono l'illusorietà del libero arbitrio, l'oscuro e necessario potere della violenza, il destino dell'uomo, l'onnipresenza del male",
    image: 'https://c4.wallpaperflare.com/wallpaper/872/838/468/moon-black-swordsman-berserk-berserk-armor-night-wallpaper-preview.jpg',
    date: '25/08/1989',
    editore: 'Planet Manga',
    published: true
  },
  {
    _id: 2,
    title: 'Akira',
    autore: 'Katsuhiro Otomo',
    description: "Akira (アキラ?) è un manga di genere cyberpunk realizzato da Katsuhiro Ōtomo. L'opera è stata serializzata in Giappone dal 6 dicembre 1982 all'11 giugno 1990 sulle pagine della rivista Young Magazine di Kōdansha e in seguito raccolta in sei tankōbon.Ambientato in una Neo-Tokyo postapocalittica, Akira ruota attorno al tentativo di Kaneda (leader di una banda adolescenziale di motocilisti), dell'attivista politica Kei, di un trio di esper e del colonnello Shikishima di impedire a Tetsuo, un amico d'infanzia di Kaneda che sviluppa poteri ESP che lo rendono mentalmente instabile, di distruggere la città e di risvegliare un misterioso individuo dotato degli stessi poteri e chiamato Akira. Nel corso dell'opera, Ōtomo sviluppa temi come l'isolamento sociale, la corruzione e il potere.",
    image: 'https://pad.mymovies.it/filmclub/2006/02/020/coverlg_home.jpg',
    date: '06/12/1982',
    editore: 'Planet Manga',
    published: true
  },
  {
    _id: 3,
    title: '20th century Boys',
    autore: 'Naoki Urasawa',
    description: "20th Century Boys (20世紀少年 Nijū seiki shōnen?, lett. I ragazzi del XX secolo) è un manga di Naoki Urasawa pubblicato in Giappone sulla rivista Big Comic Spirits della casa editrice Shogakukan a partire dal 1999 e conclusa nel 2006 con 249 capitoli raccolti in 22 tankōbon. Si tratta di un manga di ampio respiro con un'atmosfera cupa[1], che mescola elementi di teoria della cospirazione alla fantascienza; numerosi sono i riferimenti alla cultura popolare giapponese e internazionale, in particolare al mondo dei fumetti e della musica rock. La trama include altresì richiami al problema delle sette che affligge la società giapponese e al terrorismo internazionale",
    image: 'data:image/jpeg;base64,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',
    date: '1999',
    editore: 'Planet Manga',
    published: true
  },
  {
    _id: 4,
    title: 'The Walking Dead',
    autore: 'Robert Kirkman',
    description: "The Walking Dead è una serie a fumetti survival horror statunitense a cadenza mensile pubblicata dalla Image Comics a partire dall'ottobre 2003, creata da Robert Kirkman e illustrata da Tony Moore per i primi 6 numeri e da Charlie Adlard per i successivi. Tratta delle vicissitudini di un gruppo di persone che cercano di salvarsi da un'invasione di zombie, che ha portato al crollo delle istituzioni centrali e alla fine della civiltà così come la conosciamo.",
    image: 'https://fumettologica.it/wp-content/uploads/2019/06/walking-dead.jpg',
    date: '08/2003',
    editore: 'Saldapress',
    published: true
  },
  {
    _id: 5,
    title: 'One Piece',
    autore: 'Eiichiro Oda',
    description: "One Piece (ONE PIECE - ワンピース Wan Pīsu) è un manga scritto e disegnato da Eiichirō Oda, serializzato sulla rivista Weekly Shōnen Jump di Shūeisha dal 22 luglio 1997[1][2]. La casa editrice ne raccoglie periodicamente i capitoli in volumi formato tankōbon, di cui il primo è stato pubblicato il 24 dicembre. L'edizione italiana è curata da Star Comics[3], che ne ha iniziato la pubblicazione in albi corrispondenti ai volumi giapponesi il 1º luglio 2001.La storia segue le avventure di Monkey D. Rufy, un ragazzo il cui corpo ha assunto le proprietà della gomma dopo aver inavvertitamente ingerito un frutto del diavolo. Reclutando compagni per formare una ciurma, Rufy esplora la Rotta Maggiore in cerca del leggendario tesoro One Piece e inseguendo il sogno di diventare il nuovo Re dei pirati.",
    image: 'https://www.cinematographe.it/wp-content/uploads/2019/03/One-Piece.jpg',
    date: '22/07/1997',
    editore: 'Star Comics',
    published: true
  },
  {
    _id: 6,
    title: 'Chainsaw Man',
    autore: 'Tatsuki Fujimoto',
    description: "Nel mondo di Chainsaw Man, i Diavoli (悪魔 Akuma?) nascono dalle paure umane; questi sono solitamente pericolosi, malevoli e il loro potere è proporzionale alla paura che incitano. Gli umani possono stipulare contratti con loro per usare il loro potere e i Cacciatori di Diavoli (デビルハンター Debiru Hantā?) sono specializzati nella loro eliminazione e nel loro impiego. I Diavoli provengono dall'Inferno, migrano sulla Terra quando vengono uccisi all'Inferno e viceversa. Ad abitare all'Inferno sono diavoli estremamente potenti, chiamati Paure Primordiali, che non sono mai stati uccisi.",
    image: 'https://www.gannett-cdn.com/presto/2022/11/26/PFSU/41eee0a3-f6e4-4772-8892-93e40da92404-chainsaw_man.jpeg?width=660&height=372&fit=crop&format=pjpg&auto=webp',
    date: '03/12/2018',
    editore: 'Planet Manga',
    published: true
  },
  {
    _id: 7,
    title: 'Tokyo Revengers',
    autore: 'Ken Wakui',
    description: "Takemichi Hanagaki è un ventiseienne che vive un trauma per la morte di Hinata Tachibana, che oltre a essere una sua grande amica era anche stata il suo primo vero amore. Non intraprende nella sua vita nessun'altra relazione amorosa, finendo ad alloggiare in uno stabile estremamente malmesso e a svolgere un lavoro che non sopporta. Dopo essere stato spinto contro un treno in corsa, scopre che invece del suo decesso si è verificato un incredibile viaggio indietro nel tempo, capace di riportarlo a prima della morte di Hinata. Lo scopo dell'esistenza di Takemichi diventa così proteggere Hinata, pur sapendo che ciò risulterà particolarmente difficile: la ragazza era stata infatti uccisa in seguito ad una rappresaglia da alcuni giovani criminali, e l'unico modo per impedire il fatto è diventare più potente di loro.",
    image: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/7923a0407dbdba324c56acec9f096c13.jpe',
    date: '01/03/2017',
    editore: 'J-Pop',
    published: true
  },
  {
    _id: 8,
    title: 'Homunculus',
    autore: 'Hideo Yamamoto',
    description: "Susumu Nakoshi è un trentaquattrenne senzatetto legato soprattutto alla sua automobile. Manabu Ito, di 22 anni, è un giovane rampollo di una ricca famiglia laureando in medicina, il cui fine è andare a fondo nei misteri dell'essere umano. I due personaggi presto si incontrano: Ito sta cercando una cavia per praticare un esperimento di trapanazione del cranio finalizzato a studiare sensi che un normale essere umano dovrebbe avere sopiti, scoprendo in Nakoshi la sua cavia perfetta. Dopo un rifiuto perentorio iniziale, spinto dal bisogno di denaro necessario a riscattare l'amato veicolo, Susumu accetta di sottoporsi alla trapanazione. Dopo l'operazione Nakoshi diventa capace di vedere gli homunculus, ossia entità che potrebbero essere le rappresentazioni fisiche dei pensieri e dei sentimenti più nascosti di una persona, chiudendo il suo occhio destro. Prende così il via per i due particolari personaggi una specie di studio sperimentale della condizione umana",
    image: 'https://www.animenewsnetwork.com/thumbnails/crop1200x630g84/cms/news.4/163882/homunculus.jpeg',
    date: '17/03/2003',
    editore: 'Planet Manga',
    published: true
  },
  {
    _id: 9,
    title: 'BLAME!',
    autore: 'Tsutomu Nihei',
    description: "protagonista è Killy, un individuo solitario, armato solo di una piccola ma letale pistola. Il suo obiettivo è di trovare esseri umani che possiedono i cosiddetti 'geni per i terminali di rete'. Si tratta di geni o marcatori genetici che consentono a chi li possiede di accedere alla rete, l'infrastruttura digitale che controlla e lega la Città. Questo gene sembra essere la chiave di volta per bloccare l'espansione selvaggia della Città che cresce senza sosta da tempo immemore. I 'Costruttori', individui meccanici di proporzioni enormi, la cui programmazione è quella di appunto ampliare la città, si dice possano essere controllati solo da chi possiede il net terminal gene.",
    image: 'https://www.lasepolturadellaletteratura.it/wp-content/uploads/2015/11/Blame-copertina.jpg',
    date: '25/03/1997',
    editore: 'Planet Manga',
    published: true
  },
  {
    _id: 10,
    title: 'Tomie',
    autore: 'Junji Ito',
    description: "Tomie Kawakami è una stupenda donna che si diverte a far innamorare di sé, tutti gli uomini; tuttavia, essi impazziscono e si uccidono a vicenda per lei oppure uccidono lei stessa (che però resuscita e scompare misteriosamente).",
    image: 'https://nft.ji-anime.com/image/ogp.png',
    date: '1997',
    editore: 'J-Pop',
    published: true
  },
  {
    _id: 11,
    title: 'Neon Genesis Evangelion',
    autore: 'Yoshiyuki Sadamoto',
    description: "La storia, ambientata nella futuristica città di Neo Tokyo-3 a distanza di quindici anni da una catastrofe planetaria nota come Second Impact, si incentra sulle vicende di Shinji Ikari, un ragazzo che viene reclutato dall'agenzia speciale Nerv per pilotare un mecha gigante noto con il nome di Eva e combattere in questo modo, assieme ad altri piloti, contro dei misteriosi esseri chiamati angeli.",
    image: 'https://www.indiscreto.org/wp-content/uploads/2018/11/nge.jpg',
    date: '26/12/1994',
    editore: 'Planet Manga',
    published: true
  },
  {
    _id: 12,
    title: 'Kenshin - Samurai vagabondo',
    autore: 'Nobuhiro Watsuki',
    description: "La narrazione ruota attorno al protagonista Battōsai Himura (parzialmente basato sul personaggio storico dell'hitokiri Kawakami Gensai), spietato assassino, che a metà 1800 contribuì alla fine dello Shogunato Tokugawa, al potere da oltre 200 anni, e all'avvento del periodo Meiji. In seguito all'insediamento del nuovo governo, Battōsai scompare per tornare sotto nuovo nome: Kenshin. Ora viaggia con una sakabato con un solo filo (una spada a lama invertita), che anziché essere rivolta verso l'avversario risiede sul lato opposto; il suo obiettivo sta nel proteggere le persone che incontra dalle ingiustizie. Nel suo viaggio, Kenshin si troverà coinvolto in combattimenti con samurai che non apprezzano il nuovo stile di vita pacifico (nella nuova era Meiji non è più permesso nemmeno a un samurai di portare la spada) e in complotti che cercano di restaurare la vecchia società feudale.",
    image: 'https://i0.wp.com/www.meganerd.it/wp-content/uploads/2022/09/kenshin-samurai-vagabondo-1.png?fit=1688%2C1062&ssl=1',
    date: '2 settembre 1994',
    editore: 'Star Comics',
    published: true
  },
  {
    _id: 13,
    title: 'AfroSamurai',
    autore: '	Takashi Okazaki',
    description: "Afro Samurai (アフロサムライ Afuro Samurai?), scritto anche come AFRO SAMURAI, è un manga seinen dōjinshi scritto e disegnato da Takashi Okazaki, serializzato a cadenza irregolare sulla rivista per manga dōjinshi Nou Nou Hau da novembre 1998 a settembre 2002. Ispirata dall'amore di Okazaki per la musica soul e hip hop e per i media americani, le vicende della serie ruotano intorno alla vita di Afro Samurai, il quale assiste impotente da bambino all'uccisione del padre Rokutaro — possessore della fascia chiamata Numero 1 — da parte del pistolero Justice, possessore della fascia Numero 2. Una volta cresciuto, Afro parte per un viaggio alla ricerca di Justice, in modo da poterlo uccidere e vendicare la scomparsa del proprio padre.",
    image: 'https://sm.ign.com/t/ign_ap/articlepage/a/afro-samurai-2-in-development/afro-samurai-2-in-development_b1yg.1280.jpg',
    date: '11/1998',
    editore: 'Planet Manga',
    published: true
  },
  {
    _id: 14,
    title: 'DevilMan',
    autore: 'Gō Nagai',
    description: "La vita di Akira Fudo viene sconvolta dal suo amico Ryo Asuka quando questi gli rivela che la Terra sta per essere invasa dai demoni, esseri mostruosi ibernati per secoli nei ghiacci e che stanno per tornare in superficie. Secondo Ryo i demoni sarebbero vissuti sulla Terra prima della comparsa dell'uomo, e adesso ne rivendicherebbero il possesso. L'unico modo per sconfiggerli è quello di prendere il controllo dei poteri dei demoni stessi per combatterli ad armi pari. Ryo coinvolge quindi l'amico in una sabba durante la quale Akira si fonde con Amon, il più potente e terribile dei demoni, e si trasforma in una creatura nota come Devilman. Solo lo spirito puro del ragazzo e il suo grande amore per la bella Miki gli permettono di controllare Amon e di utilizzarne i poteri per difendere il genere umano.",
    image: 'https://www.akibagamers.it/wp-content/uploads/2022/12/devilman-cover.jpg',
    date: '11/06/1972',
    editore: 'J-Pop',
    published: true
  }
]
