import Button from './Button'

const Header = ({title, onAdd, show}) => {

    return(
        <header className="header">
            <h1>{ title } </h1>
            <Button text={show ? "Close" : "Add"} color={show ? "grey" : "green"} onClick={onAdd}/>
        </header>
    )
}

export default Header