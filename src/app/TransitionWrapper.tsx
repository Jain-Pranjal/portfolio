import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TransitionWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

// A simple wrapper to add fade-in animations to components
export function TransitionWrapper({ children, className, delay = 0 }: TransitionWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div
      className={cn(
        "transition-opacity duration-500", 
        isVisible ? "opacity-100" : "opacity-0",
        className
      )}
    >
      {children}
    </div>
  );
}