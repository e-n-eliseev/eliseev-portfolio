import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import { useState } from 'react';

const Header = () => {

    const [value, setValue] = useState("one");

    const theme = useTheme();
    const { flex, header } = theme;

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ ...flex, ...header }}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="primary"
                indicatorColor="secondary"
            >
                <Tab value="one" label="Обо мне" icon={<AccountBoxIcon />} iconPosition="bottom" />
                <Tab value="two" label="Скилы" icon={<FitnessCenterIcon />} iconPosition="bottom" />
                <Tab value="three" label="Работы" icon={<AutoStoriesIcon />} iconPosition="bottom" />
                <Tab value="four" label="Сертификаты" icon={<AssignmentTurnedInIcon />} iconPosition="bottom" />
                <Tab value="five" label="Контакты" icon={<ConnectWithoutContactIcon />} iconPosition="bottom" />
            </Tabs>
        </Box >
    );
}

export default Header;