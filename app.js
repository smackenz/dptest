var DEV = true;
var JSON_SPACE = 2;
var SERVICE_URL = "https://somedataendpoint.com/api/data";

var A_COLOR = '#9c27b0';
var B_COLOR = '#2196f3';
var C_COLOR = '#00bcd4';
var D_COLOR = '#ffeb3b';
var E_COLOR = '#ff5722';

var RAW_DATA = {
  "data": [
    {
      "Dimension_A": 2.2,
      "Dimension_B": 2,
      "Dimension_D": 280,
      "Dimension_C": 11.2,
      "Dimension_E": 6.4
    },
    {
      "Dimension_A": 1,
      "Dimension_B": 1,
      "Dimension_C": 6.6,
      "Dimension_D": 230,
      "Dimension_E": 5
    },
    {
      "Dimension_A": 1.7,
      "Dimension_B": 2,
      "Dimension_C": 9,
      "Dimension_D": 250,
      "Dimension_E": 4.9
    },
    {
      "Dimension_A": 0.1,
      "Dimension_B": 0,
      "Dimension_C": 3,
      "Dimension_D": 310,
      "Dimension_E": 4.9
    },
    {
      "Dimension_A": 0.3,
      "Dimension_B": 0,
      "Dimension_C": 3.4,
      "Dimension_D": 380,
      "Dimension_E": 5.7
    },
    {
      "Dimension_A": 0.2,
      "Dimension_B": 0,
      "Dimension_C": 2.6,
      "Dimension_D": 320,
      "Dimension_E": 4.4
    },
    {
      "Dimension_A": 0.4,
      "Dimension_B": 0,
      "Dimension_C": 3,
      "Dimension_D": 340,
      "Dimension_E": 5.4
    },
    {
      "Dimension_A": 2.3,
      "Dimension_B": 2,
      "Dimension_C": 10.2,
      "Dimension_D": 310,
      "Dimension_E": 6.9
    },
    {
      "Dimension_A": 1.4,
      "Dimension_B": 1,
      "Dimension_C": 8.8,
      "Dimension_D": 310,
      "Dimension_E": 6.7
    },
    {
      "Dimension_A": 0.4,
      "Dimension_B": 0,
      "Dimension_C": 3,
      "Dimension_D": 370,
      "Dimension_E": 5.1
    },
    {
      "Dimension_A": 1.4,
      "Dimension_B": 1,
      "Dimension_C": 7.8,
      "Dimension_D": 270,
      "Dimension_E": 5.2
    },
    {
      "Dimension_A": 1.5,
      "Dimension_B": 1,
      "Dimension_C": 9.8,
      "Dimension_D": 310,
      "Dimension_E": 6.9
    },
    {
      "Dimension_A": 0.2,
      "Dimension_B": 0,
      "Dimension_C": 2.4,
      "Dimension_D": 400,
      "Dimension_E": 5.8
    },
    {
      "Dimension_A": 0.4,
      "Dimension_B": 0,
      "Dimension_C": 3.4,
      "Dimension_D": 390,
      "Dimension_E": 5.4
    },
    {
      "Dimension_A": 2.2,
      "Dimension_B": 2,
      "Dimension_C": 13.4,
      "Dimension_D": 380,
      "Dimension_E": 7.7
    },
    {
      "Dimension_A": 1.6,
      "Dimension_B": 1,
      "Dimension_C": 9.4,
      "Dimension_D": 330,
      "Dimension_E": 6.3
    },
    {
      "Dimension_A": 2.3,
      "Dimension_B": 2,
      "Dimension_C": 11.8,
      "Dimension_D": 320,
      "Dimension_E": 6.8
    },
    {
      "Dimension_A": 2.1,
      "Dimension_B": 2,
      "Dimension_C": 13.2,
      "Dimension_D": 300,
      "Dimension_E": 7.6
    },
    {
      "Dimension_A": 2.3,
      "Dimension_B": 2,
      "Dimension_C": 10.6,
      "Dimension_D": 320,
      "Dimension_E": 6.4
    },
    {
      "Dimension_A": 0.4,
      "Dimension_B": 0,
      "Dimension_C": 3,
      "Dimension_D": 440,
      "Dimension_E": 5.7
    },
    {
      "Dimension_A": 2.1,
      "Dimension_B": 2,
      "Dimension_C": 11.4,
      "Dimension_D": 330,
      "Dimension_E": 6.7
    },
    {
      "Dimension_A": 2.1,
      "Dimension_B": 2,
      "Dimension_C": 11.2,
      "Dimension_D": 280,
      "Dimension_E": 6.4
    },
    {
      "Dimension_A": 0.4,
      "Dimension_B": 0,
      "Dimension_C": 2.6,
      "Dimension_D": 390,
      "Dimension_E": 5.4
    },
    {
      "Dimension_A": 1.4,
      "Dimension_B": 2,
      "Dimension_C": 11.2,
      "Dimension_D": 260,
      "Dimension_E": 6.1
    },
    {
      "Dimension_A": 1.6,
      "Dimension_B": 2,
      "Dimension_C": 11.6,
      "Dimension_D": 300,
      "Dimension_E": 7.2
    },
    {
      "Dimension_A": 0.2,
      "Dimension_B": 0,
      "Dimension_C": 3,
      "Dimension_D": 350,
      "Dimension_E": 5.2
    },
    {
      "Dimension_A": 1.2,
      "Dimension_B": 1,
      "Dimension_C": 8,
      "Dimension_D": 260,
      "Dimension_E": 5.8
    },
    {
      "Dimension_A": 1.8,
      "Dimension_B": 2,
      "Dimension_C": 10.2,
      "Dimension_D": 300,
      "Dimension_E": 5.9
    },
    {
      "Dimension_A": 1.5,
      "Dimension_B": 1,
      "Dimension_C": 9,
      "Dimension_D": 300,
      "Dimension_E": 5.4
    },
    {
      "Dimension_A": 1.7,
      "Dimension_B": 1,
      "Dimension_C": 10,
      "Dimension_D": 300,
      "Dimension_E": 6.7
    },
    {
      "Dimension_A": 1.3,
      "Dimension_B": 1,
      "Dimension_C": 8.8,
      "Dimension_D": 230,
      "Dimension_E": 6.3
    },
    {
      "Dimension_A": 1.1,
      "Dimension_B": 1,
      "Dimension_C": 6,
      "Dimension_D": 250,
      "Dimension_E": 5.1
    },
    {
      "Dimension_A": 1.5,
      "Dimension_B": 1,
      "Dimension_C": 9,
      "Dimension_D": 320,
      "Dimension_E": 6.4
    },
    {
      "Dimension_A": 2.1,
      "Dimension_B": 2,
      "Dimension_C": 11,
      "Dimension_D": 300,
      "Dimension_E": 6.8
    },
    {
      "Dimension_A": 1.8,
      "Dimension_B": 2,
      "Dimension_C": 9.6,
      "Dimension_D": 280,
      "Dimension_E": 6.2
    },
    {
      "Dimension_A": 2.3,
      "Dimension_B": 2,
      "Dimension_C": 11.4,
      "Dimension_D": 320,
      "Dimension_E": 6.9
    },
    {
      "Dimension_A": 2,
      "Dimension_B": 2,
      "Dimension_C": 10.2,
      "Dimension_D": 320,
      "Dimension_E": 6.5
    },
    {
      "Dimension_A": 2.4,
      "Dimension_B": 2,
      "Dimension_C": 10.2,
      "Dimension_D": 280,
      "Dimension_E": 5.8
    },
    {
      "Dimension_A": 0.3,
      "Dimension_B": 0,
      "Dimension_C": 3,
      "Dimension_D": 380,
      "Dimension_E": 5.1
    },
    {
      "Dimension_A": 0.3,
      "Dimension_B": 0,
      "Dimension_C": 2.8,
      "Dimension_D": 300,
      "Dimension_E": 4.8
    },
    {
      "Dimension_A": 2,
      "Dimension_B": 2,
      "Dimension_C": 12.8,
      "Dimension_D": 380,
      "Dimension_E": 7.9
    },
    {
      "Dimension_A": 1.9,
      "Dimension_B": 2,
      "Dimension_C": 10.2,
      "Dimension_D": 270,
      "Dimension_E": 5.8
    },
    {
      "Dimension_A": 2.3,
      "Dimension_B": 2,
      "Dimension_C": 10.4,
      "Dimension_D": 300,
      "Dimension_E": 6.7
    },
    {
      "Dimension_A": 0.4,
      "Dimension_B": 0,
      "Dimension_C": 3.8,
      "Dimension_D": 380,
      "Dimension_E": 5.1
    },
    {
      "Dimension_A": 0.2,
      "Dimension_B": 0,
      "Dimension_C": 3.2,
      "Dimension_D": 320,
      "Dimension_E": 4.7
    },
    {
      "Dimension_A": 1.5,
      "Dimension_B": 2,
      "Dimension_C": 10,
      "Dimension_D": 220,
      "Dimension_E": 6
    },
    {
      "Dimension_A": 0.2,
      "Dimension_B": 0,
      "Dimension_C": 3.2,
      "Dimension_D": 340,
      "Dimension_E": 4.8
    },
    {
      "Dimension_A": 2.3,
      "Dimension_B": 2,
      "Dimension_C": 13.8,
      "Dimension_D": 260,
      "Dimension_E": 7.7
    },
    {
      "Dimension_A": 0.2,
      "Dimension_B": 0,
      "Dimension_C": 2,
      "Dimension_D": 360,
      "Dimension_E": 4.6
    },
    {
      "Dimension_A": 1.8,
      "Dimension_B": 2,
      "Dimension_C": 12,
      "Dimension_D": 320,
      "Dimension_E": 7.2
    },
    {
      "Dimension_A": 0.2,
      "Dimension_B": 0,
      "Dimension_C": 2.8,
      "Dimension_D": 330,
      "Dimension_E": 5
    },
    {
      "Dimension_A": 1.4,
      "Dimension_B": 1,
      "Dimension_C": 8.8,
      "Dimension_D": 300,
      "Dimension_E": 6.6
    },
    {
      "Dimension_A": 1.3,
      "Dimension_B": 1,
      "Dimension_C": 8,
      "Dimension_D": 280,
      "Dimension_E": 6.1
    },
    {
      "Dimension_A": 0.2,
      "Dimension_B": 0,
      "Dimension_C": 2.4,
      "Dimension_D": 320,
      "Dimension_E": 5
    },
    {
      "Dimension_A": 1.4,
      "Dimension_B": 1,
      "Dimension_C": 9.4,
      "Dimension_D": 320,
      "Dimension_E": 7
    },
    {
      "Dimension_A": 1.8,
      "Dimension_B": 2,
      "Dimension_C": 9.6,
      "Dimension_D": 300,
      "Dimension_E": 6
    },
    {
      "Dimension_A": 1.9,
      "Dimension_B": 2,
      "Dimension_C": 12.2,
      "Dimension_D": 280,
      "Dimension_E": 7.4
    },
    {
      "Dimension_A": 1.9,
      "Dimension_B": 2,
      "Dimension_C": 10.2,
      "Dimension_D": 270,
      "Dimension_E": 5.8
    },
    {
      "Dimension_A": 2.3,
      "Dimension_B": 2,
      "Dimension_C": 10.8,
      "Dimension_D": 340,
      "Dimension_E": 6.2
    },
    {
      "Dimension_A": 1,
      "Dimension_B": 1,
      "Dimension_C": 7,
      "Dimension_D": 200,
      "Dimension_E": 5
    },
    {
      "Dimension_A": 1.1,
      "Dimension_B": 1,
      "Dimension_C": 7.8,
      "Dimension_D": 250,
      "Dimension_E": 5.6
    },
    {
      "Dimension_A": 2.4,
      "Dimension_B": 2,
      "Dimension_C": 11.2,
      "Dimension_D": 310,
      "Dimension_E": 6.7
    },
    {
      "Dimension_A": 1.9,
      "Dimension_B": 2,
      "Dimension_C": 10,
      "Dimension_D": 250,
      "Dimension_E": 6.3
    },
    {
      "Dimension_A": 1.8,
      "Dimension_B": 2,
      "Dimension_C": 11,
      "Dimension_D": 310,
      "Dimension_E": 6.4
    },
    {
      "Dimension_A": 1.5,
      "Dimension_B": 1,
      "Dimension_C": 9,
      "Dimension_D": 220,
      "Dimension_E": 6.2
    },
    {
      "Dimension_A": 1.8,
      "Dimension_B": 2,
      "Dimension_C": 12.6,
      "Dimension_D": 290,
      "Dimension_E": 7.3
    },
    {
      "Dimension_A": 0.2,
      "Dimension_B": 0,
      "Dimension_C": 2.6,
      "Dimension_D": 300,
      "Dimension_E": 4.4
    },
    {
      "Dimension_A": 2.5,
      "Dimension_B": 2,
      "Dimension_C": 12.2,
      "Dimension_D": 360,
      "Dimension_E": 7.2
    },
    {
      "Dimension_A": 1.8,
      "Dimension_B": 2,
      "Dimension_C": 11,
      "Dimension_D": 300,
      "Dimension_E": 6.5
    },
    {
      "Dimension_A": 0.2,
      "Dimension_B": 0,
      "Dimension_C": 3,
      "Dimension_D": 340,
      "Dimension_E": 5
    },
    {
      "Dimension_A": 0.2,
      "Dimension_B": 0,
      "Dimension_C": 2.6,
      "Dimension_D": 320,
      "Dimension_E": 4.7
    },
    {
      "Dimension_A": 1.3,
      "Dimension_B": 1,
      "Dimension_C": 9.2,
      "Dimension_D": 290,
      "Dimension_E": 6.6
    },
    {
      "Dimension_A": 0.2,
      "Dimension_B": 0,
      "Dimension_C": 2.6,
      "Dimension_D": 350,
      "Dimension_E": 5.5
    },
    {
      "Dimension_A": 2.3,
      "Dimension_B": 2,
      "Dimension_C": 12.2,
      "Dimension_D": 300,
      "Dimension_E": 7.7
    },
    {
      "Dimension_A": 1.8,
      "Dimension_B": 2,
      "Dimension_C": 9.8,
      "Dimension_D": 300,
      "Dimension_E": 6.1
    },
    {
      "Dimension_A": 0.1,
      "Dimension_B": 0,
      "Dimension_C": 3,
      "Dimension_D": 310,
      "Dimension_E": 4.9
    },
    {
      "Dimension_A": 1.1,
      "Dimension_B": 1,
      "Dimension_C": 7.6,
      "Dimension_D": 240,
      "Dimension_E": 5.5
    },
    {
      "Dimension_A": 1.3,
      "Dimension_B": 1,
      "Dimension_C": 8.4,
      "Dimension_D": 290,
      "Dimension_E": 5.7
    },
    {
      "Dimension_A": 1.5,
      "Dimension_B": 1,
      "Dimension_C": 9,
      "Dimension_D": 290,
      "Dimension_E": 6
    },
    {
      "Dimension_A": 1.9,
      "Dimension_B": 2,
      "Dimension_C": 10.6,
      "Dimension_D": 270,
      "Dimension_E": 6.4
    },
    {
      "Dimension_A": 0.2,
      "Dimension_B": 0,
      "Dimension_C": 3,
      "Dimension_D": 370,
      "Dimension_E": 5.4
    },
    {
      "Dimension_A": 1.4,
      "Dimension_B": 1,
      "Dimension_C": 9.4,
      "Dimension_D": 290,
      "Dimension_E": 6.1
    },
    {
      "Dimension_A": 1.5,
      "Dimension_B": 1,
      "Dimension_C": 9.2,
      "Dimension_D": 280,
      "Dimension_E": 6.5
    },
    {
      "Dimension_A": 1.3,
      "Dimension_B": 1,
      "Dimension_C": 8.4,
      "Dimension_D": 270,
      "Dimension_E": 5.6
    },
    {
      "Dimension_A": 2.4,
      "Dimension_B": 2,
      "Dimension_C": 11.2,
      "Dimension_D": 340,
      "Dimension_E": 6.3
    },
    {
      "Dimension_A": 0.1,
      "Dimension_B": 0,
      "Dimension_C": 3,
      "Dimension_D": 310,
      "Dimension_E": 4.9
    },
    {
      "Dimension_A": 1.4,
      "Dimension_B": 1,
      "Dimension_C": 9.6,
      "Dimension_D": 280,
      "Dimension_E": 6.8
    },
    {
      "Dimension_A": 1.3,
      "Dimension_B": 1,
      "Dimension_C": 9,
      "Dimension_D": 280,
      "Dimension_E": 5.7
    },
    {
      "Dimension_A": 1.6,
      "Dimension_B": 1,
      "Dimension_C": 10.2,
      "Dimension_D": 270,
      "Dimension_E": 6
    },
    {
      "Dimension_A": 0.3,
      "Dimension_B": 0,
      "Dimension_C": 2.6,
      "Dimension_D": 350,
      "Dimension_E": 5
    },
    {
      "Dimension_A": 2,
      "Dimension_B": 2,
      "Dimension_C": 10.4,
      "Dimension_D": 300,
      "Dimension_E": 6.5
    },
    {
      "Dimension_A": 1.2,
      "Dimension_B": 1,
      "Dimension_C": 9.4,
      "Dimension_D": 280,
      "Dimension_E": 6.1
    },
    {
      "Dimension_A": 0.3,
      "Dimension_B": 0,
      "Dimension_C": 2.8,
      "Dimension_D": 350,
      "Dimension_E": 5.1
    },
    {
      "Dimension_A": 0.2,
      "Dimension_B": 0,
      "Dimension_C": 3,
      "Dimension_D": 310,
      "Dimension_E": 4.6
    },
    {
      "Dimension_A": 2.2,
      "Dimension_B": 2,
      "Dimension_C": 11.6,
      "Dimension_D": 300,
      "Dimension_E": 6.5
    },
    {
      "Dimension_A": 0.3,
      "Dimension_B": 0,
      "Dimension_C": 2.8,
      "Dimension_D": 340,
      "Dimension_E": 4.6
    },
    {
      "Dimension_A": 0.2,
      "Dimension_B": 0,
      "Dimension_C": 2.8,
      "Dimension_D": 320,
      "Dimension_E": 4.6
    },
    {
      "Dimension_A": 2,
      "Dimension_B": 2,
      "Dimension_C": 13.4,
      "Dimension_D": 280,
      "Dimension_E": 7.7
    },
    {
      "Dimension_A": 1.8,
      "Dimension_B": 1,
      "Dimension_C": 9.6,
      "Dimension_D": 320,
      "Dimension_E": 5.9
    },
    {
      "Dimension_A": 0.2,
      "Dimension_B": 0,
      "Dimension_C": 3.2,
      "Dimension_D": 380,
      "Dimension_E": 5.1
    },
    {
      "Dimension_A": 0.2,
      "Dimension_B": 0,
      "Dimension_C": 2.8,
      "Dimension_D": 300,
      "Dimension_E": 4.9
    },
    {
      "Dimension_A": 1,
      "Dimension_B": 1,
      "Dimension_C": 6.6,
      "Dimension_D": 240,
      "Dimension_E": 4.9
    },
    {
      "Dimension_A": 0.3,
      "Dimension_B": 0,
      "Dimension_C": 2.6,
      "Dimension_D": 230,
      "Dimension_E": 4.5
    },
    {
      "Dimension_A": 1,
      "Dimension_B": 1,
      "Dimension_C": 8.2,
      "Dimension_D": 270,
      "Dimension_E": 5.8
    },
    {
      "Dimension_A": 0.4,
      "Dimension_B": 0,
      "Dimension_C": 3.2,
      "Dimension_D": 340,
      "Dimension_E": 5
    },
    {
      "Dimension_A": 0.2,
      "Dimension_B": 0,
      "Dimension_C": 2.8,
      "Dimension_D": 340,
      "Dimension_E": 5.2
    },
    {
      "Dimension_A": 0.2,
      "Dimension_B": 0,
      "Dimension_C": 3,
      "Dimension_D": 370,
      "Dimension_E": 5.3
    },
    {
      "Dimension_A": 0.2,
      "Dimension_B": 0,
      "Dimension_C": 2.8,
      "Dimension_D": 360,
      "Dimension_E": 5
    },
    {
      "Dimension_A": 1.3,
      "Dimension_B": 1,
      "Dimension_C": 7.2,
      "Dimension_D": 290,
      "Dimension_E": 5.6
    },
    {
      "Dimension_A": 0.2,
      "Dimension_B": 0,
      "Dimension_C": 3.2,
      "Dimension_D": 310,
      "Dimension_E": 4.8
    },
    {
      "Dimension_A": 1.8,
      "Dimension_B": 2,
      "Dimension_C": 9.8,
      "Dimension_D": 270,
      "Dimension_E": 6.3
    },
    {
      "Dimension_A": 1.3,
      "Dimension_B": 1,
      "Dimension_C": 8.2,
      "Dimension_D": 280,
      "Dimension_E": 5.7
    },
    {
      "Dimension_A": 0.2,
      "Dimension_B": 0,
      "Dimension_C": 3.2,
      "Dimension_D": 300,
      "Dimension_E": 5
    },
    {
      "Dimension_A": 2.5,
      "Dimension_B": 2,
      "Dimension_C": 12,
      "Dimension_D": 330,
      "Dimension_E": 6.3
    },
    {
      "Dimension_A": 0.6,
      "Dimension_B": 0,
      "Dimension_C": 3.2,
      "Dimension_D": 350,
      "Dimension_E": 5
    },
    {
      "Dimension_A": 1.2,
      "Dimension_B": 1,
      "Dimension_C": 8.8,
      "Dimension_D": 260,
      "Dimension_E": 5.5
    },
    {
      "Dimension_A": 1.2,
      "Dimension_B": 1,
      "Dimension_C": 8.4,
      "Dimension_D": 300,
      "Dimension_E": 5.7
    },
    {
      "Dimension_A": 0.2,
      "Dimension_B": 0,
      "Dimension_C": 2.8,
      "Dimension_D": 290,
      "Dimension_E": 4.4
    },
    {
      "Dimension_A": 0.1,
      "Dimension_B": 0,
      "Dimension_C": 2.8,
      "Dimension_D": 300,
      "Dimension_E": 4.8
    },
    {
      "Dimension_A": 1,
      "Dimension_B": 1,
      "Dimension_C": 7.4,
      "Dimension_D": 240,
      "Dimension_E": 5.5
    }
  ]
};

