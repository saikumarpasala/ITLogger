import { GET_LOGS,
     SET_LOADING,
      LOGS_ERROR,
       ADD_LOG,
        DELETE_LOG,
        SEARCH_LOGS
    } from './types';


//export const getLogs = () => {
 //return async dispatch => {
   //  setLoading();


     //const res = await fetch('/logs');
     //const data = await res.json();

     //dispatch({
       //  type: GET_LOGS,
         //payload: data
     //});
 //};
//};

// Get logs from server
   export const getLogs = () => async dispatch => {
   try {
       setLoading();
    const res = await fetch('/logs');
    const data = await res.json();

    dispatch({
         type: GET_LOGS,
          payload: data
      });

   } catch (err) {
       dispatch({
           type: LOGS_ERROR,
           payload: err.response.statusText
       });
   }
};
// Add new log
export const addlog = (log) => async dispatch => {
    try {
        setLoading();
     const res = await fetch('/logs', {
     method: 'POST',
     body: JSON.stringify(log),
     header: {
         'Content-Type': 'application//json'
     }
    });
    const data = await res.json();
 
     dispatch({
          type: ADD_LOG,
           payload: data
       });
 
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.statusText
        });
    }
 };
 
 // Delete log from server
 export const deleteLog = (id) => async dispatch => {
    try {
        setLoading();
    
        await fetch(`/logs/${id})` , {
            method: 'DELETE'
        });
        
 
     dispatch({
          type: DELETE_LOGS,
           payload: id
       });
 
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.statusText
        });
    }
 };


 // Search server logs
 export const SearchLog = (id) => async dispatch => {
    try {
        setLoading();
    
        await fetch(`/logs/${id})` , {
            method: 'SEARCH'
        });
        
 
     dispatch({
          type: SEARCH_LOGS,
           payload: id
       });
 
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.statusText
        });
    }
 };

 
 
//set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};
 