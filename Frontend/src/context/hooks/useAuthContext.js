
import { useContext } from 'react';
import { AuthContext } from '../AuthContext';

function useAuthContext () {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('useAuthContext must be used within an AuthContextProvider');
  }

  return authContext;
};

export default useAuthContext;