/** ~~~~~ UTILS ~~~~~ */

function isString(val) {
  return val && typeof val === "string" ? true : false;
}

function isFunction(val) {
  return val && typeof val === "function" ? true : false;
}

function isBoolean(val) {
  return typeof val === "boolean" ? true : false;
}

function isArray(val) {
  return val && val instanceof Array ? true : false;
}

function isElement(val) {
  return val && val instanceof HTMLElement ? true : false;
}

function isStringOrArray(val) {
  return isString(val) || isArray(val) ? true : false;
}

function addEventListener(el, etype, handler, options) {
  if(!isElement(el)) return null;
  if(!isString(etype)) return null;
  if(!isFunction(handler)) return null;
  if(!isBoolean(options)) options = false;
  return el.addEventListener(etype, handler, options);
}

function removeEventListener(el, etype, handler) {
  if(!isElement(el)) return null;
  if(!isString(etype)) return null;
  return isFunction(handler) ? el.removeEventListener(etype, handler) : el.removeEventListener(etype);
}

/** ~~~~~ App ~~~~~ */

document.addEventListener("DOMContentLoaded", function() {
  start();
});

function start() {
  if(DEV) {
    init();
  } else {
    fetch(SERVICE_URL)
      .then(function(result) {
        RAW_DATA = result.json();
        init();
      })
      .catch(function(err) {
        console.error(err);
      })
  }
}

