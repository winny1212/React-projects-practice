const initialState = {
  loading: false,
  data: [],
  errorMsg: '',
  count: 0,
};

const PokemonListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'POKEMON_LIST_LOADING':
      return {
        ...state,
        loading: true,
      };

    case 'POKEMON_LIST_FAIL':
      return {
        ...state,
        loading: false,
        errorMsg: 'unable to find pokeman',
      };

    case 'POKEMON_LIST_FAIL':
      return {
        ...state,
        loading: false,
        errorMsg: 'unable to find pokeman',
      };
  }
};
