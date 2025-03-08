
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageCircle, Bot, Zap, ArrowRight, Lightbulb, Search, Settings, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Section, AnimatedSection, Badge, Card } from '@/components/ui-components';

const Assistants = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'Tous' },
    { id: 'communication', name: 'Communication' },
    { id: 'productivity', name: 'Productivité' },
    { id: 'analysis', name: 'Analyse' },
  ];
  
  const assistants = [
    {
      id: 1,
      icon: <MessageCircle className="h-12 w-12" />,
      title: "Assistant Conversation",
      description: "Interagissez naturellement avec une IA capable de comprendre le contexte et de maintenir des conversations fluides.",
      features: ["Mémoire conversationnelle", "Compréhension du contexte", "Réponses naturelles", "Support multilingue"],
      category: "communication",
      popular: true,
    },
    {
      id: 2,
      icon: <Bot className="h-12 w-12" />,
      title: "Rédacteur IA",
      description: "Créez du contenu de qualité en un temps record, adapté à votre style et à votre audience.",
      features: ["Génération de textes", "Adaptation du ton", "Correction grammaticale", "Optimisation SEO"],
      category: "productivity",
      popular: false,
    },
    {
      id: 3,
      icon: <Zap className="h-12 w-12" />,
      title: "Analyste Données",
      description: "Transformez vos données en insights actionnables grâce à notre IA d'analyse performante.",
      features: ["Visualisation interactive", "Détection de tendances", "Rapports automatisés", "Prévisions avancées"],
      category: "analysis",
      popular: false,
    },
    {
      id: 4,
      icon: <Lightbulb className="h-12 w-12" />,
      title: "Générateur d'Idées",
      description: "Stimulez votre créativité et trouvez de nouvelles inspirations pour vos projets et défis.",
      features: ["Brainstorming guidé", "Associations d'idées", "Résolution de problèmes", "Exploration de concepts"],
      category: "productivity",
      popular: false,
    },
    {
      id: 5,
      icon: <Search className="h-12 w-12" />,
      title: "Recherche Intelligente",
      description: "Trouvez rapidement les informations pertinentes dans vos documents et sur le web.",
      features: ["Recherche contextuelle", "Synthèse d'informations", "Indexation de documents", "Filtres avancés"],
      category: "analysis",
      popular: true,
    },
    {
      id: 6,
      icon: <Settings className="h-12 w-12" />,
      title: "Automatisation Workflow",
      description: "Automatisez vos tâches répétitives et optimisez vos processus de travail.",
      features: ["Création de workflows", "Intégrations multiples", "Déclencheurs conditionnels", "Surveillance en temps réel"],
      category: "productivity",
      popular: false,
    },
  ];
  
  // Filter assistants based on active category
  const filteredAssistants = activeCategory === 'all' 
    ? assistants 
    : assistants.filter(a => a.category === activeCategory);
  
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <Section className="bg-white">
        <div className="text-center">
          <Badge className="mb-4">Nos Assistants IA</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            La puissance de l'IA, <span className="block">simplifiée à l'extrême</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Découvrez notre collection d'assistants IA spécialisés, conçus pour vous aider à accomplir 
            plus avec moins d'effort, tout en conservant une expérience élégante et intuitive.
          </p>
        </div>
      </Section>
      
      {/* Categories Filter */}
      <Section className="bg-secondary py-8">
        <div className="flex justify-center flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-colors",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-white text-muted-foreground hover:text-foreground"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>
      </Section>
      
      {/* Assistants Grid */}
      <AnimatedSection className="bg-white">
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {filteredAssistants.map((assistant) => (
            <motion.div key={assistant.id} variants={item}>
              <Card 
                hoverable
                className={cn(
                  "h-full flex flex-col",
                  assistant.popular ? "border-primary" : ""
                )}
              >
                {assistant.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground">Populaire</Badge>
                  </div>
                )}
                <div className="mb-4 text-primary">{assistant.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{assistant.title}</h3>
                <p className="text-muted-foreground mb-6">{assistant.description}</p>
                
                <div className="mt-auto">
                  <h4 className="font-medium mb-2">Fonctionnalités</h4>
                  <ul className="space-y-2 mb-6">
                    {assistant.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/pricing" 
                    className="group inline-flex items-center text-sm font-medium text-primary"
                  >
                    Explorer les plans
                    <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </AnimatedSection>
      
      {/* CTA Section */}
      <AnimatedSection className="bg-secondary">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à transformer votre façon de travailler?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Découvrez nos formules d'abonnement adaptées à tous les besoins, des particuliers aux grandes entreprises.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/pricing" 
              className="hero-button bg-primary text-primary-foreground"
            >
              Voir les tarifs
            </Link>
            <Link 
              to="/contact" 
              className="hero-button bg-white text-foreground"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Assistants;
