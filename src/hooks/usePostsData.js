import {useState, useEffect} from "react";

export default function usePostsData () {
      const [data, setData] = useState([]);
      useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => {
          setData(json)
        }
      );
      }, [])
      return [data]
}