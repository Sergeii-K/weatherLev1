const weather = require('weather-js');
const sity = require('./main');

weather.find({search: sity, degreeType: 'C'}, function(err, result) {
    if(err) console.log(err);
   
    const obj = (JSON.stringify(result, null, 2));
    const arr = JSON.parse(obj);
    
    const a = (arr[0].location.name);
    const d = (arr[1].current.day);
    const c = (arr[1].current.temperature);

    console.log(a)
    console.log(d)
    console.log("Температура:", c, "C")
    
});

// module.exports = d;