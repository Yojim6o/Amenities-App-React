const INITIAL_STATE = [
    {
        'parser': 'restaurants',
        'sliderName': 'restaurant',
        'listName': 'Restaurants',
        'sidebarName': 'Restaurants',
        'icon': 'fa-cutlery',
        'id': 1
    },
    {
        'parser': 'grocers',
        'sliderName': 'grocery store',
        'listName': 'Grocery Stores',
        'sidebarName': 'Groceries',
        'icon': 'fa-shopping-cart',
        'id': 2
    },
    {
        'parser': 'banks',
        'sliderName': 'bank',
        'listName': 'Banks',
        'sidebarName': 'Banks',
        'icon': 'fa-university',
        'id': 3
    }
];

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        default:
            return state;
    }
}
