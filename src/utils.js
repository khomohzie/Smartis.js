const Smartis = require('./core');

/**
 * @method Smartis._parseColor()
 * @param {String|Number} r 
 * @param {String|Number} g 
 * @param {String|Number} b 
 * @param {String|Number} a 
 */
Smartis.prototype._parseColor = function (r, g, b, a) {
  let color = r;
  if (typeof r === 'number') {
    color = rgba(r, g, b);
  }
  if (typeof r === 'number' && (g) && (!b) && (!a)) {
    a = g;
    color = rgba(r, r, r, g)
  }
  if (typeof r === 'number' && typeof g === 'number' && typeof b === 'number') {
    color = rgba(r, g, b, a)
  }
  return color;
}

/**
 * @method Smartis.keyIsPressed()
 * @param {Number} key
 */
Smartis.prototype.keyIsPressed = function (key) {
  // console.log(key, CURRENT_KEYS[key])
  if (CURRENT_KEYS[key] === true) {
    return true;
  }
  return false;
}

module.exports = Smartis;
