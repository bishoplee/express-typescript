import { useState } from 'react';

import ContestList from './contest-list';
import Contest from './contest';

// page: contestList, contest

const App = ({ initialData }) => {
  const [page, setPage] = useState<"contestList" | "contest">("contestList");
  const [currentContestID, setCurrentContestID] = useState<string | undefined>();

  const navigateToContest = (contestId) => {
    setPage("contest");
    setCurrentContestID(contestId);
  }

  const pageContent = () => {
    switch (page) {
      case "contestList":
        return (
          <ContestList
            initialContests={initialData.contests}
            onContestClick={navigateToContest}
          />
        )
      case "contest":
        return (
          <Contest id={currentContestID} />
        )
    }
  }
  
  return (
    <div className="container flex">
      {pageContent()}
    </div>
  )
}

export default App