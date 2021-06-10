import PropTypes from 'prop-types'
import Button from './Button'
// const Header = (props) => {
const Header = ({title, onAdd, showAdd}) => {

    return (
        <div>
            <header className='header'>
                <h1>{title}</h1>
                <Button color={showAdd ? 'red':'green'} text={showAdd ? 'Close':'Add'} onClick={onAdd} />
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
