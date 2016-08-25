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
