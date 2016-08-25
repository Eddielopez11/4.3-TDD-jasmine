(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var profileHTML = this;

profileHTML.init = function(){
  profileHTML.replaceHTML();
}

profileHTML.renderProfileName = function() {
  return `<h2 data-js="name"></h2>`;
};

profileHTML.renderProfileEmail = function() {
  return `<h3 data-js="email"></h3>`
};

profileHTML.renderProfileBlog = function() {
  return `<h3 data-js="blog"></h3>`
};

profileHTML.renderProfileLocation = function() {
  return `<h3 data-js="location"></h3>`
};

profileHTML.renderProfileURL = function() {
  return `<h3 data-js="userURL"></h3>`
};

profileHTML.renderProfileAvatar = function() {
  return `<img data-js="avatarURL" src="" alt=""/>`
};

profileHTML.replaceHTML = function() {
  document.write(profileHTML.renderProfileAvatar() + profileHTML.renderProfileName() + profileHTML.renderProfileLocation() + profileHTML.renderProfileURL() + profileHTML.renderProfileEmail() + profileHTML.renderProfileBlog())
};

},{}],2:[function(require,module,exports){

var xml = require("./xml.js")
var profileHTML = require("./htmlProfile.js")

document.addEventListener("DOMContentLoaded", function(e){

  profileHTML.init();
  xml.init();

});

},{"./htmlProfile.js":1,"./xml.js":3}],3:[function(require,module,exports){
// ajax github profile
var profile = this;

profile.init = function(){

  profile.gitName = document.querySelector("[data-js='name']");
  profile.blog = document.querySelector("[data-js='blog']");
  profile.location = document.querySelector("[data-js='location']");
  profile.email = document.querySelector("[data-js='email']");
  profile.avatarURL = document.querySelector("[data-js='avatarURL']");
  profile.htmlURL = document.querySelector("[data-js='userURL']");

  profile.requestProfile = new XMLHttpRequest();

  profile.requestProfile.addEventListener('load', function(e) {
    profile.profileJSON = JSON.parse(e.target.response);
    console.log(profile.profileJSON);
    profile.gitName.textContent = profile.profileJSON.name;
    console.log(profile.gitName.textContent);
    profile.blog.textContent = profile.profileJSON.blog;
    profile.location.textContent = profile.profileJSON.location;
    profile.email.textContent = profile.profileJSON.email;
    profile.avatarURL.src = profile.profileJSON.avatar_url;
    profile.htmlURL.textContent = profile.profileJSON.url;
  });


  profile.requestProfile.open("GET", "https://api.github.com/users/Eddielopez11");
  profile.requestProfile.send(null);

};

},{}]},{},[2]);
