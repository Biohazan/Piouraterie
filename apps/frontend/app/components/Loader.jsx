'use client'
function Loader() {
  return (
    <div className="absolute top-0 left-0 z-50 w-full h-full flex justify-center items-center ">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Loader
