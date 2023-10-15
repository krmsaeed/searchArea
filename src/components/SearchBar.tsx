import { useState, useEffect, FC } from "react"
interface SearchBarProps {
  onSearch: (query: string) => void
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("")
  const [isShow, setIsShow] = useState(false)
  const debounce = (
    func: (input: string) => void,
    delay: number,
  ): ((input: string) => void) => {
    let timer: NodeJS.Timeout | null = null
    return function (arg: string): void {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        func(arg)
      }, delay)
    }
  }
  const handleSearch = debounce((value) => {
    onSearch(value)
  }, 3000)

  useEffect(() => {
    handleSearch(searchText)
  }, [searchText])

  return (
    <div className="px-2 pt-2">
      {!isShow && (
        <div
          className="
        search-lable 
        flex w-full items-center 
        rounded-md h-8 
        bg-labelBar 
        cursor-pointer"
          onClick={() => {
            setSearchText("")
            setIsShow(true)
          }}
        >
          <i className="mdi mdi-magnify px-1 mdi-18px text-icon before:pt-1"></i>
          <span className="text-normal text-xs">
            جستجو در
            <span className="text-base text-xs pl-1"> شهر تهران</span>
          </span>
        </div>
      )}
      {isShow && (
        <div className="relative bg-labelBar rounded-l-md rounded-r-md first-line: h-8 flex">
          <i
            className="mdi mdi-arrow-right px-1 mdi-18px text-icon before:pt-1"
            onClick={() => {
              setIsShow(false)
              setSearchText("")
            }}
          ></i>
          <input
            autoFocus
            className="w-full rounded-l-md bg-labelBar outline-none"
            type="text"
            value={searchText}
            placeholder={"جستجو"}
            onChange={(e) => setSearchText(e.target.value)}
          />
          {searchText && (
            <i
              className="mdi 
            mdi-close-circle-outline
           absolute left-1 
           text-icon top-2 
           px-1 
           cursor-pointer"
              onClick={() => {
                setSearchText("")
              }}
            ></i>
          )}
        </div>
      )}
      <div className="after:absolute after:border-b-4 after:w-full after:left-0 my-2"></div>
    </div>
  )
}

export default SearchBar
