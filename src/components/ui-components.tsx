
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
    "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground",
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
    className={cn("py-16 md:py-24", className)}
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
    className={cn("py-16 md:py-24", className)}
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
    "rounded-lg border bg-card p-6 text-card-foreground shadow-sm",
    hoverable && "transition-all duration-300 hover:shadow-md hover:translate-y-[-4px]",
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
    <div className="mb-4 rounded-full bg-primary/5 p-3 text-primary">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="mb-2 text-xl font-semibold">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
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
    "flex flex-col justify-between",
    isPopular ? "border-primary shadow-lg" : "border-border",
    className
  )}>
    {isPopular && (
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4">
        <Badge className="bg-primary text-primary-foreground px-4 py-1">Popular</Badge>
      </div>
    )}
    <div>
      <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
      <div className="mt-4 flex items-baseline">
        <span className="text-3xl font-bold tracking-tight">{price}</span>
        {price !== "Custom" && <span className="ml-1 text-muted-foreground">/month</span>}
      </div>
      <p className="mt-4 text-sm text-muted-foreground">{description}</p>
      <ul className="mt-6 space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center">
            <svg className="h-4 w-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="ml-3 text-sm text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
    <button 
      onClick={buttonAction}
      className={cn(
        "mt-8 w-full rounded-md px-4 py-2 text-sm font-medium transition-colors",
        isPopular
          ? "bg-primary text-primary-foreground hover:bg-primary/90"
          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
      )}
    >
      {buttonText}
    </button>
  </Card>
);
