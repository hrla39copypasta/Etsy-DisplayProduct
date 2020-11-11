# Etsy-DisplayProduct
## Only one part of a whole product page,
### to see whole page, see repo: Etsy-DisplayProduct Proxy

### About:

This is a replica e-commerce site of an Etsy page. This repo has generated 100 unique records for each refresh will generate a new item. This repo is specifically only for the main display of the product and description module.

#### Features:
* Carousal with linked thumbnail
* On-click carousal with linked thumbnail and zoom functionality
* Description tab to personalize your item (input box, drop down select)

## Start the application:
1. Open up the terminal and from within the root directory, install the dependencies by running the command:
```sh
npm install
```
then:
```sh
npm run build
```

2. Once you have install the dependencies, you will need to create your sql database.
```sh
cd database
```
then:
```sh
mysql -u root -p <schema.sql
```

3. You will need to seed your database
```sh
node seed.js
```

3. After you have set up your sql database, type:
```sh
npm start
```
4. You can see the module on: http://localhost:8002


## Built with:
* MySQL
* Node
* Express
* React
* Styled Components

## Team Members:
* Alphina Long
