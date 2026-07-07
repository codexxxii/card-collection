import { SearchIcon } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="w-full flex justify-end">
      <div className="h-10 border rounded-full w-100 px-2.5 flex justify-betwwwn items-center gap-2">
        <SearchIcon size={20} />
        <input type="text" placeholder="Search" className="grow outline-none" />
      </div>
    </div>
  );
}
