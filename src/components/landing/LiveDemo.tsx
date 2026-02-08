import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mic, MicOff, Volume2, MessageSquare } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LiveDemo = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isListening, setIsListening] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'ai', text: "Hello! I'm your AI voice assistant. How can I help you today?" },
  ]);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  const toggleListening = () => {
    setIsListening(!isListening);
    if (!isListening) {
      // Simulate AI conversation
      setTimeout(() => {
        setMessages((prev) => [...prev, { type: 'user', text: "What are your main features?" }]);
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              type: 'ai',
              text: "I offer real-time transcription with 99% accuracy, support for 50+ languages, and custom AI training for your business needs.",
            },
          ]);
          setIsListening(false);
        }, 1500);
      }, 2000);
    }
  };

  return (
    <section ref={sectionRef} className="py-24 bg-muted/30" id="demo">
      <div className="container mx-auto px-4">
        <div ref={contentRef}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Live Demo
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Experience the{' '}
              <span className="gradient-text">Power of Voice AI</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Try our interactive demo and see how beyondChats can transform your customer conversations.
            </p>
          </div>

          {/* Demo Interface */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl border border-border/50 shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary to-secondary p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-foreground">beyondChats AI</h3>
                    <p className="text-xs text-primary-foreground/80">Online • Ready to assist</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm text-primary-foreground/80">Live</span>
                </div>
              </div>

              {/* Chat Area */}
              <div className="h-80 p-6 overflow-y-auto space-y-4 bg-background/50">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-4 rounded-2xl ${
                        message.type === 'user'
                          ? 'bg-primary text-primary-foreground rounded-br-md'
                          : 'bg-muted rounded-bl-md'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                ))}

                {/* Typing Indicator */}
                {isListening && (
                  <div className="flex justify-start">
                    <div className="bg-muted p-4 rounded-2xl rounded-bl-md">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Voice Controls */}
              <div className="p-6 border-t border-border bg-card">
                <div className="flex items-center justify-center gap-4">
                  {/* Waveform Visualization */}
                  <div className="flex items-center gap-1 h-10">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-1 rounded-full transition-all duration-150 ${
                          isListening
                            ? 'bg-gradient-to-t from-primary to-secondary animate-wave'
                            : 'bg-muted h-2'
                        }`}
                        style={{
                          height: isListening ? `${Math.random() * 30 + 10}px` : '8px',
                          animationDelay: `${i * 0.05}s`,
                        }}
                      />
                    ))}
                  </div>

                  {/* Mic Button */}
                  <Button
                    size="lg"
                    className={`rounded-full w-16 h-16 ${
                      isListening
                        ? 'bg-destructive hover:bg-destructive/90 animate-pulse'
                        : 'bg-gradient-to-r from-primary to-secondary hover:opacity-90'
                    }`}
                    onClick={toggleListening}
                  >
                    {isListening ? (
                      <MicOff className="h-6 w-6" />
                    ) : (
                      <Mic className="h-6 w-6" />
                    )}
                  </Button>

                  {/* Waveform Visualization (right side) */}
                  <div className="flex items-center gap-1 h-10">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-1 rounded-full transition-all duration-150 ${
                          isListening
                            ? 'bg-gradient-to-t from-secondary to-primary animate-wave'
                            : 'bg-muted h-2'
                        }`}
                        style={{
                          height: isListening ? `${Math.random() * 30 + 10}px` : '8px',
                          animationDelay: `${i * 0.05}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                <p className="text-center text-sm text-muted-foreground mt-4">
                  {isListening ? 'Listening... Click to stop' : 'Click the microphone to start speaking'}
                </p>
              </div>
            </div>

            {/* Volume Control */}
            <div className="flex justify-center mt-6">
              <Button variant="outline" size="sm" className="gap-2">
                <Volume2 className="h-4 w-4" />
                Enable Audio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemo;
