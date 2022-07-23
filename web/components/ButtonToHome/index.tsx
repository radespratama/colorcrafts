import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { ArrowLeft } from "react-feather";
import * as T from "./button.style";

const ButtonToHome: React.FC = () => {
  const router = useRouter();
  const [showButton, setShowButton] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (typeof window !== "undefined") {
        setShowButton(window.pageYOffset > 100);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <T.ContainerButton
        className={`${showButton ? "show" : ""}`}
        onClick={() => router.push("/")}
      >
        <ArrowLeft />
        <T.ButtonText>Back to home</T.ButtonText>
      </T.ContainerButton>
    </>
  );
};

export default ButtonToHome;
