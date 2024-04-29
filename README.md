
# Fruits API

This is a RESTful API for fruits, built using Node.js, Express, and MySql. The API allows users to create, read, update, and delete Fruits.

## Installation

1. Clone the repository:

   HTTPS: git clone https://github.com/Sharifa26/fruits.git
   
   SSH: git clone git@github.com:Sharifa26/fruits.git

2. Install dependencies: 
   
   npm install

3. Go to models folder -> sequelize file and change the config variable and add your own mysql credentials :

```
  config = {
	host: 'YOUR_HOST',
	user: 'YOUR_USER_ID',
	password: 'YOUR_PASSWORD',
	database: 'YOUR_DATABASE'
   }
```  

4. Start the server:

   npm start

## Usage

The API has the following endpoints:

### GET /v2/fruit

Returns a list of all fruits.
*Example response:*


HTTP/1.1 200 OK

Content-Type: application/json

```
{
    "success": true,
    "message": "fruits fetched successfully",
    "count": 6,
    "result": [
        {
            "fruitId": 1,
            "fruitName": "Apple",
            "fruitPrice": 300,
            "fruitType": "organic",
            "nutrition": "Vitamin C and E"
        },
        {
            "fruitId": 2,
            "fruitName": "Orange",
            "fruitPrice": 80,
            "fruitType": "organic",
            "nutrition": "Vitamin C"
        },
        {
            "fruitId": 3,
            "fruitName": "Grape",
            "fruitPrice": 200,
            "fruitType": "organic",
            "nutrition": "vitamin A"
        },
        {
            "fruitId": 4,
            "fruitName": "cherry",
            "fruitPrice": 20,
            "fruitType": "non organic",
            "nutrition": "vitamin C"
        },
        {
            "fruitId": 5,
            "fruitName": "cherry",
            "fruitPrice": 400,
            "fruitType": "organic",
            "nutrition": "vitamin C"
        },
        {
            "fruitId": 7,
            "fruitName": "Banana",
            "fruitPrice": 45,
            "fruitType": "non organic",
            "nutrition": "vitamin C and B6"
        }
    ]
}
```


### POST /v2/fruit

Creates a new fruit.

*Example request:*

HTTP/1.1

Content-Type: application/json

```
{
  "fruitId":7,
  "fruitName":"Banana",
  "fruitPrice":45,
  "fruitType":"non organic",
  "nutrition":"vitamin C and B6"
}
```


*Example response:*

HTTP/1.1

Content-Type: application/json

```
{
    "success": true,
    "message": "fruit added successfully",
    "result": {
        "fruitId": 7,
        "fruitName": "Banana",
        "fruitPrice": 45,
        "fruitType": "non organic",
        "nutrition": "vitamin C and B6"
    }
}
```

### GET /v2/fruit/:fruitId

Returns a specific fruit by ID.

*Example response:*


HTTP/1.1 200 OK

Content-Type: application/json
```
{
    "success": true,
    "message": "fruit fetched successfully",
    "result": {
        "fruitId": 3,
        "fruitName": "Grape",
        "fruitPrice": 200,
        "fruitType": "organic",
        "nutrition": "vitamin A"
    }
}
```
