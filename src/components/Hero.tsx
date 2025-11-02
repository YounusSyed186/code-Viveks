"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/logo.png";
import { clubInfo } from "@/data/content";
import { memo } from "react";

const Hero = memo(() => {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-2rem)] sm:min-h-screen flex items-center justify-center overflow-hidden pt-10 md:pt-0 bg-background text-foreground transition-colors duration-700 p-0"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[16rem] sm:w-[24rem] md:w-[28rem] h-[16rem] sm:h-[24rem] md:h-[28rem] bg-primary/15 blur-[80px] sm:blur-[120px] rounded-full animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-[16rem] sm:w-[24rem] md:w-[28rem] h-[16rem] sm:h-[24rem] md:h-[28rem] bg-secondary/15 blur-[80px] sm:blur-[120px] rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 md:space-y-8 animate-slide-up text-center lg:text-left">
            <div className="inline-flex items-center gap-2 glass rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm shadow-md neon-border">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
              <span className="tracking-wide text-foreground/90">
                SVIT's Premier Coding Club
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gradient leading-tight drop-shadow-glow">
              {clubInfo.hero.title}
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground">
              {clubInfo.hero.subtitle}
            </p>

            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {clubInfo.hero.description}
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 justify-center lg:justify-start">
              {clubInfo.hero.stats.map((stat, index) => (
                <div
                  key={`stat-${index}-${stat.label}`}
                  className="glass-strong rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-center shadow-lg shadow-black/10 hover:scale-[1.03] transition-transform duration-300 neon-border flex-1 min-w-[120px] sm:min-w-0 sm:flex-initial"
                  data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() =>
                  window.open(clubInfo.contact.googleForm, "_blank")
                }
                className="bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.05] transition-all w-full sm:w-auto"
                data-testid="button-apply-now"
              >
                Apply Now
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="glass border-primary/40 text-foreground font-medium text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl hover:bg-primary/10 transition-colors w-full sm:w-auto"
                data-testid="button-learn-more"
              >
                Learn More
              </Button>
            </div>
          </div>

          <div
            className="relative animate-fade-in order-first lg:order-last"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative rounded-2xl overflow-hidden neon-border glass-strong shadow-2xl max-w-md mx-auto lg:max-w-none">
              <img
                src={heroImage}
                alt="CODE VIVEKS Logo - Futuristic coding technology"
                className="w-full h-auto object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>

            <div className="absolute -top-3 -right-3 sm:-top-5 sm:-right-5 glass-strong rounded-xl p-2 sm:p-3 neon-border-secondary animate-float text-xs sm:text-sm">
              <div className="font-semibold text-secondary">
                5 Teams
              </div>
            </div>

            <div
              className="absolute -bottom-3 -left-3 sm:-bottom-5 sm:-left-5 glass-strong rounded-xl p-2 sm:p-3 neon-border animate-float text-xs sm:text-sm"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="font-semibold text-primary">
                150+ Members
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;
