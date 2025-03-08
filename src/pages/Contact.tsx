
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Mail, MapPin, Phone } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Section, AnimatedSection, Badge, Card } from '@/components/ui-components';

const Contact = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    company: '',
    budget: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message envoyé",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    
    // Reset form
    setFormState({
      name: '',
      email: '',
      subject: '',
      message: '',
      company: '',
      budget: '',
    });
    setIsSubmitting(false);
  };

  return (
    <div className="pt-24 min-h-screen">
      <Section className="bg-white">
        <div className="text-center">
          <Badge className="mb-4">Contactez-nous</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Discutons de votre projet
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Vous avez des questions ou souhaitez en savoir plus sur nos services? 
            Nous sommes là pour vous aider à démarrer avec nos assistants IA.
          </p>
        </div>
      </Section>
      
      <AnimatedSection className="bg-secondary/30">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nom complet <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Votre nom"
                      value={formState.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="votre@email.com"
                      value={formState.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Entreprise
                    </label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Nom de votre entreprise"
                      value={formState.company}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="budget" className="text-sm font-medium">
                      Budget estimé
                    </label>
                    <Select
                      value={formState.budget}
                      onValueChange={(value) => handleSelectChange('budget', value)}
                    >
                      <SelectTrigger id="budget">
                        <SelectValue placeholder="Sélectionnez un budget" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="moins-de-1000">Moins de 1000€</SelectItem>
                        <SelectItem value="1000-5000">1000€ - 5000€</SelectItem>
                        <SelectItem value="5000-10000">5000€ - 10000€</SelectItem>
                        <SelectItem value="plus-de-10000">Plus de 10000€</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Sujet <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Sujet de votre message"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message <span className="text-destructive">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Détaillez votre projet ou votre demande..."
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className="min-h-[150px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full md:w-auto px-8"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </Button>
              </form>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <Mail className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground mt-1">contact@minimalai.com</p>
                  <p className="text-muted-foreground">support@minimalai.com</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <Phone className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">Téléphone</h3>
                  <p className="text-muted-foreground mt-1">+33 1 23 45 67 89</p>
                  <p className="text-muted-foreground">Du lundi au vendredi, 9h-18h</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">Adresse</h3>
                  <p className="text-muted-foreground mt-1">
                    15 Avenue des Champs-Élysées<br />
                    75008 Paris, France
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-primary text-primary-foreground">
              <h3 className="font-medium mb-4">Pourquoi nous choisir?</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <Check className="h-4 w-4 mt-1" />
                  <span className="text-sm">Expertise dans l'IA conversationnelle</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="h-4 w-4 mt-1" />
                  <span className="text-sm">Solutions sur mesure adaptées à vos besoins</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="h-4 w-4 mt-1" />
                  <span className="text-sm">Support dédié et formation complète</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Contact;
