const INITIAL_STATE = [
    {
        'parser': 'restaurants',
        'sliderName': 'restaurant',
        'listName': 'Restaurants',
        'sidebarName': 'Restaurants',
        'icon': 'fa-cutlery',
        'id': 0
    },
    {
        'parser': 'grocers',
        'sliderName': 'grocery store',
        'listName': 'Grocery Stores',
        'sidebarName': 'Groceries',
        'icon': 'fa-shopping-cart',
        'id': 1
    },
    {
        'parser': 'banks',
        'sliderName': 'bank',
        'listName': 'Banks',
        'sidebarName': 'Banks',
        'icon': 'fa-university',
        'id': 2
    }
];

export default function(state = INITIAL_STATE, action) {
    return state;
}
