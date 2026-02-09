import { useEffect, useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: 'How accurate is the real-time transcription?',
    answer: 'Our AI achieves 99% accuracy for most languages and accents. The system continuously learns and improves from interactions, and you can further enhance accuracy by training it on your specific terminology and use cases.',
  },
  {
    question: 'Which languages are supported?',
    answer: 'We currently support 50+ languages including English, Spanish, French, German, Chinese, Japanese, Portuguese, Arabic, Hindi, and many more. New languages are added regularly based on customer demand.',
  },
  {
    question: 'Can I train the AI on my business data?',
    answer: 'Yes! You can train the AI on your specific business context. Simply upload your documentation, FAQs, product information, and conversation logs to create a personalized AI that understands your business.',
  },
  {
    question: 'How long does integration take?',
    answer: 'Most integrations can be completed in under a day. We provide comprehensive SDKs for all major platforms, detailed API documentation, and pre-built integrations for popular tools like Salesforce, Zendesk, and Intercom.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. We are SOC 2 Type II certified and use end-to-end encryption for all data. Your conversations and training data are never shared or used to train other models. We also offer on-premise deployment for Enterprise customers.',
  },
  {
    question: 'Are there any usage limits?',
    answer: "We'll notify you if you're approaching high usage levels. You can always scale your usage as your business grows. We ensure seamless service for all our customers.",
  },
  {
    question: 'How can I get started?',
    answer: 'You can get started for free today! No credit card is required to try out our platform. Simply click on the "Try out for free" button to begin.',
  },
  {
    question: 'Can I use beyondChats for phone calls?',
    answer: 'Yes, beyondChats can be integrated with phone systems through our telephony API. You can use it for inbound and outbound calls, IVR systems, and call center automation.',
  },
];

const FAQ = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      accordionRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: accordionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-24" id="faq">
      <div className="container mx-auto px-4">
        <div ref={headingRef} className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Got questions? We've got answers. If you can't find what you're looking for, feel free to contact our support team.
          </p>
        </div>

        <div ref={accordionRef} className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border/50 rounded-lg px-6 bg-card data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
