Function.prototype.myThrottle = function(interval) {

  let tooSoon = false;
  let func = this;

  return () => {
    if (tooSoon === false) {
      tooSoon = true;
      setTimeout(function() { tooSoon = false;}, interval);
      func(Array.from(arguments));
    }
  };

};
