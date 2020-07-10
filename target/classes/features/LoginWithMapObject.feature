Feature: CRM Login Feature

#without Examples keyword
Scenario: CRM Login Test Scenario			# ctrl + /

Given User is already in Login Page
When The title of the login page is CRM
Then User enters user name and password 
| username 			| password 	|
| demo@techfios.com | abc123 	|

Then User clicks on the SignIn Button
Then User is on Home Page