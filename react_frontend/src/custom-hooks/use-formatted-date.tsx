import { useState, useEffect } from 'react';

const useFormattedDate = (isoString: string) => {
  const [formattedDate, setFormattedDate] = useState<string | null>(null);

  useEffect(() => {
    const formatDate = (isoString: string) => {
      const date = new Date(isoString);
      const options: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      };
      return date.toLocaleDateString('en-GB', options);
    };

    if (isoString) {
      setFormattedDate(formatDate(isoString));
    }
  }, [isoString]);

  return formattedDate;
};

export default useFormattedDate;
