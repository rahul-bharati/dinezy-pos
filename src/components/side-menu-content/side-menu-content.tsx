import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import {
  ArticleRounded,
  GradingRounded,
  Inventory2Rounded,
  MenuBookRounded,
  TableRestaurantRounded,
} from '@mui/icons-material'
import { redirect } from 'next/navigation'
import { useState } from 'react'

const mainListItems = [
  { text: 'Billing', icon: <AssignmentRoundedIcon />, link: '/dashboard/billing' },
  { text: 'Analytics', icon: <AnalyticsRoundedIcon />, link: '/dashboard/analytics' },
  { text: 'Customers', icon: <PeopleRoundedIcon />, link: '/dashboard/customers' },
  { text: 'Menu', icon: <MenuBookRounded />, link: '/dashboard/menu' },
  { text: 'Inventory', icon: <Inventory2Rounded />, link: '/dashboard/inventory' },
  { text: 'KOT', icon: <ArticleRounded />, link: '/dashboard/kot' },
  { text: 'Orders', icon: <GradingRounded />, link: '/dashboard/orders' },
  { text: 'Tables', icon: <TableRestaurantRounded />, link: '/dashboard/tables' },
];

const secondaryListItems = [
  { text: 'Settings', icon: <SettingsRoundedIcon /> },
  { text: 'About', icon: <InfoRoundedIcon /> },
  { text: 'Feedback', icon: <HelpRoundedIcon /> },
];

export default function SideMenuContent() {
  const [active, setActive] = useState(0);
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton selected={index === active} onClick={() => {
              setActive(index)
              redirect(item.link)
            }}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List dense>
        {secondaryListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}