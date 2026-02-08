import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Mic, Globe, Brain, Code, Zap, Shield } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lottie from 'lottie-react';

// Import Lottie Animations
import realTimeTranscriptionAnim from '@/assets/real-time-transcripting.json';
import multiLanguageAnim from '@/assets/multi-language-animation.json';
import customAiTrainingAnim from '@/assets/Custom-ai-training.json';
import seamlessIntegrationAnim from '@/assets/seamless-integration.json';
import lightningFastAnim from '@/assets/lighting-fast.json';
import enterpriseSecurityAnim from '@/assets/enterprise-security.json';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Mic,
    title: 'Real-Time Transcription',
    description: 'Convert speech to text instantly with 99% accuracy. Our AI processes audio in real-time, delivering transcriptions as you speak.',
    lottie: realTimeTranscriptionAnim,
    gradient: 'from-primary to-primary/50',
  },
  {
    icon: Globe,
    title: 'Multi-Language Support',
    description: 'Communicate globally with support for 50+ languages. Automatic language detection and seamless translation capabilities.',
    lottie: multiLanguageAnim,
    gradient: 'from-secondary to-secondary/50',
  },
  {
    icon: Brain,
    title: 'Custom AI Training',
    description: 'Train our AI on your business data, terminology, and workflows. Create a personalized assistant that understands your domain.',
    lottie: customAiTrainingAnim,
    gradient: 'from-primary to-secondary',
  },
  {
    icon: Code,
    title: 'Seamless Integration',
    description: 'Easy-to-use APIs and SDKs for all major platforms. Integrate voice AI into your existing applications in minutes.',
    lottie: seamlessIntegrationAnim,
    gradient: 'from-secondary to-primary',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Sub-100ms response times for natural conversations. Our infrastructure ensures minimal latency worldwide.',
    lottie: lightningFastAnim,
    gradient: 'from-primary to-primary/50',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SOC 2 Type II certified with end-to-end encryption. Your data is protected with enterprise-grade security.',
    lottie: enterpriseSecurityAnim,
    gradient: 'from-secondary to-secondary/50',
  },
];

const Features = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

    const cards = cardsRef.current?.children;
    if (cards) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-muted/30" id="features">
      <div className="container mx-auto px-4">
        <div ref={headingRef} className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need for{' '}
            <span className="gradient-text">Voice AI Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful features designed to transform how you interact with customers
            through intelligent voice technology.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className={`group relative overflow-hidden hover-lift border-border/50 bg-card ${
                index < 3 ? 'lg:col-span-1' : ''
              }`}
            >
              <CardContent className="p-6">
                {/* Icon */}
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4`}
                >
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-4">{feature.description}</p>

                {/* Lottie Animation */}
                {feature.lottie && (
                  <div className="mt-4 rounded-lg overflow-hidden bg-muted/20 flex items-center justify-center p-4 min-h-[160px]">
                    <Lottie
                      animationData={feature.lottie}
                      loop={true}
                      className="w-full h-40"
                    />
                  </div>
                )}

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
