
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Section, AnimatedSection, Badge, PriceCard } from '@/components/ui-components';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  
  // Pricing features for each plan
  const starterFeatures = [
    "1 assistant au choix",
    "Jusqu'à 100 requêtes par jour",
    "Assistance par email",
    "Mises à jour régulières",
  ];
  
  const proFeatures = [
    "3 assistants au choix",
    "Jusqu'à 1000 requêtes par jour",
    "Support prioritaire",
    "API d'intégration",
    "Analyses d'utilisation",
  ];
  
  const businessFeatures = [
    "Assistants illimités",
    "Requêtes illimitées",
    "Support dédié 24/7",
    "Intégrations avancées",
    "Personnalisation complète",
    "Formation d'équipe incluse",
  ];
  
  // Pricing cards data
  const pricingCards = [
    {
      title: "Starter",
      monthlyPrice: "19€",
      annualPrice: "15€",
      description: "Pour les particuliers et les indépendants qui débutent avec l'IA.",
      features: starterFeatures,
      isPopular: false,
    },
    {
      title: "Pro",
      monthlyPrice: "49€",
      annualPrice: "39€",
      description: "Pour les professionnels et les petites équipes qui ont besoin de plus de puissance.",
      features: proFeatures,
      isPopular: true,
    },
    {
      title: "Business",
      monthlyPrice: "99€",
      annualPrice: "79€",
      description: "Pour les entreprises qui nécessitent des solutions avancées et un support dédié.",
      features: businessFeatures,
      isPopular: false,
    },
  ];
  
  // FAQ data
  const faqItems = [
    {
      question: "Puis-je changer de formule à tout moment ?",
      answer: "Oui, vous pouvez modifier votre abonnement à tout moment. Les ajustements de facturation seront appliqués au prorata pour la période restante de votre cycle de facturation."
    },
    {
      question: "Existe-t-il une période d'essai gratuite ?",
      answer: "Oui, nous offrons une période d'essai gratuite de 14 jours pour toutes nos formules. Aucune carte de crédit n'est requise pour démarrer votre essai."
    },
    {
      question: "Comment fonctionne la facturation annuelle ?",
      answer: "La facturation annuelle vous permet d'économiser 20% par rapport à la facturation mensuelle. Vous êtes facturé pour une année complète, mais vous bénéficiez d'un tarif mensuel réduit."
    },
    {
      question: "Que se passe-t-il si je dépasse mes limites de requêtes ?",
      answer: "Si vous atteignez votre limite de requêtes, vous pouvez soit attendre le prochain cycle, soit passer à une formule supérieure. Nous vous enverrons une notification lorsque vous approcherez de votre limite."
    },
  ];

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <Section className="bg-white">
        <div className="text-center">
          <Badge className="mb-4">Tarifs</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Une tarification simple <span className="block">pour des assistants exceptionnels</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Choisissez la formule qui correspond à vos besoins. Tous nos plans incluent 
            l'accès à notre interface minimaliste et à nos mises à jour régulières.
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-secondary rounded-full p-1 mb-16">
            <button
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-colors",
                billingCycle === 'monthly'
                  ? "bg-white shadow-sm text-foreground"
                  : "text-muted-foreground"
              )}
              onClick={() => setBillingCycle('monthly')}
            >
              Mensuel
            </button>
            <button
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-colors",
                billingCycle === 'annual'
                  ? "bg-white shadow-sm text-foreground"
                  : "text-muted-foreground"
              )}
              onClick={() => setBillingCycle('annual')}
            >
              Annuel <span className="text-xs font-normal ml-1 text-primary">-20%</span>
            </button>
          </div>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {pricingCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <PriceCard
                title={card.title}
                price={billingCycle === 'monthly' ? card.monthlyPrice : card.annualPrice}
                description={card.description}
                features={card.features}
                isPopular={card.isPopular}
                buttonText="Commencer"
                buttonAction={() => window.location.href = '/contact'}
              />
            </motion.div>
          ))}
        </div>
        
        {/* Enterprise Section */}
        <div className="mt-16 bg-secondary p-8 rounded-xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Entreprise</h3>
              <p className="text-muted-foreground max-w-xl">
                Vous avez des besoins spécifiques pour votre grande organisation ? 
                Contactez-nous pour une solution sur mesure.
              </p>
            </div>
            <Link 
              to="/contact" 
              className="hero-button bg-white text-foreground"
            >
              Contacter l'équipe commerciale
            </Link>
          </div>
        </div>
      </Section>
      
      {/* FAQ Section */}
      <AnimatedSection className="bg-secondary">
        <div className="text-center mb-12">
          <h2 className="section-heading">Questions fréquentes</h2>
          <p className="section-subheading">
            Vous avez des questions sur nos offres ? Consultez nos réponses aux questions les plus fréquentes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium mb-3">{item.question}</h3>
                <p className="text-muted-foreground">{item.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            Vous avez d'autres questions ? N'hésitez pas à nous contacter.
          </p>
          <Link 
            to="/contact" 
            className="hero-button bg-primary text-primary-foreground"
          >
            Nous contacter
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Pricing;
