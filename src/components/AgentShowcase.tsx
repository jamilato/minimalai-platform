
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import AgentCard from './AgentCard';
import { agents } from '@/data/agentsData';

const AgentShowcase: React.FC = () => {
  return (
    <div className="relative w-full py-16">
      <motion.div 
        className="flex justify-between items-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex-1">
          <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Des solutions IA pour chaque domaine
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Découvrez nos agents IA spécialisés par secteur d'activité, conçus pour répondre 
            aux défis spécifiques de votre industrie avec précision et efficacité.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {agents.map((agent, index) => (
          <AgentCard key={agent.name} agent={agent} />
        ))}
      </div>
      
      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Button 
          variant="outline"
          className="border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-6 text-lg rounded-md transition-all duration-300 transform hover:scale-105 group"
        >
          Explorer toutes nos solutions 
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </motion.div>
    </div>
  );
};

export default AgentShowcase;
