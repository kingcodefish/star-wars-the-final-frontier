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

/**
 * 
 * To get the most out of this game, install the Star Jedi Rounded font here: http://www.fontspace.com/category/star%20wars
 * 
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
        button(300, 300, 200, 53, 10, "Play", 24, color(0, 0, 0), color(82, 82, 82), color(255, 255, 255), color(200, 200, 200, 100), color(0, 0, 0, 100), 2, color(0, 0, 0, 100), 2);
        button(300, 360, 200, 53, 10, "options", 24, color(0, 0, 0), color(82, 82, 82), color(255, 255, 255), color(200, 200, 200, 100), color(0, 0, 0, 100), 2, color(0, 0, 0, 100), 2);
        button(300, 420, 200, 53, 10, "Credits", 24, color(0, 0, 0), color(82, 82, 82), color(255, 255, 255), color(200, 200, 200, 100), color(0, 0, 0, 100), 2, color(0, 0, 0, 100), 2);
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
