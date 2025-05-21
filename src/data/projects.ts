import { Project } from "@/types/projects";

export const allCategories = [
  "Architecture", 
  "Automotive", 
  "Locomotive", 
  "Navimotive"
];

export const projects: Project[] = [
  {
    id: "one-golden-mile",
    title: "One Golden Mile",
    description: "A luxury residential tower with stunning panoramic views, featuring floor-to-ceiling glass facades and sustainable design elements.",
    categories: ["Architecture"],
    year: "2023",
    location: "Dubai, UAE",
    isFeatured: true,
    specs: {
      area: "125,000 sq ft",
      floors: "48",
      completion: "2023",
      client: "Golden Mile Development Corp"
    }
  },
  {
    id: "phoenix-285",
    title: "Phoenix 285",
    description: "A mixed-use development with innovative glass curtain walls that adapt to changing environmental conditions.",
    categories: ["Architecture"],
    year: "2022",
    location: "Singapore",
    specs: {
      area: "285,000 sq ft",
      floors: "42",
      completion: "2022",
      client: "Phoenix Group"
    }
  },
  {
    id: "rajapushpa-provincia",
    title: "Rajapushpa Provincia",
    description: "Luxury residential complex featuring modern architectural design with extensive glass elements and energy-efficient systems.",
    categories: ["Architecture"],
    year: "2021",
    location: "Hyderabad, India",
    specs: {
      area: "180,000 sq ft",
      units: "120",
      completion: "2021",
      client: "Rajapushpa Properties"
    }
  },
  {
    id: "gmr-airport",
    title: "GMR Airport Terminal",
    description: "Award-winning airport terminal design with extensive glass architecture that maximizes natural light while maintaining thermal efficiency.",
    categories: ["Architecture"],
    year: "2020",
    location: "Hyderabad, India",
    specs: {
      area: "1.2 million sq ft",
      capacity: "25 million passengers",
      completion: "2020",
      client: "GMR Group"
    }
  },
  {
    id: "electric-locomotive",
    title: "ZX500 Electric Locomotive",
    description: "High-performance electric locomotive with advanced aerodynamic design and specialized glass components for operator visibility and safety.",
    categories: ["Locomotive"],
    year: "2022",
    location: "France",
    specs: {
      power: "5000 kW",
      maxSpeed: "200 km/h",
      units: "50",
      client: "National Railways"
    }
  },
  {
    id: "luxury-yacht",
    title: "Oceanus Marine Explorer",
    description: "Luxury marine vessel with panoramic glass viewing areas designed for durability in harsh maritime conditions.",
    categories: ["Navimotive"],
    year: "2023",
    location: "Monaco",
    specs: {
      length: "65 meters",
      capacity: "14 guests",
      completion: "2023",
      client: "Private Owner"
    }
  },
  {
    id: "electric-vehicle",
    title: "E-Vision GT Concept",
    description: "Concept electric vehicle featuring advanced glass technology for enhanced visibility and integrated solar panels.",
    categories: ["Automotive"],
    year: "2023",
    location: "Germany",
    specs: {
      range: "600 km",
      power: "350 kW",
      acceleration: "0-100 km/h in 3.5s",
      client: "Major Automotive Manufacturer"
    }
  },
  {
    id: "high-speed-train",
    title: "Velocity 350 High-Speed Train",
    description: "Next-generation high-speed train with specialized glass elements designed for aerodynamics, sound insulation, and passenger comfort.",
    categories: ["Locomotive"],
    year: "2021",
    location: "Japan",
    specs: {
      maxSpeed: "350 km/h",
      capacity: "850 passengers",
      units: "15",
      client: "National Transit Authority"
    }
  },
  {
    id: "commercial-ship",
    title: "Horizon Commercial Vessel",
    description: "Commercial marine vessel with specialized glass installations providing enhanced visibility and durability in extreme ocean conditions.",
    categories: ["Navimotive"],
    year: "2020",
    location: "Norway",
    specs: {
      length: "120 meters",
      capacity: "25,000 tons",
      completion: "2020",
      client: "Nordic Shipping Company"
    }
  }
];

export const getFeaturedProject = (): Project | undefined => {
  return projects.find(project => project.isFeatured);
};

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const filterProjects = (
  category: string = "all", 
  searchQuery: string = ""
): Project[] => {
  const normalizedSearch = searchQuery.toLowerCase().trim();
  
  return projects.filter(project => {
    // Filter by category
    const categoryMatch = 
      category === "all" || 
      project.categories.includes(category);
    
    // Filter by search query
    const searchMatch = normalizedSearch === "" || 
      project.title.toLowerCase().includes(normalizedSearch) ||
      project.description.toLowerCase().includes(normalizedSearch) ||
      project.location.toLowerCase().includes(normalizedSearch);
    
    return categoryMatch && searchMatch;
  });
}; 