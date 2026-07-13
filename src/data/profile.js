/* ============================================================
   PROFILE DATA — single source of truth for the whole site.
   Edit anything here; the UI updates everywhere automatically.
   Image paths point to /public/images — see ASSETS.md for the
   exact mapping from your original photo files.
   ============================================================ */

export const profile = {
  name: 'Akshay Paghadar',
  fullName: 'Paghadar Akshaykumar Narsinhbhai',
  roles: [
    'Electronics Engineer',
    'Embedded Systems Developer',
    'Robotics & AUV Builder',
    'IoT Systems Designer',
    'PCB Designer',
  ],
  tagline:
    'Final-year Electronics Engineering student designing embedded, IoT and robotic systems from concept to field deployment — national award winner, two-time patent holder, and builder of an AUV that placed 6th at SAUVC 2025, Singapore.',
  photo: '/images/profile-hero.jpg', // your photo (background removed — see scripts/remove_bg.py)
  location: 'Mendarda, Junagadh, Gujarat, India',
  email: 'akshaypaghadar7@gmail.com',
  phone: '+91 6356406390',
  resumePdf: '/docs/Akshay_Paghadar_Resume.pdf',
  socials: {
    linkedin: 'https://www.linkedin.com/in/akshaypaghadar/',
    github: 'https://github.com/akshaypaghadar-commits',
    email: 'mailto:akshaypaghadar7@gmail.com',
  },
  githubUsername: 'akshaypaghadar-commits',
  // Formspree endpoint — create a free form at https://formspree.io and paste its ID here
  formspreeEndpoint: 'https://formspree.io/f/xdaqozrv',
};

export const stats = [
  { value: 10, suffix: ' L', prefix: '₹', label: 'Cash prize — Robofest 4.0' },
  { value: 4, suffix: '', label: 'Patents (2 granted · 2 filed)' },
  { value: 2, suffix: '', label: 'Research papers published' },
  { value: 6, suffix: 'th', label: 'Place — SAUVC 2025, Singapore' },
];

export const about = {
  summary: [
    'I am a final-year B.Tech Electronics Engineering student at Gujarat Technological University with hands-on experience designing embedded, IoT and robotic systems from concept to field deployment — hardware that solves real problems in agriculture, safety and marine robotics.',
    'As team lead, I designed and built a cost-effective autonomous underwater vehicle with LoRa wireless communication, real-time surveillance and 6-DOF maneuverability. It won the national Robofest 4.0 competition as runner-up (₹10 lakh prize), placed 6th at SAUVC 2025 in Singapore against 20+ international teams, and earned a design patent and a utility patent in India. My final-semester industrial project — a low-cost smart three-phase motor automation system — won the BVM Project Expo and became a published research paper.',
    'I am skilled in PCB design, firmware development and LoRa communication, with additional grounding in RTL-to-GDSII and digital SoC design using open-source EDA tools. Currently seeking embedded systems, firmware or robotics engineering roles — or a Master\u2019s program — in Europe.',
  ],
};

export const education = {
  degree: 'B.Tech in Electronics Engineering',
  institute: 'Birla Vishvakarma Mahavidyalaya, Vallabh Vidyanagar',
  university: 'Gujarat Technological University',
  period: '2022 – 2026',
  cgpa: '7.68',
};

