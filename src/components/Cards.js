import React, { useEffect, useState } from 'react';
import CardsData from './CardsData';
import './Cards.css';
import { useSelector, useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/Action'
import { Pagination } from 'antd';

function Cards() {
  const [data, setData] = useState(CardsData);
  const [filteredData, setFilteredData] = useState();
  const [total, setTotal] = useState(CardsData.length);
  const [page, setPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(9);

  const getData = useSelector((item) => item.cartReducer.searchUser);
  const dispatch = useDispatch();

  const indexOfLastPage = page * postPerPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;
  const currentPosts = data.slice(indexOfFirstPage, indexOfLastPage);

  const AddToCartHandler = (data) => {
    dispatch(ADD(data))
  }
  useEffect(() => {
    // if (getData.length == 0) {
    //   alert("please enter data...")
    // }
    if (getData.length > 0) {
      const filtered = currentPosts.filter((item) => item.rname === getData)
      setFilteredData(filtered)
    }
  }, [getData])

  const onShowSizeChange = (current, pageSize) => {
    setPostPerPage(pageSize)
  }

  const itemRender = (current, type, originalElement) => {
    if (type === 'prev') {
      return <a>Previous</a>
    }
    if (type === 'next') {
      return <a>Next</a>
    }
    return originalElement;
  }

  return (
    <>
      <div className="container mt-3">
        <h2 className="text-center">Delicious Food</h2>

        <div className="row justify-content-center align-item-center">
          {
            filteredData ? filteredData && filteredData.map((item) => (
              <>
                <div style={{ width: '22rem', border: 'none' }} className=" card mx-2 mt-4 card_style" key={item.id}>
                  <img src={item.imgdata} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.rname}</h5>
                    <p className="card-text">Price : $ {item.price}</p>
                    <div className='button_div'>
                      <button className="btn btn-primary col-lg-12" onClick={() => AddToCartHandler(item)}>Add To Cart</button>
                    </div>
                  </div>
                </div>
              </>
            ))
              :
              currentPosts && currentPosts.map((item, id) => (
                <div style={{ width: '22rem', border: 'none' }} className=" card mx-2 mt-4 card_style" key={item.id}>
                  <img src={item.imgdata} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.rname}</h5>
                    <p className="card-text">Price : $ {item.price}</p>
                    <div className='button_div'>
                      <button className="btn btn-primary col-lg-12" onClick={() => AddToCartHandler(item)}>Add To Cart</button>
                    </div>
                  </div>
                </div>
              ))
          }
        </div>
        <div className='pagination-section'>
          <Pagination
            onChange={(value) => setPage(value)}
            pageSize={postPerPage}
            total={total}
            current={page}
            showSizeChanger
            showQuickJumper
            onShowSizeChange={onShowSizeChange}
            itemRender={itemRender}
          />
        </div>
      </div>
    </>
  )
}

export default Cards;