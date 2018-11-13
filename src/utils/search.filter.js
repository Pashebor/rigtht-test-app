export const clone = (obj) => {
  let copy;
  
  if (null == obj || "object" !== typeof obj) return obj;
  
  // Handle Array
  if (obj instanceof Array) {
    copy = [];
    for (var i = 0, len = obj.length; i < len; i++) {
      copy[i] = clone(obj[i]);
    }
    return copy;
  }
  // Handle Object
  if (obj instanceof Object) {
    copy = {};
    for (var attr in obj) {
      if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
    }
    return copy;
  }
  
  throw new Error("Unable to copy obj! Its type isn't supported.");
};

export const searchFilter = (state, filterState)=> {
  const filteringState = clone(state);
  filteringState.forEach( (article) => {
    let filteredArticles = article.list.filter(item => {
      return (item.id == filterState) ||
             (item.title.toLowerCase().indexOf(filterState.toLowerCase()) !== -1) ||
             (item.date.toLowerCase().indexOf(filterState.toLowerCase()) !== -1) ||
             (item.preview_text.toLowerCase().indexOf(filterState.toLowerCase()) !== -1);
    });
    article.list = filteredArticles;
  });
  
  return filteringState;
};