function init() {
  initDims();
  initTabs();
  drawA(0, 2);
  drawB(0, 2);
  drawC(0, 10);
  drawD(0, 400);
  drawE(0, 10);
  drawRawData();
}

function initTabs() {
  var $tabs = document.querySelectorAll('.tab');
  for(var i=0;i<$tabs.length;i++) {
    addEventListener($tabs[i], 'click', tabClick);
  }
}

function initDims() {
  var $dims = document.querySelectorAll('.dim');
  for(var i=0;i<$dims.length;i++) {
    var $dim = $dims[i];
    var $inputs = $dim.querySelectorAll('input[type="range"]');
    var $out = $dim.querySelector('.out');
    var $enabled = $dim.querySelector('input[type="checkbox"]');
    for(var j=0;j<$inputs.length;j++) {
      var $input = $inputs[j];
      addEventListener($input, 'input', sliderInput);
    }
    addEventListener($enabled, 'click', enabledChanged);
    $out.innerHTML = $input.value;
  }
}

// Generic chart drawing
function drawChart(prop, sel, min, max, step, color, minv, maxv) {
  color = color || '#000000';
  var dataPoints = [];
  for(var i=0;i<RAW_DATA.data.length;i++) {
    var item = RAW_DATA.data[i];
    var val = item[prop];
    if(val >= minv && val <=maxv) {
      dataPoints.push({ x: item[prop], y: 1 });
    }
  }
  var chart = new CanvasJS.Chart(sel, {
    animationEnabled: true,
    zoomEnabled: true,
    title: {
      text: prop
    },
    axisX: {
      title: "",
      minimum: min,
      maximum: max,
      interval: step
    },
    axisY:{
      title: "",
      valueFormatString: "",
      minimum: 0,
      maximum: 2,
      interval: 2,
      stripLines: {
        opacity: 0
      }
    },
    data: [{
      type: "scatter",
      color: color,
      toolTipContent: "<b>Point: </b>{x}",
      dataPoints: dataPoints
    }]
  });
  chart.render();
}

