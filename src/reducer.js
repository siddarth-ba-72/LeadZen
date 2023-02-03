const reducer = (state, action) => {
    switch (action.type) {
        case "RESET_LOADER":
            return {
                isLoading: true,
            }
        case "GET_LEADS":
            return {
                ...state,
                isLoading: false,
                leads: action.payload,
            }
    }
};

export default reducer;