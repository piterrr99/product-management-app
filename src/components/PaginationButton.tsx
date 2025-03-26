'use client'

import Link from "next/link";

export const PaginationButton = ({page, currentPage}: {page: number, currentPage: string}) => {
	const selected = page === Number(currentPage);
  return (
		<Link className={`${selected ? 'text-white' : ''}`} href={`/reviewed-products/page/${page}`}>
			<button className={`${selected ? 'hover:bg-gray-900 bg-black ' : 'hover:bg-slate-100 text-inherit'} mb-4 border-gray-300 border-[1px] rounded-md h-10 w-10 ml-5 `}>
				{page}
			</button>
		</Link>
  )
}
