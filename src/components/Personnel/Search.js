import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const InputSearch = styled.input`
    height: 42px;
    border-rad;ius: 0;
    border-left: none;
`

const SpanSearch = styled.span`
    border-radius: 0 !important;
    background-color: transparent;
`

const Search = React.memo(props => {
  const [enteredFilter, setEnteredFilter] = useState(props.inputSearch);
  const [initialSearch, setInitialSearch] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    if(initialSearch){
      const timer = setTimeout(() => {
        if(enteredFilter === inputRef.current.value){
          const query =
          enteredFilter.length === 0
            ? ''
            : `${enteredFilter}`;
          props.history.push( '?firstname=' + query );
          props.onSearchName(true);
        }
      }, 500)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [enteredFilter, inputRef]);

  const onChangedFilter = event => {
    setEnteredFilter(event.target.value);
    setInitialSearch(true)
  }

  return (
    <div className="form-group row mb-0">
        <div className="input-group">
            <div className="input-group-prepend">
                <SpanSearch className="input-group-text" id="basic-addon1">
                    <FontAwesomeIcon icon={faSearch} className="text-tosca"/>
                </SpanSearch>
            </div>
            <InputSearch 
                ref={inputRef}
                value={ enteredFilter }
                onChange={event => onChangedFilter(event)}
                type="text" 
                className="form-control" 
                placeholder="Find Personnel" 
                aria-label="Personnel" 
                aria-describedby="basic-addon1"/>
        </div>
    </div>
  );
});

export default Search;