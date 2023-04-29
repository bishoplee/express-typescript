import * as React from "react";

const ContestPreview: React.FC<{
  contest: object;
  onClick: any;
}> = ({ contest, onClick }) => {
  const handleClick = (event) => {
    event.preventDefault();

    //console.log(contest)

    // Navigate to a new view
    onClick(contest.id);
  }

  return (
    <div id={contest.id} className="contest-preview" onClick={handleClick}>
      <div className="category">
        {contest.categoryName}
      </div>
      <div className="contest">
        {contest.contestName}
      </div>
    </div>
  )
}

export default ContestPreview;