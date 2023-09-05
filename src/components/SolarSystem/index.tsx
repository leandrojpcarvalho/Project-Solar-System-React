import planets from '../../data/planets';
import PlanetCard from './PlanetCard';
import Title from '../Title';
import './solar-system.css';

type Props = {
  setModalIsInvisible:()=>void;
  setPlanet: (event: React.MouseEvent<HTMLDivElement>) => void;
};

function SolarSystem({ setModalIsInvisible, setPlanet }:Props) {
  return (
    <div data-testid="solar-system" className="container solar-system">
      <Title headline="Planetas" />
      <div className="planets">
        { planets
          .map((planet) => (
            <PlanetCard
              setModalIsInvisible={ setModalIsInvisible }
              key={ planet.name }
              planetName={ planet.name }
              planetImage={ planet.image }
              setPlanet={ setPlanet }
            />
          ))}
      </div>
    </div>
  );
}

export default SolarSystem;
