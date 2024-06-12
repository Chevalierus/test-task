import React from "react";
import './styles.css'
import ServiceList from "../ServiceList/ServiceList";

export default function Service () {

    return (
    <div className='service'>
    <div className='serviceSection'>
      <h2 className='serviceHeader'>Сервис</h2>
      <p className='serviceBigText'>От идеи до незабываемого и
      измеримого результата.</p>
      <span className='brick'></span>
      <p className='sericeSmallText'>Интеграция безупречного производства, передовых технологий и тщательного измерения производительности</p>
    </div>
    <ServiceList/>
  </div>
)}