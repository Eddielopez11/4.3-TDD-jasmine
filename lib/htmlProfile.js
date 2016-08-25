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
