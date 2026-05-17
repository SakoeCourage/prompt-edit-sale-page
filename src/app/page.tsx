"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "@/app/page.module.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/features/Hero";
import { HeroSteps } from "@/components/features/HeroSteps";
import { Features } from "@/components/features/Features";
import { Benefits } from "@/components/features/Benefits";
import { Partners } from "@/components/features/Partners";
import { Testimonials } from "@/components/features/Testimonials";
import { Sandbox } from "@/components/features/Sandbox";

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const outerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<any>(null);

  const sections = [
    { id: "hero", label: "Hero", component: <Hero /> },
    { id: "steps", label: "Why PromptEdit", component: <HeroSteps /> },
    { id: "features", label: "Workspaces", component: <Features /> },
    { id: "benefits", label: "Savings Flow", component: <Benefits /> },
    { id: "providers", label: "Model Providers", component: <Partners /> },
    { id: "testimonials", label: "Trusted By", component: <Testimonials /> },
    { id: "sandbox", label: "Playground", component: <Sandbox /> }
  ];

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const { gsap } = require("gsap");
    const { ScrollTrigger } = require("gsap/ScrollTrigger");
    const { ScrollToPlugin } = require("gsap/ScrollToPlugin");

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const outer = outerRef.current;
    const track = trackRef.current;
    if (!outer || !track) return;

    const slides = gsap.utils.toArray(`.${styles.sceneSection}`);
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      gsap.set(slides.slice(1), { yPercent: 100 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: outer,
          pin: true,
          pinSpacing: true,
          scrub: 0.15,
          start: "top top+=72",
          end: () => `+=${outer.offsetHeight * (sections.length - 1) * 1.8}`,
          snap: {
            snapTo: (value: number) => {
              const labelNames = Object.keys(tl.labels);
              const labelProgresses = labelNames.map(name => tl.labels[name] / tl.totalDuration());
              
              let isInsideOverflowScroll = false;
              
              slides.forEach((slide: any, idx: number) => {
                const activeLabel = `slide_${idx}_active`;
                const endLabel = `slide_${idx}_end`;
                
                if (tl.labels[activeLabel] !== undefined && tl.labels[endLabel] !== undefined) {
                  const startProg = tl.labels[activeLabel] / tl.totalDuration();
                  const endProg = tl.labels[endLabel] / tl.totalDuration();
                  
                  if (value >= startProg + 0.015 && value <= endProg - 0.015) {
                    isInsideOverflowScroll = true;
                  }
                }
              });
              
              if (isInsideOverflowScroll) {
                return value;
              }
              
              let nearestProg = labelProgresses[0];
              let minDistance = Infinity;
              
              labelProgresses.forEach(prog => {
                const dist = Math.abs(prog - value);
                if (dist < minDistance) {
                  minDistance = dist;
                  nearestProg = prog;
                }
              });
              
              return nearestProg;
            },
            duration: { min: 0.2, max: 0.5 },
            delay: 0.05,
            ease: "power1.inOut"
          },
          invalidateOnRefresh: true,
          onUpdate: (self: any) => {
            const progress = self.progress;
            const labelNames = Object.keys(tl.labels);
            let nearestLabel = labelNames[0];
            let minDistance = Infinity;

            labelNames.forEach((label) => {
              const labelProgress = tl.labels[label] / tl.totalDuration();
              const distance = Math.abs(progress - labelProgress);
              if (distance < minDistance) {
                minDistance = distance;
                nearestLabel = label;
              }
            });

            const indexMatch = nearestLabel.match(/slide_(\d+)/);
            if (indexMatch) {
              const index = parseInt(indexMatch[1], 10);
              const isAtFooter = window.scrollY >= (document.documentElement.scrollHeight - window.innerHeight - 120);
              if (!isAtFooter) {
                setActiveSection(index);
              }
            }
          }
        }
      });

      tl.addLabel("slide_0", 0);

      slides.forEach((slide: any, idx: number) => {
        if (idx === 0) return;
        
        tl.addLabel("slide_" + idx);

        tl.to(slide, {
          yPercent: 0,
          ease: "none",
          duration: 1
        }, "slide_" + idx)
        .to(slides[idx - 1], {
          scale: 0.94,
          opacity: 0.25,
          ease: "none",
          duration: 1
        }, "slide_" + idx);

        if (idx === 1) {
          const orangeCard = slides[0].querySelector(`.${styles.cardOrange}`);
          const silverCard = slides[0].querySelector(`.${styles.cardSilver}`);
          const blackCard = slides[0].querySelector(`.${styles.cardBlack}`);
          
          if (orangeCard && silverCard && blackCard) {
            tl.to(orangeCard, {
              x: 50,
              y: 40,
              rotate: 16,
              ease: "none",
              duration: 1
            }, "slide_1")
            .to(silverCard, {
              x: 0,
              y: 0,
              rotate: 2,
              ease: "none",
              duration: 1
            }, "slide_1")
            .to(blackCard, {
              x: -60,
              y: -50,
              rotate: -14,
              ease: "none",
              duration: 1
            }, "slide_1");
          }
        }

        tl.addLabel("slide_" + idx + "_active");

        if (idx === 1) {
          const stepsLine = slide.querySelector(`.${styles.stepsProgressLineActive}`);
          const stepCards = slide.querySelectorAll(`.${styles.horizontalStepCard}`);
          
          if (stepsLine) {
            tl.to(stepsLine, {
              scaleX: 1,
              ease: "none",
              duration: 1.5
            }, "slide_1_active");

            if (stepCards.length === 3) {
              tl.to(stepCards[0], {
                borderColor: "rgba(237, 28, 36, 0.8)",
                backgroundColor: "rgba(237, 28, 36, 0.08)",
                boxShadow: "0 8px 24px rgba(237, 28, 36, 0.12)",
                y: -4,
                ease: "power1.out",
                duration: 0.2
              }, "slide_1_active+=0.15")
              .to(stepCards[1], {
                borderColor: "rgba(237, 28, 36, 0.8)",
                backgroundColor: "rgba(237, 28, 36, 0.08)",
                boxShadow: "0 8px 24px rgba(237, 28, 36, 0.12)",
                y: -4,
                ease: "power1.out",
                duration: 0.2
              }, "slide_1_active+=0.55")
              .to(stepCards[2], {
                borderColor: "rgba(237, 28, 36, 0.8)",
                backgroundColor: "rgba(237, 28, 36, 0.08)",
                boxShadow: "0 8px 24px rgba(237, 28, 36, 0.12)",
                y: -4,
                ease: "power1.out",
                duration: 0.2
              }, "slide_1_active+=0.95");
            }
          }
          
          tl.addLabel("slide_1_end", "slide_1_active+=1.5");
        }

        if (idx > 1) {
          const sectionElement = slide.firstElementChild as HTMLElement;
          if (sectionElement) {
            const innerContent = sectionElement.firstElementChild as HTMLElement;
            if (innerContent) {
              const computedStyle = window.getComputedStyle(sectionElement);
              const paddingTop = parseFloat(computedStyle.paddingTop) || 0;
              const paddingBottom = parseFloat(computedStyle.paddingBottom) || 0;
              
              const availableHeight = outer.offsetHeight - paddingTop - paddingBottom;
              const overflow = innerContent.offsetHeight - availableHeight;
              
              if (overflow > 0) {
                tl.to(innerContent, {
                  y: -overflow,
                  ease: "none",
                  duration: 1.5
                }, "slide_" + idx + "_active");
                
                tl.addLabel("slide_" + idx + "_end", "slide_" + idx + "_active+=1.5");
              }
            }
          }
        }
      });

      scrollTriggerRef.current = tl.scrollTrigger;
    });

    ScrollTrigger.refresh();

    return () => {
      mm.revert();
    };
  }, [sections.length]);

  useEffect(() => {
    const isMobile = window.innerWidth < 1024;
    if (!isMobile) return;

    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -45% 0px",
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const idx = sections.findIndex(sec => sec.id === id);
          if (idx !== -1) {
            setActiveSection(idx);
          }
        }
      });
    }, observerOptions);

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.slice(1);
        const idx = sections.findIndex(sec => sec.id === targetId || (targetId === "" && sec.id === "hero"));
        if (idx !== -1) {
          scrollToSection(idx);
        } else if (href === "#") {
          scrollToSection(0);
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, [sections]);

  useEffect(() => {
    const handleWindowScroll = () => {
      const scrollPos = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollPos >= docHeight - 120) {
        setActiveSection(sections.length);
      }
    };
    window.addEventListener("scroll", handleWindowScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, [sections.length]);

  const scrollToSection = (index: number) => {
    const trigger = scrollTriggerRef.current;
    const { gsap } = require("gsap");

    if (!trigger) {
      const sectionId = sections[index]?.id;
      if (sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
          const navbarOffset = window.innerWidth < 1024 ? 56 : 72;
          gsap.to(window, {
            scrollTo: element.offsetTop - navbarOffset,
            duration: 0.85,
            ease: "power2.out"
          });
        }
      }
      setActiveSection(index);
      return;
    }
    
    const targetLabel = index === 0 ? "slide_0" : `slide_${index}_active`;
    const labelProgress = trigger.animation.labels[targetLabel] / trigger.animation.totalDuration();
    
    const start = trigger.start;
    const end = trigger.end;
    const distance = end - start;
    const targetScroll = start + labelProgress * distance;

    gsap.to(window, {
      scrollTo: targetScroll,
      duration: 0.85,
      ease: "power2.out"
    });
    setActiveSection(index);
  };

  const scrollToFooter = () => {
    const { gsap } = require("gsap");
    gsap.to(window, {
      scrollTo: document.documentElement.scrollHeight,
      duration: 1.0,
      ease: "power2.out"
    });
    setActiveSection(sections.length);
  };

  return (
    <div className={styles.container}>
      <Navbar />

      <div ref={outerRef} className={styles.horizontalOuterContainer}>
        <div ref={trackRef} className={styles.viewportSceneContainer}>
          {sections.map((sec, idx) => (
            <div
              key={sec.id}
              id={sec.id}
              className={styles.sceneSection}
              style={{ zIndex: idx + 1 }}
            >
              {sec.component}
            </div>
          ))}
        </div>
      </div>

      <div ref={footerRef} className={styles.footerSection}>
        <Footer />
      </div>

      <div className={styles.dotNavigation}>
        {sections.map((sec, idx) => (
          <button
            key={sec.id}
            className={`${styles.navDot} ${activeSection === idx ? styles.navDotActive : ""}`}
            onClick={() => scrollToSection(idx)}
            aria-label={`Scroll to ${sec.label}`}
          >
            <span className={styles.dotTooltip}>{sec.label}</span>
          </button>
        ))}
        <button
          className={`${styles.navDot} ${activeSection === sections.length ? styles.navDotActive : ""}`}
          onClick={scrollToFooter}
          aria-label="Scroll to Footer"
        >
          <span className={styles.dotTooltip}>Footer</span>
        </button>
      </div>
    </div>
  );
}
