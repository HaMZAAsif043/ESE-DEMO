export const ESE_MEDIA = "https://www.esejo.com/pub/media/wysiwyg";

export type Stat = {
  value: string;
  label: string;
  detail: string;
};

export type Feature = {
  title: string;
  body: string;
};

export type TimelineItem = {
  year: string;
  event: string;
};

export type Category = {
  id: string;
  name: string;
  eyebrow: string;
  image: string;
  imageAlt: string;
  summary: string;
  groups: string[];
  siteUrl: string;
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#products", label: "Products" },
  { href: "#why-us", label: "Why Us" },
  { href: "#timeline", label: "Timeline" },
  { href: "#cases", label: "Cases" },
  { href: "#contact", label: "Contact" },
];

export const stats: Stat[] = [
  {
    value: "7000+",
    label: "Products",
    detail: "Security, electronics, automation, and networking inventory.",
  },
  {
    value: "45+",
    label: "Years Experience",
    detail: "A market leader in Jordan since 1981.",
  },
  {
    value: "25+",
    label: "Brands",
    detail: "Global manufacturers across major product lines.",
  },
  {
    value: "9+",
    label: "Warehouses",
    detail: "Distributed storage for faster delivery coverage.",
  },
  {
    value: "1500+",
    label: "Clients",
    detail: "Public, commercial, enterprise, and residential sectors.",
  },
  {
    value: "400+",
    label: "Stores and Technicians",
    detail: "A wide distribution and technical support footprint.",
  },
  {
    value: "300+",
    label: "Mega Projects",
    detail: "Large-scale deployments across Jordan.",
  },
];

export const values: Feature[] = [
  {
    title: "Vision",
    body: "To be the premier provider of electronic and security solutions, proactively responding to our client’s customized needs, enabling them to focus on the primary objective of productivity, profits and building relationships with stakeholders.",
  },
  {
    title: "Mission",
    body: "We aim to partner with top-of-the-line manufacturers, domestic and worldwide, establishing productive liaisons for the creation of innovative and responsive security systems, guaranteeing our clients access to advanced solutions which match their unique specifications.",
  },
  {
    title: "Values",
    body: "Reputable brands from around the world, competitive pricing with price-match guarantees, immediate response services, technical professionalism, and close client support from purchase to final installation.",
  },
];

export const services: Feature[] = [
  {
    title: "Wholesale & Distribution",
    body: "Large-scale supply, retailer support, integrator fulfillment, and delivery across Jordan from nearby cities to remote project locations.",
  },
  {
    title: "Projects",
    body: "Facility evaluation, solution design, equipment selection, proposal support, delivery, installation, and integrated security packages.",
  },
  {
    title: "Support & Maintenance",
    body: "After-sales support teams are constantly available to respond to order, installation, and maintenance requests so systems stay operational.",
  },
];

export const strengths: Feature[] = [
  {
    title: "Global Scale & Purchasing Power",
    body: "As one of the leading suppliers and stockiest of electronic equipments, ESE leverages its scale and purchasing power to handle projects of any size.",
  },
  {
    title: "Manufacturer Relationships",
    body: "Decades of brand partnerships simplify multi-product projects and keep product quality consistent with long-standing mill relationships.",
  },
  {
    title: "Project Management",
    body: "Experienced project management services coordinate materials, schedules, and multiple parties in large-scale security installations.",
  },
  {
    title: "Technical Knowledge",
    body: "Our commercial, quality, and operational management teams come from a broad range of training and experience to offer premium support.",
  },
];

