import React from "react";
import ServiceCard from "./ServiceCard/ServiceCard";
import usePostsData  from '../../hooks/usePostsData.js'
import {ReactComponent as Strategy} from '../../assets/Strategy.svg'
import {ReactComponent as Analysis} from '../../assets/Analysis.svg'
import {ReactComponent as Socials} from '../../assets/Socials.svg'
import {ReactComponent as Education} from '../../assets/Education.svg'
import {ReactComponent as Content} from '../../assets/Content.svg'
import {ReactComponent as UX} from '../../assets/UX.svg'
import {ReactComponent as Marketing} from '../../assets/Marketing.svg'
import {ReactComponent as Product} from '../../assets/Product.svg'
import './styles.css'


export default function ServiceList () {
    const services = [
        {
          id: 1,
          name: 'Стратегия',
          Image: Strategy
        }, 
        {
          id: 2,
          name: 'Анализ',
          Image: Analysis,
        }, 
        {
          id: 3,
          name: 'Соц сети',
          Image: Socials,
        }, 
        {
          id: 4,
          name: 'Развитие',
          Image: Education,
        }, 
        {
          id: 5,
          name: 'Контент',
          Image: Content,
        }, 
        {
          id: 6,
          name: 'Дизайн UX',
          Image: UX,
        }, 
        {
          id: 7,
          name: 'Таргетированная реклама',
          Image: Marketing,
        },
        {
          id: 8,
          name: 'Продукт',
          Image: Product,
        }
      ]
    const [data] = usePostsData()
    const newData = data.filter((el) => el.id <= 8)

    function merge() {
        var hash = {};
        for (var l = 0; l < arguments.length; l++) {
            var arr = arguments[l];
            if (!arr.length) continue;
            for (var i = 0; i < arr.length; i++) {
                var el = arr[i];
                if (!('id' in el)) continue;
                var id = el.id;
                if (!hash[id]) hash[id] = {};
                for (var key in el) {
                    if (el.hasOwnProperty(key))
                        hash[id][key] = el[key];
                }
            }
        }
        var result = [];
        for (var id in hash) {
            if (hash.hasOwnProperty(id)) result.push(hash[id]);
        }
        return result;
    }
    
    var result = merge(services, newData);
    console.log(result)

    return (
        <>
            <ul className="cardList">
                {result.map((el) => (
                    <ServiceCard key={el.id} id={el.id} title={el.title} body={el.body} name={el.name} Image={el.Image}></ServiceCard>
                ))}   
            </ul>
     </>
    )
}