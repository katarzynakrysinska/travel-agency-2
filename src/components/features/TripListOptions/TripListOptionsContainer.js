import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllRegions} from '../../../redux/regionsRedux';
import {getAllFilters, changeSearchPhrase, addTags, removeTags, changeDurationFrom, changeDurationTo, addRegion, removeRegion} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
  regions: getAllRegions(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
  addTags: tags => dispatch(addTags(tags)),
  removeTags: tags => dispatch(removeTags(tags)),
  changeDurationFrom: duration => dispatch(changeDurationFrom(duration)),
  changeDurationTo: duration => dispatch(changeDurationTo(duration)),
  addRegion: region => dispatch(addRegion(region)),
  removeRegion: region => dispatch(removeRegion(region))
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
