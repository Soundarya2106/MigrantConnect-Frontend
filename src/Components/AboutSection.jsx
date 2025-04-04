"use client";
import React from "react";
import styles from "../DesignFiles/AboutSection.module.css";
import { HeroSection } from "../Components/AboutHeroSection";
import { FlipCard } from "../Components/FilpCard";

export function AboutSection() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;800&family=Pacifico&display=swap"
        rel="stylesheet"
      />
      <main className={styles.aboutContainer} id="about">
        <HeroSection />
        <section className={styles.cardsContainer}>
          <FlipCard
            type="mission"
            image="https://cdn.builder.io/api/v1/image/assets/TEMP/9056db57ddfa3b68497d429b02bf3cc9fe60c80a?placeholderIfAbsent=true"
            altText="Mission illustration"
            title="Mission"
            items={[
              "Empowering Migrant Workers, Simplifying Support.",
              "Seamless Help, Secure Identity, Better Future.",
              "Access Resources, Report Issues, Stay Connected.",
            ]}
          />
          <FlipCard
            type="vision"
            image="https://cdn.builder.io/api/v1/image/assets/TEMP/4cf3d5bfb63f235d7deec9f695fcd80057ebaf84?placeholderIfAbsent=true"
            altText="Vision illustration"
            title="Vision"
            items={[
              "A world where every migrant feels valued and supported.",
              "Building a future of dignity, inclusion, and opportunity.",
              "Empowering migrants for a better tomorrow.",
            ]}
          />
          <FlipCard
            type="impact"
            image="https://cdn.builder.io/api/v1/image/assets/TEMP/6c50eafd112ccaa4bbb000fe9f90e217e27b1702?placeholderIfAbsent=true"
            altText="Impact illustration"
            title="Impact"
            items={[
              "Transforming lives through support and accessibility.",
              "Helping migrants integrate, thrive, and succeed.",
              "Making a real difference, one step at a time.",
            ]}
          />
        </section>
      </main>
    </>
  );
}
