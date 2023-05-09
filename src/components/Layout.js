import { Sidebar, Menu, MenuItem} from 'react-pro-sidebar';

export default function Layout() {

  return (
    <div style={{ display: 'flex', height: '100vh',color:"black",position:"fixed",backgroundColor:"#ac8fe4c7"}}>
      <Sidebar >
        <Menu style={{marginTop:"150px"}}>
          <MenuItem>What is AI ?</MenuItem>
          <MenuItem>Application of AI</MenuItem>
          <MenuItem>AI a growing</MenuItem>
          <MenuItem>AI a threat</MenuItem>
          <MenuItem>Scope of AI</MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}