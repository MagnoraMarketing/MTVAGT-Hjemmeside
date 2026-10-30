import type { Faq } from "@/components/FaqAccordion";

// Lokale landingssider under /vagtfirma/[by]. Hver by har sin egen, unikke
// kopi — ingen skabelontekst med udskiftet bynavn. Kun bekræftede facts om
// MT Vagt; lokale forhold er beskrevet generelt (ingen opfundne kunder,
// responstider eller priser). Afstande er omtrentlige og angivet som "ca.".

export type ByAfsnit = { overskrift: string; tekst: string[] };

export type By = {
  slug: string;
  navn: string;
  seoTitel: string;
  seoBeskrivelse: string;
  h1: string;
  // Kort, direkte svar øverst på siden — let for både læsere og AI-søgning at citere.
  kortSvar: string;
  billede: string;
  billedVariant: "nat" | "daggry" | "interior" | "tekstur";
  afsnit: ByAfsnit[];
  // Ydelser der er særligt relevante i byen, med en lokal begrundelse.
  fokus: { slug: string; hvorfor: string }[];
  faq: Faq[];
};

export const byer: By[] = [
  {
    slug: "fredericia",
    navn: "Fredericia",
    seoTitel: "Vagtfirma i Fredericia — autoriseret vagtselskab | MT Vagt",
    seoBeskrivelse:
      "Lokalt, autoriseret vagtfirma med base i Taulov ved Fredericia. Byggepladsvagt, brandvagt, rundering, portvagt og akut vagt døgnet rundt. Ring +45 3131 4428.",
    h1: "Vagtfirma i Fredericia",
    kortSvar:
      "MT Vagt & Vikarservice ApS er et autoriseret vagtfirma med base i Taulov i Fredericia Kommune. Vi leverer byggepladsvagt, brandvagt, runderingsvagt, portvagt, fastvagt og akut vagt til virksomheder, entreprenører og offentlige institutioner i Fredericia — døgnet rundt.",
    billede: "hero-byggeplads-nat",
    billedVariant: "nat",
    afsnit: [
      {
        overskrift: "Et lokalt vagtselskab — ikke et fjernt hovedkontor",
        tekst: [
          "Fredericia er vores hjemby. Vores base ligger i Taulov, få kilometer fra byens erhvervs- og havneområder, og det betyder, at vi kender vejene, industriområderne og de typiske udfordringer på egen hånd. Når du ringer til os, taler du med folk, der selv planlægger og følger op på vagterne.",
          "Byens placering ved motorvejen og Lillebælt — midt mellem Jylland og Fyn — gør den til et knudepunkt for transport, havn, logistik og industri. Det giver mange åbne arealer, oplag og materiel, der står ubemandet om natten — og et tilsvarende behov for synlig bevogtning.",
        ],
      },
      {
        overskrift: "Typiske vagtopgaver i Fredericia",
        tekst: [
          "Vi løser blandt andet bevogtning af byggepladser og oplagspladser, runderinger på erhvervsejendomme uden for åbningstid, adgangskontrol ved porte og brandvagt under og efter varmt arbejde. Ved indbrud, brand eller vandskade kan vi sætte akut bevogtning op, så bygningen ikke står åben natten over.",
          "Fordi vi har kort afstand til hele kommunen, egner vi os godt til opgaver, hvor behovet ændrer sig fra dag til dag — fx når en byggeplads går fra råhus til lukket bygning, eller når en virksomhed har brug for ekstra vagter i en kortere periode.",
        ],
      },
    ],
    fokus: [
      {
        slug: "byggepladsvagt",
        hvorfor:
          "Til entreprenører og bygherrer i Fredericia, der skal beskytte materiel, værktøj og maskiner uden for arbejdstid.",
      },
      {
        slug: "brandvagt",
        hvorfor:
          "Brandvagt under og efter varmt arbejde i industri, på byggepladser og ved arrangementer i byen.",
      },
      {
        slug: "runderingsvagt",
        hvorfor:
          "Planlagte tilsyn med erhvervsejendomme, lagre og oplagspladser om natten og i weekender.",
      },
      {
        slug: "akut-vagt",
        hvorfor:
          "Hurtig bevogtning efter indbrud, brand eller vandskade — vores base ligger i kommunen.",
      },
    ],
    faq: [
      {
        spoergsmaal: "Har MT Vagt kontor i Fredericia?",
        svar: "Ja. Vores base ligger på Taulov Kirkevej 33, 7000 Fredericia. Herfra planlægger og udfører vi vagtopgaver i Fredericia, trekantsområdet og resten af Danmark.",
      },
      {
        spoergsmaal: "Kan I levere vagt i Fredericia med kort varsel?",
        svar: "Vi tilbyder akut vagt døgnet rundt. Ring på +45 3131 4428, så vurderer vi opgaven med det samme og aftaler, hvornår en vagt kan være på stedet.",
      },
      {
        spoergsmaal: "Hvad koster en vagt i Fredericia?",
        svar: "Prisen afhænger af vagtform, antal timer, tidspunkt (nat, weekend, helligdag), varighed og krav til fx adgangskontrol eller rapportering. Vi giver altid et konkret tilbud ud fra din opgave.",
      },
    ],
  },
  {
    slug: "kolding",
    navn: "Kolding",
    seoTitel: "Vagtfirma i Kolding — byggepladsvagt & vagtservice | MT Vagt",
    seoBeskrivelse:
      "Autoriseret vagtfirma til virksomheder, entreprenører og institutioner i Kolding. Byggepladsvagt, rundering, portvagt og fastvagt fra base ved Fredericia. Ring +45 3131 4428.",
    h1: "Vagtfirma i Kolding",
    kortSvar:
      "MT Vagt er et autoriseret vagtselskab, der dækker Kolding fra vores base i Taulov ved Fredericia — ca. 20 km væk. Vi leverer byggepladsvagt, runderingsvagt, portvagt, fastvagt, servicevagt og brandvagt til erhverv, byggeri og offentlige kunder i Kolding.",
    billede: "rundering-koeretoej-nat",
    billedVariant: "nat",
    afsnit: [
      {
        overskrift: "Vagtservice til Koldings erhvervsliv",
        tekst: [
          "Kolding har et bredt erhvervsliv med handel, logistik, produktion og service samlet i erhvervsområder tæt på motorvejen. Mange af disse virksomheder har lagre, varebiler og udstyr, der står ubemandet om natten — og netop dér gør en runderingsvagt med skiftende tidspunkter en forskel.",
          "For butikker og varehuse kan en servicevagt skabe tryghed for kunder og medarbejdere og mindske svind, mens en portvagt kan styre adgangen til større virksomheder med mange leverandører.",
        ],
      },
      {
        overskrift: "Byggeri i Kolding — sikring fra første spadestik",
        tekst: [
          "Når et byggeri i Kolding starter, er pladsen typisk mest sårbar: hegnet er midlertidigt, containerne er nye, og materiellet ankommer løbende. En byggepladsvagt eller planlagte runderinger i de første faser beskytter mod tyveri og hærværk, og en portvagt kan senere tage over, når der kommer mange underentreprenører på pladsen.",
          "Vi tilpasser bevogtningen til byggeriets fase — og rådgiver ærligt om, hvornår fast vagt, rundering eller en kombination giver mest sikkerhed for pengene.",
        ],
      },
    ],
    fokus: [
      {
        slug: "runderingsvagt",
        hvorfor:
          "Tilsyn med lagre og erhvervsejendomme i Koldings erhvervsområder uden for åbningstid.",
      },
      {
        slug: "byggepladsvagt",
        hvorfor:
          "Bevogtning af byggepladser i Kolding — fra første spadestik til aflevering.",
      },
      {
        slug: "servicevagt-butiksvagt",
        hvorfor: "Synlig, servicemindet vagt i butikker og varehuse.",
      },
      {
        slug: "portvagt-stationaer-vagt",
        hvorfor:
          "Adgangskontrol ved større virksomheder og byggepladser med mange leverandører.",
      },
    ],
    faq: [
      {
        spoergsmaal: "Dækker MT Vagt hele Kolding Kommune?",
        svar: "Ja. Kolding er en del af vores kerneområde i trekantsområdet, og vi løser opgaver i hele kommunen fra vores base i Taulov ved Fredericia.",
      },
      {
        spoergsmaal: "Kan én runderingsvagt dække flere adresser i Kolding?",
        svar: "Ja. Runderingsvagt egner sig netop til tilsyn med flere adresser på samme rute, fx flere lagre eller ejendomme i samme erhvervsområde.",
      },
      {
        spoergsmaal: "Er jeres vagter autoriserede?",
        svar: "Ja. MT Vagt er et autoriseret vagtselskab. Alt personale er vagtuddannet, sikkerhedsgodkendt og bærer legitimationskort udstedt af Rigspolitiet.",
      },
    ],
  },
  {
    slug: "vejle",
    navn: "Vejle",
    seoTitel: "Vagtfirma i Vejle — byggepladsvagt, rundering & fastvagt | MT Vagt",
    seoBeskrivelse:
      "Autoriseret vagtselskab til byggeri, erhverv og ejendomme i Vejle. Byggepladsvagt, runderingsvagt, fastvagt og akut vagt i den nordlige del af trekantsområdet. Ring +45 3131 4428.",
    h1: "Vagtfirma i Vejle",
    kortSvar:
      "MT Vagt dækker Vejle som en del af vores kerneområde i trekantsområdet. Fra basen i Taulov ved Fredericia leverer vi byggepladsvagt, runderingsvagt, fastvagt, portvagt og akut vagt til entreprenører, ejendomsadministratorer og virksomheder i Vejle.",
    billede: "fastvagt-adresse-nat",
    billedVariant: "nat",
    afsnit: [
      {
        overskrift: "Vagt til byggeri og byudvikling i Vejle",
        tekst: [
          "Vejle har gennem en årrække udviklet nye bolig- og erhvervsområder — ikke mindst langs havnen og i byens udkant. Hvor der bygges, er der materiel, el-værktøj og kabler, som er attraktive for tyve. En byggepladsvagt om natten og i weekender beskytter pladsen, når håndværkerne er gået hjem.",
          "Under ombygning og renovering af eksisterende ejendomme kan en fastvagt eller planlagte runderinger forhindre indbrud og ulovlig adgang, mens bygningen står tom.",
        ],
      },
      {
        overskrift: "Ejendomme, erhverv og tomme bygninger",
        tekst: [
          "For ejendomsadministratorer og boligselskaber i Vejle tilbyder vi runderinger, der holder øje med fællesarealer, kældre og tekniske installationer uden for normal arbejdstid. Vagten er opmærksom på både indbrud, brand og vandskader og dokumenterer hver runde.",
          "Står en erhvervsbygning tom i en periode — fx mellem to lejere — kan en fastvagt eller rundering mindske risikoen for hærværk og forsikringsskader.",
        ],
      },
    ],
    fokus: [
      {
        slug: "byggepladsvagt",
        hvorfor: "Bevogtning af byggepladser og byudviklingsprojekter i Vejle.",
      },
      {
        slug: "fastvagt",
        hvorfor:
          "Fast vagt på tomme ejendomme og byggerier i standby, dag eller nat.",
      },
      {
        slug: "runderingsvagt",
        hvorfor:
          "Tilsyn med boligejendomme, erhvervsbygninger og tekniske installationer.",
      },
      {
        slug: "akut-vagt",
        hvorfor: "Akut bevogtning efter indbrud, brand eller vandskade.",
      },
    ],
    faq: [
      {
        spoergsmaal: "Leverer MT Vagt vagter i Vejle?",
        svar: "Ja. Vejle er en del af vores kerneområde i trekantsområdet, og vi leverer både faste og midlertidige vagtløsninger i byen og kommunen.",
      },
      {
        spoergsmaal: "Kan I bevogte en tom ejendom i Vejle?",
        svar: "Ja. Vi tilbyder fastvagt og runderingsvagt til tomme ejendomme og bygninger under renovering — i kortere eller længere perioder.",
      },
      {
        spoergsmaal: "Hvordan får jeg et tilbud på vagt i Vejle?",
        svar: "Ring på +45 3131 4428 eller udfyld kontaktformularen med adresse, periode og opgavetype. Så vender vi tilbage med en konkret løsning og pris.",
      },
    ],
  },
  {
    slug: "middelfart",
    navn: "Middelfart",
    seoTitel: "Vagtfirma i Middelfart — vagtservice på Vestfyn | MT Vagt",
    seoBeskrivelse:
      "Autoriseret vagtfirma tæt på Middelfart — lige over Lillebælt fra vores base i Taulov. Byggepladsvagt, rundering, brandvagt og akut vagt på Vestfyn. Ring +45 3131 4428.",
    h1: "Vagtfirma i Middelfart",
    kortSvar:
      "Middelfart ligger lige på den anden side af Lillebælt fra vores base i Taulov ved Fredericia. MT Vagt er et autoriseret vagtselskab, der leverer byggepladsvagt, runderingsvagt, brandvagt, fastvagt og akut vagt i Middelfart og på resten af Vestfyn.",
    billede: "portvagt-daggry",
    billedVariant: "daggry",
    afsnit: [
      {
        overskrift: "Kort vej over Lillebælt",
        tekst: [
          "Middelfart er den fynske nabo til trekantsområdet, og afstanden fra vores base i Taulov er kort. Det gør os til et naturligt valg, når virksomheder, entreprenører og institutioner i Middelfart og på Vestfyn har brug for en vagtpartner, der hurtigt kan være på stedet.",
          "Byen fungerer som porten til Fyn, og erhvervsområderne nær motorvejen rummer både transport, lager og produktion — ofte med udendørs oplag, der kræver tilsyn uden for åbningstid.",
        ],
      },
      {
        overskrift: "Vagtopgaver i Middelfart og på Vestfyn",
        tekst: [
          "Vi bevogter byggepladser, holder tilsyn med erhvervsejendomme og sommerhus- og boligområder efter aftale, og leverer brandvagt ved varmt arbejde og arrangementer. Ved akutte hændelser kan vi sætte bevogtning op, så stedet er sikret, indtil skaden er udbedret.",
          "Har du opgaver både i Middelfart og i trekantsområdet, kan vi samle dem i én aftale med én kontaktperson — det giver overblik og en enklere hverdag.",
        ],
      },
    ],
    fokus: [
      {
        slug: "runderingsvagt",
        hvorfor:
          "Tilsyn med erhvervsejendomme og oplag på Vestfyn — flere adresser på samme rute.",
      },
      {
        slug: "byggepladsvagt",
        hvorfor: "Bevogtning af byggepladser i Middelfart og omegn.",
      },
      {
        slug: "brandvagt",
        hvorfor: "Brandvagt ved varmt arbejde og arrangementer.",
      },
      {
        slug: "akut-vagt",
        hvorfor: "Akut bevogtning tæt på vores base — lige over Lillebælt.",
      },
    ],
    faq: [
      {
        spoergsmaal: "Hvor langt er der fra MT Vagt til Middelfart?",
        svar: "Vores base ligger i Taulov ved Fredericia, ca. 12-15 km fra Middelfart via Lillebæltsbroen.",
      },
      {
        spoergsmaal: "Dækker I også resten af Fyn?",
        svar: "Ja. Vi løser opgaver på hele Fyn, herunder Odense, og i resten af Danmark med hovedfokus på trekantsområdet.",
      },
      {
        spoergsmaal: "Kan I samle opgaver i Middelfart og Fredericia i én aftale?",
        svar: "Ja. Har du flere adresser i trekantsområdet og på Vestfyn, kan vi samle dem i én aftale med én kontaktperson.",
      },
    ],
  },
  {
    slug: "odense",
    navn: "Odense",
    seoTitel: "Vagtfirma i Odense — byggepladsvagt & vagtservice på Fyn | MT Vagt",
    seoBeskrivelse:
      "Autoriseret vagtfirma til byggeri, erhverv og offentlige institutioner i Odense og på Fyn. Byggepladsvagt, portvagt, brandvagt og tryghedsvagt. Ring +45 3131 4428.",
    h1: "Vagtfirma i Odense",
    kortSvar:
      "MT Vagt leverer vagtservice i Odense og på hele Fyn fra vores base i Taulov ved Fredericia. Vi er et autoriseret vagtselskab med byggepladsvagt, portvagt og adgangskontrol, brandvagt, runderingsvagt, tryghedsvagt og kommunevagt til erhverv, byggeri og den offentlige sektor.",
    billede: "kommune-vagt-dag",
    billedVariant: "daggry",
    afsnit: [
      {
        overskrift: "Vagt til store byggerier i Odense",
        tekst: [
          "Odense er Danmarks tredjestørste by og har i de senere år haft mange større bygge- og anlægsprojekter. På store pladser med mange underentreprenører er adgangskontrol ved porten lige så vigtig som bevogtning om natten: hvem er på pladsen, hvornår, og har de lov at være der?",
          "Vi leverer portvagter, der registrerer personer og køretøjer, og byggepladsvagter, der overtager, når arbejdsdagen er slut. Ved varmt arbejde kan vi supplere med brandvagt, så efterkontrollen er dækket.",
        ],
      },
      {
        overskrift: "Tryghed i det offentlige og i institutioner",
        tekst: [
          "Som største by på Fyn har Odense mange offentlige institutioner, bosteder og byrum, hvor tryghed og rolig konflikthåndtering er afgørende. Vores tryghedsvagter og kommunevagter møder borgerne med respekt og arbejder tæt sammen med personalet.",
          "Vi tilpasser løsningen til den enkelte institution — fra en synlig vagt i bestemte tidsrum til fast tilstedeværelse over længere perioder.",
        ],
      },
    ],
    fokus: [
      {
        slug: "portvagt-stationaer-vagt",
        hvorfor:
          "Adgangskontrol på store byggepladser og anlæg med mange underentreprenører.",
      },
      {
        slug: "byggepladsvagt",
        hvorfor: "Bevogtning af byggepladser i Odense om natten og i weekender.",
      },
      {
        slug: "tryghedsvagt-psykiatri",
        hvorfor: "Tryghedsvagt på bosteder, i psykiatrien og i byrummet.",
      },
      {
        slug: "kommunevagt",
        hvorfor: "Vagtløsninger til kommunale anlæg og institutioner.",
      },
    ],
    faq: [
      {
        spoergsmaal: "Leverer MT Vagt vagter i Odense?",
        svar: "Ja. Vi dækker hele Fyn, herunder Odense, fra vores base i Taulov ved Fredericia — med hovedfokus på trekantsområdet og Fyn.",
      },
      {
        spoergsmaal: "Kan I stå for adgangskontrol på en stor byggeplads i Odense?",
        svar: "Ja. Vores portvagter registrerer personer og køretøjer, kontrollerer legitimation og fører log over adgangen. Bemandingen tilpasses pladsens størrelse og åbningstider.",
      },
      {
        spoergsmaal: "Arbejder I for offentlige institutioner?",
        svar: "Ja. Vi løser opgaver for den offentlige sektor, herunder bosteder, genbrugspladser, skoler og rådhuse.",
      },
    ],
  },
];

export const byBySlug = (slug: string) => byer.find((b) => b.slug === slug);
