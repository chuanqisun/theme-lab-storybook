export const headerData = {
  logo: {
    src: "https://via.placeholder.com/160x48"
  },
  nav: {
    categories: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5']
  },
  account: {
    signedIn: false,
  },
  cart: {
    itemCount: 2,
  }
};


export const knobify = (data = headerData) => ({
  ...data,
});
