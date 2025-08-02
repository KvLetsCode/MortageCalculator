/* eslint-disable react/prop-types */


function Termcomp({logo ,name}) {
  return (
      <>
          <input
        type="number"
        name={name}
            placeholder="25"
          className="w-full px-3 py-2 text-gray-800 text-sm outline-none border-none  "
          required
          />
          <span className="bg-blue-100 text-blue-900 px-3 py-2 text-sm font-medium group-focus-within:bg-lime-200 transition-colors duration-300">
            {logo}
          </span>
      </>
  )
}

export default Termcomp