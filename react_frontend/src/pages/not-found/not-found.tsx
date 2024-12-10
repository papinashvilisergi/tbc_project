import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className='flex min-h-screen items-center px-4 py-12 sm:px-6 md:px-8 lg:px-12 xl:px-16'>
      <div className='w-full space-y-6 text-center text-foreground'>
        <div className='space-y-3'>
          <h1 className='animate-bounce text-5xl font-bold tracking-tighter text-accent-foreground sm:text-5xl'>
            404
          </h1>
          <p>Looks like you've ventured into the unknown digital realm.</p>
        </div>
        <Link to='/' className='inline-block'>
          <Button>Return to homepage</Button>
        </Link>
      </div>
    </div>
  );
}
