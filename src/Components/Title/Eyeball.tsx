import { useEffect, useRef } from "react";

/**THIS COMPONENT IS IN CHARGE OF RETURNING THE PUPIL EFFECT, NAMED BALL IN THIS CASE FOR PRACTICAL PURPOSES, AS WELL AS THE LOGIC FOR THE EYEBALL PROPER MOVEMENT*/

type Props = {};

const Eyeball = ({}: Props) => {
  const ballRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (ballRef.current) {
        const eye = ballRef.current.parentElement;
        if (eye) {
          const rect = eye.getBoundingClientRect();
          const eyeCenterX = rect.left + rect.width / 2;
          const eyeCenterY = rect.top + rect.height / 2;

          const x = e.clientX - eyeCenterX;
          const y = e.clientY - eyeCenterY;

          const maxRadius = rect.width / 2 - ballRef.current.offsetWidth / 2;

          // Calculate the distance of the mouse pointer from the center of the eye
          const distance = Math.sqrt(x * x + y * y);

          // Calculate the movement constrained to the radius of the eye
          const ratio = Math.min(1, maxRadius / distance);
          const x_movement = x * ratio;
          const y_movement = y * ratio;

          ballRef.current.style.transform = `translate(${x_movement}px, ${y_movement}px)`;
        }
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div className="ball" ref={ballRef}></div>;
};

export default Eyeball;
