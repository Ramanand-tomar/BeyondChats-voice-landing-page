import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, Sparkles, Zap } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import multiAgentImage from '/Multi-ai-agent.avif';

gsap.registerPlugin(ScrollTrigger);

const MultiAgent = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.8, rotate: -5 },
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 1.2,
          ease: 'elastic.out(1, 0.75)',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden bg-background">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content side */}
          <div ref={contentRef} className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20">
              <Sparkles className="h-4 w-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">Advanced Orchestration</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Scale with <span className="gradient-text">Multi-AI Agents</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Don't settle for a single assistant. Our platform allows you to deploy multiple specialized AI agents that collaborate in real-time. From technical support to sales orchestration, these agents work together to tackle complex workflows with human-like precision.
            </p>

            <ul className="space-y-4">
              {[
                { icon: Bot, text: 'Specialized domain expertise per agent' },
                { icon: Zap, text: 'Instant coordination and hand-offs' },
                { icon: Sparkles, text: 'Context-aware collaborative intelligence' },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-muted-foreground">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                Explore Agent Swarms
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Image side */}
          <div ref={imageRef} className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden border border-border shadow-2xl bg-card">
              <img
                src={multiAgentImage}
                alt="Multi AI Agent Collaboration Network"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-transparent pointer-events-none" />
            </div>
            
            {/* Ambient light effect */}
            <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-[3rem] -z-10 animate-pulse-slow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiAgent;
