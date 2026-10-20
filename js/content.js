// All page content lives here. Each translatable field is { en, no }.

// Norwegian strings for the static HTML (English is read from the HTML itself).
export const no = {
  "nav.about": "Om meg",
  "nav.thesis": "Bacheloroppgave",
  "nav.projects": "Prosjekter",
  "nav.experience": "Erfaring",
  "nav.education": "Utdanning",
  "nav.contact": "Kontakt",
  "hero.role": "Masterstudent i datateknologi ved UiS. Backendutvikler i C# og .NET.",
  "hero.view": "Se CV",
  "hero.cv": "Last ned CV",
  "hero.caption": "Målt sprangrespons fra RLC-kretsen i bacheloroppgaven min for ABB. Stiplet linje er settpunktet, heltrukket er utgangen.",
  "about.title": "Om meg",
  "about.p1": "Jeg går første år på master i datateknologi ved Universitetet i Stavanger, etter å ha fullført bacheloren der i juni 2026. Det meste jeg bygger er backend: API-er i C# og ASP.NET Core, databaser og koblingene mellom systemer. Bacheloroppgaven, skrevet i samarbeid med ABB, koblet en industriell kontroller til en simulert krets over MQTT og fikk karakteren A.",
  "about.p2": "Ved siden av studiene er jeg studentassistent i grunnleggende programmering og IT-vakt under digitale eksamener. Masteren tar meg videre inn i sky, sikkerhet og nettverk.",
  "skills.lang": "Språk",
  "skills.backend": "Backend",
  "skills.data": "Data",
  "skills.infra": "Drift og verktøy",
  "skills.other": "Også brukt",
  "skills.spoken": "Snakker",
  "skills.spokenList": "Norsk, engelsk, arabisk",
  "now.title": "Nå",
  "now.study": "Første semester på master: etisk hacking, nettverkssikkerhet, nettskyteknologier og trådløs kommunikasjon.",
  "now.ta": "Studentassistent i DAT120/DAT125 Grunnleggende programmering.",
  "now.build": "Bygger Kolumbus Delay Radar, en skytjeneste for forsinkelser i bussene i Rogaland.",
  "now.open": "Åpen for sommerjobb og internship sommeren 2027.",
  "thesis.title": "Bacheloroppgave",
  "thesis.meta": "ABB Bryne, jan–mai 2026. Gruppe på tre, veileder Morten Mossige. Karakter A.",
  "thesis.p1": "Å teste kontrollogikk for ABBs IPS-kontroller krever i dag fysisk maskinvare. Vi bygde et rammeverk der en virtuell IPS-kontroller styrer en simulert prosess i stedet, slik at logikken kan testes uten utstyr på bordet.",
  "thesis.p2": "En proxy i C# leser analoge utganger fra kontrollerens delte minne og publiserer settpunkter over MQTT. En simulator i Python modellerer en andreordens RLC-krets og sender målingen tilbake. Simulatoren ble sammenlignet punkt for punkt med oscilloskopmålinger fra den fysiske kretsen.",
  "thesis.mine": "Min del: proxylaget mellom delt minne og MQTT, og latensmålingene.",
  "thesis.stat1": "gjennomsnittlig rundtur, 1000 målinger",
  "thesis.stat2": "karakter",
  "thesis.stat3": "studiepoeng",
  "thesis.d1": "Virtuell IPS-kontroller",
  "thesis.d2": "Proxy (C#)",
  "thesis.d3": "MQTT-broker",
  "thesis.d4": "RLC-simulator (Python)",
  "projects.title": "Prosjekter",
  "projects.more": "Flere prosjekter",
  "exp.title": "Erfaring",
  "edu.title": "Utdanning",
  "edu.courses": "Vis alle emner",
  "contact.title": "Kontakt",
  "contact.p": "Ta kontakt om sommerjobb, internship eller et prosjekt. Jeg svarer raskest på e-post.",
  "form.name": "Navn",
  "form.email": "E-post",
  "form.message": "Melding",
  "form.send": "Send melding",
  "form.sending": "Sender …",
  "form.sent": "Meldingen er sendt. Jeg svarer så fort jeg kan.",
  "form.error": "Meldingen ble ikke sendt. Prøv igjen, eller skriv direkte til baselabusablih@gmail.com.",
  "footer.made": "Laget for hånd med HTML, CSS og JavaScript.",
};

