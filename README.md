

# **YelpCamp**

![HomePage](https://github.com/ravi-143kiran/Yelp-Camp/assets/119074585/f16cb728-c587-4aef-95cd-318a81bef6ac)

![Campground](https://github.com/ravi-143kiran/Yelp-Camp/assets/119074585/684989a9-fef0-443e-90a6-aebf75812299)
YelpCamp is a website where users can create and review campgrounds. In order to review or create a campground, you must have an account. This project was part of Colt Steele's web dev course on udemy.

This project was created using Node.js, Express, MongoDB, and Bootstrap. Passport.js was used to handle authentication.

# **Features**

* Users can create, edit, and remove campgrounds
* Users can review campgrounds once, and edit or remove their review
* User profiles include more information on the user (full name, email, phone, join date), their campgrounds, and the option to edit their profile or delete their account
* Search campground by name or location
* Sort campgrounds by highest rating, most reviewed, lowest price, or highest price

# **Run it locally**

1. Install **[MongoDB](https://www.mongodb.com/ "Optional Title")**

2. Create a cloudinary account to get an API key and secret code
```
**git clone https://github.com/ravi-143kiran/Yelp-Camp.git  
cd yelpcamp    
npm install**
```
Create a .env file (or just export manually in the terminal) in the root of the project and add the following:
```
**DATABASEURL='<url>'  
API_KEY=''<key>  
API_SECRET='<secret>'**
````
Run **mongod** in another terminal and **node app.js** in the terminal with the project.

# **License**

This project is licensed under the **[MIT License](https://opensource.org/license/mit/ "Optional Title")**.



