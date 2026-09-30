import Select from "react-select"

const SearchFilter = ({options , onSelect}) => {

    return (
    <div>
      <Select 
         options={options} 
         onChange={onSelect}
    />
    </div>
  );
};
export default SearchFilter;
