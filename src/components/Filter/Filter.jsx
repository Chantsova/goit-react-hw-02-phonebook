import './Filter.css';

const Filter = ({ value, onChange }) => (
  <label>
    <input type="text" value={value} onChange={onChange}></input>
  </label>
);

export default Filter;
