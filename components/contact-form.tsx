"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Building2, HeadphonesIcon, HandshakeIcon, Newspaper } from "lucide-react";

const contactTypes = [
  {
    icon: Building2,
    title: "Sales & Institutional Inquiries",
    description: "Interested in ScholariumAI for your department or institution? Our solutions team can provide customized quotes, arrange demos, and discuss your specific needs.",
  },
  {
    icon: HeadphonesIcon,
    title: "Technical Support",
    description: "Already a user with questions? Email our support team directly from your account for the fastest response, or use the form below.",
  },
  {
    icon: HandshakeIcon,
    title: "Partnerships & Integrations",
    description: "Building a tool that could integrate with ScholariumAI? We'd love to explore how our platforms could work together.",
  },
  {
    icon: Newspaper,
    title: "Press & Media",
    description: "For press inquiries, speaking engagements, or expert commentary on AI in research, contact our communications team.",
  },
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    institution: "",
    inquiryType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to an API
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-primary mb-4">
            Get in Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-6 rounded-full" />
        </div>

        {/* Contact type cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {contactTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-primary">
                      {type.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70 leading-relaxed text-sm">
                    {type.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Contact form */}
        <Card className="max-w-3xl mx-auto border-border/50 bg-card/80 backdrop-blur-sm shadow-xl">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-2xl font-serif text-primary">
              Contact Form
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="border-border/50 focus:border-accent"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="border-border/50 focus:border-accent"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="institution" className="text-sm font-medium text-foreground">
                  Institution/Organization
                </label>
                <Input
                  id="institution"
                  type="text"
                  placeholder="Your university or organization"
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  className="border-border/50 focus:border-accent"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="inquiry-type" className="text-sm font-medium text-foreground">
                  I'm inquiring about
                </label>
                <Select
                  value={formData.inquiryType}
                  onValueChange={(value) => setFormData({ ...formData, inquiryType: value })}
                >
                  <SelectTrigger className="border-border/50 focus:border-accent">
                    <SelectValue placeholder="Select inquiry type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sales">Sales / Institutional Pricing</SelectItem>
                    <SelectItem value="support">Technical Support</SelectItem>
                    <SelectItem value="partnerships">Partnerships</SelectItem>
                    <SelectItem value="press">Press / Media</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us how we can help..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="border-border/50 focus:border-accent resize-none"
                />
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
