import * as types from '../actions/actionTypes';

const initialState = {
  totalApps: 0,
  appsList: [], //hold individual application objects
  lastAppID: 100,
};

const applicationsReducer = (state = initialState, action) => {
  let appsList;
  let totalApps;

  switch (action.type) {
    case types.ADD_CARD:
      const appID = state.lastAppID + 1;
      totalApps = state.totalApps + 1;

      const newCard = {
        appID,
        company: action.payload.company,
        date_applied: action.payload.date_applied,
        status: action.payload.status,
        role: action.payload.role,
        notes: action.payload.notes,
      };

      // push the new application onto a copy of the application list
      appsList = state.appsList.slice();
      appsList.push(newCard);

      // return updated state
      return {
        ...state,
        totalApps,
        appsList,
        lastAppID: appID,
      };

    case types.DELETE_CARD:
      break;
    default: {
      return state;
    }
  }
};

export default applicationsReducer;