export const skills = [
  {
    category: 'Embedded & IoT',
    items: [
      { name: 'Embedded & IoT System Design', level: 92 },
      { name: 'Microcontrollers (Arduino / ESP32)', level: 90 },
      { name: 'GSM / LoRa Communication', level: 85 },
      { name: 'Sensor Integration', level: 88 },
    ],
    badges: ['ESP32', 'Arduino', 'SIM800L', 'LoRa', 'RFID', 'LCD/HMI', 'Relays & Contactors'],
  },
  {
    category: 'Hardware & PCB',
    items: [
      { name: 'PCB Design', level: 88 },
      { name: 'Circuit Design & Simulation', level: 86 },
      { name: 'Motor Control (3-phase)', level: 84 },
      { name: 'Power Electronics Basics', level: 78 },
    ],
    badges: ['KiCad / EasyEDA', 'Proteus', 'Fritzing', 'Soldering & Bring-up', 'Multimeter/Scope'],
  },
  {
    category: 'Robotics',
    items: [
      { name: 'Underwater Robotics (AUV/ROV)', level: 90 },
      { name: 'LiDAR Navigation & Obstacle Avoidance', level: 80 },
      { name: '6-DOF Thruster Control', level: 82 },
      { name: 'Real-time Surveillance Systems', level: 80 },
    ],
    badges: ['Thrusters & ESCs', 'IMU', 'LiDAR', 'Waterproofing', 'Telemetry'],
  },
  {
    category: 'Programming & Tools',
    items: [
      { name: 'C / C++', level: 85 },
      { name: 'Python', level: 65 },
      { name: 'RTL-to-GDSII (Open Source Flow)', level: 70 },
      { name: 'Digital SoC Design & Planning', level: 68 },
    ],
    badges: ['C', 'C++', 'Python', 'OpenLane', 'Git'],
  },
  {
    category: 'Professional',
    items: [
      { name: 'Project Management', level: 88 },
      { name: 'Leadership', level: 90 },
      { name: 'Teamwork', level: 92 },
      { name: 'Effective Communication', level: 86 },
    ],
    badges: ['Team Lead', 'NCC Cadet', 'Competition Experience', 'Gujarati · Hindi · English'],
  },
];

