import { use } from "react";
import JobCard from "../Pages/Share/JobCard";


const HotJob = ({jobspromise}) => {

    const jobs = use(jobspromise)
    
    return (
        <div>
           <div>
             {
                jobs.map(job => <JobCard key={job._id} job={job} ></JobCard>)
            }
          </div>

        </div>
    );
};

export default HotJob;