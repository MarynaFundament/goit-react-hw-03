import Contact from "../Contact/Contact"
import styles from "./contactList.module.css"
import PropTypes from 'prop-types';



const ContactList = ({data, onDelete}) => {

    return (
        <ul>
        { data.map((el) =>(

        <li key={el.id}>
        <Contact data = {el} onDelete = {onDelete}/>
        </li> 
         ))}

        </ul>
      
    )
}



export default ContactList;