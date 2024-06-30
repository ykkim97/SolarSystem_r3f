// Sidebar.js
import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/system';

const CustomDrawer = styled(Drawer)({
    '& .MuiDrawer-paper': {
        backgroundColor: 'transparent',
        backdropFilter: 'blur(10px)', // 배경을 약간 흐리게 할 수 있음
    },
});

const Sidebar = ({ items, onMenuItemClick }) => {
    return (
        <CustomDrawer variant="permanent" anchor="left" >
            <List>
                {items.map((item, index) => (
                    <ListItem 
                        button 
                        key={item} 
                        onClick={() => onMenuItemClick(index + 1)}
                        sx={{ color: '#1976D2', fontWeight: '600' }}
                    >
                        <ListItemText primary={item} />
                    </ListItem>
                ))}
            </List>
        </CustomDrawer>
    );
};

export default Sidebar;
