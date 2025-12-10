"use client";

import AOS from "aos";
import { useEffect } from "react";

export default function AOSProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      duration: 800, // Increased to 800ms (slower)
      delay: 50,
      once: false, // Allow animations to repeat on scroll
      offset: 100,
      easing: "ease-out-cubic",
      disable: false,
    });
  }, []);

  return <>{children}</>;
}
