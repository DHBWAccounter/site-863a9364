"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  id: string;
  title: string;
  items: FAQItem[];
  variant?: "default" | "accent";
}

function FAQAccordion({ item, index }: { item: FAQItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={cn(
        "border-b border-border/50 last:border-b-0 transition-all",
        index === 0 && "border-t border-border/50"
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-start justify-between gap-4 text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-serif text-lg sm:text-xl text-primary group-hover:text-accent transition-colors leading-snug">
          {item.question}
        </span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-accent flex-shrink-0 mt-1 transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>
      
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 pb-6" : "max-h-0"
        )}
      >
        <p className="text-foreground/70 leading-relaxed text-base">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export function FAQSection({ id, title, items, variant = "default" }: FAQSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id={id} className="py-16 lg:py-20 relative">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Section title */}
        <div className="animate-on-scroll opacity-0 mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className={cn(
              "w-1 h-12 rounded-full",
              variant === "accent" 
                ? "bg-gradient-to-b from-accent to-accent/40" 
                : "bg-gradient-to-b from-primary to-primary/40"
            )} />
            <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-primary">
              {title}
            </h2>
          </div>
        </div>

        {/* FAQ items */}
        <div className="animate-on-scroll opacity-0 animate-delay-100 bg-white rounded-xl border border-border/30 shadow-sm overflow-hidden">
          {items.map((item, index) => (
            <div key={index} className="px-6 lg:px-8">
              <FAQAccordion item={item} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
