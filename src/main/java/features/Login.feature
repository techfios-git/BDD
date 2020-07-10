Feature: CRM Login Feature

#without Examples keyword
#Scenario: CRM Login Test Scenario			# ctrl + /
#
#Given User is already in Login Page
#When The title of the login page is CRM
#Then User enters "demo@techfios.com"  and "abc123" 
#Then User clicks on the SignIn Button
#Then User is on Home Page


#with Examples keyword
Scenario Outline: CRM Login Test Scenario			# ctrl + /

Given User is already in Login Page
When The title of the login page is CRM
Then User enters "<username>"  and "<password>" 
Then User clicks on the SignIn Button
Then User is on Home Page
#Then Close Browser

Examples:
	| username 			| password 	|
	|demo@techfios.com 	| abc123 	|
	|afifa@techfios.com | def456 	|
	
	
	
Scenario Outline: Add New Deposit Scenario			# ctrl + /

Given User is already in Login Page
When The title of the login page is CRM
Then User enters "<username>"  and "<password>" 
Then User clicks on the SignIn Button
Then User is on Home Page
Then User clicks on Transactions Button
Then User clicks on New Deposit Button
Then User selects a value "<accountData>" from Account dropdown
Then User enters Description "<description>"
Then User enters Amount "<amount>"
Then User clicks on Submit Button

#Then Close Browser

Examples:
	| username 			| password 	| accountData 	| description 	| amount 	|
	|demo@techfios.com 	| abc123 	| Mean680		| BddTest		| 500		|
	