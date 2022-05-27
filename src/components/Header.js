import { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import './Header.css';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import { useSelector, useDispatch } from 'react-redux';
import { REMOVE, SEARCH } from '../redux/actions/Action';


function Header() {
  const [totalAmount, setTotalAmount] = useState(0);
  const [inputData, setInputData] = useState('');

  const getData = useSelector((item) => item.cartReducer.cart);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const deleteHandler = (id) => {
    dispatch(REMOVE(id))
  }
  const totalAmountHandler = () => {
    let price = 0;
    getData.map((amount) => {
      price += amount.price * amount.qnty
    });
    setTotalAmount(price)
  }

  useEffect(() => {
    totalAmountHandler()
  }, [totalAmountHandler])

  const inputDataHandler = (e) => {
    setInputData(e.target.value)
  }

  const searcghandler = (e) => {
    e.preventDefault();
    dispatch(SEARCH(inputData))
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="header">
          <h2 className="navbar-brand">GooD FooD GooD MooD</h2>
          <NavLink className="navbar-brand home" to="/">Home</NavLink>
        </div>
        <div className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search Food..."
            aria-label="Search" value={inputData} onChange={inputDataHandler} />
          <button className="btn btn-outline-success" type="submit" onClick={searcghandler}>Search</button>
        </div>
        <div className='card-wrapper'>
          <Badge badgeContent={getData.length} color="primary"
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <span><i className="fa fa-shopping-cart cart" aria-hidden="true"></i></span>
          </Badge>
        </div>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {
            getData.length !== 0 ?
              <div className='card_details' style={{ width: '24rem', padding: 10 }}>
                <table className='table'>
                  <thead>
                    <tr>
                      <th>Photo</th>
                      <th>Restaurant Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      getData && getData.map((addCart) => (
                        <>
                          <tr>
                            <td>
                              <NavLink to={`/${addCart.id}`} onClick={handleClose}>
                                <img src={addCart.imgdata} style={{ width: "5rem", height: "5rem", marginTop: '20px' }} alt='' />
                              </NavLink>

                            </td>
                            <td>
                              <p>{addCart.rname}</p>
                              <p>Price : $ {addCart.price}</p>
                              <p>Quantity : {addCart.qnty}</p>
                              <p style={{ color: 'red', fontSize: 20, cursor: 'pointer' }}>
                                <i className='fas fa-trash' onClick={() => deleteHandler(addCart.id)}></i>
                              </p>
                            </td>
                          </tr>
                        </>
                      ))
                    }
                    <p className='text-center'>Total Amount : $ {totalAmount}</p>
                  </tbody>
                </table>
              </div> :
              <div className='card_details'>
                <i className='fas fa-close smallclose' onClick={handleClose} ></i>
                <p style={{ fontSize: '20px', padding: '20px 12px 5px' }}>Your Card is empty</p>
                <img src={require('../Img/cart.gif')} alt='' />
              </div>
          }
        </Menu>
      </nav>
    </div>
  )
}

export default Header;