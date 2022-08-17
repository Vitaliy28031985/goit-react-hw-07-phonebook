// import PropTypes from 'prop-types';

import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {filterContact} from '../../redux/actions';

export const Filter = () => {

const filterValue = useSelector(state => state.contacts.filter);
const dispatch = useDispatch();

const filterChange = e => dispatch(filterContact(e.target.value));

  
return (
<label className={s.lable}>Find contacts by name
   <input className={s.input} type='text' value={filterValue} onChange={filterChange}></input>
</label>
   );
};

// Filter.propTypes = {
//    value: PropTypes.string.isRequired,
//    onChange: PropTypes.func.isRequired,
//  }
// dispatch(chahgeFilter(e.target.value))