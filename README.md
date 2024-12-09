**MeraSafar Backend API Documentation**  
Welcome to the MeraSafar API documentation. This document provides detailed information about the available endpoints in the MeraSafar backend.  

**Base URL**: `{BaseURL}`  

**Endpoints**  

**`/users/register`**  
Registers a new user.  
- **Method**: POST  
- **Request Body**:  
```json
{
  "fullname": {
    "firstname": "string",
    "lastname": "string (optional)"
  },
  "email": "string",
  "password": "string"
}
```  
- **Response**:  
```json
{
  "user": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string"
  },
  "token": "string"
}
```  

**`/users/login`**  
Authenticates a user.  
- **Method**: POST  
- **Request Body**:  
```json
{
  "email": "string",
  "password": "string"
}
```  
- **Response**:  
```json
{
  "user": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string"
  },
  "token": "string"
}
```  

**`/users/profile`**  
Retrieves the authenticated user's profile.  
- **Method**: GET  
- **Authentication**: Bearer Token  
- **Response**:  
```json
{
  "user": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string"
  }
}
```  

**`/users/logout`**  
Logs out the current user.  
- **Method**: GET  
- **Authentication**: Bearer Token  
- **Response**:  
```json
{
  "message": "Logout successful"
}
```  

**`/captains/register`**  
Registers a new captain.  
- **Method**: POST  
- **Request Body**:  
```json
{
  "fullname": {
    "firstname": "string",
    "lastname": "string"
  },
  "email": "string",
  "password": "string",
  "vehicle": {
    "color": "string",
    "plate": "string",
    "capacity": "number",
    "vehicleType": "string"
  }
}
```  
- **Response**:  
```json
{
  "captain": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "vehicle": {
      "color": "string",
      "plate": "string",
      "capacity": "number",
      "vehicleType": "string"
    }
  },
  "token": "string"
}
```  

**`/captains/login`**  
Authenticates a captain.  
- **Method**: POST  
- **Request Body**:  
```json
{
  "email": "string",
  "password": "string"
}
```  
- **Response**:  
```json
{
  "captain": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "vehicle": {
      "color": "string",
      "plate": "string",
      "capacity": "number",
      "vehicleType": "string"
    }
  },
  "token": "string"
}
```  

**`/captains/profile`**  
Retrieves the authenticated captain's profile.  
- **Method**: GET  
- **Authentication**: Bearer Token  
- **Response**:  
```json
{
  "captain": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "vehicle": {
      "color": "string",
      "plate": "string",
      "capacity": "number",
      "vehicleType": "string"
    }
  }
}
```  

**`/captains/logout`**  
Logs out the current captain.  
- **Method**: GET  
- **Authentication**: Bearer Token  
- **Response**:  
```json
{
  "message": "Logout successful"
}
```  

**`/maps/get-coordinates`**  
Retrieves coordinates for an address.  
- **Method**: GET  
- **Query Parameters**:  
  - `address`: string (required)  
- **Response**:  
```json
{
  "ltd": "number",
  "lng": "number"
}
```  

**`/maps/get-distance-time`**  
Retrieves the distance and estimated travel time.  
- **Method**: GET  
- **Query Parameters**:  
  - `origin`: string (required)  
  - `destination`: string (required)  
- **Response**:  
```json
{
  "distance": {
    "text": "string",
    "value": "number"
  },
  "duration": {
    "text": "string",
    "value": "number"
  }
}
```  

**`/rides/create`**  
Creates a new ride.  
- **Method**: POST  
- **Authentication**: Bearer Token  
- **Request Body**:  
```json
{
  "pickup": "string",
  "destination": "string",
  "vehicleType": "string"
}
```  
- **Response**:  
```json
{
  "ride": {
    "user": "string",
    "pickup": "string",
    "destination": "string",
    "fare": "number",
    "status": "string",
    "duration": "number",
    "distance": "number",
    "otp": "string"
  }
}
```  

**`/rides/get-fare`**  
Estimates the fare for a ride.  
- **Method**: GET  
- **Authentication**: Bearer Token  
- **Query Parameters**:  
  - `pickup`: string (required)  
  - `destination`: string (required)  
- **Response**:  
```json
{
  "auto": "number",
  "car": "number",
  "moto": "number"
}
```  

Conclusion:
MeraSafar API simplifies user and captain management, ride creation, and map-related functionalities. For any additional questions or issues, please contact our support team.
