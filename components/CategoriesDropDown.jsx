"use client"
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/navigation';

export default function CategoriesDropDown() {
    const router=useRouter()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (link) => {
    setAnchorEl(null);
    router.push(link)
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className='text-white text-[17px] sm:text-xl font-semibold'
      >
        Categories
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
      
        <MenuItem onClick={()=>handleClose('/categories/business')}>Business</MenuItem>
        <MenuItem onClick={()=>handleClose('/categories/entertainment')}>Entertainment</MenuItem>
        <MenuItem onClick={()=>handleClose('/categories/general')}>General</MenuItem>
        <MenuItem onClick={()=>handleClose('/categories/health')}>Health</MenuItem>
        <MenuItem onClick={()=>handleClose('/categories/science')}>Science</MenuItem>
        <MenuItem onClick={()=>handleClose('/categories/sports')}>Sports</MenuItem>
        <MenuItem onClick={()=>handleClose('/categories/technology')}>Technology</MenuItem>

      </Menu>
    </div>
  );
}