export const projects = [
  {
    title: "TA Queue",
    year: "2026",
    context: { en: "Personal project, used in UiS lab sessions", no: "Eget prosjekt, brukt i øvingstimer på UiS" },
    desc: {
      en: "Two live queues for a busy lab: one for assignment approval, one for help. Students join by scanning a QR code, TAs work both queues from one board that updates in real time. The server decides who gets a student when two TAs click at once. No database or login by design: a room lives in memory for one session.",
      no: "To sanntidskøer for en travel øvingstime: én for godkjenning, én for hjelp. Studenter blir med ved å skanne en QR-kode, og studentassistentene jobber fra én felles tavle som oppdateres live. Serveren avgjør hvem som får studenten når to assistenter klikker samtidig. Ingen database eller innlogging, med vilje: et rom lever i minnet én økt.",
    },
    stack: "TypeScript, React, Express, Socket.io, Vite, Render",
    links: [
      { en: "Live site", no: "Live side", url: "https://uis-ta-queue.onrender.com" },
      { en: "Source", no: "Kildekode", url: "https://github.com/baselabu/uis-ta-queue" },
    ],
  },
  {
    title: "Kolumbus Delay Radar",
    year: "2026",
    status: { en: "In progress", no: "Pågår" },
    context: { en: "DAT515 Cloud Computing, group project", no: "DAT515 Nettskyteknologier, gruppeprosjekt" },
    desc: {
      en: "A cloud service that collects real-time data for every Kolumbus bus in Rogaland from Entur's open SIRI feed, stores planned against actual arrivals, and answers which lines and stops are least punctual. A stateful collector and a stateless, scalable API run as separate workloads on Kubernetes.",
      no: "En skytjeneste som henter sanntidsdata for alle Kolumbus-busser i Rogaland fra Enturs åpne SIRI-strøm, lagrer planlagt mot faktisk ankomst, og svarer på hvilke linjer og stopp som er minst punktlige. En tilstandsfull innsamler og et tilstandsløst, skalerbart API kjører som separate tjenester i Kubernetes.",
    },
    stack: "Kubernetes, Docker, PostgreSQL, Prometheus, Grafana, GitHub Actions",
  },
  {
    title: "FinanceTracker",
    year: "2025",
    context: { en: "DAT240 Software Development, group project, grade B", no: "DAT240 Programvareutvikling, gruppeprosjekt, karakter B" },
    desc: {
      en: "A personal finance web app for tracking expenses, budgets and recurring payments, with dashboards and saving goals. Built as separate services for users, transactions and budgets, with JWT authentication, tests and a CI pipeline, and shipped as a Docker Compose setup.",
      no: "En webapp for personlig økonomi med utgifter, budsjetter og faste betalinger, dashbord og sparemål. Bygget med egne tjenester for brukere, transaksjoner og budsjett, JWT-autentisering, tester og CI, og levert som et Docker Compose-oppsett.",
    },
    stack: "C#, ASP.NET Core, EF Core, SQLite, Bootstrap, Docker, GitHub Actions",
  },
  {
    title: { en: "90-day backend programme", no: "90-dagers backendprogram" },
    year: "2026",
    context: { en: "Self-study, summer 2026", no: "Selvstudium, sommer 2026" },
    desc: {
      en: "A summer of 6–8 hour days in C# and .NET, planned in three phases from fundamentals to backend. The main results are TaskApi, a REST API in .NET 10 with JWT login, EF Core migrations, DTOs and central error handling, and Inventory Manager, a layered inventory system with recursive search, swappable sorting strategies and JSON persistence.",
      no: "En sommer med 6–8 timer om dagen i C# og .NET, planlagt i tre faser fra grunnleggende til backend. Hovedresultatene er TaskApi, et REST API i .NET 10 med JWT-innlogging, EF Core-migrasjoner, DTO-er og sentral feilhåndtering, og Inventory Manager, et lagdelt lagersystem med rekursivt søk, utskiftbare sorteringsstrategier og lagring til JSON.",
    },
    stack: "C#, .NET 10, ASP.NET Core, EF Core, SQLite",
    links: [{ en: "Source", no: "Kildekode", url: "https://github.com/baselabu/Summer2026" }],
  },
  {
    title: { en: "Emotion recognition from speech", no: "Følelsesgjenkjenning fra tale" },
    year: "2025",
    context: { en: "DAT305 AI for Engineers, group project", no: "DAT305 Kunstig intelligens for ingeniører, gruppeprosjekt" },
    desc: {
      en: "A machine learning pipeline that predicts a speaker's emotional state from recordings in a dataset from Laerdal Medical. We extracted pitch and spectral features with librosa, compared several classifiers with cross-validation, and reported accuracy, F1 and confusion matrices.",
      no: "En maskinlæringspipeline som predikerer en talers følelsestilstand fra lydopptak i et datasett fra Laerdal Medical. Vi hentet ut tonehøyde og spektrale trekk med librosa, sammenlignet flere klassifikatorer med kryssvalidering, og rapporterte nøyaktighet, F1 og forvirringsmatriser.",
    },
    stack: "Python, librosa, scikit-learn, pandas, Jupyter",
  },
  {
    title: { en: "Triple SDES and secure communication", no: "Triple SDES og sikker kommunikasjon" },
    year: "2026",
    context: { en: "DAT510 Security and Vulnerability in Networks", no: "DAT510 Sikkerhet og sårbarhet i nettverk" },
    desc: {
      en: "Cracked a polyalphabetic autokey cipher, implemented SDES and Triple SDES and brute-forced their keys, then built a small secure channel where Alice sends Bob an encrypted file using a Diffie–Hellman key exchange and a Blum Blum Shub random generator. Plain Python, no libraries.",
      no: "Knekket et polyalfabetisk autokey-chiffer, implementerte SDES og Triple SDES og fant nøklene med brute force, og bygde en enkel sikker kanal der Alice sender Bob en kryptert fil med Diffie–Hellman-nøkkelutveksling og en Blum Blum Shub-tallgenerator. Ren Python uten biblioteker.",
    },
    stack: "Python, cryptography",
    links: [{ en: "Source", no: "Kildekode", url: "https://github.com/baselabu/-Tripple--SDES-and-Secure-Communication" }],
  },
];

