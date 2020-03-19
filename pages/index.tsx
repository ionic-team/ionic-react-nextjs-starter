import React, { useEffect, useContext } from 'react';
import { NavContext } from '@ionic/react';


const Index: React.FC = () => {
  const context = useContext(NavContext);
  useEffect(() => {
    if (context.currentPath === '/') {
      context.navigate('/tabs/tab1', 'none', 'replace', { as: '/tabs/tab1' });
    }
  }, []);

  return null;
};

export default Index;