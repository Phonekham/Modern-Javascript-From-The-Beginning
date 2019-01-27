function EventObserver() {
  this.observers = [];

}
EventObserver.prototype = {
  subscribe: function (fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  },
  unsubscribed: function (fn) {
    // Filter out from the list whatever matches the callback function. If there is no match, the callback gets to stay on the list. The filter returns a new list and reassigns the list of observers.
    this.observers = this.observers.filter(function (item) {
      if (item !== fn) {
        return item;
      }
    });
    console.log(`You are now unsubscribed from ${fn.name}`);
  },
  fire: function () {
    this.observers.forEach(function (item) {
      item.call();
    });
  }
}

const click = new EventObserver();

// eventlistener
document.querySelector('.sub-ms').addEventListener('click', function () {
  click.subscribe(getCurMilliseconds);
});
document.querySelector('.unsub-ms').addEventListener('click', function () {
  click.unsubscribed(getCurMilliseconds);
});
document.querySelector('.fire').addEventListener('click', function () {
  click.fire(getCurMilliseconds);
});
document.querySelector('.sub-s').addEventListener('click', function () {
  click.subscribe(getCurSeconds);
});
document.querySelector('.unsub-s').addEventListener('click', function () {
  click.unsubscribed(getCurSeconds);
});
// Click handler
const getCurMilliseconds = function () {
  console.log(`Current miliseconds: ${new Date().getMilliseconds()}`);
}
const getCurSeconds = function () {
  console.log(`Current seconds: ${new Date().getSeconds()}`);
}