export const moreProjects = [
  {
    title: { en: "5G NR HARQ simulation", no: "5G NR HARQ-simulering" },
    year: "2026",
    context: { en: "DAT610 Wireless Communication, group, in progress", no: "DAT610 Trådløs kommunikasjon, gruppe, pågår" },
    desc: { en: "Throughput, BLER and retransmissions under changing SNR, Doppler and HARQ settings.", no: "Gjennomstrømning, BLER og retransmisjoner ved varierende SNR, Doppler og HARQ-oppsett." },
    stack: "MATLAB 5G Toolbox",
  },
  {
    title: { en: "Penetration test of a HackTheBox machine", no: "Penetrasjonstest av en HackTheBox-maskin" },
    year: "2026",
    context: { en: "DAT505 Ethical Hacking", no: "DAT505 Etisk hacking" },
    desc: { en: "Full recon, foothold and privilege escalation, written up as a pentest report.", no: "Rekognosering, fotfeste og rettighetseskalering, dokumentert som en pentestrapport." },
    stack: "Kali Linux, nmap",
  },
  {
    title: { en: "Smart fuel management app", no: "App for smart drivstoffstyring" },
    year: "2026",
    context: { en: "Hackathon, team", no: "Hackathon, lag" },
    desc: { en: "Mobile app for fuel sessions, wallet, vehicles and transactions, with a demo mode when the backend is offline.", no: "Mobilapp for tankingsøkter, lommebok, kjøretøy og transaksjoner, med demomodus når backend er nede." },
    stack: "React Native, Expo, Redux Toolkit",
    links: [{ en: "Source", no: "Kildekode", url: "https://github.com/baselabu/hackathon-2026" }],
  },
  {
    title: { en: "Zombie and Ebola outbreak models", no: "Modeller for zombie- og ebolautbrudd" },
    year: "2025",
    context: { en: "MOD300 Applied Python Modelling, group, grade B", no: "MOD300 Anvendt Python-programmering og modellering, gruppe, karakter B" },
    desc: { en: "Compartment models fitted to real Ebola case data from Guinea, Liberia and Sierra Leone.", no: "Kompartmentmodeller tilpasset ekte ebolatall fra Guinea, Liberia og Sierra Leone." },
    stack: "Python, NumPy, SciPy, Jupyter",
  },
  {
    title: { en: "Social media platform", no: "Sosial medieplattform" },
    year: "2025",
    context: { en: "DAT220 Databases, group project", no: "DAT220 Databaser, gruppeprosjekt" },
    desc: { en: "Profiles, posts, comments, likes, follows and interest groups on a hand-designed schema.", no: "Profiler, innlegg, kommentarer, liker, følgere og interessegrupper på et egendesignet skjema." },
    stack: "Python, Flask, SQLite",
    links: [{ en: "Source", no: "Kildekode", url: "https://github.com/baselabu/DAT220-Project-media-platform" }],
  },
  {
    title: "Book Library",
    year: "2025",
    context: { en: "Personal project", no: "Eget prosjekt" },
    desc: { en: "Razor Pages app for managing a library, with CRUD and user accounts.", no: "Razor Pages-app for et bibliotek, med CRUD og brukerkontoer." },
    stack: "C#, ASP.NET Core, EF Core, SQLite",
    links: [{ en: "Source", no: "Kildekode", url: "https://github.com/baselabu/BookLibrary" }],
  },
  {
    title: { en: "Electricity price optimisation for Equinor", no: "Strømprisoptimalisering for Equinor" },
    year: "2024",
    context: { en: "Atea hackathon, team", no: "Atea-hackathon, lag" },
    desc: { en: "Prototype that shifts consumption to cheaper hours, presented to a jury.", no: "Prototype som flytter forbruk til billigere timer, presentert for jury." },
    stack: "JavaScript, HTML, CSS",
  },
  {
    title: { en: "Small C# programs", no: "Små C#-programmer" },
    year: "2025",
    context: { en: "Learning C#", no: "Læring av C#" },
    desc: { en: "Converters, calculators and games from my first weeks with C#.", no: "Omregnere, kalkulatorer og spill fra de første ukene med C#." },
    stack: "C#",
    links: [{ en: "Source", no: "Kildekode", url: "https://github.com/baselabu/Small-projects" }],
  },
];

