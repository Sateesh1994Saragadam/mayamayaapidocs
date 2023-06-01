'use strict';


/**
 * Add a new user
 *
 * body AddUser_body 
 * returns inline_response_200
 **/
exports.addUserPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "jwtToken" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9......",
  "message" : "User Id pampanasaranyaaa@gmail.com successfully added and sent verification link",
  "userDetails" : {
    "profileDetails" : {
      "country" : "",
      "userPhoto" : "userPhoto",
      "ethnicity" : "",
      "gender" : "",
      "language" : "English",
      "userId" : "pampanasaranyaaa@gmail.com",
      "accountId" : "64783663a57001858ab7ec73",
      "orgCode" : [ {
        "code" : "-1000",
        "isPrimary" : "yes",
        "organization" : "MayaMaya"
      }, {
        "code" : "-1000",
        "isPrimary" : "yes",
        "organization" : "MayaMaya"
      } ],
      "profileId" : "64783663a57001858ab7ec9f",
      "specialConsiderations" : [ ],
      "name" : "Saranya",
      "userType" : "Individual User",
      "designation" : "",
      "region" : "",
      "department" : "",
      "email" : "pampanasaranyaaa@gmail.com",
      "age" : ""
    },
    "accountDetails" : {
      "deviceType" : "ANDROID",
      "registrationStatus" : "verified",
      "role" : "Professional",
      "coins" : "",
      "completedQuizCount" : "",
      "userBadgeType" : "Beginner",
      "userId" : "pampanasaranyaaa@gmail.com",
      "deviceId" : "DEVICEID123456789",
      "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.....",
      "accountId" : "64783663a57001858ab7ec73",
      "subscribedPlanType" : "Enterprise",
      "authType" : "INTERNAL",
      "completedSprintCount" : "",
      "completedQuestionCount" : ""
    }
  },
  "status" : "SUCCESS"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Load user profile
 *
 * userId String 
 * returns UserDetailsResponse
 **/
exports.loadUserProfileGET = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "lastResult" : {
    "resultDateTime" : "2000-01-23T04:56:07.000+00:00",
    "_id" : "_id"
  },
  "numberOfCompletedSprints" : "numberOfCompletedSprints",
  "countOfResults" : "countOfResults",
  "userDetails" : {
    "profileDetails" : {
      "country" : "country",
      "userPhoto" : "http://example.com/aeiou",
      "ethnicity" : "ethnicity",
      "gender" : "gender",
      "language" : "language",
      "accountId" : "accountId",
      "orgCode" : [ {
        "code" : "code",
        "isPrimary" : "isPrimary",
        "organization" : "organization"
      }, {
        "code" : "code",
        "isPrimary" : "isPrimary",
        "organization" : "organization"
      } ],
      "profileId" : "profileId",
      "specialConsiderations" : [ "specialConsiderations", "specialConsiderations" ],
      "name" : "name",
      "designation" : "designation",
      "userType" : "userType",
      "region" : "region",
      "department" : "department",
      "email" : "",
      "age" : "age"
    },
    "accountDetails" : {
      "deviceType" : "deviceType",
      "accountId" : "accountId",
      "visits" : "visits",
      "loginTime" : "2000-01-23T04:56:07.000+00:00",
      "role" : "role",
      "subscribedPlanType" : "subscribedPlanType",
      "userBadgeType" : "userBadgeType",
      "userId" : "userId",
      "deviceId" : "deviceId",
      "miramiraCoins" : "miramiraCoins"
    }
  },
  "status" : "status"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Login user
 *
 * body LoginUser_body 
 * returns inline_response_200_2
 **/
exports.loginUserPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "numberOfCompletedSprints" : "9",
  "jwtToken" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ......",
  "userDetails" : {
    "deviceType" : "Android",
    "accountId" : "628658d75d64dacdb7bb60a9",
    "registrationStatus" : "verified",
    "role" : "Professional",
    "coins" : "306",
    "subscribedPlanType" : "Enterprise Plan",
    "outhType" : "GOOGLE",
    "userBadgeType" : "Collaborator",
    "userId" : "raviteja.karri@chromiumsolutions.com",
    "deviceId" : "deviceId",
    "completedSprintCount" : "9"
  },
  "status" : "SUCCESS"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update registration status
 *
 * id String ID of the registration
 * returns inline_response_200_1
 **/
exports.update_registration_statusIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "verified successfully",
  "statusCode" : 200,
  "status" : "SUCCESS"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

