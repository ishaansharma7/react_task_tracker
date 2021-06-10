import PropTypes from 'prop-types'
import Button from './Button'
// const Header = (props) => {
const Header = ({title, onAdd}) => {

    return (
        <div>
            <header className='header'>
                {/* <h1>{props.title}</h1> */}
                <h1>{title}</h1>
                <Button color='green' text='Add' onClick={onAdd} />
            </header>
        </div>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,  // generate error in dev mode if wrong type
}

// CSS in JS
// style={{backgroundColor: color}} this is an attribute
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

export default Header
