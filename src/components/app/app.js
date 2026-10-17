import AppInfo from '../app-info/app-info';
import './app.css';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

function App() {


    const data = [
        { name: 'John C', salary: 800, increase: false, id: 1 },
        { name: 'Alex N', salary: 3000, increase: true, id: 2 },
        { name: 'Diana T', salary: 6000, increase: false, id: 3 }
    ];

    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>
            <EmployersList data={data} />
            <EmployersAddForm />
        </div>
    )
}

export default App;