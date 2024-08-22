import { useEffect } from "react";

type Props = {};

function Title({}: Props) {
  useEffect(() => {
    const elts = {
      text1: document.getElementById("text1"),
      text2: document.getElementById("text2"),
    };

    const texts: string[] = ["I", "build", "websites"];

    const morphTime: number = 1;
    const cooldownTime: number = 1;

    let textIndex: number = texts.length - 1;
    let time: Date = new Date();
    let morph: number = 0;
    let cooldown: number = cooldownTime;

    if (elts.text1) elts.text1.textContent = texts[textIndex % texts.length];
    if (elts.text2)
      elts.text2.textContent = texts[(textIndex + 1) % texts.length];

    function doMorph(): void {
      morph -= cooldown;
      cooldown = 0;

      let fraction: number = morph / morphTime;

      if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
      }

      setMorph(fraction);
    }

    function setMorph(fraction: number): void {
      if (!elts.text1 || !elts.text2) return;

      const blurValue = Math.min(8 / fraction - 8, 100);
      const opacityValue = `${Math.pow(fraction, 0.4) * 100}%`;

      elts.text2.style.filter = `blur(${blurValue}px)`;
      elts.text2.style.opacity = opacityValue;

      fraction = 1 - fraction;
      elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      elts.text1.textContent = texts[textIndex % texts.length];
      elts.text2.textContent = texts[(textIndex + 1) % texts.length];
    }

    function doCooldown(): void {
      if (!elts.text1 || !elts.text2) return;

      morph = 0;

      elts.text2.style.filter = "";
      elts.text2.style.opacity = "100%";

      elts.text1.style.filter = "";
      elts.text1.style.opacity = "0%";
    }

    function animate(): void {
      requestAnimationFrame(animate);

      const newTime: Date = new Date();
      const shouldIncrementIndex: boolean = cooldown > 0;
      const dt: number = (newTime.getTime() - time.getTime()) / 1000;
      time = newTime;

      cooldown -= dt;

      if (cooldown <= 0) {
        if (shouldIncrementIndex) {
          textIndex++;
        }

        doMorph();
      } else {
        doCooldown();
      }
    }

    animate();
  }, []);

  return (
    <div className="title-container">
      <span id="text1"></span>
      <span id="text2"></span>
    </div>
  );
}

export default Title;
