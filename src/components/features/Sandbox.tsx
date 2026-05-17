"use client";

import React, { useState } from "react";
import styles from "@/app/page.module.css";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Heading, Text } from "@/components/ui/Typography";

interface Preset {
  id: string;
  emoji: string;
  name: string;
  prompt: string;
  image: string;
  model: string;
  credits: string;
}

const PRESETS: Preset[] = [
  {
    id: "cosmic",
    emoji: "🌌",
    name: "Cosmic Portal",
    prompt: "A hyper-detailed cinematic stargate floating inside a glowing purple nebula cosmic storm, stardust reflection, photorealistic, 8k resolution.",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=800&auto=format&fit=crop",
    model: "Flux.1 Dev",
    credits: "0.0025 credits"
  },
  {
    id: "canyon",
    emoji: "🌋",
    name: "Obsidian Palace",
    prompt: "Epic ancient obsidian palace built atop a dramatic volcanic cliff peak, glowing red-orange lava rivers cascading down into a deep canyon, photorealistic.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    model: "SDXL Ultra",
    credits: "0.0018 credits"
  },
  {
    id: "cyber",
    emoji: "🤖",
    name: "Neo Tokyo Oasis",
    prompt: "Lush biological oasis inside a towering neon glass skyscraper dome in Neo-Tokyo, water streams cascading down glowing cyan server columns.",
    image: "https://images.unsplash.com/photo-1515621061946-eff1c2a352bd?q=80&w=800&auto=format&fit=crop",
    model: "Flux.1 Pro",
    credits: "0.0040 credits"
  }
];

