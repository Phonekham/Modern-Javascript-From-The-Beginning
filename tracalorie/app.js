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
    getItem: function () {
      return data.items;
    },
    logData: function () {
      return data;
    }
  }
})();

// UI controller
const UICtrl = (function () {
  const UISelector = {
    itemList: '#item-list'
  }
  // Public methods
  return {
    populateItemList: function (items) {
      let html = '';
      items.forEach(function (item) {
        html += `
        <li class="collection-item" id="item-${item.id}">
          <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
          <a href="#" class="secondary-content">
            <i class="edit-item fa fa-pencil"></i>
          </a>
        </li>
        `;
      });

      // Insert list item 
      document.querySelector(UISelector.itemList).innerHTML = html;
    }
  }
})();

// App controller
const App = (function (ItemCtrl, UICtrl) {
  return {
    init: function () {
      // Fetch item from data structure
      const items = ItemCtrl.getItem();
      // Populate app with items
      UICtrl.populateItemList(items);
    }
  }
})(ItemCtrl, UICtrl);

// Initialize App
App.init();