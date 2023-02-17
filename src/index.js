import debounce from 'lodash.debounce';
import { Notify } from 'notiflix';
import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import { refs } from './js/refs';
import { clearCountryInfo, clearCountryList, createCountriesList, createCountryInfo } from './js/render-function';


const DEBOUNCE_DELAY = 300;

refs.input.addEventListener('input', debounce(onInputSearch, DEBOUNCE_DELAY));


function onInputSearch(evt) {
    const inputValue = evt.target.value.trim();
    if (!inputValue) {
      clearCountryInfo();
      clearCountryList();
      return;
    }
  
    fetchCountries(inputValue)
      .then(countries => {
        if (countries.length > 10) {
          clearCountryInfo();
          clearCountryList();
  
          Notify.info(
            'Too many matches found. Please enter a more specific name.');
        }
        if (countries.length >= 2 && countries.length <= 10) {
          clearCountryInfo();
          createCountriesList(countries);
          console.log('country', countries)
  
          Notify.success(
            'Hurrey! We drow counries list!'
          );
        }
        if (countries.length === 1) {
          clearCountryList();
          createCountryInfo(countries);
  
          Notify.success('This is your country!');
        }
  
        console.log(countries);
      })
      .catch(err => {
        clearCountryInfo();
        clearCountryList();
  
        Notify.failure('Oops, there is no country with that name');
        console.error(err);
      });
  }
  
