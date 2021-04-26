import { useMediaQuery } from 'react-responsive';

export const useIsMobile = () => {
  const isMobile = useMediaQuery({
    maxDeviceWidth: '576px',
  });

  return isMobile;
};