export const experience = [
  {
    role: { en: "Teaching assistant, DAT120/DAT125 Introduction to Programming", no: "Studentassistent, DAT120/DAT125 Grunnleggende programmering" },
    org: { en: "University of Stavanger", no: "Universitetet i Stavanger" },
    period: { en: "Aug 2026 – present", no: "Aug 2026 – nå" },
    bullets: [
      { en: "Guide students through exercises, with a focus on debugging and reading code.", no: "Veileder studenter i øvingstimer, med vekt på feilsøking og å lese kode." },
      { en: "Review and approve mandatory assignments.", no: "Retter og godkjenner obligatoriske innleveringer." },
    ],
  },
  {
    role: { en: "IT support and exam invigilator, digital exams", no: "IT-vakt og eksamensvakt, digital eksamen" },
    org: { en: "University of Stavanger, Examinations Office", no: "Universitetet i Stavanger, Eksamenskontoret" },
    period: { en: "Nov 2026 – Mar 2027", no: "Nov 2026 – mar 2027" },
    bullets: [
      { en: "Technical support for candidates during digital exams.", no: "Teknisk støtte til kandidater under digital eksamen." },
      { en: "Supervise the exam venue and make sure the rules are followed.", no: "Fører tilsyn i lokalet og passer på at reglene følges." },
    ],
  },
  {
    role: { en: "Cashier", no: "Kassemedarbeider" },
    org: { en: "Meny Kuben, Hønefoss", no: "Meny Kuben, Hønefoss" },
    period: { en: "Nov 2022 – present", no: "Nov 2022 – nå" },
    bullets: [
      { en: "Customer service, transactions and restocking in a busy store.", no: "Kundeservice, transaksjoner og påfylling i en travel butikk." },
    ],
  },
  {
    role: { en: "Security guard", no: "Vekter" },
    org: { en: "Kistefos, Jevnaker", no: "Kistefos, Jevnaker" },
    period: { en: "May – Sep 2024", no: "Mai – sep 2024" },
    bullets: [{ en: "Safe running of events and clear communication with visitors.", no: "Trygg gjennomføring av arrangementer og tydelig kommunikasjon med besøkende." }],
  },
  {
    role: { en: "Tour guide", no: "Guide" },
    org: { en: "Hadeland Glassverk, Jevnaker", no: "Hadeland Glassverk, Jevnaker" },
    period: { en: "Jul – Aug 2022", no: "Jul – aug 2022" },
    bullets: [],
  },
  {
    role: { en: "After-school care assistant", no: "SFO-assistent" },
    org: { en: "Toso skole, Jevnaker", no: "Toso skole, Jevnaker" },
    period: { en: "Jun 2021 – Jul 2022", no: "Jun 2021 – jul 2022" },
    bullets: [],
  },
];

const c = (code, en, no, grade) => ({ code, en, no, grade });

