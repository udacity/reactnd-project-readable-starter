import uuidv4 from 'uuid/v4'

export function uniqueId(){
  return uuidv4()
}

export function timestamp(){
  return Date.now()
}

export function sortFunc(key){
  return (a,b) => a[key] < b[key]
}
