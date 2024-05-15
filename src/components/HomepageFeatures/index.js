import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Empowering Minds, Building Futures',
    Img: require('@site/static/img/HomeImageA.png').default,
    description: (
      <>
        Inspiring curiosity, fostering innovation, and nurturing communities 
        through technology education and research.
      </>
    ),
  },
  {
    title: 'Breaking Down Barriers to STEM',
    Img: require('@site/static/img/HomeImageB.png').default,
    description: (
      <>
        CAROBOT aims to democratize STEM education, making it accessible to all. We dismantle 
        the 'black box' perception of technology, empowering youth to see it as 
        approachable and achievable, regardless of background or perceived skill level.
      </>
    ),
  },
  {
    title: 'Hands-On Learning Made Simple',
    Img: require('@site/static/img/HomeImageC.png').default,
    description: (
      <>
        Guiding You Through Your STEM Journey - At CAROBOT, we provide intuitive 
        step-by-step tutorials and comprehensive starter kits, ensuring that 
        every individual can embark on their personal STEM journey with confidence 
        and ease. From novice enthusiasts to budding engineers, we're here to support 
        you every step of the way.
      </>
    ),
  },
  
];

function Feature({Img, title, description}) {
  return (
    <div className={clsx('col col--4')}>

      <div className="text--center">
        <img src={Img} className={styles.featureImg} alt={title} /> 
      </div>

      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>

    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>

      <div className="container">

        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>

      </div>

    </section>
  );
}
