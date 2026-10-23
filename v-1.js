const translations = {
  en: {
    hero_eyebrow: "build // debug // compete // ship",
    hero_lead:
      "CS with AI student in Astana. I build backend systems, Linux tools for real hardware and AI workflows.",
    contact_cv: "CV (PDF)",
    stat_one: "hackathons and competitions",
    stat_two: "participants at hackathons I organized",
    stat_three_value: "Tech Stack",
    stat_three: "Python, SQL, Next.js, Linux, Docker",
    stat_four_value: "Blog",
    stat_four: "notes on how systems work",
    stat_four_action: "read the blog",
    card_action: "open breakdown",
    nav_projects: "projects",
    nav_highlights: "wins",
    nav_deepdives: "blog",
    nav_study: "study",
    nav_contact: "contact",
    projects_note: "8 entries -- open a card for details and links",
    projects_kicker: "Selected builds",
    projects_title: "Projects behind the signal.",
    project_open: "open project file",
    project_shiftray_tag: "Open source / Linux",
    project_shiftray_title: "Shiftray",
    project_shiftray_copy:
      "A tray app for ASUS laptops on Linux: power modes, fan curves, GPU switching, keyboard lighting, battery limits and the Fn keys in one small window. Released as an AppImage and as Fedora and Arch packages, translated into 7 languages.",
    project_primeteens_tag: "Summer school platform",
    project_primeteens_title: "PrimeTeens mentor bot and platform",
    project_primeteens_copy:
      "A Telegram bot and web platform for a summer intensive: lesson reminders, a short survey after each lesson with voice answers, online workbooks and homework review.",
    project_autism_tag: "Anisa Spectrum",
    project_autism_title: "Autism Spectrum (ChildInfo)",
    project_autism_copy:
      "Built the UI/UX and PostgreSQL-backed data layer for an early autism-diagnosis app now deployed and postered in a local hospital.",
    project_one_tag: "Library Automation Intern",
    project_one_title: "Coventry Kazakhstan library platform",
    project_one_copy:
      "The library's live website: QR self-service book issuance through eLibra, event registration, admin pages and an AI Librarian chat that answers from the catalog, rules and site content.",
    project_two_tag: "University Product",
    project_two_title: "Roomly",
    project_two_copy:
      "Built a room reservation system with role-based flows, approval logic, calendar management, and Telegram onboarding.",
    project_bloody_tag: "Hardware on Linux",
    project_bloody_title: "Bloody W95 mouse on Linux",
    project_bloody_copy:
      "The mouse ships with Windows-only software, so I decoded its USB protocol and wrote a Python tool that sets RGB and DPI over hidraw.",
    project_debounce_tag: "Builder Story",
    project_debounce_title: "Tea-damaged keyboard -> ghost-key filter",
    project_debounce_copy:
      "Tea shorted my friend's keyboard matrix: one press fired two scan codes. I logged the bursts, mapped which keys ghost which, and wrote a global hook that drops the ghosts. For pairs the signal can't tell apart, Caps Lock picks the second key.",
    project_three_tag: "Research",
    project_three_title: "Spatial Factors of Housing Prices in Astana",
    project_three_copy:
      "3rd place at Lomonosov-2026. Twelve location factors on a 1 km hexagon grid against Krisha.kz listings: distance to the centre, LRT and universities matter most.",
    project_four_tag: "Applied AI",
    project_four_title: "RAG and automation workflows",
    project_four_copy:
      "Built AI-assisted workflows around RAG, backend integrations, and operational automation for real institutional use cases.",
    highlights_note: "4 entries -- the strongest results",
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
    link_code: "source code",
    deepdives_note: "6 entries -- personal notes, not coursework",
    deepdives_kicker: "What I dig into",
    deepdives_title: "Systems questions I keep coming back to.",
    deepdives_intro:
      'I keep pulling on a thread until the causal chain closes, then look for the strongest counter-argument before I trust my own conclusion. The question is rarely "why did the winner win", it is "what did the alternative actually lose, and who paid for it".',
    deepdive_one_title: "Why ARM, not just why not x86-64",
    deepdive_one_copy:
      '"ARM is more efficient" is a conclusion, not an argument, so I went after what x86-64 actually loses: a more complex decoder for variable-length instructions and decades of legacy behaviour Intel and AMD cannot drop without breaking existing software. Then I looked for the counter-case: x86-64\'s real moat is exactly that software. Windows RT in 2012 could not run existing x86 desktop apps at all, and Microsoft wrote down $900M on Surface RT. Windows on ARM only became usable once x86 emulation and the chips got good enough. ARM does not win in general; it wins where x86 compatibility is not the constraint, and loses hard where it is.',
    deepdive_two_title:
      "Why anti-cheat lives in Ring 0 -- and what that costs everyone else",
    deepdive_two_copy:
      'I didn\'t accept "anti-cheat just needs kernel access" at face value, so I looked at what user-space anti-cheat actually can\'t see: cheats that hook below the OS\'s own visibility. That gap is why Vanguard-style anti-cheat runs in Ring 0, why a single bug there is a whole-system vulnerability and not a game bug, and why a user-space emulator like Prism can\'t run a kernel-mode x64 driver at all. The part I kept circling back to: studios get a real security win, and every player on that machine inherits a kernel-level attack surface they never agreed to.',
    deepdive_three_title:
      "seL4: proof over testing, and what that actually costs",
    deepdive_three_copy:
      'The obvious alternative to formal verification is what everyone already does -- test until nothing breaks -- so I wanted to know what that approach can never claim: that no untested input exists. seL4 is formally verified, mathematically proven correct against its spec, not just battle-tested. What I keep chewing on is the price of that guarantee: every line has to be provably correct, which is why almost nothing outside safety-critical systems gets built this way. Proof doesn\'t scale the way "ship and patch" does.',
    deepdive_four_title:
      "Unified memory's real trade: performance-per-watt for upgradability",
    deepdive_four_copy:
      "The usual PC design gives the CPU and the discrete GPU separate memory and copies data between them over PCIe. Apple's M-series puts the CPU and GPU on one shared pool of memory in the same package, so both read the same data without the copy. I don't think that's a free win: the same soldered, shared memory that makes it efficient is also why you can't upgrade the RAM later. Performance-per-watt and right-to-repair point in opposite directions, and Apple picked one.",
    deepdive_five_title: "Why IBM walked out of the race it started",
    deepdive_five_copy:
      "IBM basically invented the commercial computer industry, then sold its PC business to Lenovo in 2005 and its x86 server line in 2014, and kept pushing into mainframes, Power, and later services and quantum instead of fighting for the commodity market it created. I wanted to know why a company retreats from a race it's still winning on name alone: commodity x86 hardware was collapsing into razor-thin margins as everyone converged on the same components, while mainframes stayed a small, high-margin niche competitors couldn't easily enter. It reads less like losing and more like choosing depth over share -- though it also meant giving up the mindshare that comes with being in every consumer's hands.",
    deepdive_six_title: "AMD's chiplet bet vs. Intel stuck on 14nm",
    deepdive_six_copy:
      "AMD was nearly bankrupt after the Bulldozer years and had already spun its fabs off into GlobalFoundries. It launched Zen in 2017, then with Zen 2 in 2019 split the CPU into chiplets built on TSMC's 7nm process, while Intel kept re-spinning 14nm for years after its 10nm node slipped. I wanted to know how much of this was AMD's design being smarter versus Intel's manufacturing failing to deliver, and I think it's mostly the second: a better design wouldn't have mattered without TSMC shipping smaller nodes on schedule. Chiplets aren't free either: splitting the die adds interconnect latency across Infinity Fabric that a monolithic die never pays.",
    study_note: "independent coursework -- handwritten notes in the PDF",
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
    study_four_title: "The notes themselves",
    study_four_copy:
      "Pages from my OCW and discrete math notebooks, plus photos of the ChildInfo poster in the hospital and screenshots of the library and Roomly interfaces.",
    link_pdf: "open the PDF",
    footer_one: "Open to internships, research and project work.",
    modal_close: "close",
    modal_links: "Links",
    link_repo: "GitHub repository",
    link_download: "Download the AppImage",
    link_poster: "Hospital poster (PDF)",
    contact_cv_hint: "1 page",
    blog_back: "<- back to portfolio",
    blog_kicker: "Blog",
    nav_experience: "experience",
    fact_uni: "BSc CS with AI, Coventry University Kazakhstan",
    fact_langs: "RU / EN / KZ",
    now_one: "now:: shipping Shiftray, a Linux app for ASUS laptops",
    now_two: "now:: building Bookgram, a social reading app",
    now_three:
      "now:: research on RL with Hamilton-Jacobi-Bellman value functions",
    chip_deployed: "deployed",
    chip_re: "reverse engineering",
    exp_note: "work, research and education",
    exp_kicker: "Experience",
    exp_title: "Where the work happened.",
    exp_work: "Work",
    exp_research: "Research",
    exp_education: "Education",
    exp_pt_date: "Jun 2026 - now",
    exp_pt_role: "Curriculum designer, mentor and platform developer",
    exp_pt_copy:
      "Built the platform: site, live student workbook, Telegram bots, PostgreSQL, deployment. Designed and taught a research and portfolio course for grades 7-11 to 6 groups.",
    exp_lib_date: "Jan 2026 - now",
    exp_lib_role: "Library automation intern",
    exp_lib_copy:
      "QR book issuance as a low-cost alternative to RFID, the library website and a RAG chatbot for it.",
    exp_as_date: "Sep - Dec 2024",
    exp_as_role: "Software developer",
    exp_as_copy:
      "App for early autism diagnosis, now used in a local hospital: UI/UX and the PostgreSQL database.",
    exp_unicef_date: "Jan - May 2024",
    exp_unicef_role: "Volunteer computer science teacher",
    exp_unicef_copy:
      "Mentored children from disadvantaged backgrounds through their first programming project.",
    exp_org_date: "Jan - Aug 2024",
    exp_org_role: "Main organizer",
    exp_org_copy:
      "Two national hackathons across 14 cities, 650+ participants and 175 teams: logistics, rules, tasks, sponsors and marketing.",
    exp_rl_date: "2026 - now",
    exp_rl_title: "Supervised research, Coventry University Kazakhstan",
    exp_rl_role: "Supervisor: Sanzhar Kusdavletov",
    exp_rl_copy:
      "Reinforcement learning with Hamilton-Jacobi-Bellman value functions for safety-critical control (UAV interception): V = V_HJB + learned residual, to be tested in simulation.",
    exp_lomo_title: "Lomonosov-2026 conference",
    exp_lomo_role: "3rd place of 20 reports, spatial analysis section",
    exp_lomo_copy:
      "Regression model of housing prices in Astana from real-estate listings with ArcGIS: location, infrastructure and environment as price drivers.",
    exp_nu_title: "Nazarbayev University Summer Research Program",
    exp_nu_copy:
      "Tested venture hypotheses on data, wrote the final report and pitched it to a panel.",
    exp_bsc_date: "2025 - now",
    exp_bsc_title: "BSc Computer Science with AI",
    exp_bsc_role:
      "Coventry University Kazakhstan / GPA 3.75/4 / State Scholarship",
    exp_nis_title: "Nazarbayev Intellectual School of Astana",
    exp_nis_role: "IB Diploma, Math AA HL / IB 39/45",
    highlight_nec_title: "3rd place out of 125 teams",
    highlight_nec_copy:
      "An AI product that generates practice tests for SAT and IELTS prep.",
    wins_all: "all 20+ results",
    read_post: "read",
    blog_all: "all posts",
    contact_title: "Let's talk.",
    link_live: "Live site",
    chip_live: "live",
    chip_hook: "global keyboard hook",
    chip_hex: "1 km hex grid",
    chip_corr: "correlation",
  },
  ru: {
    hero_eyebrow: "строю // отлаживаю // соревнуюсь // выпускаю",
    hero_lead:
      "Студент CS with AI в Астане. Делаю бэкенд, Linux-инструменты для реального железа и AI-автоматизацию.",
    contact_cv: "Резюме (PDF)",
    stat_one: "хакатонов и соревнований",
    stat_two: "участников на хакатонах, которые я организовал",
    stat_three_value: "Стек",
    stat_three: "Python, SQL, Next.js, Linux, Docker",
    stat_four_value: "Блог",
    stat_four: "заметки о том, как устроены системы",
    stat_four_action: "читать блог",
    card_action: "подробнее",
    nav_projects: "проекты",
    nav_highlights: "победы",
    nav_deepdives: "блог",
    nav_study: "учёба",
    nav_contact: "контакты",
    projects_note:
      "8 записей -- откройте карточку, там подробности и ссылки",
    projects_kicker: "Избранные проекты",
    projects_title: "Проекты за цифрами.",
    project_open: "открыть проект",
    project_shiftray_tag: "Open source / Linux",
    project_shiftray_title: "Shiftray",
    project_shiftray_copy:
      "Приложение в трее для ноутбуков ASUS на Linux: режимы питания, кривые вентиляторов, переключение видеокарты, подсветка клавиатуры, лимит заряда и клавиши Fn в одном маленьком окне. Выходит как AppImage и как пакеты для Fedora и Arch, переведено на 7 языков.",
    project_primeteens_tag: "Платформа летней школы",
    project_primeteens_title: "Бот и платформа для менторов PrimeTeens",
    project_primeteens_copy:
      "Telegram-бот и веб-платформа для летнего интенсива: напоминания о занятиях, короткий опрос после каждого урока с голосовыми ответами, онлайн-тетради и проверка домашки.",
    project_autism_tag: "Anisa Spectrum",
    project_autism_title: "Autism Spectrum (ChildInfo)",
    project_autism_copy:
      "Сделал UI/UX и слой данных на PostgreSQL для приложения ранней диагностики аутизма. Приложение работает, его постер висит в местной больнице.",
    project_one_tag: "Стажировка в библиотеке",
    project_one_title: "Платформа библиотеки Coventry Kazakhstan",
    project_one_copy:
      "Живой сайт библиотеки: самостоятельная выдача книг по QR через eLibra, регистрация на события, админка и AI-библиотекарь, который отвечает по каталогу, правилам и материалам сайта.",
    project_two_tag: "Университетский продукт",
    project_two_title: "Roomly",
    project_two_copy:
      "Сделал систему бронирования аудиторий с ролями, согласованием, календарём и входом через Telegram.",
    project_bloody_tag: "Железо на Linux",
    project_bloody_title: "Мышь Bloody W95 на Linux",
    project_bloody_copy:
      "Программа для мыши есть только под Windows, поэтому я разобрал её USB-протокол и написал утилиту на Python, которая меняет подсветку и DPI через hidraw.",
    project_debounce_tag: "История",
    project_debounce_title:
      "Залитая чаем клавиатура -> фильтр призрачных нажатий",
    project_debounce_copy:
      "Чай замкнул матрицу клавиатуры друга: одно нажатие давало два сканкода. Я записал эти пачки, составил карту, какая клавиша даёт какой призрак, и написал глобальный хук, который глушит призраков. Для пар, которые по сигналу не различить, вторую клавишу выбирает Caps Lock.",
    project_three_tag: "Исследование",
    project_three_title: "Пространственные факторы цен на жильё в Астане",
    project_three_copy:
      "3-е место на Ломоносов-2026. Двенадцать факторов местоположения на сетке шестиугольников 1 км против объявлений Krisha.kz: сильнее всего влияют расстояние до центра, ЛРТ и университетов.",
    project_four_tag: "Прикладной AI",
    project_four_title: "RAG и автоматизация",
    project_four_copy:
      "AI-процессы вокруг RAG, интеграций с бэкендом и автоматизации для реальных задач учреждений.",
    highlights_note: "4 записи -- самые сильные результаты",
    highlights_kicker: "Главное",
    highlights_title: "События, которые важнее всего.",
    highlight_one_tag: "AmanatTech",
    highlight_one_title: "Топ-20 из 400 команд",
    highlight_one_copy:
      "Концепция платформы для помощи людям с наркозависимостью: социальная польза плюс продуктовое мышление.",
    highlight_two_tag: "HackNU 2026",
    highlight_two_title: "Кейс Қазақстан Темір Жолы",
    highlight_two_copy:
      "Платформа цифрового двойника локомотива для телеметрии, диагностики и мониторинга за один напряжённый инженерный спринт.",
    highlight_three_tag: "BiCAP Hackathon",
    highlight_three_title: "1-е место из 200 команд",
    highlight_three_copy:
      "Text-to-SQL, SQL-to-text и AI-аудит для малого и среднего бизнеса.",
    highlight_four_tag: "Decentrathon 2.0-5.0",
    highlight_four_title: "Четыре сезона, растущий масштаб",
    highlight_four_copy:
      "Telegram mini apps, AI-ассистенты, скрининг по правилам для InVision University и эксперименты с моделями на PyTorch.",
    link_code: "исходный код",
    deepdives_note: "6 записей -- личные заметки, не учебные задания",
    deepdives_kicker: "В чём я копаюсь",
    deepdives_title: "Вопросы о системах, к которым я возвращаюсь.",
    deepdives_intro:
      "Я тяну за нить, пока причинная цепочка не замкнётся, а потом ищу самый сильный контраргумент, прежде чем поверить своему выводу. Вопрос обычно не «почему победитель победил», а «что на самом деле потеряла альтернатива и кто за это заплатил».",
    deepdive_one_title: "Почему ARM, а не просто почему не x86-64",
    deepdive_one_copy:
      "«ARM эффективнее» -- это вывод, а не аргумент, поэтому я искал, что x86-64 реально теряет: более сложный декодер для команд переменной длины и десятилетия наследия, которое Intel и AMD не могут выбросить, не сломав существующие программы. Потом я искал контраргумент: настоящая защита x86-64 -- как раз эти программы. Windows RT в 2012 году вообще не запускала обычные x86-приложения, и Microsoft списала $900 млн на Surface RT. Windows на ARM стала пригодной, только когда эмуляция x86 и сами чипы стали достаточно хорошими. ARM не выигрывает вообще: он выигрывает там, где совместимость с x86 не ограничение, и сильно проигрывает там, где ограничение.",
    deepdive_two_title:
      "Почему античит живёт в Ring 0 и чего это стоит остальным",
    deepdive_two_copy:
      "Я не принял на веру «античиту просто нужен доступ к ядру» и проверил, чего античит в пространстве пользователя не видит: читы, которые цепляются ниже того, что видит сама ОС. Из-за этого пробела античиты вроде Vanguard работают в Ring 0, одна ошибка там -- уязвимость всей системы, а не баг игры, а эмулятор уровня пользователя вроде Prism вообще не может запустить x64-драйвер ядра. К чему я всё время возвращался: студии получают реальный выигрыш в защите, а каждый игрок на этом компьютере получает поверхность атаки на уровне ядра, на которую не соглашался.",
    deepdive_three_title:
      "seL4: доказательство вместо тестов и его настоящая цена",
    deepdive_three_copy:
      "Очевидная альтернатива формальной верификации -- то, что делают все: тестировать, пока ничего не ломается. Поэтому мне было интересно, чего этот подход никогда не может утверждать: что непроверенных входных данных не существует. seL4 формально верифицирован, его корректность относительно спецификации доказана математически, а не просто проверена в бою. Думаю я о цене этой гарантии: каждая строка должна быть доказуемо верной, поэтому вне критичных к безопасности систем так почти ничего не строят. Доказательство не масштабируется так, как «выпусти и допатчи».",
    deepdive_four_title:
      "Настоящий размен unified memory: производительность на ватт против апгрейда",
    deepdive_four_copy:
      "В обычном ПК у процессора и дискретной видеокарты своя память, и данные копируются между ними по PCIe. В Apple M-серии процессор и видеоядро сидят на одном общем пуле памяти в одном корпусе, и оба читают одни и те же данные без копирования. Не думаю, что это бесплатный выигрыш: та же распаянная общая память, которая даёт эффективность, -- причина, почему память нельзя нарастить потом. Производительность на ватт и право на ремонт смотрят в разные стороны, и Apple выбрала одно.",
    deepdive_five_title: "Почему IBM ушла из гонки, которую сама начала",
    deepdive_five_copy:
      "IBM по сути создала коммерческую компьютерную индустрию, а потом продала бизнес ПК компании Lenovo в 2005 году и x86-серверы в 2014-м, и ушла в мейнфреймы, Power, а позже в сервисы и квантовые вычисления вместо борьбы за массовый рынок, который сама создала. Мне было интересно, почему компания уходит из гонки, в которой всё ещё выигрывает хотя бы именем: массовое x86-железо скатывалось в мизерную маржу, потому что все перешли на одинаковые компоненты, а мейнфреймы оставались маленькой, но очень прибыльной нишей, куда конкурентам трудно зайти. Это похоже не на поражение, а на выбор глубины вместо доли рынка -- хотя это значило и отказ от узнаваемости, которая приходит, когда ты в руках у каждого покупателя.",
    deepdive_six_title:
      "Ставка AMD на чиплеты против Intel, застрявшей на 14 нм",
    deepdive_six_copy:
      "После лет Bulldozer AMD была на грани банкротства и уже выделила свои фабрики в GlobalFoundries. В 2017 году она выпустила Zen, а в 2019-м с Zen 2 разделила процессор на чиплеты на 7-нм техпроцессе TSMC, пока Intel годами перевыпускала 14 нм после срыва 10 нм. Мне было интересно, сколько здесь от умного дизайна AMD, а сколько от провала производства Intel, и я думаю, что в основном второе: лучший дизайн не помог бы, если бы TSMC не выпускала меньшие техпроцессы вовремя. Чиплеты тоже не бесплатны: разделение кристалла добавляет задержку на Infinity Fabric, которой у монолитного кристалла нет.",
    study_note: "самостоятельная учёба -- рукописные конспекты в PDF",
    study_kicker: "Учёба",
    study_title: "Строю математику под кодом.",
    study_one_title: "MIT OpenCourseWare",
    study_one_copy:
      "Смотрю лекции OCW -- линейная алгебра у профессора Стрэнга, анализ функций многих переменных, дифференциальные уравнения -- и веду рукописные конспекты.",
    study_two_title: "Дискретная математика",
    study_two_copy:
      "Хожу на курс профессора Санжара Кусдавлетова и решаю задачи руками -- ядро матрицы, теория множеств, таблицы истинности.",
    study_three_title: "Линейная алгебра глубже",
    study_three_copy:
      "Квадратичные формы, QR / Грам-Шмидт и LU-разложение сверх учебной программы.",
    study_four_title: "Сами конспекты",
    study_four_copy:
      "Страницы из тетрадей по OCW и дискретной математике, фото постера ChildInfo в больнице и скриншоты интерфейсов библиотеки и Roomly.",
    link_pdf: "открыть PDF",
    footer_one: "Открыт к стажировкам, исследованиям и проектной работе.",
    modal_close: "закрыть",
    modal_links: "Ссылки",
    link_repo: "Репозиторий на GitHub",
    link_download: "Скачать AppImage",
    link_poster: "Постер в больнице (PDF)",
    contact_cv_hint: "1 страница",
    blog_back: "<- назад к портфолио",
    blog_kicker: "Блог",
    nav_experience: "опыт",
    fact_uni: "BSc CS with AI, Coventry University Kazakhstan",
    fact_langs: "RU / EN / KZ",
    now_one: "now:: выпускаю Shiftray, Linux-приложение для ноутбуков ASUS",
    now_two: "now:: делаю Bookgram, социальное приложение для чтения",
    now_three:
      "now:: исследую RL с функциями ценности Гамильтона-Якоби-Беллмана",
    chip_deployed: "внедрено",
    chip_re: "реверс-инжиниринг",
    exp_note: "работа, исследования и образование",
    exp_kicker: "Опыт",
    exp_title: "Где делалась работа.",
    exp_work: "Работа",
    exp_research: "Исследования",
    exp_education: "Образование",
    exp_pt_date: "июн 2026 - сейчас",
    exp_pt_role: "Автор программы, ментор и разработчик платформы",
    exp_pt_copy:
      "Сделал платформу: сайт, живую тетрадь для учеников, Telegram-ботов, PostgreSQL и деплой. Разработал и провёл курс по исследованиям и портфолио для 7-11 классов, 6 групп.",
    exp_lib_date: "янв 2026 - сейчас",
    exp_lib_role: "Стажёр по автоматизации библиотеки",
    exp_lib_copy:
      "Выдача книг по QR как дешёвая альтернатива RFID, сайт библиотеки и RAG-чат-бот для него.",
    exp_as_date: "сен - дек 2024",
    exp_as_role: "Разработчик",
    exp_as_copy:
      "Приложение для ранней диагностики аутизма, сейчас работает в местной больнице: UI/UX и база PostgreSQL.",
    exp_unicef_date: "янв - май 2024",
    exp_unicef_role: "Волонтёр-преподаватель информатики",
    exp_unicef_copy:
      "Вёл детей из малообеспеченных семей через их первый проект на программировании.",
    exp_org_date: "янв - авг 2024",
    exp_org_role: "Главный организатор",
    exp_org_copy:
      "Два национальных хакатона в 14 городах, 650+ участников и 175 команд: логистика, правила, задания, спонсоры и маркетинг.",
    exp_rl_date: "2026 - сейчас",
    exp_rl_title:
      "Исследование под руководством, Coventry University Kazakhstan",
    exp_rl_role: "Руководитель: Санжар Кусдавлетов",
    exp_rl_copy:
      "Обучение с подкреплением вместе с функциями ценности Гамильтона-Якоби-Беллмана для критичного к безопасности управления (перехват БПЛА): V = V_HJB + обучаемая поправка, проверка в симуляции.",
    exp_lomo_title: "Конференция Ломоносов-2026",
    exp_lomo_role:
      "3-е место из 20 докладов, секция пространственного анализа",
    exp_lomo_copy:
      "Регрессионная модель цен на жильё в Астане по объявлениям, с анализом в ArcGIS: местоположение, инфраструктура и экология как факторы цены.",
    exp_nu_title: "Летняя исследовательская программа Nazarbayev University",
    exp_nu_copy:
      "Проверял гипотезы стартапа на данных, написал итоговый отчёт и защитил его перед комиссией.",
    exp_bsc_date: "2025 - сейчас",
    exp_bsc_title: "BSc Computer Science with AI",
    exp_bsc_role:
      "Coventry University Kazakhstan / GPA 3.75/4 / государственный грант",
    exp_nis_title: "Назарбаев Интеллектуальная школа Астаны",
    exp_nis_role: "IB Diploma, Math AA HL / IB 39/45",
    highlight_nec_title: "3-е место из 125 команд",
    highlight_nec_copy:
      "AI-продукт, который генерирует тренировочные тесты для подготовки к SAT и IELTS.",
    wins_all: "все 20+ результатов",
    read_post: "читать",
    blog_all: "все записи",
    contact_title: "Давайте поговорим.",
    link_live: "Открыть сайт",
    chip_live: "работает",
    chip_hook: "глобальный хук клавиатуры",
    chip_hex: "сетка 1 км",
    chip_corr: "корреляция",
  },
  kz: {
    hero_eyebrow: "жасаймын // түзетемін // жарысамын // шығарамын",
    hero_lead:
      "Астанада CS with AI мамандығында оқимын. Backend, нақты құрылғыларға арналған Linux құралдары және AI автоматтандыру жасаймын.",
    contact_cv: "Түйіндеме (PDF)",
    stat_one: "хакатон мен жарыс",
    stat_two: "мен ұйымдастырған хакатондардың қатысушылары",
    stat_three_value: "Стек",
    stat_three: "Python, SQL, Next.js, Linux, Docker",
    stat_four_value: "Блог",
    stat_four: "жүйелердің қалай жұмыс істейтіні туралы жазбалар",
    stat_four_action: "блогты оқу",
    card_action: "толығырақ",
    nav_projects: "жобалар",
    nav_highlights: "жеңістер",
    nav_deepdives: "блог",
    nav_study: "оқу",
    nav_contact: "байланыс",
    projects_note:
      "8 жазба -- толығырақ ақпарат пен сілтемелер карточканың ішінде",
    projects_kicker: "Таңдаулы жобалар",
    projects_title: "Сандардың артындағы жобалар.",
    project_open: "жобаны ашу",
    project_shiftray_tag: "Open source / Linux",
    project_shiftray_title: "Shiftray",
    project_shiftray_copy:
      "Linux-тағы ASUS ноутбуктеріне арналған трей қосымшасы: қуат режимдері, желдеткіш қисықтары, бейнекартаны ауыстыру, пернетақта жарығы, заряд шегі және Fn пернелері бір шағын терезеде. AppImage және Fedora мен Arch пакеттері ретінде шығады, 7 тілге аударылған.",
    project_primeteens_tag: "Жазғы мектеп платформасы",
    project_primeteens_title:
      "PrimeTeens менторларына арналған бот пен платформа",
    project_primeteens_copy:
      "Жазғы интенсивтің Telegram-боты мен веб-платформасы: сабақ туралы еске салғыштар, әр сабақтан кейін дауыспен жауап беруге болатын қысқа сауалнама, онлайн дәптерлер және үй тапсырмасын тексеру.",
    project_autism_tag: "Anisa Spectrum",
    project_autism_title: "Autism Spectrum (ChildInfo)",
    project_autism_copy:
      "Аутизмді ерте анықтауға арналған қосымшаның UI/UX бөлігін және PostgreSQL негізіндегі деректер қабатын жасадым. Қосымша іске қосылған, оның постері жергілікті ауруханада ілулі тұр.",
    project_one_tag: "Кітапханадағы тағылымдама",
    project_one_title: "Coventry Kazakhstan кітапханасының платформасы",
    project_one_copy:
      "Кітапхананың жұмыс істеп тұрған сайты: eLibra арқылы QR бойынша кітапты өз бетінше алу, іс-шараларға тіркелу, әкімші беттері және каталог, ережелер мен сайт материалдары бойынша жауап беретін AI кітапханашы.",
    project_two_tag: "Университет өнімі",
    project_two_title: "Roomly",
    project_two_copy:
      "Рөлдері, келісу логикасы, күнтізбесі және Telegram арқылы кіруі бар аудиторияларды брондау жүйесін жасадым.",
    project_bloody_tag: "Linux-тағы құрылғы",
    project_bloody_title: "Linux-тағы Bloody W95 тінтуірі",
    project_bloody_copy:
      "Тінтуірдің бағдарламасы тек Windows-қа арналған, сондықтан мен оның USB протоколын талдап, hidraw арқылы жарық пен DPI-ды өзгертетін Python құралын жаздым.",
    project_debounce_tag: "Оқиға",
    project_debounce_title:
      "Шай төгілген пернетақта -> жалған басуларды сүзгі",
    project_debounce_copy:
      "Шай досымның пернетақта матрицасын тұйықтап тастады: бір басу екі сканкод берді. Мен осы топтарды жазып алып, қай перне қандай жалған сигнал беретінінің картасын жасадым да, оларды өшіретін глобал хук жаздым. Сигнал бойынша ажыратуға болмайтын жұптарда екінші пернені Caps Lock таңдайды.",
    project_three_tag: "Зерттеу",
    project_three_title:
      "Астанадағы тұрғын үй бағасының кеңістіктік факторлары",
    project_three_copy:
      "Ломоносов-2026-да 3-орын. Krisha.kz хабарландыруларымен салыстырылған 1 км алтыбұрышты тордағы он екі орналасу факторы: орталыққа, ЛРТ-ға және университеттерге дейінгі қашықтық ең көп әсер етеді.",
    project_four_tag: "Қолданбалы AI",
    project_four_title: "RAG және автоматтандыру",
    project_four_copy:
      "Мекемелердің нақты міндеттері үшін RAG, backend интеграциялары және автоматтандыру негізіндегі AI процестерін жасадым.",
    highlights_note: "4 жазба -- ең мықты нәтижелер",
    highlights_kicker: "Басты кезеңдер",
    highlights_title: "Ең маңызды оқиғалар.",
    highlight_one_tag: "AmanatTech",
    highlight_one_title: "400 команданың ішінде үздік 20",
    highlight_one_copy:
      "Нашақорлыққа тәуелді адамдарға көмектесуге арналған платформа идеясы: әлеуметтік пайда мен өнімдік ойлау бірге.",
    highlight_two_tag: "HackNU 2026",
    highlight_two_title: "Қазақстан Темір Жолы кейсі",
    highlight_two_copy:
      "Бір қарқынды инженерлік спринтте телеметрия, диагностика және мониторингке арналған локомотивтің цифрлық егізі платформасын жасадық.",
    highlight_three_tag: "BiCAP Hackathon",
    highlight_three_title: "200 команданың ішінде 1-орын",
    highlight_three_copy:
      "Шағын және орта бизнеске арналған text-to-SQL, SQL-to-text және AI көмегімен аудит.",
    highlight_four_tag: "Decentrathon 2.0-5.0",
    highlight_four_title: "Төрт маусым, өсіп келе жатқан ауқым",
    highlight_four_copy:
      "Telegram mini apps, AI көмекшілері, InVision University үшін ережеге негізделген іріктеу және PyTorch-пен модель тәжірибелері.",
    link_code: "бастапқы код",
    deepdives_note: "6 жазба -- жеке жазбалар, оқу тапсырмасы емес",
    deepdives_kicker: "Мені не қызықтырады",
    deepdives_title: "Үнемі оралатын жүйелер туралы сұрақтар.",
    deepdives_intro:
      "Себеп-салдар тізбегі толық жабылғанша жіпті тарта беремін, содан кейін өз қорытындыма сенбес бұрын ең күшті қарсы дәлелді іздеймін. Сұрақ әдетте «жеңімпаз неге жеңді» емес, «балама шын мәнінде неден айырылды және оның бағасын кім төледі».",
    deepdive_one_title: "Неге ARM: тек x86-64 неге емес деген сұрақ емес",
    deepdive_one_copy:
      "«ARM тиімдірек» -- бұл дәлел емес, қорытынды. Сондықтан мен x86-64 нақты неден ұтылатынын іздедім: ұзындығы әртүрлі командаларға арналған күрделірек декодер және Intel мен AMD бар бағдарламаларды бұзбай алып тастай алмайтын ондаған жылдық мұра. Содан кейін қарсы дәлелді іздедім: x86-64-тің нағыз қорғаны дәл осы бағдарламалар. 2012 жылғы Windows RT кәдімгі x86 қосымшаларын мүлде іске қоса алмады, ал Microsoft Surface RT бойынша 900 млн долларды есептен шығарды. ARM-дағы Windows x86 эмуляциясы мен чиптердің өзі жеткілікті жақсарғанда ғана қолдануға жарамды болды. ARM жалпы жеңбейді: x86 үйлесімділігі шектеу болмайтын жерде жеңеді, ал шектеу болатын жерде қатты ұтылады.",
    deepdive_two_title:
      "Неге античит Ring 0-де жұмыс істейді және оның бағасын кім төлейді",
    deepdive_two_copy:
      "«Античитке жай ғана ядроға қолжетімділік керек» деген сөзді дайын күйінде қабылдамадым, сондықтан пайдаланушы кеңістігіндегі античит нені көре алмайтынын тексердім: ОЖ-ның өзі көретін деңгейден төмен ілінетін читтерді. Дәл осы олқылыққа байланысты Vanguard сияқты античиттер Ring 0-де жұмыс істейді, сол жердегі бір қате ойынның емес, бүкіл жүйенің осалдығына айналады, ал Prism сияқты пайдаланушы деңгейіндегі эмулятор ядроның x64 драйверін мүлде іске қоса алмайды. Мені ойландырған нәрсе: студиялар қорғаныс жағынан нақты ұтады, ал сол компьютердегі әрбір ойыншы өзі келіспеген ядро деңгейіндегі шабуыл бетін алады.",
    deepdive_three_title:
      "seL4: тестілеудің орнына дәлелдеу және оның нақты бағасы",
    deepdive_three_copy:
      "Формалды верификацияның айқын баламасы -- барлығы жасайтын нәрсе: ештеңе бұзылмағанша тестілеу. Сондықтан бұл тәсіл ешқашан айта алмайтын нәрсені білгім келді: тексерілмеген кіріс деректері жоқ деп. seL4 формалды түрде верификацияланған, яғни оның спецификацияға сәйкестігі жай ғана сынақтан өтпей, математикалық тұрғыда дәлелденген. Мені ойландыратыны -- осы кепілдіктің бағасы: әр жолдың дұрыстығы дәлелденуі керек, сондықтан қауіпсіздігі аса маңызды жүйелерден тыс жерде бұлай сирек жасалады. Дәлелдеу «шығар да кейін түзет» тәсілі сияқты масштабталмайды.",
    deepdive_four_title:
      "Unified memory: ватт үшін өнімділік пен жаңарту мүмкіндігі арасындағы таңдау",
    deepdive_four_copy:
      "Әдеттегі ДК-де процессор мен дискретті бейнекартаның жады бөлек, ал деректер олардың арасында PCIe арқылы көшіріледі. Apple M-сериясында процессор мен бейнеядро бір корпустағы ортақ жадты пайдаланады, сондықтан екеуі де бір деректі көшірусіз оқиды. Бұл тегін ұтыс деп ойламаймын: тиімділік беретін сол дәнекерленген ортақ жад кейін жадты ұлғайтуға мүмкіндік бермейді. Ватт үшін өнімділік пен жөндеу құқығы қарама-қарсы бағытқа қарайды, ал Apple біреуін таңдады.",
    deepdive_five_title: "Неге IBM өзі бастаған жарыстан шықты",
    deepdive_five_copy:
      "IBM коммерциялық компьютер индустриясын іс жүзінде өзі құрды, бірақ 2005 жылы ДК бизнесін, ал 2014 жылы x86 серверлерін Lenovo-ға сатты да, өзі жасаған жаппай нарық үшін күресудің орнына мейнфреймдерге, Power-ге, кейін сервистер мен кванттық есептеулерге бет бұрды. Атымен ғана болса да әлі жеңіп жүрген жарыстан компанияның неге кететінін білгім келді: барлығы бірдей компоненттерге көшкен сайын жаппай x86 жабдығының маржасы өте аз болып қалды, ал мейнфреймдер бәсекелестер оңай кіре алмайтын шағын, бірақ өте табысты тауаша болып қала берді. Бұл жеңілістен гөрі нарық үлесінің орнына тереңдікті таңдауға ұқсайды -- бірақ бұл әр тұтынушының қолында болудан келетін танымалдықтан бас тартуды да білдірді.",
    deepdive_six_title:
      "AMD чиплеттерге бәс тікті, Intel 14 нм-де тұрып қалды",
    deepdive_six_copy:
      "Bulldozer жылдарынан кейін AMD банкроттыққа жақын болды және өз зауыттарын GlobalFoundries-ке бөліп шығарып үлгерген еді. Ол 2017 жылы Zen-ді шығарды, ал 2019 жылы Zen 2-де процессорды TSMC-нің 7 нм техпроцесіндегі чиплеттерге бөлді. Ал Intel 10 нм кешіккеннен кейін бірнеше жыл бойы 14 нм-ді қайта-қайта шығарды. Мұның қаншасы AMD дизайнының ақылдылығы, ал қаншасы Intel өндірісінің сәтсіздігі екенін білгім келді. Менің ойымша, көбі екіншісі: TSMC кішірек техпроцестерді уақытында шығармағанда, жақсы дизайн да көмектеспес еді. Чиплеттер де тегін емес: кристалды бөлу Infinity Fabric арқылы монолитті кристалда болмайтын кідіріс қосады.",
    study_note: "өз бетімше оқу -- қолжазба конспектілер PDF-те",
    study_kicker: "Оқу",
    study_title: "Кодтың астындағы математиканы құрып жатырмын.",
    study_one_title: "MIT OpenCourseWare",
    study_one_copy:
      "OCW дәрістерін қараймын -- профессор Стрэнгпен сызықтық алгебра, көп айнымалы функциялар анализі, дифференциалдық теңдеулер -- және қолмен конспект жазамын.",
    study_two_title: "Дискретті математика",
    study_two_copy:
      "Профессор Санжар Құсдәулетовтың курсына барып, есептерді қолмен шығарамын -- матрицаның ядросы, жиындар теориясы, ақиқат кестелері.",
    study_three_title: "Сызықтық алгебра тереңірек",
    study_three_copy:
      "Квадраттық формалар, QR / Грам-Шмидт және LU жіктеуі -- оқу бағдарламасынан тыс.",
    study_four_title: "Конспектілердің өзі",
    study_four_copy:
      "OCW және дискретті математика дәптерлерінен беттер, ауруханадағы ChildInfo постерінің суреті, кітапхана мен Roomly интерфейстерінің скриншоттары.",
    link_pdf: "PDF ашу",
    footer_one: "Тағылымдамаға, зерттеуге және жобалық жұмысқа ашықпын.",
    modal_close: "жабу",
    modal_links: "Сілтемелер",
    link_repo: "GitHub репозиторийі",
    link_download: "AppImage жүктеу",
    link_poster: "Ауруханадағы постер (PDF)",
    contact_cv_hint: "1 бет",
    blog_back: "<- портфолиоға оралу",
    blog_kicker: "Блог",
    nav_experience: "тәжірибе",
    fact_uni: "BSc CS with AI, Coventry University Kazakhstan",
    fact_langs: "RU / EN / KZ",
    now_one:
      "now:: ASUS ноутбуктеріне арналған Linux қосымшасы Shiftray-ді шығарып жатырмын",
    now_two: "now:: Bookgram кітап оқуға арналған әлеуметтік қосымшасын жасап жатырмын",
    now_three:
      "now:: Гамильтон-Якоби-Беллман құндылық функцияларымен RL зерттеймін",
    chip_deployed: "енгізілген",
    chip_re: "кері инженерия",
    exp_note: "жұмыс, зерттеу және білім",
    exp_kicker: "Тәжірибе",
    exp_title: "Жұмыс қай жерде жасалды.",
    exp_work: "Жұмыс",
    exp_research: "Зерттеу",
    exp_education: "Білім",
    exp_pt_date: "2026 маусым - қазір",
    exp_pt_role: "Бағдарлама авторы, ментор және платформа әзірлеушісі",
    exp_pt_copy:
      "Платформаны жасадым: сайт, оқушыларға арналған тірі дәптер, Telegram-боттар, PostgreSQL және орналастыру. 7-11 сыныптарға арналған зерттеу және портфолио курсын әзірлеп, 6 топқа өткіздім.",
    exp_lib_date: "2026 қаңтар - қазір",
    exp_lib_role: "Кітапхананы автоматтандыру тағылымдамашысы",
    exp_lib_copy:
      "RFID-ке арзан балама ретінде QR арқылы кітап беру, кітапхана сайты және оған арналған RAG чат-бот.",
    exp_as_date: "2024 қыркүйек - желтоқсан",
    exp_as_role: "Әзірлеуші",
    exp_as_copy:
      "Аутизмді ерте анықтауға арналған қосымша, қазір жергілікті ауруханада қолданылады: UI/UX және PostgreSQL дерекқоры.",
    exp_unicef_date: "2024 қаңтар - мамыр",
    exp_unicef_role: "Ерікті информатика мұғалімі",
    exp_unicef_copy:
      "Әлеуметтік жағдайы төмен отбасылардың балаларын алғашқы бағдарламалау жобасы арқылы өткіздім.",
    exp_org_date: "2024 қаңтар - тамыз",
    exp_org_role: "Бас ұйымдастырушы",
    exp_org_copy:
      "14 қаладағы екі ұлттық хакатон, 650+ қатысушы және 175 команда: логистика, ережелер, тапсырмалар, демеушілер және маркетинг.",
    exp_rl_date: "2026 - қазір",
    exp_rl_title: "Жетекшімен зерттеу, Coventry University Kazakhstan",
    exp_rl_role: "Жетекші: Санжар Құсдәулетов",
    exp_rl_copy:
      "Қауіпсіздігі маңызды басқаруға (ұшқышсыз аппаратты ұстап алу) арналған Гамильтон-Якоби-Беллман құндылық функцияларымен бірге күшейтілген оқыту: V = V_HJB + үйренілетін түзету, симуляцияда тексеріледі.",
    exp_lomo_title: "Ломоносов-2026 конференциясы",
    exp_lomo_role:
      "20 баяндаманың ішінде 3-орын, кеңістіктік талдау секциясы",
    exp_lomo_copy:
      "Хабарландырулар бойынша Астанадағы тұрғын үй бағасының регрессиялық моделі, ArcGIS-те талдау: орналасу, инфрақұрылым және экология баға факторлары ретінде.",
    exp_nu_title: "Nazarbayev University жазғы зерттеу бағдарламасы",
    exp_nu_copy:
      "Стартап гипотезаларын деректермен тексеріп, қорытынды есеп жазып, оны комиссия алдында қорғадым.",
    exp_bsc_date: "2025 - қазір",
    exp_bsc_title: "BSc Computer Science with AI",
    exp_bsc_role:
      "Coventry University Kazakhstan / GPA 3.75/4 / мемлекеттік грант",
    exp_nis_title: "Астана қаласындағы Назарбаев Зияткерлік мектебі",
    exp_nis_role: "IB Diploma, Math AA HL / IB 39/45",
    highlight_nec_title: "125 команданың ішінде 3-орын",
    highlight_nec_copy:
      "SAT және IELTS дайындығына жаттығу тесттерін жасайтын AI өнімі.",
    wins_all: "барлық 20+ нәтиже",
    read_post: "оқу",
    blog_all: "барлық жазбалар",
    contact_title: "Сөйлесейік.",
    link_live: "Сайтты ашу",
    chip_live: "жұмыс істейді",
    chip_hook: "глобал пернетақта хугы",
    chip_hex: "1 км тор",
    chip_corr: "корреляция",
  },
};

