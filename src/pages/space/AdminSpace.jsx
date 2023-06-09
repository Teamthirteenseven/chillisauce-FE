import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSrchFloorsAndSpaces } from '../../hooks/adminSpace/useSrchFloorsAndSpaces';
import { useSelectSpace } from '../../hooks/adminSpace/box/useSelectSpace';
import { useSkltTimeout } from '../../hooks/useTimeout';
import Skeleton from '../../components/Skeleton';
import { Column, Row } from '../../components/Flex';
import Page from '../../components/Page';
import IconTitle from '../../components/IconTitle';
import SpaceBackBoard from '../../components/SpaceBackBoard';
import SpaceMainBoard from '../../components/SpaceMainBoard';
import SubMintBtn from '../../components/button/SubMintBtn';
import MainMintBtn from '../../components/button/MainMintBtn';
import Text from '../../components/Text';
import { StSubHeader } from '../../pages/space/SpaceStyles';
import { InfoContain } from '../reservation/ReservationAllStyle';
import AdminSpaceBox from '../../features/adminSpace/AdminSpaceBox';
import AdminList from '../../features/adminSpace/AdminList';
import AdminSelector from '../../features/adminSpace/AdminSelector';

function AdminSpace() {
  const navi = useNavigate();

  const { showSkeleton } = useSkltTimeout();
  const [selectedSpace, setSelectedSpace] = useState(null);
  const type = 'admin';
  const { spaces, floors } = useSrchFloorsAndSpaces(type, setSelectedSpace);
  const { onClickSpaceListHandler, isModal, setIsModal } = useSelectSpace(
    spaces,
    selectedSpace,
    setSelectedSpace,
  );

  return (
    <Page>
      <AdminList
        isModal={isModal}
        setIsModal={setIsModal}
        spaces={spaces}
        floors={floors}
        onClickSpaceListHandler={onClickSpaceListHandler}
      />
      <Column>
        <IconTitle src="space" alt="managementIcon" children="관리하기" />
        <AdminSelector />
      </Column>
      {showSkeleton ? (
        <InfoContain>
          <Skeleton />
        </InfoContain>
      ) : (
        <>
          {spaces.length > 0 ? (
            <>
              {selectedSpace && (
                <AdminSpaceBox
                  spaceId={selectedSpace.spaceId}
                  selectedSpace={selectedSpace}
                  isModal={isModal}
                  setIsModal={setIsModal}
                  spaces={spaces}
                  id={selectedSpace.spaceId}
                />
              )}
            </>
          ) : (
            <>
              <SpaceBackBoard>
                <StSubHeader>
                  <Row></Row>
                  <Row>
                    <SubMintBtn
                      h="43px"
                      pd="8px 16px"
                      onClick={() => {
                        setIsModal(!isModal);
                      }}
                    >
                      <Text shape="T16_600" color="var(--mint_002)">
                        스페이스 관리하기
                      </Text>
                    </SubMintBtn>
                    <MainMintBtn
                      mg="0px 16px"
                      h="43px"
                      pd="8px 16px"
                      onClick={() => navi('/space')}
                    >
                      <Text shape="T16_600" color="var(--white)">
                        완료
                      </Text>
                    </MainMintBtn>
                  </Row>
                </StSubHeader>
                <SpaceMainBoard></SpaceMainBoard>
              </SpaceBackBoard>
            </>
          )}
        </>
      )}
    </Page>
  );
}

export default AdminSpace;
