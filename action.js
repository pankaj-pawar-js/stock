const URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false';

export const fetchCurrencyListSuccess = (items) => ({
  type: "FETCH_CURRENCY_LIST",
  payload: items,
});

export const loading = (showLoader) => ({
  type: "LOADING",
  payload: showLoader,
});

export const fetchCurrencyList = () => {
    return (dispatch) => {
        dispatch(loading(true));

        fetch(URL)
        .then( (response) => {
            if (response.status !== 200) {
                throw Error(response.statusText);
            }
            return response.json();
        } )
        .then( (items) => {
            dispatch(fetchCurrencyListSuccess(items));
            dispatch(loading(false));
        } );
    }
};