// Language-independent parts of each detail window: the terminal command and links.
const modalMeta = {
  achievements: { command: "$ open /records/competitions.log" },
  organizing: { command: "$ open /records/organizing.log" },
  stack: { command: "$ open /records/stack.index" },
  "project-shiftray": {
    command: "$ open /projects/shiftray.app",
    links: [
      { label: "link_repo", href: "https://github.com/sprinterz5/shiftray" },
      {
        label: "link_download",
        href: "https://github.com/sprinterz5/shiftray/releases/latest",
      },
    ],
  },
  "project-primeteens": {
    command: "$ open /projects/primeteens.platform",
    links: [{ label: "link_repo", href: "https://github.com/sprinterz5/prime-teens" }],
  },
  "project-autism": {
    command: "$ open /projects/childinfo.app",
    links: [{ label: "link_poster", href: "notes-and-builds.pdf" }],
  },
  "project-elibra": {
    command: "$ open /projects/library.platform",
    links: [
      { label: "link_live", href: "https://library.coventry.edu.kz/" },
      { label: "link_repo", href: "https://github.com/sprinterz5/library-qr" },
    ],
  },
  "project-roomly": {
    command: "$ open /projects/roomly.app",
    links: [{ label: "link_repo", href: "https://github.com/sprinterz5/roomly" }],
  },
  "project-bloody": {
    command: "$ open /projects/bloody_w95.protocol",
    links: [
      { label: "link_repo", href: "https://github.com/sprinterz5/bloody-w95-linux" },
    ],
  },
  "project-debounce": {
    command: "$ open /projects/keyboard_ghost_filter.sys",
    links: [
      { label: "link_repo", href: "https://github.com/sprinterz5/keyboard-ghost-filter" },
    ],
  },
  "project-research": { command: "$ open /projects/astana_housing.research" },
  "project-rag": { command: "$ open /projects/rag_automation.stack" },
};

