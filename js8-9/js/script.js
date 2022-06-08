//1
 
let cars = [
    { model: "Jeep", price: 50000, carMileage: 40000 },
    { model: "Audi", price: 46000, carMileage: 80000 },
    { model: "BMW", price: 32000, carMileage: 340000 },
    { model: "Kia", price: 67500, carMileage: 70000 },
    { model: "Geely", price: 22000, carMileage: 49000 },
]
 
function getCarsAveragePrice(arr) {
    let sum = 0;
    let averagePrice = [];
    arr.forEach(({ price }) => {
        if (price < 50000) {
            averagePrice.push(price);
            sum += price
        }
    });
    return sum / averagePrice.length;
};
 
let resultAverage = getCarsAveragePrice(cars);
 
console.log(resultAverage);
 
function getNamesOfCars(cars) {
    return cars.reduce((acc, { model }) => {
            acc.push(model)
        return acc;
    }, []);
};
 
let namesOfCars = getNamesOfCars(cars);
console.log(namesOfCars);
 
//2
 
let student = {
    name: "Your name",
    age: "Your age",
    id: 1,
}

console.log(Object.entries(student));

const studentMap = new Map(Object.entries(student));
console.log(studentMap);

studentMap
    .set("isHere", true)
    .set("course", 5);

console.log(studentMap);

console.log(studentMap.has("name"));


//3

for (let entry of studentMap.entries()) {
    console.log(entry);
}

for (let value of studentMap.values()) {
    console.log(value);
}

for (let key of studentMap.keys()) {
    console.log(key);
}


//4

let amount= { 
    apple: 440,
    burger: 316,
    juice: 1120,
}

let reducedAmount = Object.fromEntries(
    Object.entries(amount).map(([key, value]) => {
    return [key, value / 2]
    })
);

console.log(reducedAmount);


//5


function getSumAmount(obj) {
    let sum = 0;
    for (let reducedAmount of Object.values(obj)) {
    sum += reducedAmount;
    }
        return sum;
}

console.log(getSumAmount(reducedAmount));

//6

let password = [1991, "birthday", true, true, false, "apple", "apple", "apple", 7, 7, "year", "birthday"];

const uniquePasswotd = new Set(password);

function unique(arr) {
    return [...new Set(arr)]
    }
    
    console.log(unique(password));


//7

const weather = {
    "coord": {
    "lon": -122.08,
    "lat": 37.39
    },
    "weather": [
    {
    "id": 800,
    "main": "Clear",
    "description": "clear sky",
    "icon": "01d"
    }
    ],
    "base": "stations",
    "main": {
    "temp": 282.55,
    "feels_like": 281.86,
    "temp_min": 280.37,
    "temp_max": 284.26,
    "pressure": 1023,
    "humidity": 100
    },
    
    "visibility": 10000,
    "wind": {
    "speed": 1.5,
    "deg": 350
    },
    "clouds": {
    "all": 1
    },
    "dt": 1560350645,
    "sys": {
    "type": 1,
    "id": 5122,
    "message": 0.0139,
    "country": "US",
    "sunrise": 1560343627,
    "sunset": 1560396563
    },
    "timezone": -25200,
    "id": 420006353,
    "name": "Mountain View",
    "cod": 200
    }

    console.log(weather);


let newWeather = JSON.stringify(weather);
let anotherWeather = newWeather;
let localWeather = JSON.parse(anotherWeather);

console.log(localWeather);
