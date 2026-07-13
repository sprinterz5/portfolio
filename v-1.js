const translations = {
  en: {
    back_link: "Back to selector",
    version_label: "Pixel Cyberpunk Portfolio",
    hero_eyebrow: "Aidar Begotayev // systems_curious:on",
    hero_title: "Code. Reverse-Engineer. Compete. Ship.",
    hero_lead:
      "Backend systems, AI prototypes, spatial research, and a growing systems/hardware curiosity -- from ISA design to kernel boundaries -- pushed into one high-signal portfolio.",
    stat_one:
      "hackathons and competitions. click for wins, finalists, and selected builds",
    stat_two:
      "participants across EcoHackathon and Bright Future Hackathon that I organized",
    stat_three_value: "Tech Stack",
    stat_three: "Python, APIs, SQL, GIS, automation core",
    stat_four_value: "6 notes",
    stat_four:
      "self-directed field notes on ISA design, kernel boundaries, and systems trade-offs",
    stat_four_action: "read deep dives",
    card_action: "open breakdown",
    focus_one: "focus:: ai workflows + automation",
    focus_two: "focus:: backend systems + product builds",
    focus_three: "focus:: spatial economics + urban data",
    focus_four: "focus:: competition prototypes under pressure",
    signal_kicker: "Current signal",
    signal_copy:
      "From a locomotive digital twin platform to library automation and university systems, I like building tools that actually get used.",
    deepdives_note: "6 entries -- self-directed research, not coursework",
    deepdives_kicker: "What I dig into",
    deepdives_title: "Systems questions I don't let go of.",
    deepdives_intro:
      'I keep pulling on a thread until the whole causal chain closes -- then I go looking for the strongest counter-argument and try to break my own conclusion before I trust it. The question is rarely "why did the winner win," it\'s "what did the alternative actually lose, and who paid for it."',
    deepdive_one_title: "Why ARM, not just why not x86-64",
    deepdive_one_copy:
      '"ARM is more efficient" is a conclusion, not an argument, so I went after what x86-64 actually loses: a CISC decoder tax and forty years of legacy instructions Intel and AMD can never drop without breaking existing software. Then I looked for the counter-case -- x86-64\'s real moat is exactly that legacy software, which is why Windows RT shipped with zero emulation in 2012 and ate a $900M write-off, and why it took until Prism\'s AVX/AVX2 support in the 2020s for Windows-on-ARM to actually work. ARM doesn\'t win in general, it wins specifically where forty years of x86 compatibility isn\'t the constraint, and loses hard everywhere it is.',
    deepdive_two_title:
      "Why anti-cheat lives in Ring 0 -- and what that costs everyone else",
    deepdive_two_copy:
      "I didn't accept \"anti-cheat just needs kernel access\" at face value, so I looked at what user-space anti-cheat actually can't see: cheats that hook below the OS's own visibility. That gap is exactly why Vanguard-style anti-cheat runs in Ring 0, why a single bug there is a whole-system vulnerability and not a game bug, and why Prism, a user-space emulator, physically can't translate a kernel-mode x64 driver. The part I kept circling back to: studios get a real security win, and every player on that machine inherits a kernel-level attack surface they never agreed to.",
    deepdive_three_title: "seL4: proof over testing, and what that actually costs",
    deepdive_three_copy:
      'The obvious alternative to formal verification is what everyone already does -- test until nothing breaks -- so I wanted to know what that approach can never actually claim: that no untested input exists. seL4 is formally verified, mathematically proven correct against its spec, not just battle-tested. What I keep chewing on is the price of that guarantee: every line has to be provably correct, which is exactly why almost nothing outside safety-critical systems gets built this way -- proof doesn\'t scale the way "ship and patch" does.',
    deepdive_four_title:
      "Unified memory's real trade: performance-per-watt for upgradability",
    deepdive_four_copy:
      "The standard architecture gives the CPU and GPU their own memory and copies data across a bus between them. Apple's M-series skips that with one shared pool of unified memory, plus tile-based deferred rendering and a wide, low-clock decode pipeline -- roughly how it reaches RTX-4060-class GPU performance in a single package. I don't think that's a free win: the same soldered, shared memory that makes it efficient is also why you can't upgrade the RAM later -- performance-per-watt and right-to-repair point in opposite directions, and Apple picked one.",
    deepdive_five_title: "Why IBM walked out of the race it started",
    deepdive_five_copy:
      "IBM basically invented the commercial computer industry, then sold its PC business to Lenovo in 2005 and its x86 server line in 2014, and kept pushing into mainframes, Power, and later services and quantum instead of fighting for the commodity market it created. I wanted to know why a company retreats from a race it's still winning on name alone: commodity x86 hardware was collapsing into razor-thin margins as everyone converged on the same components, while mainframes stayed a small, high-margin niche competitors couldn't easily enter. It reads less like losing and more like choosing depth over share -- though it also meant giving up the mindshare that comes with being in every consumer's hands.",
    deepdive_six_title: "AMD's chiplet bet vs. Intel stuck on 14nm",
    deepdive_six_copy:
      "AMD was nearly bankrupt after the Bulldozer years, spun its fabs off into GlobalFoundries, went fabless, and bet Zen (2017) on chiplets built on TSMC's process instead of one large monolithic die -- while Intel kept re-spinning 14nm for years after its 10nm node slipped. I wanted to know how much of this was AMD's architecture being smarter versus Intel's manufacturing simply failing to deliver, and it's mostly the second: a better design on a stalled process wouldn't have mattered without TSMC actually shipping smaller nodes on schedule. The chiplet approach isn't free either -- splitting the die adds real interconnect latency across Infinity Fabric that a monolithic die never has to pay.",
    sysenv_note: "environment / diagnostics -- factual, not decorative",
    sysenv_kicker: "Systems environment",
    sysenv_title: "Linux, dual-boot, and the debugging that came with it.",
    sysenv_one:
      "Fedora 44 KDE dual-boot on an ASUS TUF A15, including resolving NVIDIA Secure Boot / MOK enrollment and configuring asusctl / supergfxctl for GPU and power management.",
    sysenv_two:
      "Compiled evsieve from source to fix a Y-axis drift bug on a Bloody W95 mouse via input remapping.",
    sysenv_three:
      "ArchLinux + Ubuntu 22.04 / 24.04 across machines, plus VPS management for deployed services.",
    sysenv_four:
      "Repasted the A15 and read HWiNFO logs to correctly diagnose a CPU-bound game bottleneck instead of assuming thermal throttling.",
    project_debounce_tag: "Builder Story",
    project_debounce_title: "Tea-Damaged Keyboard -> Software Debounce Layer",
    project_debounce_copy:
      "A friend spilled tea on his keyboard and the damaged contacts fired multiple ghost keypresses per press. Instead of replacing the hardware, I studied the failure pattern and wrote a software layer that reads the messy multi-fire signal and normalizes it into a single correct character.",
    project_autism_tag: "Anisa Spectrum",
    project_autism_title: "Autism Spectrum (ChildInfo)",
    project_autism_copy:
      "Built the UI/UX and PostgreSQL-backed data layer for an early autism-diagnosis app now deployed and postered in a local hospital.",
    study_note: "notes and independent coursework -- photos to be added",
    study_kicker: "Study log",
    study_title: "Building the math underneath the code.",
    study_one_title: "MIT OpenCourseWare",
    study_one_copy:
      "Follow OCW lectures -- Linear Algebra with Prof. Strang, Multivariable Calculus, Differential Equations -- and keep handwritten notes alongside them.",
    study_two_title: "Discrete Mathematics",
    study_two_copy:
      "Sit in on Prof. Sanzhar Kusdavletov's course and work problems by hand -- null space, set theory, truth tables.",
    study_three_title: "Linear algebra, one level deeper",
    study_three_copy:
      "Quadratic forms, QR / Gram-Schmidt, and LU decomposition worked through outside of class requirements.",
    highlights_kicker: "Selected stages",
    highlights_title: "The events that matter most.",
    highlight_one_tag: "AmanatTech",
    highlight_one_title: "Top 20 out of 400 teams",
    highlight_one_copy:
      "Built a platform concept focused on helping people with drug addiction, combining social impact with product thinking.",
    highlight_two_tag: "HackNU 2026",
    highlight_two_title: "Kazakhstan Temir Zholy case",
    highlight_two_copy:
      "Built a locomotive digital twin platform for telemetry, diagnostics, and monitoring in a high-pressure engineering sprint.",
    highlight_three_tag: "BiCAP Hackathon",
    highlight_three_title: "1st place out of 200 teams",
    highlight_three_copy:
      "Built text-to-SQL, SQL-to-text, and AI-assisted audit ideas for small and medium businesses.",
    highlight_four_tag: "Decentrathon 2.0-5.0",
    highlight_four_title: "Four iterations, evolving scope",
    highlight_four_copy:
      "Worked on Telegram mini apps, AI assistants, rule-based screening for InVision University, and model experiments with PyTorch.",
    projects_note:
      "6 entries -- click to inspect, preview slot ready for future PNG",
    projects_kicker: "Selected builds",
    projects_title: "Projects behind the signal.",
    project_one_tag: "Library Automation Intern",
    project_one_title: "eLibra QR Middleware",
    project_one_copy:
      "Built a QR-based self-service issuance flow with FastAPI, Playwright RPA, SQLite, and a web interface that reduced librarian bottlenecks.",
    project_two_tag: "University Product",
    project_two_title: "Roomly",
    project_two_copy:
      "Built a room reservation system with role-based flows, approval logic, calendar management, and Telegram onboarding.",
    project_three_tag: "Research",
    project_three_title: "Spatial Factors of Housing Prices in Astana",
    project_three_copy:
      "Earned 3rd place at Lomonosov-2026 with research on how location-linked variables shape housing prices in Astana.",
    project_four_tag: "Applied AI",
    project_four_title: "RAG and automation workflows",
    project_four_copy:
      "Built AI-assisted workflows around RAG, backend integrations, and operational automation for real institutional use cases.",
    project_open: "open project file",
    trajectory_kicker: "Trajectory",
    trajectory_title: "Signal beyond competitions.",
    trajectory_one_title: "Early route",
    trajectory_one_copy:
      "Started with C++ olympiad problem solving in 5th grade, switched to Python in 7th grade for Discord and Telegram bots, and built a Django site in 8th grade.",
    trajectory_two_title: "Leadership and service",
    trajectory_two_copy:
      "One of two leaders of WeCare, volunteer teacher through UNICEF Kazakhstan and UNESCO club initiatives, and organizer of hackathons across 14 cities.",
    trajectory_three_title: "Creative and product range",
    trajectory_three_copy:
      "Studied web design at Young Profi School, worked in digital marketing at inUniGlobal, handled SMM roles, and performed in drama club.",
    modal_preview_label: "Preview slot",
    footer_one: "GitHub: sprinterz5",
    footer_two: "Astana / backend systems / AI workflows / research",
  },
  ru: {
    back_link: "Назад к выбору",
    version_label: "Pixel Cyberpunk Portfolio",
    hero_eyebrow: "Aidar Begotayev // systems_curious:on",
    hero_title: "Кодить. Разбирать системы. Соревноваться. Делать.",
    hero_lead:
      "Бэкенд-системы, AI-прототипы, пространственные исследования и растущий интерес к системам и железу -- от архитектуры ISA до границ ядра ОС -- собранные в одно high-signal портфолио.",
    stat_one: "хакатоны и соревнования, включая 6+ побед и призовых мест",
    stat_two: "участников на 2 хакатонах, которые я организовал",
    stat_three: "Docker, Playwright, PyTorch, Next.js, Figma",
    stat_four_value: "6 заметок",
    stat_four:
      "самостоятельные заметки об архитектуре ISA, границах ядра ОС и системных компромиссах",
    stat_four_action: "читать deep dives",
    focus_one: "focus:: ai workflows + automation",
    focus_two: "focus:: backend systems + product builds",
    focus_three: "focus:: spatial economics + urban data",
    focus_four: "focus:: competition prototypes under pressure",
    signal_kicker: "Текущий сигнал",
    signal_copy:
      "От цифрового двойника локомотива до библиотечной автоматизации и университетских систем: мне нравится делать инструменты, которыми реально пользуются.",
    deepdives_note: "6 записей -- самостоятельные исследования, не учебная программа",
    deepdives_kicker: "Во что я закапываюсь",
    deepdives_title: "Системные вопросы, которые я не бросаю на полпути.",
    deepdives_intro:
      "Я тяну за ниточку, пока не замкнётся вся причинно-следственная цепочка -- а потом иду искать самый сильный контраргумент и пытаюсь сломать собственный вывод, прежде чем ему поверить. Вопрос редко звучит как «почему победитель победил», чаще -- «что именно потеряла альтернатива и кто за это заплатил».",
    deepdive_one_title: "Почему ARM, а не просто «почему не x86-64»",
    deepdive_one_copy:
      '«ARM эффективнее» -- это вывод, а не аргумент, поэтому я разбирался, что именно теряет x86-64: decoder tax из-за CISC и сорок лет legacy-инструкций, от которых Intel и AMD не могут отказаться, не сломав существующий софт. Дальше я искал контраргумент -- настоящее преимущество x86-64 именно в этом legacy-софте, поэтому Windows RT в 2012 вышла без какой-либо эмуляции и получила списание в $900M, и поэтому только с поддержкой AVX/AVX2 в Prism в 2020-х Windows-on-ARM реально заработал. ARM не побеждает вообще -- он побеждает именно там, где сорок лет x86-совместимости не являются ограничением, и жёстко проигрывает везде, где являются.',
    deepdive_two_title:
      "Почему анти-чит живёт в Ring 0 -- и во что это обходится всем остальным",
    deepdive_two_copy:
      'Я не принял на веру "анти-читу просто нужен доступ к ядру" и разобрался, чего именно не видит анти-чит в user-space: читы, которые ставят крючки ниже видимости самой ОС. Именно этот разрыв -- причина, почему анти-чит вроде Vanguard работает в Ring 0, почему любой баг там -- уязвимость всей системы, а не игровой баг, и почему Prism, эмулятор уровня пользователя, физически не может транслировать kernel-mode x64 драйвер. Что меня зацепило: студии получают реальный выигрыш в безопасности, а каждый игрок на этой машине наследует kernel-level поверхность атаки, на которую он не соглашался.',
    deepdive_three_title: "seL4: доказательство вместо тестирования, и чего это стоит",
    deepdive_three_copy:
      'Очевидная альтернатива формальной верификации -- то, что делают все: тестировать, пока не перестанет ломаться, -- поэтому я хотел понять, чего этот подход никогда не может утверждать: что не существует непротестированного входа. seL4 формально верифицирован -- математически доказан корректным относительно спецификации, а не просто протестирован до отказа. Что меня не отпускает -- цена этой гарантии: каждая строка должна быть доказуемо корректной, именно поэтому почти ничего за пределами safety-critical систем так не строят -- доказательство не масштабируется так, как "выпустил и запатчил".',
    deepdive_four_title:
      "Реальный обмен unified memory: производительность на ватт против апгрейда",
    deepdive_four_copy:
      "Стандартная архитектура даёт CPU и GPU отдельную память и копирует данные между ними по шине. M-серия Apple обходит это одним общим пулом unified memory, плюс tile-based deferred rendering и широкий low-clock decode pipeline -- примерно так она выходит на уровень производительности GPU около RTX-4060 в одном корпусе. Не думаю, что это бесплатный выигрыш: та же самая распаянная общая память, которая даёт эффективность, -- причина, почему память нельзя апгрейдить позже. Производительность на ватт и право на ремонт смотрят в разные стороны, и Apple выбрала одну из них.",
    deepdive_five_title: "Почему IBM вышла из гонки, которую сама и начала",
    deepdive_five_copy:
      "IBM фактически изобрела индустрию коммерческих компьютеров, затем продала бизнес ПК Lenovo в 2005 и линейку x86-серверов в 2014, и дальше делала ставку на мейнфреймы, Power, а позже на сервисы и квантовые вычисления вместо борьбы за commodity-рынок, который сама и создала. Мне было интересно, почему компания отступает из гонки, которую всё ещё выигрывает по узнаваемости имени: commodity x86-железо схлопывалось в мизерную маржу по мере того, как все сходились к одинаковым компонентам, а мейнфреймы оставались небольшой, но высокомаржинальной нишей, куда конкурентам было сложно зайти. Это больше похоже не на проигрыш, а на выбор глубины вместо доли рынка -- хотя это также означало отказ от того mindshare, который даёт присутствие в руках у каждого потребителя.",
    deepdive_six_title: "Ставка AMD на чиплеты против застрявшего на 14nm Intel",
    deepdive_six_copy:
      "AMD была почти банкротом после эпохи Bulldozer, вывела фабрики в отдельный GlobalFoundries, ушла в fabless-модель и поставила на Zen (2017) с чиплетами на процессе TSMC вместо одного большого монолитного кристалла -- пока Intel годами перевыпускала 14nm после того, как сорвался переход на 10nm. Мне было интересно, насколько это заслуга архитектуры AMD, а насколько -- провал производства у Intel, и по факту это в основном второе: даже более умный дизайн на застрявшем техпроцессе ничего бы не решил без того, что TSMC реально поставляла младшие нормы вовремя. Chiplet-подход тоже не бесплатен -- разделение кристалла добавляет реальную задержку на межсоединениях Infinity Fabric, которую монолитному кристаллу платить не нужно.",
    sysenv_note: "окружение / диагностика -- фактура, без прикрас",
    sysenv_kicker: "Системное окружение",
    sysenv_title: "Linux, dual-boot и отладка, которая с ним пришла.",
    sysenv_one:
      "Fedora 44 KDE в dual-boot на ASUS TUF A15, включая настройку NVIDIA Secure Boot / MOK enrollment и конфигурацию asusctl / supergfxctl для управления GPU и питанием.",
    sysenv_two:
      "Скомпилировал evsieve из исходников, чтобы исправить дрейф по Y-оси у мыши Bloody W95 через input remapping.",
    sysenv_three:
      "ArchLinux + Ubuntu 22.04 / 24.04 на разных машинах, плюс управление VPS для развёрнутых сервисов.",
    sysenv_four:
      "Заменил термопасту на A15 и по логам HWiNFO правильно диагностировал CPU-bound bottleneck в игре вместо предполагаемого троттлинга по температуре.",
    project_debounce_tag: "История билдера",
    project_debounce_title: "Клавиатура, залитая чаем -> программный debounce-слой",
    project_debounce_copy:
      "Друг залил клавиатуру чаем, и повреждённые контакты выдавали несколько ghost-нажатий на одно реальное. Вместо замены железа я изучил паттерн сбоя и написал программный слой, который читает этот шумный multi-fire сигнал и нормализует его в один корректный символ.",
    project_autism_tag: "Anisa Spectrum",
    project_autism_title: "Autism Spectrum (ChildInfo)",
    project_autism_copy:
      "Сделал UI/UX и слой данных на PostgreSQL для приложения ранней диагностики аутизма, которое сейчас развёрнуто и используется в местной больнице.",
    study_note: "заметки и самостоятельный курс -- фото будут добавлены",
    study_kicker: "Журнал обучения",
    study_title: "Математика под капотом кода.",
    study_one_title: "MIT OpenCourseWare",
    study_one_copy:
      "Прохожу лекции OCW -- Linear Algebra профессора Стрэнга, Multivariable Calculus, Differential Equations -- и веду рукописные конспекты параллельно.",
    study_two_title: "Дискретная математика",
    study_two_copy:
      "Хожу на курс профессора Санжара Кусдавлетова и решаю задачи руками -- null space, теория множеств, таблицы истинности.",
    study_three_title: "Линейная алгебра чуть глубже",
    study_three_copy:
      "Квадратичные формы, QR / Gram-Schmidt и LU-разложение -- разобрал самостоятельно, сверх программы.",
    highlights_kicker: "Главные этапы",
    highlights_title: "Те события, которые действительно важны.",
    highlight_one_tag: "AmanatTech",
    highlight_one_title: "Top 20 из 400 команд",
    highlight_one_copy:
      "Делали платформенную концепцию для помощи людям с наркотической зависимостью, сочетая social impact и product thinking.",
    highlight_two_tag: "HackNU 2026",
    highlight_two_title: "Кейс Казахстан Темир Жолы",
    highlight_two_copy:
      "Сделали платформу цифрового двойника локомотива для телеметрии, диагностики и мониторинга в условиях жесткого инженерного спринта.",
    highlight_three_tag: "BiCAP Hackathon",
    highlight_three_title: "1 место из 200 команд",
    highlight_three_copy:
      "Сделали text-to-SQL, SQL-to-text и AI-assisted audit идеи для малого и среднего бизнеса.",
    highlight_four_tag: "Decentrathon 2.0-5.0",
    highlight_four_title: "Четыре итерации, растущий масштаб",
    highlight_four_copy:
      "Работал над Telegram mini apps, AI assistants, rule-based screening для InVision University и экспериментами с моделями на PyTorch.",
    projects_kicker: "Избранные проекты",
    projects_title: "Проекты за этим сигналом.",
    project_one_tag: "Library Automation Intern",
    project_one_title: "eLibra QR Middleware",
    project_one_copy:
      "Сделал QR-систему самообслуживания для выдачи книг на FastAPI, Playwright RPA, SQLite и с веб-интерфейсом, который уменьшал нагрузку на библиотекарей.",
    project_two_tag: "University Product",
    project_two_title: "Roomly",
    project_two_copy:
      "Сделал систему бронирования аудиторий с role-based логикой, approval flow, календарным управлением и Telegram onboarding.",
    project_three_tag: "Исследование",
    project_three_title: "Пространственные факторы цены жилой недвижимости в Астане",
    project_three_copy:
      "Получил 3 место на Lomonosov-2026 за исследование того, как пространственные факторы влияют на цены жилья в Астане.",
    project_four_tag: "Applied AI",
    project_four_title: "RAG и automation workflows",
    project_four_copy:
      "Строил AI-assisted workflows вокруг RAG, backend integrations и операционной автоматизации для реальных институциональных кейсов.",
    trajectory_kicker: "Траектория",
    trajectory_title: "Сигнал за пределами соревнований.",
    trajectory_one_title: "Ранний старт",
    trajectory_one_copy:
      "Начал с олимпиадных задач на C++ в 5 классе, в 7 классе переключился на Python для Discord и Telegram ботов, а в 8 классе сделал сайт на Django.",
    trajectory_two_title: "Лидерство и служение",
    trajectory_two_copy:
      "Один из двух лидеров WeCare, преподаватель-волонтер через UNICEF Kazakhstan и инициативы UNESCO clubs, а также организатор хакатонов в 14 городах.",
    trajectory_three_title: "Креатив и продуктовый диапазон",
    trajectory_three_copy:
      "Учился web design в Young Profi School, работал в digital marketing в inUniGlobal, вел SMM-роли и выступал в drama club.",
    footer_one: "GitHub: sprinterz5",
    footer_two: "Астана / бэкенд-системы / AI workflows / research",
  },
  kz: {
    back_link: "Тандауга оралу",
    version_label: "Pixel Cyberpunk Portfolio",
    hero_eyebrow: "Aidar Begotayev // systems_curious:on",
    hero_title: "Код жазу. Жуйелерди талдау. Бэсекеге тусу. Жасау.",
    hero_lead:
      "Backend жуйелер, AI прототиптер, кенистик зерттеу жане ISA дизайнынан kernel шекараларына дейінгі өсіп келе жатқан systems/hardware қызығушылығы бір high-signal портфолиога жиналды.",
    stat_one: "hackathonдар мен competitions, сонын ишинде 6+ женис пен жулделі орын",
    stat_two: "мен уйымдастырган 2 hackathonдагы катысушылар саны",
    stat_three: "Docker, Playwright, PyTorch, Next.js, Figma",
    stat_four_value: "6 жазба",
    stat_four:
      "ISA дизайны, kernel шекаралары және systems trade-off-тар туралы озимнин зерттеу жазбаларым",
    stat_four_action: "deep dives окы",
    focus_one: "focus:: ai workflows + automation",
    focus_two: "focus:: backend systems + product builds",
    focus_three: "focus:: spatial economics + urban data",
    focus_four: "focus:: competition prototypes under pressure",
    signal_kicker: "Kasirgi signal",
    signal_copy:
      "Локомотивтин цифрлык егизинен китапхана автоматтандыруына жане университет жуйелерине дейин мен накты колданылатын куралдар жасауды унатамын.",
    deepdives_note: "6 жазба -- озимнин зерттеуим, оку багдарламасы емес",
    deepdives_kicker: "Не туралы терен ойланамын",
    deepdives_title: "Толык тусингенше койып кетпейтин systems суракдары.",
    deepdives_intro:
      "Себеп-салдар тизбеги толык жабылганша жипти тартамын -- содан кейин ен куатты контраргументти издеймин жане озимнин корытындымды сенимнен бурын сындауга тырысамын. Сурак сирек \"неге женимпаз женди\" болады, жии \"альтернатива нени жоготты жане онын багасын ким теледи\" болады.",
    deepdive_one_title: 'Non ARM, tek "x86-64 emes" gana emes',
    deepdive_one_copy:
      '"ARM tиimdirek" - bul korytyndy, argument emes, sondyktan men x86-64 nakty ne jogaltatynyn karastyrdym: CISC sebepti decoder tax jane Intel men AMD tastai almaytyn kyryk jyldyk legacy nusqaular, olardy tastau bar softty buzady. Odan keyin men karsy-argumentti izdedim - x86-64-tin nakty artykshylygy dal osy legacy softta, sondyktan 2012 jyly Windows RT emulyatsiyasyz shygyp, $900M shygynga alyp keldi, jane tek 2020-shy jyldardagy Prism-nin AVX/AVX2 koldauymen Windows-on-ARM nakty istey bastady. ARM jalpy jenbeidi - ol dal kyryk jyldyk x86 uilesimdiligi shektew bolmagan jerde jenedi, jane ol shektew bolgan jerde katty utyladi.',
    deepdive_two_title: "Non anti-cheat Ring 0-de journingu -- jane bul basqalarga nege turady",
    deepdive_two_copy:
      '"Anti-cheat-ka jai gana kernel access kerek" degendi seрtsiz kabyldamadym, sondyktan user-space anti-cheat nakty ne kore almaityndygyn tekseredim: OS-tin ozinin korinuinen tomen kryuchok koyatyn cheat-terdi. Dal osy sayqylik - Vanguard tarizdi anti-cheat-tin Ring 0-de jumys isteitininin sebebi, ondagy kez-kelgen bag - butin juienin osaldygy, jai gana oyin bagi emes, jane Prism, user-space emulyator, kernel-mode x64 draiverdi audara almaityndygynyn sebebi. Meni tostagan narse: studiyalar nakty security utys alady, al sol mashinadagy arbir oyinshy ozi kelispegen kernel-level shabuyl betin muraga alady.',
    deepdive_three_title: "seL4: testtennen gori dalel, jane bul neshe turady",
    deepdive_three_copy:
      'Formaldy verifikatsiyaga adette argument - barlyk adam isteitin narse: bag bolmaganga deyin test istau, sondyktan men bul adis eshkashan aita almaityn narseni bilgim keldi: testtelmegen kiris bolmaytynyn. seL4 formaldy turde verifikatsiyalangan - spetsifikatsiyaga karsy matematikalyk turde durys ekeni daleldengen, jai gana synaktan otken emes. Meni koibeitin narse - bul kepildiktin bagasy: arbir jol dalelduи durys bolu kerek, dal osy sebepten safety-critical juielerden tys derlik hesh narse bylai salynbaidy - dalel "shygar jane patch koi" siyakty masshtabtalmaidy.',
    deepdive_four_title: "Unified memory-din nakty aisy: performance-per-watt upgrade-ke karsy",
    deepdive_four_copy:
      'Standartty arhitektura CPU men GPU-ga bolek jad beredi jane olardyn arasynda shina arkyly maglumat koshiredi. Apple-din M-seriyasy munu bir ortak unified memory poolymen, tile-based deferred rendering jane keng, low-clock decode pipeline-men aynyp otedi - shamamen osylaisha ol bir paketpen RTX-4060 dennheiindegi GPU onimdiligine jetedi. Munyn tegin utys ekenine senbeimin: sol bir dattalgan ortak jad, ol тиимдilikti beredi, sonymen katar keinnen jaddy upgrade-tei almauynyn sebebi. Performance-per-watt jane repair kukygy karama-karsy bagytka karaidy, jane Apple birin tandady.',
    deepdive_five_title: "Non IBM ozi bastagan jaristan shykty",
    deepdive_five_copy:
      "IBM negizinen kommertsiyalyk kompyuter industriyasyn oyiap shygardy, sodan keyin 2005 jyly PC biznesin Lenovo-ga, 2014 jyly x86-server liniyasyn satty, jane odan ari mainframe, Power, keinirek qyzmetter men kvanttyk esepteuge basa nazar audardy, ozi kurgan commodity naryk ushin kures ornyna. Magan attak boiynsha ali de jenip zhurgen jaristan kompaniya nege shegineytini kyzyktyrdy: commodity x86 jabdyktar bar kompaniya bir tektes komponentterge zhinalgan sayin ote az margaga tusip zhatyr, al mainframe-ter baseki ushin kiru kyin nishe bolyp kaldy. Bul jenilis emes, kobirek terendikti ulesten tandau siyakty korinedi - biraq bul sonymen katar arbir tutynushynyn kolynda bolu mindshare-inen bas tartu degendi bildiredi.",
    deepdive_six_title: "AMD-nin chiplet-ke tikken betsi 14nm-de kalgan Intel-ge karsy",
    deepdive_six_copy:
      "AMD Bulldozer jyldarynan keiin dерлik bankrott bolyp kaldy, zauyttaryn bolek GlobalFoundries-ka boldi, fabless modelge kosti jane Zen-ge (2017) bir ulken monolitti kristall ornina TSMC protsesindegi chiplet-terge tikti - al Intel 10nm normasy sorvался bolgannan keiin jyldar boiy 14nm-di kaita shygardy. Magan bul AMD arhitekturasynyn akyldylygy ma, alde Intel-din onndirisinin jai gana tapsyrmany orindai almaganу ma ekeni kyzyktyrdy, jane ol negizinen ekinshisi: turgan protsesste akyldy dizain da TSMC nakty kishirek normalardy uaqytynda shygarmasa hesh narseni oz-getmes edi. Chiplet adisi de tegin emes - kristaldy bolu Infinity Fabric arkyly monolitti kristallga tolenbeitin nakty interconnect keshiguin kosady.",
    sysenv_note: "ortasy / diagnostika -- factual, bezendirusiz",
    sysenv_kicker: "Systems ortasy",
    sysenv_title: "Linux, dual-boot жане онымен бирге келген debugging.",
    sysenv_one:
      "ASUS TUF A15-те Fedora 44 KDE dual-boot, соның ишинде NVIDIA Secure Boot / MOK enrollment-ти шешу жане GPU/куат баскару ушин asusctl / supergfxctl конфигурациясы.",
    sysenv_two:
      "Bloody W95 тышканындагы Y-осі drift багын input remapping аркылы туземеу ушин evsieve-ди исходниктен компиляцияладым.",
    sysenv_three:
      "Ар турли машиналарда ArchLinux + Ubuntu 22.04 / 24.04, косымша деплойленген сервистер ушин VPS баскару.",
    sysenv_four:
      "A15-ти repaste истеп, HWiNFO логтарын окып, ойында thermal throttling деп ойламай, CPU-bound bottleneck-ти дурыс диагностикаладым.",
    project_debounce_tag: "Builder Story",
    project_debounce_title: "Шаймен закымдалган пернетакта -> Software Debounce Layer",
    project_debounce_copy:
      "Досым пернетактага шай токти, жане закымдалган контакттар бир басу сайын бирнеше ghost-басуды тудырды. Хардвейрди ауыстырудын орнына мен сбой паттернин зерттеп, осы шулы multi-fire сигналды бир дурыс символга нормализациялайтын software layer жаздым.",
    project_autism_tag: "Anisa Spectrum",
    project_autism_title: "Autism Spectrum (ChildInfo)",
    project_autism_copy:
      "Казир жергиликти ауруханада колданылатын жане плакатта корсетилген ерте аутизм диагностикасы қосымшасы ушин UI/UX жане PostgreSQL негизинде мәлимет катпарын жасадым.",
    study_note: "жазбалар жане озбетинше оку -- фотолар кейин косылады",
    study_kicker: "Study log",
    study_title: "Код астындагы математиканы куру.",
    study_one_title: "MIT OpenCourseWare",
    study_one_copy:
      "OCW дэрислерин - Prof. Strang-тын Linear Algebra, Multivariable Calculus, Differential Equations - окимын жане катар колжазба жазбалар жургизимин.",
    study_two_title: "Discrete Mathematics",
    study_two_copy:
      "Prof. Sanzhar Kusdavletov-тын курсына катысамын жане есептерди колмен шешемин - null space, жиындар теориясы, ак чикалдык кестелери.",
    study_three_title: "Сызыктык алгебра тереннирек",
    study_three_copy:
      "Квадраттык формалар, QR / Gram-Schmidt жане LU-жіктелу - сабак талабынан тыс озим карастырдым.",
    highlights_kicker: "Negizgi kezender",
    highlights_title: "En manyzdy okigalar.",
    highlight_one_tag: "AmanatTech",
    highlight_one_title: "400 команданын ишинен top 20",
    highlight_one_copy:
      "Aleumettik impact пен product thinking-ті біріктіріп, есірткіге тәуелді адамдарга көмектесуге арналган платформа концепциясын жасадық.",
    highlight_two_tag: "HackNU 2026",
    highlight_two_title: "Kazakhstan Temir Zholy кейси",
    highlight_two_copy:
      "Қысқа инженерлік спринтте телеметрия, диагностика және мониторингке арналған локомотивтің цифрлық егіз платформасын жасадық.",
    highlight_three_tag: "BiCAP Hackathon",
    highlight_three_title: "200 команданын ишинен 1 орын",
    highlight_three_copy:
      "Шағын және орта бизнеске арналған text-to-SQL, SQL-to-text және AI-assisted audit идеяларын жасадық.",
    highlight_four_tag: "Decentrathon 2.0-5.0",
    highlight_four_title: "Tort iteratsiya, ulgaiğan aukym",
    highlight_four_copy:
      "Telegram mini apps, AI assistants, InVision University ушин rule-based screening жане PyTorch модельдерімен эксперименттер жасадым.",
    projects_kicker: "Tandaly jobalar",
    projects_title: "Os y signaldyn artındagy jobalar.",
    project_one_tag: "Library Automation Intern",
    project_one_title: "eLibra QR Middleware",
    project_one_copy:
      "FastAPI, Playwright RPA, SQLite жане веб-интерфейс аркылы китап беруді женилдететин QR озин-ози кызmet korsetu juyesin jasadym.",
    project_two_tag: "University Product",
    project_two_title: "Roomly",
    project_two_copy:
      "Role-based логикасы, approval flow, календарь жуйесі жане Telegram onboarding-і бар аудитория брондау жуйесін жасадым.",
    project_three_tag: "Zertteu",
    project_three_title: "Астанадагы тургын уй багасына кенистик факторлардын асери",
    project_three_copy:
      "Lomonosov-2026-та Астанадағы тұрғын үй бағасына кеңістіктік факторлардың әсері туралы зерттеуім үшін 3 орын алдым.",
    project_four_tag: "Applied AI",
    project_four_title: "RAG jane automation workflows",
    project_four_copy:
      "RAG, backend integrations және нақты институционалдық кейстерге арналған операциялық автоматтандыру төңірегінде AI-assisted workflows жасадым.",
    trajectory_kicker: "Traektoriya",
    trajectory_title: "Competition-nen tys signal.",
    trajectory_one_title: "Erte bastau",
    trajectory_one_copy:
      "5-сыныпта C++ олимпиадалық есептерінен бастадым, 7-сыныпта Discord және Telegram боттары үшін Python-ға өттім, 8-сыныпта Django сайт жасадым.",
    trajectory_two_title: "Liderlik pen kyzmet",
    trajectory_two_copy:
      "WeCare-дін екі лидерының бірі болдым, UNICEF Kazakhstan және UNESCO clubs бастамалары арқылы ерікті мұғалім болдым, сондай-ақ 14 қаладағы hackathonдарды ұйымдастырдым.",
    trajectory_three_title: "Kreativ pen product range",
    trajectory_three_copy:
      "Young Profi School-де web design окыдым, inUniGlobal-та digital marketing саласында жумыс истедим, SMM рөлдерін атқардым және drama club-та өнер көрсеттім.",
    footer_one: "GitHub: sprinterz5",
    footer_two: "Астана / backend жуйелер / AI workflows / research",
  },
};

