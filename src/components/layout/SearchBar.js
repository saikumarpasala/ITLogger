import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SearchLogs } from '../../actions/logActions';

const SearchBar = ({ SearchLogs }) => {
  const text = useRef('');

 const onChange = e => {
    SearchLogs(text.current.value);

  }
    return (
        <nav style={{ marginBottom: '30px' }} className='blue'>
        <div className='nav-wrapper'>
          <form>
            <div className='input-field'>
              <input id='search' type='search' placeholder='Search Logs..' ref={text}
              onChange={onChange} />
              <label className='label-icon' htmlfor='search'>
              <i class='material-icons'>search</i>
              </label>
              <i className='material-icons'>close</i>
            </div>
          </form>
        </div>
      </nav>
    );
};
SearchBar.propType = {
  searchLogs: PropTypes.func.isRequired
}

export default connect(null, { SearchLogs })(SearchBar);