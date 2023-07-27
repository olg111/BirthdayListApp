import './app-info.css';

const AppInfo = ({increased, employees}) => {
    return (
        <div className = "app-info">
            <h1 style={{textAlign: "center"}}>Birthdays list</h1>
            <h2>My list: {employees}</h2>
            <h2>Presents: {increased}</h2>
            <h2>Сongratulations: {increased}</h2>


        </div>

    )
}

export default AppInfo;