const modalContent = {
  en: {
    achievements: {
      kicker: "Competition archive",
      title: "20+ hackathons and competitions",
      intro: "Wins, podiums and the runs that shaped how I build under pressure.",
      groups: [
        {
          title: "Wins and podiums",
          items: [
            { title: "BiCAP Hackathon", meta: "1st place out of 200 teams", copy: "Text-to-SQL, SQL-to-text, and AI-assisted audit for SMBs." },
            { title: "NIS Valley", meta: "1st place out of 13 teams", copy: "Fast product framing and delivery in a short sprint." },
            { title: "DEM Championship", meta: "2nd place out of 34 teams", copy: "Marketing campaign strategy for CITIX." },
            { title: "National Economic Challenge", meta: "3rd place out of 125 teams", copy: "AI test generation product for SAT and IELTS prep." },
            { title: "InsureTechHackathon", meta: "3rd place out of 150 teams", copy: "AI assistant concept around usability and accessibility." },
            { title: "Lomonosov-2026", meta: "3rd place, scientific conference", copy: "Research on spatial factors of housing prices in Astana." },
          ],
        },
        {
          title: "Selected runs",
          items: [
            { title: "AmanatTech", meta: "Top 20 out of 400 teams", copy: "Platform concept for helping people with drug addiction." },
            { title: "IT HUB Battle", meta: "Finalist, top 10 out of 42", copy: "Reached the final stage in a tight evaluation field." },
            { title: "Decentrathon 2.0-5.0", meta: "4 overall participations", copy: "Telegram mini apps, AI assistants, screening systems, PyTorch." },
            { title: "HackNU 2025 and 2026", meta: "2 overall participations", copy: "The 2026 run focused on the Kazakhstan Temir Zholy case." },
          ],
        },
      ],
    },
    organizing: {
      kicker: "Organizer archive",
      title: "650+ participants across 2 hackathons",
      intro: "I organized both events, not just helped: structure, partners, prizes and operations.",
      groups: [
        {
          title: "Hackathons I organized",
          items: [
            { title: "EcoHackathon", meta: "Organizer", copy: "Led planning, coordination, participant operations, and a prize package that included 600K tenge plus MobyDev courses worth roughly another 1 million tenge." },
            { title: "Bright Future Hackathon", meta: "Organizer", copy: "Owned structure, delivery, and execution, including a QuickStarter course prize pool worth 1.6 million tenge." },
          ],
        },
        {
          title: "Scale and logistics",
          items: [
            { title: "Reach", meta: "650+ participants total", copy: "Combined attendance across both hackathons." },
            { title: "Geography", meta: "14 cities", copy: "Participants came from across the country, not one campus." },
            { title: "Partners", meta: "5 sponsors", copy: "Sponsor coordination was part of the organizing work." },
            { title: "Responsibility scope", meta: "Documents / negotiations / design / marketing / ops", copy: "Handled the full stack of organizing work: documents, partner negotiations, posters, marketing assets, forms, regulations, and operational structure." },
          ],
        },
      ],
    },
    stack: {
      kicker: "Stack overview",
      title: "Tech stack and methods",
      intro: "Grouped by what I actually use it for.",
      groups: [
        {
          title: "Coding and backend",
          items: [
            { title: "Core tools", meta: "Python / FastAPI / Django / aiogram / SQL", copy: "Main layer for bots, automation, systems, and data products." },
            { title: "Frontend layer", meta: "JavaScript / TypeScript / Next.js / Qt / Telegram", copy: "Used for web platforms, admin panels and desktop apps." },
            { title: "Infrastructure", meta: "Linux / Docker / nginx / systemd / PostgreSQL / Prisma", copy: "Running and packaging what I build, from a VPS to Fedora and Arch packages." },
          ],
        },
        {
          title: "AI and data systems",
          items: [
            { title: "Applied AI", meta: "RAG / prompt design / text-to-SQL / speech-to-text", copy: "Focused on usefulness, not novelty for novelty's sake." },
            { title: "Automation", meta: "Playwright / RPA / integrations / screening logic", copy: "Useful when institutions need repeatable workflows." },
            { title: "Model work", meta: "PyTorch / prototyping", copy: "Used in selected hackathons and compact experiments." },
          ],
        },
        {
          title: "Geography and design",
          items: [
            { title: "Spatial analysis", meta: "ArcMap / ArcGIS / urban data / GIS", copy: "Connects research with location-based reasoning." },
            { title: "Design and communication", meta: "Figma / pitching / visual communication / SMM", copy: "Helps package technical work into something readable." },
          ],
        },
      ],
    },
    "project-shiftray": {
      kicker: "Project file",
      title: "Shiftray",
      intro: "I run Fedora on an ASUS TUF A15, and on Linux the laptop's power, fan and GPU controls are spread across command-line tools. Shiftray puts them into one tray app, in the style of G-Helper on Windows.",
      groups: [
        {
          title: "What it does",
          items: [
            { title: "Performance", meta: "Silent / Balanced / Turbo / fan curves / power limits", copy: "Each power source remembers its own mode; fan curves are calibrated to real RPM." },
            { title: "GPU", meta: "Eco / Standard / Ultimate / Optimized", copy: "Switches through Cardwire without a logout and names the apps that keep the NVIDIA GPU awake on battery." },
            { title: "Screen, keyboard, battery", meta: "Refresh rate / Aura lighting / charge limit", copy: "60 Hz on battery and max Hz on the charger, battery history and what each mode drew." },
          ],
        },
        {
          title: "How it is built",
          items: [
            { title: "Design choice", meta: "A window for asusd, not a replacement", copy: "The app writes no hardware files itself: asusctl and Cardwire do the hardware work, so settings keep working with the app closed." },
            { title: "Transparency", meta: "Every system change listed and undoable", copy: "Before any password prompt it says what it will change and why, and a System changes view has an Undo button for each change." },
            { title: "Shipping", meta: "AppImage / Fedora COPR / Arch / 7 languages", copy: "One-click updates that verify GitHub's SHA-256, a test suite, and a translation is one JSON file." },
          ],
        },
      ],
    },
    "project-primeteens": {
      kicker: "Project file",
      title: "PrimeTeens mentor bot and platform",
      intro: "PrimeTeens runs a summer intensive for grades 7-11 in Astana. Mentors needed to track every student without spending evenings on paperwork, so I built the bot and the platform behind it.",
      groups: [
        {
          title: "Mentor bot",
          items: [
            { title: "Onboarding", meta: "Phone number whitelist", copy: "A mentor shares a phone number and is connected to their group and student list automatically." },
            { title: "After each lesson", meta: "3-4 minute survey by exception", copy: "Asks only about the students the mentor marked: who stood out, who struggled, who was absent, plus two in a rotating spotlight. Voice answers are transcribed with faster-whisper." },
            { title: "End of course", meta: "Notes sorted per student", copy: "Exports every note by section with dates (HTML, Excel, JSON), so a person can write each student's characteristic in minutes." },
          ],
        },
        {
          title: "Platform and infrastructure",
          items: [
            { title: "Web platform", meta: "Next.js / Prisma / PostgreSQL", copy: "Online workbooks with autosave and a live mentor view, homework review, and a student calendar with .ics." },
            { title: "Bot stack", meta: "aiogram / asyncpg / APScheduler", copy: "Shares one PostgreSQL database with the site; the bots send one-time login links." },
            { title: "Deployment", meta: "Docker / nginx / systemd / backups", copy: "Ran on a VPS with backups and quiet monitoring during the course." },
          ],
        },
      ],
    },
    "project-autism": {
      kicker: "Project file",
      title: "Autism Spectrum (ChildInfo)",
      intro: "An early-diagnosis support app built with Anisa Spectrum, now in real clinical use.",
      groups: [
        {
          title: "Problem and solution",
          items: [
            { title: "Problem", meta: "Early autism screening access", copy: "Families and clinicians needed a structured, accessible way to support early diagnosis." },
            { title: "Solution", meta: "UI/UX + data layer", copy: "Designed the interface and built the PostgreSQL-backed data layer behind it." },
          ],
        },
        {
          title: "Deployment",
          items: [
            { title: "Status", meta: "Live in a local hospital", copy: "Deployed and postered for clinical use, not just a prototype." },
            { title: "Role", meta: "UI/UX design + backend data", copy: "Owned both the interface work and the database structure supporting it." },
          ],
        },
      ],
    },
    "project-elibra": {
      "kicker": "Project file",
      "title": "Coventry Kazakhstan library platform",
      "intro": "The university library's website, which I built and which runs today at library.coventry.edu.kz. It started as a fix for the queue at the issue desk and grew into the library's main site.",
      "groups": [
        {
          "title": "Self-service issuance",
          "items": [
            {
              "title": "Problem",
              "meta": "Manual issuance in eLibra",
              "copy": "Students waited for a librarian to issue every book by hand, and eLibra has no API."
            },
            {
              "title": "Solution",
              "meta": "QR / barcode + Playwright RPA",
              "copy": "A student scans the book and their reader barcode; Playwright drives the eLibra interface the way a librarian would. A low-cost alternative to RFID gates."
            }
          ]
        },
        {
          "title": "AI Librarian",
          "items": [
            {
              "title": "Retrieval",
              "meta": "Pinecone + Ollama embeddings",
              "copy": "The library catalog, rules from PDFs and site pages are indexed; each question pulls the closest pieces as context."
            },
            {
              "title": "Live catalog",
              "meta": "eLibra search",
              "copy": "Book questions also search eLibra directly, so the answer shows copies that are really on the shelf."
            },
            {
              "title": "Answer",
              "meta": "llama3.2 via Ollama, RU and EN",
              "copy": "Runs on a local model with a short history of the conversation and suggestions while typing."
            }
          ]
        },
        {
          "title": "Rest of the site",
          "items": [
            {
              "title": "Events",
              "meta": "Registration on the site",
              "copy": "Workshops with registration and attendee lists, replacing Microsoft Forms."
            },
            {
              "title": "Admin",
              "meta": "Returns, readers, stats",
              "copy": "Pages for librarians to moderate returns, find readers and see statistics."
            },
            {
              "title": "Stack",
              "meta": "FastAPI / SQLite / Docker / nginx",
              "copy": "Deployed for the university and in daily use."
            }
          ]
        }
      ]
    },
    "project-roomly": {
      kicker: "Project file",
      title: "Roomly",
      intro: "A room booking system for student clubs, where permissions and coordination mattered as much as the UI.",
      groups: [
        {
          title: "Product shape",
          items: [
            { title: "Use case", meta: "Campus room reservations", copy: "Clear booking for clubs, students and staff instead of chats and spreadsheets." },
            { title: "Logic", meta: "Roles / approvals / calendar management", copy: "More than a form: requests go through approval, and the calendar shows what is free." },
          ],
        },
        {
          title: "Build",
          items: [
            { title: "Onboarding", meta: "Telegram Mini App", copy: "Opens inside Telegram, so there is nothing to install or register." },
            { title: "Stack", meta: "FastAPI / SQLAlchemy / PostgreSQL", copy: "A relational schema for clubs, rooms and bookings." },
          ],
        },
      ],
    },
    "project-bloody": {
      kicker: "Project file",
      title: "Bloody W95 mouse on Linux",
      intro: "A4Tech ships the Bloody W95 Max configuration software only for Windows. I captured its USB traffic and decoded enough of the protocol to control the mouse from Linux.",
      groups: [
        {
          title: "What works",
          items: [
            { title: "Lighting", meta: "Per zone and per LED", copy: "Colours for each zone, single LEDs and a rainbow along the bottom ring." },
            { title: "DPI", meta: "Per slot, 100-5000", copy: "Live DPI changes without the vendor software." },
          ],
        },
        {
          title: "How",
          items: [
            { title: "Method", meta: "USB capture under Wine + hidraw", copy: "Recorded what the Windows tool sends, then replayed and varied the packets from Python through hidraw feature reports, with no extra dependencies." },
            { title: "Safety", meta: "Dangerous opcodes documented", copy: "The vendor channel can also write SPI flash and jump to the bootloader, so the protocol notes list the commands not to send." },
          ],
        },
      ],
    },
    "project-debounce": {
      "kicker": "Project file",
      "title": "Tea-damaged keyboard -> ghost-key filter",
      "intro": "A friend spilled tea on his keyboard. Instead of buying a new one, I measured how it fails and filtered the faults out in software.",
      "groups": [
        {
          "title": "Diagnosis",
          "items": [
            {
              "title": "Logger",
              "meta": "Bursts of scan codes",
              "copy": "A passive global hook groups events that arrive together from one physical press and saves them to JSONL."
            },
            {
              "title": "Finding",
              "meta": "A shorted matrix",
              "copy": "Number keys always come first in a burst with a fixed ghost (1 -> z, 2 -> x ...). Letter pairs like a/z come in a fixed order whichever key was pressed."
            }
          ]
        },
        {
          "title": "Filter",
          "items": [
            {
              "title": "Number row",
              "meta": "Drop the ghost",
              "copy": "The real key always leads, so the ghost that follows within its time window is swallowed."
            },
            {
              "title": "Letter pairs",
              "meta": "Genuinely ambiguous",
              "copy": "The signal cannot tell a from z, so a plain press types the home-row key and Caps Lock + key types the bottom-row one."
            },
            {
              "title": "Dead end",
              "meta": "Right Ctrl",
              "copy": "Tried first as the switch, but the matrix cannot register Ctrl together with keys in that column at all. A hardware limit, so Caps Lock it is."
            },
            {
              "title": "Safety",
              "meta": "Ctrl+Alt+Esc",
              "copy": "An emergency exit returns the keyboard to normal; injected keys run on a separate thread so the hook never catches its own events."
            }
          ]
        }
      ]
    },
    "project-research": {
      "kicker": "Research file",
      "title": "Spatial Factors of Housing Prices in Astana",
      "intro": "A team study for the Lomonosov-2026 conference: which location factors actually move apartment prices in Astana, and where renting out pays best.",
      "groups": [
        {
          "title": "Data",
          "items": [
            {
              "title": "Listings",
              "meta": "Krisha.kz",
              "copy": "Price, area, rooms, year of construction and coordinates of apartments."
            },
            {
              "title": "City layers",
              "meta": "OpenStreetMap / 2GIS / Yandex Maps / MVD geoportal",
              "copy": "Schools, kindergartens, pharmacies, shops, malls, universities, LRT stations, rush-hour travel time to the centre, crime and air pollution."
            },
            {
              "title": "Grid",
              "meta": "1 km hexagons in ArcGIS",
              "copy": "Every factor and the average adjusted price mapped onto the same cells."
            }
          ]
        },
        {
          "title": "Findings",
          "items": [
            {
              "title": "Moderate effect",
              "meta": "Centre -0.59 / LRT -0.54 / universities -0.49",
              "copy": "Only 3 of 12 factors matter much for purchase prices; malls and pharmacies have a weak effect."
            },
            {
              "title": "Rent vs. purchase",
              "meta": "Rent reacts, prices mostly don't",
              "copy": "Rental prices follow location far more than purchase prices do."
            },
            {
              "title": "Result",
              "meta": "3rd place of 20 reports",
              "copy": "Geo-ecology and spatial analysis section; districts with the best rental margin mapped (Zhagalau, south-west of EXPO, the Turan embankment)."
            }
          ]
        }
      ]
    },
    "project-rag": {
      kicker: "Project file",
      title: "RAG and automation workflows",
      intro: "Applied AI work sitting between backend engineering and operational tooling.",
      groups: [
        {
          title: "Work",
          items: [
            { title: "Library chatbot", meta: "RAG / Ollama / n8n", copy: "An AI chatbot on the university library website that answers from the library's own materials." },
            { title: "Direction", meta: "RAG / integrations / internal tooling", copy: "AI-assisted flows for retrieval and structured access to institutional data." },
            { title: "Practical value", meta: "Operational support", copy: "Built for real use cases, not only presentation demos." },
          ],
        },
      ],
    },
  },
  ru: {
    achievements: {
      kicker: "Архив соревнований",
      title: "20+ хакатонов и соревнований",
      intro: "Победы, призовые места и выступления, которые научили меня делать продукт под давлением.",
      groups: [
        {
          title: "Победы и призовые места",
          items: [
            { title: "BiCAP Hackathon", meta: "1-е место из 200 команд", copy: "Text-to-SQL, SQL-to-text и AI-аудит для малого и среднего бизнеса." },
            { title: "NIS Valley", meta: "1-е место из 13 команд", copy: "Быстрая постановка продукта и сдача за короткий спринт." },
            { title: "DEM Championship", meta: "2-е место из 34 команд", copy: "Стратегия маркетинговой кампании для CITIX." },
            { title: "National Economic Challenge", meta: "3-е место из 125 команд", copy: "AI-генерация тестов для подготовки к SAT и IELTS." },
            { title: "InsureTechHackathon", meta: "3-е место из 150 команд", copy: "Концепция AI-ассистента с упором на удобство и доступность." },
            { title: "Ломоносов-2026", meta: "3-е место, научная конференция", copy: "Исследование пространственных факторов цен на жильё в Астане." },
          ],
        },
        {
          title: "Другие выступления",
          items: [
            { title: "AmanatTech", meta: "Топ-20 из 400 команд", copy: "Концепция платформы помощи людям с наркозависимостью." },
            { title: "IT HUB Battle", meta: "Финалист, топ-10 из 42", copy: "Дошли до финала в плотной конкуренции." },
            { title: "Decentrathon 2.0-5.0", meta: "4 участия", copy: "Telegram mini apps, AI-ассистенты, системы скрининга, PyTorch." },
            { title: "HackNU 2025 и 2026", meta: "2 участия", copy: "В 2026 году -- кейс Қазақстан Темір Жолы." },
          ],
        },
      ],
    },
    organizing: {
      kicker: "Организаторский архив",
      title: "650+ участников на 2 хакатонах",
      intro: "Я организовал оба события, а не просто помогал: структура, партнёры, призы и операционка.",
      groups: [
        {
          title: "Хакатоны, которые я организовал",
          items: [
            { title: "EcoHackathon", meta: "Организатор", copy: "Планирование, координация, работа с участниками и призовой фонд: 600 тыс. тенге и курсы MobyDev ещё примерно на 1 млн тенге." },
            { title: "Bright Future Hackathon", meta: "Организатор", copy: "Отвечал за структуру и проведение, включая призовой фонд из курсов QuickStarter на 1,6 млн тенге." },
          ],
        },
        {
          title: "Масштаб и логистика",
          items: [
            { title: "Охват", meta: "650+ участников всего", copy: "Суммарно на обоих хакатонах." },
            { title: "География", meta: "14 городов", copy: "Участники со всей страны, а не с одного кампуса." },
            { title: "Партнёры", meta: "5 спонсоров", copy: "Работа со спонсорами была частью организации." },
            { title: "Зона ответственности", meta: "Документы / переговоры / дизайн / маркетинг / операционка", copy: "Вся организаторская работа: документы, переговоры с партнёрами, постеры, маркетинг, формы, положение и операционная структура." },
          ],
        },
      ],
    },
    stack: {
      kicker: "Стек",
      title: "Технологии и методы",
      intro: "Сгруппировано по тому, для чего я это реально использую.",
      groups: [
        {
          title: "Код и бэкенд",
          items: [
            { title: "Основное", meta: "Python / FastAPI / Django / aiogram / SQL", copy: "Боты, автоматизация, системы и продукты на данных." },
            { title: "Интерфейсы", meta: "JavaScript / TypeScript / Next.js / Qt / Telegram", copy: "Веб-платформы, админки и десктопные приложения." },
            { title: "Инфраструктура", meta: "Linux / Docker / nginx / systemd / PostgreSQL / Prisma", copy: "Запуск и упаковка того, что я делаю: от VPS до пакетов для Fedora и Arch." },
          ],
        },
        {
          title: "AI и данные",
          items: [
            { title: "Прикладной AI", meta: "RAG / промпты / text-to-SQL / распознавание речи", copy: "Ради пользы, а не новизны ради новизны." },
            { title: "Автоматизация", meta: "Playwright / RPA / интеграции / скрининг", copy: "Когда учреждению нужны повторяемые процессы." },
            { title: "Модели", meta: "PyTorch / прототипы", copy: "На отдельных хакатонах и в небольших экспериментах." },
          ],
        },
        {
          title: "География и дизайн",
          items: [
            { title: "Пространственный анализ", meta: "ArcMap / ArcGIS / городские данные / ГИС", copy: "Связывает исследования с анализом по местоположению." },
            { title: "Дизайн и коммуникация", meta: "Figma / питчинг / визуал / SMM", copy: "Помогает упаковать техническую работу в понятный вид." },
          ],
        },
      ],
    },
    "project-shiftray": {
      kicker: "Проект",
      title: "Shiftray",
      intro: "У меня Fedora на ASUS TUF A15, а на Linux управление питанием, вентиляторами и видеокартой ноутбука разбросано по консольным утилитам. Shiftray собирает всё это в одно приложение в трее, в стиле G-Helper на Windows.",
      groups: [
        {
          title: "Что умеет",
          items: [
            { title: "Производительность", meta: "Silent / Balanced / Turbo / кривые вентиляторов / лимиты мощности", copy: "Для батареи и зарядки запоминается свой режим; кривые вентиляторов откалиброваны по реальным оборотам." },
            { title: "Видеокарта", meta: "Eco / Standard / Ultimate / Optimized", copy: "Переключение через Cardwire без выхода из сессии; показывает, какие приложения не дают NVIDIA уснуть на батарее." },
            { title: "Экран, клавиатура, батарея", meta: "Частота экрана / подсветка Aura / лимит заряда", copy: "60 Гц на батарее и максимум на зарядке, история батареи и сколько потреблял каждый режим." },
          ],
        },
        {
          title: "Как устроено",
          items: [
            { title: "Подход", meta: "Окно для asusd, а не замена", copy: "Само приложение не пишет в железо: всю работу делают asusctl и Cardwire, поэтому настройки работают и с закрытым приложением." },
            { title: "Прозрачность", meta: "Каждое изменение в системе видно и отменяемо", copy: "Перед запросом пароля приложение пишет, что и зачем изменит, а в окне изменений системы у каждого есть кнопка отмены." },
            { title: "Выпуск", meta: "AppImage / Fedora COPR / Arch / 7 языков", copy: "Обновление в один клик с проверкой SHA-256 от GitHub, тесты, а перевод -- это один JSON-файл." },
          ],
        },
      ],
    },
    "project-primeteens": {
      kicker: "Проект",
      title: "Бот и платформа для менторов PrimeTeens",
      intro: "PrimeTeens проводит летний интенсив для 7-11 классов в Астане. Менторам нужно было следить за каждым учеником, не тратя вечера на бумажки, поэтому я сделал бота и платформу.",
      groups: [
        {
          title: "Бот для менторов",
          items: [
            { title: "Регистрация", meta: "Белый список номеров", copy: "Ментор делится номером телефона и автоматически подключается к своей группе и списку учеников." },
            { title: "После каждого занятия", meta: "Опрос на 3-4 минуты по исключениям", copy: "Спрашивает только про отмеченных учеников: кто отличился, у кого не шло, кого не было, плюс двое под «прожектором» по ротации. Голосовые ответы расшифровываются через faster-whisper." },
            { title: "В конце курса", meta: "Заметки по каждому ученику", copy: "Выгружает все заметки по разделам с датами (HTML, Excel, JSON), чтобы характеристику на ученика можно было написать за несколько минут." },
          ],
        },
        {
          title: "Платформа и инфраструктура",
          items: [
            { title: "Веб-платформа", meta: "Next.js / Prisma / PostgreSQL", copy: "Онлайн-тетради с автосохранением и живым просмотром для ментора, проверка домашки и календарь ученика с .ics." },
            { title: "Стек бота", meta: "aiogram / asyncpg / APScheduler", copy: "Одна база PostgreSQL с сайтом; вход на сайт по одноразовой ссылке из бота." },
            { title: "Развёртывание", meta: "Docker / nginx / systemd / бэкапы", copy: "Работала на VPS с бэкапами и тихим мониторингом на время курса." },
          ],
        },
      ],
    },
    "project-autism": {
      kicker: "Проект",
      title: "Autism Spectrum (ChildInfo)",
      intro: "Приложение для поддержки ранней диагностики, сделанное с Anisa Spectrum и реально используемое в клинике.",
      groups: [
        {
          title: "Проблема и решение",
          items: [
            { title: "Проблема", meta: "Доступ к раннему скринингу аутизма", copy: "Семьям и врачам нужен был понятный и доступный способ поддержать раннюю диагностику." },
            { title: "Решение", meta: "UI/UX + слой данных", copy: "Спроектировал интерфейс и сделал слой данных на PostgreSQL." },
          ],
        },
        {
          title: "Внедрение",
          items: [
            { title: "Статус", meta: "Работает в местной больнице", copy: "Внедрено, постер висит в больнице -- это не просто прототип." },
            { title: "Роль", meta: "UI/UX + данные", copy: "Отвечал и за интерфейс, и за структуру базы данных." },
          ],
        },
      ],
    },
    "project-elibra": {
      "kicker": "Проект",
      "title": "Платформа библиотеки Coventry Kazakhstan",
      "intro": "Сайт университетской библиотеки, который я сделал и который сейчас работает на library.coventry.edu.kz. Начинался как решение очереди на выдачу и вырос в основной сайт библиотеки.",
      "groups": [
        {
          "title": "Самостоятельная выдача",
          "items": [
            {
              "title": "Проблема",
              "meta": "Ручная выдача в eLibra",
              "copy": "Студенты ждали, пока библиотекарь вручную выдаст каждую книгу, а у eLibra нет API."
            },
            {
              "title": "Решение",
              "meta": "QR / штрихкод + Playwright RPA",
              "copy": "Студент сканирует книгу и свой читательский штрихкод, Playwright управляет интерфейсом eLibra так же, как библиотекарь. Дешёвая альтернатива RFID-воротам."
            }
          ]
        },
        {
          "title": "AI-библиотекарь",
          "items": [
            {
              "title": "Поиск",
              "meta": "Pinecone + эмбеддинги Ollama",
              "copy": "Каталог, правила из PDF и страницы сайта проиндексированы; к каждому вопросу подтягиваются ближайшие куски как контекст."
            },
            {
              "title": "Живой каталог",
              "meta": "Поиск по eLibra",
              "copy": "Вопросы о книгах ищутся и прямо в eLibra, поэтому в ответе экземпляры, которые реально стоят на полке."
            },
            {
              "title": "Ответ",
              "meta": "llama3.2 через Ollama, RU и EN",
              "copy": "Локальная модель, короткая история диалога и подсказки при наборе."
            }
          ]
        },
        {
          "title": "Остальной сайт",
          "items": [
            {
              "title": "События",
              "meta": "Регистрация на сайте",
              "copy": "Воркшопы с регистрацией и списками участников вместо Microsoft Forms."
            },
            {
              "title": "Админка",
              "meta": "Возвраты, читатели, статистика",
              "copy": "Страницы для библиотекарей: модерация возвратов, поиск читателей, статистика."
            },
            {
              "title": "Стек",
              "meta": "FastAPI / SQLite / Docker / nginx",
              "copy": "Развёрнуто в университете и используется каждый день."
            }
          ]
        }
      ]
    },
    "project-roomly": {
      kicker: "Проект",
      title: "Roomly",
      intro: "Бронирование аудиторий для студенческих клубов, где права и согласование важны не меньше интерфейса.",
      groups: [
        {
          title: "Продукт",
          items: [
            { title: "Задача", meta: "Бронирование аудиторий в кампусе", copy: "Понятное бронирование для клубов, студентов и сотрудников вместо чатов и таблиц." },
            { title: "Логика", meta: "Роли / согласование / календарь", copy: "Не просто форма: заявки проходят согласование, а календарь показывает, что свободно." },
          ],
        },
        {
          title: "Реализация",
          items: [
            { title: "Вход", meta: "Telegram Mini App", copy: "Открывается прямо в Telegram, ничего не нужно устанавливать и регистрировать." },
            { title: "Стек", meta: "FastAPI / SQLAlchemy / PostgreSQL", copy: "Реляционная схема для клубов, аудиторий и броней." },
          ],
        },
      ],
    },
    "project-bloody": {
      kicker: "Проект",
      title: "Мышь Bloody W95 на Linux",
      intro: "A4Tech выпускает программу настройки Bloody W95 Max только под Windows. Я записал её USB-трафик и разобрал протокол настолько, чтобы управлять мышью из Linux.",
      groups: [
        {
          title: "Что работает",
          items: [
            { title: "Подсветка", meta: "По зонам и по отдельным светодиодам", copy: "Цвет каждой зоны, отдельные светодиоды и радуга по нижнему кольцу." },
            { title: "DPI", meta: "По слотам, 100-5000", copy: "Смена DPI на лету без фирменной программы." },
          ],
        },
        {
          title: "Как",
          items: [
            { title: "Метод", meta: "Запись USB под Wine + hidraw", copy: "Записал, что отправляет программа для Windows, потом повторял и менял пакеты из Python через feature reports hidraw, без лишних зависимостей." },
            { title: "Безопасность", meta: "Опасные команды задокументированы", copy: "Через тот же канал можно писать во флеш-память и уйти в загрузчик, поэтому в заметках по протоколу перечислено, что отправлять нельзя." },
          ],
        },
      ],
    },
    "project-debounce": {
      "kicker": "Проект",
      "title": "Залитая чаем клавиатура -> фильтр призрачных нажатий",
      "intro": "Друг пролил чай на клавиатуру. Вместо новой клавиатуры я измерил, как именно она сбоит, и отфильтровал сбои программно.",
      "groups": [
        {
          "title": "Диагностика",
          "items": [
            {
              "title": "Логгер",
              "meta": "Пачки сканкодов",
              "copy": "Пассивный глобальный хук группирует события, пришедшие вместе от одного физического нажатия, и пишет их в JSONL."
            },
            {
              "title": "Вывод",
              "meta": "Замкнутая матрица",
              "copy": "Цифры всегда идут первыми в пачке с постоянным призраком (1 -> z, 2 -> x ...). Буквенные пары вроде a/z приходят в одном и том же порядке, какую бы клавишу ни нажали."
            }
          ]
        },
        {
          "title": "Фильтр",
          "items": [
            {
              "title": "Цифровой ряд",
              "meta": "Глушить призрака",
              "copy": "Настоящая клавиша всегда первая, поэтому призрак в своём окне времени проглатывается."
            },
            {
              "title": "Буквенные пары",
              "meta": "По-настоящему неразличимы",
              "copy": "По сигналу a от z не отличить, поэтому обычное нажатие печатает клавишу домашнего ряда, а Caps Lock + клавиша — нижнего."
            },
            {
              "title": "Тупик",
              "meta": "Правый Ctrl",
              "copy": "Сначала пробовал его как переключатель, но матрица вообще не регистрирует Ctrl вместе с клавишами этого столбца. Это ограничение железа, поэтому Caps Lock."
            },
            {
              "title": "Безопасность",
              "meta": "Ctrl+Alt+Esc",
              "copy": "Аварийный выход возвращает клавиатуру в норму; допечатка идёт в отдельном потоке, чтобы хук не ловил свои же события."
            }
          ]
        }
      ]
    },
    "project-research": {
      "kicker": "Исследование",
      "title": "Пространственные факторы цен на жильё в Астане",
      "intro": "Командное исследование для конференции Ломоносов-2026: какие факторы местоположения реально двигают цены на квартиры в Астане и где сдавать выгоднее всего.",
      "groups": [
        {
          "title": "Данные",
          "items": [
            {
              "title": "Объявления",
              "meta": "Krisha.kz",
              "copy": "Цена, площадь, комнаты, год постройки и координаты квартир."
            },
            {
              "title": "Слои города",
              "meta": "OpenStreetMap / 2ГИС / Яндекс Карты / геопортал МВД",
              "copy": "Школы, детсады, аптеки, магазины, ТРЦ, университеты, станции ЛРТ, время до центра в час пик, преступность и загрязнение воздуха."
            },
            {
              "title": "Сетка",
              "meta": "Шестиугольники 1 км в ArcGIS",
              "copy": "Все факторы и средняя приведённая цена нанесены на одни и те же ячейки."
            }
          ]
        },
        {
          "title": "Результаты",
          "items": [
            {
              "title": "Умеренное влияние",
              "meta": "Центр -0,59 / ЛРТ -0,54 / университеты -0,49",
              "copy": "Из 12 факторов на цену покупки заметно влияют только 3; у ТРЦ и аптек влияние слабое."
            },
            {
              "title": "Аренда и покупка",
              "meta": "Аренда реагирует, цены почти нет",
              "copy": "Цены аренды следуют за местоположением намного сильнее, чем цены покупки."
            },
            {
              "title": "Итог",
              "meta": "3-е место из 20 докладов",
              "copy": "Секция геоэкологии и пространственного анализа; на карте выделены районы с максимальной маржой аренды (Жагалау, юго-запад от ЭКСПО, набережная у ул. Туран)."
            }
          ]
        }
      ]
    },
    "project-rag": {
      kicker: "Проект",
      title: "RAG и автоматизация",
      intro: "Прикладной AI на стыке бэкенда и операционных инструментов.",
      groups: [
        {
          title: "Работа",
          items: [
            { title: "Чат-бот библиотеки", meta: "RAG / Ollama / n8n", copy: "AI-чат-бот на сайте университетской библиотеки, который отвечает по материалам самой библиотеки." },
            { title: "Направление", meta: "RAG / интеграции / внутренние инструменты", copy: "AI-процессы для поиска и структурированного доступа к данным учреждения." },
            { title: "Практическая польза", meta: "Поддержка работы учреждения", copy: "Для реальных задач, а не только для презентаций." },
          ],
        },
      ],
    },
  },
  kz: {
    achievements: {
      kicker: "Жарыстар мұрағаты",
      title: "20+ хакатон мен жарыс",
      intro: "Жеңістер, жүлделі орындар және қысым жағдайында өнім жасауды үйреткен жарыстар.",
      groups: [
        {
          title: "Жеңістер мен жүлделі орындар",
          items: [
            { title: "BiCAP Hackathon", meta: "200 команданың ішінде 1-орын", copy: "Шағын және орта бизнеске арналған text-to-SQL, SQL-to-text және AI аудит." },
            { title: "NIS Valley", meta: "13 команданың ішінде 1-орын", copy: "Қысқа спринтте өнімді тез құрастырып, тапсыру." },
            { title: "DEM Championship", meta: "34 команданың ішінде 2-орын", copy: "CITIX үшін маркетингтік науқан стратегиясы." },
            { title: "National Economic Challenge", meta: "125 команданың ішінде 3-орын", copy: "SAT және IELTS дайындығына арналған AI тест генерациясы." },
            { title: "InsureTechHackathon", meta: "150 команданың ішінде 3-орын", copy: "Ыңғайлылық пен қолжетімділікке бағытталған AI көмекші идеясы." },
            { title: "Ломоносов-2026", meta: "3-орын, ғылыми конференция", copy: "Астанадағы тұрғын үй бағасының кеңістіктік факторлары туралы зерттеу." },
          ],
        },
        {
          title: "Басқа жарыстар",
          items: [
            { title: "AmanatTech", meta: "400 команданың ішінде үздік 20", copy: "Нашақорлыққа тәуелді адамдарға көмек платформасының идеясы." },
            { title: "IT HUB Battle", meta: "Финалист, 42 команданың ішінде үздік 10", copy: "Тығыз бәсекеде финалға жеттік." },
            { title: "Decentrathon 2.0-5.0", meta: "4 рет қатысу", copy: "Telegram mini apps, AI көмекшілері, іріктеу жүйелері, PyTorch." },
            { title: "HackNU 2025 және 2026", meta: "2 рет қатысу", copy: "2026 жылы -- Қазақстан Темір Жолы кейсі." },
          ],
        },
      ],
    },
    organizing: {
      kicker: "Ұйымдастыру мұрағаты",
      title: "2 хакатонда 650+ қатысушы",
      intro: "Екі іс-шараны да жай көмектесіп қана қоймай, өзім ұйымдастырдым: құрылымы, серіктестері, жүлделері және жұмыс барысы.",
      groups: [
        {
          title: "Мен ұйымдастырған хакатондар",
          items: [
            { title: "EcoHackathon", meta: "Ұйымдастырушы", copy: "Жоспарлау, үйлестіру, қатысушылармен жұмыс және жүлде қоры: 600 мың теңге және тағы шамамен 1 млн теңгелік MobyDev курстары." },
            { title: "Bright Future Hackathon", meta: "Ұйымдастырушы", copy: "Құрылымы мен өткізілуіне жауап бердім, оның ішінде 1,6 млн теңгелік QuickStarter курстарынан тұратын жүлде қоры." },
          ],
        },
        {
          title: "Ауқым және логистика",
          items: [
            { title: "Қамту", meta: "Барлығы 650+ қатысушы", copy: "Екі хакатонда жиынтығы." },
            { title: "География", meta: "14 қала", copy: "Қатысушылар бір кампустан емес, бүкіл елден келді." },
            { title: "Серіктестер", meta: "5 демеуші", copy: "Демеушілермен жұмыс ұйымдастырудың бір бөлігі болды." },
            { title: "Жауапкершілік аймағы", meta: "Құжаттар / келіссөздер / дизайн / маркетинг / жұмыс барысы", copy: "Ұйымдастырудың барлық жұмысы: құжаттар, серіктестермен келіссөздер, постерлер, маркетинг, формалар, ереже және жұмыс құрылымы." },
          ],
        },
      ],
    },
    stack: {
      kicker: "Стек",
      title: "Технологиялар мен әдістер",
      intro: "Нақты не үшін қолданатыныма қарай топтастырылған.",
      groups: [
        {
          title: "Код және backend",
          items: [
            { title: "Негізгі", meta: "Python / FastAPI / Django / aiogram / SQL", copy: "Боттар, автоматтандыру, жүйелер және деректерге негізделген өнімдер." },
            { title: "Интерфейстер", meta: "JavaScript / TypeScript / Next.js / Qt / Telegram", copy: "Веб-платформалар, әкімші панельдері және десктоп қосымшалары." },
            { title: "Инфрақұрылым", meta: "Linux / Docker / nginx / systemd / PostgreSQL / Prisma", copy: "Жасағанымды іске қосу және буып-түю: VPS-тен Fedora мен Arch пакеттеріне дейін." },
          ],
        },
        {
          title: "AI және деректер",
          items: [
            { title: "Қолданбалы AI", meta: "RAG / промпттар / text-to-SQL / сөзді тану", copy: "Жаңалық үшін емес, пайда үшін." },
            { title: "Автоматтандыру", meta: "Playwright / RPA / интеграциялар / іріктеу", copy: "Мекемеге қайталанатын процестер керек болғанда." },
            { title: "Модельдер", meta: "PyTorch / прототиптер", copy: "Кейбір хакатондарда және шағын тәжірибелерде." },
          ],
        },
        {
          title: "География және дизайн",
          items: [
            { title: "Кеңістіктік талдау", meta: "ArcMap / ArcGIS / қала деректері / ГАЖ", copy: "Зерттеуді орналасуға негізделген талдаумен байланыстырады." },
            { title: "Дизайн және коммуникация", meta: "Figma / питчинг / визуал / SMM", copy: "Техникалық жұмысты түсінікті түрде ұсынуға көмектеседі." },
          ],
        },
      ],
    },
    "project-shiftray": {
      kicker: "Жоба",
      title: "Shiftray",
      intro: "Менің ASUS TUF A15 ноутбугымда Fedora орнатылған, ал Linux-та ноутбуктың қуатын, желдеткіштерін және бейнекартасын басқару әртүрлі консоль құралдарына шашыраңқы. Shiftray мұның бәрін Windows-тағы G-Helper стиліндегі бір трей қосымшасына жинайды.",
      groups: [
        {
          title: "Не істей алады",
          items: [
            { title: "Өнімділік", meta: "Silent / Balanced / Turbo / желдеткіш қисықтары / қуат шектеулері", copy: "Батарея мен зарядтағыш үшін әрқайсысының өз режимі сақталады; желдеткіш қисықтары нақты айналым бойынша калибрленген." },
            { title: "Бейнекарта", meta: "Eco / Standard / Ultimate / Optimized", copy: "Cardwire арқылы сессиядан шықпай ауысады; батареяда NVIDIA-ны ұйықтатпай тұрған қосымшаларды көрсетеді." },
            { title: "Экран, пернетақта, батарея", meta: "Экран жиілігі / Aura жарығы / заряд шегі", copy: "Батареяда 60 Гц, зарядта ең жоғары жиілік, батарея тарихы және әр режимнің қанша тұтынғаны." },
          ],
        },
        {
          title: "Қалай жасалған",
          items: [
            { title: "Тәсіл", meta: "asusd-тің орнына емес, оған арналған терезе", copy: "Қосымшаның өзі құрылғыға ештеңе жазбайды: бар жұмысты asusctl мен Cardwire атқарады, сондықтан баптаулар қосымша жабық тұрса да жұмыс істейді." },
            { title: "Ашықтық", meta: "Жүйедегі әр өзгеріс көрінеді және қайтарылады", copy: "Құпиясөз сұрамас бұрын қосымша нені және не үшін өзгертетінін айтады, ал жүйе өзгерістері терезесінде әрқайсысының қайтару батырмасы бар." },
            { title: "Шығару", meta: "AppImage / Fedora COPR / Arch / 7 тіл", copy: "GitHub-тың SHA-256 тексерісімен бір басу арқылы жаңарту, тесттер, ал аударма -- бір JSON файлы." },
          ],
        },
      ],
    },
    "project-primeteens": {
      kicker: "Жоба",
      title: "PrimeTeens менторларына арналған бот пен платформа",
      intro: "PrimeTeens Астанада 7-11 сыныптарға арналған жазғы интенсив өткізеді. Менторларға кешкі уақытын қағазбастылыққа жұмсамай, әр оқушыны бақылау керек болды, сондықтан мен бот пен платформа жасадым.",
      groups: [
        {
          title: "Менторларға арналған бот",
          items: [
            { title: "Тіркелу", meta: "Нөмірлердің ақ тізімі", copy: "Ментор телефон нөмірін бөліседі де, өз тобына және оқушылар тізіміне автоматты түрде қосылады." },
            { title: "Әр сабақтан кейін", meta: "Ерекшеліктер бойынша 3-4 минуттық сауалнама", copy: "Тек белгіленген оқушылар туралы сұрайды: кім ерекшеленді, кімге қиын болды, кім келмеді, сонымен қатар кезекпен «назардағы» екі оқушы. Дауыстық жауаптар faster-whisper арқылы мәтінге айналады." },
            { title: "Курс соңында", meta: "Әр оқушы бойынша жазбалар", copy: "Барлық жазбаларды бөлімдер мен күндер бойынша шығарады (HTML, Excel, JSON), сондықтан әр оқушыға мінездеме бірнеше минутта жазылады." },
          ],
        },
        {
          title: "Платформа және инфрақұрылым",
          items: [
            { title: "Веб-платформа", meta: "Next.js / Prisma / PostgreSQL", copy: "Автосақтауы бар онлайн дәптерлер және ментордың тікелей бақылауы, үй тапсырмасын тексеру және .ics күнтізбесі." },
            { title: "Бот стегі", meta: "aiogram / asyncpg / APScheduler", copy: "Сайтпен бір PostgreSQL дерекқоры; сайтқа боттан келген бір реттік сілтеме арқылы кіреді." },
            { title: "Орналастыру", meta: "Docker / nginx / systemd / сақтық көшірмелер", copy: "Курс кезінде сақтық көшірмелері мен мониторингі бар VPS-те жұмыс істеді." },
          ],
        },
      ],
    },
    "project-autism": {
      kicker: "Жоба",
      title: "Autism Spectrum (ChildInfo)",
      intro: "Anisa Spectrum-пен бірге жасалған, ерте диагностикаға көмектесетін және клиникада нақты қолданылатын қосымша.",
      groups: [
        {
          title: "Мәселе және шешім",
          items: [
            { title: "Мәселе", meta: "Аутизмді ерте скринингтеуге қолжетімділік", copy: "Отбасылар мен дәрігерлерге ерте диагностикаға көмектесетін түсінікті әрі қолжетімді жол керек болды." },
            { title: "Шешім", meta: "UI/UX + деректер қабаты", copy: "Интерфейсті жобалап, PostgreSQL негізіндегі деректер қабатын жасадым." },
          ],
        },
        {
          title: "Енгізу",
          items: [
            { title: "Күйі", meta: "Жергілікті ауруханада жұмыс істейді", copy: "Енгізілген, постері ауруханада ілулі -- бұл жай прототип емес." },
            { title: "Рөлім", meta: "UI/UX + деректер", copy: "Интерфейске де, дерекқор құрылымына да жауап бердім." },
          ],
        },
      ],
    },
    "project-elibra": {
      "kicker": "Жоба",
      "title": "Coventry Kazakhstan кітапханасының платформасы",
      "intro": "Мен жасаған және қазір library.coventry.edu.kz мекенжайында жұмыс істеп тұрған университет кітапханасының сайты. Кітап беру кезегін шешуден басталып, кітапхананың негізгі сайтына айналды.",
      "groups": [
        {
          "title": "Кітапты өз бетінше алу",
          "items": [
            {
              "title": "Мәселе",
              "meta": "eLibra-да қолмен беру",
              "copy": "Студенттер кітапханашы әр кітапты қолмен бергенше күтетін, ал eLibra-да API жоқ."
            },
            {
              "title": "Шешім",
              "meta": "QR / штрихкод + Playwright RPA",
              "copy": "Студент кітапты және өзінің оқырман штрихкодын сканерлейді, Playwright eLibra интерфейсін кітапханашы сияқты басқарады. RFID қақпаларына арзан балама."
            }
          ]
        },
        {
          "title": "AI кітапханашы",
          "items": [
            {
              "title": "Іздеу",
              "meta": "Pinecone + Ollama эмбеддингтері",
              "copy": "Каталог, PDF-тегі ережелер және сайт беттері индекстелген; әр сұраққа ең жақын бөліктер контекст ретінде алынады."
            },
            {
              "title": "Тірі каталог",
              "meta": "eLibra бойынша іздеу",
              "copy": "Кітап туралы сұрақтар тікелей eLibra-дан да ізделеді, сондықтан жауапта сөреде нақты тұрған даналар көрсетіледі."
            },
            {
              "title": "Жауап",
              "meta": "Ollama арқылы llama3.2, RU және EN",
              "copy": "Жергілікті модель, диалогтың қысқа тарихы және теру кезіндегі ұсыныстар."
            }
          ]
        },
        {
          "title": "Сайттың қалған бөлігі",
          "items": [
            {
              "title": "Іс-шаралар",
              "meta": "Сайтта тіркелу",
              "copy": "Microsoft Forms-тың орнына тіркелуі және қатысушылар тізімі бар воркшоптар."
            },
            {
              "title": "Әкімші беттері",
              "meta": "Қайтарулар, оқырмандар, статистика",
              "copy": "Кітапханашыларға арналған беттер: қайтаруларды тексеру, оқырмандарды іздеу, статистика."
            },
            {
              "title": "Стек",
              "meta": "FastAPI / SQLite / Docker / nginx",
              "copy": "Университетте орнатылған және күн сайын қолданылады."
            }
          ]
        }
      ]
    },
    "project-roomly": {
      kicker: "Жоба",
      title: "Roomly",
      intro: "Студенттік клубтарға арналған аудитория брондау жүйесі, мұнда құқықтар мен келісу интерфейстен кем маңызды емес.",
      groups: [
        {
          title: "Өнім",
          items: [
            { title: "Міндет", meta: "Кампустағы аудиторияларды брондау", copy: "Чаттар мен кестелердің орнына клубтарға, студенттер мен қызметкерлерге түсінікті брондау." },
            { title: "Логика", meta: "Рөлдер / келісу / күнтізбе", copy: "Жай форма емес: өтінімдер келісуден өтеді, ал күнтізбе қай уақыттың бос екенін көрсетеді." },
          ],
        },
        {
          title: "Іске асыру",
          items: [
            { title: "Кіру", meta: "Telegram Mini App", copy: "Тікелей Telegram ішінде ашылады, ештеңе орнатудың және тіркелудің қажеті жоқ." },
            { title: "Стек", meta: "FastAPI / SQLAlchemy / PostgreSQL", copy: "Клубтар, аудиториялар және брондар үшін реляциялық схема." },
          ],
        },
      ],
    },
    "project-bloody": {
      kicker: "Жоба",
      title: "Linux-тағы Bloody W95 тінтуірі",
      intro: "A4Tech Bloody W95 Max баптау бағдарламасын тек Windows үшін шығарады. Мен оның USB трафигін жазып алып, тінтуірді Linux-тан басқаруға жететіндей протоколын талдадым.",
      groups: [
        {
          title: "Не жұмыс істейді",
          items: [
            { title: "Жарық", meta: "Аймақтар және жеке жарық диодтары бойынша", copy: "Әр аймақтың түсі, жеке жарық диодтары және төменгі сақина бойымен кемпірқосақ." },
            { title: "DPI", meta: "Слоттар бойынша, 100-5000", copy: "Фирмалық бағдарламасыз DPI-ды бірден өзгерту." },
          ],
        },
        {
          title: "Қалай",
          items: [
            { title: "Әдіс", meta: "Wine астында USB жазу + hidraw", copy: "Windows бағдарламасы не жіберетінін жазып алдым, содан кейін пакеттерді Python-нан hidraw feature reports арқылы қайталап, өзгерттім, артық тәуелділіксіз." },
            { title: "Қауіпсіздік", meta: "Қауіпті командалар құжатталған", copy: "Сол арна арқылы флеш-жадқа жазуға және жүктеушіге өтуге болады, сондықтан протокол жазбаларында не жіберуге болмайтыны көрсетілген." },
          ],
        },
      ],
    },
    "project-debounce": {
      "kicker": "Жоба",
      "title": "Шай төгілген пернетақта -> жалған басуларды сүзгі",
      "intro": "Досым пернетақтасына шай төгіп алды. Жаңасын алудың орнына мен оның қалай істен шығатынын өлшеп, ақауларды бағдарлама арқылы сүздім.",
      "groups": [
        {
          "title": "Диагностика",
          "items": [
            {
              "title": "Логгер",
              "meta": "Сканкод топтары",
              "copy": "Пассивті глобал хук бір физикалық басудан бірге келген оқиғаларды топтап, JSONL-ге жазады."
            },
            {
              "title": "Қорытынды",
              "meta": "Тұйықталған матрица",
              "copy": "Сандар әрқашан топта бірінші келеді және тұрақты жалған сигнал береді (1 -> z, 2 -> x ...). a/z сияқты әріп жұптары қай перне басылса да бір ретпен келеді."
            }
          ]
        },
        {
          "title": "Сүзгі",
          "items": [
            {
              "title": "Сандар қатары",
              "meta": "Жалған сигналды өшіру",
              "copy": "Нақты перне әрқашан бірінші, сондықтан оның уақыт терезесіндегі жалған сигнал жұтылады."
            },
            {
              "title": "Әріп жұптары",
              "meta": "Шынымен ажыратылмайды",
              "copy": "Сигнал бойынша a мен z-ті ажырату мүмкін емес, сондықтан жай басу негізгі қатардағы пернені, ал Caps Lock + перне төменгі қатардағысын басады."
            },
            {
              "title": "Тұйық",
              "meta": "Оң жақ Ctrl",
              "copy": "Алдымен ауыстырғыш ретінде соны қолданып көрдім, бірақ матрица Ctrl-ды сол бағандағы пернелермен бірге мүлде тіркемейді. Бұл құрылғының шектеуі, сондықтан Caps Lock."
            },
            {
              "title": "Қауіпсіздік",
              "meta": "Ctrl+Alt+Esc",
              "copy": "Апаттық шығу пернетақтаны қалыпты күйге қайтарады; хук өз оқиғаларын ұстап алмауы үшін таңба бөлек ағында енгізіледі."
            }
          ]
        }
      ]
    },
    "project-research": {
      "kicker": "Зерттеу",
      "title": "Астанадағы тұрғын үй бағасының кеңістіктік факторлары",
      "intro": "Ломоносов-2026 конференциясына арналған командалық зерттеу: Астанада пәтер бағасына орналасудың қандай факторлары шынымен әсер етеді және жалға беру қай жерде тиімді.",
      "groups": [
        {
          "title": "Деректер",
          "items": [
            {
              "title": "Хабарландырулар",
              "meta": "Krisha.kz",
              "copy": "Пәтерлердің бағасы, ауданы, бөлме саны, салынған жылы және координаттары."
            },
            {
              "title": "Қала қабаттары",
              "meta": "OpenStreetMap / 2ГИС / Яндекс Карталар / ІІМ геопорталы",
              "copy": "Мектептер, балабақшалар, дәріханалар, дүкендер, сауда орталықтары, университеттер, ЛРТ бекеттері, қарбалас уақытта орталыққа дейінгі жол, қылмыс және ауаның ластануы."
            },
            {
              "title": "Тор",
              "meta": "ArcGIS-те 1 км алтыбұрыштар",
              "copy": "Барлық факторлар мен орташа келтірілген баға бір ұяшықтарға түсірілген."
            }
          ]
        },
        {
          "title": "Нәтижелер",
          "items": [
            {
              "title": "Орташа әсер",
              "meta": "Орталық -0,59 / ЛРТ -0,54 / университеттер -0,49",
              "copy": "12 фактордың ішінде сатып алу бағасына тек 3-еуі айтарлықтай әсер етеді; сауда орталықтары мен дәріханалардың әсері әлсіз."
            },
            {
              "title": "Жалға алу және сатып алу",
              "meta": "Жалдау әсер етеді, баға дерлік жоқ",
              "copy": "Жалдау бағасы орналасуға сатып алу бағасынан әлдеқайда күшті тәуелді."
            },
            {
              "title": "Нәтиже",
              "meta": "20 баяндаманың ішінде 3-орын",
              "copy": "Геоэкология және кеңістіктік талдау секциясы; картада жалдау маржасы ең жоғары аудандар белгіленген (Жағалау, EXPO-ның оңтүстік-батысы, Тұран көшесі маңындағы жағалау)."
            }
          ]
        }
      ]
    },
    "project-rag": {
      kicker: "Жоба",
      title: "RAG және автоматтандыру",
      intro: "Backend пен жұмыс құралдарының түйіскен жеріндегі қолданбалы AI.",
      groups: [
        {
          title: "Жұмыс",
          items: [
            { title: "Кітапхана чат-боты", meta: "RAG / Ollama / n8n", copy: "Университет кітапханасының сайтындағы, кітапхананың өз материалдары бойынша жауап беретін AI чат-бот." },
            { title: "Бағыт", meta: "RAG / интеграциялар / ішкі құралдар", copy: "Мекеме деректерін іздеуге және құрылымды түрде алуға арналған AI процестері." },
            { title: "Практикалық пайда", meta: "Мекеме жұмысын қолдау", copy: "Тек таныстырылымдар үшін емес, нақты міндеттер үшін." },
          ],
        },
      ],
    },
  },
};

