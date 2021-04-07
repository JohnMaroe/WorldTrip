export interface CountriesTypes {
  countryId: number;
  countryName: string;
  countryCity: string;
  countryImage: string;
  countryFlag: string;
}

export type ContinentDataTypes = {
  continentId: number;
  continentName: string;
  continentImage: string;
  description: string;
  paragraph: string;
  countryNumber: number;
  languageNumber: number;
  cities100: number;
  countries: CountriesTypes[];
}