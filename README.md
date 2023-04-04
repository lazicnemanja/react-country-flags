# React Country Flag

The ReactCountryFlag component is a reusable React component that displays a country flag based on a given ISO 3166-1 alpha-2 country code.


## Installation

```
yarn add react-country-flags-lazyload
```

## Usage

To use the ReactCountryFlag component in your React application, you can import it and render it like any other React component:

```
import CountryFlag from 'react-country-flags-lazyload';

function MyComponent() {
  return <CountryFlag countryCode="US" />;
}
```

The countryCode prop is required, and should be a valid ISO 3166-1 alpha-2 country code (e.g. "US" for the United States, "CA" for Canada, "GB" for the United Kingdom).

## License
The CountryFlag component is licensed under the MIT License.