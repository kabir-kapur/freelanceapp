import styles from './SearchBar.module.css';
import React from 'react';
import TextField from '@mui/material/TextField';

const SearchBar = () => {
    return (
        <div className="Container" class={styles.Container}>
            <div className='SearchBar' fullWidth>
                <div className="search">
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        fullWidth
                        label="find freelancers here or anywhere"
                    />
                </div>
            </div>
        </div>
    );
}
export default SearchBar;