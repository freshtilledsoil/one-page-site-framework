One Page Site Framework
=======================

Framework for quickly starting one page websites

Libraries/Technologies
----------------------

Built using HTML5 and CSS3 best practices. File structure is based on the [HTML5 Boilerplate](http://html5boilerplate.com/). Reset CSS and base typography from Twitter's [Boostrap](http://twitter.github.com/bootstrap/). [Sass](http://sass-lang.com/) and [Bourbon](https://github.com/thoughtbot/bourbon) to make CSS development more rapid.

Working with this repo
----------------------

Watch Sass directory and include Bourbon with this command:

sass --watch stylesheets/sass:stylesheets -r ./stylesheets/sass/bourbon/lib/bourbon.rb

Do not make edits directly to the stylesheets/application.css file. If you do that, any changes you make will be overwritten the next time someone edits the .scss files in the sass directory. All style changes should be made in the .scss files, if you don't know how to do that please refer to the documentation linked to above.
