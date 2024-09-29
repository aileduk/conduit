import { FC, useEffect, useState } from "react"
import ReactPaginate from "react-paginate"

import { useAppDispatch } from "../../hooks/reduxHooks"
import { setOffset } from "../../store/features/articlesSlice/articlesSlice"

interface PaginateProps {
  articlesCount: number
  articlesPerPage: number
}
const Paginate: FC<PaginateProps> = ({ articlesCount, articlesPerPage }) => {
  const dispatch = useAppDispatch()

  const [pageCount, setPageCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)

  useEffect(() => {
    setPageCount(Math.ceil(articlesCount / articlesPerPage))
  }, [articlesCount, articlesPerPage])

  useEffect(() => {
    const newOffset = currentPage * articlesPerPage
    dispatch(setOffset(newOffset))
  }, [currentPage, dispatch, articlesPerPage])

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected)
  }

  return (
    <ReactPaginate
      nextLabel={null}
      onPageChange={handlePageClick}
      pageRangeDisplayed={pageCount}
      marginPagesDisplayed={pageCount}
      pageCount={pageCount}
      previousLabel={null}
      breakLabel={null}
      renderOnZeroPageCount={null}
      containerClassName='flex flex-wrap py-5 gap-y-1'
      pageClassName='flex'
      pageLinkClassName='p-3 text-green-500 text-sm border ml border-gray-300 hover:bg-green-200 -ml-px'
      activeLinkClassName='bg-green-500 !text-white hover:bg-green-500'
    />
  )
}

export default Paginate
