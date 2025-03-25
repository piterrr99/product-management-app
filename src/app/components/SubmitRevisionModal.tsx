export const SubmitRevisionModal = () => {
  
	return (
        <div className="flex justify-center items-center fixed top-0 left-0 w-screen h-screen bg-slate-600 bg-opacity-20 z-10">
					<div className="bg-white opacity-100 max-w-[350px] sm:max-w-[1000000px] sm:w-[500px] z-20 rounded-lg p-6 relative">
						<h1 className="font-semibold text-xl mb-3">Aplicar Revisión</h1>
						<div className="mb-6 text-sm text-gray-500">
							Está a punto de marcar 10 productos como revisados. Por favor, asegúrese de que toda la información es correcta
						</div>
						<div className="flex justify-end space-x-3">
							<button className=" hover:bg-gray-100 font-bold text-sm w-20 py-3 border-[1px] border-gray-300 rounded-lg">Cancelar</button>
							<button className="bg-black hover:bg-gray-900 text-sm font-bold w-20 py-3 rounded-lg text-white">Revisar</button>
						</div>
					</div>
				</div>
  )
}
