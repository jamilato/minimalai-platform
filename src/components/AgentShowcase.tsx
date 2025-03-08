
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
}

const agents: Agent[] = [
  {
    name: "John",
    expertise: "MARKETING",
    avatarSrc: "/agents/john.png",
    color: "bg-gradient-to-b from-violet-400 to-violet-600",
    tagline: "Stratégies qui inspirent."
  },
  {
    name: "Eva",
    expertise: "EVENTS",
    avatarSrc: "/agents/eva.png", 
    color: "bg-gradient-to-b from-pink-400 to-pink-600",
    tagline: "Vos événements, magnifiés."
  },
  {
    name: "Erika",
    expertise: "FINANCING",
    avatarSrc: "/agents/erika.png",
    color: "bg-gradient-to-b from-blue-400 to-blue-600",
    tagline: "Vos finances, optimisées."
  },
  {
    name: "David",
    expertise: "STRATEGY",
    avatarSrc: "/agents/david.png",
    color: "bg-gradient-to-b from-red-400 to-red-600",
    tagline: "Votre vision. Notre stratégie."
  },
  {
    name: "Sophie",
    expertise: "LEGAL",
    avatarSrc: "/agents/sophie.png",
    color: "bg-gradient-to-b from-purple-400 to-purple-600",
    tagline: "Expertise juridique clarifiée."
  },
  {
    name: "Charly",
    expertise: "DIRECTION",
    avatarSrc: "/agents/charly.png",
    color: "bg-gradient-to-b from-orange-400 to-orange-600",
    tagline: "Leadership visionnaire."
  },
  {
    name: "Michael",
    expertise: "CUSTOMER RELATIONSHIP",
    avatarSrc: "/agents/michael.png",
    color: "bg-gradient-to-b from-green-400 to-green-600",
    tagline: "Relations clients au sommet."
  }
];

const AgentShowcase: React.FC = () => {
  // Only show first 4 agents in 2x2 grid
  const displayedAgents = agents.slice(0, 4);

  return (
    <div className="relative w-full py-16">
      <div className="flex justify-between items-center mb-12">
        <div className="flex-1">
          <h2 className="text-4xl font-bold tracking-tight">Rencontrez nos agents IA</h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Des assistants spécialisés conçus pour répondre à vos besoins spécifiques
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {displayedAgents.map((agent) => (
          <motion.div
            key={agent.name}
            className="flex-shrink-0"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className={cn("rounded-2xl overflow-hidden h-[450px] relative", agent.color)}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Name in elegant script font */}
              <div className="absolute top-8 left-0 right-0 text-center">
                <h3 className="font-serif italic text-4xl font-bold text-white">{agent.name}</h3>
                <p className="text-white/90 mt-2 font-light">{agent.tagline}</p>
              </div>
              
              {/* Avatar placeholder */}
              <div className="h-4/5 flex items-center justify-center">
                <img 
                  src={agent.avatarSrc} 
                  alt={agent.name}
                  className="h-full w-full object-cover opacity-80" 
                />
              </div>
              
              {/* Expertise and button */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-6">
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium tracking-wide">{agent.expertise}</span>
                  <Button 
                    variant="outline" 
                    className="bg-transparent border-white text-white hover:bg-white hover:text-black"
                  >
                    En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
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
          Voir tous nos agents <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default AgentShowcase;
