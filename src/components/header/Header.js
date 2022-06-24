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
import ScrollIntoView from 'react-scroll-into-view'

const Header = () => {

    const [value, setValue] = useState("one");

    const { flex, header } = useTheme();

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
                <ScrollIntoView value="one" selector=".about">
                    <Tab value="one" label="Обо мне" icon={<AccountBoxIcon />} iconPosition="bottom" />
                </ScrollIntoView>
                <ScrollIntoView value="two" selector=".stack">
                    <Tab value="two" label="Скилы" icon={<FitnessCenterIcon />} iconPosition="bottom" />
                </ScrollIntoView>
                <ScrollIntoView value="three" selector=".projects">
                    <Tab value="three" label="Работы" icon={<AutoStoriesIcon />} iconPosition="bottom" />
                </ScrollIntoView>
                <ScrollIntoView value="four" selector=".certificates">
                    <Tab value="four" label="Сертификаты" icon={<AssignmentTurnedInIcon />} iconPosition="bottom" />
                </ScrollIntoView>
                <ScrollIntoView value="five" selector=".contacts">
                    <Tab value="five" label="Контакты" icon={<ConnectWithoutContactIcon />} iconPosition="bottom" />
                </ScrollIntoView>
            </Tabs>
        </Box >
    );
}

export default Header;