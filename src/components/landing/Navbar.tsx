import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Menu, Moon, Sun, Mic, Zap, Globe, Brain, Code, Building, Users, BookOpen, HelpCircle, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';
import useTheme from '@/hooks/useTheme';

const products = [
  { title: 'Voice AI Assistant', description: 'Real-time voice conversations with AI', icon: Mic, href: '#' },
  { title: 'Real-Time Transcription', description: 'Instant speech-to-text conversion', icon: Zap, href: '#' },
  { title: 'Multi-Language Support', description: 'Support for 50+ languages', icon: Globe, href: '#' },
  { title: 'Custom AI Training', description: 'Train on your business data', icon: Brain, href: '#' },
];

const solutions = [
  { title: 'Enterprise', description: 'Solutions for large organizations', icon: Building, href: '#' },
  { title: 'Startups', description: 'Scalable plans for growing teams', icon: Zap, href: '#' },
  { title: 'Developers', description: 'APIs and SDKs for integration', icon: Code, href: '#' },
  { title: 'Teams', description: 'Collaboration features for teams', icon: Users, href: '#' },
];

const resources = [
  { title: 'Documentation', description: 'Guides and API references', icon: BookOpen, href: '#' },
  { title: 'Help Center', description: 'FAQs and support articles', icon: HelpCircle, href: '#' },
  { title: 'Blog', description: 'Latest news and updates', icon: FileText, href: '#' },
];

const ListItem = ({ title, description, icon: Icon, href }: { title: string; description: string; icon: React.ElementType; href: string }) => (
  <li>
    <NavigationMenuLink asChild>
      <a
        href={href}
        className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
      >
        <div className="flex items-center gap-2">
          <Icon className="h-4 w-4 text-primary" />
          <div className="text-sm font-medium leading-none">{title}</div>
        </div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {description}
        </p>
      </a>
    </NavigationMenuLink>
  </li>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-7',
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="relative h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Mic className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold gradient-text">beyondChats</span>
          </a>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 bg-popover">
                    {products.map((item) => (
                      <ListItem key={item.title} {...item} />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 bg-popover">
                    {solutions.map((item) => (
                      <ListItem key={item.title} {...item} />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-2 p-4 bg-popover">
                    {resources.map((item) => (
                      <ListItem key={item.title} {...item} />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#pricing"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
                >
                  Pricing
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            <div className="hidden md:flex items-center gap-2">
              <Button variant="ghost">Sign In</Button>
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col gap-6 mt-8">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Mic className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <span className="text-xl font-bold gradient-text">beyondChats</span>
                  </div>

                  <nav className="flex flex-col gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-muted-foreground">Products</h4>
                      {products.map((item) => (
                        <a
                          key={item.title}
                          href={item.href}
                          className="flex items-center gap-2 py-2 text-sm hover:text-primary transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          <item.icon className="h-4 w-4" />
                          {item.title}
                        </a>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-muted-foreground">Solutions</h4>
                      {solutions.map((item) => (
                        <a
                          key={item.title}
                          href={item.href}
                          className="flex items-center gap-2 py-2 text-sm hover:text-primary transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          <item.icon className="h-4 w-4" />
                          {item.title}
                        </a>
                      ))}
                    </div>

                    <a href="#pricing" className="py-2 font-medium" onClick={() => setMobileOpen(false)}>
                      Pricing
                    </a>
                  </nav>

                  <div className="flex flex-col gap-2 mt-4">
                    <Button variant="outline" className="w-full">Sign In</Button>
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                      Get Started
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
