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

#### Home
Displays the 20 latest products in the Bangazon warehouse!

#### Login / Register

#### Categories

#### Prodcuts

#### Account

#### Inventory

#### Cart

