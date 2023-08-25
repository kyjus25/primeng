import { PrimeIcons } from "../components/api/primeicons";

export default () => {
    return [''].concat(Object.keys(PrimeIcons).map(i => PrimeIcons[i])).concat(['pi pi-spinner pi-spin']);
}