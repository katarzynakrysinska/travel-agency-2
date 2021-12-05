/* SELECTORS */

export const getAllFilters = ({filters}) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
// TODO - add other action types

export const ADD_TAGS = createActionName('ADD_TAGS');
export const REMOVE_TAGS = createActionName('REMOVE_TAGS');
export const CHANGE_DURATION_FROM = createActionName('CHANGE_DURATION_FROM');
export const CHANGE_DURATION_TO = createActionName('CHANGE_DURATION_TO');
export const ADD_REGION = createActionName('ADD_REGION');
export const REMOVE_REGION = createActionName('REMOVE_REGION');

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
// TODO - add other action creators

export const addTags = payload => ({ payload, type: ADD_TAGS });
export const removeTags = payload => ({ payload, type: REMOVE_TAGS});
export const changeDurationFrom = payload => ({ payload, type: CHANGE_DURATION_FROM});
export const changeDurationTo = payload => ({ payload, type: CHANGE_DURATION_TO});
export const addRegion = payload => ({payload, type: ADD_REGION});
export const removeRegion = payload => ({payload, type: REMOVE_REGION});

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    case ADD_TAGS:
      return {
        ...statePart,
        tags: [
          ...statePart.tags,
          action.payload,
        ],
      };
    case REMOVE_TAGS:
      return {
        ...statePart,
        tags: [...statePart.tags.filter((tag) => tag !== action.payload)],
      };
    case CHANGE_DURATION_FROM:
      return {
        ...statePart,
        duration: {
          ...statePart.duration,
          from: action.payload,
        },
      };
    case CHANGE_DURATION_TO:
      return {
        ...statePart,
        duration: {
          ...statePart.duration,
          to: action.payload,
        },
      };
    case ADD_REGION:
      return {
        ...statePart,
        regions: [
          ...statePart.regions,
          action.payload,
        ],
      };
    case REMOVE_REGION:
      return {
        ...statePart,
        regions: statePart.regions.filter(region => region !== action.payload),
      };
    // TODO - handle other action types
    default:
      return statePart;
  }
}
