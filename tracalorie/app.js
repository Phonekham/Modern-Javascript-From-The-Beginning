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
    items: [
      // {
      //   id: 0,
      //   name: 'Steak',
      //   calories: 1200
      // },
      // {
      //   id: 1,
      //   name: 'egg',
      //   calories: 1500
      // },
      // {
      //   id: 2,
      //   name: 'cookie',
      //   calories: 1900
      // }
    ],
    currentItem: null,
    totalCalories: 0
  }
  return {
    addItem: function (name, calories) {
      let ID;
      // Create ID
      if (data.items.length > 0) {
        ID = data.items[data.items.length - 1].id + 1;
      } else {
        ID = 0;
      }
      // Calories to number
      calories = parseInt(calories);
      // Create new item
      newItem = new Item(ID, name, calories);
      // Add to item array
      data.items.push(newItem);
      return newItem;

    },
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
  const UISelectors = {
    itemList: '#item-list',
    addBtn: '.add-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories'
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
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
    getItemInput: function () {
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCaloriesInput).value
      }
    },
    addListItem: function (item) {
      // Show the list
      document.querySelector(UISelectors.itemList).getElementsByClassName.display = 'block';
      // Create li element
      const li = document.createElement('li');
      // Add class
      li.className = 'collection-item';
      // Add ID
      li.id = `item${item.id}`;
      // Add HTML
      li.innerHTML = `
        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
          <a href="#" class="secondary-content">
            <i class="edit-item fa fa-pencil"></i>
          </a>
      `;
      // Insert item
      document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
    },
    clearInput: function () {
      document.querySelector(UISelectors.itemNameInput).value = '';
      document.querySelector(UISelectors.itemCaloriesInput).value = '';
    },
    hideList: function () {
      document.querySelector(UISelectors.itemList).getElementsByClassName.display = 'none';
    },
    getSelectors: function () {
      return UISelectors;
    }
  }
})();

// App controller
const App = (function (ItemCtrl, UICtrl) {
  // Load event listener
  const loadEventListeners = function () {
    // Get UI Selectors
    const UISelectors = UICtrl.getSelectors();
    // Add item event
    document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
  }

  // Add item submit
  const itemAddSubmit = function (e) {
    // Get form input from UI controller
    const input = UICtrl.getItemInput();
    // Check for name and calories input
    if (input.name !== '' && input.calories !== '') {
      //Add item
      const newItem = ItemCtrl.addItem(input.name, input.calories);
      UICtrl.addListItem(newItem);
      // Clear fields
      UICtrl.clearInput();
    }
    e.preventDefault();
  }

  // Public methods
  return {
    init: function () {
      // Fetch item from data structure
      const items = ItemCtrl.getItem();
      if (items.length === 0) {
        UICtrl.hideList();
      } else {
        // Populate app with items
        UICtrl.populateItemList(items);
      }

      // Load event listeners
      loadEventListeners();
    }
  }
})(ItemCtrl, UICtrl);

// Initialize App
App.init();