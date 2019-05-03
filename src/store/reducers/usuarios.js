const INITIAL_STATE = {
    data: [],
    loading: false,
    error: false,
};

export default function usuarios(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'REQUEST_USUARIO_LIST':
            return { ...state, loading: true };
        case 'SUCCESS_USUARIO_LIST':
            return { data: action.payload.data, loading: false, error: false };
        case 'FAILURE_USUARIO_LIST':
            return { data: [], loading: false, error: true };
        default:
            return state;
    }
}