import {
  SET_SHOP_CATEGORIES,
  SET_NAVBAR_LINKS,
  SET_SHOP_PRODUCTS,
  FILTER_PRODUCTS_WITH_CATEGORY_ID
} from './types';

export function filterProductsWithCategoryId(_id) {
  console.log(_id);
  return ({
    type: FILTER_PRODUCTS_WITH_CATEGORY_ID,
    payload: _id
  })
}

export function fetchShopCategories() {

  return({
    type: SET_SHOP_CATEGORIES,
    payload: [
        {
          _id: 0,
          title: 'All'
        },
        {
          _id: 1,
          title: 'JavaScript'
        },
        {
          _id: 2,
          title: 'UI/UX'
        },
        {
          _id: 3,
          title: 'Linux'
        },
        {
          _id: 4,
          title: 'Python'
        },
        {
          _id: 5,
          title: 'UML'
        },
        {
          _id: 6,
          title: 'Ruby'
        }
      ]
    }
  )
}

export function fetchShopProducts() {
  return({
    type: SET_SHOP_PRODUCTS,
    payload: [
      {
        _id: 0,
        title: 'JavaScript in the Browser',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cupiditate unde voluptatibus consequuntur totam velit sed odio alias odit consequatur praesentium possimus sint nesciunt magnam quo, eum, explicabo neque numquam excepturi blanditiis optio. Error, non cum ipsum nam harum exercitationem ea architecto repellat vitae aliquid mollitia quibusdam quod molestias culpa?', 
        price: '1.99',
        belongsTo: [0, 1]
      },
      {
        _id: 1,
        title: 'Graph Database',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cupiditate unde voluptatibus consequuntur totam velit sed odio alias odit consequatur praesentium possimus sint nesciunt magnam quo, eum, explicabo neque numquam excepturi blanditiis optio. Error, non cum ipsum nam harum exercitationem ea architecto repellat vitae aliquid mollitia quibusdam quod molestias culpa?', 
        price: '1.99',
        belongsTo: [0, 6]
      },
      {
        _id: 2,
        title: 'Full Stack Development',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cupiditate unde voluptatibus consequuntur totam velit sed odio alias odit consequatur praesentium possimus sint nesciunt magnam quo, eum, explicabo neque numquam excepturi blanditiis optio. Error, non cum ipsum nam harum exercitationem ea architecto repellat vitae aliquid mollitia quibusdam quod molestias culpa?', 
        price: '1.99',
        belongsTo: [0, 1, 4]
      },
      {
        _id: 3,
        title: 'User Interface Design',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cupiditate unde voluptatibus consequuntur totam velit sed odio alias odit consequatur praesentium possimus sint nesciunt magnam quo, eum, explicabo neque numquam excepturi blanditiis optio. Error, non cum ipsum nam harum exercitationem ea architecto repellat vitae aliquid mollitia quibusdam quod molestias culpa?', 
        price: '1.99',
        belongsTo: [0, 2]
      },
      {
        _id: 4,
        title: 'JavaScript Development',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cupiditate unde voluptatibus consequuntur totam velit sed odio alias odit consequatur praesentium possimus sint nesciunt magnam quo, eum, explicabo neque numquam excepturi blanditiis optio. Error, non cum ipsum nam harum exercitationem ea architecto repellat vitae aliquid mollitia quibusdam quod molestias culpa?', 
        price: '1.99',
        belongsTo: [0, 1]
      },
      {
        _id: 5,
        title: 'User Experience Design',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cupiditate unde voluptatibus consequuntur totam velit sed odio alias odit consequatur praesentium possimus sint nesciunt magnam quo, eum, explicabo neque numquam excepturi blanditiis optio. Error, non cum ipsum nam harum exercitationem ea architecto repellat vitae aliquid mollitia quibusdam quod molestias culpa?', 
        price: '1.99',
        belongsTo: [0, 2]
      },
      {
        _id: 6,
        title: 'Advanced OOP',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cupiditate unde voluptatibus consequuntur totam velit sed odio alias odit consequatur praesentium possimus sint nesciunt magnam quo, eum, explicabo neque numquam excepturi blanditiis optio. Error, non cum ipsum nam harum exercitationem ea architecto repellat vitae aliquid mollitia quibusdam quod molestias culpa?', 
        price: '1.99',
        belongsTo: [0, 1, 6]
      }
    ]
  })
}
