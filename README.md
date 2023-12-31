# Go-Where

## Basic Overview

GoWhere is a platform where users can share their favorite go-to places with their friends. Users can upload pictures and descriptions of these places, making it easy for others to discover and explore new destinations.

This frontend application is built using React. The backend application is built using Node, Express and MongoDB. Refer to [here](https://github.com/jicsontoh/Go-Where-Backend) for the backend code repository.

## Main users Page

<img width="1510" alt="Screenshot 2023-07-24 at 7 42 25 PM" src="https://github.com/jicsontoh/Go-Where/assets/64951628/634cf153-bd28-409d-9897-75aa5fbad61f">

## View places

<img width="1511" alt="Screenshot 2023-07-24 at 7 42 40 PM" src="https://github.com/jicsontoh/Go-Where/assets/64951628/32842aca-382b-4cb6-971b-d5a7904a5acd">

## Add Place page

<img width="1508" alt="Screenshot 2023-07-24 at 7 43 12 PM" src="https://github.com/jicsontoh/Go-Where/assets/64951628/648e4fcf-c1d8-4184-958b-753e94efe4c7">

## How to get started

1. Clone the frontend repo

```
$ git clone https://github.com/jicsontoh/Go-Where.git
```

2. Clone the backend repo

```
$ git clone https://github.com/jicsontoh/Go-Where-Backend.git
```

3. Set up the environment variables in a `.env` file in the **frontend repo**

Config the port number to the port where your backend will be running on

```
REACT_APP_API_URL=http://localhost:<PORT_NUMBER>
```

4. Set up the environment variables in a `.env` file in the **backend repo**

Get your MongoDB URL from your MongoDB Dashboard. If you are unsure, refer to this [documentation](https://www.mongodb.com/docs/guides/atlas/connection-string/).

```
MONGO_URL=mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]
PRIV_KEY=<ANY RANDOM STRING OF YOUR CHOICE>
```

5. Run the backend repo first

Then run the frontend repo using the same command

```
$ npm start
```

## Known Issues

View on Map feature is not fully implemented yet as no suitable free API has been found
