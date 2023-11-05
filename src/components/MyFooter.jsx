

function MyFooter() {
  return (
    <>
      
        <div className="d-flex justify-content-center py-4 border-top text-d mt-4" style={{ backgroundColor: '#faea01' }} >
          &copy; {new Date().getDate()}/{new Date().getMonth()+1}/{new Date().getFullYear()} Earth Weather
          
        </div>
       
    </>
  )
}

export default MyFooter