// DashboardEmbed.js
import React, { useEffect, useRef } from 'react';
// import {embedDashboard,QuickSightEmbedding} from 'amazon-quicksight-embedding-sdk';

const Dashboard = () => {
  const containerRef = useRef(null);

  // useEffect(() => {
    // if (embedUrl && containerRef.current) {
    //   embedDashboard({
    //     url: embedUrl,
    //     container: containerRef.current,
    //     height: '700px',
    //     width: '100%',
    //     scrolling: 'no',
    //     footerPaddingEnabled: true,
    //     resizeHeightOnSizeChangedEvent: true,
    //   });
    // }
  // }, [embedUrl]);

  // return <div ref={containerRef} />;

  return (
    <div>
      <iframe
        width="1380"
        height="720"
        src="https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/554739428118/dashboards/6c34d720-127c-41d8-8df1-63b9e0fc359f?directory_alias=AutoBIInnovators#p.AdvisorID=ADV-00001">
    </iframe>
    </div>
  )
};

export default Dashboard;