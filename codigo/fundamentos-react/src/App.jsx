const MyButton = ({text}) => {
    // console.log(props)
    
    const handleClickButton = (title) => {
        console.log('You clicked the button: ' + title)
    }

    return (
        <>
            <button onClick={ () => handleClickButton(text) }>{text}</button>
        </>
    )
}

const OnlineText = () => {
    return (
        <>
            <p>Online</p>
        </>
    )
}

const OfflineText = () => {
    return (
        <>
            <p>Offline</p>
        </>
    )
}

const ItemPet = (props) => {
    return <li>{props.pet}</li>
}

const App = () => {

    const title = 'Hello course from a constant!'
    const user = true
    const pets = ['🐶', '😺', '🐷']
    return (
        <>
            <h1>{title.toUpperCase()}</h1>
            <MyButton text='Button 1'/>
            <MyButton text='Button 2'/>
            {/* { user ? <OnlineText/> : <OfflineText/> } */}
            { user && <OnlineText/> }
            <ul>
                {
                    pets.map((pet, index) => (
                        <ItemPet key={index} pet={pet}/>
                    ))
                }
            </ul>
        </>
    )
}

export default App