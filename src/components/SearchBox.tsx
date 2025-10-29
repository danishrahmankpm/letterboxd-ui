type SearchBoxProps = {
    setSearch:(search:string)=>void
}
export default function SearchBox(searchBoxProps:SearchBoxProps){
    const setSearch=searchBoxProps.setSearch;
    return <input type="text" 
                className=" mt-25 mb-25 w-[40%] gap-4 p-4 bg-[#941b0c]  text-white rounded-lg transition-shadow duration-300 " 
                placeholder="Enter the name of the movie you're looking for..."
                onChange={(e)=>setSearch(e.target.value)}
            />
}