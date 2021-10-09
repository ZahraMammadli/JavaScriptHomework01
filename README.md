# Random Password Generator

## Description

This web application is to provide with possibility to generate random secure password based on the ctirerias requested by user.
Random password generator can be utilized by anyone who want to simplify password generation process and protect his/her identity while online.

# Technology utilized

HTML and CSS was utilized for the front end of the web page. JavaScript is used to implement logic of the random password generation.
Additional Note: in order to ensure password generated is truly random, without any patterns in placement of letters, numbers and special characters and to prevent potential repetition rando was utilised. Moreover while using conventional methods studied so far i had some of the cases where randomly generated password did not contain required criteria, despite the fact it was in the list of UserChoise Array (Numbers+Letters+Characters) and random selection.
"Rando.js helps JavaScript developers code randomness more simply, readably, and securely. Whether you need to find a random int/float between two numbers, pick a random value from an array, choose a random element from your jQuery object, grab a character from a string, toss a coin, or do anything of the like while even preventing repetitions, we've got you covered at a cryptographically strong level. The best part? Our library is extremely lightweight and developer friendly- which means it won't take a toll on your project, and it's uber-simple to implement."

For more information please refer to: https://randojs.com/

## Usage

Please open the website using following link: https://zahramammadli.github.io/JavaScriptHomework01/.
In order to initiate the process of password generation please click the red button "Generate Password).
Once clicked you will receive a promt message on top of the webpage asking for :

1. Please enter length of your password between 8 and 128
   This clarify how many digits your password will have. Note that you need to enter numbers in range of 8 and 128, otherwise you will receive an alert message.
2. If you want lower case letters in your password Press OK, otherwise cancel
3. If you want upper case letters in your password Press OK, otherwise cancel
4. If you want numbers in your password Press OK, otherwise cancel
5. If you want special characters in password Press OK, otherwise cancel
   Note: if none of the above options will be choosen you will receive an alert message stating at least 1 character need to be choosen.

Once all criterias defined new password will be generated and displayed on the page.

You can find screenshot of the page in the assets/images folder, follow link below:

`![ScreenCapture of the webpage](assets/images/frontend.png)`

## PageLink

GitLink: https://zahramammadli.github.io/JavaScriptHomework01/
GitHub: https://github.com/ZahraMammadli/JavaScriptHomework01/

rando: https://github.com/nastyox/Rando.js/blob/2.0.0-cryptographically-secure-version/code/plain-javascript/2.0.0/README.md
