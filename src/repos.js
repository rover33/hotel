import {  useContext } from "react";
import { HotelContext } from "./Context/context";



let Repo = () => {
  const [items, setItems] = useContext(HotelContext)

    let renderRepos = () => {
      return(
          console.log("hi", items)
        // items.map(repo => (
        //     <tr key={repo.id} className="repoList" >
        //         <td>{repo.name}</td>
        //         <td>{repo.language}</td>
        //         <td>{repo.stargazers_count}</td>
        //         <td>{repo.score}</td>
        //     </tr>
        // ))
      )
    }


    return (
      <div className="repo-div">
        <table className="repo">
          <tbody>
            <tr className="repo-header">
                <th>Name</th>
                <th>Language</th>
                <th>Stars</th>
                <th>Score</th>
            </tr>
            {renderRepos()}
            </tbody>
        </table>
      </div>
    )
  };


export default Repo;