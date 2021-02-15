import React from 'react';
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css'; // import 'rc-footer/asssets/index.less';



function Footer1() {
  return(
   
      <Footer
        columns={[
          {
            
            title: 'Clothes Store© 2020.',
            
            
            openExternal: true,
          },
        ]}
        bottom="Powered by Clothes"
        theme="dark"
        
        
      />
      
  )
}
export default Footer1;