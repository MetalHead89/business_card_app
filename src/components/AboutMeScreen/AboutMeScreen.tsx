import SkillBar from '../SkillBar/SkillBar';
import './AboutMeScreen.scss';

function AboutMeScreen() {
  return (
    <div className="about-me-screen">
      <div className="about-me-screen__content">
        <div className="about-me-screen__text">
          <h2>Привет! Меня зовут Виталий</h2>
          <p>
            Я начинающий frontend разработчик из небольшого Сибирского городка.
            Здесь ты можешь ознакомиться с моими работами, узнать об уровне моих
            скиллов и если возникнет необходимость - связаться со мной.
          </p>
        </div>
        <div className="about-me-screen__skills">
          <SkillBar title="HTML" progress={85} />
          <SkillBar title="CSS" progress={70} />
          <SkillBar title="JavaScript" progress={75} />
        </div>
      </div>
    </div>
  );

  //   const animation = {
  //     hidden: {
  //       x: -100,
  //       opacity: 0,
  //     },
  //     visible: (i: number) => ({
  //       transition: {
  //         delay: i * 0.3,
  //       },
  //       x: 0,
  //       opacity: 1,
  //     }),
  //   };

  //   const { aboutText } = useAppSelector((state) => state.aboutMeScreenReducer);

  //   const paragraphs = aboutText.map((paragraph, i) => (
  //     <motion.p custom={i} key={paragraph} variants={animation}>
  //       {paragraph}
  //     </motion.p>
  //   ));

  //   return (
  //     <div className="about-me-screen">
  //       <motion.div
  //         initial="hidden"
  //         whileInView="visible"
  //         viewport={{ amount: 0.5 }}
  //         className="about-me-screen__content"
  //       >
  //         {paragraphs}
  //       </motion.div>
  //     </div>
  //   );
}

export default AboutMeScreen;
