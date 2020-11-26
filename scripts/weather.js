const key = "rdaeQZt2dZ6BAIKAAa6nwpkBRY3fQ98N";

// //Function to get weather details
const weatherDetails = async (id) => {
    const base = "http://dataservice.accuweather.com/currentconditions/v1/";
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
 };


 //Function to get city information
const cityLocation = async (city) => {
    
    const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};

// cityLocation('manchester') .then(data => {
//         return weatherDetails(data.Key);
//     }).then(data => {
//         console.log(data);
//     }).catch(err => console.log(err));




