const DarkColorDisplay: React.FC = () => {
  const colors = {
    '--background': '224 71.4% 4.1%',
    '--foreground': '210 20% 98%',
    '--card': '224 71.4% 4.1%',
    '--card-foreground': '210 20% 98%',
    '--popover': '224 71.4% 4.1%',
    '--popover-foreground': '210 20% 98%',
    '--primary': '263.4 70% 50.4%',
    '--primary-foreground': '210 20% 98%',
    '--secondary': '215 27.9% 16.9%',
    '--secondary-foreground': '210 20% 98%',
    '--muted': '215 27.9% 16.9%',
    '--muted-foreground': '217.9 10.6% 64.9%',
    '--accent': '215 27.9% 16.9%',
    '--accent-foreground': '210 20% 98%',
    '--destructive': '0 62.8% 30.6%',
    '--destructive-foreground': '210 20% 98%',
    '--border': '215 27.9% 16.9%',
    '--input': '215 27.9% 16.9%',
    '--ring': '263.4 70% 50.4%',
    '--chart-1': '220 70% 50%',
    '--chart-2': '160 60% 45%',
    '--chart-3': '30 80% 55%',
    '--chart-4': '280 65% 60%',
    '--chart-5': '340 75% 55%',
  };

  return (
    <div className='p-4'>
      <h1 className='mb-4 text-xl font-bold'>Color Display</h1>
      <div className='grid grid-cols-2 gap-4'>
        {Object.entries(colors).map(([key, value]) => (
          <div
            key={key}
            style={{ backgroundColor: `hsl(${value})` }}
            className='rounded-md p-4'
          >
            <div className='text-center text-white'>{key}</div>
            <div className='text-center text-white'>{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DarkColorDisplay;
