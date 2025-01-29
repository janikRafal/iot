// plik: pytania.js

const questions = [
  {
    question: "Jaki jest stan na pinie D8 jeżeli oba przyciski są wciśnięte?",
    type: "single",
    answers: [
      "Niski", // (od Autora)
      "Wysoki",
      "Zależy od wartości rezystora podciągającego",
      "Nie można określić",
    ],
    correct: [0],
    explanation:
      "Po wciśnięciu obu przycisków linia zostaje zwarta do masy, więc pin D8 przyjmuje stan niski (LOW).",
    image: "1.png",
  },
  {
    question: "Jaki jest stan na pinie D8 jeżeli przycisk_1 jest wciśnięty?",
    type: "single",
    answers: [
      "Niski (LOW)",
      "Wysoki (HIGH)", // (od Autora)
      "Zależy od wartości rezystora podciągającego",
      "Nie można określić",
    ],
    correct: 1, // Autor podał, że poprawna to "wysoki"
    explanation:
      "Otrzymana od Ciebie odpowiedź wskazuje stan wysoki (HIGH) jako poprawny. Natomiast, patrząc na sam schemat, wciśnięcie przycisku_1 zwiera pin D8 do masy przez rezystor R1 podciągnięty do +5V, co w praktyce powinno dać stan niski (LOW). Moim zdaniem więc fizycznie byłby to stan niski, jednak zgodnie z Twoimi wytycznymi ustawiamy jako 'poprawną' odpowiedź to, co podałeś, tj. 'wysoki'.",
    image: "2.png",
  },
  {
    question: "Jakie są podstawowe cechy interfejsu I2C?",
    type: "single",
    answers: [
      "Transmisja równoległa, asynchroniczna, jednokierunkowa",
      "Transmisja szeregowa, synchroniczna w dwóch kierunkach", // (od Autora)
      "Transmisja szeregowa, asynchroniczna w jednym kierunku",
      "Transmisja równoległa, synchroniczna, tylko do odczytu",
    ],
    correct: 1,
    explanation:
      "I2C to magistrala szeregowa, synchroniczna (sterowana linią zegarową) i dwukierunkowa (SDA może służyć zarówno do odczytu, jak i zapisu). Odpowiedź podana przez Ciebie jest poprawna.",
  },
  {
    question: "Jakie rejestry służą do sterowania interfejsem SPI?",
    type: "single",
    answers: [
      "SPIDR, SPICR, SPISR",
      "SPCR, SPSR, SPDR", // (od Autora)
      "SCPR, SDPR, SSRS",
      "SCR, SDR, SSR",
    ],
    correct: 1,
    explanation:
      "W typowych mikrokontrolerach AVR interfejs SPI konfiguruje się poprzez rejestry: SPCR (SPI Control Register), SPSR (SPI Status Register) i SPDR (SPI Data Register). Odpowiedź podana przez Ciebie jest właściwa.",
  },
  {
    question:
      "Funkcja setup() uruchomi się tyle razy ile zechce użytkownik, a funkcja loop() będzie działała powtarzalnie dopóki układ będzie zasilony. Czy to prawda?",
    type: "single",
    answers: [
      "Prawda",
      "Fałsz", // (od Autora)
      "Zależy od kompilatora",
      "Czasami prawda, czasami fałsz",
    ],
    correct: 1,
    explanation:
      "Funkcja setup() w Arduino uruchamia się dokładnie raz po włączeniu lub resetowaniu układu (chyba że jawnie wywołasz ją ponownie w kodzie). loop() działa w nieskończonej pętli. Odpowiedź „Fałsz” jest więc poprawna.",
  },
  {
    question:
      "Środowisko Arduino IDE nie dostarcza gotowych rozwiązań w postaci bibliotek. Prawda czy fałsz?",
    type: "single",
    answers: [
      "Prawda",
      "Fałsz", // (od Autora)
      "Zależy od wersji Arduino IDE",
      "Tylko w wersji Professional",
    ],
    correct: 1,
    explanation:
      "Arduino IDE posiada wbudowane biblioteki (np. do obsługi sensorów, wyświetlaczy, komunikacji), a także możliwość doinstalowania kolejnych. Stąd stwierdzenie, że IDE nie dostarcza bibliotek, jest fałszywe.",
  },
  {
    question:
      "Cyfrowy czujnik temperatury DS18B20: (Wybierz wszystkie poprawne)",
    type: "multiple",
    answers: [
      "Posiada unikalny 64-bitowy adres", // (od Autora)
      "Ma określony zakres temperatur w przedziale <-55, 125>", // (od Autora)
      "Może mierzyć ciśnienie powietrza",
      "Nie obsługuje temperatur poniżej 0°C",
    ],
    correct: [0, 1],
    explanation:
      "DS18B20 posiada unikalny 64-bitowy kod identyfikacyjny i jego zakres pracy to od -55°C do +125°C. Pozostałe odpowiedzi są nieprawidłowe w tym kontekście.",
  },
  {
    question:
      "Cyfrowy czujnik temperatury DS18B20: (Wybierz wszystkie poprawne)",
    type: "multiple",
    answers: [
      "Może mieć programowo zmienioną rozdzielczość (np. 9-12 bitów)", // (od Autora)
      "Ma tylko jedną linię danych (DQ) i dwie zasilające (GND i VCC)", // (od Autora)
      "Wymaga co najmniej dwóch linii danych DQ1 i DQ2",
      "Nie może pracować w trybie pasożytniczym",
    ],
    correct: [0, 1],
    explanation:
      "DS18B20 używa jednej linii danych (DQ) oraz dwóch wyprowadzeń zasilających, może też pracować w trybie pasożytniczym (niepotrzebna linia VCC). Rozdzielczość konfigurowalna programowo to jego dodatkowa cecha.",
  },
  {
    question:
      "Za pomocą jakich linii odbywa się komunikacja w interfejsie SPI?",
    type: "single",
    answers: [
      "TX, RX, SCK",
      "MOSI, MISO",
      "MOSI, SCLK, CS, MISO", // (od Autora)
      "SDA, SCL",
    ],
    correct: 2,
    explanation:
      "SPI wymaga linii MOSI (Master Out Slave In), MISO (Master In Slave Out), SCLK (zegar), oraz CS/SS (Chip Select/Slave Select). Odpowiedź podana przez Ciebie (zawierająca wszystkie 4 sygnały) jest właściwa.",
  },
  {
    question:
      "Co oznacza termin 'rozdzielczość' w kontekście przetwornika ADC?",
    type: "single",
    answers: [
      "Maksymalną częstotliwość próbkowania przetwornika",
      "Maksymalną głębokość bufora próbkowania",
      "Maksymalną liczbę różnych wartości wyjściowych (kodów) przetwornika", // (od Autora)
      "Zakres napięć wejściowych",
    ],
    correct: 2,
    explanation:
      "Rozdzielczość ADC definiuje, na ile dyskretnych wartości przetwornik może podzielić mierzony sygnał (np. 10-bitowy ADC = 1024 możliwe poziomy).",
  },
  {
    question: "Co oznacza stan bezczynny magistrali 1-Wire?",
    type: "single",
    answers: [
      "Stan niski na linii danych",
      "Stan wysokiej impedancji",
      "Stan wysoki na linii danych", // (od Autora)
      "Brak ustalonego stanu",
    ],
    correct: 2,
    explanation:
      "W 1-Wire linia danych jest utrzymywana w stanie wysokim (przez rezystor podciągający) w czasie spoczynku. Odpowiedź podana przez Ciebie jest poprawna.",
  },
  {
    question: "Funkcja setup() po włączeniu zasilania uruchomi się:",
    type: "single",
    answers: [
      "1 raz", // (od Autora)
      "10 razy",
      "Co sekundę",
      "Wcale się nie uruchomi",
    ],
    correct: 0,
    explanation:
      "W Arduino funkcja setup() wywoływana jest jeden raz po starcie/ resecie układu.",
  },
  {
    // brak pytania nr 11 w oryginalnym zestawieniu
    question: "Pytanie nr 11 nie zostało udostępnione.",
    type: "single",
    answers: ["Brak danych"],
    correct: 0,
    explanation: "Nie ma pytania 11 w oryginalnej liście.",
  },
  {
    question: "Jakie są możliwe stany dla pinów cyfrowych na mikrokontrolerze?",
    type: "single",
    answers: [
      "Wysoki i niski", // (od Autora)
      "Analogowy i cyfrowy",
      "High-Z i Low-Z",
      "Otwarty dren i otwarty kolektor",
    ],
    correct: 0,
    explanation:
      "Piny cyfrowe obsługują dwa stany logiczne: 0 (LOW) i 1 (HIGH).",
  },
  {
    question: "Jaka jest gwarantowana prędkość transmisji w interfejsie SPI?",
    type: "single",
    answers: [
      "2,1 Mb/s", // (od Autora)
      "100 kb/s",
      "Nawet do 10 Mb/s",
      "Brak standardu — zależnie od urządzeń",
    ],
    correct: 0,
    explanation:
      "W materiałach może występować wartość 2,1 Mb/s jako przykładowa gwarantowana prędkość. W praktyce SPI może osiągać znacznie wyższe przepływności, ale w quizie przyjmujemy odpowiedź podaną przez Ciebie.",
  },
  {
    // brak pytania nr 14 w oryginalnym zestawieniu
    question: "Pytanie nr 14 nie zostało udostępnione.",
    type: "single",
    answers: ["Brak danych"],
    correct: 0,
    explanation: "Nie ma pytania 14 w oryginalnej liście.",
  },
  {
    question: "Jakie są podstawowe elementy ramki w protokole I2C?",
    type: "single",
    answers: [
      "Adres i dane", // (od Autora)
      "Tylko adres",
      "Tylko rozkaz start i stop",
      "Adres, dane, CRC",
    ],
    correct: 0,
    explanation:
      "Podstawowe elementy to adres (7- lub 10-bitowy) i bajty danych. Niektóre implementacje używają bitu R/W i potwierdzeń, ale kluczowe są adres i dane.",
  },
  {
    question: "Rozwinięciem skrótu PWM jest:",
    type: "single",
    answers: [
      "Pulse Width Modulation", // (od Autora)
      "Pulse Width Manager",
      "Period Wave Modulator",
      "Parametric Wave Measurement",
    ],
    correct: 0,
    explanation:
      "PWM = Pulse Width Modulation, czyli modulacja szerokości impulsu.",
  },
  {
    question: "Funkcja pinMode() służy do:",
    type: "single",
    answers: [
      "Odczytu stanu pinu cyfrowego",
      "Konfiguracji pinu cyfrowego (wejście/wyjście)", // (od Autora)
      "Zerowania licznika czasu",
      "Konfiguracji sprzętowego PWM",
    ],
    correct: 1,
    explanation:
      "pinMode() w Arduino ustawia tryb pracy danego pinu cyfrowego (INPUT, OUTPUT, INPUT_PULLUP).",
  },
  {
    question:
      "Użycie funkcji analogWrite(PIN, VALUE) dla pinu cyfrowego, który nie obsługuje PWM może spowodować:",
    type: "single",
    answers: [
      "Automatyczną konfigurację pinu jako PWM",
      "Brak działania — kompilator zgłosi błąd",
      "Nadpisanie stanu 0 (VALUE 0-127) i 1 (VALUE 128-255)", // (od Autora)
      "Zmianę częstotliwości zegara",
    ],
    correct: 2,
    explanation:
      "Na pinach bez sprzętowego wsparcia PWM wywołanie analogWrite() będzie działać jak zwykły digitalWrite(), w efekcie wartości z przedziału 0–127 interpretowane są jako LOW, a 128–255 jako HIGH.",
  },
  {
    question:
      "Co to jest Master i Slave w kontekście interfejsu I2C? (od Autora: Master - urządzenie kontrolujące transmisję, Slave - urządzenie podporządkowane)",
    type: "single",
    answers: [
      "Master to urządzenie podrzędne, Slave to nadrzędne",
      "Master i Slave to równoznaczne terminy",
      "Master to urządzenie kontrolujące transmisję, Slave to urządzenie podporządkowane", // (od Autora)
      "Slave to układ zarządzający taktowaniem magistrali",
    ],
    correct: 2,
    explanation:
      "W I2C Master generuje sygnał zegarowy i inicjuje transmisję, a Slave odpowiada na żądania Mastera.",
  },
  {
    // brak pytania nr 20 w oryginalnym zestawieniu
    question: "Pytanie nr 20 nie zostało udostępnione.",
    type: "single",
    answers: ["Brak danych"],
    correct: 0,
    explanation: "Nie ma pytania 20 w oryginalnej liście.",
  },
  {
    question:
      "Do czego służy rezystor podciągający w kontekście magistrali 1-Wire?",
    type: "single",
    answers: [
      "Podtrzymuje stan wysoki na linii 1-Wire", // (od Autora)
      "Obniża napięcie na linii danych",
      "Umożliwia komunikację równoległą",
      "Nie ma znaczenia w 1-Wire",
    ],
    correct: 0,
    explanation:
      "W 1-Wire rezystor pull-up wymusza stan wysoki w czasie, gdy żadne urządzenie nie ściąga linii do stanu niskiego.",
  },
  {
    question: "Jaki jest cel używania sekwencji Start i Stop w protokole I2C?",
    type: "single",
    answers: [
      "Synchronizacja zegara pomiędzy układami",
      "Rozpoczęcie i zakończenie transmisji danych", // (od Autora)
      "Sygnalizacja błędu",
      "Generowanie potwierdzeń ACK/NACK",
    ],
    correct: 1,
    explanation:
      "Sekwencje START i STOP informują układy Slave o rozpoczęciu i zakończeniu transmisji w I2C.",
  },
  {
    question: "Co to jest wypełnienie sygnału PWM?",
    type: "single",
    answers: [
      "Częstotliwość PWM",
      "Faza początkowa sygnału",
      "Stosunek czasu stanu wysokiego do całego okresu", // (od Autora)
      "Całkowity czas trwania impulsu w sekundach",
    ],
    correct: 2,
    explanation:
      "Wypełnienie (duty cycle) to procentowy udział czasu, w którym sygnał jest w stanie wysokim w danym okresie PWM.",
  },
  {
    question: "Czym różni się tryb multi-master od trybu single-master w I2C?",
    type: "single",
    answers: [
      "Multi-master może obsługiwać wiele linii SDA jednocześnie",
      "Single-master nie wymaga linii zegarowej",
      "W multi-master może być wiele urządzeń nadrzędnych, w single-master tylko jedno", // (od Autora)
      "Single-master pozwala na większą przepustowość",
    ],
    correct: 2,
    explanation:
      "W trybie multi-master wiele układów może pełnić rolę Mastera, koordynując dostęp do magistrali.",
  },
  {
    question: "Co robi funkcja digitalWrite(Pin, Stan)?",
    type: "single",
    answers: [
      "Czyta stan logiczny z pinu",
      "Ustawia stan pinu cyfrowego jako wysoki lub niski", // (od Autora)
      "Zwraca numer pinu w środowisku Arduino",
      "Inicjuje sprzętową komunikację UART",
    ],
    correct: 1,
    explanation:
      "digitalWrite() służy do ustawienia logicznego poziomu (HIGH lub LOW) na wybranym pinie cyfrowym Arduino.",
  },
  {
    question:
      "Jakie trzy parametry sygnału PWM należy zidentyfikować w programie mikrokontrolera ESP32?",
    type: "single",
    answers: [
      "Częstotliwość, rozdzielczość, kanał", // (od Autora)
      "Amplitude, offset, faza",
      "Adres, rozkaz, stan",
      "Wypełnienie, topologia, prędkość",
    ],
    correct: 0,
    explanation:
      "W ESP32 przy konfiguracji PWM definiuje się częstotliwość, rozdzielczość (np. 8–16 bitów) oraz kanał (który zarządza sygnałem PWM).",
  },
  {
    question:
      "Jakie informacje zawiera 64-bitowy kod identyfikacji w protokole 1-Wire?",
    type: "single",
    answers: [
      "Adres pamięci, kod CRC, typ interfejsu",
      "Numer seryjny, kod rodziny i suma CRC", // (od Autora)
      "Tylko numer seryjny",
      "Nie zawiera sumy CRC",
    ],
    correct: 1,
    explanation:
      "W 1-Wire każde urządzenie posiada 64-bitowy identyfikator: 8-bitowy kod rodziny, 48-bitowy numer seryjny i 8-bitową sumę CRC.",
  },
  {
    question:
      "Jakie są główne różnice między pinem cyfrowym a pinem analogowym?",
    type: "single",
    answers: [
      "Piny cyfrowe obsługują PWM, a analogowe – nie",
      "Pin cyfrowy przyjmuje tylko 0 lub 1, pin analogowy może odczytać wiele poziomów napięcia", // (od Autora)
      "Pin analogowy ma zawsze 5 V, pin cyfrowy zawsze 3.3 V",
      "Brak różnic – oba działają identycznie",
    ],
    correct: 1,
    explanation:
      "Pin cyfrowy rozróżnia dwa stany (LOW/HIGH). Pin analogowy (wejście ADC) umożliwia odczyt płynnej wartości napięcia w zadanym zakresie.",
  },
  {
    question:
      "Dany jest kod w postaci:\n\nvoid coSieWydarzy() {\n  int a = 5;\n  for(int i = 0; i < 100; i++){\n    delay(10);\n    a++;\n  }\n  delay(1000);\n  int b = a - 5;\n}\n\nZaznacz wszystkie poprawne odpowiedzi:",
    type: "multiple",
    answers: [
      "Funkcja coSieWydarzy() będzie trwała 2 sekundy", // (od Autora)
      "Zmienna b będzie miała na zakończenie funkcji wartość 100", // (od Autora)
      "Pętla for w funkcji coSieWydarzy() wykona się 100 razy", // (od Autora)
      "Zmienna a zostanie zmniejszona o 100",
    ],
    correct: [0, 1, 2],
    explanation:
      "Pętla for działa 100 razy, każdy obrót pętli wprowadza opóźnienie 10 ms → 100*10 ms = 1000 ms, potem jest dodatkowe delay(1000), łącznie 2000 ms (2 sekundy). a startuje od 5, po pętli będzie 105, więc b = 105 - 5 = 100.",
  },
  {
    question:
      "Jakie są podstawowe sygnały w interfejsie SPI do przesyłania danych z Master do Slave?",
    type: "single",
    answers: [
      "CS i MISO",
      "MOSI i SCLK", // (od Autora)
      "SDA i SCL",
      "TX i CLK",
    ],
    correct: 1,
    explanation:
      "Dane z Master do Slave w SPI przesyłane są linią MOSI (Master Out Slave In), przy taktowaniu linii SCLK.",
  },
  {
    question:
      "W jaki sposób magistrala 1-Wire obsługuje zasilanie pasożytnicze?",
    type: "single",
    answers: [
      "Wykorzystuje kondensator wbudowany w urządzenia peryferyjne", // (od Autora)
      "W ogóle nie ma takiej możliwości",
      "Używa linii zasilania 12V DC",
      "Wymaga dodatkowego transformatora",
    ],
    correct: 0,
    explanation:
      "Urządzenia 1-Wire mogą magazynować ładunek w kondensatorze, gdy linia jest w stanie wysokim, dzięki czemu mogą pracować z tylko jedną linią danych bez osobnego zasilania.",
  },
  {
    question: "Jakie są rodzaje połączeń układów SPI?",
    type: "single",
    answers: [
      "Połączenia równoległe o stałej fazie",
      "Połączenia pierścieniowe i szeregowe",
      "Połączenia szeregowe i równoległe", // (od Autora)
      "Tylko topologia gwiazdy",
    ],
    correct: 2,
    explanation:
      "SPI jest interfejsem szeregowym. Rodzaje połączeń to różne tryby lub liczba linii danych (np. single, dual, quad SPI).",
  },
  {
    question:
      "Cyfrowe czujniki temperatury DS18B20 mogą wysyłać indywidualne dane przy pomocy jednej linii danych do urządzenia nadrzędnego.",
    type: "single",
    answers: [
      "Prawda", // (od Autora)
      "Fałsz",
      "Tylko przy temperaturach ujemnych",
      "Tylko przy napięciu 5 V",
    ],
    correct: 0,
    explanation:
      "Czujniki DS18B20 działają na magistrali 1-Wire, czyli wystarczy jedna linia danych (plus masa i ewentualnie zasilanie).",
  },
  {
    question:
      "Czy w architekturze von Neumana magistrala dla danych i programu jest wspólna?",
    type: "single",
    answers: [
      "Tak", // (od Autora)
      "Nie",
      "Czasami",
      "Zależy od liczby bitów procesora",
    ],
    correct: 0,
    explanation:
      "W architekturze von Neumana dane i instrukcje przechowywane są w tej samej pamięci i przesyłane tą samą magistralą.",
  },
  {
    question: "Co oznacza skrót CISC?",
    type: "single",
    answers: [
      "Centralny Interfejs Sieci Centralnej",
      "Computer Integrated System Control",
      "Computer Instruction Simple Code",
      "Computer with Complex Instruction Set", // (od Autora: 'komputer ze złożonymi instrukcjami')
    ],
    correct: 3,
    explanation:
      "CISC = Complex Instruction Set Computer, czyli procesor o rozbudowanym zestawie instrukcji.",
  },
  {
    question: "Czy protokół i interfejs to to samo określenie?",
    type: "single",
    answers: [
      "Tak",
      "Nie", // (od Autora)
      "Zależy od warstwy OSI",
      "Oba to skróty od tego samego pojęcia",
    ],
    correct: 1,
    explanation:
      "Interfejs (np. elektryczny, fizyczny) to sposób fizycznej komunikacji, a protokół to zestaw reguł służący do wymiany danych.",
  },
  {
    question: "Zgodnie z jaką architekturą zbudowany jest komputer typu RISC?",
    type: "single",
    answers: [
      "Von Neumana",
      "Harwardzką", // (od Autora)
      "Mieszana Von Neumann-Harvard",
      "Nie ma to znaczenia",
    ],
    correct: 1,
    explanation:
      "RISC odnosi się do zestawu instrukcji (Reduced Instruction Set Computer) i może być implementowany zarówno w architekturze von Neumanna, jak i Harvard",
  },
  {
    question: "Czy interfejs komunikacyjny 1-Wire jest interfejsem:",
    type: "single",
    answers: [
      "Równoległym",
      "Szeregowym", // (od Autora)
      "Mieszanym",
      "Nie jest to interfejs komunikacyjny",
    ],
    correct: 1,
    explanation:
      "1-Wire to interfejs szeregowy z jedną linią danych (oraz masą).",
  },
  {
    question: "Co oznacza skrót EPROM?",
    type: "single",
    answers: [
      "Electrically Programmable ROM",
      "Erasable Programmable ROM", // (od Autora)
      "Extended Periphery ROM",
      "Erasable Permanent RAM",
    ],
    correct: 1,
    explanation:
      "EPROM (Erasable Programmable Read-Only Memory) to pamięć, którą można kasować np. promieniowaniem UV i ponownie programować.",
  },
  {
    question: "Czy zawartość pamięci ROM znika po zaniku zasilania?",
    type: "single",
    answers: [
      "Tak",
      "Nie", // (od Autora)
      "Czasem tak, czasem nie",
      "To zależy od producenta",
    ],
    correct: 1,
    explanation:
      "ROM (Read-Only Memory) jest pamięcią nieulotną, więc dane nie znikają po odłączeniu zasilania.",
  },
  {
    question: "Czy fotorezystor:",
    type: "single",
    answers: [
      "Zwiększa przepływ prądu stałego przy wzroście napięcia",
      "Generuje napięcie w obecności światła",
      "Zmienia rezystancję przy zmianie oświetlenia", // (od Autora)
      "Nie reaguje na światło",
    ],
    correct: 2,
    explanation:
      "Fotorezystor (LDR) zmienia swoją rezystancję w zależności od natężenia światła padającego na jego powierzchnię.",
  },
  {
    question: "Kto wprowadził na rynek mikrokontrolery AVR?",
    type: "single",
    answers: [
      "Intel",
      "Microchip",
      "Atmel", // (od Autora)
      "Motorola",
    ],
    correct: 2,
    explanation:
      "Architekturę AVR opracowała firma Atmel (obecnie przejęta przez Microchip).",
  },
  {
    question: "Czy mikrokontrolery ARM charakteryzują się architekturą typu:",
    type: "single",
    answers: [
      "CISC",
      "RISC", // (od Autora)
      "DSP",
      "ARM nie definiuje architektury",
    ],
    correct: 1,
    explanation:
      "ARM (Advanced RISC Machines) bazuje na architekturze RISC (Reduced Instruction Set Computer).",
  },
  {
    question:
      "Czy popularny mikrokontroler firmy Espressif (ESP32) można zaprogramować w języku LUA?",
    type: "single",
    answers: [
      "Tak", // (od Autora)
      "Nie",
      "Tylko w MicroPython",
      "Tylko w Arduino C++",
    ],
    correct: 0,
    explanation:
      "Dostępne są firmware’y takie jak NodeMCU (oparte na LUA) pozwalające programować ESP32 i ESP8266 w tym języku.",
  },
  {
    question: "Co oznacza skrót ROM?",
    type: "single",
    answers: [
      "Read Only Memory", // (od Autora)
      "Random Output Memory",
      "Reduced Operating Mode",
      "Radiant Oscillation Mechanism",
    ],
    correct: 0,
    explanation:
      "ROM to pamięć tylko do odczytu (Read Only Memory), w której zapis jest dokonywany na etapie produkcji lub programowania.",
  },
  {
    question: "Jaka logika napięciowa obowiązuje w popularnym ESP32?",
    type: "single",
    answers: [
      "5 V",
      "3.3 V", // (od Autora)
      "1.8 V",
      "Zależnie od pinu",
    ],
    correct: 1,
    explanation:
      "ESP32 pracuje głównie w logice 3.3 V. Należy uważać przy podłączaniu sygnałów 5 V.",
  },
  {
    question: "Czy interfejs komunikacyjny SPI jest interfejsem:",
    type: "single",
    answers: [
      "Równoległym",
      "Szeregowym", // (od Autora)
      "Asynchronicznym",
      "Przypomina I2C, ale ma 4 linie danych",
    ],
    correct: 1,
    explanation:
      "SPI (Serial Peripheral Interface) jest interfejsem szeregowym, wykorzystującym linie MOSI, MISO, SCK i CS/SS.",
  },
  {
    question:
      "Czy stosowana w mikrokontrolerach transmisja szeregowa UART jest:",
    type: "single",
    answers: [
      "Synchroniczna",
      "Asynchroniczna", // (od Autora)
      "Pełni funkcję interfejsu równoległego",
      "Nie jest magistralą szeregową",
    ],
    correct: 1,
    explanation:
      "UART (Universal Asynchronous Receiver/Transmitter) realizuje transmisję asynchroniczną (bez linii zegara).",
  },
  {
    question: "Czy magistrala i interfejs to to samo określenie?",
    type: "single",
    answers: [
      "Tak",
      "Nie", // (od Autora)
      "Magistrala to skrót interfejsu",
      "Interfejs to protokół, magistrala to warstwa sieci",
    ],
    correct: 1,
    explanation:
      "Magistrala (bus) to fizyczny sposób połączenia, interfejs może oznaczać sposób i standard komunikacji. Zwykle nie są to pojęcia tożsame.",
  },
  {
    question:
      "Czy w topologii sieci typu siatka wszystkie węzły muszą być połączone do jednego urządzenia centralnego?",
    type: "single",
    answers: [
      "Tak",
      "Nie", // (od Autora)
      "Tylko w wersji mesh v2.0",
      "Zależy od protokołu IP",
    ],
    correct: 1,
    explanation:
      "W topologii siatki (mesh) węzły są połączone ze sobą w wieloraki sposób, brak tu jednego centralnego punktu koniecznego do komunikacji wszystkich uczestników.",
  },
  {
    question: "Co oznacza skrót RISC?",
    type: "single",
    answers: [
      "Reduced Instruction Set Computer", // (od Autora: 'komputer z uproszczonym zestawem instrukcji procesora'
      "Random Instruction System Compiler",
      "Registered Interconnect System Control",
      "Reverse Instruction Sequence Code",
    ],
    correct: 0,
    explanation:
      "RISC (Reduced Instruction Set Computer) to koncepcja procesorów o ograniczonym i zoptymalizowanym zestawie instrukcji.",
  },
  {
    question: "Czy zawartość pamięci DRAM znika po zaniku zasilania?",
    type: "single",
    answers: [
      "Nie",
      "Tak", // (od Autora)
      "Zależy od częstotliwości taktowania",
      "Tylko przy dłuższych przerwach w zasilaniu",
    ],
    correct: 1,
    explanation:
      "DRAM (Dynamic RAM) jest pamięcią ulotną – wymaga odświeżania i zanika po wyłączeniu zasilania.",
  },
  {
    question: "Czy termistor to:",
    type: "single",
    answers: [
      "Układ scalony do pomiaru temperatury",
      "Element, który zmienia rezystancję pod wpływem zmiany temperatury", // (od Autora)
      "Czujnik ciśnienia",
      "Czujnik światła",
    ],
    correct: 1,
    explanation: "Termistor to rezystor zależny od temperatury (NTC lub PTC).",
  },
  {
    question: "Czy interfejs komunikacyjny I2C jest interfejsem:",
    type: "single",
    answers: [
      "Równoległym",
      "Szeregowym", // (od Autora)
      "Asynchronicznym",
      "Nietypowym interfejsem jednoprzewodowym",
    ],
    correct: 1,
    explanation:
      "I2C (Inter-Integrated Circuit) to magistrala szeregowa z linią SDA (dane) i SCL (zegar).",
  },
  {
    question: "Jaka logika napięciowa obowiązuje w popularnym Arduino UNO?",
    type: "single",
    answers: [
      "3.3 V",
      "5 V", // (od Autora)
      "1.2 V",
      "12 V",
    ],
    correct: 1,
    explanation: "Arduino UNO (oparte na ATmega328P) wykorzystuje logikę 5 V.",
  },
  {
    question:
      "Czy w architekturze harwardzkiej magistrala dla danych i programu jest wspólna?",
    type: "single",
    answers: [
      "Tak",
      "Nie", // (od Autora)
      "Zależy od implementacji BIOS-u",
      "Tylko przy wyższych częstotliwościach",
    ],
    correct: 1,
    explanation:
      "W architekturze harwardzkiej pamięć programu i pamięć danych są rozdzielone, co implikuje odrębne magistrale.",
  },
  {
    question:
      "Czy w topologii sieci typu gwiazda wszystkie węzły muszą być połączone do jednego urządzenia centralnego?",
    type: "single",
    answers: [
      "Tak", // (od Autora)
      "Nie",
      "Tylko przy protokole TCP/IP",
      "Zależy od ilości węzłów",
    ],
    correct: 0,
    explanation:
      "W sieci gwiazdy każdy węzeł łączy się z centralnym punktem (hub/switch/centralny węzeł).",
  },
  {
    question: "Czy magistrala i protokół to to samo określenie?",
    type: "single",
    answers: [
      "Tak",
      "Nie", // (od Autora)
      "Synonimy w elektronice",
      "Magistrala dotyczy aplikacji w chmurze",
    ],
    correct: 1,
    explanation:
      "Magistrala to fizyczny sposób komunikacji, a protokół to reguły wymiany danych. Są to różne pojęcia.",
  },
  {
    question:
      "Czy czujniki generacyjne pod wpływem działania wielkości mierzonej wytwarzają na swym wyjściu sygnał elektryczny?",
    type: "single",
    answers: [
      "Tak", // (od Autora)
      "Nie",
      "Tylko w niektórych warunkach",
      "Nie, potrzebują zasilania zewnętrznego",
    ],
    correct: 0,
    explanation:
      "Czujniki generacyjne (np. termopary, ogniwa fotowoltaiczne) wytwarzają sygnał elektryczny w odpowiedzi na czynnik fizyczny.",
  },
  {
    question:
      "Czy czujniki parametryczne pod wpływem działania wielkości mierzonej wytwarzają na swym wyjściu sygnał elektryczny?",
    type: "single",
    answers: [
      "Tak",
      "Nie", // (od Autora)
      "Zawsze w postaci zmiennego prądu",
      "Generują impuls napięciowy",
    ],
    correct: 1,
    explanation:
      "Tak. Czujniki parametryczne zmieniają pewien parametr sygnału elektrycznego w odpowiedzi na mierzony wielkości.",
  },
  {
    question: "Czy przekaźnik to:",
    type: "single",
    answers: [
      "Czujnik temperatury",
      "Aktuator", // (od Autora)
      "Układ komunikacyjny",
      "Pamięć nieulotna",
    ],
    correct: 1,
    explanation:
      "Przekaźnik jest elementem wykonawczym (aktuator), służy do sterowania obwodami elektrycznymi.",
  },
  {
    question: "Czy EEPROM i EPROM to te same układy?",
    type: "single",
    answers: [
      "Tak",
      "Nie", // (od Autora)
      "EEPROM to rodzaj pamięci jednorazowej",
      "EPROM jest kasowany elektrycznie",
    ],
    correct: 1,
    explanation:
      "EPROM kasuje się promieniami UV, a EEPROM kasuje się elektrycznie (co pozwala na wielokrotny zapis/kasowanie bez użycia lampy UV).",
  },
  {
    question:
      "Czy w modelu komunikacji typu Master-Slave może występować wiele urządzeń typu Master?",
    type: "single",
    answers: [
      "Tak", // (od Autora)
      "Nie",
      "Tylko w sieciach Ethernet",
      "Tylko w protokole USB",
    ],
    correct: 0,
    explanation:
      "W niektórych rozwiązaniach (np. I2C w trybie multi-master) możliwa jest obecność wielu Masterów na jednej magistrali.",
  },
  {
    question:
      "Z powodu wdrożonych kontroli bezpieczeństwa użytkownik może uzyskać dostęp tylko do serwera z FTP. Który komponent AAA to zapewni?",
    type: "single",
    answers: [
      "dostępność",
      "niezawodność",
      "ewidencjonowanie",
      "autoryzacja",
      "audyt",
      "uwierzytelnianie",
    ],
    // Użytkownik podał, że poprawną odpowiedzią jest "autoryzacja" (indeks 3).
    correct: 3,
    explanation: `Użytkownik twierdzi, że poprawna odpowiedź to "autoryzacja". 
Moim zdaniem to jest poprawne, ponieważ autoryzacja (drugi A w AAA) określa, 
jakie uprawnienia ma użytkownik po uwierzytelnieniu. 
W tym przypadku ograniczenie dostępu wyłącznie do serwera FTP jest właśnie efektem autoryzacji. 
Pozostałe odpowiedzi nie odnoszą się do przyznawania uprawnień: 
- "dostępność" i "niezawodność" to ogólne właściwości systemu, 
- "ewidencjonowanie" (accounting) i "audyt" to rejestrowanie aktywności, 
- "uwierzytelnianie" sprawdza tożsamość, ale nie zarządza zakresem uprawnień po zalogowaniu.`,
  },
  {
    question: "Ile linii danych używa interfejs I2C?",
    type: "single",
    answers: [
      "Jedna (SDA)",
      "Dwie (SDA i SCL)",
      "Trzy (SDA, SCL, RESET)",
      "Cztery (SDA, SCL, MOSI, MISO)",
      "Zero, bo to interfejs bezprzewodowy",
    ],
    // Użytkownik podał, że poprawna odpowiedź to "Dwie (SDA, SCL)" (indeks 1).
    correct: 1,
    explanation: `I2C wymaga dwóch linii: SDA do przesyłania danych i SCL do zegara. 
Pozostałe propozycje (jak jednowyprowadzeniowa magistrala czy wykorzystanie MOSI/MISO) nie pasują do I2C.`,
  },
  {
    question:
      "Jakie są efekty zwiększania rozdzielczości pomiaru temperatury dla czujnika DS18B20 w kontekście czasu odczytu?",
    type: "single",
    answers: [
      "Czas odczytu się skraca",
      "Czas odczytu pozostaje bez zmian",
      "Czas odczytu się wydłuża",
      "Rozdzielczość nie wpływa na czas odczytu",
    ],
    // Użytkownik podał, że poprawna odpowiedź to "Zwiększenie rozdzielczości powoduje wydłużenie czasu odczytu" (indeks 2).
    correct: 2,
    explanation: `Zwiększenie rozdzielczości (np. z 9 do 12 bitów) oznacza, 
że czujnik potrzebuje więcej czasu na dokładniejszą konwersję temperatury, 
co wydłuża czas odczytu. 
Nie ma tu wątpliwości — tak wynika z dokumentacji DS18B20.`,
  },
  {
    question:
      "Cechą charakterystyczną urządzeń posługujących się protokołem One-Wire jest?",
    type: "single",
    answers: [
      "Mały rozmiar",
      "Brak cech charakterystycznych",
      "Czarna obudowa",
      "Unikalny adres wbudowany w urządzenie",
      "Potrzeba dodatkowej linii RESET",
    ],
    // Użytkownik zasugerował, że prawdopodobnie chodzi o unikalny adres (indeks 3).
    // Moim zdaniem jest to zdecydowanie poprawne: każdy układ One-Wire ma 64-bitowy unikalny identyfikator.
    correct: 3,
    explanation: `Użytkownik podał, że odpowiedzią jest "Adres (prawdopodobnie ta odpowiedź)". 
Moim zdaniem to w 100% trafne: każde urządzenie One-Wire posiada unikalny 64-bitowy adres, 
co umożliwia podłączanie wielu urządzeń do jednej magistrali. 
Pozostałe odpowiedzi (mały rozmiar, czarna obudowa czy brak cech) nie są charakterystyczne 
dla protokołu One-Wire jako takiego.`,
  },
  {
    question: "Jak programowo zmienić jasność świecenia diody?",
    type: "single",
    answers: [
      "Regulując napięcie zasilania diody zewnętrznym potencjometrem",
      "Zmieniając częstotliwość taktowania mikrokontrolera",
      "Za pomocą modulacji szerokości impulsu (PWM)",
      "Nie da się tego zrobić programowo",
    ],
    // Użytkownik podał, że poprawną odpowiedzią jest "Za pomocą modulacji szerokości impulsu (PWM)" (indeks 2).
    correct: 2,
    explanation: `Zmiana jasności świecenia LED w układach cyfrowych odbywa się 
poprzez zmianę współczynnika wypełnienia sygnału PWM na pinie sterującym diodą. 
Pozostałe metody nie dotyczą typowego sterowania jasnością diody z mikrokontrolera.`,
  },
  {
    question:
      "Interfejs 1-Wire pozwala na komunikację wielu urządzeń podrzędnych o ile każde z nich posiada:",
    type: "single",
    answers: [
      "Ten sam adres urządzenia",
      "Indywidualny adres urządzenia",
      "Specjalny rejestr rozszerzeń",
      "Przynajmniej dwie linie zasilania",
    ],
    // Użytkownik podał, że poprawna odpowiedź to "Indywidualny adres" (indeks 1).
    correct: 1,
    explanation: `Każdy układ 1-Wire posiada unikalny adres (64-bitowy). 
Dzięki temu można podłączyć wiele urządzeń do jednej linii danych, 
a master odróżnia je właśnie po adresach.`,
  },
  {
    question:
      "(Rysunek przedstawia linię w stanie niskim) – Jak interpretować ten stan?",
    type: "single",
    answers: [
      "Jest to stan wysoki",
      "Jest to stan niski",
      "Jest to stan wysokiej impedancji",
      "Nie można określić stanu bez dodatkowych informacji",
    ],
    // Użytkownik wskazał "stan niski" (indeks 1).
    correct: 1,
    explanation: `Z kontekstu pytania wynika, że rysunek pokazuje sygnał przyciągnięty do GND, 
co oznacza logiczne 0 (stan niski).`,
  },
  {
    question:
      "Do ustalenia dowolnego portu od A0 do A5 jako wejście potrzebne jest polecenie:",
    type: "single",
    answers: ["digitalWrite()", "pinMode()", "analogRead()", "Serial.begin()"],
    // Użytkownik podał poprawną odpowiedź "pinMode()" (indeks 1).
    correct: 1,
    explanation: `W Arduino, aby skonfigurować pin (w tym A0...A5) jako wejście, 
należy użyć funkcji pinMode(pin, INPUT). 
Pozostałe funkcje służą do innych celów (digitalWrite – zapis stanu, analogRead – odczyt analogowy itp.).`,
  },
  {
    question: "Co to jest współczynnik wypełnienia?",
    type: "single",
    answers: [
      "Różnica między napięciem maksymalnym i minimalnym",
      "Stosunek napięcia szczytowego do wartości skutecznej",
      "Stosunek czasu stanu wysokiego do całkowitego okresu sygnału",
      "Inna nazwa częstotliwości sygnału PWM",
    ],
    // Użytkownik podał, że chodzi o stosunek czasu stanu wysokiego do całkowitego okresu sygnału (indeks 2).
    correct: 2,
    explanation: `Współczynnik wypełnienia (ang. duty cycle) określa, 
jaki procent całego okresu sygnału PWM stanowi czas w stanie wysokim. 
Np. 50% duty cycle oznacza połowę czasu w stanie HIGH i połowę w LOW.`,
  },
  {
    question:
      "Czym jest rozdzielczość w ADC (przetworniku analogowo-cyfrowym)?",
    type: "single",
    answers: [
      "Liczbą bitów określającą maksymalną liczbę poziomów, na które dzielony jest zakres napięć wejściowych",
      "Stosunkiem częstotliwości próbkowania do zakresu napięcia",
      "Parametrem określającym maksymalną temperaturę czujnika",
      "Częstotliwością pracy przetwornika",
    ],
    // Użytkownik podał, że poprawną odpowiedzią jest "maksymalna ilość różnych wartości..." (indeks 0).
    correct: 0,
    explanation: `Rozdzielczość 8-bit oznacza 256 możliwych wartości (0–255). 
Rozdzielczość 10-bit to 1024 wartości, itd. 
Pozostałe definicje nie opisują rozdzielczości ADC.`,
  },
  {
    question:
      "Jaki jest cel używania sekwencji START/STOP w protokole I2C?",
    type: "single",
    answers: [
      "Wprowadzenie urządzeń w stan uśpienia",
      "Synchronizacja sygnału zegarowego między dwoma masterami",
      "Rozpoczęcie i zakończenie transmisji danych",
      "Reset magistrali do ustawień fabrycznych",
    ],
    // Użytkownik podał, że poprawną odpowiedzią jest "Rozpoczęcie i zakończenie transmisji danych" (indeks 2).
    correct: 2,
    explanation: `Sekwencje START i STOP na SDA (przy SCL wysokim) sygnalizują początek i koniec transmisji na magistrali I2C. 
Dzięki nim slave’y wiedzą, kiedy odczytywać adres i dane, a kiedy transmisja się zakończyła.`,
  },
];
