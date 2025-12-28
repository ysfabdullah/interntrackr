import { Link } from 'react-router';
import { PlusIcon } from 'lucide-react';


const Navbar = () => {
  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="mx-auto max-w-7xl p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-base-content font-mono tracking-tighter">
            InternTrackr</h1>

            <div className="flex items-center gap-4">
            <Link to="/create" className="btn bg-primary hover:bg-black text-white">
            
            <PlusIcon className="size-5"/>
            <span>New Application</span>
            </Link>
            
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