const modalContent = {
  achievements: {
    command: "$ open /records/competitions.log",
    kicker: "Competition archive",
    title: "20+ hackathons and competitions",
    intro:
      "The homepage stays compact, and this view carries the detail that proves range, wins, and pressure-tested work.",
    groups: [
      {
        title: "Wins and podiums",
        items: [
          {
            title: "BiCAP Hackathon",
            meta: "1st place out of 200 teams",
            copy: "Text-to-SQL, SQL-to-text, and AI-assisted audit for SMBs.",
          },
          {
            title: "NIS Valley",
            meta: "1st place out of 13 teams",
            copy: "Fast product framing and delivery in a short sprint.",
          },
          {
            title: "DEM Championship",
            meta: "2nd place out of 33 teams",
            copy: "Marketing campaign strategy for CITIX.",
          },
          {
            title: "National Economic Challenge",
            meta: "3rd place out of 150 teams",
            copy: "AI test generation product for SAT and IELTS prep.",
          },
          {
            title: "InsureTechHackathon",
            meta: "3rd place out of 100 teams",
            copy: "AI assistant concept around usability and accessibility.",
          },
          {
            title: "Lomonosov-2026",
            meta: "3rd place, scientific conference",
            copy:
              "Research on spatial factors of housing prices in Astana.",
          },
        ],
      },
      {
        title: "Selected runs",
        items: [
          {
            title: "AmanatTech",
            meta: "Top 20 out of 400 teams",
            copy: "Platform concept for helping people with drug addiction.",
          },
          {
            title: "IT HUB Battle",
            meta: "Finalist, top 10 out of 42",
            copy: "Reached the final stage in a tight evaluation field.",
          },
          {
            title: "Decentrathon 2.0-5.0",
            meta: "4 overall participations",
            copy:
              "Telegram mini apps, AI assistants, screening systems, PyTorch.",
          },
          {
            title: "HackNU 2025 and 2026",
            meta: "2 overall participations",
            copy:
              "The 2026 run focused on the Kazakhstan Temir Zholy case.",
          },
        ],
      },
    ],
  },
  organizing: {
    command: "$ open /records/organizing.log",
    kicker: "Organizer archive",
    title: "700+ participants across 2 hackathons",
    intro:
      "This block now clearly says organized, not helped, and gives the scale, prize value, and full ownership behind the line on the homepage.",
    groups: [
      {
        title: "Hackathons I organized",
        items: [
          {
            title: "EcoHackathon",
            meta: "Organizer",
            copy:
              "Led planning, coordination, participant operations, and a prize package that included 600K tenge plus MobyDev courses worth roughly another 1 million tenge.",
          },
          {
            title: "Bright Future Hackathon",
            meta: "Organizer",
            copy:
              "Owned structure, delivery, and execution, including a QuickStarter course prize pool worth 1.6 million tenge.",
          },
        ],
      },
      {
        title: "Scale and logistics",
        items: [
          {
            title: "Reach",
            meta: "700+ participants total",
            copy: "Combined attendance across both hackathons.",
          },
          {
            title: "Geography",
            meta: "14 cities",
            copy: "Not a single-campus event footprint.",
          },
          {
            title: "Partners",
            meta: "5 sponsors",
            copy: "Sponsor coordination was part of the organizing work.",
          },
          {
            title: "Responsibility scope",
            meta: "Documents / negotiations / design / marketing / ops",
            copy:
              "Handled the full stack of organizing work: documents, partner negotiations, posters, marketing assets, forms, regulations, and operational structure.",
          },
        ],
      },
    ],
  },
  stack: {
    command: "$ open /records/stack.index",
    kicker: "Stack overview",
    title: "Tech stack and methods",
    intro:
      "The card shows the headline. The modal carries the grouped stack so the hero does not turn into a résumé wall.",
    groups: [
      {
        title: "Coding and backend",
        items: [
          {
            title: "Core tools",
            meta: "Python / FastAPI / Django / SQL / APIs",
            copy: "Main layer for automation, systems, and data products.",
          },
          {
            title: "Frontend layer",
            meta: "JavaScript / Next.js / HTML / CSS / Telegram",
            copy: "Used for admin panels, flows, and practical interfaces.",
          },
          {
            title: "Foundations",
            meta: "C++ / Git / GitHub / SQLite / Docker",
            copy: "Supports shipping, iteration, and stronger fundamentals.",
          },
        ],
      },
      {
        title: "AI and data systems",
        items: [
          {
            title: "Applied AI",
            meta: "RAG / prompt design / text-to-SQL / SQL-to-text",
            copy: "Focused on usefulness, not novelty for novelty's sake.",
          },
          {
            title: "Automation",
            meta: "Playwright / RPA / integrations / screening logic",
            copy: "Useful when institutions need repeatable workflows.",
          },
          {
            title: "Model work",
            meta: "PyTorch / prototyping",
            copy: "Used in selected hackathons and compact experiments.",
          },
        ],
      },
      {
        title: "Geography and design",
        items: [
          {
            title: "Spatial analysis",
            meta: "ArcMap / ArcGIS / urban data / GIS",
            copy: "Connects research with location-based reasoning.",
          },
          {
            title: "Design and communication",
            meta: "Figma / pitching / visual communication / SMM",
            copy: "Helps package technical work into something readable.",
          },
        ],
      },
    ],
  },
  "project-elibra": {
    command: "$ open /projects/library_qr.middleware",
    kicker: "Project file",
    title: "eLibra QR Middleware",
    intro:
      "A practical library system built around real operational friction, not a toy demo.",
    groups: [
      {
        title: "Problem and solution",
        items: [
          {
            title: "Problem",
            meta: "Library issuance bottleneck",
            copy: "Students had to wait for manual librarian handling.",
          },
          {
            title: "Solution",
            meta: "Self-service QR flow",
            copy:
              "A reader-ID-based flow let students issue books themselves.",
          },
        ],
      },
      {
        title: "Build",
        items: [
          {
            title: "Backend",
            meta: "FastAPI / SQLite",
            copy: "Kept the system lightweight and deployable.",
          },
          {
            title: "Automation",
            meta: "Playwright RPA",
            copy: "Bridged the workflow with institutional operations.",
          },
        ],
      },
    ],
    preview:
      "Future PNG slot: issuance screen, QR flow, or a service blueprint.",
  },
  "project-roomly": {
    command: "$ open /projects/roomly.app",
    kicker: "Project file",
    title: "Roomly",
    intro:
      "A campus room reservation system where permissions and coordination mattered as much as UI.",
    groups: [
      {
        title: "Product shape",
        items: [
          {
            title: "Use case",
            meta: "Campus room reservations",
            copy: "Designed for clearer booking across students and staff.",
          },
          {
            title: "Logic",
            meta: "Roles / approvals / calendar management",
            copy: "More than a form, it needed real workflow structure.",
          },
        ],
      },
      {
        title: "Expansion path",
        items: [
          {
            title: "Onboarding",
            meta: "Telegram-connected flow",
            copy: "Made access and entry simpler.",
          },
          {
            title: "Future case study",
            meta: "UI screens / booking states / admin logic",
            copy: "Ready for richer visual explanation later.",
          },
        ],
      },
    ],
    preview:
      "Future PNG slot: booking screens, approval states, and admin flow.",
  },
  "project-research": {
    command: "$ open /projects/astana_housing.research",
    kicker: "Research file",
    title: "Spatial Factors of Housing Prices in Astana",
    intro:
      "This adds analytical depth to the portfolio and proves range beyond product builds.",
    groups: [
      {
        title: "Research signal",
        items: [
          {
            title: "Result",
            meta: "3rd place at Lomonosov-2026",
            copy:
              "Presented at the International Scientific Conference of Students, Postgraduates, and Young Scientists.",
          },
          {
            title: "Topic",
            meta: "Spatial economics / housing price analysis",
            copy:
              "Focused on how location-linked variables shape residential prices.",
          },
        ],
      },
      {
        title: "Methods",
        items: [
          {
            title: "Spatial layer",
            meta: "GIS / urban data / geography",
            copy: "Brings a method set that most portfolios do not show.",
          },
          {
            title: "Why it belongs here",
            meta: "Research + technical identity",
            copy:
              "Shows the ability to ask harder questions, not only build tools.",
          },
        ],
      },
    ],
    preview: "Future PNG slot: map, chart, or conference slide.",
  },
  "project-rag": {
    command: "$ open /projects/rag_automation.stack",
    kicker: "Project file",
    title: "RAG and automation workflows",
    intro:
      "Applied AI work sitting between backend engineering and operational tooling.",
    groups: [
      {
        title: "Work shape",
        items: [
          {
            title: "Direction",
            meta: "RAG / integrations / internal tooling",
            copy:
              "Built AI-assisted flows for retrieval and structured access.",
          },
          {
            title: "Practical value",
            meta: "Operational support",
            copy: "Built for real use cases, not only presentation demos.",
          },
        ],
      },
      {
        title: "Why it matters",
        items: [
          {
            title: "Signal",
            meta: "Backend + AI bridge",
            copy:
              "Explains the line between automation, systems, and product AI.",
          },
          {
            title: "Future asset",
            meta: "Flow diagram / dashboard / retrieval view",
            copy: "Ready for a visual case-study layer later.",
          },
        ],
      },
    ],
    preview:
      "Future PNG slot: dashboard screenshot, retrieval flow, or architecture.",
  },
  "project-debounce": {
    command: "$ open /projects/keyboard_debounce.sys",
    kicker: "Project file",
    title: "Tea-Damaged Keyboard -> Software Debounce Layer",
    intro:
      "A friend spilled tea on his keyboard. Instead of replacing the hardware, I studied the failure pattern and fixed it one layer up.",
    groups: [
      {
        title: "Problem and solution",
        items: [
          {
            title: "Problem",
            meta: "Ghost / multi-fire keypresses",
            copy:
              "Tea-damaged contacts fired multiple signals per intended keypress.",
          },
          {
            title: "Solution",
            meta: "Software debounce layer",
            copy:
              "Wrote a layer that reads the messy multi-fire signal and normalizes it into a single correct character.",
          },
        ],
      },
      {
        title: "Why it matters",
        items: [
          {
            title: "Framing",
            meta: "Signal problem, not a hardware problem",
            copy:
              "Treated a physical fault as noisy input and solved it one abstraction layer above where most people reach for a screwdriver.",
          },
          {
            title: "Pattern",
            meta: "Systems thinking",
            copy:
              "The same instinct that matters in chip design: understand the failure mode before you patch it.",
          },
        ],
      },
    ],
    preview:
      "Future slot: source link or a GIF demo of the debounce layer in action.",
  },
  "project-autism": {
    command: "$ open /projects/childinfo.app",
    kicker: "Project file",
    title: "Autism Spectrum (ChildInfo)",
    intro:
      "An early-diagnosis support app built with Anisa Spectrum, now in real clinical use.",
    groups: [
      {
        title: "Problem and solution",
        items: [
          {
            title: "Problem",
            meta: "Early autism screening access",
            copy:
              "Families and clinicians needed a structured, accessible way to support early diagnosis.",
          },
          {
            title: "Solution",
            meta: "UI/UX + data layer",
            copy:
              "Designed the interface and built the PostgreSQL-backed data layer behind it.",
          },
        ],
      },
      {
        title: "Deployment",
        items: [
          {
            title: "Status",
            meta: "Live in a local hospital",
            copy: "Deployed and postered for clinical use, not just a prototype.",
          },
          {
            title: "Role",
            meta: "UI/UX design + backend data",
            copy:
              "Owned both the interface work and the database structure supporting it.",
          },
        ],
      },
    ],
    preview: "Future PNG slot: app screenshots or the hospital poster.",
  },
};

