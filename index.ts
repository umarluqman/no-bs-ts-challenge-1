// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const houses: House[] = [
  { name: 'Atreides', planets: 'Calladan' },
  { name: 'Corrino', planets: ['Kaitan', 'Salusa Secundus'] },
  { name: 'Harkonnen', planets: ['Giedi Prime', 'Arrakis'] },
];

interface House {
  name: string;
  planets: string | string[];
}

interface HouseWithID extends House {
  id: number;
}

function findHouses(houses: string): HouseWithID[];

function findHouses(
  houses: string,
  filter: (house: House) => boolean
): HouseWithID[];

function findHouses(houses: House[]): HouseWithID[];

function findHouses(
  houses: House[],
  filter: (house: House) => boolean
): HouseWithID[];

function findHouses(
  houses: House[] | string,
  filter?: (house: House) => boolean
): HouseWithID[] {
  const houseList: House[] =
    typeof houses === 'string' ? JSON.parse(houses) : houses;

  const houseListWithID: HouseWithID[] = houseList.map((i, index) => ({
    ...i,
    id: index,
  }));

  if (filter) {
    const filtered = houseListWithID.filter(filter);

    return filtered;
  }

  return houseListWithID;
}

console.log(
  findHouses(JSON.stringify(houses), ({ name }) => name === 'Atreides')
);

console.log(findHouses(houses, ({ name }) => name === 'Harkonnen'));

console.log('1st', findHouses(JSON.stringify(houses)));