export const timeline: TimelineItem[] = [
  { year: "1981", event: "Electronic Supplies Est. is founded in Amman, Jordan." },
  { year: "1983", event: "Channel Master (USA) TV antennas and CATV distribution Amplifiers." },
  { year: "1984", event: "Maspro Denkoh CORP (Japan) TV Antennas, MATV and CATV amplifiers and splitters." },
  { year: "1986", event: "Telecall Video and Audio Intercom Systems for Homes and buildings." },
  { year: "1988", event: "Tamura (Japan) Telephone sets and Telephone systems." },
  { year: "1989", event: "Suntele (Japan) Telephone sets." },
  { year: "1991", event: "Elbex (Japan) CCTV Cameras, Monitors, and switches." },
  { year: "1992", event: "Hitachi (Japan) CCTV Systems." },
  { year: "1993", event: "Fadini (Italy) Automatic Doors Operators." },
  { year: "1994", event: "WISI (Germany) Master Antennas TV systems for Hotels and Building Complex." },
  { year: "1995-1999", event: "Satellite receiving systems: Maspro Denkoh CORP (Japan), Echostar (USA), Pace (UK), Paraclipse (USA), Perfect 10 (USA)." },
  { year: "2000", event: "DSC (Canada) Security and Alarm Products." },
  { year: "2001", event: "DEA (Italy) Automatic Doors Operators." },
  { year: "2002", event: "DeltaVision (Canada) CCTV Cameras, Monitors, and Multiplexers." },
  { year: "2003", event: "LG (Korea) CCTV Cameras, Monitors, and Digital Video Recorders." },
  { year: "2004", event: "CNB (Korea) CCTV Cameras, Monitors, and Digital Video Recorders." },
  { year: "2004", event: "Nadatel (Korea) Digital Video Recorders." },
  { year: "2005", event: "HIKVISION (China) First Digital Compression Cards H264 Technology." },
  { year: "2007", event: "HIKVISION (China) Video Surveillance." },
  { year: "2013", event: "Lutron (USA) Lighting Control Systems." },
  { year: "2014", event: "Beninca (Italy) Automatic Doors Operators." },
  { year: "2014", event: "Netgear (USA) Networking Equipment." },
  { year: "2015", event: "Dahua Technology (China) Video Surveillance." },
  { year: "2016", event: "Garrett (USA) & Elektral (Turkey) Metal Detectors." },
  { year: "2016", event: "FLIR Systems (USA) Thermal Cameras." },
  { year: "2017", event: "Astrophysics (USA) X-Ray Inspection Systems." },
  { year: "2019", event: "ZkTeco (China) Time Attendance Solutions." },
];

