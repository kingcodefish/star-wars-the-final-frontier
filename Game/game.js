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

&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

__/\\\\\\\\\\\_______________________/\\\_______________________        
 _\/////\\\///_______________________\/\\\_______________________       
  _____\/\\\__________________________\/\\\___/\\\________________      
   _____\/\\\______/\\/\\\\\\__________\/\\\__\///______/\\\\\\\\__     
    _____\/\\\_____\/\\\////\\\____/\\\\\\\\\___/\\\___/\\\/////\\\_    
     _____\/\\\_____\/\\\__\//\\\__/\\\////\\\__\/\\\__/\\\\\\\\\\\__   
      _____\/\\\_____\/\\\___\/\\\_\/\\\__\/\\\__\/\\\_\//\\///////___  
       __/\\\\\\\\\\\_\/\\\___\/\\\_\//\\\\\\\/\\_\/\\\__\//\\\\\\\\\\_ 
        _\///////////__\///____\///___\///////\//__\///____\//////////__

________             _________            __________                     
___  __ \__________________  /___  _________  /___(_)____________________
__  /_/ /_  ___/  __ \  __  /_  / / /  ___/  __/_  /_  __ \_  __ \_  ___/
_  ____/_  /   / /_/ / /_/ / / /_/ // /__ / /_ _  / / /_/ /  / / /(__  ) 
/_/     /_/    \____/\__,_/  \__,_/ \___/ \__/ /_/  \____//_/ /_//____/  

- ⠠⠠⠉⠕⠙⠑⠀⠠⠠⠊⠎⠀⠠⠠⠏⠕⠑⠞⠗⠽ - C O D E  I S  P O E T R Y = -.-. --- -.. .   .. ...   .--. --- . - .-. -.-- =
 */

/** --- CONSTANTS --- **/
var NUMBER_OF_ARCS = 37;

/** --- DYNAMIC GLOBAL VARIABLES --- **/
var currScreen = "loading";
var keys = [];
var mouseOverButton = "";
var cacheImageNo = 0;

/** --- UTILITY FUNCTIONS --- **/
var button = function(x, y, w, h, r, t, ts, tf, htf, f, hf, s, sw, hs, hsw) {
    if(abs(x - mouseX) <= w / 2 && abs(y - mouseY) <= h / 2) {
        if(mouseIsPressed) {
            mouseOverButton = t;
        }
        fill(hf);
        stroke(hs);
        strokeWeight(hsw);
    } else {
        fill(f);
        stroke(s);
        strokeWeight(sw);
    }
    rectMode(CENTER);
    rect(x, y, w, h, r);
    if(abs(x - mouseX) <= w / 2 && abs(y - mouseY) <= h / 2) {
        fill(htf);
    } else {
        fill(tf);
    }
    textAlign(CENTER, CENTER);
    textSize(ts);
    text(t, x, y);
};

