import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

// Types for our agents
interface Agent {
  name: string;
  expertise: string;
  avatarSrc: string;
  color: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
}

// Import necessary icons
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

const agents: Agent[] = [
  {
    name: "John",
    expertise: "TÉLÉPHONIE",
    avatarSrc: "/agents/john.png",
    color: "bg-gradient-to-b from-violet-400 to-violet-600",
    tagline: "Communication simplifiée",
    description: "Automatisez votre support client avec un assistant téléphonique intelligent et personnalisable.",
    icon: <Phone className="h-8 w-8" />
  },
  {
    name: "Eva",
    expertise: "COMPTABILITÉ",
    avatarSrc: "/agents/eva.png", 
    color: "bg-gradient-to-b from-pink-400 to-pink-600",
    tagline: "Chiffres maîtrisés",
    description: "Simplifiez votre gestion comptable avec un assistant qui automatise les tâches répétitives.",
    icon: <FileSpreadsheet className="h-8 w-8" />
  },
  {
    name: "Erika",
    expertise: "MARKETING",
    avatarSrc: "/agents/erika.png",
    color: "bg-gradient-to-b from-blue-400 to-blue-600",
    tagline: "Stratégies qui convertissent",
    description: "Optimisez vos campagnes marketing avec des analyses prédictives et des recommandations ciblées.",
    icon: <TrendingUp className="h-8 w-8" />
  },
  {
    name: "David",
    expertise: "JURIDIQUE",
    avatarSrc: "/agents/david.png",
    color: "bg-gradient-to-b from-red-400 to-red-600",
    tagline: "Protection assurée",
    description: "Obtenez une assistance juridique pour l'analyse de documents et la rédaction de contrats.",
    icon: <Landmark className="h-8 w-8" />
  },
  {
    name: "Sophie",
    expertise: "FINANCE",
    avatarSrc: "/agents/sophie.png",
    color: "bg-gradient-to-b from-purple-400 to-purple-600",
    tagline: "Investissements optimisés",
    description: "Analysez vos données financières et obtenez des prévisions précises pour optimiser vos investissements.",
    icon: <Euro className="h-8 w-8" />
  },
  {
    name: "Charly",
    expertise: "ADMINISTRATION",
    avatarSrc: "/agents/charly.png",
    color: "bg-gradient-to-b from-orange-400 to-orange-600",
    tagline: "Efficacité administrative",
    description: "Automatisez vos tâches administratives et gagnez un temps précieux au quotidien.",
    icon: <FileText className="h-8 w-8" />
  },
  {
    name: "Michael",
    expertise: "IMMOBILIER",
    avatarSrc: "/agents/michael.png",
    color: "bg-gradient-to-b from-green-400 to-green-600",
    tagline: "Biens valorisés",
    description: "Optimisez la gestion de vos biens immobiliers et améliorez votre relation client.",
    icon: <Building className="h-8 w-8" />
  },
  {
    name: "Alice",
    expertise: "ÉDUCATION",
    avatarSrc: "/agents/alice.png",
    color: "bg-gradient-to-b from-teal-400 to-teal-600",
    tagline: "Apprentissage personnalisé",
    description: "Créez des expériences d'apprentissage personnalisées et adaptées à chaque apprenant.",
    icon: <GraduationCap className="h-8 w-8" />
  },
  {
    name: "Thomas",
    expertise: "CONSTRUCTION",
    avatarSrc: "/agents/thomas.png",
    color: "bg-gradient-to-b from-amber-400 to-amber-600",
    tagline: "Projets sécurisés",
    description: "Surveillez vos projets de construction et anticipez les problèmes potentiels.",
    icon: <HardHat className="h-8 w-8" />
  },
  {
    name: "Clara",
    expertise: "SANTÉ",
    avatarSrc: "/agents/clara.png",
    color: "bg-gradient-to-b from-emerald-400 to-emerald-600",
    tagline: "Soins optimisés",
    description: "Assistez les professionnels de santé dans leur diagnostic et la gestion des patients.",
    icon: <Stethoscope className="h-8 w-8" />
  }
];

const AgentShowcase: React.FC = () => {
  return (
    <div className="relative w-full py-16">
      <div className="flex justify-between items-center mb-12">
        <div className="flex-1">
          <h2 className="text-4xl font-bold tracking-tight">Des solutions IA pour chaque domaine</h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Découvrez nos agents IA spécialisés par secteur d'activité, conçus pour répondre 
            aux défis spécifiques de votre industrie avec précision et efficacité.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {agents.map((agent) => (
          <motion.div
            key={agent.name}
            className="flex-shrink-0"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="border border-gray-100 rounded-lg overflow-hidden shadow-sm h-full bg-white">
              <div className="flex flex-col h-full">
                {/* Agent avatar with colored background */}
                <div className={cn("h-48 relative overflow-hidden", agent.color)}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <img 
                    src={agent.avatarSrc} 
                    alt={agent.name}
                    className="h-full w-full object-cover opacity-80" 
                  />
                  <div className="absolute top-4 left-4 right-4 text-center">
                    <h3 className="font-serif italic text-3xl font-bold text-white">{agent.name}</h3>
                    <p className="text-white/90 mt-1 font-light text-sm">{agent.tagline}</p>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  {/* Icon and domain */}
                  <div className="flex items-center mb-4">
                    <div className="mr-4 p-3 bg-gray-100 rounded-full">
                      {agent.icon}
                    </div>
                    <h4 className="font-medium text-lg">{agent.expertise}</h4>
                  </div>
                  
                  {/* Description */}
                  <p className="text-muted-foreground mb-6 flex-grow">
                    {agent.description}
                  </p>
                  
                  {/* Button */}
                  <div className="mt-auto">
                    <Button 
                      variant="outline" 
                      className="w-full justify-between"
                    >
                      En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Button 
          variant="outline"
          className="border-black text-black hover:bg-black hover:text-white px-8 py-6 text-lg rounded-none"
        >
          Explorer toutes nos solutions <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default AgentShowcase;
