import { Search } from '@mui/icons-material';
import { IconButton, Paper } from '@mui/material';

const SearchBar = () => {
  return (
    <Paper
      component='form'
      onSubmit={() => {}}
      sx={{
        pl: 2,
        mr: { sm: 5 },
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        boxShadow: 'none',
      }}
    >
      <input
        className='search-bar'
        placeholder='Search...'
        value=''
        onChange={() => {}}
      />
      <IconButton
        type='submit'
        sx={{
          p: '10px',
          color: 'red',
        }}
      >
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
