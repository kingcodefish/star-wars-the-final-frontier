/**
 * 
 * This game was designed with a different font in mind, install the Star Jedi Rounded font here: http://www.fontspace.com/category/star%20wars
 * Once installed, restart your browser to immerse yourself in the experience. :D
 * 
 */

/**
██╗  ██╗██╗███╗   ██╗ ██████╗  ██████╗ ██████╗ ██████╗ ███████╗███████╗██╗███████╗██╗  ██╗
██║ ██╔╝██║████╗  ██║██╔════╝ ██╔════╝██╔═══██╗██╔══██╗██╔════╝██╔════╝██║██╔════╝██║  ██║
█████╔╝ ██║██╔██╗ ██║██║  ███╗██║     ██║   ██║██║  ██║█████╗  █████╗  ██║███████╗███████║
██╔═██╗ ██║██║╚██╗██║██║   ██║██║     ██║   ██║██║  ██║██╔══╝  ██╔══╝  ██║╚════██║██╔══██║
██║  ██╗██║██║ ╚████║╚██████╔╝╚██████╗╚██████╔╝██████╔╝███████╗██║     ██║███████║██║  ██║
╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝ ╚═════╝  ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝╚═╝     ╚═╝╚══════╝╚═╝  ╚═╝
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
______   ___                   ______   
/\  _  \ /\_ \                 /\__  _\  
\ \ \L\ \\//\ \      __   __  _\/_/\ \/  
\ \  __ \ \ \ \   /'__`\/\ \/'\  \ \ \  
 \ \ \/\ \ \_\ \_/\  __/\/>  </   \ \ \ 
  \ \_\ \_\/\____\ \____\/\_/\_\   \ \_\
   \/_/\/_/\/____/\/____/\//\/_/    \/_/
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
      ___           ___           ___           ___           ___           ___           ___     
     /\  \         |\__\         /\  \         /\__\         /\__\         /\  \         /\__\    
    /::\  \        |:|  |        \:\  \       /:/  /        /:/  /        /::\  \       /::|  |   
   /:/\:\  \       |:|  |         \:\  \     /:/  /        /:/__/        /:/\:\  \     /:|:|  |   
  /::\~\:\  \      |:|__|__       /::\  \   /:/  /  ___   /::\__\____   /::\~\:\  \   /:/|:|  |__ 
 /:/\:\ \:\__\     /::::\__\     /:/\:\__\ /:/__/  /\__\ /:/\:::::\__\ /:/\:\ \:\__\ /:/ |:| /\__\
 \:\~\:\ \/__/    /:/~~/~       /:/  \/__/ \:\  \ /:/  / \/_|:|~~|~    \/__\:\/:/  / \/__|:|/:/  /
  \:\ \:\__\     /:/  /        /:/  /       \:\  /:/  /     |:|  |          \::/  /      |:/:/  / 
   \:\ \/__/     \/__/         \/__/         \:\/:/  /      |:|  |          /:/  /       |::/  /  
    \:\__\                                    \::/  /       |:|  |         /:/  /        /:/  /   
     \/__/                                     \/__/         \|__|         \/__/         \/__/   
________             _________            __________                     
___  __ \__________________  /___  _________  /___(_)____________________
__  /_/ /_  ___/  __ \  __  /_  / / /  ___/  __/_  /_  __ \_  __ \_  ___/
_  ____/_  /   / /_/ / /_/ / / /_/ // /__ / /_ _  / / /_/ /  / / /(__  ) 
/_/     /_/    \____/\__,_/  \__,_/ \___/ \__/ /_/  \____//_/ /_//____/  
- ⠠⠠⠉⠕⠙⠑⠀⠠⠠⠊⠎⠀⠠⠠⠏⠕⠑⠞⠗⠽ - C O D E  I S  P O E T R Y = -.-. --- -.. .   .. ...   .--. --- . - .-. -.-- =
 */

var keys = [];
var mouseOverButton = "";

var button = function(x, y, wid, hei, radius, tex, textSi, textFill, hoverTextFill, fi, hoverFi, stro, stroWei, hoverStro, hoverStroWei) {
    if(abs(x - mouseX) <= wid / 2 && abs(y - mouseY) <= hei / 2) {
        if(mouseIsPressed) {
            mouseOverButton = tex;
        }
        fill(hoverFi);
        stroke(hoverStro);
        strokeWeight(hoverStroWei);
    } else {
        fill(fi);
        stroke(stro);
        strokeWeight(stroWei);
    }
    rectMode(CENTER);
    rect(x, y, wid, hei, radius);
    if(abs(x - mouseX) <= wid / 2 && abs(y - mouseY) <= hei / 2) {
        fill(hoverTextFill);
    } else {
        fill(textFill);
    }
    textAlign(CENTER, CENTER);
    textSize(textSi);
    text(tex, x, y);
};

