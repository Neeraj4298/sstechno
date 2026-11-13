export const siteConfig = {
  businessName: "SS TECHNO MULTI BRAND APPLIANCES REPAIR SERVICES",
  shortName: "SS TECHNO",
  descriptor: "Multi Brand Appliances Repair Services",
  heroTagline: "Your Home Appliances… Our Repair Care…",
  subhead: "Professional Appliance Repair & Doorstep Service in Kamareddy",
  tagline: "Repair Today… Smile Tomorrow…",
  footerLine: "Repair | Service | Spare Parts",
  siteUrl: "https://sstechno.example", // PLACEHOLDER: real domain TBD; drives canonical/sitemap/schema
  proprietors: ["Mohammed Sameer", "Mohammad Shaibaz"],
  mission: "To provide reliable appliance repair, professional service and customer-friendly support at affordable prices.",
  location: {
    city: "Kamareddy",
    state: "Telangana",
    country: "IN",
    postalCode: "503111",
    address: "Old Bustand, Kamareddy, Telangana, 503111",
    mapUrl: null as string | null,  // TODO client will send Google Maps link; show "View on Google Maps" only if set
    areas: [] as string[],          // TODO nearby towns/villages list; empty => free-text field in form
    serviceAreaText: "Serving customers in Kamareddy, Telangana and nearby areas, subject to service availability.",
  },
  contact: {
    phones: [
      { display: "88970 52019", e164: "+918897052019", whatsapp: "918897052019", primary: true },
      { display: "63047 51159", e164: "+916304751159", whatsapp: "916304751159", primary: false },
    ],
    email: "sstechnorepairservices@gmail.com" as string | null,
  },
  hours: "10:00 AM – 10:00 PM", // days not specified
  brandsConfirmed: false, // PLACEHOLDER flag; set true once client confirms the list
  brands: ["LG", "Samsung", "Whirlpool", "Voltas", "Daikin", "Blue Star", "Godrej", "Haier", "IFB", "Bosch", "Panasonic", "Hitachi"], // PLACEHOLDER, client to confirm
  whyChoose: [
    "Experienced technicians", "Multi-brand appliance service", "Doorstep repair assistance",
    "Clear problem explanation", "Transparent service approach", "Quality replacement parts",
    "Quick response", "Customer-focused service",
  ],
  process: [
    { step: "01", title: "Contact Us", desc: "Call or WhatsApp us with your appliance problem." },
    { step: "02", title: "Schedule a Visit", desc: "Choose a convenient time for technician assistance." },
    { step: "03", title: "Appliance Inspection", desc: "Our technician checks the appliance and identifies the issue." },
    { step: "04", title: "Repair Solution", desc: "The required repair is explained before proceeding." },
    { step: "05", title: "Service Completion", desc: "We complete the service and test the appliance." },
  ],
  reviews: [ // from client; authors anonymous
    { text: "Professional service and quick response. The technician explained the appliance problem clearly and completed the repair properly.", author: null as string | null },
    { text: "Good doorstep service and reasonable pricing. Recommended for home appliance repair.", author: null as string | null },
    { text: "Very helpful technician and good service experience. The appliance was checked properly and the problem was explained clearly.", author: null as string | null },
  ],
  heroImage: {
    src: "/gallery/ac-servicing.webp",
    alt: "SS TECHNO technician inspecting and repairing an air conditioner in Kamareddy",
  },
  services: [
    { id: "ac-repair-service", title: "AC Repair & Service", icon: "Snowflake",
      image: "/gallery/ac-servicing.webp",
      shortDescription: "AC inspection, troubleshooting, repair and maintenance for different brands and models.",
      problems: ["AC not cooling","Water leakage","Installation-related issues","Unusual noise","Cooling performance problems","General maintenance"] },
    { id: "refrigerator-repair", title: "Refrigerator Repair & Service", icon: "Refrigerator",
      image: "/gallery/refrigerator-repair.webp",
      shortDescription: "Refrigerator troubleshooting and repair by experienced technicians.",
      problems: ["Not cooling","Excessive ice formation","Water leakage","Unusual noise","Compressor-related problems","Cooling fluctuations"] },
    { id: "washing-machine-repair", title: "Washing Machine Repair", icon: "WashingMachine",
      image: "/gallery/washing-machine-repair.webp",
      shortDescription: "Service for front-load and top-load washing machines.",
      problems: ["Not starting","Water drainage problems","Spin problems","Excessive vibration","Door-related issues","Error-code diagnosis","General servicing"] },
    { id: "microwave-oven-repair", title: "Microwave Oven Repair", icon: "Microwave",
      image: "/gallery/microwave-oven-repair.webp",
      shortDescription: "Troubleshooting and repair services for microwave ovens.",
      problems: ["Not heating","Not starting","Display problems","Unusual sounds","Door-related problems","General electrical faults"] },
    { id: "spare-parts", title: "Spare Parts", icon: "Cog",
      image: null as string | null,
      shortDescription: "Appliance spare parts and replacement components, subject to availability and compatibility.",
      problems: [] as string[] },
    { id: "home-appliance-maintenance", title: "Home Appliance Maintenance", icon: "ShieldCheck",
      image: null as string | null,
      shortDescription: "Routine maintenance to keep your home appliances running.",
      problems: [] as string[] },
  ],
  faqs: [ // generic, no promises; client to review
    { question: "Which appliances do you repair?", answer: "We repair ACs, refrigerators, washing machines (front-load and top-load) and microwave ovens, and also deal in spare parts." },
    { question: "Do you provide doorstep service?", answer: "Yes. Our technicians visit your home to inspect and repair the appliance, subject to service availability in your area." },
    { question: "How do I book a service?", answer: "Call us, message us on WhatsApp, or use the Book a Service form and we will get back to you to schedule a visit." },
    { question: "Will you explain the problem before repairing?", answer: "Yes. We identify the actual problem and explain the required repair clearly before proceeding." },
    { question: "Which areas do you serve?", answer: "We serve Kamareddy, Telangana and nearby areas, subject to service availability." },
  ],
  gallery: [
    { label: "AC servicing", src: "/gallery/ac-servicing.webp" as string | null, alt: "AC servicing by SS TECHNO in Kamareddy" },
    { label: "Refrigerator repair", src: "/gallery/refrigerator-repair.webp" as string | null, alt: "Refrigerator repair by SS TECHNO in Kamareddy" },
    { label: "Washing machine repair", src: "/gallery/washing-machine-repair.webp" as string | null, alt: "Washing machine repair by SS TECHNO in Kamareddy" },
    { label: "Microwave oven repair", src: "/gallery/microwave-oven-repair.webp" as string | null, alt: "Microwave oven repair by SS TECHNO in Kamareddy" },
    { label: "Technician at work", src: null as string | null, alt: "Technician at work by SS TECHNO in Kamareddy" },
    { label: "Spare parts", src: null as string | null, alt: "Spare parts by SS TECHNO in Kamareddy" },
    { label: "Service visit", src: null as string | null, alt: "Service visit by SS TECHNO in Kamareddy" },
    { label: "Appliance testing", src: null as string | null, alt: "Appliance testing by SS TECHNO in Kamareddy" },
    { label: "Doorstep service", src: null as string | null, alt: "Doorstep service by SS TECHNO in Kamareddy" },
  ],
  seo: {
    defaultTitle: "Appliance Repair in Kamareddy | AC, Fridge, Washing Machine, Microwave | SS TECHNO",
    defaultDescription: "SS TECHNO Multi Brand Appliances Repair Services in Kamareddy, Telangana. AC, refrigerator, washing machine and microwave oven repair with doorstep service. Call 8897052019.",
    keywords: ["AC Repair Kamareddy","AC Service Kamareddy","Refrigerator Repair Kamareddy","Fridge Repair Kamareddy","Washing Machine Repair Kamareddy","Microwave Oven Repair Kamareddy","Home Appliance Repair Kamareddy","Multi Brand Appliance Repair","Appliance Technician Kamareddy","Doorstep Appliance Service"],
  },
};

