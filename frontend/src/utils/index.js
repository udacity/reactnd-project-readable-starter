export const postComparer = (key) => {
  // Returns a comparer function to be used in sorting arrays of posts
  switch(key){
    case 'voteScore':
      // highest first
      return (a, b) => b[key] - a[key]
    case 'timestamp':
      // Latest first
      return (a, b) => a[key] - b[key]
    case 'author':
      return (a, b) => {
        const authorA = a.author.toUpperCase();
        const authorB = b.author.toUpperCase();
        if (authorA < authorB){
          return -1
        }
        if (authorA > authorB){
          return +1
        }
        // must be same
        return 0
      }
  }
}
