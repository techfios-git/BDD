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
formatter.step({
  "line": 21,
  "name": "Close Browser",
  "keyword": "Then "
});
formatter.examples({
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
formatter.step({
  "line": 21,
  "name": "Close Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.user_is_already_in_Login_Page()"
});
formatter.result({
  "duration": 7982558500,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.the_title_of_the_login_page_is_CRM()"
});
formatter.result({
  "duration": 13961200,
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
  "duration": 358270700,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_clicks_on_the_SignIn_Button()"
});
formatter.result({
  "duration": 1554217500,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 12904900,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.close_Browser()"
});
formatter.result({
  "duration": 863675200,
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
formatter.step({
  "line": 21,
  "name": "Close Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.user_is_already_in_Login_Page()"
});
formatter.result({
  "duration": 6136235400,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.the_title_of_the_login_page_is_CRM()"
});
formatter.result({
  "duration": 10824300,
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
  "duration": 308623500,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_clicks_on_the_SignIn_Button()"
});
formatter.result({
  "duration": 962414400,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 9676600,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Dashboard]- iBilling\u003e but was:\u003c[Login ]- iBilling\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat stepDefination.StepDef.user_is_on_Home_Page(StepDef.java:54)\r\n\tat ✽.Then User is on Home Page(./src/main/java/features/Login.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDef.close_Browser()"
});
formatter.result({
  "status": "skipped"
});
});