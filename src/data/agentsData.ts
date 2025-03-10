
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
    name: "Erika",
    expertise: "MARKETING",
    avatarSrc: "/agents/erika.jpg",
    color: "bg-gradient-to-br from-blue-400 to-blue-600",
    tagline: "Stratégies qui convertissent",
    description: "Optimisez vos campagnes marketing avec des analyses prédictives et des recommandations ciblées.",
    icon: <TrendingUp className="h-8 w-8" />
  },
  {
    name: "David",
    expertise: "JURIDIQUE",
    avatarSrc: "/agents/david.jpg",
    color: "bg-gradient-to-br from-purple-500 to-purple-700",
    tagline: "Protection assurée",
    description: "Obtenez une assistance juridique pour l'analyse de documents et la rédaction de contrats.",
    icon: <Landmark className="h-8 w-8" />
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
    name: "Charly",
    expertise: "ADMINISTRATION",
    avatarSrc: "/agents/charly.jpg",
    color: "bg-gradient-to-br from-amber-400 to-amber-600",
    tagline: "Efficacité administrative",
    description: "Automatisez vos tâches administratives et gagnez un temps précieux au quotidien.",
    icon: <FileText className="h-8 w-8" />
  },
  {
    name: "Michael",
    expertise: "IMMOBILIER",
    avatarSrc: "/agents/michael.jpg",
    color: "bg-gradient-to-br from-green-400 to-green-600",
    tagline: "Biens valorisés",
    description: "Optimisez la gestion de vos biens immobiliers et améliorez votre relation client.",
    icon: <Building className="h-8 w-8" />
  },
  {
    name: "Alice",
    expertise: "ÉDUCATION",
    avatarSrc: "/agents/alice.jpg",
    color: "bg-gradient-to-br from-cyan-400 to-cyan-600",
    tagline: "Apprentissage personnalisé",
    description: "Créez des expériences d'apprentissage personnalisées et adaptées à chaque apprenant.",
    icon: <GraduationCap className="h-8 w-8" />
  },
  {
    name: "Thomas",
    expertise: "CONSTRUCTION",
    avatarSrc: "/agents/thomas.jpg",
    color: "bg-gradient-to-br from-orange-400 to-orange-600",
    tagline: "Projets sécurisés",
    description: "Surveillez vos projets de construction et anticipez les problèmes potentiels.",
    icon: <HardHat className="h-8 w-8" />
  },
  {
    name: "Clara",
    expertise: "SANTÉ",
    avatarSrc: "/agents/clara.jpg",
    color: "bg-gradient-to-br from-rose-400 to-rose-600",
    tagline: "Soins optimisés",
    description: "Assistez les professionnels de santé dans leur diagnostic et la gestion des patients.",
    icon: <Stethoscope className="h-8 w-8" />
  }
];