const buttons = document.querySelectorAll(".lang-btn");
const translatable = document.querySelectorAll("[data-i18n]");
const pageFrame = document.querySelector(".pixel-frame");
const modalShell = document.querySelector(".modal-shell");
const modalPanel = document.querySelector(".modal-panel");
const modalTriggers = document.querySelectorAll(".modal-trigger");
const modalCommand = document.getElementById("modal-command");
const modalKicker = document.getElementById("modal-kicker");
const modalTitle = document.getElementById("modal-title");
const modalIntro = document.getElementById("modal-intro");
const modalBody = document.getElementById("modal-body");
const modalLinks = document.getElementById("modal-links");
const modalCloseButtons = document.querySelectorAll("[data-close-modal]");
const modalPrimaryClose = document.querySelector(".modal-close");

function readSavedLanguage() {
  try {
    return window.localStorage.getItem("portfolio-lang");
  } catch {
    return null;
  }
}

let currentLanguage = readSavedLanguage() || "en";
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

function t(key) {
  return translations[currentLanguage][key] ?? translations.en[key] ?? "";
}

function renderModalContent(modalKey) {
  const entry =
    modalContent[currentLanguage][modalKey] ?? modalContent.en[modalKey];
  const meta = modalMeta[modalKey] ?? {};

  if (!entry) {
    return;
  }

  modalCommand.textContent = meta.command ?? "";
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

  if (meta.links?.length) {
    modalLinks.hidden = false;
    modalLinks.innerHTML = `
      <p class="modal-group-title">${escapeHtml(t("modal_links"))}</p>
      <div class="contact-row">
        ${meta.links
          .map(
            (link) =>
              `<a class="contact-link" href="${escapeHtml(link.href)}" target="_blank" rel="noopener">${escapeHtml(t(link.label))}</a>`,
          )
          .join("")}
      </div>
    `;
  } else {
    modalLinks.hidden = true;
    modalLinks.innerHTML = "";
  }
}

