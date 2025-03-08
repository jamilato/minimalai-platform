
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

// Badge Component
export const Badge = ({ 
  children, 
  className 
}: { 
  children: React.ReactNode; 
  className?: string;
}) => (
  <span className={cn(
    "inline-flex items-center px-2.5 py-0.5 text-xs font-medium text-[#333333] bg-[#F5F5F5]",
    className
  )}>
    {children}
  </span>
);

// Section Component
export const Section = ({ 
  children, 
  className,
  id
}: { 
  children: React.ReactNode; 
  className?: string;
  id?: string;
}) => (
  <section
    id={id}
    className={cn("py-20 md:py-28", className)}
  >
    <div className="container-custom">{children}</div>
  </section>
);

// AnimatedSection for elements that animate on scroll
export const AnimatedSection = ({ 
  children, 
  className,
  delay = 0,
  id
}: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
  id?: string;
}) => (
  <motion.section
    id={id}
    className={cn("py-20 md:py-28", className)}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
  >
    <div className="container-custom">{children}</div>
  </motion.section>
);

// Card Component
export const Card = ({ 
  children, 
  className,
  hoverable = false
}: { 
  children: React.ReactNode; 
  className?: string;
  hoverable?: boolean;
}) => (
  <div className={cn(
    "minimal-card",
    hoverable && "transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]",
    className
  )}>
    {children}
  </div>
);

// Feature Component
export const Feature = ({
  icon: Icon,
  title,
  description,
  className,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  className?: string;
}) => (
  <div className={cn("flex flex-col items-start", className)}>
    <div className="mb-6 text-primary">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="mb-3 text-xl font-medium tracking-tight">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">{description}</p>
  </div>
);

// HeroHeading Component
export const HeroHeading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h1 className={cn(
    "text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl",
    className
  )}>
    {children}
  </h1>
);

// PriceCard Component
export const PriceCard = ({
  title,
  price,
  description,
  features,
  isPopular = false,
  className,
  buttonText = "Get Started",
  buttonAction,
}: {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  className?: string;
  buttonText?: string;
  buttonAction?: () => void;
}) => (
  <Card className={cn(
    "flex flex-col justify-between h-full",
    isPopular ? "border-black shadow-lg" : "border-[#EEEEEE]",
    className
  )}>
    {isPopular && (
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-0">
        <Badge className="bg-black text-white px-4 py-1">Populaire</Badge>
      </div>
    )}
    <div>
      <h3 className="text-xl font-medium tracking-tight">{title}</h3>
      <div className="mt-6 flex items-baseline">
        <span className="text-4xl font-bold tracking-tight">{price}</span>
        {price !== "Sur mesure" && <span className="ml-1 text-muted-foreground">/mois</span>}
      </div>
      <p className="mt-4 text-muted-foreground">{description}</p>
      <div className="luxury-divider my-8 h-px w-full bg-[#F5F5F5]"></div>
      <ul className="mt-6 space-y-4">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <svg className="h-5 w-5 text-foreground flex-shrink-0 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
    <button 
      onClick={buttonAction}
      className={cn(
        "mt-10 w-full rounded-none py-3 px-4 text-sm font-medium transition-colors",
        isPopular
          ? "bg-primary text-primary-foreground hover:bg-primary/90"
          : "bg-white border border-black text-foreground hover:bg-black hover:text-white"
      )}
    >
      {buttonText}
    </button>
  </Card>
);
