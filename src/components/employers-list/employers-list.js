import EmployersListItem from '../employers-list-item/employers-list-item'

import './employers-list.css'

const EmployersList = ({data}) => {

    const elements = data.map(item => {
        return (
            <EmployersListItem {...item}/>
        )
    })

    return(
        <ul className="app-list list-gropp">
            {elements}
        </ul>
    )
}

export default EmployersList;