Janken refers to rock-paper-scissors in Japanese.

For best support, please use modern web browsers.

Used libraries :
- None

Used frameworks : 
- None

The game is written in pure HTML, CSS and Javascript. There is node.js boilerplate for player vs player, but it is not developed yet.

## To use, just open index.html in your favorite browser.

Task: 
- Develop a Rock – Paper – Scissors game

Output:
- [x] Develop it a web page or NodeJS app
- [x] Test your code.
- [x] Document your project
- [x] Put the source codes in public GitHub

Rules:
- [x] Player vs AI
- [x] Do not use any third-party framework (react, angular, etc.).
- [x] Basic level libraries, transpilers (babel, webpack), unit testing tools & libs are allowed.

Structure :
- I used three different .png file for rock-paper-scissors stripes. They are located in stripes/ folder. I used CSS to flip them, for better design.
- index.js is where DOM level JavaScript codes at. It is responsible to update elements in the page.
- main.jss is only CSS file i used. 
- At game/ directory : 
    - ai.js and player.js hold their last choice and their respective logic to make move. I only use variables there to determine score.
    - I just used random for ai. It is hardly called ai.
    - at game.js, i determine who wins and update/reset scores.
- At index.html
    - Every single frame has their respective divs.
    - I styled img and h3 to avoid using obsolete classes.
    - I separated first and second players score or choice properly, to add two player support right away.

Notes:
- Game can currently support AI vs AI.
- Player vs Player can be done with using same page, not via internet.
- It is indeed can be done in a couple hours, but i took my time to improve things a little.
- It doesn't currently show who picked who at the last round, only shows who won.
- I didn't use any unit test, but i tested app in two different browsers. ( chromium and konqueror )

Future features :
- [ ] Better AI with prediction algorithms
- [ ] Player vs Player support via Socket.io or direct link
- [ ] Animated designs
- [ ] 