/* ---------------- PROJECTS ---------------- */
export const projects = [
  {
    id: 'smart-agri-starter',
    title: 'Smart Agri Three-Phase Starter Automation',
    subtitle: 'GSM-based low-cost 3-phase motor control for agriculture & industry',
    category: 'IoT',
    featured: true,
    image: '/images/expo-hardware.jpg',
    gallery: ['/images/expo-hardware.jpg', '/images/expo-stage.jpg'],
    description:
      'A low-cost, GSM-based automation and real-time monitoring system for three-phase induction motors used in agriculture and industry. Farmers can start/stop pumps remotely via a missed call or SMS, with automatic protection against phase loss, dry-run and over-current faults. Winner of BVM Project Expo 2026 (First Rank, Major Project) and published as a research paper at ICAIIE-2026.',
    hardware: ['ESP32', 'SIM800L GSM', 'Current transformer', 'L&T DOL starter', 'Contactor & relays', '16x2 LCD'],
    software: ['Embedded C/C++', 'AT commands', 'Fault-detection logic', 'Calibration routine'],
    highlights: [
      'Remote ON/OFF via GSM — no smartphone or internet needed in the field',
      'Real-time monitoring, fault detection and auto cut-off',
      'Built as Final Semester Industrial Defined Project at Instruments Universal',
    ],
    links: { paper: 'https://ijsrst.com', github: '' },
  },
  {
    id: 'bvm-arihant-auv',
    title: 'BVM Arihant — Autonomous Underwater Vehicle',
    subtitle: 'Award-winning AUV with 6-DOF control and LoRa telemetry',
    category: 'Robotics',
    featured: true,
    image: '/images/robofest-auv.jpg',
    gallery: ['/images/robofest-auv.jpg', '/images/sauvc-auv-pool.jpg', '/images/sauvc-team.jpg', '/images/robofest-trophy.jpg'],
    description:
      'A cost-effective autonomous underwater robot featuring LoRa-based wireless communication, real-time surveillance and 6-DOF maneuverability. Runner-up (2nd Prize, ₹7.5 L team award) in the Submarine & Underwater Robot category at Robofest-Gujarat 4.0, and represented India at SAUVC 2025 in Singapore, finishing 6th globally. The design earned a granted Indian design patent (447676-001) and a published utility patent.',
    hardware: ['Underwater thrusters (TD1.2)', 'Acrylic pressure hull', 'IMU & depth sensor', 'LoRa module', 'Camera module', 'Custom power distribution'],
    software: ['Embedded C++', 'PID depth/heading control', 'Telemetry protocol', 'Mission autonomy logic'],
    highlights: [
      '2nd Prize — Robofest-Gujarat 4.0 Grand Finale (₹7,50,000 team prize)',
      '6th place — SAUVC 2025, Singapore (global competition)',
      'Design patent granted · utility patent published',
    ],
    links: { github: '' },
  },
  {
    id: 'kiwi-bot',
    title: 'Autonomous KIWI Bot',
    subtitle: 'LiDAR-based navigation & obstacle avoidance for industry',
    category: 'Robotics',
    featured: true,
    image: '/images/project-kiwi-bot.jpg',
    gallery: ['/images/project-kiwi-bot.jpg'],
    description:
      'An autonomous KIWI-drive robot for industrial applications with LiDAR-based navigation and obstacle avoidance — three omni-wheels at 120°, custom controller board and battery pack. Published in the International Journal of Scientific Research in Science and Technology (IJSRST), Vol. 12, Issue 2.',
    hardware: ['KIWI omni-drive chassis (3× omni wheels)', 'Custom controller PCB', 'LiDAR', 'LiPo battery', 'Encoders'],
    software: ['C/C++', 'Path planning', 'Obstacle avoidance'],
    highlights: ['Published research paper with DOI', 'Omnidirectional 3-wheel kinematics'],
    links: { paper: 'https://doi.org/10.32628/IJSRST251222666', github: '' },
  },
  {
    id: 'gps-quadcopter-drone',
    title: 'GPS Quadcopter Drone',
    subtitle: 'Custom-built quadcopter with GPS module and RC control',
    category: 'Robotics',
    image: '/images/project-drone-1.jpg',
    gallery: ['/images/project-drone-1.jpg', '/images/project-drone-2.jpg'],
    description:
      'A custom-assembled quadcopter drone built from the frame up — brushless motors with ESCs, a flight controller with GPS module for position hold, and a FlySky FS-iA10B receiver for 2.4 GHz RC control. Covers the full stack of multirotor building: frame assembly, power distribution, motor/prop matching, calibration and flight tuning.',
    hardware: ['Quadcopter frame', '4× BLDC motors + ESCs', 'Flight controller', 'GPS module', 'FlySky FS-iA10B receiver', 'LiPo battery'],
    software: ['Flight controller configuration', 'ESC calibration', 'PID tuning'],
    highlights: ['GPS position hold', 'Built and tuned from scratch'],
    links: { github: '' },
  },
  {
    id: 'smart-rc-car',
    title: 'Smart RC Car',
    subtitle: 'Bluetooth-controlled car with ultrasonic obstacle sensing',
    category: 'Embedded',
    image: '/images/project-rc-car.jpg',
    gallery: ['/images/project-rc-car.jpg'],
    description:
      'A smart RC car built on Arduino UNO with an L293D motor shield, HC-05 Bluetooth control, servo-mounted ultrasonic sensor for obstacle detection, and indicator lighting.',
    hardware: ['Arduino UNO', 'L293D motor shield', 'HC-05 Bluetooth', 'HC-SR04 ultrasonic', 'Servo, DC motors'],
    software: ['Embedded C', 'Serial command parsing'],
    highlights: ['Obstacle-aware driving', 'Phone app control'],
    links: { github: '' },
  },
  {
    id: 'digital-clock',
    title: 'Digital Clock without Microcontroller',
    subtitle: '24-hour clock from pure digital logic ICs',
    category: 'Electronics',
    image: '/images/project-digital-clock.jpg',
    gallery: ['/images/project-digital-clock.jpg'],
    description:
      'A 24-hour digital clock designed entirely with discrete logic — 4026 decade counters, 7411 AND gates, a 555-timer clock source and seven-segment displays. No microcontroller, no code: just digital logic design.',
    hardware: ['CD4026 counters', '7411 logic gates', 'NE555 timer', '7-segment displays'],
    software: ['Proteus simulation'],
    highlights: ['Pure hardware timekeeping', 'DLD course project'],
    links: { github: '' },
  },
  {
    id: 'smart-dustbin',
    title: 'Smart IoT-Based Dustbin',
    subtitle: 'Touch-free lid with fill-level monitoring',
    category: 'IoT',
    image: '/images/project-dustbin.jpg',
    gallery: ['/images/project-dustbin.jpg'],
    description:
      'An IoT-enabled smart dustbin prototype built with an ESP32 and SIM800L GSM module — it senses fill level, opens hands-free, and can report status remotely for smarter waste collection.',
    hardware: ['ESP32', 'SIM800L GSM', 'Ultrasonic sensor', 'Custom perfboard'],
    software: ['Embedded C', 'IoT dashboard'],
    highlights: ['Hands-free operation', 'Fill-level telemetry'],
    links: { github: '' },
  },
  {
    id: 'water-level-controller',
    title: 'Fully Automatic Water Level Controller',
    subtitle: 'Pump automation with dry-run protection',
    category: 'Embedded',
    image: '/images/project-water-level.jpg',
    gallery: ['/images/project-water-level.jpg'],
    description:
      'An automatic water-level controller that switches a pump based on tank level probes, preventing overflow and dry-run — an everyday-reliability build using Arduino Nano and relay control.',
    hardware: ['Arduino Nano', 'Level probes', 'Relay module', '12V diaphragm pump'],
    software: ['Embedded C'],
    highlights: ['Overflow & dry-run protection', 'Set-and-forget automation'],
    links: { github: '' },
  },
  {
    id: 'phase-wire-detector',
    title: 'Contactless Phase Wire Detector',
    subtitle: 'Custom PCB for non-contact AC detection',
    category: 'Electronics',
    image: '/images/project-phase-detector.jpg',
    gallery: ['/images/project-phase-detector.jpg'],
    description:
      'A pocket-size non-contact voltage tester designed as a custom PCB — detects live AC wiring through insulation and alerts with LED and buzzer. Designed, routed and fabricated end-to-end.',
    hardware: ['Custom PCB', 'CMOS amplifier stage', 'Buzzer + LEDs', 'Probe antenna'],
    software: ['PCB CAD (EasyEDA/KiCad)'],
    highlights: ['End-to-end PCB design', 'Electrician-grade utility'],
    links: { github: '' },
  },
  {
    id: 'smart-door-lock',
    title: 'Smart Door Lock System',
    subtitle: 'RFID access control with solenoid lock',
    category: 'Embedded',
    image: '/images/project-door-lock.jpg',
    gallery: ['/images/project-door-lock.jpg'],
    description:
      'An RFID-based access-control system: authorized cards trigger a relay-driven solenoid lock, with LCD feedback, status LEDs and a buzzer for invalid attempts.',
    hardware: ['Arduino Nano', 'MFRC522 RFID', 'Solenoid lock + relay', '16x2 LCD'],
    software: ['Embedded C', 'UID whitelisting'],
    highlights: ['Physical security build', 'Full user feedback loop'],
    links: { github: '' },
  },
];

