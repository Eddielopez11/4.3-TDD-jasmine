var profileHTML = this;

profileHTML.init = function(){
  profileHTML.wrapWithinMain();
}

profileHTML.renderProfileName = function() {
  return `<h2 data-js="name" class="name"></h2>`;
};

profileHTML.renderProfileEmail = function() {
  return `<h3 data-js="email" class="email"></h3>`
};

profileHTML.renderProfileBlog = function() {
  return `<h3 data-js="blog" class="blog"></h3>`
};

profileHTML.renderProfileLocation = function() {
  return `<h3 data-js="location" class="location"></h3>`
};

profileHTML.renderProfileURL = function() {
  return `<h3 data-js="userURL" class="userURL"></h3>`
};

profileHTML.renderProfileAvatar = function() {
  return `<img data-js="avatarURL" class="avatar" src="" alt=""/>`
};

profileHTML.combineHTML =
  profileHTML.renderProfileAvatar() + profileHTML.renderProfileName()
  + profileHTML.renderProfileLocation() + profileHTML.renderProfileURL()
  + profileHTML.renderProfileEmail() + profileHTML.renderProfileBlog();

profileHTML.wrapWithinMain = function() {
  document.write(`<main>${profileHTML.combineHTML}</main>`);
};
