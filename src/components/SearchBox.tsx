type SearchBoxProps = {
    setSearch:(search:string)=>void
}
export default function SearchBox(searchBoxProps:SearchBoxProps){
    const setSearch=searchBoxProps.setSearch;
    return <input type="text" 
                className="border-0 p-4 bg-gray-800 text-white " 
                placeholder="Enter the name of the movie you're looking for..."
                onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setSearch(e.target.value)}
            />
}