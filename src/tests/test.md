# Testing Components

We define a **setup helper** to facilitate `component testing`.

The following instructions will help you with this:

### Setup Helper

- `render` - use this to render your component
- `debug` - use this to print your rendered component source
- `$` - use it to find element (same as **document.querySelector**)
- `$$` - use it to find elements (same as **document.querySelectorAll**)
- `document` - fell free to use this too.

### How it works

1. Define your handlebars file: `/views/partials/my-component.handlebars`

   ```html
   <div class="entry">
     <h1 id="title">{{title}}</h1>
     <div class="body">
       {{body}}
     </div>
   </div>
   ```

2. Create your test file: `/src/tests/components/my-component_test.js`

   ```javascript
   import { expect } from "chai";
   import render, { debug } from "../test_setup";

   describe("[Component] - MyComponent", () => {
     const stubInfo = { title: "mtest", body: "Hello World!" };

     it("should render the component correctly", async () => {
       await render("./views/partials/my-component.handlebars", stubInfo);
       debug(); // use this to log the component
       expect($("#title").textContent.trim()).to.be.eql(stubInfo.title);
     });
   });
   ```

3. Run your test -> `npm run test -- --grep MyComponent`