import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/public/images/site/max.jpg"
          alt="an image showing max"
          width={120}
          height={120}
        />
      </div>

      <h1>Hi, I'm Max</h1>
      <p>I blog about web development especially frontend frameworks</p>
    </section>
  );
}

export default Hero;