export const projectCategories = ['All', 'Robotics', 'IoT', 'Embedded', 'Electronics'];

/* ---------------- ACHIEVEMENTS ---------------- */
export const achievements = [
  {
    id: 'project-expo',
    title: 'Project Expo 2026 — Winner (First Rank)',
    org: 'Birla Vishvakarma Mahavidyalaya · SSIP',
    period: '2025 – 2026',
    icon: 'trophy',
    description:
      'Awarded First Rank for the B.Tech major project "Smart Agri Three-Phase Starter Automation for Agri and Industry" at Project Expo 2026, organized by the Industry Institute Interaction Cell and BVM Alumni Association.',
    points: [
      'Designed and developed a low-cost smart three-phase motor automation system as the Final Semester Industrial Defined Project',
      'Integrated IoT-based real-time monitoring, fault detection and remote control for agricultural and industrial use',
    ],
    images: [
      { src: '/images/expo-stage.jpg', caption: 'Receiving the Project Expo Winner award on stage' },
      { src: '/images/expo-hardware.jpg', caption: 'The smart three-phase starter automation hardware' },
      { src: '/images/expo-certificate.jpg', caption: 'Certificate of Achievement — First Rank, Major Project' },
    ],
  },
  {
    id: 'robofest',
    title: 'Robofest-Gujarat 4.0 — Runner Up (National)',
    org: 'Govt. of Gujarat · GUJCOST · Gujarat Science City',
    period: '2024 – 2025',
    icon: 'medal',
    description:
      'Second Prize at the Grand Finale of the national Robofest-Gujarat 4.0 competition in the Submarine & Underwater Robot category, with a team cash prize of ₹7,50,000. Also honoured with the Gaurav Puraskar by Charutar Vidya Mandal.',
    points: [
      'Designed a cost-effective underwater robot with LoRa-based wireless communication, real-time surveillance and 6-DOF maneuverability',
      'Secured a ₹10 Lakhs cash prize overall for the innovative underwater robotic system',
    ],
    images: [
      { src: '/images/robofest-cheque.jpg', caption: 'With the ₹7,50,000 Second Prize cheque at the Grand Finale, Gujarat Science City' },
      { src: '/images/robofest-winners.jpg', caption: 'Robofest-Gujarat 4.0 winners — TRS BVM Student Chapter' },
      { src: '/images/robofest-award-stage.jpg', caption: 'Gaurav Puraskar felicitation with the BVM Arihant team' },
      { src: '/images/robofest-auv.jpg', caption: 'BVM Arihant — the underwater robot' },
      { src: '/images/robofest-trophy.jpg', caption: 'With the Gaurav Puraskar trophy' },
      { src: '/images/robofest-certificate.jpg', caption: 'Certificate of Merit — Second Prize, Robofest-Gujarat 4.0' },
    ],
  },
  {
    id: 'sauvc',
    title: 'SAUVC 2025, Singapore — 6th Place (Global)',
    org: 'IEEE OES Singapore Chapter',
    period: '2024 – 2025',
    icon: 'globe',
    description:
      'Represented India at the Singapore Autonomous Underwater Vehicle Challenge 2025, a global underwater robotics competition, securing 6th place and showcasing innovation in AUV design.',
    points: [
      'Competed against international university teams at Singapore Polytechnic',
      'Full-stack AUV work: hull, thrusters, electronics, autonomy',
    ],
    images: [
      { src: '/images/sauvc-auv-pool.jpg', caption: 'The AUV at the SAUVC competition pool' },
      { src: '/images/sauvc-team.jpg', caption: 'Team India at SAUVC 2025, Singapore' },
      { src: '/images/sauvc-certificate.jpg', caption: 'IEEE OES Certificate of Participation — SAUVC 2025' },
    ],
  },
  {
    id: 'ncc',
    title: 'NCC — "B" Certificate, Cadet Rank',
    org: 'National Cadet Corps · 2 CTC NCC, VV Nagar',
    period: '2022 – 2024',
    icon: 'shield',
    description:
      'Accomplished the Certificate "B" examination (B grade) under the Ministry of Defence, Government of India, and earned Cadet rank in the National Cadet Corps.',
    points: ['Discipline, leadership and camp training', 'NCC Directorate: Gujarat, Ahmedabad'],
    images: [
      { src: '/images/ncc-uniform.jpg', caption: 'In NCC uniform during camp' },
      { src: '/images/ncc-certificate.jpg', caption: 'NCC Certificate "B" — Ministry of Defence' },
    ],
  },
  {
    id: 'certifications',
    title: 'Courses & Workshops',
    org: 'UC Santa Cruz (Coursera) · NDLI Club, IIT Kharagpur',
    period: '2023',
    icon: 'certificate',
    description:
      'Continuous learning through certified courses and hands-on workshops in programming and electronics design.',
    points: [
      'C for Everyone: Programming Fundamentals — UC Santa Cruz (Coursera)',
      'National Workshop on Smart Manufacturing — BVM with IITD AIA Foundation & TRS Student Chapter (Feb 2024)',
      'PCB Design workshop — NDLI Club, BVM',
      'VLSI Analog IC Design workshop — NDLI Club, BVM',
      'Applications of Linear Algebra & Fourier Series in Engineering — NDLI Club, BVM',
    ],
    images: [
      { src: '/images/cert-smart-manufacturing.jpg', caption: 'National Workshop on Smart Manufacturing — Certificate of Participation' },
      { src: '/images/cert-coursera-c.jpg', caption: 'C for Everyone — UC Santa Cruz via Coursera' },
      { src: '/images/cert-ndli-pcb.jpg', caption: 'PCB Design workshop certificate' },
      { src: '/images/cert-ndli-vlsi.jpg', caption: 'VLSI Analog IC Design workshop certificate' },
      { src: '/images/cert-ndli-linear-algebra.jpg', caption: 'Linear Algebra & Fourier Series workshop certificate' },
    ],
  },
  {
    id: 'udaan-cultural',
    title: 'Cultural — Charlie Group Performance, UDAAN 2K24',
    org: 'BVM Engineering College · Annual Cultural Festival',
    period: '2024',
    icon: 'music',
    video: 'https://youtu.be/DwFr9R5LIos',
    description:
      'Performed with the Charlie Group at UDAAN 2K24, BVM\u2019s annual cultural festival — a high-energy group stage performance in front of the whole college.',
    points: [
      'Group stage performance at the college\u2019s biggest cultural night',
      'Teamwork, choreography and confidence beyond the lab',
    ],
    images: [
      { src: '/images/udaan-charlie-group.jpg', caption: 'Charlie Group — UDAAN 2K24, BVM Engineering College' },
    ],
  },
];

