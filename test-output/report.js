$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/main/java/features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "CRM Login Feature",
  "description": "",
  "id": "crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#without Examples keyword"
    },
    {
      "line": 4,
      "value": "#Scenario: CRM Login Test Scenario\t\t\t# ctrl + /"
    },
    {
      "line": 5,
      "value": "#"
    },
    {
      "line": 6,
      "value": "#Given User is already in Login Page"
    },
    {
      "line": 7,
      "value": "#When The title of the login page is CRM"
    },
    {
      "line": 8,
      "value": "#Then User enters \"demo@techfios.com\"  and \"abc123\""
    },
    {
      "line": 9,
      "value": "#Then User clicks on the SignIn Button"
    },
    {
      "line": 10,
      "value": "#Then User is on Home Page"
    },
    {
      "line": 13,
      "value": "#with Examples keyword"
    }
  ],
  "line": 14,
  "name": "CRM Login Test Scenario\t\t\t# ctrl + /",
  "description": "",
  "id": "crm-login-feature;crm-login-test-scenario---#-ctrl-+-/",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User is already in Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "The title of the login page is CRM",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters \"\u003cusername\u003e\"  and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User clicks on the SignIn Button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User is on Home Page",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 21,
      "value": "#Then Close Browser"
    }
  ],
  "line": 23,
  "name": "",
  "description": "",
  "id": "crm-login-feature;crm-login-test-scenario---#-ctrl-+-/;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 24,
      "id": "crm-login-feature;crm-login-test-scenario---#-ctrl-+-/;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123"
      ],
      "line": 25,
      "id": "crm-login-feature;crm-login-test-scenario---#-ctrl-+-/;;2"
    },
    {
      "cells": [
        "afifa@techfios.com",
        "def456"
      ],
      "line": 26,
      "id": "crm-login-feature;crm-login-test-scenario---#-ctrl-+-/;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "CRM Login Test Scenario\t\t\t# ctrl + /",
  "description": "",
  "id": "crm-login-feature;crm-login-test-scenario---#-ctrl-+-/;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User is already in Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "The title of the login page is CRM",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters \"demo@techfios.com\"  and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User clicks on the SignIn Button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User is on Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.user_is_already_in_Login_Page()"
});
formatter.result({
  "duration": 7836742200,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.the_title_of_the_login_page_is_CRM()"
});
formatter.result({
  "duration": 14538600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 13
    },
    {
      "val": "abc123",
      "offset": 38
    }
  ],
  "location": "StepDef.user_enters_UserName_and_Password(String,String)"
});
formatter.result({
  "duration": 333082500,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_clicks_on_the_SignIn_Button()"
});
formatter.result({
  "duration": 1495464900,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 13394700,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "CRM Login Test Scenario\t\t\t# ctrl + /",
  "description": "",
  "id": "crm-login-feature;crm-login-test-scenario---#-ctrl-+-/;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User is already in Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "The title of the login page is CRM",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters \"afifa@techfios.com\"  and \"def456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User clicks on the SignIn Button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User is on Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.user_is_already_in_Login_Page()"
});
formatter.result({
  "duration": 6373677600,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.the_title_of_the_login_page_is_CRM()"
});
formatter.result({
  "duration": 14437700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "afifa@techfios.com",
      "offset": 13
    },
    {
      "val": "def456",
      "offset": 39
    }
  ],
  "location": "StepDef.user_enters_UserName_and_Password(String,String)"
});
formatter.result({
  "duration": 345135100,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_clicks_on_the_SignIn_Button()"
});
formatter.result({
  "duration": 1040814000,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 10248200,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Dashboard]- iBilling\u003e but was:\u003c[Login ]- iBilling\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat stepDefination.StepDef.user_is_on_Home_Page(StepDef.java:52)\r\n\tat ✽.Then User is on Home Page(./src/main/java/features/Login.feature:20)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 30,
  "name": "Add New Deposit Scenario\t\t\t# ctrl + /",
  "description": "",
  "id": "crm-login-feature;add-new-deposit-scenario---#-ctrl-+-/",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "User is already in Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "The title of the login page is CRM",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "User enters \"\u003cusername\u003e\"  and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "User clicks on the SignIn Button",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "User is on Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "User clicks on Transactions Button",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "User clicks on New Deposit Button",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "User selects a value \"\u003caccountData\u003e\" from Account dropdown",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "User enters Description \"\u003cdescription\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "User enters Amount \"\u003camount\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "User clicks on Submit Button",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 44,
      "value": "#Then Close Browser"
    }
  ],
  "line": 46,
  "name": "",
  "description": "",
  "id": "crm-login-feature;add-new-deposit-scenario---#-ctrl-+-/;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accountData",
        "description",
        "amount"
      ],
      "line": 47,
      "id": "crm-login-feature;add-new-deposit-scenario---#-ctrl-+-/;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "Mean680",
        "BddTest",
        "500"
      ],
      "line": 48,
      "id": "crm-login-feature;add-new-deposit-scenario---#-ctrl-+-/;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 48,
  "name": "Add New Deposit Scenario\t\t\t# ctrl + /",
  "description": "",
  "id": "crm-login-feature;add-new-deposit-scenario---#-ctrl-+-/;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "User is already in Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "The title of the login page is CRM",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "User enters \"demo@techfios.com\"  and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "User clicks on the SignIn Button",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "User is on Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "User clicks on Transactions Button",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "User clicks on New Deposit Button",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "User selects a value \"Mean680\" from Account dropdown",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "User enters Description \"BddTest\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "User enters Amount \"500\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "User clicks on Submit Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.user_is_already_in_Login_Page()"
});
formatter.result({
  "duration": 6473649500,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.the_title_of_the_login_page_is_CRM()"
});
formatter.result({
  "duration": 11211200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 13
    },
    {
      "val": "abc123",
      "offset": 38
    }
  ],
  "location": "StepDef.user_enters_UserName_and_Password(String,String)"
});
formatter.result({
  "duration": 299836300,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_clicks_on_the_SignIn_Button()"
});
formatter.result({
  "duration": 1651477400,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 38224900,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_clicks_on_Transactions_Button()"
});
formatter.result({
  "duration": 109530300,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_clicks_on_New_Deposit_Button()"
});
formatter.result({
  "duration": 1132493900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mean680",
      "offset": 22
    }
  ],
  "location": "StepDef.user_selects_a_value_from_Account_dropdown(String)"
});
formatter.result({
  "duration": 224947100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BddTest",
      "offset": 25
    }
  ],
  "location": "StepDef.user_enters_Description(String)"
});
formatter.result({
  "duration": 234334900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 20
    }
  ],
  "location": "StepDef.user_enters_Amount(String)"
});
formatter.result({
  "duration": 119440500,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_clicks_on_Submit_Button()"
});
formatter.result({
  "duration": 226672900,
  "status": "passed"
});
});