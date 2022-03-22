import { createAction } from ".";
import { userServices } from "../../Services";
import { FETCH_CREDENTIALS } from "./type";

export const login = (user) => {
    return dispatch => {
        userServices.signIn(user)
            .then(res => {
                dispatch(createAction(FETCH_CREDENTIALS, res.data));
                localStorage.setItem('credentials', JSON.stringify(res.data));
            })
            .catch(err => {
                console.log(err);
            });
    }
}