export const initialState = {
    users: [
        {id: 1, userName: "Nayeem Ahmed"},
        {id: 2, userName: "Md. Emon"}
    ]
};

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_USER":
            console.log(action.payload)
            return {
                ...state,
                users: [
                    ...state.users,
                    {
                        id: state.users.length + 1, 
                        userName: action.payload,
                    },
                ]
            };

        case "DELETE_USER":
            const filteredUsers = state.users.filter(user => user.id !== action.payload)
            return {
                ...state,
                users: filteredUsers
            };
    
        default:
            return state;
    }
}