export const education = [
  {
    degree: { en: "MSc Computer Science (Datateknologi)", no: "Master i datateknologi" },
    school: { en: "University of Stavanger", no: "Universitetet i Stavanger" },
    period: "2026 – 2028",
    note: {
      en: "Two-year, 120 ECTS master's taught in English, focused on cloud, security, networks and distributed systems. The master's thesis (DATMAS, 30 ECTS) runs through the second year.",
      no: "Toårig master på 120 studiepoeng, undervist på engelsk, med vekt på sky, sikkerhet, nettverk og distribuerte systemer. Masteroppgaven (DATMAS, 30 studiepoeng) går over andre studieår.",
    },
    terms: [
      {
        name: { en: "Autumn 2026", no: "Høst 2026" },
        courses: [
          c("DAT505", "Ethical Hacking", "Etisk hacking"),
          c("DAT510", "Security and Vulnerability in Networks", "Sikkerhet og sårbarhet i nettverk"),
          c("DAT515", "Cloud Computing Technologies", "Nettskyteknologier"),
          c("DAT610", "Wireless Communication", "Trådløs kommunikasjon"),
        ],
      },
      {
        name: { en: "Spring 2027", no: "Vår 2027" },
        courses: [
          c("DAT600", "Algorithm Theory", "Algoritmeteori"),
          c("DAT520", "Distributed Systems", "Distribuerte systemer"),
          c("DAT560", "Generative AI", "Generativ KI"),
        ],
      },
      {
        name: { en: "Autumn 2027 (planned)", no: "Høst 2027 (planlagt)" },
        courses: [
          c("DAT620", "Project in Computer Science", "Prosjekt i datateknologi"),
          c("DAT535", "Data Engineering", "Data Engineering"),
          c("DAT655", "Blockchain Technology and Applications", "Blokkjedeteknologi og applikasjon"),
          c("IND510", "Project Management", "Prosjektledelse"),
        ],
      },
      {
        name: { en: "2027 – 2028", no: "2027 – 2028" },
        courses: [c("DATMAS", "Master's Thesis in Computer Science", "Masteroppgave i datateknologi")],
      },
    ],
    open: true,
  },
  {
    degree: { en: "BSc Computer Science (Bachelor i ingeniørfag, datateknologi)", no: "Bachelor i ingeniørfag, datateknologi" },
    school: { en: "University of Stavanger", no: "Universitetet i Stavanger" },
    period: "2023 – 2026",
    note: {
      en: "180 ECTS. Highlights: bachelor's thesis for ABB (A), Web Programming (A), Software Development (B), Applied Python Modelling (B).",
      no: "180 studiepoeng. Høydepunkter: bacheloroppgave for ABB (A), webprogrammering (A), programvareutvikling (B), anvendt Python-modellering (B).",
    },
    terms: [
      {
        name: { en: "Year 1", no: "1. år" },
        courses: [
          c("DAT120", "Introduction to Programming", "Grunnleggende programmering"),
          c("MAT100", "Mathematical Methods 1", "Matematiske metoder 1", "B"),
          c("FYS102", "Physics for Computer and Electrical Engineering", "Fysikk for data/elektro"),
          c("KJE101", "Fundamental Chemistry", "Grunnleggende kjemi"),
          c("DAT310", "Web Programming", "Webprogrammering", "A"),
          c("ELE130", "Applied Mathematics and Physics in Robot Programming", "Anvendt matematikk og fysikk i robotprogrammering"),
          c("MAT200", "Mathematical Methods 2", "Matematiske metoder 2"),
        ],
      },
      {
        name: { en: "Year 2", no: "2. år" },
        courses: [
          c("DAT200", "Algorithms and Data Structures", "Algoritmer og datastrukturer"),
          c("DAT250", "Information and Software Security", "Informasjons- og programvaresikkerhet"),
          c("DAT320", "Operating Systems and Systems Programming", "Operativsystemer og systemprogrammering"),
          c("DAT220", "Databases", "Databaser"),
          c("DAT230", "Communication Technology 1", "Kommunikasjonsteknologi 1"),
          c("STA100", "Probability and Statistics 1", "Sannsynlighetsregning og statistikk 1"),
        ],
      },
      {
        name: { en: "Year 3", no: "3. år" },
        courses: [
          c("DAT240", "Software Development", "Programvareutvikling", "B"),
          c("MOD300", "Applied Python Programming and Modelling", "Anvendt Python-programmering og modellering", "B"),
          c("DAT305", "AI for Engineers", "Kunstig intelligens for ingeniører"),
          c("DAT105", "Introduction to AI", "Innføring i kunstig intelligens"),
          c("DATBAC", "Bachelor's Thesis in Computer Science", "Bacheloroppgave i datateknologi", "A"),
          c("ING200", "Technology Management", "Teknologiledelse"),
        ],
      },
    ],
  },
];
