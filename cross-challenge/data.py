import random
import requests

#query the api for 100 random name and return it as a list
def GetNames():
    #our url to get 100 names
    response = requests.get(
            "https://randommer.io/api/Name",
            params={"nametype": "firstname", "quantity": 100},
            headers={"x-api-key": ""},
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
    names = GetNames()
    with open("people.json", "w") as f:
        f.write("{\n")
        for i in range(99):
            f.write("   \"person\": {\n")
            f.write(f"      \"firstname\": \"{names[i]}\",\n")
            f.write(f"      \"age\": \"{random.randint(1,100)}\",\n")
            f.write(f"      \"city\": \"{GetCity()}\"\n")
            if(i != 98):
                f.write("   },\n")
            else:
                f.write("   }\n")
        f.write("}")

