import { useEffect } from 'react';

const useTitle = (title) => {
   useEffect(() => {
      document.title = `${title} | Babybo`;
   }, [title]);
};

export default useTitle;