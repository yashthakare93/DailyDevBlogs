import {FaArrowRight} from 'react-icons/fa6'
import {Link} from 'react-router-dom'

const Banner = () => {
  return (
    <div className="px-4 py-32 bg-black mx-auto">
        <div className="text-white text-center">
        <h1 className="text-5xl leading-snug font-bold mb-5">Welcome to Our Blog</h1>
      
        <div>
            <Link to="/" className=" font-medium hover:text-orange-500 inline-flex items-center py-1">Learn more<FaArrowRight className="mt-1 ml-2"/></Link>
        </div>
        </div>
    </div>
  )
}

export default Banner
