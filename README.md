# react-dynamic-import-example
This is a simple application that uses dynamic imports for code splitting. Try monitoring the network requests or mess around with your throttling settings in your in your browser's DevTools to see it in action!

### In summary:
```js
const validatePassword = (password) => {
    const { default: zxcvbn } = await import("zxcvbn");
    
    // Do something with the imported module
    let response = zxcvbn(password);
}
```
The full logic can be viewed within the source code.

### What does the demo application do?
It is a dummy website that uses React Router to implement two routes: a home page and a register page. The register page is the main page. Within this page, the user can validate how strong their password is. This is powered using [`zxcvbn`](https://github.com/dropbox/zxcvbn), an amazing library by Dropbox. The only downside with it is that it is ~800KB minified! This is where code splitting with dynamic import statements can come real handy.

### Note about building
When building, for some odd reason the zxcvbn chunk is called `main.[hash].js`. I am not sure why but don't get confused, as zxcvbn has been code split! If you want to double check, take a look at the generated `vendor.[hash].js` and `main.[hash].js` file.