/** --- RENDERING & INPUT --- **/
var PreCache = {
    starWarsLogo: function(c) {
        c.background(0, 0, 0, 0);
        c.stroke(255, 232, 31);
        c.strokeWeight(4);
        c.strokeCap(SQUARE);
        c.fill(0);
        c.pushMatrix();
        c.scale(0.7);
        c.translate(230, -30);
        //s & t
        c.beginShape();
            c.vertex(193,112);
            c.vertex(71,112);
            c.bezierVertex(47,115,46,142,71,162);
            c.vertex(2,162);
            c.vertex(2,191);
            c.vertex(87,191);
            c.bezierVertex(130,171,91,136,91,136);
            c.vertex(127,136);
            c.vertex(127,191);
            c.vertex(158,191);
            c.vertex(158,136);
            c.vertex(193,136);
            c.vertex(193,110);
        c.endShape();
        //a
        c.beginShape();
            c.vertex(206,112);
            c.vertex(182,191);
            c.vertex(211,191);
            c.vertex(216,179);
            c.vertex(242,179);
            c.vertex(246,191);
            c.vertex(277,191);
            c.vertex(252,112);
            c.vertex(205.0,112);
        c.endShape();
        c.beginShape();
            c.vertex(230,137);
            c.vertex(223,156);
            c.vertex(236,156);
            c.vertex(230,137);
        c.endShape();
        //R
        c.beginShape();
            c.vertex(284,112);
            c.vertex(284,191);
            c.vertex(314,191);
            c.vertex(314,170);
            c.vertex(338,191);
            c.vertex(395,191);
            c.vertex(395,162);
            c.vertex(351,162);
            c.bezierVertex(376,140,360,118,351,112);
            c.vertex(282,112);
        c.endShape();
        c.beginShape();
            c.vertex(316,133);
            c.vertex(336,133);
            c.bezierVertex(339,138,336,143,336,143);
            c.vertex(316,143);
            c.vertex(316,131);
        c.endShape();
        //translate(0,25);
        //W
        c.beginShape();
            c.vertex(36,199);
            c.vertex(1,199);
            c.vertex(29,280);
            c.vertex(55,280);
            c.vertex(65,250);
            c.vertex(75,280);
            c.vertex(103,280);
            c.vertex(125,199);
            c.vertex(96,199);
            c.vertex(91,217);
            c.vertex(84,199);
            c.vertex(48,199);
            c.vertex(42,217);
            c.vertex(36,199);
        c.endShape();
        //a
        c.pushMatrix();
        c.translate(-64,87);
        c.beginShape();
            c.vertex(206,112);
            c.vertex(182,192);
            c.vertex(211,192);
            c.vertex(216,179);
            c.vertex(242,179);
            c.vertex(246,192);
            c.vertex(277,192);
            c.vertex(252,112);
            c.vertex(205.0,112);
        c.endShape();
        c.beginShape();
            c.vertex(230,137);
            c.vertex(223,156);
            c.vertex(236,156);
            c.vertex(230,137);
        c.endShape();
        c.popMatrix();
        c.pushMatrix();
        c.translate(-63,88);
        //R
        c.beginShape();
            c.vertex(284,112);
            c.vertex(284,191);
            c.vertex(314,191);
            c.vertex(314,170);
            c.vertex(338,191);
            c.vertex(416,191);
            c.bezierVertex(416,191,456,172,419,137);
            c.vertex(457,137);
            c.vertex(457,112);
            c.vertex(408,112);
            c.bezierVertex(362,120,388,155,395,162);
            c.vertex(351,162);
            c.bezierVertex(376,140,360,118,351,112);
            c.vertex(282,112);
        c.endShape();
        c.beginShape();
            c.vertex(316,133);
            c.vertex(336,133);
            c.bezierVertex(339,138,336,143,336,143);
            c.vertex(316,143);
            c.vertex(316,131);
        c.endShape();
        c.popMatrix();
        c.popMatrix();
        
        return c;
    },
    red: function(c) {
        c.background(0, 0, 0, 0);
        c.stroke(255, 232, 31);
        c.strokeWeight(4);
        c.strokeCap(SQUARE);
        c.fill(255, 0, 0);
        c.rect(0, 0, 200, 200);
        
        return c;
    },
    green: function(c) {
        c.background(0, 0, 0, 0);
        c.stroke(255, 232, 31);
        c.strokeWeight(4);
        c.strokeCap(SQUARE);
        c.fill(13, 255, 0);
        c.rect(0, 0, 200, 200);
        
        return c;
    },
    blue: function(c) {
        c.background(0, 0, 0, 0);
        c.stroke(255, 232, 31);
        c.strokeWeight(4);
        c.strokeCap(SQUARE);
        c.fill(0, 21, 255);
        c.rect(0, 0, 200, 200);
        
        return c;
    },
    yellow: function(c) {
        c.background(0, 0, 0, 0);
        c.stroke(255, 232, 31);
        c.strokeWeight(4);
        c.strokeCap(SQUARE);
        c.fill(255, 234, 0);
        c.rect(0, 0, 200, 200);
        
        return c;
    },
    orange: function(c) {
        c.background(0, 0, 0, 0);
        c.stroke(255, 232, 31);
        c.strokeWeight(4);
        c.strokeCap(SQUARE);
        c.fill(255, 170, 0);
        c.rect(0, 0, 200, 200);
        
        return c;
    }
};
var Cache = {
    Bitmap: {
        
    },
    Sound: {
    }
};
var cacheImage = function(imgFunction, w, h) {
    var c = createGraphics(w, h, JAVA2D);
    if(!c) {
        return;
    }
    
    c = imgFunction(c);
    
    return(c.get());
};
var Loading = {
    draw: function() {
        background(0, 0, 0);
        
        var counter = 0;
        if(frameCount % 5 === 0) {
            for(var i in PreCache) {
                if(counter === cacheImageNo) {
                    Cache.Bitmap[i] = cacheImage(PreCache[i], width, height);
                    cacheImageNo++;
                    break;
                }
                counter++;
            }
        }
        strokeCap(SQUARE);
        colorMode(HSB);
        // Gives the Shadow
        stroke(frameCount * 0.2 % 255, 255, 255, 80);
        strokeWeight(3);
        // Draws the Shadow
        for(var i = 1; i < NUMBER_OF_ARCS; i++) {
            arc(width / 2, height / 2, (NUMBER_OF_ARCS + 1) * 40 + -i * 35, (NUMBER_OF_ARCS + 1) * 40 + -i * 35, frameCount / 2 * i % 360 - 180, frameCount / 2 * i % 360);
        }
        strokeWeight(3);
        // Controls Color
        stroke(frameCount * 0.2 % 255, 255, 255);
        noFill();
        // Draws the main arcs
        for(var i = 1; i < NUMBER_OF_ARCS; i++) {
            arc(width / 2, height / 2, (NUMBER_OF_ARCS + 1) * 40 + -i * 35, (NUMBER_OF_ARCS + 1) * 40 + -i * 35, frameCount / 2 * i % 360, frameCount / 2 * i % 360 + 180);
        }
        colorMode(RGB);
        var counter2 = 0;
        for(var i in Cache.Bitmap) {
            if(counter2 === cacheImageNo - 1) {
                image(Cache.Bitmap[i], width / 2, 300, 120, 120);
                if(counter2 === Object.keys(PreCache).length-1) {
                    currScreen = "menu";
                }
                break;
            }
            counter2++;
        }
    }
};
var Menu = {
    draw: function() {
        background(0, 0, 0);
        image(Cache.Bitmap.starWarsLogo, width / 2, height / 2);
        fill(255, 232, 31);
        textSize(40);
        text("The Final Frontier", 300, 220);
        button(300, 300, 200, 53, 10, "Play", 24, color(0, 0, 0), color(255, 242, 0), color(255, 255, 255), color(0, 0, 0), color(0, 0, 0, 100), 2, color(0, 0, 0, 100), 2);
        button(300, 360, 200, 53, 10, "options", 24, color(0, 0, 0), color(255, 242, 0), color(255, 255, 255), color(0, 0, 0), color(0, 0, 0, 100), 2, color(0, 0, 0, 100), 2);
        button(300, 420, 200, 53, 10, "Credits", 24, color(0, 0, 0), color(255, 242, 0), color(255, 255, 255), color(0, 0, 0), color(0, 0, 0, 100), 2, color(0, 0, 0, 100), 2);
    }
};
var GameHandler = {
    update: function() {
        // Default Styling
        noStroke();
        strokeWeight(1);
        rectMode(CENTER);
        imageMode(CENTER);
        textAlign(CENTER, CENTER);
        textFont(createFont("Star Jedi Rounded"));
        
        switch(currScreen) {
            case "loading":
                Loading.draw();
                break;
            case "menu":
                Menu.draw();
                break;
        }
    }
};
draw = function() {
    GameHandler.update();
};
