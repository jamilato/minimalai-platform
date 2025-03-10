
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { Agent } from '@/data/agentsData';

interface AgentCardProps {
  agent: Agent;
}

const AgentCard: React.FC<AgentCardProps> = ({ agent }) => {
  return (
    <motion.div
      className="flex-shrink-0"
      whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="border border-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full bg-white">
        <div className="flex flex-col h-full">
          {/* Agent avatar with colored background */}
          <div className={cn("h-52 relative overflow-hidden", agent.color)}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <img 
              src={agent.avatarSrc} 
              alt={agent.name}
              className="h-full w-full object-cover opacity-90 transition-transform duration-500 hover:scale-110" 
            />
            <div className="absolute top-4 left-4 right-4 text-center">
              <h3 className="font-serif italic text-3xl font-bold text-white drop-shadow-md">{agent.name}</h3>
              <p className="text-white/90 mt-1 font-light text-sm">{agent.tagline}</p>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6 flex-grow flex flex-col">
            {/* Icon and domain */}
            <div className="flex items-center mb-4">
              <div className={`mr-4 p-3 ${agent.color} rounded-full text-white`}>
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
                className={`w-full justify-between group border-2 hover:${agent.color.replace('bg-', 'bg-')} hover:text-white transition-all duration-300`}
              >
                En savoir plus 
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AgentCard;
