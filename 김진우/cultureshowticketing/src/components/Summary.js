import React, { useState } from "react";
import "./Summary.css";
import Modal from "./Modal";

const Summary = ({ contents, modalContent }) => {
  const {
    title,
    image,
    place,
    period,
    time,
    age,
    mainPrice,
    rPrice,
    sPrice,
    aPrice,
    bPrice,
  } = contents;

  const { modalTitle, modalTexts } = modalContent;

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="summaryWrapper">
      <h2 className="summaryTitle">{title}</h2>
      <img className="summaryImage" src={image} alt={title}></img>
      <table className="summaryTable">
        <tr>  
          <td>장소</td>
          <td className="button" colSpan="2" onClick={openModal}>
            {place} ▶
          </td>
        </tr>
        <tr>
          <td>공연기간</td>
          <td colSpan="2">{period}</td>
        </tr>
        <tr>
          <td>공연시간</td>
          <td colSpan="2">{time}</td>
        </tr>
        <tr>
          <td>관람연령</td>
          <td colSpan="2">{age}</td>
        </tr>
        <tr>
          <td className="priceLable" rowSpan="9">
            가격
          </td>
          <td className="mainPriceValue" colSpan="2">
            {mainPrice}
          </td>
        </tr>
        <tr>
          <td>R석</td>
          <td className="priceValue">{rPrice}</td>
        </tr>
        <tr>
          <td>S석</td>
          <td className="priceValue">{sPrice}</td>
        </tr>
        <tr>
          <td>A석</td>
          <td className="priceValue">{aPrice}</td>
        </tr>
        <tr>
          <td>B석</td>
          <td className="priceValue">{bPrice}</td>
        </tr>
      </table>
      <Modal open={modalOpen} close={closeModal} header={modalTitle}>
        {modalTexts.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </Modal>
    </div>
  );
};

export default Summary;
