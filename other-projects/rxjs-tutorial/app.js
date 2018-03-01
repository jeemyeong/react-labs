import Rx from 'rxjs/Rx';

console.log('RxJS included?', !!Rx);

// Grab HTML elements
const appContainer = document.getElementById('app-container');
const zipcodeInput = document.getElementById('zipcode-input');
const addLocationBtn = document.getElementById('add-location');

const btnClickStream =
  Rx.Observable
    .fromEvent(addLocationBtn, 'click')
    .map(_ => true);

const zipInputStream =
  Rx.Observable
    .fromEvent(zipcodeInput, 'input')
    .map(e => e.target.value)
    .filter(zip => zip.length === 5)

const zipcodeStream =
  btnClickStream
    .withLatestFrom(zipInputStream, (click, zip) => zip)
    .distinct()

const APPID = "916302947ac69803f6998f94aaa213f7";

const getTemperature = zip =>
  fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&appid=${APPID}`)
    .then(res => res.json());

const zipTemperatureStreamFactory = zip =>
  Rx.Observable
    .fromPromise(getTemperature(zip))
    .map(({ main: { temp } }) => ({ temp, zip }));

    zipcodeStream
    .flatMap(zipTemperatureStreamFactory)
    .forEach(({ zip, temp }) => {
      const locationEle = document.createElement('div');
      locationEle.id = `zip-${zip}`;
      locationEle.classList.add('location');
      const zipEle = document.createElement('p');
      zipEle.classList.add('zip');
      zipEle.innerText = zip;
      const tempEle = document.createElement('p');
      tempEle.classList.add('temp');
      tempEle.innerHTML = `${temp}&deg;F`;
      locationEle.appendChild(zipEle);
      locationEle.appendChild(tempEle);
      appContainer.appendChild(locationEle);
      zipcodeInput.value = '';
    });
  
