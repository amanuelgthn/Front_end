import React from 'react';

interface ViewerProps {
  catalog: string;
}

const Viewer: React.FC<ViewerProps> = ({ catalog }) => {
  return (
    <div>
      <img src={catalog} alt="Catalog Item" style={{ width: '100%', height: 'auto' }} />
    </div>
  );
};

export default Viewer;
