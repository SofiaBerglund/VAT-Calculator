# Build a VAT-calculator

Today's assignment will allow you to practice your React skills, and let you practice how to create controlled components to give you control of form elements which would otherwise store their own state.

We are going to build a VAT-calculator with the same functionality as [this one](http://www.driva-eget.se/kalkyler/moms). To make it look nice is a stretch goal. Focus on functionality first.

**They key behind this design is that you can change any of the 3 inputs; VAT rate (momssats), Inklusive moms, and Exklusive moms, and the other fields will automatically update.**

Have a look at the [VAT-calcultor](http://www.driva-eget.se/kalkyler/moms) and see what happens if you put numbers in the different fields.

:rotating_light: **One thing can be saved to stretch goals, you DON'T need to include that you can write you own VAT-percentage.** :rotating_light: Start with just the regular 25%, 12% and 6%.

## How to complete this assignment

### Project setup

In the `code` folder in this assignment you'll find a copy of the Technigo React starter project which you can use as a base to complete this assignment. In the terminal, "cd" into that folder and install dependencies by running `npm install`. Once that's done, you can start the project by running `npm start`.

### React Components

You should consider how to divide the app into components. Using the technique discussed during the morning's lecture, you will need to create controlled input components which both use, and update state.

### How to calculate VAT

To make life a little easier for you, we've built two functions to help:

* `exVatToIncVat` for calculating the inc vat value from passing in the vat percentage and the ex vat value
* `incVatToExtVat` for calculating the ex vat value from passing in the vat percentage and the inc vat value

You can find an example usage of both in `src/components/app.js`. Use these functions when setting your state.

### State

You will need to store 3 values in state, so a suggested initial state would look something like this:

```javascript
constructor(props) {
  super(props)
  this.state = {
    vatRate: 25,
    incVat: 0,
    exVat: 0
  }
}
```

Then use `this.state.vatRate` on the vat rate radio buttons, `this.state.incVat` on the "including vat" text field, and finally `this.state.exVat` on the "excluding vat" text field.

When any field is updated, you use the event to get that fields value to set it in react's state. When you do this, you will need to update the other field's state to make the calculations happen. This is how the fields will stay tied together, because the calculations will run on all fields except the one which was updated...

So, if the user changes the "vat rate" (momssats), then you need to calculate the "including vat" and "excluding vat" values and insert them into the `incVat` and `exVat` states. If they change the "including vat" number, then you only need to calculate "excluding vat", and inversely, if they only change "excluding vat" then you only need to calculate "including vat".

SOOOO, for example, if the user changed the ex vat input, when handling the event, you will need something like this in your setState call:

```javascript
{
  incVat: exVatToIncVat(this.state.vatRate, parseInt(event.target.value)),
  exVat: parseInt(event.target.value)
}
```

### Create a pull request

As always, to complete this assignment, you need to fork this repository, make changes to your copy, and then submit a pull request on GitHub (from your repository into the technigo one) for review. Don't forget to add a link to your inspiration for your form into the `README.md` file in the starter code.

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

After completing this assignment you will be comfortable using state and forms in React. You will also practice your JavaScript skills by writing logical functions.

---

### :runner: Stretch Goals

Done with the main task? Here's some ideas for things to continue with:

1. Implement the free text input to allow entry of any VAT level, like [Driva eget](http://www.driva-eget.se/kalkyler/moms) allows.
1. Use CSS to make the form look nice.
1. Validate that the input is a number.
1. Format the numbers in the fields so they follow the same formatting rules as the site you're taking inspiration from (so the number "11777.66" should be formatted to look like "11 777,66")
