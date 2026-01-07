import { Sidebar, HomeIcon, BottomIcons, SIdeIcons, ExitIcon } from './style';

const SideBar = () => {
  return (
    <div style={{ display: 'block' }}>
      <Sidebar>
        <div>
          <div>
            <HomeIcon>H</HomeIcon>
          </div>
          <SIdeIcons>
            <BottomIcons to={'dashboard'}>D</BottomIcons>
            <BottomIcons to={'investments'}>I</BottomIcons>
            <BottomIcons to={'portfolio'}>P</BottomIcons>
            <BottomIcons to={'Planning'}>P</BottomIcons>
            <BottomIcons to={'settings'}>S</BottomIcons>
          </SIdeIcons>
        </div>
        <div>
          <ExitIcon>E</ExitIcon>
        </div>
      </Sidebar>
    </div>
  );
};

export default SideBar;
