import {
  SET_USER_PURCHASES,
  SET_PURCHASE_DETAIL,
  SET_CART_PRODUCTS,
  ADD_CART_PRODUCT,
  AUTHENTICATE_USER
} from './types';

export function signIn({email, password}) {
    return ({
        type: AUTHENTICATE_USER,
        payload: {
            user: {
                _id: 0,
                name: 'Ryan S',
                address: '182 my street',
                cartProducts: []
            }
        }
    })
}

export function setPurchaseDetail(_id) {
  return ({
    type: SET_PURCHASE_DETAIL,
    payload: _id
  })
}

export function addCartProduct(product) {
    return ({
        type: ADD_CART_PRODUCT,
        payload: product
    })
}

export function fetchCartProducts() {
    return ({
        type: SET_CART_PRODUCTS,
        payload: [
            {
                _id: 0,
                product: {
                    _id: 0,
                    title: 'JavaScript in the Browser',
                    description: 'A shorter description of the product!', 
                    price: '1.99',
                    belongsTo: [0, 1],
                    imageUrl: 'http://via.placeholder.com/80x80'
                },
                quantity: 2
            },
            {   _id: 1,
                product: {
                    _id: 1,
                    title: 'Graph Database',
                    description: 'A shorter description of the product!', 
                    price: '1.99',
                    belongsTo: [0, 6],
                    imageUrl: 'http://via.placeholder.com/80x80'
                  },
                  quantity: 1
            },
        ]
    })
}

export function fetchUserPurchases() {
  return ({
    type: SET_USER_PURCHASES,
    payload: [
      {
          _id: 0,
          total: 19.40,
          orderNumber: 'A0048248343',
          orderDate: new Date().toDateString(),
          creditCard: '-0000',
          user: {
              name: 'Jordan Hudgens',
              shippingAddress: '1234 West State Street'
          }
      },
      {
          _id: 1,
          total: 1.30,
          orderNumber: '24343sdfkjh72',
          orderDate: new Date().toDateString(),
          creditCard: '-0000',
          user: {
              name: 'Maxwell Nelson',
              shippingAddress: '1337 West State Street'
          }
      },
      {
          _id: 2,
          total: 1.30,
          orderNumber: 'B0048248343',
          orderDate: new Date().toDateString(),
          creditCard: '-0000',
          user: {
              name: 'Jordan Hudgens',
              shippingAddress: '1234 West State Street'
          }
      },
      {
          _id: 3,
          total: 16.40,
          orderNumber: 'ADFasdlfkjwe',
          orderDate: new Date().toDateString(),
          creditCard: '-0000',
          user: {
              name: 'Max Asher Nelson',
              shippingAddress: '1234 West State Street'
          }
      },
      {
          _id: 4,
          total: 19.40,
          orderNumber: 'A0048248343',
          orderDate: new Date().toDateString(),
          creditCard: '-0000',
          user: {
              name: 'Jordan Hudgens',
              shippingAddress: '1234 West State Street'
          }
      },
      {
          _id: 5,
          total: 19.40,
          orderNumber: 'A0048248343',
          orderDate: new Date().toDateString(),
          creditCard: '-0000',
          user: {
              name: 'Jordan Hudgens',
              shippingAddress: '1234 West State Street'
          }
      },
      {
          _id: 6,
          total: 19.40,
          orderNumber: 'A0048248343',
          orderDate: new Date().toDateString(),
          creditCard: '-0000',
          user: {
              name: 'Jordan Hudgens',
              shippingAddress: '1234 West State Street'
          }
      },
      {
          _id: 7,
          total: 3.20,
          orderNumber: '5UFISHDFJASUSHI298',
          orderDate: new Date().toDateString(),
          creditCard: '-0000',
          user: {
              name: 'Andrew Wold',
              shippingAddress: '348 Yo State Street'
          }
      },
    ]
  })
}