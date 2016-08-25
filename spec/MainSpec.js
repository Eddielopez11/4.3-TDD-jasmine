var profileHTML = require("../lib/htmlProfile.js")

// "../lib/<fileName>.js"
describe("profileHTML", function(){
  it("creates html string of profile name", function(){
    expect(profileHTML.renderProfileName()).toEqual(`<h2 data-js="name" class="name"></h2>`);
  });
  it("creates html string of profile email", function(){
    expect(profileHTML.renderProfileEmail()).toEqual(`<h3 data-js="email" class="email"></h3>`);
  });
  it("creates html string of profile blog", function(){
    expect(profileHTML.renderProfileBlog()).toEqual(`<h3 data-js="blog" class="blog"></h3>`)
  });
  it("creates html string of profile location", function(){
    expect(profileHTML.renderProfileLocation()).toEqual(`<h3 data-js="location" class="location"></h3>`)
  });
  it("creates html string of profile url", function(){
    expect(profileHTML.renderProfileURL()).toEqual(`<h3 data-js="userURL" class="userURL"></h3>`)
  });
  it("creates html string of img scr for profile avatarURL", function(){
    expect(profileHTML.renderProfileAvatar()).toEqual(`<img data-js="avatarURL" class="avatar" src="" alt=""/>`)
  });
});
