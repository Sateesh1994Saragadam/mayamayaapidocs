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
 * Get questions by quiz ID
 *
 * body GetQuestionsByQuizId_body 
 * returns List
 **/
exports.getQuestionsByQuizIdPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "questionId" : "questionId",
  "questionContext" : "questionContext",
  "questionOptions" : [ {
    "optionVal" : "optionVal",
    "optionId" : "optionId",
    "optionGrade" : "optionGrade",
    "tags" : { }
  }, {
    "optionVal" : "optionVal",
    "optionId" : "optionId",
    "optionGrade" : "optionGrade",
    "tags" : { }
  } ],
  "_quizId" : "_quizId",
  "_id" : "_id",
  "category" : "category",
  "classification" : "classification",
  "questionStatus" : "questionStatus",
  "questionText" : "questionText",
  "questionNumber" : "questionNumber"
}, {
  "questionId" : "questionId",
  "questionContext" : "questionContext",
  "questionOptions" : [ {
    "optionVal" : "optionVal",
    "optionId" : "optionId",
    "optionGrade" : "optionGrade",
    "tags" : { }
  }, {
    "optionVal" : "optionVal",
    "optionId" : "optionId",
    "optionGrade" : "optionGrade",
    "tags" : { }
  } ],
  "_quizId" : "_quizId",
  "_id" : "_id",
  "category" : "category",
  "classification" : "classification",
  "questionStatus" : "questionStatus",
  "questionText" : "questionText",
  "questionNumber" : "questionNumber"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get quizzes by sprint ID
 *
 * body GetQuizsBySprintId_body 
 * returns List
 **/
exports.getQuizsBySprintIdPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "totalQuestionCount" : "totalQuestionCount",
  "quizId" : "quizId",
  "quizName" : "quizName",
  "skippedQuestionCount" : "skippedQuestionCount",
  "_id" : "_id",
  "quizNumber" : "quizNumber",
  "_sprintId" : "_sprintId",
  "completedQuestionCount" : "completedQuestionCount"
}, {
  "totalQuestionCount" : "totalQuestionCount",
  "quizId" : "quizId",
  "quizName" : "quizName",
  "skippedQuestionCount" : "skippedQuestionCount",
  "_id" : "_id",
  "quizNumber" : "quizNumber",
  "_sprintId" : "_sprintId",
  "completedQuestionCount" : "completedQuestionCount"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get result details by ID
 *
 * resultId String The ID of the result
 * returns GetResultDetailsResponse
 **/
exports.getResultDetailsByIdGET = function(resultId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "resultDetails" : {
    "resultHeadPara" : "resultHeadPara",
    "sprintId" : "sprintId",
    "resultDateTime" : "resultDateTime",
    "spiritResult" : {
      "quadscore" : "quadscore",
      "blurb" : "blurb",
      "quadDisplay" : "quadDisplay"
    },
    "_id" : "_id",
    "userId" : "userId"
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
 * Get sprint results for a user
 *
 * body GetSprintResult_body 
 * returns List
 **/
exports.getSprintResultPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "", "" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get user sprints
 *
 * userId String User ID
 * returns List
 **/
exports.getUserSprintsGET = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "sprintId" : "sprintId",
  "sprintStatus" : "sprintStatus",
  "sprintName" : "sprintName",
  "_id" : "_id"
}, {
  "sprintId" : "sprintId",
  "sprintStatus" : "sprintStatus",
  "sprintName" : "sprintName",
  "_id" : "_id"
} ];
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
 * Update a question
 *
 * body UpdateQuestionRequest 
 * returns UpdateQuestionResponse
 **/
exports.updateQuestionPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "message",
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
 * Update user profile
 *
 * body UpdateUserProfileRequest 
 * returns UpdateUserProfileResponse
 **/
exports.updateUserProfilePOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "message",
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


/**
 * Get skill results dates
 *
 * userId String The ID of the user
 * returns GetSkillResultsDatesResponse
 **/
exports.usersGet_skill_results_datesGET = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : [ {
    "resultDateTime" : "resultDateTime",
    "isRead" : true,
    "_id" : "_id",
    "isViewable" : true
  }, {
    "resultDateTime" : "resultDateTime",
    "isRead" : true,
    "_id" : "_id",
    "isViewable" : true
  } ],
  "message" : "message",
  "statusCode" : 0,
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
 * Update skill result view
 *
 * body UpdateSkillResultViewRequest 
 * returns UpdateSkillResultViewResponse
 **/
exports.usersUpdate_skill_result_viewPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : {
    "upsertedId" : "upsertedId",
    "upsertedCount" : 1,
    "acknowledged" : true,
    "modifiedCount" : 6,
    "matchedCount" : 5
  },
  "message" : "message",
  "statusCode" : 0,
  "status" : "status"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

