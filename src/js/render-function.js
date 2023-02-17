import { refs } from "./refs";

export function clearCountryList() {
    refs.countryList.innerHTML = '';
};

export function clearCountryInfo() {
    refs.countryInfo.innerHTML = '';
}

export function createCountriesList(country){
const markupList = country
    .map(({ flags, name }) => {
      return `<li class='country'>
            <img class='country-flag' src="${flags.svg}" width="60" height="40"/> 
            <p>${name.official}</p>
        </li>`;
    })
    .join('');

  refs.countryList.innerHTML = markupList;
}

export function createCountryInfo(country){
    const murkupInfo = country.map(({name, capital, population, flags, languages}) =>{
        return `<li>
        <div class='country'>
        <img class='country-flag' src="${flags.svg}" width="60" height="40"/> 
    <h2>${name.official}</h2>
    </div>
    <h3>Capital: ${capital}</h3>
    <h3>Population: ${population}</h3>
    <h3>Languages: ${Object.values(languages)}</h3>
    </li>`;
    } ).join('');
    refs.countryInfo.innerHTML = murkupInfo;
}