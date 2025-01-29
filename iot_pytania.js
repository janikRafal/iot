const questions = [
  {
    question:
      "Z powodu wdrożonych kontroli bezpieczeństwa użytkownik może uzyskać dostęp tylko do serwera z FTP. Który komponent AAA to zapewni?",
    type: "single",
    answers: [
      "dostępność",
      "niezawodność",
      "ewidencjonowanie",
      "autoryzacji",
      "audyt",
      "uwierzytelnianie",
    ],
    correct: 3,
    explanation:
      "Autoryzacja jest jednym z trzech komponentów modelu AAA (Authentication, Authorization, Accounting) i odpowiada za określenie, do jakich zasobów użytkownik ma dostęp po pomyślnym uwierzytelnieniu. W tym przypadku, autoryzacja ogranicza dostęp użytkownika tylko do serwera FTP, zapewniając, że nie może on uzyskać dostępu do innych serwerów czy usług w sieci. Dzięki temu kontrola autoryzacji zwiększa bezpieczeństwo sieci, minimalizując ryzyko nieautoryzowanego dostępu do wrażliwych zasobów.",
  },
  {
    question:
      "Jaki rodzaj ataku może wiązać się z wykorzystaniem narzędzi, takich jak nslookup i fping?",
    type: "single",
    answers: [
      "atak w celu uzyskania dostępu",
      "atak rozpoznania",
      "atak robaka",
      "atak trojana",
      "odmowa usługi (DoS)",
      "rozproszona odmowa usługi (DDoS)",
    ],
    correct: 1,
    explanation:
      "Atak rozpoznania polega na zbieraniu informacji o sieci, systemach i urządzeniach w celu przygotowania się do bardziej zaawansowanych ataków. Narzędzia takie jak nslookup i fping są używane do mapowania sieci, identyfikowania aktywnych hostów i zbierania informacji o DNS. Dzięki tym informacjom atakujący mogą lepiej zaplanować swoje działania, np. wybierając cele dla ataków typu DoS lub próbując włamań.",
  },
  {
    question:
      "Ze względów bezpieczeństwa administrator sieci musi zagwarantować, że lokalne komputery nie mogą komunikować się ze sobą za pomocą pakietów ping. Które ustawienia pomogą wykonać to zadanie?",
    type: "single",
    answers: [
      "ustawienia systemu plików",
      "ustawienia interfejsów",
      "ustawienia adresów MAC",
      "ustawienia zapory",
      "ustawienia AAA",
    ],
    correct: 3,
    explanation:
      "Ustawienia zapory sieciowej (firewall) pozwalają na kontrolowanie ruchu sieciowego między komputerami. Aby zablokować pakiety ping (ICMP Echo Request i Echo Reply), administrator może skonfigurować reguły zapory, które blokują te typy pakietów. Dzięki temu lokalne komputery nie będą mogły komunikować się ze sobą za pomocą ping, co może pomóc w zapobieganiu pewnym typom ataków lub nieautoryzowanej komunikacji.",
  },
  {
    question:
      "Użytkownicy sieci są zobowiązani do wprowadzenia poświadczeń nazwy użytkownika i hasła, które zostaną zweryfikowane przez serwer. Który serwer zapewniłby taką usługę?",
    type: "single",
    answers: ["AAA", "NAT", "SNMP", "RADIUS", "TACACS+", "802.1X"],
    correct: 3,
    explanation:
      "RADIUS (Remote Authentication Dial-In User Service) to protokół używany do uwierzytelniania, autoryzacji i ewidencji użytkowników, którzy próbują uzyskać dostęp do sieci. Serwer RADIUS weryfikuje poświadczenia użytkowników (nazwę użytkownika i hasło) przed przyznaniem dostępu do zasobów sieciowych. Jest szeroko stosowany w środowiskach korporacyjnych do zarządzania dostępem użytkowników.",
  },
  {
    question:
      "Jakie korzyści w zakresie bezpieczeństwa daje włączenie BPDU guard na interfejsach obsługujących PortFast?",
    type: "single",
    answers: [
      "zapobieganie dotarciu obcych przełączników do sieci",
      "ochrona przed pętlami warstwy 2",
      "egzekwowanie lokalizacji mostów głównych",
      "zapobieganie atakom przepełnienia bufora",
      "Opcja 2",
    ],
    correct: 0,
    explanation:
      "BPDU Guard jest funkcją zabezpieczeń, która automatycznie wyłącza porty przełącznika, gdy otrzymają one BPDU (Bridge Protocol Data Units). Porty skonfigurowane z PortFast są przeznaczone do podłączania urządzeń końcowych, takich jak komputery czy telefony IP, które nie powinny wysyłać BPDU. Jeśli obcy przełącznik spróbuje wprowadzić BPDU do sieci przez PortFast, BPDU Guard natychmiast wyłączy port, zapobiegając w ten sposób potencjalnym atakom lub nieautoryzowanemu dodaniu przełączników do sieci.",
  },
  {
    question:
      "Jeśli chodzi o bezpieczeństwo, która warstwa OSI jest uważana za najsłabsze ogniwo w systemie sieciowym?",
    type: "single",
    answers: ["warstwa 1", "warstwa 2", "warstwa 3", "warstwa 4", "warstwa 5"],
    correct: 1,
    explanation:
      "Warstwa 2 modelu OSI, czyli warstwa łącza danych, jest często uważana za najsłabsze ogniwo pod względem bezpieczeństwa. Ataki na tę warstwę, takie jak spoofing adresów MAC, ataki ARP czy VLAN hopping, są stosunkowo łatwe do przeprowadzenia i mogą prowadzić do poważnych naruszeń bezpieczeństwa. Ponadto, wiele zabezpieczeń sieciowych koncentruje się na wyższych warstwach, co sprawia, że warstwa 2 jest mniej chroniona i bardziej podatna na ataki.",
  },
  {
    question:
      "Administrator sieci konfiguruje zabezpieczenia portu na przełączniku. Polityka bezpieczeństwa firmy określa, że w przypadku naruszenia należy odrzucać pakiety o nieznanych adresach źródłowych i nie wysyłać żadnych powiadomień. Który tryb naruszenia powinien być skonfigurowany na interfejsach?",
    type: "single",
    answers: ["off", "restrict", "protect", "shutdown"],
    correct: 2,
    explanation:
      "Tryb 'protect' w zabezpieczeniach portu przełącznika Cisco powoduje, że pakiety z nieznanymi adresami MAC są po prostu odrzucane, bez generowania powiadomień lub logów naruszeń. Jest to zgodne z polityką firmy, która wymaga odrzucania takich pakietów bez informowania administratorów, co może pomóc w uniknięciu nadmiernego logowania lub alertów w przypadku nieautoryzowanych prób dostępu.",
  },
  {
    question:
      "Administrator sieci konfiguruje DAI na przełączniku za pomocą polecenia `ip arp inspection validate src-mac`. Jaki jest cel tego polecenia konfiguracyjnego?",
    type: "single",
    answers: [
      "Sprawdza źródłowy adres MAC w nagłówku Ethernet z tablicą adresów MAC.",
      "Sprawdza źródłowy adres MAC w nagłówku Ethernet pod kątem skonfigurowanych przez użytkownika list ACL dla ARP.",
      "Sprawdza źródłowy adres MAC w nagłówku Ethernet z docelowym adresem MAC w treści ARP.",
      "Sprawdza źródłowy adres MAC w nagłówku Ethernet z adresem MAC nadawcy w treści ARP.",
    ],
    correct: 3,
    explanation:
      "Polecenie `ip arp inspection validate src-mac` włącza weryfikację ARP (Dynamic ARP Inspection) poprzez sprawdzenie, czy źródłowy adres MAC w nagłówku Ethernet odpowiada adresowi MAC nadawcy w treści ARP. Jest to mechanizm bezpieczeństwa, który pomaga zapobiegać atakom typu ARP spoofing, gdzie atakujący podszywa się pod inny adres MAC, aby przechwycić ruch sieciowy lub przeprowadzić inne nieautoryzowane działania.",
  },
  {
    question:
      "Który komponent ma chronić przed nieautoryzowaną komunikacją do i z komputera?",
    type: "single",
    answers: [
      "program antywirusowy",
      "firewall",
      "skaner portów",
      "antymalware",
      "centrum zabezpieczeń",
    ],
    correct: 1,
    explanation:
      "Firewall (zapora sieciowa) jest komponentem zabezpieczającym, który kontroluje ruch sieciowy przychodzący i wychodzący na podstawie zestawu reguł bezpieczeństwa. Chroni komputer przed nieautoryzowaną komunikacją, blokując potencjalnie szkodliwe połączenia i pozwalając tylko na dozwolony ruch. Dzięki temu firewall skutecznie zabezpiecza system przed różnymi zagrożeniami zewnętrznymi i ogranicza możliwość nieautoryzowanego dostępu.",
  },
  {
    question:
      "Które dwa rozwiązania Cisco pomagają zapobiegać atakom zagłodzenia DHCP?",
    type: "multiple",
    answers: [
      "Zabezpieczenie portu",
      "IP Source Guard",
      "DHCP Snooping",
      "Web Security",
      "Dynamiczna inspekcja ARP",
    ],
    correct: [0, 2],
    explanation:
      "Ataki zagłodzenia DHCP polegają na wyczerpaniu dostępnych adresów IP w serwerze DHCP poprzez wysyłanie dużej liczby żądań DHCP przez atakującego. 'Zabezpieczenie portu' ogranicza liczbę adresów MAC, które mogą być przypisane do danego portu przełącznika, co ogranicza możliwość wyczerpania adresów IP. 'DHCP Snooping' monitoruje i kontroluje ruch DHCP, tworząc bazę zaufanych portów i blokując nieautoryzowane serwery DHCP, co zapobiega wyczerpaniu puli adresów IP przez atakujących.",
  },
  {
    question:
      "Jaki plan ograniczania skutków jest najlepszy, aby udaremnić atak DoS, który powoduje przepełnienie tablic adresów MAC?",
    type: "single",
    answers: [
      "Wyłącz DTP.",
      "Wyłącz VTP.",
      "Włącz zabezpieczenia portu.",
      "Wyłącz STP.",
      "Umieść nieużywane porty w nieużywanej sieci VLAN.",
      "Włącz BPDU.",
    ],
    correct: 2,
    explanation:
      "Włączenie zabezpieczeń portu (port security) na przełączniku pozwala na ograniczenie liczby adresów MAC, które mogą być przypisane do danego portu. Dzięki temu można zapobiec przepełnieniu tablic adresów MAC przez atak DoS, gdzie atakujący próbuje wprowadzić dużą liczbę fałszywych adresów MAC do sieci. Zabezpieczenia portu mogą również zablokować port w przypadku wykrycia nieautoryzowanych adresów MAC, co dodatkowo zwiększa ochronę przed tego typu atakami.",
  },
  {
    question:
      "Spójrz na rysunek. Port Fa0/2 został już prawidłowo skonfigurowany. Telefon IP i komputer PC działają prawidłowo. Która z wymienionych konfiguracji portu Fa0/2 przełącznika będzie najbardziej odpowiednia dla administratora sieci, aby spełnić następujące cele?\n- Nikt nie może odłączyć telefonu IP ani komputera PC lub podłączyć inne przewodowe urządzenia.\n- Jeśli inne urządzenie zostało podłączone, to port Fa0/2 powinien zostać wyłączony.\n- Adresy MAC telefonu IP i komputera powinny zostać automatycznie wykryte przez przełącznik i dodane do bieżącej konfiguracji.",
    type: "single",
    image: "q12_picture.png",
    answers: [
      "SWA(config-if)# switchport port-security SWA(config-if)# switchport port-security mac-address sticky",
      "SWA(config-if)# switchport port-security mac-address sticky SWA(config-if)# switchport port-security maximum 2",
      "SWA(config-if)# switchport port-security SWA(config-if)# switchport port-security maximum 2 SWA(config-if)# switchport port-security mac-address sticky",
      "SWA(config-if)# switchport port-security SWA(config-if)# switchport port-security maximum 2 SWA(config-if)# switchport port-security mac-address sticky switchport SWA(config-if)# port security violation restrict",
    ],
    correct: 3,
    explanation:
      "Konfiguracja portu z zabezpieczeniami portu, ustawieniem maksymalnej liczby adresów MAC na 2 oraz trybem naruszenia na 'restrict' zapewnia, że tylko dwa znane urządzenia (telefon IP i komputer PC) mogą korzystać z portu Fa0/2. Opcja 'sticky' pozwala przełącznikowi automatycznie zapamiętać adresy MAC tych urządzeń. Jeśli ktoś podłączy dodatkowe urządzenie, które nie jest na liście, port zostanie ograniczony (zamiast całkowitego wyłączenia), co zgodne jest z polityką bezpieczeństwa firmy.",
  },
  {
    question:
      "Zabezpieczenie portu zostało skonfigurowane na interfejsie Fa 0/12 przełącznika S1. Jakie działanie nastąpi, gdy PC1 jest dołączony do przełącznika S1 z zastosowaną konfiguracją?",
    type: "single",
    image: "q13_picture.png",
    answers: [
      "Ramki z PC1 zostaną usunięte i zostanie utworzony komunikat dziennika.",
      "Ramki z PC1 zostaną odrzucone i nie będzie żadnego dziennika naruszenia.",
      "Ramki z PC1 spowodują natychmiastowe zamknięcie interfejsu i zostanie wprowadzony wpis dziennika.",
      "Ramki z PC1 zostaną przekazane do miejsca docelowego i zostanie utworzony wpis dziennika.",
      "Ramki z PC1 zostaną przekazane do miejsca docelowego, ale wpis dziennika nie zostanie utworzony.",
      "Ramki z PC1 zostaną przesłane dalej, ponieważ brakuje polecenia switchport port-security violation.",
    ],
    correct: 2,
    explanation:
      "Gdy zabezpieczenia portu są skonfigurowane na interfejsie, a do portu podłączony zostanie nieautoryzowany adres MAC (np. PC1, jeśli nie jest na liście dozwolonych adresów), przełącznik natychmiast wyłączy interfejs (port) i wygeneruje wpis w dzienniku zdarzeń. To działanie zabezpiecza sieć przed potencjalnymi atakami, blokując port, na którym wykryto naruszenie bezpieczeństwa.",
  },
  {
    question: "Które trzy usługi świadczone są w ramach AAA?",
    type: "multiple",
    answers: [
      "ewidencjonowanie",
      "niezawodność",
      "autoryzacja",
      "integralność danych",
      "uwierzytelnianie",
    ],
    correct: [0, 2, 4],
    explanation:
      "Model AAA obejmuje trzy główne usługi: Ewidencjonowanie (Accounting) rejestruje działania użytkowników, Autoryzacja (Authorization) określa, do jakich zasobów użytkownik ma dostęp, oraz Uwierzytelnianie (Authentication) weryfikuje tożsamość użytkownika. Te trzy komponenty razem zapewniają kompleksowe zarządzanie dostępem i bezpieczeństwem w sieciach komputerowych.",
  },
  {
    question:
      "Która usługa jest domyślnie włączona na przełączniku, a która może ujawnić znaczące informacje o routerze i potencjalnie uczynić go bardziej podatnym na ataki?",
    type: "single",
    answers: ["FTP", "LLDP", "HTTP", "TFTP", "CDP", "NLDP"],
    correct: 4,
    explanation:
      "CDP (Cisco Discovery Protocol) jest domyślnie włączoną usługą na przełącznikach Cisco, która umożliwia urządzeniom sieciowym wymianę informacji o sobie, takich jak nazwa urządzenia, adres IP, typ interfejsów itp. Chociaż jest użyteczna do zarządzania siecią, CDP może ujawniać szczegółowe informacje o urządzeniach, co potencjalnie może być wykorzystane przez atakujących do planowania ataków na infrastrukturę sieciową.",
  },
  {
    question:
      "Który atak warstwy 2 spowoduje, że uprawnieni użytkownicy nie otrzymają prawidłowych adresów IP?",
    type: "single",
    answers: [
      "fałszowanie adresów IP",
      "fałszowanie ARP",
      "fałszowanie adresów MAC",
      "zalewanie adresami MAC",
      "zagłodzenie DHCP",
    ],
    correct: 4,
    explanation:
      "Atak zagłodzenia DHCP polega na wyczerpaniu dostępnych adresów IP na serwerze DHCP poprzez wysyłanie dużej liczby fałszywych żądań DHCP przez atakującego. W rezultacie uprawnieni użytkownicy nie będą w stanie otrzymać prawidłowych adresów IP, co uniemożliwi im dostęp do sieci. Mechanizmy takie jak DHCP Snooping mogą pomóc w ochronie przed tego typu atakami.",
  },
  {
    question:
      "Jaki może być cel ewidencjonowania jako funkcji bezpieczeństwa sieciowego?",
    type: "single",
    answers: [
      "do śledzenia działań użytkownika",
      "do śledzenia działań aplikacji",
      "wymaga od użytkowników aby udowodnili, że są tymi za których się podają",
      "do dostarczania funkcjonalności zapytań i odpowiedzi",
      "do określenia, do których zasobów użytkownicy mają mieć dostęp",
    ],
    correct: 0,
    explanation:
      "Ewidencjonowanie (Accounting) w modelu AAA służy do rejestrowania działań użytkowników w sieci. Dzięki temu administratorzy mogą śledzić, kto i kiedy korzystał z określonych zasobów, co jest kluczowe dla audytów bezpieczeństwa, wykrywania nadużyć oraz monitorowania aktywności sieciowej. Ewidencjonowanie pomaga w identyfikacji potencjalnych zagrożeń i zapewnia podstawę do analizowania incydentów bezpieczeństwa.",
  },
  {
    question:
      "Jakie trzy kroki konfiguracyjne muszą być wykonane, aby wdrożyć dostęp SSH do routera?",
    type: "multiple",
    answers: [
      "ustawić unikalne hasło",
      "ustawić unikalną nazwę hosta",
      "ustawić nazwę domeny IP",
      "dodać konto użytkownika",
      "ustawić hasło trybu uprzywilejowanego",
      "ustawić hasło na linii konsoli",
    ],
    correct: [1, 2, 3],
    explanation:
      "Aby wdrożyć dostęp SSH do routera, należy wykonać kilka kroków konfiguracyjnych: 1) Ustawić unikalną nazwę hosta, co jest wymagane do generowania kluczy SSH; 2) Ustawić nazwę domeny IP, która jest również potrzebna do generowania kluczy SSH; 3) Dodać konto użytkownika, które będzie używane do uwierzytelniania się przez SSH. Te kroki są niezbędne do skonfigurowania bezpiecznego dostępu zdalnego do urządzenia.",
  },
  {
    question: "Jakie są trzy techniki ograniczania ataków VLAN?",
    type: "multiple",
    answers: [
      "Wyłącz DTP.",
      "Włącz trunk ręcznie.",
      "Zmień VLAN natywny na nieużywany.",
      "Włącz BPDU guard.",
      "Włącz Source Guard.",
      "Użyj przypisanych sieci VLAN.",
    ],
    correct: [0, 1, 2],
    explanation:
      "Aby ograniczyć ataki VLAN, można zastosować następujące techniki: 1) Wyłączenie DTP (Dynamic Trunking Protocol) zapobiega automatycznemu negocjowaniu trunków, co utrudnia atakującym wprowadzenie fałszywych trunków do sieci; 2) Ręczne włączenie trunków (zamiast dynamicznego) zapewnia większą kontrolę nad tym, które porty mogą tworzyć trunki, co zmniejsza ryzyko nieautoryzowanych połączeń; 3) Zmiana VLAN natywnego na nieużywany pomaga w zapobieganiu atakom typu VLAN hopping, gdzie atakujący próbuje przesłać ruch do nieautoryzowanych VLANów poprzez modyfikację tagów VLAN.",
  },
  {
    question:
      "Jakiemu rodzajowi ataku z przeskokiem VLAN można zapobiec, wyznaczając nieużywaną sieć VLAN jako natywną sieć VLAN?",
    type: "single",
    answers: [
      "fałszowanie DTP",
      "fałszowanie DHCP",
      "podwójne znakowanie VLAN",
      "zagłodzenie DHCP",
    ],
    correct: 2,
    explanation:
      "Atak podwójnego znakowania VLAN (Double VLAN Tagging) polega na dodawaniu dwóch tagów VLAN do ramki Ethernet, co pozwala na przesyłanie ruchu do nieautoryzowanych VLANów. Poprzez wyznaczenie nieużywanej sieci VLAN jako natywnej VLAN, można zmniejszyć ryzyko tego typu ataku, ponieważ przełączniki będą oczekiwać tagów zgodnych z konfiguracją, a nieużywana VLAN nie będzie miała aktywnych portów, które mogłyby zostać wykorzystane do podszywania się pod inne VLANy.",
  },
];
