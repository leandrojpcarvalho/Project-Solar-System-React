import icons from '../../images/icons/icons';

const { date, destiny, local } = icons;
type Misson = {
  name: string;
  year: string;
  country: string;
  destination: string;
};

function MissionCard({ name, year, country, destination }:Misson) {
  return (
    <section data-testid="mission-card" className="mission">
      <p data-testid="mission-name">{ name }</p>
      <div className="mission-info">
        <p data-testid="mission-year">
          <img src={ date } alt="" />
          { year }
        </p>
        <p data-testid="mission-country">
          <img src={ local } alt="" />
          { country }
        </p>
        <p data-testid="mission-destination">
          <img src={ destiny } alt="" />
          { destination }
        </p>
      </div>
    </section>
  );
}

export default MissionCard;
