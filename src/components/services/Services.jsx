/* eslint-disable no-unused-vars */
import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Я зосереджена на тому, щоб допомогти дітям
          <br /> рости і рухатися вперед
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.jpg" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Досліджуй</motion.b>{" "}
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Всесвіт</motion.b> з нами
          </h1>
          {/* <button>WHAT WE DO?</button> */}
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Мета проєкту</h2>
          <p>
            Ввести дітей та підлітків в основи та сформувати глибокий інтерес до
            астрофізики та астрономії. За мету також поставлено показати
            молодому поколінню, що космос — це щось більше, ніж просто зірки на
            небі і кожен може бути частиною відкриттів і досліджень, що змінюють
            наше уявлення про Всесвіт.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Перші кроки у вивченні Всесвіту</h2>
          <p>
            Програма розкриває основні концепції Всесвіту, структуру галактик та
            зоряних систем. Це допоможе дітям сформувати глибоке розуміння
            космосу і нашого місця у ньому.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Погляд у майбутнє</h2>
          <p>
            Програма знайомить дітей із сучасними космічними місіями та
            технологіями, які готують нас до подорожей до інших планет. Це шанс
            побачити майбутнє людства і, можливо, надихнутись на власний
            науковий шлях.
          </p>
          <button className="last-child">Go</button>
        </motion.div>
        {/* <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button>Go</button>
        </motion.div> */}
      </motion.div>
    </motion.div>
  );
};

export default Services;
