import { ADD_BOOKING, REMOVE_BOOKING } from "./actionTypes";

// initial state
const initialState = [];

const bookingReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_BOOKING: {
         const newBooking = {
            id: state.length + 1 + Math.random() * 100,
            from: action.payload.from,
            to: action.payload.to,
            date: action.payload.date,
            guestNos: action.payload.guestNos,
            flightClass: action.payload.flightClass,
         };
         if (state.length >= 3) {
            alert("You have exceeded the allowed maximum booking numbers");
            return state;
         } else {
            return [...state, newBooking];
         }
      }
      case REMOVE_BOOKING: {
         const newState = state.filter((item) => item.id !== action.payload);
         return newState;
      }
      default:
         return state;
   }
};

export default bookingReducer;
