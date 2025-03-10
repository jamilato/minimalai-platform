
import { 
  Phone, 
  FileSpreadsheet, 
  TrendingUp, 
  Landmark, 
  Euro, 
  FileText,
  Building, 
  GraduationCap, 
  HardHat, 
  Stethoscope 
} from 'lucide-react';

// Types for our agents
export interface Agent {
  name: string;
  expertise: string;
  avatarSrc: string;
  color: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
}

export const agents: Agent[] = [
  {
    name: "John",
    expertise: "TÉLÉPHONIE",
    avatarSrc: "/agents/john.jpg",
    color: "bg-gradient-to-br from-indigo-400 to-indigo-600",
    tagline: "Communication simplifiée",
    description: "Automatisez votre support client avec un assistant téléphonique intelligent et personnalisable.",
    icon: <Phone className="h-8 w-8" />
  },
  {
    name: "Eva",
    expertise: "COMPTABILITÉ",
    avatarSrc: "/agents/eva.jpg",
    color: "bg-gradient-to-br from-pink-400 to-pink-600",
    tagline: "Chiffres maîtrisés",
    description: "Simplifiez votre gestion comptable avec un assistant qui automatise les tâches répétitives.",
    icon: <FileSpreadsheet className="h-8 w-8" />
  },
  {
    name: "Sophie",
    expertise: "FINANCE",
    avatarSrc: "/agents/sophie.jpg",
    color: "bg-gradient-to-br from-teal-400 to-teal-600",
    tagline: "Investissements optimisés",
    description: "Analysez vos données financières et obtenez des prévisions précises pour optimiser vos investissements.",
    icon: <Euro className="h-8 w-8" />
  },
  {
    name: "David",
    expertise: "JURIDIQUE",
    avatarSrc: "/agents/david.jpg",
    color: "bg-gradient-to-br from-purple-500 to-purple-700",
    tagline: "Protection assurée",
    description: "Obtenez une assistance juridique pour l'analyse de documents et la rédaction de contrats.",
    icon: <Landmark className="h-8 w-8" />
  }
];
