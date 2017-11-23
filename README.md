# Build a VAT-calculator

Today's assignment is to further practice React and state in React. We are going to build a VAT-calculator with the same functionality as [this one.](http://www.driva-eget.se/kalkyler/moms) It doens't have to look the same but the way it functions should be copied. 

**Functionality:**
* By changing % of VAT the number in the other fields should autmatically update with no page reload. 
* The excluding VAT field should automatically update the incuding VAt-field and vice versa witouth a page re-load. 

Have a look at the [VAT-calcultor](http://www.driva-eget.se/kalkyler/moms) and see what happens if you put numbers in the different fields – your version should have the same functionality. :rotating_light: One thing can be saved to strench goals, you DON't need to include that you can write you own VAT-procentage. :rotating_light: Start with just the regular 25%, 12% and 6%. 

## How to complete this assignment

### Project setup

In the `code` folder in this assignment you'll find a copy of the Technigo React starter project which you can use as a base to complete this assignment! In the terminal, "cd" into that folder and install dependencies by running `npm install`. Once that's done, you can start the project by running `npm start`.

### React Components

Damien, change: 

Start by thinking of how to divide your page into React components. For example, you might want to build a `Page` component which is responsible for reading the JSON, and a `Product` component which the `Page` could render for each product. Try to draw out your plan on paper to get it clear in your mind.

### How to calculate VAT

To make life a little easier for you, you can use the two functions below to calculate the VAT. 

Damien, plz write this in Javascript. 

```
A function that takes the VAT % and price as an argument. 

From excluding VAT -> Including VAT
vat = (vat/100)+1 (1,25 for 25% VAT)
incVatPrice = price * vat

From including VAT -> Excluding
vat = (vat/100)+1 (1,25 for 25% VAT)
eclVatPrice = price/vat

```
Start simple and focus on making one field update the other. Then implement the other way around. 

To complete this assignment, you need to fork this repository, make changes to your copy, and then submit a pull request on GitHub (from your repository into the technigo one) for review. Don't forget to add a link to your inspiration for your form into the `README.md` file in the starter code.

### :books: Reading List

* [Forms in React](https://reactjs.org/docs/forms.html)
* [High School Maths – how to calculate VAT (SWEDISH!)](https://matematikvideo.se/rakna-med-moms-sa-fungerar-momsen-matematiskt/)

---

### :sos: How to get help
Learning how to think as a web developer is learning how to be an expert in problem solving. So whenever you get stuck start with step 1 and continue until problem solved.

1. Google! In English, type in the error message if there is one, search within the language you're using (ie CSS, JavaScript etc).
2. Ask your code buddies in your Company.
3. Ask your fellow students in Slack.
4. Ask Damien. Please note: we are part of a sharing community - share the answer with your fellows.

---

### :boom: Success!

After completing this assignment you will be comfortable using state and forms in React. You will also practice your Javascript skills by writing logical functions. 

---

### :runner: Stretch Goals

Done with the main task? Here's some ideas for things to continue with:

1. Implement the free text input for any VAT level, see [Driva eget](http://www.driva-eget.se/kalkyler/moms) for inspo. 
2. Add a focus effect on the input tags (Using the CSS `:focus` pseudo-selector). Make the border or the background of the field change colour and add a glow effect.
3. Validate that the input is a number. 