/** --- RENDERING & INPUT --- **/
var Menu = {
    draw: function() {
        background(0, 0, 0);
        stroke(255, 232, 31);
        strokeWeight(4);
        strokeCap(SQUARE);
        fill(0);
        pushMatrix();
        scale(0.7);
        translate(230, -30);
        //s & t
        beginShape();
            vertex(193,112);
            vertex(71,112);
            bezierVertex(47,115,46,142,71,162);
            vertex(2,162);
            vertex(2,191);
            vertex(87,191);
            bezierVertex(130,171,91,136,91,136);
            vertex(127,136);
            vertex(127,191);
            vertex(158,191);
            vertex(158,136);
            vertex(193,136);
            vertex(193,110);
        endShape();
        //a
        beginShape();
            vertex(206,112);
            vertex(182,191);
            vertex(211,191);
            vertex(216,179);
            vertex(242,179);
            vertex(246,191);
            vertex(277,191);
            vertex(252,112);
            vertex(205.0,112);
        endShape();
        beginShape();
            vertex(230,137);
            vertex(223,156);
            vertex(236,156);
            vertex(230,137);
        endShape();
        //R
        beginShape();
            vertex(284,112);
            vertex(284,191);
            vertex(314,191);
            vertex(314,170);
            vertex(338,191);
            vertex(395,191);
            vertex(395,162);
            vertex(351,162);
            bezierVertex(376,140,360,118,351,112);
            vertex(282,112);
        endShape();
        beginShape();
            vertex(316,133);
            vertex(336,133);
            bezierVertex(339,138,336,143,336,143);
            vertex(316,143);
            vertex(316,131);
        endShape();
        //translate(0,25);
        //W
        beginShape();
            vertex(36,199);
            vertex(1,199);
            vertex(29,280);
            vertex(55,280);
            vertex(65,250);
            vertex(75,280);
            vertex(103,280);
            vertex(125,199);
            vertex(96,199);
            vertex(91,217);
            vertex(84,199);
            vertex(48,199);
            vertex(42,217);
            vertex(36,199);
        endShape();
        //a
        pushMatrix();
        translate(-64,87);
        beginShape();
            vertex(206,112);
            vertex(182,192);
            vertex(211,192);
            vertex(216,179);
            vertex(242,179);
            vertex(246,192);
            vertex(277,192);
            vertex(252,112);
            vertex(205.0,112);
        endShape();
        beginShape();
            vertex(230,137);
            vertex(223,156);
            vertex(236,156);
            vertex(230,137);
        endShape();
        popMatrix();
        pushMatrix();
        translate(-63,88);
        //R
        beginShape();
            vertex(284,112);
            vertex(284,191);
            vertex(314,191);
            vertex(314,170);
            vertex(338,191);
            vertex(416,191);
            bezierVertex(416,191,456,172,419,137);
            vertex(457,137);
            vertex(457,112);
            vertex(408,112);
            bezierVertex(362,120,388,155,395,162);
            vertex(351,162);
            bezierVertex(376,140,360,118,351,112);
            vertex(282,112);
        endShape();
        beginShape();
            vertex(316,133);
            vertex(336,133);
            bezierVertex(339,138,336,143,336,143);
            vertex(316,143);
            vertex(316,131);
        endShape();
        popMatrix();
        popMatrix();
        fill(255, 232, 31);
        textSize(40);
        text("The Final Frontier", 300, 220);
        button(300, 300, 200, 53, 10, "Play", 24, color(0, 0, 0), color(255, 242, 0), color(255, 255, 255), color(0, 0, 0), color(0, 0, 0, 100), 2, color(0, 0, 0, 100), 2);
        button(300, 360, 200, 53, 10, "options", 24, color(0, 0, 0), color(255, 242, 0), color(255, 255, 255), color(0, 0, 0), color(0, 0, 0, 100), 2, color(0, 0, 0, 100), 2);
        button(300, 420, 200, 53, 10, "Credits", 24, color(0, 0, 0), color(255, 242, 0), color(255, 255, 255), color(0, 0, 0), color(0, 0, 0, 100), 2, color(0, 0, 0, 100), 2);
    }
};
var GameHandler = {
    currScreen: "menu",
    update: function() {
        // Default Styling
        noStroke();
        strokeWeight(1);
        rectMode(CENTER);
        textAlign(CENTER, CENTER);
        textFont(createFont("Star Jedi Rounded"));
        
        switch(this.currScreen) {
            case "menu":
                Menu.draw();
                break;
        }
    }
};
draw = function() {
    GameHandler.update();
};
