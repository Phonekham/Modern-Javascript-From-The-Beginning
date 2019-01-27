// Basic structure
// (function(){
//   // Declare private vars and functions
//   return {
//     // Declare public vars and functions
//   }
// });

// // Standard module pattern
// const UICtrl = (function(){
//   let text = 'Hello world';

//   const changeText = function(){
//     const element = document.querySelector('h1');
//     element.textContent = text;
//   }

//   return {
//     callChangeText: function(){
//       changeText();
//       console.log(text);
//     }
//   }
// })();

// UICtrl.callChangeText();
// UICtrl.changeText();

// revealing module pattern
const ItemCtrl = (function(){
  let data = [];

  function add(item){
    data.push(item);
    console.log('Item added'); 
  }
  function get(id){
    return data.find(item => {
      return item.id === id;
    });
  }

  return {
    add:add,
    get:get   //if not include here it will be private
  }
})();

ItemCtrl.add({id:1, name:'Phone'});
console.log(ItemCtrl.get(1));