const buttons = document.querySelectorAll(".lang-btn");
const translatable = document.querySelectorAll("[data-i18n]");
const modalShell = document.querySelector(".modal-shell");
const modalTriggers = document.querySelectorAll(".modal-trigger");
const modalCommand = document.getElementById("modal-command");
const modalKicker = document.getElementById("modal-kicker");
const modalTitle = document.getElementById("modal-title");
const modalIntro = document.getElementById("modal-intro");
const modalBody = document.getElementById("modal-body");
const modalPreview = document.getElementById("modal-preview");
const modalPreviewCopy = document.getElementById("modal-preview-copy");
const modalCloseButtons = document.querySelectorAll("[data-close-modal]");
const modalPrimaryClose = document.querySelector(".modal-close");

let currentLanguage = window.localStorage.getItem("portfolio-lang") || "en";
let activeModalKey = null;
let lastFocusedTrigger = null;

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderModalContent(modalKey) {
  const entry = modalContent[modalKey];

  if (!entry) {
    return;
  }

  modalCommand.textContent = entry.command;
  modalKicker.textContent = entry.kicker;
  modalTitle.textContent = entry.title;
  modalIntro.textContent = entry.intro;

  modalBody.innerHTML = entry.groups
    .map(
      (group) => `
        <section class="modal-group">
          <p class="modal-group-title">${escapeHtml(group.title)}</p>
          <div class="modal-list">
            ${group.items
              .map(
                (item) => `
                  <article class="modal-item">
                    <p class="modal-item-title">${escapeHtml(item.title)}</p>
                    <p class="modal-item-meta">${escapeHtml(item.meta)}</p>
                    <p class="modal-item-copy">${escapeHtml(item.copy)}</p>
                  </article>
                `,
              )
              .join("")}
          </div>
        </section>
      `,
    )
    .join("");

  if (entry.preview) {
    modalPreview.hidden = false;
    modalPreviewCopy.textContent = entry.preview;
  } else {
    modalPreview.hidden = true;
    modalPreviewCopy.textContent = "";
  }
}

function openModal(modalKey, trigger) {
  activeModalKey = modalKey;
  lastFocusedTrigger = trigger;
  renderModalContent(modalKey);
  modalShell.hidden = false;
  document.body.classList.add("modal-open");
  modalPrimaryClose?.focus();
}

function closeModal() {
  modalShell.hidden = true;
  document.body.classList.remove("modal-open");
  activeModalKey = null;

  if (lastFocusedTrigger) {
    lastFocusedTrigger.focus();
  }
}

function applyLanguage(lang) {
  const dict = translations[lang] || translations.en;
  currentLanguage = translations[lang] ? lang : "en";

  translatable.forEach((node) => {
    const key = node.dataset.i18n;

    if (dict[key]) {
      node.textContent = dict[key];
    }
  });

  document.documentElement.lang = currentLanguage;

  buttons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === currentLanguage);
  });

  window.localStorage.setItem("portfolio-lang", currentLanguage);
}

buttons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

modalTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => openModal(trigger.dataset.modal, trigger));
});

modalCloseButtons.forEach((button) => {
  button.addEventListener("click", closeModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modalShell.hidden) {
    closeModal();
  }
});

applyLanguage(currentLanguage);
