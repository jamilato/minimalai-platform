
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageCircle, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Section, AnimatedSection, Badge, Card } from '@/components/ui-components';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message envoyé",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };
  
  const contactMethods = [
    {
      icon: <Mail className="h-10 w-10" />,
      title: "Email",
      description: "Notre équipe vous répond sous 24h",
      contact: "contact@minimalai.com",
      action: "Envoyer un email",
      href: "mailto:contact@minimalai.com",
    },
    {
      icon: <Phone className="h-10 w-10" />,
      title: "Téléphone",
      description: "Du lundi au vendredi, 9h-18h",
      contact: "+33 1 23 45 67 89",
      action: "Appeler",
      href: "tel:+33123456789",
    },
    {
      icon: <MessageCircle className="h-10 w-10" />,
      title: "Chat en direct",
      description: "Assistance en temps réel",
      contact: "Support chat",
      action: "Démarrer un chat",
      href: "#chat",
    },
  ];
  
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <Section className="bg-white">
        <div className="text-center">
          <Badge className="mb-4">Contact</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Parlons de votre projet
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Des questions sur nos assistants IA ou besoin d'une solution personnalisée ? 
            Notre équipe est là pour vous aider à trouver la solution idéale.
          </p>
        </div>
      </Section>
      
      {/* Contact Methods */}
      <Section className="bg-secondary">
        <div className="grid md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="text-center h-full flex flex-col justify-between py-8" hoverable>
                <div>
                  <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                  <p className="text-muted-foreground mb-4">{method.description}</p>
                  <p className="font-medium mb-6">{method.contact}</p>
                </div>
                <a 
                  href={method.href} 
                  className="inline-flex items-center justify-center rounded-md border border-primary bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                >
                  {method.action}
                </a>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* Contact Form Section */}
      <AnimatedSection className="bg-white">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Envoyez-nous un message</h2>
            <p className="text-muted-foreground mb-8">
              Remplissez le formulaire ci-dessous pour nous parler de votre projet, 
              poser une question ou simplement dire bonjour. Nous vous répondrons 
              dans les plus brefs délais.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="mt-1 bg-primary/10 p-2 rounded-full text-primary mr-4">
                  <Check className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Réponse rapide</h3>
                  <p className="text-sm text-muted-foreground">Nous répondons à toutes les demandes sous 24h ouvrées.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 bg-primary/10 p-2 rounded-full text-primary mr-4">
                  <Check className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Assistance personnalisée</h3>
                  <p className="text-sm text-muted-foreground">Un conseiller dédié vous accompagnera tout au long du processus.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 bg-primary/10 p-2 rounded-full text-primary mr-4">
                  <Check className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Solutions sur mesure</h3>
                  <p className="text-sm text-muted-foreground">Nous adaptons nos solutions à vos besoins spécifiques.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Nom complet
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={cn(
                        "w-full rounded-md border border-input bg-background px-4 py-2 text-sm",
                        "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      )}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={cn(
                        "w-full rounded-md border border-input bg-background px-4 py-2 text-sm",
                        "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      )}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Sujet
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className={cn(
                      "w-full rounded-md border border-input bg-background px-4 py-2 text-sm",
                      "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    )}
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="question">Question générale</option>
                    <option value="demo">Demande de démonstration</option>
                    <option value="pricing">Renseignements sur les tarifs</option>
                    <option value="support">Support technique</option>
                    <option value="other">Autre</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={cn(
                      "w-full rounded-md border border-input bg-background px-4 py-2 text-sm",
                      "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    )}
                  />
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full rounded-md px-4 py-3 text-sm font-medium shadow-sm",
                  "bg-primary text-primary-foreground hover:bg-primary/90 transition-colors",
                  "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
              </button>
            </form>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Contact;
