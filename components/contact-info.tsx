"use client";

import { useEffect, useRef } from "react";
import { Mail, MapPin, Clock, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ContactInfo() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
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
    <section ref={sectionRef} className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="animate-on-scroll opacity-0 text-3xl sm:text-4xl font-serif font-semibold text-primary mb-4">
            Other Ways to Reach Us
          </h2>
          <div className="animate-on-scroll opacity-0 w-16 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-6 rounded-full animate-delay-100" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Email */}
          <Card className="animate-on-scroll opacity-0 group hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm animate-delay-100">
            <CardHeader className="text-center pb-3">
              <div className="mx-auto mb-4 p-4 rounded-2xl bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors w-fit">
                <Mail className="w-8 h-8" />
              </div>
              <CardTitle className="text-xl font-semibold text-primary">
                Email
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-2">
              <div className="space-y-1">
                <p className="text-sm text-foreground/60">General inquiries</p>
                <a
                  href="mailto:hello@scholarium.ai"
                  className="text-accent hover:text-accent/80 font-medium transition-colors"
                >
                  hello@scholarium.ai
                </a>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-foreground/60">Support</p>
                <a
                  href="mailto:support@scholarium.ai"
                  className="text-accent hover:text-accent/80 font-medium transition-colors"
                >
                  support@scholarium.ai
                </a>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-foreground/60">Sales</p>
                <a
                  href="mailto:sales@scholarium.ai"
                  className="text-accent hover:text-accent/80 font-medium transition-colors"
                >
                  sales@scholarium.ai
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Office */}
          <Card className="animate-on-scroll opacity-0 group hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm animate-delay-200">
            <CardHeader className="text-center pb-3">
              <div className="mx-auto mb-4 p-4 rounded-2xl bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors w-fit">
                <MapPin className="w-8 h-8" />
              </div>
              <CardTitle className="text-xl font-semibold text-primary">
                Office
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="font-medium text-foreground mb-1">ScholariumAI, Inc.</p>
              <p className="text-foreground/70">125 CambridgePark Drive</p>
              <p className="text-foreground/70">Cambridge, MA 02140</p>
              <p className="text-foreground/70">United States</p>
            </CardContent>
          </Card>

          {/* Response Times */}
          <Card className="animate-on-scroll opacity-0 group hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm animate-delay-300">
            <CardHeader className="text-center pb-3">
              <div className="mx-auto mb-4 p-4 rounded-2xl bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors w-fit">
                <Clock className="w-8 h-8" />
              </div>
              <CardTitle className="text-xl font-semibold text-primary">
                Response Times
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-border/30">
                <span className="text-foreground/70">General inquiries</span>
                <span className="font-medium text-foreground">1-2 business days</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border/30">
                <span className="text-foreground/70">Support tickets</span>
                <span className="font-medium text-foreground">24 hours</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-foreground/70">Sales inquiries</span>
                <span className="font-medium text-foreground">Same business day</span>
              </div>
              <p className="text-xs text-foreground/50 mt-2">
                Priority support available for paid plans
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
