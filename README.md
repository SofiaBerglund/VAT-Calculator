# Build a VAT-calculator

Today's assignment is to further practice React and state in React. We are going to build a VAT-calculator with the same functionality as [this one.](http://www.driva-eget.se/kalkyler/moms) It doens't have to look the same but the way it functions should be copied. 

**Functionality:**
* By changing % of VAT the number in the other fields should autmatically update with no page reload. 
* The excluding VAT field should automatically update the incuding VAt-field and vice versa witouth a page re-load. 

Have a look at the [VAT-calcultor](http://www.driva-eget.se/kalkyler/moms) and see what happens if you put numbers in the different fields – your version should have the same functionality. :rotating_light: One thing can be saved to strench goals, you DON't need to include that you can write you own VAT-procentage. :rotating_light: Start with just 25%, 12% and 6%. 

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
Start by focusing on just one of the fields, take the fields value when it submits and use the function above. Update the state of the other field and render the result there. 



