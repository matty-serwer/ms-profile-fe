import styles from "@/components/dev-icons/DevIcons.module.css";

const DevIcons = () => {
  return (
    <div id="dev-icons">
      <div className={styles.iconsGradientOne}>
        <div id="languages" className={styles.iconRowLarge}>
          <i className="devicon-java-plain"/>
          <i className="devicon-javascript-plain"/>
          <i className="devicon-python-plain"/>
          <i className="devicon-typescript-plain"/>
          <i className="devicon-html5-plain"/>
          <i className="devicon-css3-plain"/>
          {/*<i className="devicon-bash-plain" />*/}
        </div>
        <div id="frameworks" className={styles.iconRow}>
          <i className="devicon-react-original"/>
          <i className="devicon-redux-original"/>
          <i className="devicon-nextjs-plain"/>
          <i className="devicon-angularjs-plain"/>
          <i className="devicon-nodejs-plain"/>
          <i className="devicon-express-original"/>
          <i className="devicon-spring-original"/>
        </div>
        <div id="software" className={styles.iconRowSmall}>
          <i className="devicon-amazonwebservices-plain"/>
          <i className="devicon-dynamodb-plain"/>
          <i className="devicon-googlecloud-plain"/>
          <i className="devicon-heroku-original"/>
          <i className="devicon-mongodb-plain"/>
          <i className="devicon-postgresql-plain"/>
          <i className="devicon-docker-plain"/>
          <i className="devicon-sass-plain"/>
          <i className="devicon-less-plain-wordmark"/>
          <i className="devicon-bootstrap-plain"/>
          <i className="devicon-materialui-plain"/>
          <i className="devicon-angularmaterial-plain"/>
          <i className="devicon-tailwindcss-plain"/>
        </div>
      </div>
    </div>
  );
};

export default DevIcons;
