import PropTypes from 'prop-types';
import {ContactListEL} from './ContactListEL';
import { useSelector } from 'react-redux';
import {useGetContactsQuery, useDeleteContatcMutation} from '../../redux/contactsSlice';
import {getFilterList} from '../../redux/selectors';

export const ContactList = () => {
const filter = useSelector(getFilterList);
const {data: contacts} = useGetContactsQuery();
const [deleteContactc] = useDeleteContatcMutation();

const normalizeFilter = filter.toLowerCase();
const filteredContacts =  contacts.filter(contact =>
contact.name.toLowerCase().includes(normalizeFilter));


   const onDeleteContact = id => deleteContactc(id);

return (
    <ul>
   {contacts && filteredContacts.map(({id, name, number}) => 
   <ContactListEL 
   key={id} 
   id={id}
   name={name} 
   number={number}
   onDeleteContact={onDeleteContact} 
  
  />)}
</ul>
   );
};

ContactList.propTypes = {
onDeleteContact: PropTypes.func.isRequired,
contacts: PropTypes.arrayOf(
PropTypes.shape({
id: PropTypes.string.isRequired,
name: PropTypes.string.isRequired,
number: PropTypes.string.isRequired,
}),
),
 }
 

