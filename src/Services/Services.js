
export const getSearch = (searchText, page) => {

    const params = new URLSearchParams({
      q: searchText,
      page: page,
      key: '35073598-f2a52a45f6e7203dfdfac4edb',
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    });
  
    return fetch(`${'https://pixabay.com/api/'}?${params}`);
  };