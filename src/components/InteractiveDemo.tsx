
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Bot, ArrowRight, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';

type DemoStep = {
  question: string;
  response: string;
  icon: React.ReactNode;
};

const InteractiveDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [displayedResponse, setDisplayedResponse] = useState('');

  const demoSteps: DemoStep[] = [
    {
      question: "Comment puis-je optimiser le référencement de mon site web?",
      response: "Pour optimiser votre référencement, concentrez-vous sur ces points clés : créez un contenu de qualité, optimisez vos mots-clés, améliorez la vitesse de chargement, et assurez-vous que votre site est adapté aux mobiles. Je peux vous aider à établir une stratégie SEO complète adaptée à votre secteur.",
      icon: <MessageCircle className="h-6 w-6" />
    },
    {
      question: "Peux-tu rédiger un email professionnel pour annoncer notre nouveau produit?",
      response: "Bien sûr. Voici une ébauche : 'Objet : Découvrez notre innovation : [Nom du Produit] est arrivé! Bonjour [Prénom], Nous sommes ravis de vous annoncer le lancement de [Produit], conçu pour [bénéfice principal]. Ce nouveau produit vous permettra de [avantage clé]. Découvrez-en plus sur notre site et contactez-nous pour une démonstration personnalisée. Cordialement, [Votre nom]'",
      icon: <Bot className="h-6 w-6" />
    },
    {
      question: "Quelles sont les tendances actuelles en intelligence artificielle?",
      response: "Les tendances actuelles en IA incluent les grands modèles de langage (LLM) comme GPT-4, l'IA multimodale combinant texte et vision, l'IA générative pour créer du contenu, l'IA explicable pour plus de transparence, et l'adoption croissante de solutions IA par les entreprises dans divers secteurs comme la santé, la finance et le marketing.",
      icon: <Lightbulb className="h-6 w-6" />
    }
  ];

  const simulateTyping = (text: string) => {
    setIsTyping(true);
    setDisplayedResponse('');
    
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedResponse(prev => prev + text[i]);
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 20);
  };

  const handleNextStep = () => {
    const nextStep = (currentStep + 1) % demoSteps.length;
    setCurrentStep(nextStep);
    simulateTyping(demoSteps[nextStep].response);
  };

  // Initial typing simulation
  useState(() => {
    simulateTyping(demoSteps[0].response);
  });

  return (
    <div className="interactive-demo">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>
        <div className="text-sm text-muted-foreground">Assistant IA en action</div>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="mt-1 h-8 w-8 rounded-full bg-muted flex items-center justify-center">
            <span className="text-sm font-medium">Vous</span>
          </div>
          <div className="flex-1">
            <div className="rounded-lg bg-muted p-4">
              <p className="text-sm">{demoSteps[currentStep].question}</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="mt-1 h-8 w-8 rounded-full bg-black flex items-center justify-center text-white">
            {demoSteps[currentStep].icon}
          </div>
          <div className="flex-1">
            <div className="rounded-lg border border-[#EEEEEE] p-4">
              <p className="text-sm">
                {displayedResponse}
                {isTyping && <motion.span 
                  animate={{ opacity: [0, 1] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                >|</motion.span>}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 flex justify-end">
        <button
          onClick={handleNextStep}
          disabled={isTyping}
          className={cn(
            "inline-flex items-center text-sm font-medium transition-colors",
            isTyping ? "text-muted-foreground cursor-not-allowed" : "text-primary"
          )}
        >
          Exemple suivant
          <ArrowRight className="ml-1.5 h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default InteractiveDemo;