function openModal(modalKey, trigger) {
  activeModalKey = modalKey;
  lastFocusedTrigger = trigger;
  renderModalContent(modalKey);
  modalShell.hidden = false;
  pageFrame.inert = true;
  document.body.classList.add("modal-open");
  modalPanel.scrollTop = 0;
  modalPrimaryClose?.focus();
}

function closeModal() {
  modalShell.hidden = true;
  pageFrame.inert = false;
  document.body.classList.remove("modal-open");
  activeModalKey = null;

  if (lastFocusedTrigger) {
    lastFocusedTrigger.focus();
  }
}

// Keep Tab inside the open dialog.
function trapFocus(event) {
  const focusable = [
    ...modalPanel.querySelectorAll("button, a[href]"),
  ].filter((node) => !node.closest("[hidden]"));

  if (!focusable.length) {
    return;
  }

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function applyLanguage(lang) {
  currentLanguage = translations[lang] ? lang : "en";

  translatable.forEach((node) => {
    const text = t(node.dataset.i18n);

    if (text) {
      node.textContent = text;
    }
  });

  document.documentElement.lang = currentLanguage === "kz" ? "kk" : currentLanguage;

  buttons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === currentLanguage);
  });

  if (modalShell && activeModalKey) {
    renderModalContent(activeModalKey);
  }

  try {
    window.localStorage.setItem("portfolio-lang", currentLanguage);
  } catch {
    // Storage can be blocked; the page still works without remembering.
  }
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
  if (!modalShell || modalShell.hidden) {
    return;
  }

  if (event.key === "Escape") {
    closeModal();
  } else if (event.key === "Tab") {
    trapFocus(event);
  }
});

// Light / dark theme: dark until the visitor picks light.
const themeButton = document.querySelector(".theme-btn");

function currentTheme() {
  return document.documentElement.dataset.theme || "dark";
}

themeButton?.addEventListener("click", () => {
  const next = currentTheme() === "light" ? "dark" : "light";
  document.documentElement.dataset.theme = next;

  try {
    window.localStorage.setItem("portfolio-theme", next);
  } catch {
    // Storage can be blocked; the choice then lasts until reload.
  }
});

// Sections fade in once as they scroll into view.
const revealed = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px" },
  );
  revealed.forEach((node) => observer.observe(node));
} else {
  revealed.forEach((node) => node.classList.add("is-visible"));
}

applyLanguage(currentLanguage);
