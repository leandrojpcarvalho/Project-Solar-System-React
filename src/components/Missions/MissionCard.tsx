import icons from '../../data/icons';

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
      <h3 data-testid="mission-name">{ name }</h3>
      <div className="mission-info">
        <div className="mission-info div-footer">
          <img src={ date } alt="" />
          <p data-testid="mission-year">
            { year }
          </p>
        </div>
        <div className="mission-info div-footer">
          <img src={ local } alt="" />
          <p data-testid="mission-country">
            { country }
          </p>
        </div>
        <div className="mission-info div-footer">
          <img src={ destiny } alt="" />
          <p data-testid="mission-destination">
            { destination }
          </p>
        </div>
      </div>
    </section>
  );
}

export default MissionCard;
