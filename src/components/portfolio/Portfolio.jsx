import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Що таке Всесвіт?",
    img: "http://res.cloudinary.com/platon1gg/image/upload/v1730238315/yf7dv6cvdyr9hu3h9zbh.jpg",
    desc: "Учні дізнаються про Всесвіт, його структуру та масштаби, дослідять галактики, зоряні системи та наше місце у Чумацькому Шляху, формуючи уявлення про величезність космосу.",
  },
  {
    id: 2,
    title: "Зірки — наше космічне минуле та майбутнє",
    img: "http://res.cloudinary.com/platon1gg/image/upload/v1730238315/xzil8clpf6sfuu2idlef.jpg",
    desc: "На уроці розглянемо, як народжуються, живуть та вмирають зірки, дослідимо червоних гігантів, наднові і білі карлики, а також їхню роль у космосі.",
  },
  {
    id: 3,
    title: "Сонячна система та її таємниці",
    img: "http://res.cloudinary.com/platon1gg/image/upload/v1730238315/jbto4uxhjqg3dxees8zp.jpg",
    desc: "Учні познайомляться з планетами Сонячної системи, їх фізичними характеристиками, кліматом, а також дізнаються, чим особливі кільця деяких планет.",
  },
  {
    id: 4,
    title: "Екзопланети та пошуки життя за межами Землі",
    img: "http://res.cloudinary.com/platon1gg/image/upload/v1730238315/y1qk2nchihhojlpfzrxi.jpg",
    desc: "Учні дізнаються про екзопланети, способи їхнього виявлення, а також зрозуміють, чому пошук потенційно населених світів є важливим для науки.",
  },
  {
    id: 5,
    title: "Екзопланети та пошуки життя за межами Землі",
    img: "http://res.cloudinary.com/platon1gg/image/upload/v1730238315/xzil8clpf6sfuu2idlef.jpg",
    desc: "Розглянемо чорні діри, їхню структуру, як вони утворюються і викривлюють простір і час. Учні дізнаються, чому ці об'єкти унікальні та загадкові.",
  },
  {
    id: 6,
    title: "Екзопланети та пошуки життя за межами Землі",
    img: "http://res.cloudinary.com/platon1gg/image/upload/v1730238315/xzil8clpf6sfuu2idlef.jpg",
    desc: "Обговоримо сучасні та майбутні космічні місії, можливості освоєння Марсу, технології космічних подорожей і труднощі колонізації інших планет.",
  },
  {
    id: 7,
    title: "Екзопланети та пошуки життя за межами Землі",
    img: "http://res.cloudinary.com/platon1gg/image/upload/v1730238315/xzil8clpf6sfuu2idlef.jpg",
    desc: "Учні закріплять матеріали, презентуючи свої міні-проєкти на улюблені теми курсу, що розвине навички командної роботи і поглибить знання.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Program</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;