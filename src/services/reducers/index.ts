import { ReduxAction, ReduxState } from "./reduxTypes";

export default function mainReducer(state: ReduxState, action: ReduxAction): ReduxState {
    console.debug("MAIN REDUCER CALLED with action " + action.type);
    return {
    }
}