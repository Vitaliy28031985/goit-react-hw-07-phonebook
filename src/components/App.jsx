
import {ContactList} from 'components/ContactList/ContactList';
import {ContactForm} from 'components/ContactForm/ContactForm';
import {Filter} from 'components/Filter/Filter';
import {useGetContactsQuery} from '../redux/contactsSlice';


export const App = () => {

  const {isLoading} = useGetContactsQuery();

  return (
   <div style={{
   marginLeft: 50,
   width: 900,
  }}>
  <p style={{
  fontSize: 30,
  color: '#010101'
  }}
  >Phonebook</p>
<ContactForm />
  <p
  style={{
  fontSize: 30,
  color: '#010101'
  }}
  >Contacts</p>
  <Filter/>
  {isLoading ? (<p>Loading...</p>) : (<ContactList />)}
  </div>
  );
};
