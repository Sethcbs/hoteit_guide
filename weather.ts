//define Weather interface with temp, condition, and city
//fetch from weather api
//map to weather like object
//print "City: {city}, Temperature {temp}degrees C, Condition: {condition}"

interface WeatherAPIResponse {
    location: { name: string };
    current: {
        temp_c: number;
        condition: {text: string;};
    };
}
interface Weather {
    temperature: number,
    condition: string,
    city: string,
}

async function fetchWeather(): Promise<Weather | null> {
    const api_url = "https://api.weatherapi.com/v1/current.json?key=5d4fec8a344346848db192823261407&q=Vancouver, WA&aqi=no";
    try {
        const response = await fetch(api_url);
        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        //get data in the form that the weatherapi website returns it as
        const weather_json: WeatherAPIResponse = await response.json();

        //map the data to our Weather interface now
        return {
            temperature: weather_json.current.temp_c,
            condition: weather_json.current.condition.text,
            city: weather_json.location.name,
        };
    } catch (error) {
        console.error("Fetch failed:", error);
        return null;
    }
}

async function main() {
    const weather = await fetchWeather();
    if (!weather) return;

    console.log(
        `City: ${weather.city}, Temperature: ${weather.temperature}°C, Condition: ${weather.condition}`
    );
}

main().catch(console.error);
