import { useState, useEffect } from "react";
import "../styles/ExpertiseRotator.css";

const expertises = [
  "Custom Application Development",
  "AI Integrations & Automation",
  "APIs & Event-driven Systems",
  "Cloud Architecture & Migration",
  "Legacy Modernization",
  "Enterprise & Startup Architecture",
  "Security Hardening & Penetration Test Remediation",
];

export default function ExpertiseRotator() {
  const [currentExpertise, setCurrentExpertise] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const expertise = expertises[currentIndex];
    const speed = isTyping ? 80 : 50;

    const timer = setTimeout(() => {
      if (isTyping) {
        if (charIndex < expertise.length) {
          setCurrentExpertise(expertise.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // Finished typing, wait before deleting
          setTimeout(() => setIsTyping(false), 1500);
        }
      } else {
        if (charIndex > 0) {
          setCurrentExpertise(expertise.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          // Finished deleting, move to next expertise
          setCurrentIndex((currentIndex + 1) % expertises.length);
          setIsTyping(true);
          setCharIndex(0);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isTyping, currentIndex]);

  return (
    <div className="expertise-rotator">
      <span className="expertise-text">{currentExpertise}</span>
      <span className="expertise-cursor"></span>
    </div>
  );
}
