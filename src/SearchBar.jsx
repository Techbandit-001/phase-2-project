// Search
import { Search } from "lucide-react"; //icon for search installed via npm install lucide-react library

// Define SearchBar component and it receives 2 props for current search text and a functhion to update the text
export function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="flex items-center gap-2 border rounded-3xl px-2 py-1 bg-white shadow cursor-pointer ">
      {/* imported search Icon from lucide-react */}
      <Search className="text-gray-700"/>
      {/* Input field for searching */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} //Upon typing, the setTerm is updated using setSearchTerm
        placeholder="Search Recipes:"
      />
    </div>
  );
}
