const FOLLOW = 'FOLLOW';
const FOLLOW = 'UNFOLLOW';
const FOLLOW = 'SET_USERS';

let initialState = {
    users:[
    {id:1, followed: false, fullName: 'dmit', status: 'I am a boss'},
    {id:2, followed: true, fullName: 'sasha', status: 'I am a boss'}
    ]
};

const usersReducer = (state = initialState, action) => {

    switch(action.type) {
        case FOLLOW:
            return { 
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return{...u, followed: true}
                    }
                    return u;
                }) 
            }

        case UNFOLLOW:
            return { 
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return{...u, followed: true}
                    }
                    return u;
                }) 
            }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }

        default:
            return state;
    }
}

export const followAC = (userId) => {{type: FOLLOW, userId}}
export const unfollowAC = (userId) => {{type: UNFOLLOW, userId}}
export const setUsersAC = (users) => {{type: UNFOLLOW, users}}

export default usersReducer;