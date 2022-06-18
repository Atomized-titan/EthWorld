import Jazzicon, { jsNumberForAddress } from 'react-jazzicon'
import { payWithMetamask } from '../../components/Transaction'

const user = () => {
  return (
    <div className="text-white">
      <p>Do the transaction here</p>
      <div></div>
      <button
        onClick={() => {
          payWithMetamask({
            sender: '0xD8AC3022ceD73A02A6BD2ee36fa6CAb126A75182',
            receiver: '0x11D9A55981fE59D68B9fE5E2453BF7bfE0476Df7',
            strEther: '0.1',
          })
        }}
        className="px-4 py-2 rounded-md bg-blue-700 cursor-pointer hover:bg-purple-500 text-xl font-semibold duration-100 text-white"
      >
        do transaction
      </button>
      <Jazzicon
        diameter={100}
        seed={jsNumberForAddress('0x1111111111111111111111111111111111111111')}
      />
    </div>
  )
}

export default user
