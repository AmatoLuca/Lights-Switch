/* 
 *
 * This script contain an array of classes that match the elemets (lamps) 
 * in the html file. The last element it's not a class but it indicates that
 * a no lights statement and even an intermediate phase befor restart the loop.
 * 
 * The type variable keep the index in which the script select the lamps to turn on.
 * 
 * On each click the lamps will turn off to be able changing the pattern of lights
 * If type reach the end of the array of patterns it will reset to repeat the circle,
 * else an instruction will select html element based on type and they are turn on 
 * and the type counter is incremented.
 * 
*/

const pattern_light = ['ring', 'slash', 'backslash', 'point', 'all', 'turn-off'];

let type = 0;

let switcher = $('button'); 

switcher.on('click', function() {
    
    $('div#lamp').css('background-color', 'rgb(100, 100, 100)');
    
    if (pattern_light[type] === 'turn-off') {
        type = 0;
    } 
    else {
        $('div.' + pattern_light[type]).css('background-color', '#1db954');
        type++;
    }

});  
    