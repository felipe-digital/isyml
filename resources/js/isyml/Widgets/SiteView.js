import React, {useState, useEffect} from "react";
import {ajaxGetViews} from "../../functions/General";

const SiteView = ({pathName}) => {
    const [views, setViews] = useState(0);

    useEffect(() => {

        ajaxGetViews(pathName).then(r => {
            setViews(r.views);
        });

    },[]);

    return(
        <div className="views-plugin">
            <p><i className="whatsapp-icon fas fa-eye me-2"></i>{views + ' visitors'}</p>
        </div>
    )
};

export default SiteView;
