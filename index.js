class GroceryItem {
    constructor(item) {
        this.item = item;
    }

}

// class GroceryItemLocation {
//     constructor(location) {
//         this.location = location;
//         this.listOfItems = [];
//     }
//     /**
//      * 
//      * @param {string} item is be put into listOfItems array
//      */
//     addItem(item) {
//         if (item instanceof GroceryItem) {
//             this.listOfItems.push(item);
//         }
//         else {
//             throw new Error(`You can only add an instance of an Item. Argument is not an item: ${item}`);
//         }
//     }
//}

class Menu {
    constructor() {
        this.items = [];

    }
    //Menus
    start() {
        let selection = this.showMenuSelection();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.viewGroceryList();
                    break;
                case '2':
                    this.addItem();
                    break;
                case '3':
                    this.deleteItem();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMenuSelection();
        }

        alert('Goodbye!');
    }
    //menu selection
    showMenuSelection() {
        return prompt(`
        0) exit
        1) View grocery list
        2) Add to grocery list
        3) delete from grocery list

        `);
    }

    //turns array into string    
    groceryList() {
        let itemString = '';
        for (let i = 0; i < this.items.length; i++) {
            itemString += '\n' + i + ') ' + this.items[i].item;

        }
        return itemString;
    }
    //Options

    viewGroceryList() {
        let itemString = this.groceryList();
        alert(`
Grocery List:
------------------${itemString}

            `);


    }

    addItem() {
        let itemString = this.groceryList();
        let item = prompt(`
Grocery List:
------------------${itemString}
------------------
Enter item
            `);
        this.items.push(new GroceryItem(item));
    }



    deleteItem() {
        let itemString = this.groceryList();
        let index = prompt(`
Grocery List:
------------------${itemString}
------------------
Enter the index of item you wish to remove
            `);

        if (index > -1 && index < this.items.length) {
            this.items.splice(index, 1);
        }
    }
}


let menu = new Menu();
menu.start();
// console.log(menu.items)






// class GroceryItem {
//     constructor(item) {
//         this.item = item;
//     }
// }

// class GroceryItemLocation {
//     constructor(location) {
//         this.location = location;
//         this.listOfItems = [];
//     }

//     addItem(item) {
//         if (item instanceof GroceryItem) {
//             this.listOfItems.push(item);
//         } else {
//             throw new Error(`You can only add an instance of an Item. Argument is not an item: ${item}`);
//         }
//     }
// }

// class Menu {
//     constructor() {
//         this.locations = [];
//     }

//     start() {
//         let selection = this.showMenuSelection();
//         while (selection != 0) {
//             switch (selection) {
//                 case '1':
//                     this.viewGroceryList();
//                     break;
//                 case '2':
//                     this.addItem();
//                     break;
//                 case '3':
//                 this.deleteItem();
//                 break;
//             default:
//                 selection = 0;
//         }
//         selection = this.showMenuSelection();
//     }

//     alert('Goodbye!');
// }

// showMenuSelection() {
//     return prompt(`
//     0) exit
//     1) View grocery list
//     2) Add to grocery list
//     3) delete from grocery list
//     `);
// }

// viewGroceryList() {
//     let listString = '';
//     for (let location of this.locations) {
//         listString += `${location.location}:\n`;
//             for (let item of location.listOfItems) {
//                 listString += `  - ${item.item}\n`;
//             }
//         }
//         alert(listString);
//     }

//     addItem() {
//         let locationName = prompt('Enter location');
//         let itemName = prompt('Enter item');
//         let location = this.locations.find(loc => loc.location === locationName);
//         if (!location) {
//             location = new GroceryItemLocation(locationName);
//             this.locations.push(location);
//         }
//         location.addItem(new GroceryItem(itemName));
//     }

//     deleteItem() {
//         let locationName = prompt('Enter the location of the item you wish to remove');
//         let location = this.locations.find(loc => loc.location === locationName);
//         if (location) {
//             let index = prompt('Enter the index of the item you wish to remove');
//             index = parseInt(index);
//             if (index > -1 && index < location.listOfItems.length) {
//                 location.listOfItems.splice(index, 1);
//             }
//         }
//     }
// }


//start menu
//let menu = new Menu();
//menu.start();
// console.log(menu.locations);