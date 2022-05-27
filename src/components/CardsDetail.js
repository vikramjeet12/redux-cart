import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './CardsDetail.css';
import { useEffect, useState } from 'react';
import { REMOVE, INCREMENT, DECREMENT } from '../redux/actions/Action';

function CardsDetail() {
  const [compairedData, setCompairedData] = useState();
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useNavigate();

  const getData = useSelector((item) => item.cartReducer.cart);

  const getSelectedData = () => {
    let compairedItem = getData.includes((item) => {
      return item.id == id
    })
    setCompairedData(compairedItem);
  }

  useEffect(() => {
    getSelectedData()
  }, [id])

  const IncreaseHandler = (data) => {
    dispatch(INCREMENT(data))
  }

  const deleteHandler = (id) => {
    dispatch(REMOVE(id))
    history('/')
  }

  const DecreaseHandler = (item) => {
    dispatch(DECREMENT(item))
  }
  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Item detail page</h2>
        <section className="container mt-3">
          <div className="iteamsdetails">
            {
              compairedData && compairedData.map((item) => (
                <>
                  <div className="items_img">
                    <img src={item.imgdata} alt="" />
                  </div>
                  <div className='details'>
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>
                            <p><strong>Restaurent</strong>: {item.rname}</p>
                            <p><strong>Price</strong>: {item.price}</p>
                            <p><strong>Dishes</strong>: {item.address}</p>
                            <p><strong>Total Amount</strong>: $ {item.price * item.qnty}</p>
                            <div className='mt-5 d-flex justify-content-between align-item-center'
                              style={{ width: 100, cursor: 'pointer', background: '#ddd', color: '#111' }}>
                              <span style={{ fontSize: 25 }} onClick={() => DecreaseHandler(item)}>-</span>
                              <span style={{ fontSize: 22 }}>{item.qnty}</span>
                              <span style={{ fontSize: 25 }} onClick={() => IncreaseHandler(item)}>+</span>
                            </div>

                          </td>
                          <td>
                            <p><strong>Rating :</strong> <span
                              style={{ background: "green", color: "#fff", padding: "2px 5px", borderRadius: '5px' }}>
                              {item.rating} ★</span></p>
                            <p><strong>Order Review</strong> <span>{item.somedata}</span></p>
                            <p><strong>Remove :</strong><span><i className='fas fa-trash'
                              style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => deleteHandler(item.id)}>

                            </i></span></p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </>
              ))
            }
          </div>
        </section>
      </div>
    </>
  )
}
export default CardsDetail;