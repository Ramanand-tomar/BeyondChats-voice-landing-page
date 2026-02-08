import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useCountUp } from '@/hooks/useGSAP';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO at TechFlow',
    content: 'beyondChats transformed our customer support. Response times dropped by 60% and customer satisfaction soared. The real-time transcription is incredibly accurate.',
    rating: 5,
    avatar: 'SJ',
  },
  {
    name: 'Michael Chen',
    role: 'Founder at GlobalReach',
    content: 'The multi-language support is a game-changer for our international team. We now serve customers in 30+ languages seamlessly with one platform.',
    rating: 5,
    avatar: 'MC',
  },
  {
    name: 'Emily Rodriguez',
    role: 'VP Operations at ScaleUp',
    content: 'Implementation was incredibly smooth. We went from sign-up to live in under a week. The custom training feature adapted perfectly to our industry terminology.',
    rating: 5,
    avatar: 'ER',
  },
];

const logos = [
  'TechFlow', 'GlobalReach', 'ScaleUp', 'DataDrive', 'CloudFirst', 'InnovateCo',
];

const stats = [
  { value: 1000000, label: 'Conversations Handled', suffix: '+' },
  { value: 50, label: 'Languages Supported', suffix: '+' },
  { value: 99.9, label: 'Uptime SLA', suffix: '%' },
  { value: 500, label: 'Enterprise Clients', suffix: '+' },
];

const StatCard = ({ value, label, suffix }: { value: number; label: string; suffix: string }) => {
  const countRef = useCountUp(value);
  
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold gradient-text">
        <span ref={countRef}>0</span>{suffix}
      </div>
      <p className="text-sm text-muted-foreground mt-1">{label}</p>
    </div>
  );
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

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

    const cards = testimonialsRef.current?.children;
    if (cards) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40, rotateY: 15 },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: testimonialsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    gsap.fromTo(
      statsRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-24" id="testimonials">
      <div className="container mx-auto px-4">
        <div ref={headingRef} className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Trusted by{' '}
            <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See what our customers have to say about transforming their business with beyondChats.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div
          ref={testimonialsRef}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="relative overflow-hidden hover-lift border-border/50 bg-card"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-primary/20 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6">"{testimonial.content}"</p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-sm font-bold text-primary-foreground">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Logos */}
        <div className="mb-16">
          <p className="text-center text-sm text-muted-foreground mb-8">
            TRUSTED BY LEADING COMPANIES WORLDWIDE
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {logos.map((logo) => (
              <span
                key={logo}
                className="text-xl font-bold text-muted-foreground hover:text-foreground transition-colors"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 border border-border/50"
        >
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
