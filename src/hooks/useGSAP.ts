import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGSAP = () => {
  const registerScrollAnimation = (
    element: string | Element,
    animation: gsap.TweenVars,
    triggerOptions?: ScrollTrigger.Vars
  ) => {
    gsap.fromTo(
      element,
      { opacity: 0, y: 50, ...animation },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          end: 'bottom 15%',
          toggleActions: 'play none none reverse',
          ...triggerOptions,
        },
      }
    );
  };

  const staggerAnimation = (
    elements: string | Element[],
    staggerAmount: number = 0.1
  ) => {
    gsap.fromTo(
      elements,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: staggerAmount,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: elements,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  };

  const scaleInAnimation = (element: string | Element) => {
    gsap.fromTo(
      element,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  };

  const parallaxAnimation = (element: string | Element, speed: number = 0.5) => {
    gsap.to(element, {
      yPercent: -30 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  };

  return {
    registerScrollAnimation,
    staggerAnimation,
    scaleInAnimation,
    parallaxAnimation,
    gsap,
    ScrollTrigger,
  };
};

export const useCountUp = (end: number, duration: number = 2) => {
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!countRef.current) return;

    const element = countRef.current;
    
    gsap.fromTo(
      { value: 0 },
      { value: end },
      {
        duration,
        ease: 'power2.out',
        onUpdate: function () {
          element.textContent = Math.round(this.targets()[0].value).toLocaleString();
        },
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, [end, duration]);

  return countRef;
};

export default useGSAP;
