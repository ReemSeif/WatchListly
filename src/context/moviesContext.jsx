
import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";

const initialstate={
    watchlist: localStorage.getItem("watchlist") ? JSON.parse(localStorage.getItem('watchlist')) : [],
    watched:localStorage.getItem("watched") ? JSON.parse(localStorage.getItem('watched')) : [],
}
export const MovieContext= createContext(initialstate);

const ContextProvider= ({children}) => {
    const [state , dispatch]= useReducer(reducer , initialstate);
    useEffect(()=>{
        localStorage.setItem('watchlist' , JSON.stringify(state.watchlist))
      localStorage.setItem('watched' , JSON.stringify(state.watched))
    },[state])
    return <MovieContext.Provider value={
        {watchlist:state.watchlist ,
         watched: state.watched ,
          MoviesDispatch: dispatch,
        }
        }
        >{children}</MovieContext.Provider>
}

export default ContextProvider;

export const useMovieContext= () => {
    return useContext(MovieContext);
}