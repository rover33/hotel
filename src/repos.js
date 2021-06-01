import {  useContext } from "react";
import { HotelContext } from "./Context/context";
import "../src/repos.css"



let Repos = () => {
  const [repos, setRepos] = useContext(HotelContext)
  

    let renderRepos = () => {
      return(
        repos.map(repo => (
            <tr key={repo.id} className="listResults">
                <td>{repo.name}</td>
                <td>{repo.language}</td>
                <td>{repo.stargazers_count}</td>
            </tr>
        ))
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
            </tr>
            {renderRepos()}
            </tbody>
        </table>
      </div>
    )
  };


export default Repos;