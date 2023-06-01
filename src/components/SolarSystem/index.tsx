import planets from '../../data/planets';
import PlanetCard from './PlanetCard';
import Title from '../Title';
import './solar-system.css';

function SolarSystem() {
  return (
    <div data-testid="solar-system" className="container solar-system">
      <Title headline="Planetas" />
      <div className="planets">
        { planets
          .map((planet) => (
            <PlanetCard
              key={ planet.name }
              planetName={ planet.name }
              planetImage={ planet.image }
            />
          ))}
      </div>
    </div>
  );
}

export default SolarSystem;
