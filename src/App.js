import './App.css';
import Collectioncard from './components/Collectioncard';
import Header from './components/Header';
import{ useState , useEffect} from "react"
import axios from 'axios';


function App() {
const[punklistdata , setpunklistdata] = useState([])

useEffect(() => {
   
       const getmynft =async () => {
           const openseadata =await axios.get('https://testnets-api.opensea.io/assets?assset_contract_address=0x1B3910AD4F2d47BFC0a82951e89B55eE9FA58eC6&order_direction=asc')
           console.log(openseadata.data.assets)
           setpunklistdata(openseadata.data.assets)
       }

       return getmynft()
} ,[])


    return <div className = 'app' >
        <Header />
        <Collectioncard  id={0} name={'DHONI PUNK'} traits={[{'value': 7}]} image="https://nftlabs.mypinata.cloud/ipfs/bafybeib4b7oko4h4mq73ttgvjeobvk6qi5wxe7ciacsmnqubvolinx4ngu" />
    <punkList punklistdata={punklistdata} />
    </div>

}
export default App