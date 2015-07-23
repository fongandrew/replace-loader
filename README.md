# replace-loader
A simple Webpack loader that applies regular expression replacement to a file

Sample config usage that replaces instances of "green" with "blue":

```javascript
module.exports = {
  
  /* Other Stuff */
  
  modules: {
    loaders: [
      { test: /\.css$/,
        loader: "style!css!replace?flags=g&regex=green&sub=blue" }
    ]
  }
}
```

Options
* regex - The regular expression. This string will be dropped as is into the 
  RegExp constructor, so make sure things are escaped properly.
* flags - Flags used to construct the regular expression
* sub - Replacement text
