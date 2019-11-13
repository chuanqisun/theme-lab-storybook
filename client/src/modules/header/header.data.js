export const headerData = {
  logo: {
    src: "https://via.placeholder.com/160X48",
    sources: [
      {
        media: "(max-width: 992px)",
        srcSet: "https://via.placeholder.com/120X48"
      }
    ]
  },
  account: {
    signedIn: false
  },
  cart: {
    itemCount: 2
  }
};

export const headerDataSignedIn = {
  ...headerData,
  account: {
    signedIn: true
  }
};

export const knobify = (data = headerData) => ({
  ...data
});