export function Sandbox() {
  const [activePreset, setActivePreset] = useState<Preset>(PRESETS[0]);
  const [prompt, setPrompt] = useState(PRESETS[0].prompt);
  const [step, setStep] = useState<"idle" | "generating" | "completed">("idle");
  const [resultImage, setResultImage] = useState<string | null>(PRESETS[0].image);
  const [currentMeta, setCurrentMeta] = useState({ model: PRESETS[0].model, credits: PRESETS[0].credits });

  const handlePresetSelect = (preset: Preset) => {
    if (step === "generating") return;
    setActivePreset(preset);
    setPrompt(preset.prompt);
  };

  const handleGenerate = () => {
    if (step === "generating" || !prompt.trim()) return;

    setStep("generating");
    setResultImage(null);

    const selectedPreset = PRESETS.find(p => p.prompt === prompt) || {
      model: "Flux.1 Dev",
      credits: "0.0025 credits",
      image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop"
    };

    setCurrentMeta({
      model: selectedPreset.model,
      credits: selectedPreset.credits
    });

    // Simulate high-magic generation delay
    setTimeout(() => {
      setResultImage(selectedPreset.image);
      setStep("completed");
    }, 1800);
  };

  const handleReset = () => {
    setStep("idle");
    // Preserve current selection or prompt for convenience
  };

  return (
    <section id="sandbox" className={styles.sandboxContainer}>
      {/* 🎬 Loop video background (matching hero bg) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className={styles.heroBgVideo}
        style={{ opacity: 0.18 }}
      >
        <source
          src="/hero-bg.mp4"
          type="video/mp4"
        />
      </video>
      <div className={styles.heroBgOverlay} style={{ background: "rgba(9, 10, 15, 0.88)" }}></div>

      {/* 🔮 Ethereal breathing vermilion ambient aurora when generating assets */}
      <div className={`${styles.sandboxAmbientGlow} ${step === "generating" ? styles.sandboxAmbientGlowActive : ""}`} />

      {/* 🌌 Fixed full-viewport screen border vignette glow when generating assets */}
      <div className={`${styles.globalPageGlow} ${step === "generating" ? styles.globalPageGlowActive : ""}`} />

      <div className={styles.sandboxInner} style={{ position: "relative", zIndex: 10 }}>
        <Badge variant="gray">PLAYGROUND</Badge>
        <Heading level={2} style={{ marginTop: "1rem" }}>Playground</Heading>
        {step !== "completed" && (
          <Text style={{ marginTop: "0.8rem", maxWidth: "600px" }}>
            What would you like to create? Select a preset below or type your own custom prompt to experience instant multi-engine asset generation.
          </Text>
        )}

        {/* 🎬 Step 1: Idle Prompt Input State */}
        {step === "idle" && (
          <div className={styles.sandboxIdleContainer}>
            {/* Preset Buttons */}
            <div className={styles.presetContainer} style={{ justifyContent: "center" }}>
              {PRESETS.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => handlePresetSelect(preset)}
                  className={`${styles.presetTag} ${activePreset.id === preset.id && prompt === preset.prompt ? styles.presetTagActive : ""}`}
                >
                  {preset.emoji} {preset.name}
                </button>
              ))}
            </div>

            {/* Wide Input Bar */}
            <div className={styles.sandboxInputWrapper}>
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe what you want to create..."
                className={styles.sandboxInput}
              />
              <Button 
                onClick={handleGenerate} 
                style={{ padding: "0.6rem 1.4rem", fontSize: "0.85rem" }}
                showArrow={false}
              >
                Generate
              </Button>
            </div>

            {/* Premium Info Badges */}
            <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", alignItems: "center", marginTop: "0.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.75rem", color: "rgba(255, 255, 255, 0.4)" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#ff4500" }} />
                Instant multi-model synthesis
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.75rem", color: "rgba(255, 255, 255, 0.4)" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#ff4500" }} />
                Real-time credit routing
              </div>
            </div>
          </div>
        )}

        {/* ⚡ Step 2: Generating Simulation State */}
        {step === "generating" && (
          <div className={styles.sandboxGeneratingContainer}>
            <div className={styles.outcomeLoadingGlow} style={{ position: "static", width: "48px", height: "48px", borderRadius: "50%", background: "rgba(255, 69, 0, 0.15)", border: "2px solid #ff4500", borderTopColor: "transparent", animation: "bentoShimmer 1.2s infinite linear" }} />
            <span style={{ fontFamily: "var(--font-geist-mono, monospace)", color: "#ff4500", fontSize: "0.8rem", letterSpacing: "2px" }}>
              SYNTHESIZING IMAGINATION...
            </span>
          </div>
        )}

        {/* 🏆 Step 3: Success Visual Outcome State */}
        {step === "completed" && resultImage && (
          <div className={styles.sandboxCompletedContainer}>
            {/* Show original prompt beautifully mapped */}
            <div style={{ textAlign: "center", maxWidth: "550px" }}>
              <span style={{ fontSize: "0.7rem", color: "#ff4500", letterSpacing: "1.5px", textTransform: "uppercase", fontFamily: "var(--font-geist-mono, monospace)" }}>
                PROMPT SYNTHESIZED
              </span>
              <p style={{ fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.75)", fontStyle: "italic", marginTop: "0.4rem", fontFamily: "var(--font-geist-mono, monospace)" }}>
                "{prompt}"
              </p>
            </div>

            {/* Breathtaking Outcome Box */}
            <div className={styles.outcomeBox}>
              <div className={styles.outcomeMeta}>
                {currentMeta.model} • {currentMeta.credits}
              </div>
              <img 
                src={resultImage} 
                alt="Generated asset outcome" 
                className={styles.outcomeImg}
              />
            </div>

            {/* Direct High-Converting Action CTAs */}
            <div className={styles.actionButtonRow}>
              <Button 
                onClick={() => window.location.hash = "#benefits"}
                style={{ flex: 1, height: "40px", padding: "0 1.6rem", fontSize: "0.85rem", justifyContent: "center", alignItems: "center", borderRadius: "8px" }}
                showArrow={true}
              >
                I love this
              </Button>
              <button 
                onClick={handleReset}
                style={{ flex: 1, height: "40px", padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", borderRadius: "8px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "white", cursor: "pointer", fontSize: "0.85rem" }}
              >
                🔄 Create new
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
