import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_DETAILS = "GET_DETAILS";
export const CLEAR_DETAILS = "CLEAR_DETAILS";
export const GET_NAME_COUNTRIES_FORM = "GET_NAME_COUNTRIES_FORM";
export const CLEAR_NAME_COUNTRIES_FORM = "CLEAR_NAME_COUNTRIES_FORM";
export const GET_COUNTRIES_BY_ACTIVITY = "GET_COUNTRIES_BY_ACTIVITY";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const POST_FAVOURITE = "POST_FAVOURITE";
export const DELETE_FAVOURITE = "DELETE_FAVOURITE";
export const DELETE_COUNTRY = "DELETE_COUNTRY";

export function getCountries(
  nameCountry,
  pages,
  sort,
  order,
  filterByContinent,
  filterByActivity
) {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        `http://localhost:3001/country?name=${nameCountry}&page=${pages}&order1=${sort}&order2=${order}&filter=${filterByContinent}&filter2=${filterByActivity}`
      );
      return dispatch({ type: "GET_COUNTRIES", payload: json.data });
    } catch (error) {
      return error;
    }
  };
}

export function getDetail(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get(`http://localhost:3001/country/${id}`);
      return dispatch({ type: "GET_DETAILS", payload: json.data });
    } catch (error) {
      return error;
    }
  };
}

export function clearDetails() {
  return function (dispatch) {
    return dispatch({ type: "CLEAR_DETAILS" });
  };
}

export function getNameCountriesForm(nameCountry) {
  return async function (dispatch) {
    try {
      var json = await axios(
        `http://localhost:3001/country?nameAct=${nameCountry}`
      );
      return dispatch({ type: "GET_NAME_COUNTRIES_FORM", payload: json.data });
    } catch (error) {
      return error;
    }
  };
}

export function clearNameCountriesForm() {
  return function (dispatch) {
    return dispatch({ type: "CLEAR_NAME_COUNTRIES_FORM" });
  };
}

export function postActivity(name, difficult, duration, season, paisid) {
  return async function (dispatch) {
    try {
      const response = await axios.post(`http://localhost:3001/activity`, {
        name,
        difficult,
        duration,
        season,
        paisid,
      });
      return response;
    } catch (error) {
      return error;
    }
  };
}

export function getActivities() {
  return async function (dispatch) {
    try {
      var json = await axios.get(`http://localhost:3001/activity/get`);
      return dispatch({ type: "GET_ACTIVITIES", payload: json.data });
    } catch (error) {
      return error;
    }
  };
}

export function postFavourites(favourite) {
  return function (dispatch) {
    return dispatch({ type: "POST_FAVOURITE", payload: favourite });
  };
}

export function deleteFavourites(id) {
  return function (dispatch) {
    return dispatch({ type: "DELETE_FAVOURITE", payload: id });
  };
}

export function deleteCountry(id) {
  return async function (dispatch) {
    try {
      await axios.delete(`http://localhost:3001/country/player/${id}`);
      return dispatch({ type: "DELETE_COUNTRY", payload: id });
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteCountryCard(id) {
  return function (dispatch) {
    return dispatch({ type: "DELETE_COUNTRY", payload: id });
  };
}
