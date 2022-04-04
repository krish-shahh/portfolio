import { gsap, Linear } from "gsap";
import { MutableRefObject, useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const About = ({ clientHeight }) => {
  const quoteRef: MutableRefObject<HTMLDivElement> = useRef(null);
  const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: { ease: Linear.easeNone, duration: 0.1 },
    });
    timeline
      .fromTo(
        quoteRef.current.querySelector(".about-1"),
        { opacity: 0.2 },
        { opacity: 1 }
      )
      .to(quoteRef.current.querySelector(".about-1"), {
        opacity: 0.2,
        delay: 0.5,
      })
      .fromTo(
        quoteRef.current.querySelector(".about-3"),
        { opacity: 0.2 },
        { opacity: 1 }
      )
      .to(quoteRef.current.querySelector(".about-3"), {
        opacity: 0.2,
        delay: 0.5,
      })
      .fromTo(
        quoteRef.current.querySelector(".about-2"),
        { opacity: 0.2 },
        { opacity: 1 },
        "<"
      )
      .to(quoteRef.current.querySelector(".about-2"), {
        opacity: 0.2,
        delay: 1,
      });
      

    ScrollTrigger.create({
      trigger: targetSection.current,
      start: "center 80%",
      end: "center top",
      scrub: 0,
      animation: timeline,
    });
  }, [quoteRef, targetSection]);

  return (
    <section className="w-full relative select-none" ref={targetSection}>
      <div
        className={`
          ${
            clientHeight > 650 ? "pt-20 pb-16" : "pt-40 pb-24"
          } section-container
        `}
      >
        <h1
          ref={quoteRef}
          className="font-medium text-3xl sm:text-4xl md:text-6xl"
        >
          <span className="about-1 leading-tight">
            Hello, my name is Krish Shah and I am a current Senior at Northern.{" "}
          </span>
          <span className="about-2 leading-tight">
            In school, I am the Captain of the Robotics Team, a member of the Math Team, a Varsity Track and Field Javelin Thrower, and an assistant coach for the middle school robotics team.{" "}
          </span>
          <span className="about-3 leading-tight">
          Outside of school, I am an Eagle Scout and Junior Assistant Scoutmaster, robotics teacher in my local community, Software Engineering & Research Intern at The Zone, and a Data Analytics & Economics Intern at The Zone.
          </span>
        </h1>
      </div>
    </section>
  );
};

export default About;
