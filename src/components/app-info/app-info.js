import './app-info.css';

const AppInfo = ({gifted, birthdayPersons, congratulated}) => {
    return (
        <div className = "app-info">
            <h1 style={{textAlign: "center"}}>Birthdays list</h1>
            <h2>My list: {birthdayPersons}</h2>
            <h2>Presents: {gifted}</h2>
            <h2>Сongratulations: {congratulated}</h2>


        </div>

    )
}

export default AppInfo;