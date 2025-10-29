type SearchBoxProps = {
    setSearch:(search:string)=>void
}
export default function SearchBox(searchBoxProps:SearchBoxProps){
    const setSearch=searchBoxProps.setSearch;
    return <input type="text" 
                className="flex flex-row justify-start items-center mt-12 mb-10 w-[40%] gap-4 p-4 bg-[white]  text-black rounded-lg transition-shadow duration-300 " 
                placeholder="Enter the name of the movie you're looking for..."
                onChange={(e)=>setSearch(e.target.value)}
            />
}