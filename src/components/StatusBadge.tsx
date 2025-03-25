
export const StatusBadge = (
  {
    absolute,
    status,
  }: {
    absolute?: boolean,
    status: 'rejected' | 'approved',
  }
) => {
  return (
    <div 
      className={
        `${absolute ? 'absolute' : '' } top-4 right-2 z-20
        ${status === 'approved' ? 'bg-green-500' : 'bg-red-500'} px-3 py-0.5 rounded-xl text-white 
        font-semibold text-xs w-auto`
      }
    >
      {status === 'approved' ? 'Aprobado' : 'Rechazado'}
    </div>
  )
}
