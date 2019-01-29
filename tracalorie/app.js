// Storage controller


// Item controller
const ItemCtrl = (function () {
  // Item constructor
  const Item = function (id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  // Data structure /State
  const data = {
    items: [{
        id: 0,
        name: 'Steak',
        calories: 1200
      },
      {
        id: 1,
        name: 'egg',
        calories: 1500
      },
      {
        id: 2,
        name: 'cookie',
        calories: 1900
      }
    ],
    currentItem: null,
    totalCalories: 0
  }
  return {
    logData: function () {
      return data;
    }
  }
})();

// UI controller
const UICtrl = (function () {

})();

// App controller
const App = (function (ItemCtrl, UICtrl) {
  return {
    init: function () {
      console.log('initalizing app');
    }
  }
})(ItemCtrl, UICtrl);

// Initialize App
App.init();