import React , {useEffect , useState} from 'react'
import axios from 'axios'
import { GridComponent , ColumnsDirective , ColumnDirective , Page , Selection , Inject , Edit , Toolbar , Sort , Filter } from '@syncfusion/ej2-react-grids'
import { customersData , customersGrid  } from '../data/dummy'
import { Header } from '../components'

const Customers = () => {
  const [custommers, setCustommers] = useState()

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/test")
    .then((response) => {
      console.log(response.data)
      setCustommers(response.data)
    })
    .catch((err) => console.log(err));
  } , [])

  const deleteCustommers = () => {
    var select = document.getElementById('checkbox-grid-column')
    var value = select.options[select.selectedIndex].value
    console.log(value)
  }

  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Custommers" />
      <button type="button" onClick={deleteCustommers}>Delete Test</button>
      <GridComponent dataSource={custommers} toolbar={['Delete']} width='auto' editSettings={{ allowDeleting: true , allowEditing: true }} allowPaging allowSorting>
        <ColumnsDirective>
          {customersGrid.map((item ,index) => (
            <ColumnDirective key={index} {... item} />
          ))}
        </ColumnsDirective>
        <Inject services={[ Page ,  Toolbar , Selection , Edit , Sort , Filter]}/>
      </GridComponent>
    </div>
  )
}

export default Customers