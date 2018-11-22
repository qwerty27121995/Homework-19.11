'use strict'
var apple = +prompt('Сколько яблок у Чжуан-цзы?');
var eatApple = +prompt('Сколько яблок съел Цзэн-Цзы?');
var totalApple = apple - eatApple;
if (totalApple > 0) alert('Цзэн-Цзы говорит правду');
if (totalApple == 0) alert('Цзен цзы врет');