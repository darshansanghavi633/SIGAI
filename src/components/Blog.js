import React from 'react';
import { ProSidebarProvider } from 'react-pro-sidebar';
import Content from './Content';
import Layout from './Layout';

export default function Blog() {
  return (
    <ProSidebarProvider>
      <div className="container-fluid" style={{marginTop:"40px"}}>
  <div className="row">
    <div className="col-md-3 col-xl-2 bg-light fixed-top" style={{height: "100vh",zIndex:1}}>
    <Layout/>
    </div>
    <div className="col-md-9 col-xl-10 offset-md-3 offset-xl-2" style={{height: "100vh"}}>
    <Content />
    </div>
  </div>
</div>

  </ProSidebarProvider>
  );
}
