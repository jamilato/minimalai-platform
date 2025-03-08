
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message envoyé",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      setFormState({
        name: '',
        email: '',
        company: '',
        message: '',
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Nom
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formState.name}
            onChange={handleChange}
            className="minimal-input w-full p-3 border bg-white"
            placeholder="Votre nom"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formState.email}
            onChange={handleChange}
            className="minimal-input w-full p-3 border bg-white"
            placeholder="votre@email.com"
          />
        </div>
        
        <div>
          <label htmlFor="company" className="block text-sm font-medium mb-2">
            Entreprise
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={formState.company}
            onChange={handleChange}
            className="minimal-input w-full p-3 border bg-white"
            placeholder="Nom de votre entreprise"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={formState.message}
            onChange={handleChange}
            className="minimal-input w-full p-3 border bg-white resize-none"
            placeholder="Comment pouvons-nous vous aider?"
          />
        </div>
        
        <Button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-primary text-primary-foreground rounded-none transition-colors hover:bg-primary/90"
        >
          {loading ? 'Envoi en cours...' : 'Envoyer le message'}
        </Button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
