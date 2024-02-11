import {categories} from '../categories'

const FilterComponent = ({setDateOrder, setCategory, setSearch, setLimit}) => {

    const handleSearch = (e) => {
        setSearch(e.target.value)
      }
      // console.log("Date Order", dateOrder)
      const handleDateOrder = (e) => {
        setDateOrder(e.target.value)
      }
      
      const handleCategory = (e) => {
        setCategory(e.target.value)
      }
      
      const handleLimit = (e) => {
        setLimit(e.target.value)
      }
  return (
    
    <div className=' sm:block md:flex items-center gap-5'>
    <div className="flex flex-3 flex-col gap-1  mb-5">
      <label htmlFor='' className=''>Search posts by type: </label>
      <input type='text' name="search" className='border border-gray-200 rounded-md py-2 px-3 focus:outline-none' placeholder='Type to search posts' onChange={handleSearch}/>
    </div>
    <div className="flex flex-3 flex-col gap-1  mb-5">
      <label htmlFor='' className=''>Select Date Order: </label>
      <select name= 'date_order' onChange={handleDateOrder} className='border border-gray-200 rounded-md py-2 px-3'>
        <option value='1'>Ascending</option>
        <option value='-1'>Descending</option>
      </select>
    </div>
    <div className="flex flex-3 flex-col gap-1  mb-5">
      <label htmlFor='' className=''>Select Posts by categories: </label>
      <select name= 'category' onChange={handleCategory} className='border border-gray-200 rounded-md py-2 px-3'>
      <option defaultValue=''>All</option>
        {
          categories.map((cat, index)=>(
            <option key={index} value={cat.slug}>{cat.name}</option>
          ))
        }
      </select>
    </div>
    <div className="flex flex-3 flex-col gap-1  mb-5">
      <label htmlFor='' className=''>Number of posts per page you want to show:  </label>
      <select name= 'limit' onChange={handleLimit} className='border border-gray-200 rounded-md py-2 px-3'>
        <option defaultValue='6'>6</option>
        <option value='9'>9</option>
        <option value='12'>12</option>
        <option value='15'>15</option>
        <option value='20'>20</option>
        <option value='50'>50</option>            
      </select>
    </div>
    
  </div>
  )
}

export default FilterComponent