/* ---------------- RESEARCH PAPERS ---------------- */
export const papers = [
  {
    id: 'paper-agri',
    title: 'Smart Agri Starter with Automation: GSM-Based Low-Cost Solution for 3-Phase Motor Control in Agriculture',
    authors: 'Deepak Vala, Akshay Paghadar',
    venue: '2nd International Conference on Academic and Industrial Innovations in Engineering (ICAIIE-2026), P P Savani University, Surat',
    date: 'January 30–31, 2026',
    doi: '',
    link: '',
    pdf: '',
    certificate: '/images/paper-agri-certificate.jpg',
    abstract:
      'Presents a GSM-based, low-cost automation and real-time monitoring solution for three-phase induction motors in agriculture — enabling remote start/stop, phase-fault protection and dry-run prevention for rural pump sets without internet connectivity.',
  },
  {
    id: 'paper-kiwi',
    title: 'Autonomous KIWI Bot for Industrial Application',
    authors: 'Kaushika D. Patel, Yuvraj Sur, Akshay Paghadar',
    venue: 'International Journal of Scientific Research in Science and Technology (IJSRST), Vol. 12, Issue 2 — Peer-reviewed, UGC Journal No. 64011, Impact Factor 8.62',
    date: 'March–April 2025',
    doi: 'https://doi.org/10.32628/IJSRST251222666',
    link: 'https://ijsrst.com/index.php/home/article/view/IJSRST251222666',
    pdf: '',
    certificate: '/images/paper-kiwi-certificate.jpg',
    abstract:
      'Describes an autonomous KIWI-drive robot with LiDAR-based navigation and obstacle avoidance designed for industrial material-handling applications, covering the omnidirectional kinematics, sensing stack and control implementation.',
  },
];

