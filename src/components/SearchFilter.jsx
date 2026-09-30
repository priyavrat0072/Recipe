import Select from "react-select"

const SearchFilter = ({options ,value , onSelect , placeholder}) => {

      const customStyles = {
    control: (base, state) => ({
      ...base,
      minHeight: "42px",
      borderRadius: "12px",
      borderColor: state.isFocused ? "#f59e0b" : "#d1d5db",
      boxShadow: state.isFocused ? "0 0 0 1px #f59e0b" : "none",
      "&:hover": {
        borderColor: "#339966",
      },
    }),

    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected
        ? "#f59e0b"
        : state.isFocused
        ? "#fef3c7"
        : "white",
      color: state.isSelected ? "white" : "#111827",
      cursor: "pointer",
    }),

    menu: (base) => ({
      ...base,
      borderRadius: "8px",
      overflow: "hidden",
    }),

    placeholder: (base) => ({
      ...base,
      color: "#9ca3af",
    }),
  }

    return (
    <div>
      <Select 
         options={options} 
         value={value}
         onChange={onSelect}
         placeholder = {placeholder}
         styles={customStyles}
         isClearable
    />
    </div>
  );
};
export default SearchFilter;
