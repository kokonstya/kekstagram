'use strict';

(function () {

  var PIN_SIZE = 18;
  var startCoordX;
  var pin = document.querySelector('.scale__pin');
  var slider = document.querySelector('.img-upload__scale');
  var line = document.querySelector('.scale__line');
  var level = document.querySelector('.scale__level');
  var value = document.querySelector('.scale__value');


  var pinMouseMoveHandler = function (moveEvt) {
    moveEvt.preventDefault();
    var shift = startCoordX - moveEvt.clientX;
    startCoordX = moveEvt.clientX;

    var pinPositionX = pin.offsetLeft - shift;

    if (pinPositionX < 0) {
      pinPositionX = 0;
    }
    if (pinPositionX > 460) {
      pinPositionX = 450;
      document.removeEventListener('mousemove', pinMouseMoveHandler);
    }
    // pin.style.left = Math.round(pinPositionX / 4.5) + '%';
    pin.style.left = pinPositionX + 'px';
    level.style.width = pinPositionX + 'px';
    value.value = pinPositionX / 4.5;
    window.preview.applyEffects(pinPositionX / 4.5 + 'px');
  };

  var mouseUpHandler = function () {
    document.removeEventListener('mousemove', pinMouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
  };

  var pinMouseDownHandler = function (downEvt) {
    downEvt.preventDefault();
    startCoordX = downEvt.clientX;
    document.addEventListener('mousemove', pinMouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  };

  slider.addEventListener('mousedown', pinMouseDownHandler);


})();

