import PropTypes from 'prop-types';

import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {filterContact} from '../../redux/actions';
import {getFilter} from '../../redux/selectors'

export const Filter = () => {

const filterValue = useSelector(getFilter);
const dispatch = useDispatch();

const filterChange = e => dispatch(filterContact(e.target.value));

  
return (
<label className={s.lable}>Find contacts by name
   <input className={s.input} type='text' value={filterValue} onChange={filterChange}></input>
</label>
   );
};

Filter.propTypes = {
   filterValue: PropTypes.string.isRequired,
   filterChange: PropTypes.func.isRequired,
 }
