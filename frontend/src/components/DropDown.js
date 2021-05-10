import Select from 'react-select'

const DropDown = ({ filters, setFilter, selectedFilter }) => <Select value={selectedFilter} options={filters} onChange={setFilter}/>;

export default DropDown;
