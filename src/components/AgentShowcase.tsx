
import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

// Types for our agents
interface Agent {
  name: string;
  expertise: string;
  avatarSrc: string;
  color: string;
}

const agents: Agent[] = [
  {
    name: "John",
    expertise: "MARKETING",
    avatarSrc: "/agents/john.png",
    color: "bg-gradient-to-b from-violet-400 to-violet-600"
  },
  {
    name: "Eva",
    expertise: "EVENTS",
    avatarSrc: "/agents/eva.png", 
    color: "bg-gradient-to-b from-pink-400 to-pink-600"
  },
  {
    name: "Charly",
    expertise: "DIRECTION",
    avatarSrc: "/agents/charly.png",
    color: "bg-gradient-to-b from-orange-400 to-orange-600"
  },
  {
    name: "Michael",
    expertise: "CUSTOMER RELATIONSHIP",
    avatarSrc: "/agents/michael.png",
    color: "bg-gradient-to-b from-green-400 to-green-600"
  },
  {
    name: "Erika",
    expertise: "FINANCING",
    avatarSrc: "/agents/erika.png",
    color: "bg-gradient-to-b from-blue-400 to-blue-600"
  },
  {
    name: "Sophie",
    expertise: "LEGAL",
    avatarSrc: "/agents/sophie.png",
    color: "bg-gradient-to-b from-purple-400 to-purple-600"
  },
  {
    name: "David",
    expertise: "STRATEGY",
    avatarSrc: "/agents/david.png",
    color: "bg-gradient-to-b from-red-400 to-red-600"
  }
];

const AgentShowcase: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const visibleAgents = 4; // Number of agents visible at once

  const nextAgent = () => {
    if (activeIndex < agents.length - visibleAgents) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const prevAgent = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <div className="relative w-full py-16">
      <div className="flex justify-between items-center mb-8">
        <div className="flex-1">
          <h2 className="text-3xl font-bold">Rencontrez nos agents IA</h2>
          <p className="text-muted-foreground mt-2">
            Spécialistes dans leurs domaines respectifs, prêts à vous assister
          </p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={prevAgent}
            disabled={activeIndex === 0}
            className={cn(
              "p-2 border border-gray-200 rounded-full",
              activeIndex === 0 ? "text-gray-300" : "hover:bg-gray-100"
            )}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={nextAgent}
            disabled={activeIndex >= agents.length - visibleAgents}
            className={cn(
              "p-2 border border-gray-200 rounded-full",
              activeIndex >= agents.length - visibleAgents ? "text-gray-300" : "hover:bg-gray-100"
            )}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden" ref={containerRef}>
        <motion.div
          className="flex gap-6"
          animate={{ x: `-${activeIndex * (100 / visibleAgents)}%` }}
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
        >
          {agents.map((agent, index) => (
            <motion.div
              key={agent.name}
              className="flex-shrink-0 w-1/4 min-w-[250px]"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className={cn("rounded-lg overflow-hidden h-96 relative", agent.color)}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Name in elegant script font */}
                <div className="absolute top-4 left-4 right-4 text-center">
                  <h3 className="font-serif italic text-3xl font-bold text-white">{agent.name}</h3>
                </div>
                
                {/* Avatar placeholder */}
                <div className="h-4/5 flex items-center justify-center">
                  <img 
                    src="/placeholder.svg" 
                    alt={agent.name}
                    className="h-full w-full object-cover opacity-80" 
                  />
                </div>
                
                {/* Expertise */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 text-center">
                  <span className="text-white font-medium tracking-wide">{agent.expertise}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AgentShowcase;
