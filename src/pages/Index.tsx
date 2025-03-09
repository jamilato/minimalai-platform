
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Bot, Zap, Shield, ArrowRight, MessageCircle, Star, Check
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Section, AnimatedSection, Feature, HeroHeading, Badge, Card } from '@/components/ui-components';
import InteractiveDemo from '@/components/InteractiveDemo';
import AgentShowcase from '@/components/AgentShowcase';

const Index = () => {
  // Parallax effect ref for hero section
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  // Transform values for parallax effect
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  // Testimonials data
  const testimonials = [
    {
      quote: "Ces assistants IA ont transformé notre façon de travailler. L'interface minimaliste nous permet de rester concentrés sur l'essentiel.",
      author: "Sophie Martin",
      role: "Directrice Marketing, TechCorp",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      quote: "La simplicité et l'efficacité de cette plateforme sont impressionnantes. Nos équipes ont gagné des heures chaque semaine.",
      author: "Thomas Dubois",
      role: "CTO, StartupNext",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      quote: "Enfin une solution d'IA qui ne nécessite pas une semaine de formation pour être utilisée. Élégante et puissante.",
      author: "Claire Lefort",
      role: "Consultante Indépendante",
      rating: 5,
      image: "/placeholder.svg"
    },
  ];
  
  // Assistants data
  const assistants = [
    {
      icon: <MessageCircle className="h-10 w-10" />,
      title: "Assistant Conversation",
      description: "Interagissez naturellement avec une IA capable de comprendre le contexte et de maintenir des conversations fluides.",
      features: ["Mémoire conversationnelle", "Compréhension du contexte", "Réponses naturelles"],
    },
    {
      icon: <Bot className="h-10 w-10" />,
      title: "Rédacteur IA",
      description: "Créez du contenu de qualité en un temps record, adapté à votre style et à votre audience.",
      features: ["Génération de textes", "Adaptation du ton", "Correction grammaticale"],
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Analyste Données",
      description: "Transformez vos données en insights actionnables grâce à notre IA d'analyse performante.",
      features: ["Visualisation interactive", "Détection de tendances", "Rapports automatisés"],
    },
  ];
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-secondary to-transparent opacity-50" />
          <div className="absolute inset-0 bg-grid-black" />
        </motion.div>
        
        <div className="container-custom relative z-10 mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-4">Intelligence Artificielle Minimaliste</Badge>
            
            <HeroHeading className="max-w-4xl mx-auto mb-6">
              L'intelligence artificielle
              <span className="block text-muted-foreground">repensée pour l'essentiel</span>
            </HeroHeading>
            
            <p className="max-w-2xl mx-auto mb-10 text-lg text-muted-foreground">
              Découvrez nos assistants IA épurés et puissants, conçus pour vous aider à accomplir plus, 
              sans compromis sur la simplicité et l'élégance.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/assistants" 
                className="hero-button bg-primary text-primary-foreground"
              >
                Découvrir les assistants
              </Link>
              <Link 
                to="/pricing" 
                className="hero-button bg-secondary text-secondary-foreground"
              >
                Voir les tarifs
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 max-w-4xl mx-auto relative"
          >
            <InteractiveDemo />
            
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary rounded-full animate-float z-0 opacity-80" />
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-muted rounded-full animate-float z-0 opacity-50" style={{ animationDelay: "1s" }} />
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowRight className="h-6 w-6 rotate-90 text-muted-foreground" />
          </motion.div>
        </div>
      </div>
      
      {/* Featured Agents Showcase */}
      <AnimatedSection className="bg-white" id="featured-agents">
        <AgentShowcase />
      </AnimatedSection>
      
      {/* Features Section */}
      <AnimatedSection className="bg-secondary" id="features">
        <div className="text-center mb-16">
          <Badge className="mb-4">Fonctionnalités</Badge>
          <h2 className="section-heading">Une expérience remarquable</h2>
          <p className="section-subheading">
            Nos assistants IA mettent la puissance de l'intelligence artificielle à votre service,
            avec une interface épurée qui vous permet de rester concentré sur l'essentiel.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <Feature
            icon={Shield}
            title="Confidentialité Garantie"
            description="Vos données restent confidentielles. Notre système est conçu pour protéger vos informations en toute circonstance."
          />
          <Feature
            icon={Zap}
            title="Performance Optimale"
            description="Algorithmes de pointe pour des réponses rapides et pertinentes, quelle que soit la complexité de vos demandes."
          />
          <Feature
            icon={Bot}
            title="Personnalisation Avancée"
            description="Adaptez chaque assistant à vos besoins spécifiques grâce à nos options de configuration intuitives."
          />
        </div>
      </AnimatedSection>
      
      {/* Assistants Showcase */}
      <AnimatedSection className="bg-white" id="assistants">
        <div className="text-center mb-16">
          <Badge className="mb-4">Nos Assistants</Badge>
          <h2 className="section-heading">Des assistants spécialisés pour chaque besoin</h2>
          <p className="section-subheading">
            Explorez notre gamme d'assistants IA conçus pour répondre à vos besoins spécifiques,
            avec une simplicité d'utilisation inégalée.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {assistants.map((assistant, index) => (
            <Card 
              key={index} 
              className="bg-white" 
              hoverable={true}
            >
              <div className="mb-6 text-primary">
                {assistant.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{assistant.title}</h3>
              <p className="text-muted-foreground mb-6">{assistant.description}</p>
              <ul className="space-y-2 mb-6">
                {assistant.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm">
                    <Check className="h-4 w-4 mr-2 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/assistants" 
                className="group inline-flex items-center text-sm font-medium text-primary"
              >
                En savoir plus
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/assistants" 
            className="hero-button bg-primary text-primary-foreground"
          >
            Voir tous les assistants
          </Link>
        </div>
      </AnimatedSection>
      
      {/* Testimonials Section */}
      <AnimatedSection className="bg-secondary" id="testimonials">
        <div className="text-center mb-16">
          <Badge className="mb-4">Témoignages</Badge>
          <h2 className="section-heading">Ce que nos utilisateurs disent</h2>
          <p className="section-subheading">
            Découvrez comment nos assistants IA ont transformé le quotidien de nos utilisateurs
            et apporté une réelle valeur ajoutée à leurs activités.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="testimonial-card">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                  ))}
                </div>
                
                <p className="italic mb-6">{testimonial.quote}</p>
                
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-secondary mr-4 overflow-hidden">
                    <img src={testimonial.image} alt={testimonial.author} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
      
      {/* CTA Section */}
      <AnimatedSection className="bg-primary text-primary-foreground">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à simplifier votre expérience IA?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Rejoignez des milliers d'utilisateurs qui ont déjà transformé leur façon de travailler
            grâce à nos assistants IA minimalistes.
          </p>
          <Link 
            to="/pricing" 
            className="hero-button bg-white text-primary hover:bg-white/90"
          >
            Commencer maintenant
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Index;
