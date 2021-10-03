import "./app-info.css";

const AppInfo = ({all, prize}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {all} </h2>
            <h2>Премию получат: {prize} </h2>
        </div>
    )
}

export default AppInfo;