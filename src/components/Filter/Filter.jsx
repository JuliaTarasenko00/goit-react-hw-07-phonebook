import { FilterInp, FilterLabel } from './filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';

const Filter = () => {
  const filterState = useSelector(state => state.filters.filters);
  const dispatch = useDispatch();

  const onChangeFilter = ev => {
    dispatch(filterContacts(ev.target.value.toLowerCase().trim()));
  };

  return (
    <FilterLabel>
      <span>Find contacts by name</span>
      <FilterInp
        type="text"
        value={filterState}
        onChange={onChangeFilter}
        placeholder="search"
      />
    </FilterLabel>
  );
};

export default Filter;