/* ---------------- PATENTS ---------------- */
export const patents = [
  {
    id: 'design-granted',
    type: 'Design Patent',
    status: 'Granted',
    number: '447676-001',
    date: '11 Feb 2025 · Issued 09 Jun 2025',
    title: 'Autonomous Underwater Vehicle',
    description:
      'Design patent granted in India (Class 12-06) for an innovative underwater robot with unique ornamental and functional features. Registered by The Patent Office, Government of India.',
    certificate: '/images/patent-design-certificate.jpg',
  },
  {
    id: 'utility-published',
    type: 'Utility Patent',
    status: 'Published',
    number: '202521018561 A',
    date: '2025',
    title: 'Underwater Robot Application for Marine Exploration',
    description:
      'Utility patent published in India for an underwater robot application enhancing marine exploration, inspection and data collection.',
    certificate: '',
  },
  {
    id: 'design-inprocess',
    type: 'Design Patent',
    status: 'In Process',
    number: '494109-001',
    date: 'Filed 2026',
    title: 'Design Registration (Application)',
    description:
      'Second design patent application currently under examination at the Indian Patent Office.',
    certificate: '',
  },
  {
    id: 'utility-inprocess',
    type: 'Utility Patent',
    status: 'In Process',
    number: '202621027302',
    date: 'Filed 2026',
    title: 'Utility Patent (Application)',
    description:
      'Second utility patent application currently under examination at the Indian Patent Office.',
    certificate: '',
  },
];

/* ---------------- EXPERIENCE ---------------- */
export const experience = [
  {
    id: 'insu',
    role: 'Industrial Intern',
    company: 'Instruments Universal — Vadodara, India',
    period: 'Dec 2025 – Apr 2026',
    description:
      'Completed a 5-month industrial internship gaining applied exposure to instrumentation and industrial electronics workflows. Engineered the Smart Three-Phase Motor Automation and Real-Time Monitoring System for agriculture and industry — from circuit design and firmware to field-ready enclosure and calibration.',
    tags: ['Instrumentation', 'Embedded C', 'GSM automation', '3-phase motor control'],
    image: '/images/internship-letter.jpg',
  },
  {
    id: 'monk9',
    role: 'VLSI Design Intern',
    company: 'Monk9 Tech Private Limited — Rajkot, India',
    period: '2024 – 2025',
    description:
      'Executed digital SoC design and planning using open-source EDA tools, covering floorplanning and design-stage verification, and implemented a complete RTL-to-GDSII physical design flow — strengthening foundations in digital IC design.',
    tags: ['RTL-to-GDSII', 'SoC design', 'Open-source EDA', 'Floorplanning'],
  },
];
