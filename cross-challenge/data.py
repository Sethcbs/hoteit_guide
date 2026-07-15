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


if __name__ == "__main__":
    print(GetNames())