export const categories: Category[] = [
  {
    id: "video-surveillance",
    name: "Video Surveillance",
    eyebrow: "CCTV and IP Video",
    image: `${ESE_MEDIA}/banner/4.png`,
    imageAlt: "Ceiling mounted security camera and monitoring network",
    summary:
      "CCTV, IP cameras, HD analog cameras, DVR, NVR, thermal, mobile traffic, display, and VMS solutions for small systems and large-scale deployments.",
    groups: [
      "IP Cameras",
      "HD Cameras",
      "Digital Video Recorders",
      "Network Video Recorders",
      "Thermal Cameras",
      "Display & Control",
      "VMS Systems",
    ],
    siteUrl: "https://www.esejo.com/en/video-survailance.html",
  },
  {
    id: "intruder-alarms",
    name: "Intruder Alarm Systems",
    eyebrow: "Detection and Response",
    image: `${ESE_MEDIA}/banner/3.png`,
    imageAlt: "Smart intrusion alarm control panel and motion detector",
    summary:
      "Intrusion detection systems for industrial, commercial, residential, border, banking, hotel, and retail environments.",
    groups: [
      "Alarm Control Panels",
      "Alarm Keypads",
      "Alarm Sensors and Contacts",
      "Alarm Modules and Accessories",
      "GSM Digital Communicators",
      "Sirens and Strobes",
      "Security Kits",
    ],
    siteUrl: "https://www.esejo.com/en/intruder-alarm-systems.html",
  },
  {
    id: "access-control",
    name: "Access Control Systems",
    eyebrow: "Managed Entry and Identity",
    image: `${ESE_MEDIA}/banner/2.png`,
    imageAlt: "Access control card reader installed at office glass door",
    summary:
      "Door controllers, readers, locks, exit controls, cards, tags, hotel locks, and network integration for secure managed entry.",
    groups: [
      "Door Controllers",
      "Access Readers",
      "Proximity Access Cards",
      "Magnetic & Electric Strike Locks",
      "Exit Controls",
      "Cards and Tags",
      "Hotel Locking Systems",
      "Integration & Network Communication",
    ],
    siteUrl: "https://www.esejo.com/en/access-control.html",
  },
  {
    id: "networking",
    name: "Networking & Cables",
    eyebrow: "Connectivity Infrastructure",
    image: `${ESE_MEDIA}/banner/5.png`,
    imageAlt: "Server rack filled with switches and glowing ethernet patch cables",
    summary:
      "Networking equipment and multimedia cable infrastructure for SMEs, carriers, ISPs, system integrators, and data centers.",
    groups: [
      "Switches and Routers",
      "Cabinets and Racks",
      "Wireless Hardware",
      "UTP Cables",
      "Coaxial Cables",
      "Fiber Optic Cables",
      "Wireless Access Points",
      "Cables Modules and Accessories",
    ],
    siteUrl: "https://www.esejo.com/en/networking-equipments.html",
  },
  {
    id: "automatic-gates",
    name: "Automatic Gates & Barriers",
    eyebrow: "Automation and Access Barriers",
    image: `${ESE_MEDIA}/banner/1.png`,
    imageAlt: "Automatic rising arm road barrier at warehouse entrance",
    summary:
      "Automation for gates, barriers, doors, parking, bollards, and access points across residential, commercial and industrial facilities.",
    groups: [
      "Sliding Gates",
      "Road Barriers",
      "Rolling Shutters",
      "Swinging Gates",
      "Rising Bollards",
      "Sliding Doors",
      "Overhead Garage Doors",
      "Turnstiles and Speed Gates",
    ],
    siteUrl: "https://www.esejo.com/en/automatic-gates.html",
  },
  {
    id: "security-inspection",
    name: "Security Inspection Equipments",
    eyebrow: "Checkpoint Screening",
    image: `${ESE_MEDIA}/small_865_2.jpg`,
    imageAlt: "Walkthrough metal detector and x-ray baggage scanning system",
    summary:
      "High-end inspection systems for checkpoints, tactical teams, customs, industrial screening, hotels, and public facilities.",
    groups: [
      "Mail & Small Parcel X-Ray",
      "Large Baggage X-Ray",
      "Cargo X-Ray Inspection",
      "Walkthrough Metal Detectors",
      "Handheld Metal Detectors",
      "Explosive Trace Detectors",
    ],
    siteUrl: "https://www.esejo.com/en/metal-detectors.html",
  },
  {
    id: "pos-solutions",
    name: "POS Solutions & Tools",
    eyebrow: "Retail & Hospitality Tech",
    image: `${ESE_MEDIA}/imageslider/home-v4/01.jpg`,
    imageAlt: "Touchscreen cash register and barcode scanner on point of sale terminal",
    summary:
      "Fixed-lane and self-order POS products, barcode scanners, cash drawers, inventory readers, label printers, and thermal printers.",
    groups: [
      "Point of Sale Terminals",
      "Barcode Scanners",
      "Cash Drawers",
      "Inventory Readers",
      "Label Printers",
      "Thermal Receipt Printers",
    ],
    siteUrl: "https://www.esejo.com/en/",
  },
  {
    id: "queue-management",
    name: "Queue Management & Kiosks",
    eyebrow: "Smart Customer Journey",
    image: `${ESE_MEDIA}/imageslider/home-v4/02.jpg`,
    imageAlt: "Self-service touchscreen kiosk ticketing machine in reception area",
    summary:
      "Customer experience systems that organize service queues, reduce waiting times, and connect self-service journeys with digital operations.",
    groups: [
      "Self Service Kiosks",
      "Ticket Dispensers",
      "LCD Counter Displays",
      "LCD Main Displays",
      "LED Counter Displays",
      "Feedback Terminals",
    ],
    siteUrl: "https://www.esejo.com/en/",
  },
];

export const profileSolutions: Feature[] = [
  {
    title: "POS Solutions and Tools",
    body: "Fixed-lane and self-order POS products for retail, hospitality, restaurants, entertainment, printers, scanners, drawers, and inventory tools.",
  },
  {
    title: "Queue Management and Kiosks",
    body: "Customer experience systems that organize service queues, reduce waiting, and connect self-service journeys with digital operations.",
  },
];

export const successCases: Feature[] = [
  {
    title: "Jordan Election",
    body: "Supply and installation of surveillance systems to monitor the election process in a project valued around 1 million USD.",
  },
  {
    title: "Arab Bank",
    body: "Security and access control systems supplied for Arab Bank branches in Jordan in partnership with Tyco Group.",
  },
  {
    title: "Aqaba and Wadi Rum",
    body: "A total solution covering thermal cameras, wireless microwave network, and IP network cameras.",
  },
  {
    title: "Sofex Jordan Military Exhibition",
    body: "Sponsored and secured exhibition areas with video surveillance camera installations.",
  },
];

export const partners = [
  "Tyco",
  "Astrophysics",
  "Sebury",
  "Lutron",
  "Ubiquiti",
  "Cisco",
  "HID",
  "Dahua",
  "DSC",
  "Beninca",
  "Kantech",
  "Netgear",
  "Garrett",
  "FLIR",
  "ZKTeco",
  "Commax",
  "Videx",
  "Fadini"
];

export const productNav = categories.map(({ id, name }) => ({ id, name }));
