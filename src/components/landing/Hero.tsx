import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Play, ArrowRight, Shield, Zap, Globe } from 'lucide-react';
import gsap from 'gsap';
import Lottie from 'lottie-react';
import animationData from '@/assets/hero-animation.json';
import heroImage from '@/assets/hero-voice-ai.jpg';

const Waveform = () => (
  <div className="flex items-center justify-center gap-1 h-12">
    {Array.from({ length: 10 }).map((_, i) => (
      <div
        key={i}
        className="waveform-bar w-1 bg-gradient-to-t from-primary to-secondary rounded-full"
        style={{ animationDelay: `${i * 0.1}s` }}
      />
    ))}
  </div>
);

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      headlineRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8 }
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.4'
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.3'
      )
      .fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.8 },
        '-=0.4'
      )
      .fromTo(
        badgesRef.current?.children || [],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.4 },
        '-=0.4'
      );
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-50 dark:opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow delay-1000" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Waveform />
              <span className="text-sm font-medium text-primary">Voice AI Technology</span>
            </div>

            <h1
              ref={headlineRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Real-Time Voice AI for{' '}
              <span className="gradient-text">Seamless Conversations</span>
            </h1>

            <p
              ref={subtitleRef}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Transform customer interactions with our AI-powered voice assistant. 
              Real-time transcription, multi-language support, and custom training 
              tailored to your business needs.
            </p>

            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all group text-lg px-8"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 group">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Badges */}
            <div
              ref={badgesRef}
              className="flex flex-wrap gap-6 mt-10 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-5 w-5 text-primary" />
                <span>SOC 2 Certified</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Zap className="h-5 w-5 text-primary" />
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Globe className="h-5 w-5 text-primary" />
                <span>50+ Languages</span>
              </div>
            </div>
          </div>

          {/* Right Content - Lottie Animation */}
          <div ref={imageRef} className="relative flex justify-center items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-card/30 backdrop-blur-sm p-4 w-full min-h-[300px] flex items-center justify-center">
              <Lottie 
                animationData={animationData} 
                loop={true} 
                className="w-full h-auto max-w-[500px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border border-border hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">1M+</p>
                  <p className="text-sm text-muted-foreground">Conversations</p>
                </div>
              </div>
            </div>

            {/* Floating Language Card */}
            <div className="absolute -top-4 -right-4 bg-card p-4 rounded-xl shadow-lg border border-border hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Globe className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">50+</p>
                  <p className="text-sm text-muted-foreground">Languages</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
