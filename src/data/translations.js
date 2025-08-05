export const translations = {
  pl: {
    // Navigation
    nav: {
      home: 'Strona główna',
      about: 'O mnie',
      experience: 'Doświadczenie',
      projects: 'Projekty',
      skills: 'Umiejętności',
      education: 'Wykształcenie',
      contact: 'Kontakt',
    },
      about: {
      title: 'About Me',
      subtitle: 'Get to know me better',
      description: 'I am a beginner programmer with experience in creating backend applications. I specialize in Java and Spring Boot, and also have skills in databases and REST API.',
      yearsExperience: '6+ months',
      experienceLabel: 'Months of experience',
    },
    hero: {
      greeting: 'Cześć, jestem',
      name: 'Szymon Trojan',
      title: 'Junior Java Developer',
      description: 'Junior Java Developer z 6-miesięcznym doświadczeniem komercyjnym w rozwoju aplikacji web oraz zarządzaniu bazami danych. Specjalizacja w technologiach Java/Spring Boot, REST API oraz pracy z bazami danych PostgreSQL i MySQL.',
      downloadCV: 'Pobierz CV',
      getToKnowMe: 'Poznaj mnie',
      contactMe: 'Skontaktuj się',
      location: 'Porąbka, Polska',
      scrollDown: 'Przewiń w dół',
    },
    // About Section
    about: {
      title: 'O mnie',
      subtitle: 'Poznaj mnie bliżej',
      description: 'Jestem początkującym programistą z doświadczeniem w tworzeniu aplikacji backendowych. Specjalizuję się w Java i Spring Boot, a także posiadam umiejętności w zakresie baz danych i REST API.',
      yearsExperience: '6+ miesięcy',
      experienceLabel: 'Miesięcy doświadczenia',
      stats: {
        projects: 'Ukończonych projektów',
        internships: 'Staże'
      },
      highlights: {
        backend: {
          title: 'Rozwój Backend',
          description: 'Java, Spring Boot, REST API'
        },
        database: {
          title: 'Zarządzanie bazami danych',
          description: 'PostgreSQL, MySQL, optymalizacja SQL'
        },
        security: {
          title: 'Bezpieczeństwo i uwierzytelnianie',
          description: 'Spring Security, JWT, autoryzacja'
        },
        testing: {
          title: 'Testowanie i narzędzia',
          description: 'JUnit, Mockito, Docker, Maven'
        }
      },
      workTogether: {
        title: 'Współpracujmy',
        description: 'Skontaktuj się ze mną, aby omówić projekt lub współpracę.',
        sendEmail: 'Wyślij e-mail',
        linkedin: 'LinkedIn'
      }
    },
    // Experience Section
    experience: {
      title: 'Doświadczenie zawodowe',
      subtitle: 'Moja ścieżka kariery',
      keyTechnologies: 'Kluczowe technologie:',
      stats: {
        monthsExperience: 'Miesięcy doświadczenia',
        internshipPositions: 'Pozycje stażowe',
        company: 'Firma (Beskid Media)'
      },
      jobs: [
        {
          title: 'Praktykant - Programista Java',
          company: 'Beskid Media Sp. z o.o.',
          location: 'Kęty',
          period: 'Maj 2025 – Lipiec 2025',
          description: [
            'Tworzenie modułów backend\'owych w Spring Boot zgodnie z architekturą REST API',
            'Projektowanie modeli danych i relacji bazy danych PostgreSQL przy użyciu JPA/Hibernate',
            'Implementacja funkcjonalności systemu CRM do zarządzania klientami',
            'Budowa systemu generowania faktur PDF z wykorzystaniem danych z bazy klientów',
            'Implementacja uwierzytelniania użytkowników przy użyciu Spring Security i JWT'
          ]
        },
        {
          title: 'Praktykant - Programista Baz Danych',
          company: 'Beskid Media Sp. z o.o.',
          location: 'Kęty',
          period: 'Sty 2025 – Mar 2025',
          description: [
            'Wsparcie starszych programistów w implementacji projektów i optymalizacji baz danych',
            'Tworzenie złożonych zapytań SQL do analizy danych i raportowania',
            'Rozwój skryptów automatyzujących w PHP i Python do utrzymania baz danych'
          ]
        },
        {
          title: 'Praktykant - Programista Baz Danych',
          company: 'Beskid Media Sp. z o.o.',
          location: 'Kęty',
          period: 'Lip 2024 – Wrz 2024',
          description: [
            'Projektowanie i modyfikacja struktur baz danych dla lepszej wydajności',
            'Wsparcie w projektach migracji danych z zapewnieniem integralności',
            'Tworzenie procedur backup\'owych i testowanie procesów przywracania danych'
          ]
        }
      ]
    },
    // Projects Section
    projects: {
      title: 'Projekty',
      subtitle: 'Moje najlepsze prace',
      viewProject: 'Zobacz projekt',
      viewCode: 'Zobacz kod',
      projectOverview: 'Przegląd projektu',
      technologiesUsed: 'Użyte technologie',
      projects: [
        {
          title: 'AI-Based Dev Toolkit',
          description: 'Aplikacja Spring Boot integrująca się z OpenAI API do wspomagania codziennych zadań programistów. 5 narzędzi AI: przegląd kodu, generowanie testów, wiadomości commit, analiza bugów, przygotowanie do rozmów.',
          tech: ['Java 21', 'Spring Boot 3', 'OpenAI API', 'Bootstrap 5', 'JUnit 5', 'Swagger', 'Docker'],
          image: '/portfolio/assets/images/screen1.png',
          github: 'https://github.com/steedware/DevToolkitAI'
        },
        {
          title: 'System Zarządzania Magazynem',
          description: 'Kompleksowy system zarządzania produktami, lokalizacjami i ruchami magazynowymi z REST API, dokumentacją Swagger/OpenAPI i eksportem raportów CSV.',
          tech: ['Java 21', 'Spring Boot', 'PostgreSQL', 'Swagger', 'Docker Compose'],
          image: '/portfolio/assets/images/screen2.png',
          github: 'https://github.com/steedware/WarehouseManager'
        },
        {
          title: 'RentACar - System Wypożyczania',
          description: 'System wypożyczania samochodów z funkcjami geolokalizacji i płatności online. Integracja z Stripe do przetwarzania płatności i OpenStreetMap do lokalizacji.',
          tech: ['Java 9+', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'PostGIS', 'Stripe'],
          image: '/portfolio/assets/images/screen3.png',
          github: 'https://github.com/steedware/RentACarV1'
        },
        {
          title: 'Komunikator w Czasie Rzeczywistym',
          description: 'Aplikacja czatu z uwierzytelnianiem JWT i komunikacją WebSocket (STOMP). Prywatne wiadomości, historia konwersacji i oznaczanie jako przeczytane.',
          tech: ['Java 21', 'Spring Boot', 'WebSocket', 'Spring Security', 'JWT', 'H2'],
          image: '/portfolio/assets/images/screen4.png',
          github: 'https://github.com/steedware/RealTimeChat'
        }
      ]
    },
    // Skills Section
    skills: {
      title: 'Umiejętności techniczne',
      subtitle: 'Mój stack technologiczny',
      overview: {
        title: 'Przegląd umiejętności',
        subtitle: 'Moja ekspertyza w różnych domenach technologicznych',
        backendTechnologies: 'Technologie Backend',
        databaseSystems: 'Systemy baz danych',
        developmentTools: 'Narzędzia deweloperskie',
        additionalSkills: 'Dodatkowe umiejętności',
        coreCompetencies: 'Kluczowe kompetencje'
      },
      categories: {
        backend: 'Backend',
        databases: 'Bazy Danych',
        tools: 'Narzędzia',
        additional: 'Dodatkowe'
      },
      skillsList: {
        backend: ['Java 9+', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'REST API', 'JWT', 'WebSocket', 'JUnit', 'Mockito'],
        databases: ['PostgreSQL', 'MySQL', 'H2', 'PostGIS', 'Optymalizacja SQL', 'Redis'],
        tools: ['Maven', 'Docker', 'Git', 'Thymeleaf', 'Bootstrap', 'Swagger', 'IntelliJ IDEA', 'Postman'],
        additional: ['PHP', 'Python', 'Integracja API', 'Generowanie PDF', 'Stripe', 'JSON', 'XML', 'Microservices']
      }
    },
    // Education Section
    education: {
      title: 'Wykształcenie',
      subtitle: 'Moja ścieżka edukacyjna',
      academicBackground: 'Edukacja',
      currentStudy: 'Obecnie realizuję studia informatyczne ze specjalizacją w inżynierii oprogramowania i systemach baz danych.',
      currentGoals: 'Obecne cele',
      goals: [
        'Ukończenie studiów informatycznych',
        'Rozwijanie ekspertyzy w Spring Boot',
        'Poznawanie technologii chmurowych (AWS)',
        'Architektura mikroserwisów'
      ],
      degrees: [
        {
          degree: 'Informatyka - Inżynier (w trakcie)',
          school: 'Małopolska Uczelnia Państwowa im. rotmistrza Witolda Pileckiego',
          location: 'Oświęcim',
          period: 'Paź 2022 – obecnie'
        },
        {
          degree: 'Wykształcenie Średnie',
          school: 'Powiatowy Zespół Szkół nr 9 im. M. Dąbrowskiej',
          location: 'Kęty',
          period: '2019 – 2022'
        }
      ],
      languages: {
        title: 'Języki',
        polish: 'Polski: Ojczysty',
        english: 'Angielski: Poziom zaawansowany',
        german: 'Niemiecki: Poziom podstawowy'
      },
      certificates: {
        title: 'Certyfikaty',
        list: [
          'Certyfikat Branżowych Symulacji Biznesowych REVAS (poziom zaawansowany) - Marzec 2025',
          'Prawo jazdy kategorii B'
        ]
      }
    },
    // Contact Section
    contact: {
      title: 'Kontakt',
      subtitle: 'Skontaktuj się ze mną',
      form: {
        name: 'Imię i nazwisko',
        email: 'Adres e-mail',
        subject: 'Temat',
        message: 'Wiadomość',
        namePlaceholder: 'Jan Kowalski',
        emailPlaceholder: 'jan@example.com',
        subjectPlaceholder: 'Zapytanie o projekt',
        messagePlaceholder: 'Opowiedz mi o swoim projekcie...',
        send: 'Wyślij wiadomość',
        sending: 'Wysyłanie...',
        success: 'Wiadomość została wysłana!',
        error: 'Wystąpił błąd. Spróbuj ponownie.',
        nameRequired: 'Imię i nazwisko jest wymagane',
        emailRequired: 'Adres e-mail jest wymagany',
        emailInvalid: 'Nieprawidłowy adres e-mail',
        subjectRequired: 'Temat jest wymagany',
        messageRequired: 'Wiadomość jest wymagana'
      },
      sendButton: 'Wyślij wiadomość', 
      sending: 'Wysyłanie...',
      successMessage: 'Wiadomość wysłana pomyślnie! Dziękuję za kontakt.',
      errorMessage: 'Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.',
      info: {
        email: 'szymon.343@wp.pl',
        phone: '+48 536 494 241',
        location: 'Porąbka, Polska',
        github: 'github.com/steedware',
        linkedin: 'linkedin.com/in/szymon-trojan'
      },
      labels: {
        phone: 'Telefon',
        location: 'Lokalizacja'
      },
      cta: {
        title: 'Współpracujmy razem!',
        description: 'Zawsze jestem zainteresowany nowymi możliwościami i ekscytującymi projektami. Skontaktuj się ze mną, jeśli chcesz omówić potencjalną współpracę.',
        sendEmail: 'Wyślij E-mail',
        linkedin: 'LinkedIn'
      },
      workTogether: {
        title: 'Współpracujmy',
        description: 'Skontaktuj się ze mną, aby omówić projekt lub współpracę.',
        sendEmail: 'Wyślij e-mail',
        linkedin: 'LinkedIn'
      }
    },
    // Footer
    footer: {
      description: 'Junior Java Developer specjalizujący się w aplikacjach Spring Boot i zarządzaniu bazami danych. Zawsze chętny do nauki i podejmowania nowych wyzwań.',
      rights: 'Wszystkie prawa zastrzeżone.',
      quickLinks: 'Szybkie linki',
      contactInfo: 'Kontakt'
    }
  },
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      education: 'Education',
      contact: 'Contact',
    },
    // Hero Section
    hero: {
      greeting: 'Hi, I am',
      name: 'Szymon Trojan',
      title: 'Junior Java Developer',
      description: 'Junior Java Developer with 6 months of hands-on experience in Spring Boot application development and database management. Specialized in backend development using Spring Framework, REST APIs, and database technologies like PostgreSQL and MySQL.',
      downloadCV: 'Download CV',
      getToKnowMe: 'Get to know me',
      contactMe: 'Contact Me',
      location: 'Porąbka, Poland',
      scrollDown: 'Scroll down',
    },
    // About Section
    about: {
      title: 'About Me',
      subtitle: 'Get to know me',
      description: 'I am a beginner programmer with experience in creating backend applications. I specialize in Java and Spring Boot, and also have skills in databases and REST APIs.',
      yearsExperience: '6+ months',
      experienceLabel: 'Months of experience',
      stats: {
        projects: 'Completed projects',
        internships: 'Internships'
      },
      highlights: {
        backend: {
          title: 'Backend Development',
          description: 'Java, Spring Boot, REST APIs'
        },
        database: {
          title: 'Database Management',
          description: 'PostgreSQL, MySQL, SQL Optimization'
        },
        security: {
          title: 'Security & Authentication',
          description: 'Spring Security, JWT, Authorization'
        },
        testing: {
          title: 'Testing & Tools',
          description: 'JUnit, Mockito, Docker, Maven'
        }
      },
      workTogether: {
        title: 'Work Together',
        description: 'Get in touch to discuss a project or collaboration.',
        sendEmail: 'Send Email',
        linkedin: 'LinkedIn'
      }
    },
    // Experience Section
    experience: {
      title: 'Work Experience',
      subtitle: 'My career path',
      keyTechnologies: 'Key Technologies:',
      stats: {
        monthsExperience: 'Months Experience',
        internshipPositions: 'Internship Positions',
        company: 'Company (Beskid Media)'
      },
      jobs: [
        {
          title: 'Intern - Java Developer',
          company: 'Beskid Media Sp. z o.o.',
          location: 'Kęty',
          period: 'May 2025 – July 2025',
          description: [
            'Creating backend modules in Spring Boot following REST API architecture',
            'Designing data models and PostgreSQL database relationships using JPA/Hibernate',
            'Implementing CRM system functionality for client management',
            'Building PDF invoice generation system using client database data',
            'Implementing user authentication using Spring Security and JWT'
          ]
        },
        {
          title: 'Intern - Database Developer',
          company: 'Beskid Media Sp. z o.o.',
          location: 'Kęty',
          period: 'Jan 2025 – Mar 2025',
          description: [
            'Supporting senior developers in project implementation and database optimization',
            'Creating complex SQL queries for data analysis and reporting',
            'Developing automation scripts in PHP and Python for database maintenance'
          ]
        },
        {
          title: 'Intern - Database Developer',
          company: 'Beskid Media Sp. z o.o.',
          location: 'Kęty',
          period: 'Jul 2024 – Sep 2024',
          description: [
            'Designing and modifying database structures for better performance',
            'Supporting data migration projects while ensuring data integrity',
            'Creating backup procedures and testing data recovery processes'
          ]
        }
      ]
    },
    // Projects Section
    projects: {
      title: 'Projects',
      subtitle: 'My best work',
      viewProject: 'View Project',
      viewCode: 'View Code',
      projectOverview: 'Project Overview',
      technologiesUsed: 'Technologies Used',
      projects: [
        {
          title: 'AI-Based Dev Toolkit',
          description: 'Spring Boot application integrating with OpenAI API to assist developers in daily tasks. 5 AI tools: code review, test generation, commit messages, bug analysis, interview preparation.',
          tech: ['Java 21', 'Spring Boot 3', 'OpenAI API', 'Bootstrap 5', 'JUnit 5', 'Swagger', 'Docker'],
          image: '/portfolio/assets/images/screen1.png',
          github: 'https://github.com/steedware/DevToolkitAI'
        },
        {
          title: 'Warehouse Management System',
          description: 'Comprehensive system for managing products, locations and warehouse movements with REST API, Swagger/OpenAPI documentation and CSV report export.',
          tech: ['Java 21', 'Spring Boot', 'PostgreSQL', 'Swagger', 'Docker Compose'],
          image: '/portfolio/assets/images/screen2.png',
          github: 'https://github.com/steedware/WarehouseManager'
        },
        {
          title: 'RentACar - Rental System',
          description: 'Car rental system with geolocation features and online payments. Integration with Stripe for payment processing and OpenStreetMap for location services.',
          tech: ['Java 9+', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'PostGIS', 'Stripe'],
          image: '/portfolio/assets/images/screen3.png',
          github: 'https://github.com/steedware/RentACarV1'
        },
        {
          title: 'Real-time Chat Application',
          description: 'Chat application with JWT authentication and WebSocket communication (STOMP). Private messages, conversation history and read receipts.',
          tech: ['Java 21', 'Spring Boot', 'WebSocket', 'Spring Security', 'JWT', 'H2'],
          image: '/portfolio/assets/images/screen4.png',
          github: 'https://github.com/steedware/RealTimeChat'
        }
      ]
    },
    // Skills Section
    skills: {
      title: 'Technical Skills',
      subtitle: 'My technology stack',
      overview: {
        title: 'Skills Overview',
        subtitle: 'My expertise across different technology domains',
        backendTechnologies: 'Backend Technologies',
        databaseSystems: 'Database Systems',
        developmentTools: 'Development Tools',
        additionalSkills: 'Additional Skills',
        coreCompetencies: 'Core Competencies'
      },
      categories: {
        backend: 'Backend',
        databases: 'Databases',
        tools: 'Tools',
        additional: 'Additional'
      },
      skillsList: {
        backend: ['Java 9+', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'REST API', 'JWT', 'WebSocket', 'JUnit', 'Mockito'],
        databases: ['PostgreSQL', 'MySQL', 'H2', 'PostGIS', 'SQL Optimization', 'Redis'],
        tools: ['Maven', 'Docker', 'Git', 'Thymeleaf', 'Bootstrap', 'Swagger', 'IntelliJ IDEA', 'Postman'],
        additional: ['PHP', 'Python', 'API Integration', 'PDF Generation', 'Stripe', 'JSON', 'XML', 'Microservices']
      }
    },
    // Education Section
    education: {
      title: 'Education',
      subtitle: 'My educational path',
      academicBackground: 'Academic Background',
      currentStudy: 'Currently pursuing degree in Computer Science with focus on software engineering and database systems.',
      currentGoals: 'Current Goals',
      goals: [
        'Completing Computer Science degree',
        'Advancing Spring Boot expertise',
        'Learning cloud technologies (AWS)',
        'Microservices architecture'
      ],
      degrees: [
        {
          degree: 'Computer Science - Engineer (in progress)',
          school: 'Małopolska State University named after Rotmistrz Witold Pilecki',
          location: 'Oświęcim',
          period: 'Oct 2022 – present'
        },
        {
          degree: 'High School Education',
          school: 'District School Complex No. 9 named after M. Dąbrowska',
          location: 'Kęty',
          period: '2019 – 2022'
        }
      ],
      languages: {
        title: 'Languages',
        polish: 'Polish: Native',
        english: 'English: Advanced level',
        german: 'German: Basic level'
      },
      certificates: {
        title: 'Certificates',
        list: [
          'REVAS Business Simulation Certificate (advanced level) - March 2025',
          'Driving license category B'
        ]
      }
    },
    // Contact Section
    contact: {
      title: 'Contact',
      subtitle: 'Get in touch with me',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        subject: 'Subject',
        message: 'Message',
        namePlaceholder: 'John Doe',
        emailPlaceholder: 'john@example.com',
        subjectPlaceholder: 'Project Inquiry',
        messagePlaceholder: 'Tell me about your project...',
        send: 'Send Message',
        sending: 'Sending...',
        success: 'Message sent successfully!',
        error: 'An error occurred. Please try again.',
        nameRequired: 'Full name is required',
        emailRequired: 'Email address is required',
        emailInvalid: 'Invalid email address',
        subjectRequired: 'Subject is required',
        messageRequired: 'Message is required'
      },
      sendButton: 'Send Message',
      sending: 'Sending...',
      successMessage: 'Message sent successfully! Thank you for reaching out.',
      errorMessage: 'An error occurred while sending the message. Please try again later.',
      info: {
        email: 'szymon.343@wp.pl',
        phone: '+48 536 494 241',
        location: 'Porąbka, Poland',
        github: 'github.com/steedware',
        linkedin: 'linkedin.com/in/szymon-trojan'
      },
      labels: {
        phone: 'Phone',
        location: 'Location'
      },
      cta: {
        title: "Let's work together!",
        description: "I'm always interested in new opportunities and exciting projects. Feel free to reach out if you'd like to discuss potential collaborations.",
        sendEmail: 'Send Email',
        linkedin: 'LinkedIn'
      },
      workTogether: {
        title: 'Work Together',
        description: 'Get in touch to discuss a project or collaboration.',
        sendEmail: 'Send Email',
        linkedin: 'LinkedIn'
      }
    },
    // Footer
    footer: {
      description: 'Junior Java Developer specializing in Spring Boot applications and database management. Always eager to learn and take on new challenges.',
      rights: 'All rights reserved.',
      quickLinks: 'Quick Links',
      contactInfo: 'Contact'
    }
  }
};
