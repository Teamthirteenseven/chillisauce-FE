import React from 'react';
import AdminMrItem from './AdminMrItem';
import AdminBoxItem from './AdminBoxItem';
import AdminMultiBoxItem from './AdminMultiBoxItem';

function AdminDropItem({
  space,
  spaceId,
  boardEl,
  mrList,
  boxList,
  multiBoxList,
}) {
  return (
    <>
      {space?.map(
        item =>
          item.mrList?.length > 0 &&
          item.mrList?.map(mr => (
            <AdminMrItem
              key={mr.mrId}
              mr={mr}
              mrList={mrList}
              boardEl={boardEl}
              spaceId={spaceId}
            />
          )),
      )}
      {space?.map(
        item =>
          item.boxList?.length > 0 &&
          item.boxList?.map(box => (
            <AdminBoxItem
              key={box.boxId}
              box={box}
              boxList={boxList}
              boardEl={boardEl}
              spaceId={spaceId}
            />
          )),
      )}
      {space?.map(
        item =>
          item.multiBoxList?.length > 0 &&
          item.multiBoxList?.map(multiBox => (
            <AdminMultiBoxItem
              key={multiBox.multiBoxId}
              multiBox={multiBox}
              multiBoxList={multiBoxList}
              boardEl={boardEl}
              spaceId={spaceId}
            />
          )),
      )}
    </>
  );
}

export default AdminDropItem;
