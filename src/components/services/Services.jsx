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
          Я роблю все, щоб допомогти дітям
          <br /> рости і розвиватися
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
          <h2 className="text-center">🚀 Що таке “Вступ до астрофізики”?</h2>
          <p>
            Це курс, на якому разом із дітьми ми вирушимо в захопливу подорож
            Всесвітом. На кожному уроці відкриватимемо таємниці зірок і планет,
            знайомитимемось із екзопланетами, чорними дірами й сучасними
            методами дослідження космосу. На дітей чекають цікаві лекції,
            інтерактивні завдання та власні міні-проєкти, щоб краще зрозуміти та
            відчути науку.
          </p>
          <button onClick={() => open("https://t.me/akira_oyh")}>
            Напишіть мені в телеграм
          </button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>✨ Чому це важливо?</h2>
          <p>
            Це не просто уроки астрономії — це шанс подарувати дітям впевненість
            у собі та показати, як знання відкривають нові можливості.
            Пробуджуючи інтерес до науки, ми надихаємо дітей мріяти та досягати.
          </p>
          <button onClick={() => open("https://t.me/akira_oyh")}>
            Напишіть мені в телеграм
          </button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>🤝 Приєднуйтесь!</h2>
          <p className="last-child">
            Якщо вам близька ідея ділитися знаннями про космос і підтримувати
            дітей, станьте волонтером нашої команди. Це не лише про науку — це
            про дружбу та мотивацію. Підписуйтеся на нашу сторінку, слідкуйте за
            новинами та пишіть, якщо хочете допомогти. Разом надихнемо дітей
            мріяти й досягати!
          </p>
          <button
            className="last-child"
            onClick={() => open("https://t.me/akira_oyh")}
          >
            Напишіть мені в телеграм
          </button>
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
