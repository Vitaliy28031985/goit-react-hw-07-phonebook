// import PropTypes from 'prop-types';
import {ContactListEL} from './ContactListEL';
// import { useSelector, useDispatch } from 'react-redux';
// import action from '../../redux/actions';
// import { getVisibleContacts } from '../../redux/selectors';

import {ususeGetContactsQuery, useDeleteContatcMutation} from '../../redux/contactsSlice';

export const ContactList = () => {

const {data: contacts} = ususeGetContactsQuery();
const [deleteContactc] = useDeleteContatcMutation();


 
   const onDeleteContact = id => deleteContactc(id);

return (
<ul>
   {contacts.map(contact => 
   <ContactListEL 
   key={contact.id} 
   id={contact.id}
   name={contact.name} 
   number={contact.number}
   onDeleteContact={onDeleteContact} 
  
  />)}
</ul>
   );
};

// ContactList.propTypes = {
// onDeleteContact: PropTypes.func.isRequired,
// contacts: PropTypes.arrayOf(
// PropTypes.shape({
// id: PropTypes.string.isRequired,
// name: PropTypes.string.isRequired,
// number: PropTypes.string.isRequired,
// }),
// ),
//  }
 

// console.log(contacts.name);
   // const contacts = useSelector(getVisibleContacts);
   // const dispatch = useDispatch();