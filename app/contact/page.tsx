import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactHero } from "@/components/contact-hero";
import { ContactForm } from "@/components/contact-form";
import { ContactInfo } from "@/components/contact-info";
import { CTASection } from "@/components/cta-section";

export const metadata = {
  title: "Contact | ScholariumAI",
  description: "Get in touch with the ScholariumAI team for sales inquiries, support, or partnership opportunities.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactHero />
        <ContactForm />
        <ContactInfo />
        <CTASection
          title="Ready to Start?"
          description="Skip the queue and start your free trial now—no need to wait for a response."
          buttonText="Start Free Trial"
          buttonHref="/pricing"
        />
      </main>
      <Footer />
    </>
  );
}
