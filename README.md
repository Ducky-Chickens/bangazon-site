# Bangazon Corp -- Site

## Getting Started
### Install
To initialize the database: 
+ Load PostGreSQL
+ Open PostGreSQL in your terminal; `psql` || your set alias
+ Create the appropriate database locally with the following command:
```
<username>=# CREATE DATABASE bangazon_site;
```
+ Connect to the database
```
<username>=# \c bangazon_site;
```
+ In a seperate window, outside the `psql` shell, initialize sequelize in the root directory
```
$ sequelize init
```
+ In the created `./config/config.json`, from the first object: 
    + remove `username` and `password` 
    + change `database` value to `bangazon_site`
    + change `dialect` value to `postgres`

### Create Tables
Run the following commands in your terminal to create the necessary tables
+ Users: `sequelize model:create --name User --attributes customer_id:integer,provider:string,account_number:string`
+ Payment Types: `sequelize model:create --name PaymentType --attributes customer_id:integer,provider:string,account_number:string`
+ Orders: `sequelize model:create --name Order --attributes customer_id:integer,payment_type:integer`
+ Order Products `sequelize model:create --name OrderProduct --attributes order_id:integer,payment_type:integer`
+ Products: `sequelize model:create --name Product --attributes product_title:string,product_type:integer,product_price:string,product_description:string,customer_id:string,listing_date:string`
+ Product Types: `sequelize model:create --name ProductType --attributes type_name:string`

