const axios = require("axios");

const argv = require("yargs").options({
    direccion: {
        alias: "d",
        desc: "Dirección de la ciudad para obtener el clima",
        demand: true,
    },
}).argv;

console.log(argv.direccion);

const encodedUlr = encodeURI(argv.direccion);
console.log(encodedUlr);

const instance = axios.create({
    baseURL: `https://bestweather.p.rapidapi.com/weather/${encodedUlr}/today`,
    headers: {
        "X-RapidAPI-Host": "bestweather.p.rapidapi.com",
        "X-RapidAPI-Key": "a84fbce1d0msh3579bf30be886a4p1afec3jsn5ad42fb29781",
    },
});

instance
    .get()
    .then((resp) => {
        console.log(resp.data)
            // console.log(resp.data.Results[0]);
    })
    .catch((err) => {
        console.log("ERROR!!!!", err);
    });