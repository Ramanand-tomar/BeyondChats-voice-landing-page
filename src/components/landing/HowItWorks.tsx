import { useEffect, useRef } from 'react';
import { Link2, Settings, Rocket, Play } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import demoVideo from '@/assets/chatbot-recording.mp4';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: Link2,
    number: '01',
    title: 'Connect',
    description: 'Integrate beyondChats with your existing platform using our simple API or pre-built integrations. Works with all major frameworks.',
    color: 'primary',
  },
  {
    icon: Settings,
    number: '02',
    title: 'Customize',
    description: 'Train the AI on your business data, set up custom responses, and configure voice preferences to match your brand.',
    color: 'secondary',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Deploy',
    description: 'Go live in minutes. Your AI voice assistant is ready to handle customer conversations 24/7 with zero maintenance.',
    color: 'primary',
  },
];

const HowItWorks = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

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

    // Animate the connecting line
    gsap.fromTo(
      lineRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: stepsRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Animate steps
    const stepElements = stepsRef.current?.querySelectorAll('.step-card');
    if (stepElements) {
      gsap.fromTo(
        stepElements,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: stepsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-24" id="how-it-works">
      <div className="container mx-auto px-4">
        <div ref={headingRef} className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Get Started in{' '}
            <span className="gradient-text">Three Simple Steps</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From integration to deployment, set up your AI voice assistant in minutes, not months.
          </p>
        </div>

        <div ref={stepsRef} className="relative">
          {/* Connecting Line */}
          <div
            ref={lineRef}
            className="hidden lg:block absolute top-24 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary origin-left"
            style={{ transform: 'scaleX(0)' }}
          />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="step-card relative text-center group"
              >
                {/* Number Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-6xl font-bold text-muted/20 group-hover:text-primary/20 transition-colors">
                  {step.number}
                </div>

                {/* Icon Circle */}
                <div
                  className={`relative z-10 inline-flex p-6 rounded-2xl bg-gradient-to-br ${
                    step.color === 'primary'
                      ? 'from-primary to-primary/50'
                      : 'from-secondary to-secondary/50'
                  } mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <step.icon className="h-8 w-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground max-w-xs mx-auto">
                  {step.description}
                </p>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 -right-6 text-4xl text-muted-foreground/30">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Demo Video Section */}
        <div className="mt-20 relative rounded-2xl overflow-hidden bg-gradient-to-r from-primary/10 to-secondary/10 border border-border/50 p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                See It in Action
              </h3>
              <p className="text-muted-foreground mb-6">
                Watch how businesses are using beyondChats to transform their customer interactions
                with real-time voice AI technology.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span>Live transcription</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                  <span>Instant responses</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span>Natural conversations</span>
                </div>
              </div>
            </div>

            {/* Demo Video */}
            <div className="relative aspect-video rounded-xl overflow-hidden bg-muted border border-border shadow-2xl group/video cursor-pointer">
              <video
                src={demoVideo}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-background/20 group-hover/video:bg-transparent transition-colors duration-500" />
              
              {/* Floating Play Indicator */}
              <div className="absolute bottom-4 left-4 flex items-center gap-3 bg-background/80 backdrop-blur-md px-4 py-2 rounded-full border border-border shadow-lg">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-medium">Demo Recording</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
