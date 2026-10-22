import './app-info.css'
import styled from 'styled-components';


const Header = styled.h2`
    font-size: 40px;
    text-align: center;
`

const AppInfo = ({ increased, employees }) => {
    return (
        <div className='app-info'>
            <Header>Учет сотрудников в компании N</Header>
            <Header>Общее число сотрудников: {employees}</Header>
            <Header>Премию получат: {increased}</Header>
        </div>
    )
}

export default AppInfo;