// Called when the Visualization API is loaded.
function drawA(min, max) {
  drawChart('Dimension_A', 'charta', 0, 2, .1, A_COLOR, min, max);
}

function drawB(min, max) {
  drawChart('Dimension_B', 'chartb', 0, 2, .1, B_COLOR, min, max);
}

function drawC(min, max) {
  drawChart('Dimension_C', 'chartc', 0, 10, 1, C_COLOR, min, max);
}

function drawD(min, max) {
  drawChart('Dimension_D', 'chartd', 0, 400, 10, D_COLOR, min, max);
}

function drawE(min, max) {
  drawChart('Dimension_E', 'charte', 0, 10, 1, E_COLOR, min, max);
}

function drawRawData() {
  var $el = document.getElementById('raw-data');
  $el.innerHTML = JSON.stringify(RAW_DATA.data, null, JSON_SPACE);
}

/** ~~~~~ Event Handlers ~~~~~ */

function tabClick(e) {
  var cn = 'active';
  var $tabs = document.querySelectorAll('.tab');
  var $panels = document.querySelectorAll('.panel');
  var $ctab = e.currentTarget;
  var id = $ctab.getAttribute('data-id');
  var $cpanel = document.querySelector('.panel[data-id=' + id + ']');
  for(var i=0;i<$tabs.length;i++) {
    var $tab = $tabs[i];
    var $panel = $panels[i];
    $tab.classList.remove(cn);
    $panel.classList.remove(cn);
  }
  $ctab.classList.add(cn);
  $cpanel.classList.add(cn);
}

function sliderInput(e) {
  var $input = e.currentTarget;
  var $slider = $input.parentNode;
  var $dim = $slider.parentNode;
  var $out = $slider.querySelector('.out');
  var $inputs = $dim.querySelectorAll('input[type="range"]');
  var min = $inputs[0].value;
  var max = $inputs[1].value;
  var id = $dim.getAttribute('data-id');

  $out.innerHTML = $input.value;

  switch (id) {
    case 'charta':
      drawA(min, max);
      break;
    case 'chartb':
      drawB(min, max);
      break;
    case 'chartc':
      drawC(min, max);
      break;
    case 'chartd':
      drawD(min, max);
      break;
    case 'charte':
      drawE(min, max);
      break;
  }
}

function enabledChanged(e) {
  var $input = e.currentTarget;
  var $dim = $input.parentNode;
  var val = $input.checked;
  var id = $dim.getAttribute('data-id');
  var $chart = document.getElementById(id);
  if(val) {
    $chart.style.display = 'block';
  } else {
    $chart.style.display = 'none';
  }
}
