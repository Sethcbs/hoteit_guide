import random
import requests

#query the api for 100 random name and return it as a list
def GetNames():
    #our url to get 100 names
    response = requests.get(
            "https://randommer.io/api/Name",
            params={"nametype": "firstname", "quantity": 100},
            headers={"x-api-key": "e558414d940d4a18ad383ab22d502b82"},
            timeout = 10,
    )
    
    response.raise_for_status()
    names = response.json()
    return names

#our api does not generate cities, so this funciton will return a random one
def GetCity():
    cities = ["Vancouver", "Concord", "Portland", "Seattle", "Beaverton", "Ridgefield", "Pleasant Hill", "Walnut Creek", "Tigard", "San Francisco"]
    i = random.randint(1, 9)
    return cities[i]
    
    
if __name__ == "__main__":
    print(GetCity())
