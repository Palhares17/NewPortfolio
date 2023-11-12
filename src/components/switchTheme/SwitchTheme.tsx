import { motion } from 'framer-motion';
import { SwitchThemeContainer } from './SwitchTheme.styled';
import { BiSun } from 'react-icons/bi';

const SwitchTheme = ({ change }: any) => {
  return (
    <SwitchThemeContainer onClick={change}>
      <motion.div className='anime'>
        <BiSun />
      </motion.div>

    </SwitchThemeContainer>
  );
};

export default SwitchTheme;