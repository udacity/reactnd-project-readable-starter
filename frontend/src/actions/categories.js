export const type = {
  GET_CATEGORIES: 'GET_CATEGORIES',
}

export function getCategories(){
  return {
    type: type.GET_CATEGORIES,
    meta: {
      type: 'api',
      method: 'GET',
      path: 'categories',
    }
  }
}
