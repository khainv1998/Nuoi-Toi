"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function AOSProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      duration: 600, // Reduced from 800ms (25% faster)
      delay: 50,
      once: false, // Allow animations to repeat on scroll
      offset: 100,
      easing: "ease-out-cubic",
      disable: false,
    });
  }, []);

  return <>{children}</>;
}
