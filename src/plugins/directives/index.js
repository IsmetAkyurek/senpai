/*eslint no-extend-native: ["error", { "exceptions": ["Number", "String"] }]*/
String.prototype.capitalize = function (x) {
  return this.charAt(0).toUpperCase() + this.slice(1);
};