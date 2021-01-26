
# Rent & Stream Service

*Agathe Hainaut & Kévin Lethuillier*

## What has been done ?

``authentification/login``
An authentification is simulated and will always connect you as a specific client.

``film/get``
Sends the movie corresponding to the given id if it exists.

``film/search``
 Sends the list of films corresponding to the filter criteria sent in the request's body.

``film/add``
Add the movie sent in the request's body in the database. This can be done by a client in the MVP.

``film/update``
Updates the properties - sent in the request's body - of the movie corresponding to the given id if it exists. This can be done by a client in the MVP.

``film_loue/get_current``
Sends the list of movies currently rented by the current client.

``film_loue/watch``
Sends the rented movie corresponding to the given id. An error occurs if the movie is not rented.

``film_loue/add``
Rents the specified movie to the specified user. This can be done by a client in the MVP.

## How to run 

The following command will build and run the server:
```
docker-compose down && docker-compose build && docker-compose up -d && docker-compose logs -f
```

## Miscellaneous

The database is empty when first launching the composed image.
If needed, it is possible to add some movies with the function ```film/add``` or ```film_loue/add```.

