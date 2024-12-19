import { DefaultCard, InfoCard, Weekly } from "../cards/index.jsx";

import "./_style.scss";

export const Section = () => {
  return (
    <section>
      <div className="container">
        <div className="up">
          <DefaultCard />
          <InfoCard />
        </div>
        <Weekly/>
      </div>
    </section>
  );
};
