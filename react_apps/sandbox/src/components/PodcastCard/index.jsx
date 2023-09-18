import React from 'react'

const PodcastCard = ({eachObject}) => {

    const handleTitleEdit = (newTitle, id) => {

        axios({
          method: "PUT",
          url: "/our_database_change_title",
          data: {
            newTitle, id
          }
        }).then((response) => {
          console.log("changed title in the db");
          setPodcasts({})
        })
    
      }
      const handleHostEdit = () => {
        axios({
          method: "PUT",
          url: "/our_database_change_title",
          data: {
            newTitle, id
          }
        }).then((response) => {
          console.log("changed title in the db");
          setPodcasts({})
        })
      }
      const handleDescEdit = () => {
        axios({
          method: "PUT",
          url: "/our_database_change_title",
          data: {
            newTitle, id
          }
        }).then((response) => {
          console.log("changed title in the db");
          setPodcasts({})
        })
      }
  return (
    <div key={eachObject.id}>
      <div onClick={handleTitleEdit}>{eachObject.title}</div>
      <div onClick={handleHostEdit}>{eachObject.host}</div>
      <div onClick={handleDescEdit}>{eachObject.description}</div>
      <br></br>
    </div>
  )
}

export default PodcastCard