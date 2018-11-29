import { FETCH_DATA } from '../actions/types';

const initialState = {
  weatherInfo: [],
  //Write here your state properties for this reducer with there initial value
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        weatherInfo: action.weatherInfo,
      };
    default : {
        return state
    }
  }
}